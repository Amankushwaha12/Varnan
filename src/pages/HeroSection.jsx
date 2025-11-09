import mandala from "../assets/Hero/Hero_Mandala.png";
import vFilms from "../assets/Hero/VFilms_Logo.png"
import "./HeroSection.css"

function HeroSection(){
  
  return (
    <div className="background flex flex-row container mx-auto  min-w-screen min-h-screen ">
      
      {/* Left Side: Mandala & Logo */}
      <div className="relative flex justify-center items-center mx-8">
        <img
          src={mandala}
          alt="Mandala"
          className="w-[43ty0px] h-[430px] object-contain pointer-events-none"
        />
        {/* Logo centered over mandala */}
        <div className="absolute inset-0 flex justify-center items-center">
          <img 
            src={vFilms} 
            alt="Logo" 
            className="w-[281px] h-[125px]" // Adjust logo size to match photo
          />
        </div>
      </div>

      {/* Right Side: Text Block */}
      <div className="flex-1 flex flex-col justify-center pl-8">
        {/* Large Heading with Frame */}
        <div className="px-6 mb-2 inline-block island-moments-regular text-6xl text-[#0F3255] leading-snug drop-shadow-sm mx-auto text-center text-[80px] ">
          Varnan is where stories find <br />
          their voice and form
        </div>
        {/* Subtitle */}
        <div className="px-3 py-4 mb-6 inline-block text-lg text-[#F15D2B] mx-auto text-center text-[30px]">
          Films . Brands . Art
        </div>
        {/* Story Box */}
        <div className="text-[12px] mt-6 w-full md:w-[50%] leading-relaxed text-[#252729] mx-auto text-center ">
          Since 2009, V’ve been telling stories - stories of people, their journeys, and the places that shape them.
          Some begin in polished boardrooms, others in humble village squares. But every story starts the same way - by listening with intention. V believes it takes trust, patience, and an eye for the unseen to capture what truly matters.
          V doesn’t just tell stories - V honors them.
        </div>
      </div>
    </div>
  )
}

export default HeroSection;