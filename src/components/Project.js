import Card from "./common/Card";
import ProjectImage1 from "../assets/Online Test.jpg";
import ProjectImage2 from "../assets/Edtech Project.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "./Navbar";

function Project() {

    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 900,
          easing: "ease-out-cubic",
        });
      }, []);

    return (
        <div className="w-full md:px-8 lg:px-8">
            {/* project 1 */}
            <h2 data-aos="flip-left" className="text-[3rem] font-bold text-center mt-7 pb-5
            "> Projects</h2>

            <div className="my-10 flex flex-col gap-y-20">
                <Card
                    imagePath={ProjectImage1}
                    heading={"Online Test System"}
                    usingTech={"React.js"}
                    description={"It is online examination system. First of all, user will create his account then he will be login. After login the user can take the test."}
                    flexDirection={"flex-row"}
                    width={"w-[60rem]"}
                    height={"h-[20rem]"}
                    dataAos={"fade-right"}

                />
                <div className="h-1 w-[50%] mx-auto bg-[#728e8e]"></div>
                {/* project 2 */}
                <Card
                    imagePath={ProjectImage2}
                    heading={"Online Education System"}
                    usingTech={"MERN Stack"}
                    width={"w-[115rem]"}
                    height={"h-[20rem]"}
                    description={`There are two interface in this project first Student and second Instructor.
                        After creating a student account, student can buy the course and read them. 
                        After creating an instructor account, instructor can sell his course.`}
                    flexDirection={"flex-row-reverse"}
                    dataAos={"fade-left"}
                />
            </div>

        </div>
    )
}


export default Project;