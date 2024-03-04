"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  weights: [400, 700],
  subsets: ["latin"],
});

const Rsvp = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [form, setFormData] = useState({
    email: "",
    phone: "",
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    fetch("/api/rsvp", {
      method: "POST",
      body: JSON.stringify(form),
    })
      .then(async (res) => {
        const data = await res.json();
        if (data.message) {
          setLoading(false);
          setMessage(data.message);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message, "----->>ERROR");
      });
  };

  return (
    <div className=" h-screen pt-[10rem] poppins-font">
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex  flex-col w-full items-center px-3 sm:px-10"
      >
        {/* form title */}
        <div className="text-center">
          <div className="lg:max-w-[50ch]  montserrat-font capitalize font-semibold text-green-800">
            {message ? (
              message
            ) : (
              <h1 className={`${raleway.className} font-[400] text-xl`}>
                reserve your spot at the event. <br /> we can&apos;t wait to see
                you!
              </h1>
            )}
          </div>
        </div>

        {/* form */}

        <form
          encType="multipart/form-data"
          onSubmit={handleSubmit}
          className="lg:max-w-[500px] mx-auto w-full "
        >
          <div className="flex flex-col space-y-4 mt-6 ">
            <div className="flex flex-col space-y-2">
              <input
                placeholder="Name"
                onChange={handleChange}
                className="border border-black outline-none h-[2.5rem] px-4"
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="flex flex-row  w-full space-x-1">
              <div className="flex flex-col space-y-2 w-1/2">
                <input
                  placeholder="Email"
                  onChange={handleChange}
                  className="border border-black outline-none h-[2.5rem] px-4 "
                  type="email"
                  name="email"
                  id="email"
                />
              </div>{" "}
              <div className="flex flex-col space-y-2 w-1/2">
                <input
                  placeholder="Phone"
                  onChange={handleChange}
                  className="border border-black outline-none h-[2.5rem] px-4 "
                  type="phone"
                  name="phone"
                  id="phone"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={loading || !form.phone || !form.name || !form.email}
              className="disabled:opacity-50 text-white border border-[#19523e] lg:w-[10rem] w-full bg-[#19523e] rounded py-2 px-4"
            >
              {loading ? <span>Submitting...</span> : "RSVP"}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Rsvp;
