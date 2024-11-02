"use client";
import { useQuery } from "@tanstack/react-query";
import TestimonialCarousel from "./TestimonialCarousel";

interface Testimonies {
  id: number;
  name: string;
  details: string;
  avatar: string;
}

const testimonials = [
  {
    id: 1,
    name: "Donald Akintoye",
    quote:
      " I can't say enough good things about Xpress Agent POS! The speed of transactions is mind-blowing. It has streamlined my operationsand reduced waiting time for my customers. Plus, the user-friendly interface makes it easy to use, even for first-time users. Thanksto Xpress Agent POS, I can serve more customers and grow business!",
    avatar: "/images/white_avatar.svg",
  },
  {
    id: 2,
    name: "Mohammed Shehu",
    quote:
      "Xpress Agent POS has been a game-changer for my business! Thetransactions are incredibly fast, and my customers love it. Payments are processed in seconds. It's hassle-free and efficient, making my job a breeze. Xpress Agent POS is definitely winner!",
    avatar: "/images/black_avatar.svg",
  },
  {
    id: 3,
    name: "Bayo Lawal",
    quote:
      "As an Xpress Agent, I can confidently say that our POS system is top-notch! The transactions are lightning-fast, and it has made my daily tasks much more efficient. My customers are impressed with how quickly their payments are processed. Xpress Agent POS has undoubtedly elevated my business to new heights!",
    avatar: "/images/white_avatar.svg",
  },
  {
    id: 4,
    name: "Folajimi Olaniyan",
    quote:
      "I've been using Xpress Agent POS for a while now, and it's been fantastic! The speed of transactions is unbeatable. It has improved customer satisfaction, and I receive positive feedback from my clients regularly. I'm proud to be part of the Xpress  Agent network, and I highly recommend the POS to fellow agents!",
    avatar: "/images/black_avatar.svg",
  },

  // Add more testimonials as needed
];
const fetchData = async () => {
  const response = await fetch("/data/testimonies.json");
  const data = await response.json();
  return data;
};

export const Testimonials = () => {
  // const { data } = useQuery<Testimonies[]>({
  //   queryKey: ["data"],
  //   queryFn: fetchData,
  // });
  // if (!data) {
  //   return <div>Loading testimonies...</div>;
  // }
  return (
    <>
      <div id="testimonials" className="flex items-center flex-col space-y-4 pt-5">
        <h1 className="text-center font-extrabold text-[26px] lg:text-[36px] text-green-800 mt-2">
          Testimonals
        </h1>
        <TestimonialCarousel testimonials={testimonials} />
      </div>
      <div className="slider mb-2  ">
        {/* <div className="slide-track ">
          {data.map((x: Testimonies) => (
            <div key={x.id} className="slide flex flex-col justify-between">
              <p className="testimonial-text text-black text-sm">
                <span>{x.details}</span>
              </p>
              <div className="gap-3 items-center mt-[32px] flex align-center">
                <img
                  className="w-[50px] rounded-full h-[50px]"
                  src={x.avatar}
                  alt=""
                />
                <p className="text-sm font-bold text-black">{x.name}</p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
};
