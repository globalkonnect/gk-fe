import { useState } from "react";
function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [popUpState, setPopUpState] = useState({
    visible: false,
    message: "",
    type: "",
  });
  const encodeFormData = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };
  const handleSubmit = (event) => {
    setIsLoading(true);
    event.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodeFormData({
        "form-name": "contact",
        ...formState,
      }),
    })
      .then((res) => {
        if (res.status == 200) {
          setIsLoading(false);
          setPopUpState({
            visible: true,
            message: "Form submission successful",
            type: "success",
          });
          resetPopup();
          setFormState({
            name: "",
            email: "",
            message: "",
          });
        } else {
          throw new Error("Something Went wrong");
        }
      })
      .catch((err) => {
        setPopUpState({
          visible: true,
          message: "Something Went wrong",
          type: "error",
        });
        resetPopup();
      });
  };
  function resetPopup() {
    setTimeout(() => {
      setPopUpState({
        visible: false,
        message: "",
        type: "",
      });
    }, [2500]);
  }

  return (
    <div className="flex flex-col items-center justify-center">
      {" "}
      {isLoading && <h1 align="center">Form submission in progress...</h1>}
      <div className="w-full font-Alata shadow-2xl rounded-3xl">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-3xl  pb-8 mb-4 flex-col flex items-center justify-center"
        >
          {/*  username and useremail */}
          <p className="font-Rammetto text-xl p-2 pt-5">Let's get in touch </p>
          <div className="flex max-md:flex-col items-center  justify-between py-5 ">
            {/* parent to username and email */}
            {/* username input */}
            <input
              className="shadow appearance-none border bg-offgray rounded-lg w-[19vw] max-md:mb-5 md:mr-4 max-md:w-[60vw] py-3 px-3 border-gray-600  text-gray-700 leading-tight focus:border-Yellow"
              type="text"
              placeholder="Username"
              onChange={(e) =>
                setFormState({ ...formState, name: e.target.value })
              }
              value={formState.name}
              name="name"
              required
            />
            {/* useremail  input*/}
            <input
              className="shadow appearance-none border border-gray-600 bg-offgray rounded-lg md:w-[19vw] max-md:w-[60vw] py-3 px-3 text-gray-700  leading-tight   focus:border-Yellow "
              type="email"
              onChange={(e) =>
                setFormState({ ...formState, email: e.target.value })
              }
              value={formState.email}
              name="email"
              required
              placeholder="User@email.com"
            />
            {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
          </div>
          {/* usermessage */}
          <textarea
            onChange={(e) =>
              setFormState({ ...formState, message: e.target.value })
            }
            value={formState.message}
            rows="4"
            className=" py-2 px-2 md:w-[39vw] max-md:w-[60vw] text-sm bg-offgray text-gray-900  rounded-lg border border-gray-600  "
            placeholder="Leave a Message..."
          ></textarea>
          {/* submitbutton */}
          <button
            className="bg-Yellow hover:border-blue-700 border-2  border-Yellow text-lg -mb-[3rem] mt-5 md:mb-0 text-black font-bold py-1 px-6 rounded-3xl focus:outline-none focus:shadow-outline focus:ring-blue-700 focus:border-blue-700"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      {popUpState.visible && (
        <div
          data-aos="fade-down"
          data-aos-easing="ease"
          data-aos-duration="200"
          id="popup"
          className={`popup fixed top-4  border-2 py-4 px-10 rounded-lg z-20 ${
            popUpState.type === "success"
              ? "bg-Yellow text-black"
              : "bg-red-500 text-white"
          }`}
        >
          {popUpState.message}
        </div>
      )}
    </div>
  );
}

export default ContactForm;
