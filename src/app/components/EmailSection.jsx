"use client";
import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

      {/* LEFT SIDE */}
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>

        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>

        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/rijankarki586">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>

          <Link href="https://www.linkedin.com/in/rijan-karki-8054b53aa/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>

      {/* RIGHT SIDE CONTACT INFO */}
      <div className="z-10 text-[#ADB7BE] flex flex-col justify-center gap-4">
        <p>
           Email:{" "}
          <a
            href="mailto:rijankarki328@gmail.com"
            className="text-white hover:underline"
          >
            rijakarki328@gmail.com
          </a>
        </p>

        <p>
          Phone:{" "}
          <a
            href="tel:+9779767173355"
            className="text-white hover:underline"
          >
            +977 9767173355
          </a>
        </p>
      </div>
    </section>
  );
};

export default EmailSection;