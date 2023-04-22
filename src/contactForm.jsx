import React, { useRef } from "react";
import InputField from "./inputField";
import Textarea from "./textarea";
import SubmitButton from "./submitButton";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_yyi34ca",
        "template_y63e45c",
        form.current,
        "T99rdXwq7RfRvWpTC"
      )
      .then(
        (result) => {
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full space-y-3 lg:space-y-0 p-5 lg:grid gap-5"
      >
        <InputField
          name="name"
          label="Name"
          type="text"
          placeholder="Enter your Name"
        />
        <InputField
          name="email"
          label="Email"
          type="email"
          placeholder="Enter your Email"
        />
        <Textarea />
        <SubmitButton />
      </form>
    </div>
  );
}
