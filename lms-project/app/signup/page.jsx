"use client";

import React, {useState} from "react";
import InputField from "../../components/global/input-fields";
import Button from "../../components/global/button";


export default function SignupPage(){
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const res = await fetch("/api/register", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formData),
    });
    const data = await res.json();

    if(!res.ok) {
      setError(data.message || "Something went wrong");
    } else {
      setSuccess("Registration successful!");
      setFormData({name: "", email: "", password: ""});
    }
  };

  return (
    <div style={{maxWidth: "400px", margin: "40px auto"}}>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
        />

        <InputField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />

        <InputField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />

        <Button type="submit">Register</Button>
      </form>

      {error && <p style={{color:"red", marginTop:"10px"}}>{error}</p>}
      {success && <p style={{color:"green", marginTop:"10px"}}>{success}</p>}
    </div>
  )
}