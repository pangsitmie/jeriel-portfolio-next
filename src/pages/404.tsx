import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

const EARTH_IMG =
  "https://res.cloudinary.com/dfmju3jjo/image/upload/f_auto,q_auto/v1/roundbytes/yqo5h5dkkstjiakdixtb";
const MOON_IMG =
  "https://res.cloudinary.com/dfmju3jjo/image/upload/f_auto,q_auto/v1/roundbytes/bcafelf1ozezz0nu2zlu";
const ASTRONAUT_IMG =
  "https://res.cloudinary.com/dfmju3jjo/image/upload/f_auto,q_auto/v1/roundbytes/mhdixckvkrxaneuivmi9";

type Props = {};

const Error = (props: Props) => {
  return (
    <div className="bg-black h-screen flex flex-col items-center justify-center">
      <div className="">
        <img
          className="object_astronaut w-64 sm:w-24"
          src={ASTRONAUT_IMG}
          alt="roundbytes"
        />
      </div>
      <div className="text-center">
        <h1 className="text-7xl md:text-4xl my-8">404</h1>
        <h2 className="text-xl text-zinc-400 mb-8">
          LOOKS LIKE YOU ARE
          <br />
          LOST IN SPACE
        </h2>
        <Link href="/">
          <Button>Go back home</Button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
