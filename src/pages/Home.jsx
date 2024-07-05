import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import DButton from "../components/DButton";
import venturelab from "../assets/venturelab.png";
import nasscom from "../assets/nasscom.png";
import integral from "../assets/integral.png";
import vector from "../assets/vector.svg";
import mobiledemo from "../assets/mobiledemo.png";
import guidedemo from "../assets/guidedemo.png";
import securedemo from "../assets/securedemo.png";
import instantdemo from "../assets/instantdemo.png";
import pointer from "../assets/pointer.svg";
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import './Home.css';

export default function Home() {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1440,
    height: typeof window !== 'undefined' ? window.innerHeight : 900,
  });

  const [hoveredBox, setHoveredBox] = useState(null);

  const guideRef = useRef(null);
  const secureRef = useRef(null);
  const instantRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    document.body.style.overflowX = 'hidden';



    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.overflowX = '';


    };
  }, []);

  const handleMouseEnter = (box) => {
    setHoveredBox(box);
  };

  const handleMouseLeave = () => {
    setHoveredBox(null);
  };

  useEffect(() => {
    const animateImage = (ref) => {
      gsap.to(ref.current, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' });
    };

    const resetImage = (ref) => {
      gsap.to(ref.current, { opacity: 0, y: -10, duration: 0.5 });
    };

    if (hoveredBox === 'guide') {
      animateImage(guideRef);
      resetImage(secureRef);
      resetImage(instantRef);
    } else if (hoveredBox === 'secure') {
      animateImage(secureRef);
      resetImage(guideRef);
      resetImage(instantRef);
    } else if (hoveredBox === 'instant') {
      animateImage(instantRef);
      resetImage(guideRef);
      resetImage(secureRef);
    } else {
      resetImage(guideRef);
      resetImage(secureRef);
      resetImage(instantRef);
    }
  }, [hoveredBox]);

  return (
    <>
    
      <Navbar />
      <div className="relative flex items-center justify-around py-16">
        <div className="flex flex-col items-start justify-center max-w-[530px] m-2">
          <p className="h-[110px] w-[641.57px] text-5xl leading-[54.72px] font-semibold">
            Turn your everyday local ride into a SmartSavaari!
          </p>
          <p className="h-[83px] w-[549.86px] my-2 leading-5 text-base text-[#575757]">
            SmartSavaari revolutionizes daily commutes with real-time bus and
            metro tracking, cashless ticketing, and seamless route planning. Say
            goodbye to long waits and missed connections.
          </p>
          <div className="left-align">
            <DButton />
          </div>
        </div>
        <div>
          <div
            className="absolute right-0 top-0 transform translate-x-[59%] translate-y-[2%] flex items-center justify-center z-[-1]"
            style={{ width: "931px", height: "931px" }}
          >
            <div className="circle1 absolute bg-[#001376] rounded-full w-[719.65px] h-[719.65px] z-10"></div>
            <div className="circle2 absolute bg-[#2E3B80] rounded-full w-[931px] h-[931px] z-0"></div>
          </div>
          <img
            src={mobiledemo}
            alt="mobiledemo"
            className="h-[561px] w-[603px] pl-20 ml-28"
          />
        </div>
      </div>
      <div className="relative mb-6">
        <div
          className={`guide absolute top-[40px] left-[344px] transform translate-x-[60%] translate-y-[30%] flex flex-col items-center`}
          onMouseEnter={() => handleMouseEnter('guide')}
          onMouseLeave={handleMouseLeave}
        >
          <p className="text-4xl font-semibold">YOUR GUIDE</p>
          <p className="max-w-[254px] mb-6 text-center text-[22px]">
            to Quick Bus and Metro Route Access
          </p>
          <img src={pointer} className={`${hoveredBox === 'guide' ? 'orange' : ''}`} style={{ height: '63px', width: '51px' }} />
          </div>


          <div>
          {hoveredBox === 'guide' && (
            <div className="w-[540px]">
            <img ref={guideRef} src={guidedemo} alt="guidedemo" className="absolute opacity-0" style={{ top: '400px', left: '200px', zIndex: 10 }} />
            </div>
          )}
          </div>


        

        <div
          className={`secure absolute bottom-[300px] left-[580px] transform translate-x-[60%] translate-y-[50%] text-center flex flex-col items-center`}
          onMouseEnter={() => handleMouseEnter('secure')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="pl-12">
            <img src={pointer} className={`transform rotate-[230deg] ${hoveredBox === 'secure' ? 'orange' : ''}`} />
          </div>
          <div className="mt-4">
            <p className="text-4xl font-semibold">SECURE</p>
            <p className="text-[22px] max-w-[299px]">
              Your Ride with Cashless Ticket Booking
            </p>
          </div>
          
        </div>
        <div>
        {hoveredBox === 'secure' && (
            <div className="w-[540px]">
            <img ref={secureRef} src={securedemo} alt="securedemo" className="absolute opacity-0" style={{ top: '210px', right: '60px', zIndex: 10 }} />

            </div>
          )}
        </div>

        <div
          className={`instant absolute bottom-[260px] right-[340px] transform translate-x-[60%] translate-y-[50%] text-center flex flex-col items-center }`}
          onMouseEnter={() => handleMouseEnter('instant')}
          onMouseLeave={handleMouseLeave}
        >
          <p className="text-4xl font-semibold">INSTANT</p>
          <p className="text-[22px] max-w-[233px] text-center">
            Ride Updates with Real-Time Tracking
          </p>
          <img src={pointer} className={`${hoveredBox === 'instant' ? 'orange' : ''}`} />
          
        </div>
        <div>
        {hoveredBox === 'instant' && (
          <div className="w-[540px]">
            <img ref={instantRef} src={instantdemo} alt="instantdemo" className="absolute opacity-0 w-[540px] h-[402px]" style={{bottom: '50px', right: '500px', zIndex: 10 }} />

          </div>

          )}
        </div>
        <img src={vector} className="w-full" />
      </div>

      <div className="flex items-center justify-center w-full bg-[#2E3B80] semi-bold h-[84px] text-white text-center text-5xl">
        <span>Partners</span>
      </div>
      <div className="flex justify-evenly my-40">
        <img src={venturelab} alt="Venture Labs" className="h-24 w-auto" />
        <img src={nasscom} alt="Nasscom" className="h-24 w-auto" />
        <img src={integral} alt="Integral" className="h-24 w-auto" />
      </div>
      <Footer />

    </>
  );
}