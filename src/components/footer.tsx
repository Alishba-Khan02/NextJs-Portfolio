import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
export default function Footer(){
    return(
<div className="Foot">
    <div className="end">
<FaFacebook />
<FaLinkedin />
<FaInstagramSquare />
</div>
<div className="text">
<p>Terms of use</p>
<p>Privacy Policy</p>
</div>
<div className="para"><p>© 2024 Your Company. All rights reserved.</p></div>

</div>



   

    );
}