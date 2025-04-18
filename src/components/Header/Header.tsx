"use client";

import Link from "next/link";
import Image from "next/image";
import switcher from "@/assets/icons/sun-fill 1.svg";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">NM</div>

      <div className="header__nav">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <Image
        src={switcher}
        alt="Theme switcher icon"
        className="header__switcher"
      />
    </div>
  );
};

export default Header;
