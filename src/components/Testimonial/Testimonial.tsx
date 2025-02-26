import HomeHeading from "../HomeHeading/HomeHeading";
import Vid from "../../assets/vid.mp4";
import vid2 from "../../assets/vid2.mp4";
import vid3 from "../../assets/vid3.mp4";
import vid4 from "../../assets/vid4.mp4";
import vid5 from "../../assets/vid5.mp4";
import vid6 from "../../assets/vid6.mp4";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    video: Vid, 
  },
  {
    id: 2,
    name: "Jane Smith",
    video: vid2,
  },
  {
    id: 3,
    name: "Alice Johnson",
    video: vid3,
  },
  {
    id: 4,
    name: "Michael Brown",
    video: vid4,
  },
  {
    id: 5,
    name: "Emily Davis",
    video: vid5,
  },
  {
    id: 6,
    name: "Chris Wilson",
    video: vid6,
  },
];

export default function Testimonials() {
  return (
    <div className="w-full mt-20 px-4 md:px-10 lg:px-20 text-center">
      <HomeHeading heading={"TESTIMONIALS"} />
      <p className="text-gray-600 mt-2">
        &lt;&lt; Discover The Stories Of Delight And Satisfaction From Our Valued Customers. &gt;&gt;
        Real Experiences, Real Testimonials.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mt-10 overflow-x-auto">
        {testimonials.map(({ id, name, video }) => (
          <div key={id} className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center text-center w-full h-96 relative cursor-pointer transition-transform transform ">
            <video 
              src={video} 
              className="w-full h-full object-cover "
              autoPlay
              muted
              loop
              preload="metadata"
            />
            <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent w-full text-white text-center py-2">
              <p className="text-sm">{name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
