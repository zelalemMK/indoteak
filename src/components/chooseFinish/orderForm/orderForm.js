import React, { useState } from "react";

import "./orderForm.css"
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
    <form onSubmit={handleSubmit}>
      <h2>Project Information</h2>
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
      <label>
        Firm
        <input
          type="text"
          name="firm"
          value={form.firm}
          onChange={handleChange}
        />
      </label>
      <label>
        Project
        <input
          type="text"
          name="project"
          value={form.project}
          onChange={handleChange}
        />
      </label>

      <h2>Shipping Information</h2>
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

      <Button textContent={"Submit"} onClick={handleSubmit} />
    </form>
  );
};

export default OrderForm;
