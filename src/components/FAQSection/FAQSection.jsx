import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ FIX: Import Link
import './FAQSection.css';

const faqs = [
  {
    question: 'What is MusicMaster?',
    answer: 'MusicMaster is an online music learning platform designed to make learning music easy, fun, and accessible for everyone—from beginners to advanced learners.',
  },
  {
    question: 'Who can use MusicMaster?',
    answer: 'Anyone! Whether you\'re a complete beginner, a student, or an experienced musician looking to refine your skills, MusicMaster has tailored courses for you.',
  },
  {
    question: 'Do I need any instruments to start?',
    answer: 'No, you can start without any instruments. MusicMaster includes virtual tools and beginner-friendly lessons that don\'t require prior experience or equipment.',
  },
  {
    question: 'How are the lessons structured?',
    answer: 'Lessons are structured into step-by-step modules, combining video tutorials, exercises, and progress tracking to help you learn at your own pace.',
  },
  {
    question: 'Can I learn multiple instruments on MusicMaster?',
    answer: 'Yes! You can choose from various instrument courses including piano, guitar, and vocals—all designed by expert instructors.',
  },
  {
    question: 'Is there a certificate upon completion?',
    answer: 'Yes, you’ll receive a digital certificate of completion after finishing any course, which you can share on your resume or social media.',
  },
  {
    question: 'Can I access the platform on mobile?',
    answer: 'Absolutely. MusicMaster is fully responsive and can be accessed from any smartphone, tablet, or desktop browser.',
  },
  {
    question: 'Do I get feedback on my performance?',
    answer: 'Yes. MusicMaster provides real-time feedback on pitch and rhythm to help you improve efficiently.',
  },
];

const FAQSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [faqsVisible, setFaqsVisible] = useState(faqs.slice(0, 3).map(faq => ({ ...faq, open: false })));

  const toggleFAQ = (index) => {
    const updatedFaqs = faqsVisible.map((faq, i) => (
      i === index ? { ...faq, open: !faq.open } : faq
    ));
    setFaqsVisible(updatedFaqs);
  };

  const handleShowAll = () => {
    if (!showAll) {
      setFaqsVisible(faqs.map(faq => ({ ...faq, open: false })));
    } else {
      setFaqsVisible(faqs.slice(0, 3).map(faq => ({ ...faq, open: false })));
    }
    setShowAll(!showAll);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-heading">Frequently asked questions</h2>

      <div className={`faq-list ${showAll ? 'scrollable' : ''}`}>
        {faqsVisible.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${faq.open ? 'open' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">{faq.question}</div>
            {faq.open && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>

      <div className="faq-toggle" onClick={handleShowAll}>
        {showAll ? 'Show less' : 'Show all 8 frequently asked questions'} ↓
      </div>

      <p className="faq-help">
        Can’t find the answer you are looking for?<br />
        Visit our <Link to="/help-center" className="faq-help-link">Help Center</Link> for more answers.
      </p>
    </section>
  );
};

export default FAQSection;
