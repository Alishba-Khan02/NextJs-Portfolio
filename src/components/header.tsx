

import Link from "next/link"
import Image from "next/image";
import logo from "@/public/images/logo.png"

export default function Header() {
    return (
        <div className="header">
          
            <Image className="img"
                src={logo}
                alt="Logo"
                width={130} 
                height={100} 
            />
            
            <ul className="header-buttons">
                <Link href={"/"}>
                    <li>Profile</li>
                </Link>
                <Link href={"/about-us"}>
                    <li>About us</li>
                </Link>
                <Link href={"/contact-us"}>
                    <li>Contact us</li>
                </Link>
            </ul>
        </div>
    )
}
