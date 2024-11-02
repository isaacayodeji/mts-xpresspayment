// import React from "react";

// export const ContactUs = () => {
//   return (
//     <section
//       data-aos="fade-left"
//       data-aos-duration="3000"
//       className="flex flex-col md:flex-row mt-10 md:px-10 mx-auto justify-center items-center gap-10  aos-animinate"
//     >
//       <div className="flex flex-col gap-7 w-full md:w-1/2 items-center justify-center ">
//         <span className="text-[26px] font-extrabold text-green-800">
//           Contact Us
//         </span>
//         <span className="text-[1rem] text-center w-[90%] items-center ">
//           We might be a bank in an app but we don't leave our customers hanging.
//           Everything about us is on the app, but if you ever need help (or you
//           just want to chat), we’ve got you.
//         </span>
//       </div>
//       <div className="bg-green-100  w-[100%] md:w-1/2 rounded-full p-5 md:m-15 flex items-center justify-center">
//         <div className="triangle hidden lg:flex "></div>
//         <div className=" bg-green-100 h-[400px] w-[400px] rounded-full p-5 -ml-1 flex items-center justify-center">
//           <img
//             className="w-full max-w-[600px] h-auto"
//             src={"/images/contact-img.png"}
//             alt=""
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

import React from "react";


export const ContactUs = () => {
  return (
    <section
      id="contact"
      data-aos="fade-left"
      data-aos-duration="3000"
      className=" flex flex-col md:flex-row mt-10 md:px-10 mx-auto justify-start items-center gap-10 lg:"
      style={{
        backgroundImage: "url('/images/contact-us.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "600px", // Increase the height
        width: "90%", // Increase the width
      }}
    >
      <div className="flex flex-col gap-7 w-full md:w-1/2 items-center justify-center bg-green-100 bg-opacity-80 p-5 rounded-md md:max-w-[500px] mx-10">
        <span className="text-[26px] font-extrabold text-green-800">
          Contact Us
        </span>
        <span className="text-[1rem] text-left w-[90%] items-center">
          We are committed to providing you with exceptional financial solutions
          and excellent customer service. Whether you have questions, need
          assistance, or want to explore opportunities for collaboration, we're
          here to help. Our dedicated customer support team is available to
          assist you with any inquiries or issues you may have.
        </span>
      </div>
    </section>
  );
};
