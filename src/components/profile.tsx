import Image from "next/image";
import developer from "@/public/images/developer.jpeg";

export default function Profile() {
  return (
    <div className="Main flex mt-20 ml-8">
      <div className="sub-section leading-10 font-bold text-lg">
        Hey,
        <br />
        This side <span className="text-red-600">Alishba Khan</span>
        <br />
        <span className="text-sky-500">I am a Frontend Developer</span>
        <br />
        <p>
          I am responsible for planning and developing software solutions and web
          <br /> applications, supporting and maintaining a company's websites and digital
          products.
        </p>
      </div>
      
      {/* Add Image here */}
        <Image className="prof"
          src={developer} 
          alt="Full stack developer"
          width={400}
          height={200}
        />
      </div>
  );
}
