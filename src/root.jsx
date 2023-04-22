import React, { useRef } from "react";
import Nav from "./nav";
import Header from "./header";
import AboutMeText from "./aboutMeText";
import AboutMeImg from "./aboutMeImg";
import HtmlSvg from "./assets/svgs/html";
import CssSvg from "./assets/svgs/css";
import JavascriptSvg from "./assets/svgs/javascript";
import LaravelSvg from "./assets/svgs/laravel";
import ReactSvg from "./assets/svgs/react";
import TailwindSvg from "./assets/svgs/tailwind";
import AlpineSvg from "./assets/svgs/alpine";
import TechCard from "./techCard";
import HeaderText from "./headerText";
import ProjectCard from "./projectCard";
import InputField from "./inputField";
import Textarea from "./textarea";
import DysanMedia from "./assets/images/dysanmedia.png";
import Akilistars from "./assets/images/akilistars.png";
import Valley from "./assets/images/valley.png";
import Github from "./assets/svgs/github";
import LinkedIn from "./assets/svgs/linkedIn";
import Twitter from "./assets/svgs/twitter";
import Instagram from "./assets/svgs/instagram";
import Phone from "./assets/svgs/phone";
import Mail from "./assets/svgs/mail";
import SubmitButton from "./submitButton";
import ContactForm from "./contactForm";

export default function Root() {
  // const home = useRef();
  // const about = useRef();
  // const projects = useRef();
  // const contact = useRef();

  const sectionRefs = useRef([]);
  function scrollToSection(sectionIndex) {
    sectionRefs.current[sectionIndex].scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="bg-white">
      <div ref={el => sectionRefs.current[0] = el} className="h-screen">
        <Nav scrollToSection={scrollToSection}/>
        <Header />
      </div>
      <div className="min-h-screen container lg:py-20 px-5 lg:px-0">
        <HeaderText title="About Me" />
        <div ref={el => sectionRefs.current[1] = el} className="grid lg:grid-cols-2 gap-5">
          <AboutMeImg />
          <AboutMeText />
        </div>
        <div className="w-full">
          <div className="py-10">
            <HeaderText title="Technologies" />
          </div>
          <div className="w-full grid grid-cols-3 lg:grid-cols-7">
            <TechCard title="html">
              <HtmlSvg />
            </TechCard>
            <TechCard title="css">
              <CssSvg />
            </TechCard>
            <TechCard title="javascript">
              <JavascriptSvg />
            </TechCard>
            <TechCard title="laravel">
              <LaravelSvg />
            </TechCard>
            <TechCard title="react">
              <ReactSvg />
            </TechCard>
            <TechCard title="tailwind">
              <TailwindSvg />
            </TechCard>
            <TechCard title="alpine">
              <AlpineSvg />
            </TechCard>
          </div>
        </div>
      </div>
      <div ref={el => sectionRefs.current[2] = el} className="container">
        <div className="lg:py-10">
          <HeaderText title="projects" />
        </div>
        <div className="grid px-5 lg:grid-cols-3 gap-10">
          <ProjectCard
            name="dysanmedia"
            image={DysanMedia}
            link="http://dysanmedia.com"
            description="A Landing page for the Media and marketing company to showcase what they do"
          />
          <ProjectCard
            name="akilistars"
            image={Akilistars}
            link="http://akilistars.ac.tz/"
            description="A school portfolio site which shows the activities which are done at the school"
          />
          <ProjectCard
            name="Valley"
            image={Valley}
            link="https://valley.vastlabs.co.tz/login"
            description="Inventory managemeny system designed to keep track of your current inventory and its transactions"
          />
        </div>
      </div>
      <div ref={el => sectionRefs.current[3] = el} className="w-full px-5 lg:px-0 container">
        <div className="min-h-3/5">
          <div className="py-10 lg:px-0">
            <HeaderText title="Contact" />
            <div className="grid lg:grid-cols-2 gap-5">
              <ContactForm />
              <div className="px-5 lg:px-0 p-10">
                <ul className="flex flex-col list-inside space-y-5 text-base lg:text-lg">
                  <li>
                    <a
                      className="flex items-center gap-5"
                      href="tel:+255755499745"
                    >
                      <Phone />
                      <span>0755499745</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex items-center gap-5"
                      href="mailto:almasemilius@gmail.com"
                    >
                      <Mail />
                      <span>almasemilius@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-32 bg-default flex flex-col gap-3 justify-center items-center">
        <div className="text-lg lg:text-3xl ">
          <span>Almas</span>
        </div>
        <div className="flex gap-5">
          <Github />
          <LinkedIn />
          <Twitter />
          <Instagram />
        </div>
      </div>
    </div>
  );
}
