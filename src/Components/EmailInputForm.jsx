/** @format */

import React from "react";
import Input from "./Input";
import Button from "./Button";
import { Formik, Form } from "formik";
import { object, string } from "yup";
import emailjs from "@emailjs/browser";

function EmailInputForm(props) {
  const sendEmail = (object) => {
    emailjs
      .send("service_glqvuum", "template_bf853b9", object, "y6VqMM4L19BUjOBbH")
      .then(
        (result) => {
          console.log(result.text);
          props.handleClose();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const validationSchema = object().shape({
    email: string().email().required(),
    content: string().required(),
    subject: string().required(),
  });
  const initialValues = {
    email: "",
    content: "",
    subject: "",
  };
  const reset = {
    email: "",
    content: "",
    subject: "",
  };
  return (
    <div className="flex ">
      <div className="p-10 mx-auto bg-gray-300 rounded-md ">
        <Formik
          onSubmit={sendEmail}
          validationSchema={validationSchema}
          initialValues={initialValues}
        >
          <Form>
            <Input
              name="email"
              id="email"
              type="email"
              placeholder="Email"
              autoComplete="email"
              required
            >
              Your Email Address
            </Input>
            <Input name="subject" id="subject" placeholder="Subject" required>
              Subject
            </Input>
            <Input name="content" id="content" required>
              Lets work together
            </Input>
            <div>
              <div className="space-x-4">
                <Button type="submit">Submit</Button>
                <Button theme="cancel" onClick={props.close}>
                  Cancel
                </Button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default EmailInputForm;
