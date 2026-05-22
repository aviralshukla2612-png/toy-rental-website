import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../context/DataProvider";


export default function Cart() {
  const { cart, clearCart } = useData(); 

  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    address: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("");
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + (item.price || 299), 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOrder = () => {
    if (!form.name || !form.phone || !form.city || !form.address) {
      alert("Please fill all address details ");
      return;
    }

    if (!paymentMethod) {
      alert("Select payment method ");
      return;
    }

   
    console.log("Order Data:", {
      customer: form,
      items: cart,
      payment: paymentMethod,
      total,
    });

    
    clearCart();

    
    navigate("/thankyou");
  };

  return (
    <>
    <div className="bg-gray-100 p-5">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">

     
      <div className="w-full md:w-2/3">

        <h1 className="text-2xl font-bold mb-5">Cart</h1>

        {cart.map((item, index) => (
          <div key={index} className="flex flex-col sm:flex-row gap-5 border p-4 mb-4 rounded">
            <img src={item.img} className="w-24 h-24 object-contain" />
            <div>
              <h2 className="font-semibold">{item.title}</h2>
              <p className="text-gray-600">₹{item.price || 299}</p>
            </div>
          </div>
        ))}

       
        <div className="border p-5 rounded mb-5">
          <h2 className="text-xl font-bold mb-4">Delivery Address</h2>

          <input name="name" placeholder="Full Name" onChange={handleChange} className="w-full border p-2 mb-3 rounded"/>
          <input name="phone" placeholder="Phone Number" onChange={handleChange} className="w-full border p-2 mb-3 rounded"/>
          <input name="city" placeholder="City" onChange={handleChange} className="w-full border p-2 mb-3 rounded"/>
          <textarea name="address" placeholder="Full Address" onChange={handleChange} className="w-full border p-2 rounded"/>
        </div>

        
        <div className="border p-5 rounded ">
          <h2 className="text-xl font-bold mb-4">Payment Options</h2>

          <div className="space-y-3">
            <label className="flex gap-2">
              <input type="radio" name="payment" onChange={() => setPaymentMethod("UPI")} />
              UPI (GPay / PhonePe)
            </label>

            <label className="flex gap-2">
              <input type="radio" name="payment" onChange={() => setPaymentMethod("Card")} />
              Debit / Credit Card
            </label>

            <label className="flex gap-2">
              <input type="radio" name="payment" onChange={() => setPaymentMethod("Net Banking")} />
              Net Banking
            </label>

            <label className="flex gap-2">
              <input type="radio" name="payment" onChange={() => setPaymentMethod("COD")} />
              Cash on Delivery
            </label>
          </div>
        </div>

      </div>

      
      <div className="w-full md:w-1/3 border p-5 rounded h-fit">
        <h2 className="text-xl font-bold mb-4">Price Details</h2>

        <div className="flex justify-between mb-2">
          <span>Items ({cart.length})</span>
          <span>₹{total}</span>
        </div>

        <div className="flex justify-between mb-2">
          <span>Delivery</span>
          <span className="text-green-600">FREE</span>
        </div>

        <hr className="my-3" />

        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>₹{total}</span>
        </div>

        <button
          onClick={handleOrder}
          className="w-full mt-5 bg-pink-500 hover:bg-pink-600 text-white py-3 rounded font-semibold">PLACE ORDER</button>
      </div>

    </div>
    </div>
    </>
  );
}