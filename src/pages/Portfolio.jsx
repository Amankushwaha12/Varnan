import filmStripFrame from '../assets/Hero/Portfolio/Group.svg';
import cameraIllustration from '../assets/Hero/Portfolio/Cam_Group.svg';
import footerVector from '../assets/Hero/Portfolio/Footer_Vector.svg';
import rectangle from '../assets/Hero/Portfolio/Rectangle.svg';
import right from '../assets/Hero/Portfolio/right.svg'
import left from '../assets/Hero/Portfolio/left.svg'
import "../App.css"

const Portfolio = ()=>{
  return(
    <section className="relative px-4 py-12 h-screen w-screen background flex flex-col items-center overflow-x-hidden">
      {/* Main Camera Illustration Left Side */}
      <img
        src={cameraIllustration}
        alt="Camera"
        className="absolute left-40 top-44 w-40 z-10  select-none pointer-events-none"
        style={{minHeight: 250}}
      />

      {/* Middle Portion */}
      <div className='mt-15 mr-25'>
        {/* Title and Subtitle */}
        <h2 className="text-2xl font-serif font-semibold   text-[#222] text-center mb-2">The Highlight   Reel</h2>
        <p className="text-[#444] text-center mb-8">Watch the magic we've captured.</p>
  
        {/* Highlighted content area */}
        <div className="relative flex items-center   justify-center mx-auto">
          {/* Central video within "frame" */}
          <div className="relative flex items-center   justify-center bg-white rounded-lg   overflow-hidden shadow-lg w-[700px] ">

            {/* Replace the next img with your <iframe>   or <video> if needed */}
            <div className="relative w-full">
              <img
                src={filmStripFrame}
                alt="Video Thumbnail"
                className=" object-cover w-full"
                draggable={false}
              />
              
              {/* Left Arrow */}
              <div>
                <img
                  src={rectangle}
                  alt="Right"
                  className="absolute top-17 left-2 w-[70px] h-[290px]"
                  draggable={false}
                />
                <img
                  src={left}
                  alt="Right"
                  className="absolute top-45 left-2 w-[70px] h-[70px]"
                  draggable={false}
                />
              </div>
              
              {/* Right Arrow */}
              <div>
                <img
                  src={rectangle}
                  alt="Right"
                  className="absolute top-17 right-2 w-[70px] h-[290px]"
                  draggable={false}
                />
                <img
                  src={right}
                  alt="Right"
                  className="absolute top-45 right-2 w-[70px] h-[70px]"
                  draggable={false}
                />
              </div>
            </div>

            {/* Play button overlay */}
            <div className="absolute inset-0 flex   items-center justify-center   pointer-events-none">
              <div className="bg-[#ff1111] rounded-[10px] w-14 h-10 flex items-center   justify-center shadow">
                <svg height="32" width="32" viewBox="0 0   32 32">
                  <polygon points="10,8 26,16 10,24"   fill="#fff"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Film Reel Border (Bottom Row) */}
      <div className="flex justify-center mt-[8px] w-[60vw] min-w-[670px] max-w-[1000px] mx-auto gap-2">
        {[...Array(13)].map((_, idx) => (
          <img
            key={idx}
            src={rectangle}
            alt="Rectangle"
            className="w-14 h-14"
            draggable={false}
          />
        ))}
      </div>

      {/* Footer Decoration (Bottom Right) */}
      <img
        src={footerVector}
        alt="Decoration"
        className="absolute -bottom-2 right-80 w-64 opacity-80 pointer-events-none select-none"
      />
    </section>
  )
}
export default Portfolio;
