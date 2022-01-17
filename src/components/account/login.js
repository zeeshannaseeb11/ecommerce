import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router";
import { connect } from "react-redux";
import { LoggedIn_user } from "./ducks/actions";
import axios from "axios";

const Login = ({ LoggedIn_user, email }) => {
  let navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const initialValues = { email: "", password: "" };

  const validation = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required(<small className="error-msg">Required</small>),
    password: Yup.string().required(
      <small className="error-msg">No Password Provided</small>
    ),
  });

  const submitHandler = (values) => {
    setLoading(true);
    try {
      const auth = users.filter(
        (user) =>
          values.email === user.email && values.password === user.password
      );
      if (auth.length === 1) {
        const [{ email }] = auth;
        LoggedIn_user(email);
        navigate("/store");
      } else setErrorMsg("email or password is incorrect");
      setLoading(false);
    } catch (error) {
      console.log("error in login");
      setErrorMsg("Something went wrong");
      setLoading(false);
    }
  };

  useEffect(() => {
    async function getUsers() {
      if (!email) {
        const { data } = await axios.get("http://localhost:3001/users");
        setUsers(data);
      }
    }

    getUsers();
    return () => setUsers([]);
  }, []);

  if (isLoading)
    return <ReactLoading type="spin" color="#0000FF" height={100} width={50} />;
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validation}
        onSubmit={submitHandler}
      >
        <Form className="form1">
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
            Login
          </button>
          {errorMsg && <div className="error-msg">{errorMsg}</div>}
        </Form>
      </Formik>
    </>
  );
};

const mapStateToProps = (state) => ({ email: state.auth.email });

export default connect(mapStateToProps, {
  LoggedIn_user,
})(Login);
