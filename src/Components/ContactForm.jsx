import React from "react";

function ContactForm() {
  return (
    <div class="w-full font-Alata shadow-2xl rounded-3xl">

      <form class="bg-white shadow-md rounded-3xl  pb-8 mb-4 flex-col flex items-center justify-center">
        {/*  username and useremail */}
        <p className="font-Rammetto text-xl p-2 pt-5">Let's get in touch </p>
        <div className="flex max-md:flex-col items-center  justify-between py-5 ">
          {/* parent to username and email */}
          {/* username input */}
          <input
            class="shadow appearance-none border bg-offgray rounded-lg w-[19vw] max-md:mb-5 md:mr-4 max-md:w-[60vw] py-3 px-3 border-gray-600  text-gray-700 leading-tight focus:outline-double focus:shadow-outline focus:ring-blue-500 focus:border-blue-500"
            id="username"
            type="text"
            placeholder="Username"
          />
          {/* useremail  input*/}
          <input
            class="shadow appearance-none border border-gray-600 bg-offgray rounded-lg md:w-[19vw] max-md:w-[60vw] py-3 px-3 text-gray-700  leading-tight focus:outline-double  focus:shadow-outline focus:ring-blue-500 focus:border-blue-500"
            id="email"
            type="email"
            placeholder="User@email.com"
          />
          {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
        </div>
        {/* usermessage */}
        <textarea
          id="message"
          rows="4"
          class=" py-2 px-2 md:w-[39vw] max-md:w-[60vw] text-sm bg-offgray text-gray-900  rounded-lg border border-gray-600 focus:ring-blue-700 focus:border-blue-700 "
          placeholder="Leave a Message..."
        ></textarea>
        {/* submitbutton */}
        <button
          class="bg-Yellow hover:border-blue-700 border-2  border-Yellow text-lg -mb-[3rem] mt-5 md:mb-0 text-black font-bold py-1 px-6 rounded-3xl focus:outline-none focus:shadow-outline focus:ring-blue-700 focus:border-blue-700"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
