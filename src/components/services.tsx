import "../style/services.css"
import { FaCameraRetro } from "react-icons/fa";
import { FaPenFancy } from "react-icons/fa";
import { HiMiniVideoCamera } from "react-icons/hi2";



function Services(){
    return(
        <main className="main">
            <div  className="ser-container">
                {/* top div */}
                <div className="top-div-ser">
                    <h2 className="title-ser">MY SERVICES</h2>
                    <p className="des-ser">I’m passionate about photography and videography, using them as creative outlets to capture moments and tell stories. Alongside my hobbies,
                         I work as a content writer, where I craft engaging content that resonates with audiences and brings ideas to life.</p>
                </div>
                {/* bottom div */}
                <div className="boxes-con">
                    <div className="box" >
                     <FaCameraRetro className="ser-icons"/>
                     <h3>Photography</h3>
                     <span>As a Hobby</span>
                    </div>
                    
                    <div className="box" >
                     <HiMiniVideoCamera  className="ser-icons"/>
                     <h3>Video Editing</h3>
                     <span>Passion</span>
                    </div>

                    <div className="box" >
                     <FaPenFancy className="ser-icons"/>
                     <h3>Content Writing</h3>
                     <span>As a beginner</span>
                    </div>

                </div>

            </div>
        </main>

        
    )
}
export default Services 