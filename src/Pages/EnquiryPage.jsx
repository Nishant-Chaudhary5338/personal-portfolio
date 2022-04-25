/** @format */

import React from "react";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import Input from "../Components/Input";
import Button from "../Components/Button";
import RedH3 from "../Components/RedH3";
import GrayH6 from "../Components/GrayH6";
import { Formik, Form } from "formik";
import { object, string } from "yup";
import emailjs from "@emailjs/browser";

function EnquiryPage() {
  const sendEmail = (object) => {
    emailjs
      .send("service_glqvuum", "template_ewvit5p", object, "y6VqMM4L19BUjOBbH")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const validationSchema = object().shape({
    name: string().required(),
    organisation: string().required(),
    email: string().email(),
    goals: string().required(),
    timeline: string().required(),
    budget: string().required(),
  });

  const initialValues = {
    name: "",
    organisation: "",
    email: "",
    goals: "",
    timeline: "",
    budget: "",
  };
  return (
    <div className="flex flex-col">
      <div className="bg-gray-900">
        <Card>
          <div className="space-y-10 sm:flex sm:justify-between sm:px-20 sm:space-y-0">
            <div className="space-y-6">
              <div className="font-serif text-xl font-bold">
                Contact Details
              </div>
              <div className="space-y-2 border-b-2">
                <RedH3>Office Address</RedH3>
                <GrayH6>Meerut, UP</GrayH6>
              </div>
              <div className="space-y-2 border-b-2 ">
                <RedH3>Contact No</RedH3>
                <GrayH6>9560025338</GrayH6>
              </div>
              <div className="space-y-2 border-b-2">
                <RedH3>Email Id</RedH3>
                <GrayH6>nishantchaudhary5338@gmail.com</GrayH6>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="font-serif text-xl font-bold">
                TELL US ABOUT YOUR PROJECT AND GOALS
              </h3>
              <Formik
                onSubmit={sendEmail}
                validationSchema={validationSchema}
                initialValues={initialValues}
              >
                <Form>
                  <div className="space-y-4">
                    <Input id="name" name="name" autoComplete="name" required>
                      What's your Name?
                    </Input>

                    <Input
                      id="organisation"
                      name="organisation"
                      autoComplete="organisation"
                      required
                    >
                      What's your Organisation Name?
                    </Input>

                    <Input
                      id="email"
                      name="email"
                      autoComplete="email"
                      type="email"
                      required
                    >
                      What's your Email Address?
                    </Input>

                    <Input id="goals" name="goals" required>
                      What are your project goals?
                    </Input>

                    <Input
                      id="timeline"
                      name="timeline"
                      required
                      placeholder="In Months"
                      type="number"
                    >
                      Do you have a timeline in mind?
                    </Input>

                    <Input
                      id="budget"
                      name="budget"
                      type="number"
                      required
                      placeholder="In dollars"
                    >
                      What is your budget?
                    </Input>

                    <Button type="submit">Submit</Button>
                    <p className="font-serif text-sm text-semibold">
                      My Team will get back to you soon
                    </p>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </Card>

        <Footer></Footer>
      </div>
    </div>
  );
}

export default EnquiryPage;
