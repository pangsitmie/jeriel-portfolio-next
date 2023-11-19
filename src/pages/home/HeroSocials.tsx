import { BsTiktok, BsDribbble, BsLinkedin, BsInstagram } from "react-icons/bs";

const HeroSocials = () => {
  const iconColor = "text-zinc-400 hover:text-zinc-300";
  return (
    <div className="flex items-center gap-8 text-[1.3rem]">
      <a
        href="https://www.linkedin.com/in/jeriel-isaiah-layantara/"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram className={iconColor} />
      </a>
      <a
        href="https://www.linkedin.com/in/jeriel-isaiah-layantara/"
        target="_blank"
        rel="noreferrer"
      >
        <BsTiktok className={iconColor} />
      </a>
      <a
        href="https://www.linkedin.com/in/jeriel-isaiah-layantara/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin className={iconColor} />
      </a>
      <a href="/#" target="_blank" rel="noreferrer">
        <BsDribbble className={iconColor} />
      </a>
    </div>
  );
};

export default HeroSocials;
