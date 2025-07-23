import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechStart Inc.",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      content: "The SEO results have been incredible. Our organic traffic has increased by 200% and we're seeing a significant boost in qualified leads. Their team is professional and always available for support."
    },
    {
      name: "Michael Chen",
      position: "E-commerce Manager",
      company: "StyleHub",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      content: "Working with their SEO team has transformed our online presence. Our e-commerce sales have doubled and our visibility in search results has never been better. Highly recommended!"
    },
    {
      name: "Emma Davis",
      position: "CEO",
      company: "Local Bistro",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      content: "The local SEO services have put us on the map! We're now ranking #1 for all our target keywords in our area, and our restaurant bookings have increased significantly."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-blue-900">
          Client Testimonials
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          What our clients say about our SEO services
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-blue-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600">
                    {testimonial.position}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonial.company}
                  </p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic">
                "{testimonial.content}"
              </blockquote>
              <div className="mt-6 flex">
                <span className="text-yellow-500">★★★★★</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 