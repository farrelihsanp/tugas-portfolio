function ItemTestimonialSection(props: any) {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg p-4 m-2">
      <h3 className="font-semibold">{props.name}</h3>
      <p className="text-gray-500">{props.title}</p>
      <p className="mt-2">{props.testimonial}</p>
    </div>
  );
}

export default ItemTestimonialSection;
