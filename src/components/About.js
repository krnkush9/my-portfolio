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
        <div className="mb-5 bg-blue-200 rounded-3xl">

            <h2 data-aos="flip-right" className="text-center text-[3rem] font-bold">About Us</h2>

            <div data-aos="zoom-in-down" className="mt-3 p-3">
                <p className="text-[2rem] font-semibold"> MERN Stack</p>
                <p className="text-[1.2rem]">  <span className="font-semibold">College:</span>  CODEHELP</p>
                <p className="text-[1.2rem]"><span className="font-semibold">Year:</span> Jan 2024</p>
            </div>

            <div data-aos="zoom-in-down" className="mt-3 p-3">
                <p className="text-[2rem] font-semibold"> Java & DSA with Java</p>
                <p className="text-[1.2rem]">  <span className="font-semibold">College:</span> APANA COLLEGE</p>
                <p className="text-[1.2rem]"><span className="font-semibold">Year:</span> Feb 2023</p>
            </div>

            <div data-aos="zoom-in-down" className="mt-3 p-3">
                <p className="text-[2rem] font-semibold">MCA (Master of Computer Application)</p>
                <p className="text-[1.2rem]">  <span className="font-semibold">College:</span>  LNCT University Bhopal</p>
                <p className="text-[1.2rem]"><span className="font-semibold">CGPA:</span> 8.35</p>
                <p className="text-[1.2rem]"><span className="font-semibold">Year:</span> 2024</p>

            </div>

            <div data-aos="zoom-in-down" className="mt-3 p-3">
                <p className="text-[2rem] font-semibold">Bachelor of Science (Mathematics)</p>
                <p className="text-[1.2rem]">  <span className="font-semibold">College:</span>  Allahabad
                    State University Prayagraj</p>
                <p className="text-[1.2rem]"><span className="font-semibold">Percentage:</span> 63.22</p>
                <p className="text-[1.2rem]"><span className="font-semibold">Year:</span> 2021</p>

            </div>
        </div>
    )
}

export default About;