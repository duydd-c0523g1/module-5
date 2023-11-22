import { useNavigate } from "react-router-dom";
import { createBook } from "../sẻvices/DbApi";
import * as Yup from "yup";
import { Formik, Form, ErrorMessage, Field } from "formik";

export default function CreateBook() {
  const navigation = useNavigate();
  const validation = Yup.object({
    title: Yup.string().required("Please fill the book name"),
    quantity: Yup.number()
      .required("Please enter the book quantity")
      .min(1, "The quantity over than 0"),
  });
  const handleSubmit = async (value) => {
    const reponse = await createBook(value);
    console.log(value);
    navigation("/");
  };
  return (
    <>
      <h2>Create book</h2>
      <Formik
        initialValues={{}}
        onSubmit={handleSubmit}
        validationSchema={validation}
      >
        <Form>
          <div className="input">
            <label htmlFor="title">Title</label>
            <br />
            <Field type="text" name="title" />
            <br />
            <ErrorMessage name="title" component="span" />
          </div>
          <div className="input">
            <label htmlFor="quantity">Title</label>
            <br />
            <Field type="number" name="quantity" />
            <br />
            <ErrorMessage name="quantity" component="span" />
          </div>
          <button
            type="button"
            onClick={() => {
              navigation("/");
            }}
          >
            Back
          </button>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
}
