import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {

    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 700,
          easing: "ease-out-cubic",
        });
      }, []);

    const [formData, setFormData] = useState({
        Name: "",
        email: "",
        message: ""
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("form data>>",formData);
    }

    return (
        <div data-aos="zoom-out-down" className="w-full">
            <h2 className="text-[3rem] font-bold mb-7 text-center">Contact</h2>
            <form onSubmit={submitHandler}
            className="my-3 sm:w-[70%] md:w-[60%] lg:w-[50%] mx-auto border-2 shadow-lg
             py-4 px-5 flex flex-col gap-y-3 rounded-lg">
                {/* name */}
                <label className="flex flex-col gap-y-1">
                    <p className="">Name</p>
                    <input
                        type="text"
                        placeholder="Enter you name"
                        name="Name"
                        value={formData.Name}
                        onChange={handleChange}
                        className="h-9 rounded-md px-2 border-2"
                    />
                </label>

                {/* email */}
                <label  className="flex flex-col gap-y-1">
                    <p>Email</p>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                         className="h-9 rounded-md px-2 border-2"
                    />
                </label>

                {/* message */}
                <label className="flex flex-col gap-y-1">
                    <p>Message</p>
                    <textarea
                        placeholder="Enter you message"
                        name="message"
                        rows="5"
                        cols="50"
                        value={formData.message}
                        onChange={handleChange}
                        className="rounded-md px-2 border-2"
                    />
                </label>
                <button className="px-5 py-2 my-3 bg-[#699ff0] font-semibold
                border-2 text-white text-[1.2rem] rounded-md hover:bg-[#3d79d4]
                transition-all duration-300">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Contact;