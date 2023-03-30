import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import "./Form.css";
import { useState } from "react";

const Form = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [isSubmit, setIsSubmit] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(formValues))
    setIsSubmit(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  
  };

  const validate = (values) => {
    const error = {};
    const regex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!values.username) {
        error.username = "Please enter name"
    }

    if(!values.email) {
        error.email = "Please Enter Email"
    }else if(!regex.test(values.email)){
        error.email = "Email is not valid"

    }

    if(!values.password) {
        error.password = "Please enter password"
    }else if(values.password.length < 4){
        error.password = "Password must be greater than 4"

    }else if(values.password.length > 10){
        error.password = "Password must be smaller than 10"

    }
    return error;
  }

  return (
    <>
      {Object.keys(errors).length === 0 && isSubmit ? (
        <div>Login Success</div>
      ) : (
        <>
          {/* <pre>{JSON.stringify(formValues, undefined, 5)}</pre> */}
          <div className="container">
            <div className="header">
              <ul>
                <li>
                  <TextField
                    placeholder="Name"
                    name="username"
                    value={formValues.username}
                    onChange={handleChange}
                  />
                    <p>{errors.username}</p>
                </li>
                <li>
                  <TextField
                    placeholder="Email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                  />
                   <p>{errors.email}</p>
                </li>
                <li>
                  <TextField
                    placeholder="Password"
                    name="password"
                    value={formValues.password}
                    onChange={handleChange}
                  />
                   <p>{errors.password}</p>
                </li>
              </ul>
              <Button
                onClick={handleSubmit}
                style={{ width: "225px" }}
                variant="contained"
              >
                Submit
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Form;
