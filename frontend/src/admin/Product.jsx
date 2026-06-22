import React, { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../config/api";
import AddProductModal from "../component/Admin/AddProductModal";
import EditProductModal from "../component/Admin/EditProductModal";
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaSearch,
} from "react-icons/fa";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showEditModal, setShowEditModal] = useState(false);
const [selectedProduct, setSelectedProduct] = useState(null);

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, [search, page]);

  const fetchProducts = async () => {
  setLoading(true);

  try {
     const res = await axios.get(
  `${API}/api/products?search=${search}&page=${page}&limit=5`
);

      setProducts(res.data.data);
      setTotalPages(res.data.totalPages || 1);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this product?"
    );

    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");

     await axios.delete(
  `${API}/api/products/${id}`,
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

      fetchProducts();
    } catch (error) {
      console.log(error);
      alert("Delete Failed");
    }
  };
if (loading) {
  return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  );
}
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Product Management
          </h1>

          <p className="text-gray-500">
            Manage all rental products
          </p>
        </div>

       <button
  onClick={() => setShowModal(true)}
  className="flex items-center justify-center gap-2 w-full md:w-auto bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition"
>
  <FaPlus />
  Add Product
</button>

      </div>

      {/* Search */}
   <div className="relative mb-6 max-w-full">

        <FaSearch className="absolute left-4 top-4 text-gray-400" />

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => {
            setPage(1);
            setSearch(e.target.value);
          }}
          className="w-full border border-gray-300 rounded-lg pl-12 p-3 focus:ring-2 focus:ring-blue-500 outline-none"
        />

      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-md overflow-x-auto">

       <table className="min-w-[700px] w-full">

          <thead className="bg-gray-100">

            <tr>
              <th className="p-4 text-left">Image</th>
              <th className="p-4 text-left">Title</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Stock</th>
              <th className="p-4 text-left">Price</th>
              <th className="p-4 text-center">Actions</th>
            </tr>

          </thead>

          <tbody>

            {products.length > 0 ? (
              products.map((product) => (
                <tr
                  key={product._id}
                  className="border-t hover:bg-gray-50"
                >

                  <td className="p-4">

                 <img
  src={
    product.image
      ? `${API}/uploads/${product.image}`
      : "/no-image.png"
  }
  alt={product.title}
  className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-lg border"
/>
                   

                  </td>

                  <td className="p-4 font-medium">
                    {product.title}
                  </td>

                  <td className="p-4">
                    {product.category}
                  </td>

                  <td className="p-4">
                    {product.stock}
                  </td>

                  <td className="p-4">
                    ₹{product.price}
                  </td>

                  <td className="p-4">

                    <div className="flex justify-center flex-wrap gap-2">

  <button
  onClick={() => {
    setSelectedProduct(product);
    setShowEditModal(true);
  }}
  className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition"
>
  <FaEdit />
</button>
                      <button
                        onClick={() =>
                          handleDelete(product._id)
                        }
                        className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                      >
                        <FaTrash />
                      </button>
      

                    </div>

                  </td>

                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="text-center p-10"
                >
                  No Products Found
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">

  <button
    disabled={page === 1}
    onClick={() => setPage(page - 1)}
    className="bg-gray-200 px-4 py-2 rounded disabled:opacity-50 hover:bg-gray-300"
  >
    Previous
  </button>

  <span className="font-semibold text-gray-700 text-center">
    Page {page} of {totalPages}
  </span>

  <button
    disabled={page === totalPages}
    onClick={() => setPage(page + 1)}
    className="bg-gray-200 px-4 py-2 rounded disabled:opacity-50 hover:bg-gray-300"
  >
    Next
  </button>

</div>
      <AddProductModal
  isOpen={showModal}
  onClose={() => setShowModal(false)}
  fetchProducts={fetchProducts}
/>
<EditProductModal
  isOpen={showEditModal}
  onClose={() => setShowEditModal(false)}
  product={selectedProduct}
  fetchProducts={fetchProducts}
/>

    </div>
  );
};

export default Product;