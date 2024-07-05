{/* <div className="relative px-5 flex items-center justify-between" 
           style={{ 
             marginTop: '8px', 
             overflow: 'hidden', 
             height: `${931.32 * scaleFactor}px`,
             maxWidth: '1440px',
             margin: '0 auto',
           }}>
        <div className="flex flex-col items-start justify-center text-left m-2">
          <p className="my-2 text-5xl leading-[54.72px] font-semibold" style={{
            width: `${641.57 * scaleFactor}px`,
            height: `${280 * scaleFactor}px`,
          }}>
            Turn your everyday local ride into a SmartSavaari!
          </p>
          <p className="mt-2 leading-5 text-base text-[#575757]" style={{
            width: `${641.57 * scaleFactor}px`,
          }}>
            SmartSavaari revolutionizes daily commutes with real-time bus and metro tracking, cashless ticketing, and seamless route planning. Say goodbye to long waits and missed connections.
          </p>
          <button className="mt-4 px-11 py-6 text-white bg-[#FF7E39] hover:bg-white border-2 border-[#FF7E39] rounded-xl hover:text-black" style={{
            width: `${256 * scaleFactor}px`,
          }}>
            Download App
          </button>
        </div>
        
        <div className="relative" style={{ 
          height: `${561.06 * scaleFactor}px`, 
          width: `${523.33 * scaleFactor}px`,
        }}>
          <div 
            className="absolute flex items-center justify-center z-[-1]"
            style={{
              width: `${931.32 * scaleFactor}px`,
              height: `${931.32 * scaleFactor}px`,
              right: `calc(50% - ${720 * scaleFactor}px)`,
              top: '50%',
              transform: 'translate(50%, -50%)',
            }}
          >
            <div 
              className="circle1 absolute bg-[#001376] rounded-full z-10"
              style={{
                width: `${719.75 * scaleFactor}px`,
                height: `${719.75 * scaleFactor}px`,
              }}
            ></div>
            <div 
              className="circle2 absolute bg-[#2E3B80] rounded-full z-0"
              style={{
                width: `${931.32 * scaleFactor}px`,
                height: `${931.32 * scaleFactor}px`,
              }}
            ></div>
          </div>
          <img 
            src={mobiledemo} 
            alt="mobiledemo" 
            style={{
              height: '100%',
              width: '100%',
              objectFit: 'contain',
              position: 'relative',
              zIndex: 1,
            }}
          />
        </div>
      </div> */}
      {/* <div className="relative py-4">
        <div className="absolute top-0 left-[200px] translate-x-[67%] translate-y-[20%] bg-slate-400 w-[260px] z-[-1] h-[250px]"></div>
        <div className="absolute bottom-0 left-[400px] translate-x-[87%] translate-y-[-20%] bg-slate-400 w-[260px] z-[-1] h-[250px]"></div>
        <div className="absolute bottom-0 right-[300px] translate-x-[65%] translate-y-[-50%] bg-slate-400 w-[260px] z-[-1] h-[250px]"></div>


        <img src={vector} alt="vector" className="w-full" style={{ maxWidth: '100%', height: 'auto' }} />      </div> */}





  
      {/* ... (previous components remain the same) */}
      
      {/* <div className="relative py-4" style={{ maxWidth: '1440px', margin: '0 auto', overflow: 'hidden' }}>
        <div 
          className="absolute top-0 left-[200px] translate-x-[67%] translate-y-[20%] bg-slate-400 z-[-1] cursor-pointer"
          style={{
            width: `${260 * scaleFactor}px`,
            height: `${250 * scaleFactor}px`,
          }}
          onMouseEnter={() => setHoveredBox(1)}
          onMouseLeave={() => setHoveredBox(null)}
        >
          {hoveredBox === 1 && (
            <img src={guidedemo} alt="Hover Image 1" className="absolute inset-0 w-full h-full object-cover" />
          )}
        </div>
        <div 
          className="absolute bottom-0 left-[400px] translate-x-[87%] translate-y-[-20%] bg-slate-400 z-[-1] cursor-pointer"
          style={{
            width: `${260 * scaleFactor}px`,
            height: `${250 * scaleFactor}px`,
          }}
          onMouseEnter={() => setHoveredBox(2)}
          onMouseLeave={() => setHoveredBox(null)}
        >
          {hoveredBox === 2 && (
            <img src={securedemo} alt="Hover Image 2" className="absolute inset-0 w-full h-full object-cover" />
          )}
        </div>
        <div 
          className="absolute bottom-0 right-[300px] translate-x-[65%] translate-y-[-50%] bg-slate-400 z-[-1] cursor-pointer"
          style={{
            width: `${260 * scaleFactor}px`,
            height: `${250 * scaleFactor}px`,
          }}
          onMouseEnter={() => setHoveredBox(3)}
          onMouseLeave={() => setHoveredBox(null)}
        >
          {hoveredBox === 3 && (
            <img src={instantdemo} alt="Hover Image 3" className="absolute inset-0 w-full h-full object-cover" />
          )}
        </div>

        <img src={vector} alt="vector" className="w-full" style={{ maxWidth: '100%', height: 'auto' }} />
      </div> */}











      //original code:
      // export default function Home() {
