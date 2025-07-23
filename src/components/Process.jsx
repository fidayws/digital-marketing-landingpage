import React from 'react';

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "SEO Audit & Analysis",
      description: "We perform a comprehensive analysis of your website's current SEO status, competitors, and target keywords."
    },
    {
      number: "02",
      title: "Strategy Development",
      description: "Based on the audit, we create a customized SEO strategy aligned with your business goals."
    },
    {
      number: "03",
      title: "On-Page Optimization",
      description: "We optimize your website's content, structure, and technical elements for better search engine visibility."
    },
    {
      number: "04",
      title: "Content Creation",
      description: "Our team creates high-quality, SEO-optimized content that engages your audience and ranks well."
    },
    {
      number: "05",
      title: "Link Building",
      description: "We build high-quality backlinks to increase your website's authority and rankings."
    },
    {
      number: "06",
      title: "Monitor & Report",
      description: "Regular monitoring and detailed reporting keep you informed about your SEO performance and ROI."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-blue-900">
          Our SEO Process
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          A proven methodology for SEO success
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition duration-300 relative overflow-hidden"
            >
              <div className="text-8xl font-bold text-gray-100 absolute -top-4 -left-4">
                {step.number}
              </div>
              <div className="relative">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process; 