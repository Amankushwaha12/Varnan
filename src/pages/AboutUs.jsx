import noteProjects from '../assets/Hero/section3/Frame-22.svg';
import noteClients from '../assets/Hero/section3/Frame-9.svg';
import noteTeam from '../assets/Hero/section3/Frame-23.svg';
import headerLogo from '../assets/Hero/section3/written_3.svg';
import subHeader from '../assets/Hero/section3/written_2.svg';
import scriptQuote from '../assets/Hero/section3/written_.svg';
import mountainArt from '../assets/Hero/section3/OBJECTS.svg';
import brandArc from '../assets/Hero/section3/Group-10.svg';
import "../App.css"

const AboutUs = ()=>{
  return(
    <section className="relative min-h-screen w-full background py-8 overflow-x-hidden">
      {/* Highlighted Title and Subhead */}
      <div className="flex gap-12 px-12 pt-8 flex-wrap items-start">
        {/* Left column */}
        <div className="ml-15">
          <img src={headerLogo} alt="Main heading image" className="mb-10 ml-16 mt-35 w-[500px]" />
          <img src={subHeader} alt="Subheading image" className="mb-4 ml-41  w-[300px]" />
          
          <div className="relative w-[600px] h-[410px] mt-4">
          {/* First Note - Projects */}
            <img
              src={noteProjects}
              alt="Projects stat"
              className="absolute top-0 left-0 w-70 z-0"
            />
          
            {/* Second Note - Happy Clients */}
            <img
              src={noteClients}
              alt="Clients stat"
              className="absolute left-45 w-70  z-5"
            />
          
            {/* Third Note - Experts Team */}
            <img
              src={noteTeam}
              alt="Team stat"
              className="absolute left-90 w-70 z-10"
            />
          </div>

        </div>

        {/* Right column */}
        <div className="flex-1">
          <img
            src={scriptQuote}
            alt="Quote"
            className=" mt-14 w-[618px] mx-auto p-4"
          />
          {/* Brand arc, Mountain, etc. - Bottom section */}
          <div className="w-full flex justify-center items-end mt-10 relative">
            {/* Mountain art, sun */}
            <img src={mountainArt} alt="Mountain" className="w-[370px]  mt-33 z-10" />
            {/* Curved arc of logos */}
            <img
              src={brandArc}
              alt="Brand logos arc"
              className="absolute left-1/2 -top-8 -translate-x-1/2 object-contain pointer-events-none w-640 "
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default AboutUs;