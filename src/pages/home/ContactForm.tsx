import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "@/components/Button";

type Props = {};

const ContactForm = (props: Props) => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        // service id, template id, public key, yang eth.link(template_ob64eth)
        "service_pg0ukrr",
        "template_n7my7so",
        form.current!,
        "zhONXOXMrkk6GGtjZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.currentTarget.reset();
  };

  return (
    <div id="contact" className="">
      <div className="mt-10 flex gap-12">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-center justify-center rounded-16 border border-gray border-opacity-100 border-solid px-16 h-full">
            <MdOutlineEmail className="text- mb-4 text-center text-[24px]" />
            <h4 className="text-center text-xl">Email</h4>
            <h5 className="text-center">admin@roundbytes.com</h5>
            <Button className="mt-8 text-center">Send a messge</Button>
          </div>
        </div>

        <form
          className="flex w-full flex-col gap-4"
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-[100%] rounded-8 border border-gray py-12 px-16 text-black"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-[100%] rounded-8 border border-gray py-12 px-16 text-black"
          />
          <textarea
            name="message"
            rows={2}
            placeholder="Your Message"
            className="w-[100%] rounded-8 border border-gray py-12 px-16 text-black"
          />
          {/* <ButtonFill
            className="bg-black text-white"
            text="Send Message"
            type="submit"
          /> */}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
