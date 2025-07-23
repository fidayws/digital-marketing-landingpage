import React from 'react';

const WhatIsSEO = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">
            What is SEO & Why It Matters
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">What is SEO?</h3>
              <p className="text-gray-700">
                Search Engine Optimization (SEO) is the art and science of improving your website's visibility
                in search engine results. It involves optimizing your content, technical setup, and online
                presence to rank higher on Google and other search engines.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Why It Matters</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Increases organic traffic and visibility</li>
                <li>• Builds credibility and trust</li>
                <li>• Provides better ROI than paid advertising</li>
                <li>• Generates quality leads 24/7</li>
                <li>• Improves user experience</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSEO; 