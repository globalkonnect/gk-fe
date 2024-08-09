import React from "react";

function ContactForm() {
  return (
    <div class="w-full font-Alata shadow-2xl rounded-3xl">
      <form class="bg-white shadow-md rounded-3xl px-8 pt-6 pb-8 mb-4 flex-col flex items-center justify-center">
        <div className="flex max-md:flex-col items-center  justify-between mb-5 ">
          <input
            class="shadow appearance-none border rounded-lg w-[19vw] max-md:mb-5 md:mr-4 max-md:w-[60vw] py-3 px-3 border-gray-600  text-gray-700 leading-tight focus:outline-double focus:shadow-outline focus:ring-blue-500 focus:border-blue-500"
            id="username"
            type="text"
            placeholder="Username"
          />

          <input
            class="shadow appearance-none border border-gray-600 rounded-lg w-[19vw] max-md:w-[60vw] py-3 px-3 text-gray-700  leading-tight focus:outline-double  focus:shadow-outline focus:ring-blue-500 focus:border-blue-500"
            id="password"
            type="password"
            placeholder="user@email.com"
          />
          {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
        </div>

        <textarea
          id="message"
          rows="4"
          class=" py-2 px-2 md:w-[39vw] max-md:w-[60vw] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-600 focus:ring-blue-700 focus:border-blue-700 "
          placeholder="Leave a comment..."
        ></textarea>

        <button
          class="bg-Yellow hover:border-blue-700 border-2 border-Yellow text-lg mt-5 text-black font-bold py-1 px-6 rounded-3xl focus:outline-double focus:shadow-outline"
          type="button"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
