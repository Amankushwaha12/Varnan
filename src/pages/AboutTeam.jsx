import noteImg from '../assets/Hero/section2/Note.svg';
import arrowLeft from '../assets/Hero/section2/Vector_2.svg';
import filmMakersLabel from '../assets/Hero/section2/Film_Makers.svg';
import arrowDiag from '../assets/Hero/section2/Vector_1.svg';
import arrowCurly from '../assets/Hero/section2/Vector.svg';
import brandingExpertsLabel from '../assets/Hero/section2/Branding_Experts.svg';
import groupImg from '../assets/Hero/section2/Group.svg';
import artCuratorsLabel from '../assets/Hero/section2/Art_Curators.svg';
import indiaGateImg from '../assets/Hero/section2/IndiaGate.svg';
import "../App.css"

const AboutTeam = ()=>{
  return(
    <section className="relative background min-h-screen min-w-screen flex flex-col items-center justify-center py-8">
    
    {/* Sticky Note */}
    <img
      src={noteImg}
      alt="Note"
      className="absolute w-[520px] top-0 left-32 drop-shadow-lg z-50"
    />

    

    {/* India Gate and Branding Experts */}
    <div className="absolute left-20 bottom-8 flex flex-col items-center z-20">
      <img src={indiaGateImg} alt="India Gate" className="h-[285px] " />
    </div>

    {/* Group Silhouette */}
    <div className="flex flex-col items-center justify-center w-full ml-50">
      <div className="relative flex justify-center items-end w-full mt-32">
        {/* Group Image */}
        <img src={groupImg} alt="Team Group" className="w-[450px] ml-40" />
        {/* Arrow from Note down to Branding */}
        <div className="absolute left-100 top-48 w-40 z-10">
          <img
            src={arrowCurly}
            alt="Curly arrow"
          />
          <img src={brandingExpertsLabel} alt="Branding Experts" className="w-40 mt-6 -ml-16" />
        </div>
        {/* Film Makers label and arrow above left side */}
        <img
          src={filmMakersLabel}
          alt="Film Makers"
          className="absolute left-[40%] -top-26 w-44"
        />
        <img
          src={arrowDiag}
          alt="Arrow diag"
          className="absolute left-[45%] -top-16 w-24"
        />

        {/* Art Curators label and arrow above right side */}
        <img
          src={artCuratorsLabel}
          alt="Art Curators"
          className="absolute right-[13%] -top-10 w-36"
        />
        <img
          src={arrowLeft}
          alt="Arrow diag right"
          className="absolute right-[18%] -top-2 w-24 rotate-12"
        />
      </div>
      {/* Centered text and button */}
      <div className="flex flex-col items-center justify-center mt-12 ml-29  z-20">
        <p className="text-2xl md:text-3xl text-[#343132] font-serif mb-4 text-center">
          Take a closer look at the stories V bring to life.
        </p>
        <button className="bg-[#f6682c] rounded-full px-6 py-2 text-white font-semibold text-sm shadow transition hover:scale-105 mt-2">
          View Portfolio
        </button>
      </div>
    </div>
  </section>
  )
}
export default AboutTeam;