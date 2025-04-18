import React from "react";
import Image from "next/image";
import "./Hero.scss";
import mail from "@/assets/icons/mail.svg";
import github from "@/assets/icons/github.svg";
import linkedin from "@/assets/icons/linkedin.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__text">
        <p>Hi, I`m</p>
        <h1>Nataliia Miroshnyk</h1>
        <p>
          I’m a Frontend Developer with 1.5+ year of commercial experience,
          specializing in React and TypeScript. At my previous company, I
          improved page load speed by 30% through API optimization and lazy
          loading. I also developed a design system that reduced feature
          development time by 25%. In my latest project, my team and I launched
          a socks sales website with an admin panel for product and order
          management. I excel at integrating REST APIs, handling asynchronous
          operations, and optimizing state management using Redux and Context
          API. I work well in Agile teams, collaborating via Jira, Git, and
          Figma.
        </p>
      </div>
      <div className="hero__contacts">
        <button>
          <div className="icon-wrapper">
            <Image src={mail} alt="Theme switcher icon" />
          </div>
          <span>Send an email</span>
        </button>
        <button>
          <div className="icon-wrapper">
            <Image src={linkedin} alt="Theme switcher icon" />
          </div>
          <span>LinkedIn</span>
        </button>
        <button>
          <div className="icon-wrapper">
            <Image src={github} alt="Theme switcher icon" />
          </div>
          <span>Github</span>
        </button>
        <button>
          <div className="icon-wrapper">
            <Image src={github} alt="Theme switcher icon" />
          </div>
          <span>Telegram</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
