import Image from "next/image"
import "../style/hero.css"
import "../style/about.css"
import { CgMail } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import Link from "next/link";

function About(){
    return(
        <div className="header-container">
            <div className="header-boxes-con">
                {/* left */}
                <div>
                    <Image src={"/images/profile 02.jpg"}
                    width={200}
                    height={200}
                    className="header-image"
                     alt="profile"></Image>
                     <div className="social-icon">
                     <Link href={""}><CgMail className="s-icon1"/></Link>
                    <Link href={""}> <FaFacebook className="s-icon2"/></Link>
                     <Link href={""}><MdCall className="s-icon3"/></Link>
                     </div>

                </div>
                {/* right */}
                <div className="hero-right-div">
                    <h1 className="title-hero">About me
                    </h1>
                    <p className="des-hero">I’m a creative individual with a passion for photography and videography, using both to capture stories and moments. Professionally, I work as a content writer, crafting engaging and impactful content. Currently, I’m also expanding my skills by learning web designing, 
                        combining my creativity with technical knowledge to create visually appealing digital experiences.</p>
        
                </div>
            </div>
        </div>
    )
}
export default About