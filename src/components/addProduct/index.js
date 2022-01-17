import React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";

const AddProduct = () => {
  const initialValues = {
    product_name: "",
    description: "",
    unit_in_stock: "",
  };

  const validation = Yup.object({
    product_name: Yup.string().required(
      <small className="error-msg">Required</small>
    ),
    description: Yup.string().required(
      <small className="error-msg">Enter detailed description</small>
    ),
    unit_in_stock: Yup.string().required(
      <small className="error-msg">Required</small>
    ),
  });

  const submitHandler = (values) => {
    console.log(values);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validation}
        onSubmit={submitHandler}
      >
        <Form className="add_product ">
          <div className="add_product-form">
            <label className="label">Enter the Product Name</label>
            <Field className="block" name="product_name" type="text" />
            <ErrorMessage name="product_name" />

            <label className="label">Enter Description</label>
            <Field className="block" name="description" type="text" />
            <ErrorMessage name="description" />

            <label className="label">Units In Stock</label>
            <Field className="block" name="unit_in_stock" type="text" />
            <ErrorMessage name="unit_in_stock" />

            <button className="btn" type="submit">
              Add Product
            </button>
          </div>
          <div className="upload_pic">
            <label className="label">Upload Product Image</label>

            <input type="file" name="file" className="file"></input>
          </div>

          {/* {errorMsg && <div className="error-msg">{errorMsg}</div>} */}
        </Form>
      </Formik>
    </>
  );
};

export default AddProduct;
