import { TestimonialBoxProps } from "../types/portfolio";
import { Testimonial } from "../types/portfolio";

const TestimonialBox = (props: TestimonialBoxProps) => {
  return (
    <section
      id={props.id}
      className="flex-col
       m-4 bg
       "
    >
      {props.data.map((a: Testimonial, index: number) => (
        <div
          key={index}
          className=" shadow-md rounded-lg p-4 border border-gray-300 my-4 flex-1 bg-white w-100
          hover:scale-105 transition duration-300"
        >
          <div className="flex">
            <img
              src={a.avatar}
              alt={`${a.name}'s avatar`}
              className="w-12 h-12 mb-4 border border-gray-300 rounded-full"
            />
          </div>
          <div>
            <h3 className="font-semibold">{a.name}</h3>
            <p className="text-gray-500">{a.title}</p>
            <p className="mt-2">{a.testimonial}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TestimonialBox;
