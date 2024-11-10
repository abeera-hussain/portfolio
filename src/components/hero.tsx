import Image from "next/image"
import "../style/hero.css"
function Hero(){
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
                </div>
                {/* right */}
                <div className="hero-right-div">
                    <h1 className="title-hero">
                        I am Abeera Hussain </h1>
                    
                    <p className="des-hero">I’m an intermediate student currently pursuing engineering, passionate about exploring technology and problem-solving. I’m eager to expand my knowledge and skills in the field,
                         with a keen interest in applying engineering principles to real-world challenges.</p>
       
                </div>
            </div>
        </div>
    )
}
export default Hero