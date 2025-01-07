import testimonials1 from "../mini-components/Testimonials1";
import testimonials2 from "../mini-components/Testimonials2";
import testimonials3 from "../mini-components/Testimonials3";
import TestimonialBox from "../mini-components/TestimonialBox";

const TestimonialSection = () => {
  return (
    <section
      id="TestimonialSection"
      className="bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_1000px_at_100%_800px,#C9EBFF,transparent)] "
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="my-10">
          <div>
            <h2 className="text-2xl font-bold text-center">Testimonials</h2>
            <p className="p-4 text-center">
              The following are clients who have used my services as a senior
              full-stack web developer.
            </p>
          </div>

          <div id="master" className="flex flex-col md:flex-row justify-center">
            <TestimonialBox
              id="1"
              className="mb-4 md:mb-0 md:mr-4"
              data={testimonials1}
            />
            <TestimonialBox
              id="2"
              className="mb-4 md:mb-0 md:mx-4"
              data={testimonials2}
            />
            <TestimonialBox
              id="3"
              className="mb-4 md:mb-0 md:ml-4"
              data={testimonials3}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
