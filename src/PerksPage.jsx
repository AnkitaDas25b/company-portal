

import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, ShieldCheck, Heart } from 'lucide-react';

export default function PerksPage() {
  const benefitCards = [
    { title: "Coffee Pass", desc: "Redeem complimentary credits monthly at partner cafes.", icon: <Coffee /> },
    { title: "Health Assurance Pack", desc: "Comprehensive  coverage  handled directly by the firm.", icon: <ShieldCheck /> },
    { title: "Mental Wellness Reset", desc: "Take two supplemental fully-paid reset days every single quarter.", icon: <Heart /> }
  ];

  return (
    <div>
      <h2 className="heading-title">Employee Wellness Offerings</h2>
      <p >Premium workspace additions for your comfort.</p>

      <div >
        {benefitCards.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5, scale: 1.01 }}//card gently floats upward by 5 pixels
            className="card"
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', cursor: 'pointer' }}
          >
           <div> 
              <div style={{ color: '#818cf8', marginBottom: '12px' }}>{item.icon}</div>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '18px' }}>{item.title}</h3>
              <p style={{ color: '#94a3b8', fontSize: '14px', margin: 0, lineHeight: '1.5' }}>{item.desc}</p>
            </div>
            <button className="primary-btn" style={{ background: '#4f46e5', marginTop: '20px', width: '100%' }}>Claim Benefit</button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}