import React, { useState } from "react";
import "./form.css";

export default function Form() {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        birthday: "",
    });
    const [submitted, setSumitted] = useState(false);
    const [valid, setValid] = useState(false)

    const handleFirstNameInputChange = (event) => {
      setValues({...values, firstName: event.target.value})
    }

    const handleLastNameInputChange = (event) => {
      setValues({...values, lastName: event.target.value})
    }

    const handleEmailInputChange = (event) => {
      setValues({...values, email: event.target.value})
    }

    const handleBirthdayInputChange = (event) => {
      setValues({...values, birthday: event.target.value})
    }

    const handleAddressInputChange = (event) => {
      setValues({...values, address: event.target.value})
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      if(values.firstName && values.lastName && values.email && values.address && values.address) {
        setValid(true);
      }
      setSumitted(true);
    }
  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {/* Uncomment the next line to show the success message */}
        {submitted && valid ? <div className="success-message">Success! Thank you for registering</div> : null}
        <input
          onChange={handleFirstNameInputChange}
          id={values.firstName}
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && !values.firstName ? <span id="first-name-error">Please enter a first name</span> : null}
        <input
          onChange={handleLastNameInputChange}
          id={values.lastName}
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && !values.lastName ? <span id="last-name-error">Please enter a last name</span> : null}
        <input
          onChange={handleEmailInputChange}
          id={values.email}
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && !values.email ? <span id="email-error">Please enter an email address</span> : null}
        <input
          onChange={handleAddressInputChange}
          id={values.address}
          className="form-field"
          type="text"
          placeholder="Address"
          name="address"
        />
        {submitted && !values.address ? <span id="address-error">Please enter an address</span> : null}
        <input
          onChange={handleBirthdayInputChange}
          id={values.birthday}
          className="form-field"
          type="date"
          name="birthday"
        />
        {submitted && !values.birthday ? <span id="birthday-error">Please enter your birthday</span> : null}
        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}