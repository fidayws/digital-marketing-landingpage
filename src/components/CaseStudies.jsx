import React from 'react';

const CaseStudies = () => {
  const caseStudies = [
    {
      client: "Fashion E-commerce Brand",
      industry: "Retail & Fashion",
      challenge: "Low online visibility and declining sales",
      solution: "Integrated digital marketing strategy",
      results: [
        "300% increase in organic traffic",
        "450% ROAS on social media ads",
        "200% increase in email revenue",
        "85% improvement in conversion rate"
      ],
      channels: ["SEO", "Social Media", "Email", "PPC"],
      duration: "6 months",
      image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      imageAlt: "Digital marketing analytics dashboard showing improved e-commerce metrics"
    },
    {
      client: "B2B SaaS Platform",
      industry: "Technology",
      challenge: "High CAC and low quality leads",
      solution: "Multi-channel lead generation campaign",
      results: [
        "65% reduction in cost per lead",
        "189% increase in qualified leads",
        "156% increase in demo bookings",
        "12X content marketing ROI"
      ],
      channels: ["Content Marketing", "LinkedIn Ads", "SEO", "Email"],
      duration: "8 months",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      imageAlt: "Team analyzing digital marketing performance on large screens"
    },
    {
      client: "Local Restaurant Chain",
      industry: "Food & Hospitality",
      challenge: "Limited online presence and booking system",
      solution: "Local digital marketing campaign",
      results: [
        "400% increase in online reservations",
        "250% growth in social media followers",
        "320% increase in local search visibility",
        "95% positive review rate"
      ],
      channels: ["Local SEO", "Social Media", "Review Management", "Google Ads"],
      duration: "4 months",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      imageAlt: "Team reviewing digital marketing results on laptop"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Success Stories
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Real results for businesses just like yours
          </p>
        </div>

        <div className="space-y-24">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center rounded-2xl shadow-lg overflow-hidden bg-white`}
            >
              {/* Image Block */}
              <div className={`relative h-64 lg:h-full ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                <img
                  src={study.image}
                  alt={study.imageAlt}
                  className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Text Content */}
              <div className="p-6 sm:p-10">
                <div className="flex items-center space-x-2 mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {study.client}
                  </h3>
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                    {study.industry}
                  </span>
                </div>

                <div className="space-y-6">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Challenge</dt>
                    <dd className="mt-1 text-lg text-gray-900">{study.challenge}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Solution</dt>
                    <dd className="mt-1 text-lg text-gray-900">{study.solution}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Results</dt>
                    <dd className="mt-1">
                      <ul className="space-y-3">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center text-gray-900">
                            <svg
                              className="h-5 w-5 text-green-500 mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                              />
                            </svg>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {study.channels.map((channel, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
                    >
                      {channel}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm text-gray-500">
                  Results achieved in: <span className="font-semibold">{study.duration}</span>
                </p>

                <div className="mt-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Get Similar Results
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
