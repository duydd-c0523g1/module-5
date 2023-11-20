import React from "react";
import * as Yup from "yup"
import { Formik, Form, Field, ErrorMessage } from "formik";
function ContactForm() {
  const initValues = {
    fullName: "",
    email: "",
    phone: "",
  };
  const validateObject = {
    fullName: Yup.string().required("Tên không được để trống"),
    email: Yup.string().required("Email không được để trống")
  }

  return (
    <div>
      <h1>Contact Form</h1>
      <Formik initialValues={initValues}></Formik>
    </div>
  );
}
export default ContactForm;
