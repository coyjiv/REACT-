import React from 'react';
import {Field, Form, Formik} from "formik";
import BasicFormSchema from "../BasicFormSchema/BasicFormSchema";

const CartForm = (props) => {
const{cart,all} = props;
    return(
        <div className="container">
            <h1>Contact info</h1>
            <Formik
                initialValues={{
                    name: "",
                    surname: "",
                    age: "",
                    address: "",
                    phoneNumber: "",
                }}
                validationSchema={BasicFormSchema}
                onSubmit={values => {
                    localStorage.removeItem("cart")
                    console.log(values)
                    const products = []
                    all.map((object)=>{
                        for(let c=0; c<cart.length;c++){
                            if (+cart[c]===object.article){
                                products.push(object);
                            }
                        }
                    })


                    console.log(products)
                }}
                render={({ errors, touched }) => (
                    <Form className="form-container">
                        <label htmlFor="name">Name</label>
                        <Field
                            name="name"
                            placeholder="Enter your name"
                            type="text"
                        />

                        {
                            errors.name &&
                            touched.name && <div className="field-error">{errors.name}</div>}

                        <label htmlFor="surname">Surname</label>
                        <Field name="surname" placeholder="Enter your surname" type="text" />

                        {errors.surname &&
                        touched.surname && (
                            <div className="field-error">{errors.surname}</div>
                        )}

                        <label htmlFor="age">Age</label>
                        <Field name="age" placeholder="Enter your age" type="text" />

                        {errors.age &&
                        touched.age && (
                            <div className="field-error">{errors.age}</div>
                        )}

                        <label htmlFor="address">Address</label>
                        <Field name="address" placeholder="Enter your address" type="text" />

                        {errors.address &&
                        touched.address && (
                            <div className="field-error">{errors.address}</div>
                        )}

                        <label htmlFor="phoneNumber">Phone Number</label>
                        <Field name="phoneNumber" placeholder="Enter your address" type="text" />

                        {errors.phoneNumber &&
                        touched.phoneNumber && (
                            <div className="field-error">{errors.phoneNumber}</div>
                        )}

                        <button type="submit">Checkout</button>
                    </Form>)}
               />
        </div>   )
}

export default CartForm;