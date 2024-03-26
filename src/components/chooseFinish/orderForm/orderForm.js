import React, { useState } from "react";
import "./orderForm.css";

const OrderForm = ({ setSubmitted }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  // State for form fields and form errors
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

  const [errors, setErrors] = useState({});

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    // Required fields
    const requiredFields = ["name", "email", "address", "city", "state", "zip"];

    requiredFields.forEach((field) => {
      if (!form[field].trim()) {
        newErrors[field] = "This field is required";
      }
    });

    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Form is valid if no errors
  };

  // Handle change in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setIsSubmitting(true);
    if (validateForm()) {
      try {
        const response = await fetch("http://localhost:3001/send-form", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });
        if (response.ok) {
          console.log("Form sent successfully");
          // Reset form or provide further user feedback
        } else {
          console.error("Form submission failed");
          console.error(response);
          // Handle server errors or provide feedback
        }
      } catch (error) {
        console.error("Error sending form:", error);
        // Handle network errors or provide feedback
      }
    }
  };

  return (
    <div className="form-container-container">
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-headers">
          <h4 className="form-sub-header">Project Information</h4>
        </div>

        <div className="form-group">
          <p>Name*</p>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>

        <div className="form-group">
          <p>Email*</p>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>

        <div className="form-group">
          <p>Firm</p>
          <input
            type="text"
            name="firm"
            value={form.firm}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <p>Project</p>
          <input
            type="text"
            name="project"
            value={form.project}
            onChange={handleChange}
          />
        </div>

        <div className="form-headers">
          <h4 className="form-sub-header">Shipping Information</h4>
        </div>

        <div className="form-group">
          <p>Address*</p>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            required
          />
          {errors.address && <div className="error">{errors.address}</div>}
        </div>

        <div className="form-group">
          <p>City*</p>
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            required
          />
          {errors.city && <div className="error">{errors.city}</div>}
        </div>

        <div className="form-group">
          <p>State*</p>
          <input
            type="text"
            name="state"
            value={form.state}
            onChange={handleChange}
            required
          />
          {errors.state && <div className="error">{errors.state}</div>}
        </div>

        <div className="form-group">
          <p>ZIP Code*</p>
          <input
            type="text"
            name="zip"
            value={form.zip}
            onChange={handleChange}
            required
          />
          {errors.zip && <div className="error">{errors.zip}</div>}
        </div>

        <div className="button-container">
          {!isSubmitting && (
            <button type="submit" className="submit-button" id="submit-button">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default OrderForm;