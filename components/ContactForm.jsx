"use client";
import React, { useState } from "react";
import FormField from "./FormField";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", org: "", msg: "" });

  const [err, setErr] = useState(0);
  const [errMsg, setErrMsg] = useState("");
  const [record, setRecord] = useState(0);

  const checkData = () => {
    setErr(0);
    if (record) {
      return;
    }

    var error = "";
    if (!form.name.trim()) {
      error = "Name is required.";
    } else if (form.name.length < 2 || form.name.length > 50) {
      error = "Name should be 2–50 characters.";
    } else if (!form.email.trim()) {
      error = "Email is required.";
    } else if (!form.msg.trim()) {
      error = "Message is required.";
    } else if (form.msg.length < 10) {
      error = "Message sould be Larger";
    }

    if (error) {
      console.log(error);
      setErr(1);
      setErrMsg(error);
    } else {
      sendData();
      setRecord(1);
    }
  };

  const sendData = async () => {
    await fetch("/api/save-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
  };

  const handelChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="font-mono pt-2 sm:pt-10" id="Contact">
      <h1 className="text-start max-w-2xl sm:text-6xl text-4xl font-light mt-30 mb-10 max-sm:font-bold">
        Let's start a project together
      </h1>

      <FormField
        number="01"
        tag="What's your name?"
        type="text"
        value={form.name}
        onChange={handelChange}
        id="name"
        placeholder="Rohit Sharma*"
      />
      <FormField
        number="02"
        tag="What's your email?"
        type="email"
        onChange={handelChange}
        value={form.email}
        id="email"
        placeholder="rohit@mail.com"
      />
      <FormField
        number="03"
        tag="What's the name of your organization?"
        type="text"
        value={form.org}
        onChange={handelChange}
        id="org"
        placeholder="Rohit Sharma Pvt Ltd."
      />
      <FormField
        number="04"
        tag="Your message"
        type="text"
        onChange={handelChange}
        value={form.msg}
        id="msg"
        placeholder="Hello Divy, Can you help me with... *"
      />

      {err == 1 && (
        <div className="text-red-500 ml-10 text-xl flex justify-end">
          <div>
            <h5>Please enter valid Details.</h5>
            <h5>{errMsg}</h5>
          </div>
        </div>
      )}

      <div className="relative mt-20">
        <hr />
        <div className="flex justify-end relative right-8 sm:right-25 sm:-top-15 -top-8 ">
          <button
            type="submit"
            className="relative font-light text-3xl p-4 sm:p-10 bg-[#195CBA] hover:bg-[#513063] rounded-full hover:scale-95 transition-all ease-in duration-75"
            onClick={checkData}
          >
            {record ? "Recorded.!" : "Send It!"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
