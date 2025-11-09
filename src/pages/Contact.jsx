import topRightImage from "../assets/Hero/contact/Footer_Vector.svg"
import bottomLeftImage from "../assets/Hero/contact/Header_Vector.svg"
import "../App.css"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

const Contact = ()=>{
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const form = event.target;
    const data = {
      name: form[0].value,
      email: form[1].value,
      phone: form[2].value,
      message: form[3].value,
    };

    try {
      const res = await fetch('https://vernanbackend.ezlab.in/api/contact-us/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
      });
      const result = await res.json();
      toast.success('Thank you! We received your message.');
      form.reset();
    } catch (error) {
      toast.error('Oops, something went wrong!');
    } finally {
      setLoading(false);
    }
  };


  return(
    <section className="relative min-h-screen w-full background flex items-center justify-center px-4 py-16">
      {/* Loading overlay */}
      {loading && (
        <div className="fixed inset-0 bg-transparent flex justify-center items-center z-50 pointer-events-none">
        <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-lg p-8 flex flex-col items-center shadow-lg pointer-events-auto">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16 mb-4" />
          <p className="text-gray-700 font-semibold text-lg select-none">Sending...</p>
      
          {/* Spinner styles */}
          <style>{`
            .loader {
              border-top-color: #f6682c;
              animation: spin 1s linear infinite;
            }
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      </div>

      )}
      <div className="flex flex-col md:flex-row w-full max-w-5xl">
        {/* Design */}
        {/* Top right image */}
        <img
          src={topRightImage}
          alt="Top right"
          className="absolute top-0 right-0 w-[400px] h-auto pointer-events-none select-none z-30"
        />
        {/* Bottom left image */}
        <img
          src={bottomLeftImage}
          alt="Bottom left"
          className="absolute bottom-0 left-0 w-[400px] h-auto pointer-events-none select-none z-30"
        />

        
        {/* Left Side: Info box */}
        <div className="relative m-4 mt-[33vh] basis-1/2">
          <p className="text-[#222] text-base mb-2">
            Whether you have an idea, a question, or simply want
            to explore how V can work together, V're just a message away.
            <br />
            Let's catch up over coffee.
            <br />
            Great stories always begin with a good conversation.
          </p>
        </div>

        {/* Right Side: Form */}
        <div className="p-8 m-4 basis-1/2 flex flex-col items-center">
          <h2 className="text-2xl font-serif text-[#212144] mb-2">
            Join the Story
          </h2>
          <p className="text-[#444] mb-6 text-center">
            Ready to bring your vision to life? Let's talk.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
            <input
              className="bg-white w-full border border-transparent rounded px-4 py-2 placeholder-gray-400 text-black"
              placeholder="Your name*"
              required
            />
            <input
              className="bg-white w-full border border-transparent rounded px-4 py-2 placeholder-gray-400 text-black"
              placeholder="Your email*"
              type="email"
              required
            />
            <input
              className="bg-white w-full border border-transparent rounded px-4 py-2 placeholder-gray-400 text-black"
              placeholder="Phone"
              type="tel"
            />
            <textarea
              className="bg-white w-full border border-transparent rounded px-4 py-2 placeholder-gray-400 text-black"
              rows={4}
              placeholder="Your message*"
              required
            />
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="bg-[#f6682c] px-6 py-2 rounded-full text-white font-semibold shadow hover:scale-105 transition"
              >
                Submit
              </button>
            </div>
          </form>
          <div className="mt-6 text-center">
            <span className="text-[#f6682c] font-medium">
              vernita@varnanfilms.co.in |
            </span>
            <span className="text-[#f6682c] font-medium">
              +91 98736 84567
            </span>
          </div>
        </div>
      </div>
      {/* Toast container to show toasts */}
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  )
}
export default Contact;