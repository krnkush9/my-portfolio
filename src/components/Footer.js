import LinkdinIcon from "../assets/linkdin icon.png";
import InstagramIcon from "../assets/instragram icon.png";

function Footer() {
    
    return (
        <div className=" border-t-2 border-slate-500 mt-16 pt-3 flex gap-x-24
         justify-center items-center ">
            <p className="font-bold text-center
            hover:text-[#7b6dd4] transition-all duration-200 select-none
            hover:text-[1.1rem]">Karan Kushvaha</p>

            <div className="flex gap-x-5">
                <a href="http://www.linkedin.com/in/karan-kushvaha-0987311a3/" 
                target="_blank" className="icon">
                    <img src={LinkdinIcon} alt="linkdin-icon" />
                </a>
                <a href="https://www.instagram.com/karan_k_krn/profilecard/?igsh=ZzI4aWxnNHcxbmR0" 
                 target="_blank" className="icon">
                    <img src={InstagramIcon} alt="instragram-icon" />
                </a>
            </div>
        </div >
    )
}

export default Footer;