import HeroSectionImage from "../assets/Hero_Section.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

function User() {

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div data-aos="fade-down" className="my-10 w-full h-full flex flex-col 
        gap-y-4 sm:flex-row md:flex-row lg:flex-row 
         items-center justify-between bg-blue-200 rounded-3xl">
      {/* description */}
      <div className="font-semibold leading-snug lg:p-28 md:p-28">
        <p className="lg:text-[2.5rem] md:text-[1.8rem] sm:text-[1.5rem]">Hello I'm</p>
        <p className="lg:text-[2.8rem] md:text-[2rem] sm:text-[1.7rem] text-[#728e8e]">Karan Kushvaha</p>
        <p className="lg:text-[3rem] md:text-[2.2rem] sm:text-[2rem]">

          <TypeAnimation
            sequence={[
              'MERN Stack Developer',
              1000,
              'Full Stack Developer',
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ display: 'inline-block' }}
            repeat={Infinity}
          />
        </p>
      </div>

      {/* image */}
      <img src={HeroSectionImage} alt="karan-profile-image"
        className="lg:w-[30%] lg:h-[40%] md:w-[40%] sm:w-[40%]
                border-2 border-[#728e8e]
                shadow-xl rounded-lg"  />

    </div>
  )
}

export default User;