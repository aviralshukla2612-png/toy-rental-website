import React, { useState } from "react";
import axios from "axios";
import { API } from "../../config/api";

const AddProductModal = ({
  isOpen,
  onClose,
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

      await axios.post(
        `${API}/api/products`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

      alert("Product Added Successfully");

      fetchProducts();
      onClose();

    } catch (error) {
      console.log(error);
      alert("Failed To Add Product");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <div className="bg-white w-full max-w-3xl rounded-xl shadow-xl p-6 overflow-y-auto max-h-[90vh]">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-bold">
            Add Product
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
            placeholder="Product Title"
            value={formData.title}
            onChange={handleChange}
            required
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            required
            className="border p-3 rounded-lg"
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            required
            className="border p-3 rounded-lg"
          />

          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={formData.stock}
            onChange={handleChange}
            required
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            name="age"
            placeholder="Age Group"
            value={formData.age}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            name="benefit"
            placeholder="Benefits"
            value={formData.benefit}
            onChange={handleChange}
            required
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            name="include"
            placeholder="Includes"
            value={formData.include}
            onChange={handleChange}
            required
            className="border p-3 rounded-lg"
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
            className="border p-3 rounded-lg"
          />

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="4"
            className="border p-3 rounded-lg md:col-span-2"
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
            className="bg-blue-600 text-white py-3 rounded-lg md:col-span-2 hover:bg-blue-700"
          >
            Add Product
          </button>

        </form>

      </div>

    </div>
  );
};

export default AddProductModal;