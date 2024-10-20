import About from "./About";
import Contact from "./Contact";
import Project from "./Project";
import User from "./User";

function Home() {
    return (
        <div className="w-11/12 mx-auto">
            <User />
            <Project />
            <About />
            <Contact />
        </div>
    )
}

export default Home;