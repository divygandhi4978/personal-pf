"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", org: "", msg: "" });

  const [err, setErr] = useState(0);
  const [record, setRecord] = useState(0);

  const handelChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const FormField = ({ number, tag, type, id, placeholder }) => {
    return (
      <div>
        <hr />
        <div className="flex justify-baseline items-center mt-2 sm:mt-8">
          <div>
            <h1 className="m-5 sm:m-10 text-[#9C6A8C] font-bold">{number}</h1>
          </div>
          <div className="w-full">
            <h1 className="mx-5 mt-8 sm:mt-10 mb-3 text-2xl sm:text-3xl font-medium">
              {tag}
            </h1>
            <div className="ml-5 sm:mb-12 mb-9">
              <input
                type={type}
                onChange={(e) => {
                  handelChange(id, e.target.value);
                }}
                value={form[id]}
                name="txt"
                id={id}
                placeholder={placeholder}
                className=" text-[#b0b0b2] py-3 outline-0 text-xl sm:text-2xl font-medium w-full overflow-auto"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const checkData = () => {
    if (record) {
      return;
    }
    if (form.name == "" || form.email == "" || form.msg == "") {
      setErr(1);
      return;
    }
    setRecord(1);
  };

  return (
    <div>
      <h1 className="text-start max-w-2xl sm:text-6xl text-5xl font-medium mt-30 mb-10">
        Let's start a project together
      </h1>

      <FormField
        number="01"
        tag="What's your name?"
        type="text"
        value={form.name}
        id="name"
        placeholder="Rohit Sharma*"
      />
      <FormField
        number="02"
        tag="What's your email?"
        type="email"
        value={form.email}
        id="email"
        placeholder="rohit@mail.com"
      />
      <FormField
        number="03"
        tag="What's the name of your organization?
"
        type="text"
        value={form.org}
        id="org"
        placeholder="Rohit Sharma Pvt Ltd."
      />
      <FormField
        number="04"
        tag="Your message
"
        type="text"
        value={form.msg}
        id="msg"
        placeholder="Hello Divy, Can you help me with... *"
      />

      {err == 1 && (
        <div className="text-red-500 ml-10 text-xl flex justify-end">
          <h5>Please enter valid Details.</h5>
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
