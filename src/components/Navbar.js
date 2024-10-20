import { Link } from "react-router-dom";
import HamburgerIcon from "../assets/more.png"

function Navbar() {
    const menuList = [

        { title: "Home", path: "/" },
        { title: "Project", path: "/project" },
        { title: "Resume", path: "#" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
    ]

    return (
        <nav className="w-11/12 mx-auto sm:flex justify-between py-3 
        items-center
        ">
            
            {/* logo */}
            <div className="px-4 py-2 w-fit hidden sm:block bg-[#0A192F] text-[#00FFFF]
            rounded-full font-semibold select-none border-2
            border-[#00FFFF] shadow-lg">
                <Link to='/'>
                    Portfolio
                </Link>

            </div>
            {/* menu items */}
            <div >
                <ul className="sm:flex sm:flex-row sm:gap-x-3 text-[1.1rem] flex-col
                text-center">
                    {
                        menuList.map((val, i) => (
                            <li key={i} className="hover:text-[#00FFFF]
                            hover:bg-[#686363] rounded-full px-3 
                            transition-all duration-300 border-[#00FFFF]">
                                {
                                    val.title === "Resume" ?
                                        <a target="_blank" href="https://res.cloudinary.com/ddiabl5lk/image/upload/v1729465015/uploads/osbfe9sj7qhornkrdf81.png">{val.title}</a>
                                        : <Link to={val.path}>
                                            {val.title}
                                        </Link>
                                }

                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;