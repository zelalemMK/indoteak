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
    <div className="form-container-container">
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-headers">
          <h2>Project Information</h2>
        </div>

        <div className="form-group">
          <h4>Name*</h4>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <h4>Email*</h4>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <h4>Firm</h4>
          <input
            type="text"
            name="firm"
            value={form.firm}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <h4>Project</h4>
          <input
            type="text"
            name="project"
            value={form.project}
            onChange={handleChange}
          />
        </div>

        <div className="form-headers">
          <h2>Shipping Information</h2>
        </div>
        <div className="form-group">
          <h4>Address*</h4>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <h4>City*</h4>
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <h4>State*</h4>
          <input
            type="text"
            name="state"
            value={form.state}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <h4>ZIP Code*</h4>
          <input
            type="text"
            name="zip"
            value={form.zip}
            onChange={handleChange}
            required
          />
        </div>
        <div className="button-continare">
          <Button
            textContent={"Submit"}
            onClick={handleSubmit}
            id="submit-button"
          />
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
