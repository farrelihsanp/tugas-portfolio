const TestimonialBox = (props: any) => {
  return (
    <div
      id={props.id}
      className="flex-col
       m-4 bg
       "
    >
      {props.data.map((a: any, index: number) => (
        <div
          key={index}
          className=" shadow-md rounded-lg p-4 border border-gray-300 my-4 flex-1 bg-white w-100
          hover:scale-105 transition duration-300"
        >
          <div className="flex">
            <img
              src={a.avatar}
              alt={`${a.name}'s avatar`}
              className="w-14 h-14 mb-4 border border-gray-300 rounded-full"
            />
          </div>
          <div>
            <h3 className="font-semibold">{a.name}</h3>
            <p className="text-gray-500">{a.title}</p>
            <p className="mt-2">{a.testimonial}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialBox;
