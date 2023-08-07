import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/85869717-a1a8-41de-a82a-b6f4b9bce784"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-amber-600 text-amber-200">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or shoot me an email -
            <span className="text-amber-200">
            lawthouaxiong1750@gmail.com
            </span>
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-amber-300 hover:text-amber-900 hover:border-amber-600 px-4 py-3 my-8 mx-auto flex items-center">
          Send It!
        </button>
      </form>
    </div>
  );
};

export default Contact;
