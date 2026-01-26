"use client";
import React, { useState } from "react";
import FormField from "./FormField";
import Footer from "./Footer";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", org: "", msg: "" });
  const [err, setErr] = useState(0);
  const [errMsg, setErrMsg] = useState("");
  const [record, setRecord] = useState(0);

  const checkData = () => {
    setErr(0);
    if (record) return;

    let error = "";
    if (!form.name.trim()) {
      error = "Identity check failed: Name is required.";
    } else if (form.name.length < 2 || form.name.length > 50) {
      error = "Name parameter outside bounds (2-50 chars).";
    } else if (!form.email.trim()) {
      error = "Communication channel required: Email is missing.";
    } else if (!form.msg.trim()) {
      error = "Data packet empty: Message is required.";
    } else if (form.msg.length < 10) {
      error = "Message payload too small.";
    }

    if (error) {
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
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
  };

  const handelChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-24 bg-black border-t border-white/5" id="Contact">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header: Bold & Expansive */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8 font-sans">
          <div className="space-y-4">
            <span className="text-[#562e66] font-mono text-xs font-bold uppercase tracking-[0.4em]">
              Initialization // Outreach
            </span>
            <h2 className="text-5xl md:text-8xl font-semibold tracking-tighter text-white leading-none">
              Let's build.
            </h2>
          </div>
          <div className="text-left md:text-right">
             <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.3em]">
                Secure Channel: Active
             </p>
          </div>
        </div>

        {/* Form Fields: Structured Layout */}
        <div className="space-y-4 border-t border-white/5 pt-12">
          <FormField
            number="01"
            tag="Identity"
            type="text"
            value={form.name}
            onChange={handelChange}
            id="name"
            placeholder="Your Name*"
          />
          <FormField
            number="02"
            tag="Communication"
            type="email"
            onChange={handelChange}
            value={form.email}
            id="email"
            placeholder="Email Address*"
          />
          <FormField
            number="03"
            tag="Organization"
            type="text"
            value={form.org}
            onChange={handelChange}
            id="org"
            placeholder="Company or Firm"
          />
          <FormField
            number="04"
            tag="Project Details"
            type="text"
            onChange={handelChange}
            value={form.msg}
            id="msg"
            placeholder="How can I assist with your engineering or financial goals? *"
          />
        </div>

        {/* Status Messages */}
        <div className="min-h-[60px] mt-10">
          {err === 1 && (
            <div className="flex items-center gap-4 text-[#562e66] font-mono text-xs uppercase tracking-widest bg-[#562e66]/5 p-4 rounded-lg border border-[#562e66]/20">
              <span className="font-bold">[ERROR]</span>
              <span>{errMsg}</span>
            </div>
          )}
          {record === 1 && (
            <div className="flex items-center gap-4 text-white font-mono text-xs uppercase tracking-widest bg-white/5 p-4 rounded-lg border border-white/10">
              <span className="font-bold">[SUCCESS]</span>
              <span>Message recorded. I'll be in touch shortly.</span>
            </div>
          )}
        </div>

        {/* Clean Action Bar */}
        <div className="mt-12 flex justify-end">
          <button
            type="submit"
            onClick={checkData}
            className={`group relative overflow-hidden px-12 py-5 rounded-full font-bold text-xs uppercase tracking-[0.3em] transition-all duration-500 border ${
              record 
                ? "bg-white/5 border-white/10 text-zinc-500 cursor-default" 
                : "bg-[#562e66] border-[#562e66] text-white hover:bg-transparent hover:text-[#562e66]"
            }`}
          >
            <span className="relative z-10 flex items-center gap-4">
              {record ? "Data Received" : "Send Packet"}
              {!record && (
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              )}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;