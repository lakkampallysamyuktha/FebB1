import { useState } from "react";
import "./RegistrationForm.css";
export default RegistrationForm;

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
    dob: "",
    address: "",
    city: "",
    state: "",
    zipCode: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration Successful!");
  };

  return (
    <div className="form-container">
      <div className="form-card">
        
        {/* HEADER */}
        <div className="form-header">
          <h1>Stackly</h1>
          <h3>REGISTRATION FORM</h3>
        </div>

        <form onSubmit={handleSubmit}>

          {/* PERSONAL INFO */}
          <h2 className="section-title">PERSONAL INFORMATION</h2>

          <div className="form-grid">
            <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
            <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />

            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />

            <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />

            <select name="gender" value={formData.gender} onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* CONTACT INFO */}
          <h2 className="section-title">CONTACT INFORMATION</h2>

          <div className="form-grid">
            <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />

            <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
            <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} required />

            <input type="text" name="zipCode" placeholder="Zip Code" value={formData.zipCode} onChange={handleChange} required />
          </div>

          <button type="submit" className="submit-btn">
            Register
          </button>
        </form>

      </div>
    </div>
  );
}

