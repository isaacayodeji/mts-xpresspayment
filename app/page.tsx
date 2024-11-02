import CarouselComponent from "@/components/carouselComp";
import { ContactUs } from "@/components/contact_us";
import { Partners } from "@/components/partners";
import { Testimonials } from "@/components/testimonials";
import { VideoSummary } from "@/components/videoSummary";


export const metadata = {
  title: "Home | Xpress MTS",
  description: "Creating simple financial access for everyone",
};
export default function Home() {
  return (
    <main className="flex mt-10 flex-col h-[auto] w-full items-center  mx-auto max-w-[1440px] overflow-hidden ">
      <VideoSummary />
      <CarouselComponent />
      <Testimonials />
      <Partners />
      <ContactUs />
   
    </main>
  );
}