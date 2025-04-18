import React from "react";
import "./Hero.scss";
import mail from "@/assets/icons/mail.svg";
import github from "@/assets/icons/github.svg";
import linkedin from "@/assets/icons/linkedin.svg";
import ContactButton from "./Components/ContactButton/ContactButton";
import Text from "./Components/Text/Text";

const Hero = () => {
  return (
    <div className="hero">
      <Text/>
      <div className="hero__contacts">
        <ContactButton
          href="mailto:nataliia.miroshnyk.fe@gmail.com"
          icon={mail}
          label="Email"
          isExternal={false}
        />
        <ContactButton
          href="https://www.linkedin.com/in/nataliia-miroshnyk/"
          icon={linkedin}
          label="LinkedIn"
          className="contact-button--linkedin"
        />
        <ContactButton
          href="https://github.com/natamrshnyk"
          icon={github}
          label="GitHub"
          className="contact-button--github"
        />
        <ContactButton
          href="https://t.me/natamrshnyk"
          icon={github}
          label="Telegram"
          className="contact-button--telegram"
        />
      </div>
    </div>
  );
};

export default Hero;
