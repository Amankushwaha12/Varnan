import filmProduction from '../assets/Hero/Services/Frame_1.svg';
import branding from '../assets/Hero/Services/Frame_2.svg';
import artCuration from '../assets/Hero/Services/Frame_3.svg';
import tape from '../assets/Hero/Services/Tape.svg';
import brushStroke from '../assets/Hero/Services/BrushStroke.svg';
import bottomBorder from '../assets/Hero/Services/BottomBorder.svg';
import '../App.css'

const Services = ()=>{
  return(
    <section className="w-full background pt-12 pb-0 -px-10 flex flex-col items-center relative">
      <div className='mt-12 mr-62'>
        {/* Heading text */}
        <h2 className="text-2xl font-serif text-[#222] text-center mb-3">
          The storyboard reveals the breadth of our craft.
        </h2>
        {/* Brush stroke under heading */}
        <img
          src={brushStroke}
          alt="Brush Stroke"
          className="w-[340px] max-w-full mt-0 mb-6 mx-auto pointer-events-none select-none"
        />
        {/* Gallery Row */}
        <div className="flex flex-wrap gap-8 justify-center items-end relative mt-20 z-10 mb-8">
          {/* Film Production */}
          <div className="relative w-[360px] -top-10 flex flex-col items-center">
            <img
              src={tape}
              alt="Tape"
              className="absolute top-0 left-10 w-[120px] z-20"
            />
            <div className="flex flex-col items-center">
              <img
                src={filmProduction}
                alt="Film Production"
                className="w-full h-[430px] object-cover"
                draggable={false}
              />
              <div className="text-center py-3 font-serif text-xl">Film Production</div>
            </div>
          </div>
          {/* Branding */}
          <div className="relative w-[360px] flex flex-col items-center">
            <img
              src={tape}
              alt="Tape"
              className="absolute -top-2 left-30 w-[120px] z-20"
            />
            <div className="flex flex-col items-center">
              <img
                src={branding}
                alt="Branding"
                className="w-full h-[430px] object-cover"
                draggable={false}
              />
              <div className="text-center py-3 font-serif text-xl">Branding</div>
            </div>
          </div>
          {/* Art Curation */}
          <div className="relative w-[360px] -top-10  flex flex-col items-center">
            <img
              src={tape}
              alt="Tape"
              className="absolute -top-1 right-5 rotate-25 w-[120px] z-20"
            />
            <div className="flex flex-col items-center">
              <img
                src={artCuration}
                alt="Art Curation"
                className="w-full h-[430px] object-cover"
                draggable={false}
              />
              <div className="text-center py-3 font-serif text-xl">Art Curation</div>
            </div>
          </div>
        </div>
      </div>
      {/* Decorative bottom border */}
      <img
        src={bottomBorder}
        alt="Bottom Border"
        className="w-full mt-0 pb-0 pointer-events-none select-none"
        style={{ position: 'absolute', bottom: 0, left: 0, zIndex: 0 }}
      />
    </section>
  )
}
export default Services;