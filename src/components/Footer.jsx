// import {
//   FaInstagram,
//   FaLinkedin,
//   FaFacebookF,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaMapMarkerAlt,
// } from "react-icons/fa";
// import googlePlayBadge from "../assets/google-play-badge.png"; // Assume this is the path to your Google Play badge image

// export default function Footer() {
//   return (
//     <footer className="absolute w-full ">

//       <div className="flex flex-col md:flex-row justify-evenly items-center p-5 bg-[#001376] rounded-t-[84px] text-white  h-[340px] z-10">
//       <div className="flex flex-col items-start mb-4 md:mb-0">
//         <phone className="flex items-center mb-2">
//           <FaPhoneAlt className="mr-2" /> +91(522)7968306
//         </phone>
//         <email className="flex items-center mb-2">
//           <FaEnvelope className="mr-2" />
//           <div className="flex flex-col">
//             <a href="mailto:director@smartsavaar.in">director@smartsavaar.in</a>
//             <a href="mailto:fahmedlko@gmail.com">fahmedlko@gmail.com</a>
//           </div>
//         </email>
//         <p className="flex items-center">
//           <FaMapMarkerAlt className="mr-2" />
//           <address>
//             Plot No. 14(656A/094), Mohdpur Khatri
//             <br />
//             Alok Nagar, Kalyanpur,
//             <br />
//             Lucknow-226022, Uttar Pradesh
//           </address>
//         </p>
//       </div>
//       <div className="text-center">
//         <div className="flex justify-center md:justify-center mb-2.5">
//           <a
//             href="https://instagram.com"
//             className="inline-block mr-2.5 text-white"
//             target="_blank"
//           >
//             <FaInstagram size="24" />
//           </a>
//           <a
//             href="https://linkedin.com"
//             className="inline-block mr-2.5 text-white"
//             target="_blank"
//           >
//             <FaLinkedin size="24" />
//           </a>
//           <a href="https://facebook.com" target="_blank" className="text-white">
//             <FaFacebookF size="24" />
//           </a>
//         </div>
//         <div className="flex flex-col items-center md:items-center">
//           <img
//             src={googlePlayBadge}
//             alt="Get it on Google Play"
//             className="w-36 mb-2"
//           />
//           <p>Copyrights 2024 @ SmartSavaari Mobility Pvt Ltd</p>
//         </div>
//       </div>
//       </div>

//     </footer>
//   );
// }

import {
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import googlePlayBadge from "../assets/google-play-badge.png"; // Assume this is the path to your Google Play badge image

export default function Footer() {
  return (
    <footer className="relative w-full text-white h-full text-2xl">

      <p className="absolute z-[-1] top-[-83px] flex items-start pt-7 p-4 justify-center font-bold text-[40px] bg-[#2E3B80] w-full h-[166px] rounded-t-[83px]">Now In Delhi NCR !</p>


      <div className="rounded-t-[84px]  bg-[#001376]">
      <div className="flex flex-col md:flex-row justify-between items-center h-[340px]">
        <div className="flex flex-col items-start mb-4 md:mb-0">
          <div className="flex items-center mb-2">
            <FaPhoneAlt className="mr-2 h-12" /> +91(522)7968306
          </div>
          <div className="flex items-center mb-2">
            <FaEnvelope className="mr-2" />
            <div className="flex flex-col">
              <a href="mailto:director@smartsavaar.in">
                director@smartsavaar.in
              </a>
              <a href="mailto:fahmedlko@gmail.com">fahmedlko@gmail.com</a>
            </div>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-2" />
            <address>
              Plot No. 14(656A/094), Mohdpur Khatri
              <br />
              Alok Nagar, Kalyanpur,
              <br />
              Lucknow-226022, Uttar Pradesh
            </address>
          </div>
        </div>
        <div className="text-center" >
          <div className="flex justify-center mb-4">
            <a
              href="https://www.instagram.com/smartsavaari/"
              className="mr-2.5 text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="h-12 w-auto" />
            </a>
            <a
              href="https://in.linkedin.com/company/smartsavaarimobility"
              className="mr-2.5 text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="h-12 w-auto" />
            </a>
            <a
              href="https://www.facebook.com/people/SmartSavaari-Mobility/61556520880316/"
              className="text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="h-12 w-auto" />
            </a>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={googlePlayBadge}
              alt="Get it on Google Play"
              className="w-42 mb-2"
            />
            <p>Copyrights 2024 @ SmartSavaari Mobility Pvt Ltd</p>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}

