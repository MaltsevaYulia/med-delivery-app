"use client";
import React from "react";
import { Form, Formik } from "formik";
import TextField from "./Formik/TextField";

import validationSchema from "../../schemas/validationSchema";

import styles from "./CartForm.module.css";

const CartForm = () => {
  async function handleSubmit(values, actions) {
    // try {
    //   const response = await fetch("api/contact-me", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Accept: "application/json",
    //     },
    //     body: JSON.stringify(values),
    //   });
    //   const result = await response.json();
    //   if (result.success) {
    //     console.log(result);
    //     actions.resetForm();
    //   } else {
    //     console.error("Submission failed:", result);
    //   }
    // } catch (error) {
    //   console.error("Error submitting form:", error);
    // }
  }

  return (
    <div className={styles.formBox}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          adress: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => handleSubmit(values, actions)}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <TextField
              label="name"
              name="name"
              type="text"
              placeholder="Name"
            />
            <TextField
              label="email"
              name="email"
              type="text"
              placeholder="Email"
            />
            <TextField
              label="phone"
              name="phone"
              type="tel"
              placeholder="Phone"
            />
            <TextField
              label="adress"
              name="adress"
              type="tel"
              placeholder="Adress"
            />

            <button
              className={styles.btn}
              type="submit"
              disabled={isSubmitting}
              arial-label="send message"
            >
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CartForm;
