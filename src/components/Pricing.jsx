import React from 'react';

const Pricing = () => {
  const packages = [
    {
      name: "Essential Digital Marketing",
      price: "$999",
      period: "per month",
      features: [
        "Basic SEO (5 Keywords)",
        "Social Media Management (2 Platforms)",
        "Google Ads Management ($1000 Budget)",
        "Monthly Content Creation (2 Posts)",
        "Basic Email Marketing",
        "Monthly Performance Reports",
        "Email & Phone Support"
      ],
      isPopular: false
    },
    {
      name: "Growth Package",
      price: "$2,499",
      period: "per month",
      features: [
        "Advanced SEO (15 Keywords)",
        "Social Media Management (4 Platforms)",
        "Google & Meta Ads Management",
        "Weekly Content Creation",
        "Email Marketing Automation",
        "Bi-Weekly Strategy Calls",
        "Priority Support",
        "Conversion Rate Optimization",
        "Custom Analytics Dashboard"
      ],
      isPopular: true
    },
    {
      name: "Enterprise Solutions",
      price: "Custom",
      period: "contact us",
      features: [
        "Enterprise SEO",
        "Full Social Media Management",
        "Multi-Channel Ad Campaigns",
        "Content Marketing Strategy",
        "Advanced Marketing Automation",
        "Dedicated Account Manager",
        "Custom Reporting & Analytics",
        "Brand Monitoring",
        "24/7 Priority Support"
      ],
      isPopular: false
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Digital Marketing Packages
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Choose the perfect package to accelerate your online growth
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl ${
                pkg.isPopular 
                  ? 'bg-indigo-600 ring-4 ring-indigo-600' 
                  : 'bg-white'
              } shadow-xl p-8`}
            >
              {pkg.isPopular && (
                <div className="absolute -top-4 right-4 bg-yellow-400 text-indigo-900 px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className={`text-2xl font-bold ${pkg.isPopular ? 'text-white' : 'text-gray-900'}`}>
                  {pkg.name}
                </h3>
                <div className="mt-4">
                  <span className={`text-4xl font-extrabold ${pkg.isPopular ? 'text-white' : 'text-gray-900'}`}>
                    {pkg.price}
                  </span>
                  <span className={`text-base font-medium ${pkg.isPopular ? 'text-indigo-100' : 'text-gray-500'}`}>
                    /{pkg.period}
                  </span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg 
                      className={`h-6 w-6 flex-shrink-0 ${pkg.isPopular ? 'text-indigo-200' : 'text-indigo-600'}`}
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`ml-3 ${pkg.isPopular ? 'text-white' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block w-full py-3 px-6 text-center rounded-md shadow font-medium ${
                  pkg.isPopular 
                    ? 'bg-white text-indigo-600 hover:bg-indigo-50' 
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                } transition duration-150 ease-in-out`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing; 