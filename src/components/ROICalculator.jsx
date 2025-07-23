import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ROICalculator = () => {
  const [formData, setFormData] = useState({
    monthlyVisitors: 10000,
    conversionRate: 2,
    averageValue: 100,
    targetGrowth: 100,
  });

  const [results, setResults] = useState({
    additionalVisitors: 0,
    additionalConversions: 0,
    additionalRevenue: 0,
    roi: 0,
  });

  const calculateROI = () => {
    const additionalVisitors = (formData.monthlyVisitors * formData.targetGrowth) / 100;
    const additionalConversions = (additionalVisitors * formData.conversionRate) / 100;
    const additionalRevenue = additionalConversions * formData.averageValue;
    const investmentCost = 2000; // Example monthly SEO investment
    const roi = ((additionalRevenue - investmentCost) / investmentCost) * 100;

    setResults({
      additionalVisitors: Math.round(additionalVisitors),
      additionalConversions: Math.round(additionalConversions),
      additionalRevenue: Math.round(additionalRevenue),
      roi: Math.round(roi),
    });
  };

  useEffect(() => {
    calculateROI();
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: parseFloat(value) || 0
    }));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Calculate Your SEO ROI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how much additional revenue you could generate with our SEO services
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Calculator Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-900">Enter Your Details</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Current Monthly Visitors</label>
                <input
                  type="number"
                  name="monthlyVisitors"
                  value={formData.monthlyVisitors}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Current Conversion Rate (%)</label>
                <input
                  type="number"
                  name="conversionRate"
                  value={formData.conversionRate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Average Order Value ($)</label>
                <input
                  type="number"
                  name="averageValue"
                  value={formData.averageValue}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Target Traffic Growth (%)</label>
                <input
                  type="number"
                  name="targetGrowth"
                  value={formData.targetGrowth}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-blue-900 rounded-xl p-8 text-white"
          >
            <h3 className="text-2xl font-semibold mb-8">Projected Monthly Results</h3>
            <div className="space-y-8">
              <div>
                <p className="text-blue-200 mb-2">Additional Monthly Visitors</p>
                <p className="text-4xl font-bold">{results.additionalVisitors.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-blue-200 mb-2">Additional Monthly Conversions</p>
                <p className="text-4xl font-bold">{results.additionalConversions.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-blue-200 mb-2">Additional Monthly Revenue</p>
                <p className="text-4xl font-bold">${results.additionalRevenue.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-blue-200 mb-2">Projected ROI</p>
                <p className="text-4xl font-bold text-yellow-500">{results.roi}%</p>
              </div>
            </div>

            <button className="mt-8 w-full bg-yellow-500 text-blue-900 py-3 px-6 rounded-full font-bold hover:bg-yellow-400 transition duration-300">
              Get Started Now
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator; 