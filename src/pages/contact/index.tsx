import Form from "@/components/ContactForm";
import { Container } from "@/components/Container";
import SpinningBoxText from "@/components/SpinningBox";
import React, { useState } from "react";

type Props = {};

const Contact = (props: Props) => {
  const [selected, setSelected] = useState<"company" | "individual">(
    "individual"
  );

  return (
    <div className="h-screen w-screen md:h-full flex items-center justify-center bg-black ">
      <Container className="pt-24 md:pt-36 grid grid-cols-2 place-items-center md:grid-cols-1 gap-y-12 ">
        <SpinningBoxText />
        <Form selected={selected} setSelected={setSelected} />
      </Container>
    </div>
  );
};

export default Contact;
