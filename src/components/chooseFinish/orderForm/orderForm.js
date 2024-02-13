import React, { useState } from "react";

import "./orderForm.css";
import Button from "../../button/button";

const OrderForm = () => {
  // State for form fields
  const [form, setForm] = useState({
    name: "",
    email: "",
    firm: "",
    project: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  // Handle change in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data here
    // WIP
    console.log(form);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        <h2>Project Information</h2>

        <div className="form-group">
          <label>
            Name*
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Email*
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Firm
            <input
              type="text"
              name="firm"
              value={form.firm}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Project
            <input
              type="text"
              name="project"
              value={form.project}
              onChange={handleChange}
            />
          </label>
        </div>

        <h2>Shipping Information</h2>
        <div className="form-group">
          <label>
            Address*
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            City*
            <input
              type="text"
              name="city"
              value={form.city}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            State/Province*
            <input
              type="text"
              name="state"
              value={form.state}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            ZIP/Postal Code*
            <input
              type="text"
              name="zip"
              value={form.zip}
              onChange={handleChange}
              required
            />
          </label>
        </div>
      </form>
      <Button textContent={"Submit"} onClick={handleSubmit} />
    </div>
  );
};

export default OrderForm;
