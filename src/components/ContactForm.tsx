import { validateEmail } from "@/utils/Utils";
import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { toast } from "react-toastify";

const Form = ({
  selected,
  setSelected,
}: {
  selected: "company" | "individual";
  setSelected: Dispatch<SetStateAction<"company" | "individual">>;
}) => {
  // State for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address");
      return; // Stop form submission
    }

    // Gather your form data here
    const formData = {
      name,
      company: selected === "company" ? companyName : "",
      email,
      message,
    };

    // Send the form data to your API route
    fetch("/api/sendMail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        toast.success("Thank you for contacting us");
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Something went wrong");
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`p-8 w-full h-full border text-white transition-colors duration-[750ms] ${
        selected === "company" ? "bg-white !text-black" : "bg-black text-white"
      }`}
    >
      <h3 className="text-4xl font-bold mb-6">Contact us</h3>

      {/* Name input */}
      <div className="mb-6 flex gap-4 md:flex-col">
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name"
          className={`bg-transparent border ${
            selected === "company" ? "border-black" : "border-white "
          } placeholder:text-zinc-400 transition-colors duration-[750ms] p-2 rounded-md w-full focus:outline-0`}
        />

        <input
          type="text"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          className={`bg-transparent border ${
            selected === "company"
              ? "border-black !placeholder:text-black"
              : "border-white placeholder:text-zinc-400"
          } transition-colors duration-[750ms] p-2 rounded-md w-full focus:outline-0`}
        />
      </div>

      {/* Company/individual toggle */}
      <div className="mb-6">
        <p className="text-xl mb-2">I represent</p>
        <FormSelect selected={selected} setSelected={setSelected} />
      </div>

      {/* Company name */}
      <AnimatePresence>
        {selected === "company" && (
          <motion.div
            initial={{
              marginTop: -104,
              opacity: 0,
            }}
            animate={{
              marginTop: 0,
              opacity: 1,
            }}
            exit={{
              marginTop: -104,
              opacity: 0,
            }}
            transition={BASE_TRANSITION}
            className="mb-6"
          >
            <p className="text-xl mb-2">by the name of</p>
            <input
              type="text"
              required
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Company name"
              className={`bg-transparent border ${
                selected === "company"
                  ? "border-black !text-black"
                  : "border-white !text-white"
              } placeholder:text-zinc-400 transition-colors duration-[750ms] placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Info */}
      <div className="mb-6">
        <textarea
          value={message}
          required
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us more about your project"
          className={`bg-transparent border ${
            selected === "company" ? "border-black" : "border-white"
          } transition-colors duration-[750ms] min-h-[150px] resize-none placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
        />
      </div>

      {/* Submit */}
      <motion.button
        whileHover={{
          scale: 1.01,
        }}
        whileTap={{
          scale: 0.99,
        }}
        type="submit"
        className={`${
          selected === "company" ? "bg-black text-white" : "bg-white text-black"
        } transition-colors duration-[750ms] text-lg text-center rounded-lg w-full py-3 font-semibold`}
      >
        Submit
      </motion.button>
    </form>
  );
};

const FormSelect = ({
  selected,
  setSelected,
}: {
  selected: "company" | "individual";
  setSelected: Dispatch<SetStateAction<"company" | "individual">>;
}) => {
  return (
    <div className="border-[1px] rounded border-zinc-400 overflow-hidden font-medium w-fit">
      <button
        className={`${
          selected === "individual" ? "text-violet-600" : "text-white"
        } text-sm px-3 py-1.5 transition-colors duration-[750ms] relative`}
        onClick={() => setSelected("individual")}
      >
        <span className="relative z-10 text-black">Individual</span>
        {selected === "individual" && (
          <motion.div
            transition={BASE_TRANSITION}
            layoutId="form-tab"
            className="absolute inset-0 bg-white z-0"
          />
        )}
      </button>
      <button
        className={`${
          selected === "company" ? "text-indigo-600" : "text-white"
        } text-sm px-3 py-1.5 transition-colors duration-[750ms] relative`}
        onClick={() => setSelected("company")}
      >
        <span className="relative z-10 text-white">Company</span>
        {selected === "company" && (
          <motion.div
            transition={BASE_TRANSITION}
            layoutId="form-tab"
            className="absolute inset-0 bg-black z-0"
          />
        )}
      </button>
    </div>
  );
};

export default Form;

const BASE_TRANSITION = { ease: "anticipate", duration: 0.75 };
