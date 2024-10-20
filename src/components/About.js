import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function About() {

    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 900,
          easing: "ease-out-cubic",
        });
      }, []);

    return (
        <div className="text-center mb-5">
           
            <h2 data-aos="flip-right" className="text-[3rem] font-bold">About</h2>
            <p data-aos="zoom-in-down" className="mt-3">
                I completed MCA (Master of Computer Application) from LNCT University
                Bhopal, Madhya Pradesh in 2024 and B.Sc. (Mathematics) in 2021 from Allahabad
                State University Prayagraj, Uttar Pradesh. I gain 8.35 CGPA
                in MCA and 63.22% in B.Sc. I completed MERN Stack from CODEHELP
                and Java, DSA from APANA COLLEGE.
            </p>
        </div>
    )
}

export default About;