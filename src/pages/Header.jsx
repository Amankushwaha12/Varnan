import { useState } from "react";
import vFilms from "../assets/Hero/VFilms_Logo.png"
import mail from "../assets/Hero/mail.svg"

const Header = ({setHome, ishome}) =>{
  const [showNav, setShowNav] = useState(false);
  return(
  <div className="fixed top-0 left-0 w-full z-50
  flex items-center justify-between h-10vh px-6 py-3 bg-[#FFFBFB59]">
    {/* Left: Logo + Title */}
    <div className="flex items-center gap-2">
      {/* V mark (SVG) */}
      <img src={vFilms} alt="logo" className="w-[63px] h-[23px] "/>
    </div>

    {/* Right: Two icon/menu buttons */}
    <div className="flex flex-row-reverse items-center gap-3">
        {/* Main Button (stays rightmost) */}
        <div className="flex gap-3">
          {/* Example: Menu icon (replace with your icons as needed) */}
          <button 
            className="w-7 h-5 flex items-center justify-center"
            onClick={() => setShowNav(!showNav)}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" className="block">
              <rect
                x="8" y="13" width="48" height="4" rx="2" fill="#293241"
                className={`origin-center transition-all duration-300
                  ${showNav ? "rotate-30 translate-y-1." : ""}
                `}
              />
              <rect
                x="8" y="23" width="48" height="4" rx="2" fill="#293241"
                className={`origin-center transition-all duration-300
                  ${showNav ? "-rotate-30 -translate-y-1" : ""}
                `}
              />
            </svg>
          </button>
        </div>
        {/* Dynamically added buttons appear to the left of main button */}
        <div className="relative">
        <div
          className={` z-20
            transition-all duration-500
            ${showNav ? "translate-x-0 opacity-100 visible" : "translate-x-full opacity-0 invisible"}`}
        >
          {/* All nav buttons here */}
          <nav className="flex gap-6 text-[#2e4555] rounded-lg p-3 items-center">
            <button onClick={() => document.getElementById('services').scrollIntoView({behavior: 'smooth'})}>Services</button>
            <button onClick={() => document.getElementById('').scrollIntoView({behavior: 'smooth'})}>Their Stories </button>
            <button onClick={() => document.getElementById('').scrollIntoView({behavior: 'smooth'})}>Our Story </button>
            <button onClick={() => document.getElementById('header').scrollIntoView({behavior: 'smooth'})}>Varnan </button>
            <button className="flex items-center gap-2 bg-[#f5682a] text-white font-semibold rounded-full px-5 py-1.5 shadow">
              Let&apos;s Talk
              <img src={mail} alt="Mail Icon" className="w-5 h-5" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  </div>
  );
}
export default Header;