//   return (
//     <>

//       <Navbar />

      // <div className=" relative px-5 flex items-center justify-evenly py-10">
      //   <div className="flex  flex-col items-start justify-center text-left max-w-[530px] m-2">
      //     <p className="h-[110px] w-[641.57px] my-2 text-5xl leading-[54.72px] semi-bold">
      //       Turn your everyday local ride into a SmartSavaari!
      //     </p>
      //     <p className="h-[83px] w-[549.86px] mt-2 leading-5 text-base text-[#575757]">
      //       SmartSavaari revolutionizes daily commutes with real-time bus and
      //       metro tracking, cashless ticketing, and seamless route planning. Say
      //       goodbye to long waits and missed connections.{" "}
      //     </p>
      //     <button className="px-11 py-6 w-[256px] text-white  bg-[#FF7E39] hover:bg-white border-2 border-[#FF7E39] rounded-xl hover:text-black ">
      //       Download App
      //     </button>
      //   </div>

        // <div>
        //   <div
        //     className="absolute right-0 top-0 transform translate-x-[59%] translate-y-[2%] flex items-center justify-center z-[-1]"
        //     style={{ width: "931px", height: "931px" }}
        //   >
        //     <div className="circle1 absolute bg-[#001376] rounded-full w-[719.65px] h-[719.65px] z-10"></div>
        //     <div className="circle2 absolute bg-[#2E3B80] rounded-full w-[931px] h-[931px] z-0"></div>
        //   </div>

        //   <img
        //     src={mobiledemo}
        //     alt="mobiledemo"
        //     className="h-[#561px] w-[523px] "
        //   />
        // </div>
      // </div>
      // <div className="relative py-4">
      //   <div className="absolute top-0 left-[200px] translate-x-[67%] translate-y-[20%] bg-slate-400 w-[260px] z-[-1] h-[250px]"></div>
      //   <div className="absolute bottom-0 left-[400px] translate-x-[87%] translate-y-[-20%] bg-slate-400 w-[260px] z-[-1] h-[250px]"></div>
      //   <div className="absolute bottom-0 right-[300px] translate-x-[65%] translate-y-[-50%] bg-slate-400 w-[260px] z-[-1] h-[250px]"></div>


      //   <img src={vector} alt="vector" className="w-full" />
      // </div>
      // <div className="flex items-center justify-center w-full bg-[#2E3B80] semi-bold h-[84px] text-white text-center text-5xl">
      //   <span>Partners</span>
      // </div>
      // <div
      //   className="flex justify-evenly
      //    my-40"
      // >
      //   <img src={venturelab} alt="Venture Labs" className="h-24 w-auto"></img>
      //   <img src={nasscom} alt="Venture Labs" className="h-24 w-auto"></img>
      //   <img src={integral} alt="Venture Labs" className="h-24 w-auto"></img>
      // </div>
      // <Footer />
//     </>
//   );
// }