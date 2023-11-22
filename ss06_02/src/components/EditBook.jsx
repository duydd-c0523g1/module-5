import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import { editBook, getBookById } from "../sẻvices/DbApi";
import {Formik,Form,ErrorMessage,Field} from "formik";
import * as Yup from "yup";

export default function EditBook(){
    const {id} = useParams();
    const [bookEdited, setBookEdited] = useState();
    const navigation = useNavigate();
    const getDataEdit = async () => {
        const reponse = await getBookById(id);
        setBookEdited(reponse);
        console.log(reponse);
    }
    const validation = Yup.object({
        title: Yup.string().required("Required"),
        quantity: Yup.number().required("Required")
                                .min(1, "Must be greater than 0")
    })
    const handleSubmit = async (value) => {
        const reponse = await editBook(value);
        navigation("/");
    }
    useEffect(() => {
        getDataEdit()
    },[])
    if (!bookEdited){
        return null;
    } else {
        return (
            <>
            <h2>Edit {bookEdited.title}</h2>
            <Formik
                initialValues={bookEdited}
                onSubmit={handleSubmit}
                validationSchema={validation}>
                <Form>
                    <div className="input">
                        <label htmlFor="title">Title</label><br/>
                        <Field type="text" name="title"/><br/>
                        <ErrorMessage name="title" component="span"/>
                    </div>
                    <div className="input">
                        <label htmlFor="quantity">Title</label><br/>
                        <Field type="number" name="quantity"/><br/>
                        <ErrorMessage name="quantity" component="span"/>
                    </div>
                    <button type="button" onClick={() => {navigation("/")}}>MainPage</button>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
            </>
        )
    }
}