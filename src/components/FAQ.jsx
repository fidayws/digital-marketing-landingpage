import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What digital marketing services do you offer?",
      answer: "We offer a comprehensive suite of digital marketing services including Search Engine Optimization (SEO), Pay-Per-Click Advertising (PPC), Social Media Marketing, Content Marketing, Email Marketing, and Analytics & Reporting. Each service can be customized to meet your specific business goals and target audience."
    },
    {
      question: "How long does it take to see results from digital marketing?",
      answer: "Results vary by channel. PPC and Social Media Ads can generate immediate traffic, while SEO typically takes 3-6 months for significant results. Content Marketing usually shows impact within 2-3 months. We provide regular reports to track progress across all channels and continuously optimize for better performance."
    },
    {
      question: "How much should I budget for digital marketing?",
      answer: "Your budget depends on your goals, market competition, and chosen channels. While our packages start at $999/month, we recommend allocating at least 5-10% of your revenue to digital marketing. We'll help you distribute your budget across channels for maximum ROI."
    },
    {
      question: "Do you offer customized marketing strategies?",
      answer: "Yes, we create tailored strategies based on your industry, goals, target audience, and budget. Our team analyzes your current performance, competitors, and market opportunities to develop a custom plan that combines the most effective channels for your business."
    },
    {
      question: "How do you measure and report results?",
      answer: "We track key performance indicators (KPIs) specific to each channel, such as traffic, conversions, ROI, engagement rates, and revenue. You'll receive comprehensive monthly reports with detailed analytics and insights, plus access to a real-time dashboard to monitor performance."
    },
    {
      question: "What makes your digital marketing services different?",
      answer: "We stand out through our data-driven approach, transparent reporting, and focus on ROI. Our team stays updated with the latest digital marketing trends and tools, and we provide dedicated account managers for personalized service. We also offer flexible packages that can be adjusted based on your evolving needs."
    },
    {
      question: "Can you work with my existing marketing efforts?",
      answer: "Absolutely! We can integrate with your current marketing initiatives and team. Whether you need us to complement your in-house efforts or take full control of your digital marketing, we'll create a collaborative approach that maximizes results while maintaining brand consistency."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We have experience across various industries including E-commerce, B2B, Technology, Healthcare, Real Estate, and Professional Services. Our diverse expertise allows us to apply proven strategies while understanding the unique challenges and opportunities in your specific industry."
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Everything you need to know about our digital marketing services
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <button
                className="text-left w-full flex justify-between items-start"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {faq.question}
                </h3>
                <span className="ml-6 flex-shrink-0">
                  <svg
                    className={`h-6 w-6 transform ${openIndex === index ? 'rotate-180' : ''} text-indigo-500`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              {openIndex === index && (
                <div className="mt-4 pr-12">
                  <p className="text-base text-gray-500">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-base text-gray-500">
            Still have questions?{' '}
            <a href="#contact" className="font-medium text-indigo-600 hover:text-indigo-500">
              Contact our team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ; 