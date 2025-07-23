import React from 'react';

const ClientLogos = () => {
  const logos = [
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
      style: { maxWidth: '120px' }
    },
    {
      name: "Google",
      logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
      style: { maxWidth: '130px' }
    },
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      style: { maxWidth: '120px' }
    },
    {
      name: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      style: { maxWidth: '35px' }
    },
    {
      name: "Meta",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
      style: { maxWidth: '120px' }
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Trusted by Industry Leaders</h2>
          <p className="text-lg text-gray-600">Partnering with the world's top companies</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="w-full flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300"
            >
              <img
                src={logo.logo}
                alt={`${logo.name} logo`}
                style={logo.style}
                className="w-auto h-auto object-contain"
              />
            </div>
          ))}
        </div>

        <style jsx>{`
          img {
            filter: none;
            opacity: 0.9;
            transition: all 0.3s ease;
          }
          img:hover {
            opacity: 1;
            transform: scale(1.05);
          }
        `}</style>
      </div>
    </section>
  );
};

export default ClientLogos; 