import React, { useRef, useState } from "react";
import InputField from "./inputField";
import Textarea from "./textarea";
import SubmitButton from "./submitButton";
import emailjs from "@emailjs/browser";
import Tick from "./assets/svgs/tick";

export default function ContactForm() {
  const form = useRef();
  const [successModal, setSuccessModal] = useState(false)
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
          setSuccessModal(true)
          setTimeout(() => {
            setSuccessModal(false);
          }, 2000);
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
      <div className={`${successModal ? 'fixed' : 'hidden'} inset-0 w-full h-screen backdrop-blur-sm justify-center items-center flex p-5`}>
          <div className="w-3/4 h-1/3 flex flex-col items-center border border-primary rounded-md">
            <Tick />
            <div>
              <span>Message Sent Successfully</span>
            </div>
          </div>
      </div>
    </div>
  );
}
