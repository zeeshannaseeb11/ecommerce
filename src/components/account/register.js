import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { v4 as uuidv4 } from "uuid";
import * as Yup from "yup";
import axios from "axios";
import swal from "sweetalert";

const Register = () => {
  let myuuid = uuidv4();

  const initialValues = { email: "", password: "" };

  const validation = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required(<small class="error-msg">Required</small>),
    password: Yup.string().required(
      <small className="error-msg">No Password Provided</small>
    ),
  });

  const submitHandler = async (values) => {
    try {
      await axios.post(`http://localhost:3001/users`, {
        id: myuuid,
        ...values,
      });
      swal("Good job!", "Your account is registered!", "success");
    } catch (error) {
      if (!error.response) {
        alert("server is down");
      } else console.log(error);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validation}
      onSubmit={submitHandler}
    >
      <Form className="form2">
        <label className="label" htmlFor="email">
          Usename or Email Address
        </label>
        <Field className="block" name="email" type="email" />
        <ErrorMessage name="email" />

        <label className="label" htmlFor="password">
          Password
        </label>
        <Field className="block" name="password" type="password" />
        <ErrorMessage name="password" />

        <button className="btn" type="submit">
          Sign Up
        </button>
      </Form>
    </Formik>
  );
};

export default Register;
