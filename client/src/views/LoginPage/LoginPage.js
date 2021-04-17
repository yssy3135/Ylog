import React from 'react'
import { Formik } from "formik";
import * as Yup from 'yup';


const initialId = localStorage.getItem("rememberMe") ? localStorage.getItem("rememberMe") : '';

function LoginPage() {
    return (
        <Formik>
            initialValues={{
                id: initialId,
                password: '',
            }}



        </Formik>
    )
}

export default LoginPage
