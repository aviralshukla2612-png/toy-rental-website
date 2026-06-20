import React, { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../../config/api";

const EditProductModal = ({
  isOpen,
  onClose,
  product,
  fetchProducts,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    age: "",
    benefit: "",
    include: "",
    category: "",
    stock: "",
    price: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (product) {
      setFormData({
        title: product.title || "",
        description: product.description || "",
        age: product.age || "",
        benefit: product.benefit || "",
        include: product.include || "",
        category: product.category || "",
        stock: product.stock || "",
        price: product.price || "",
      });

      setPreview(
        product.image
          ? `${API}/uploads/${product.image}`
          : ""
      );
    }
  }, [product]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const data = new FormData();

      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      if (image) {
        data.append("image", image);
      }

      await axios.put(
        `${API}/api/products/${product._id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

      alert("Product Updated Successfully");

      fetchProducts();
      onClose();

    } catch (error) {
      console.log(error);
      alert("Failed To Update Product");
    }
  };

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <div className="bg-white w-full max-w-3xl rounded-xl shadow-xl p-6 overflow-y-auto max-h-[90vh]">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-bold">
            Edit Product
          </h2>

          <button
            onClick={onClose}
            className="text-red-500 text-xl"
          >
            ✕
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Product Title"
            className="border p-3 rounded-lg"
            required
          />

          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            className="border p-3 rounded-lg"
            required
          />

          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            className="border p-3 rounded-lg"
            required
          />

          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            placeholder="Stock"
            className="border p-3 rounded-lg"
            required
          />

          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Age Group"
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            name="benefit"
            value={formData.benefit}
            onChange={handleChange}
            placeholder="Benefits"
            className="border p-3 rounded-lg"
            required
          />

          <input
            type="text"
            name="include"
            value={formData.include}
            onChange={handleChange}
            placeholder="Includes"
            className="border p-3 rounded-lg"
            required
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
            className="border p-3 rounded-lg"
          />

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            rows="4"
            className="border p-3 rounded-lg md:col-span-2"
            required
          />

          {preview && (
            <div className="md:col-span-2">
              <img
                src={preview}
                alt="Preview"
                className="w-40 h-40 object-cover rounded-lg border"
              />
            </div>
          )}

          <button
            type="submit"
            className="bg-yellow-500 text-white py-3 rounded-lg md:col-span-2 hover:bg-yellow-600"
          >
            Update Product
          </button>

        </form>

      </div>

    </div>
  );
};

export default EditProductModal;
