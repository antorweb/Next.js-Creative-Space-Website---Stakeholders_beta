"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import CommonHead from "../common/CommonHead";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "What types of construction projects do you handle?",
      answer:
        "We specialize in residential, commercial, and industrial construction projects. This includes new builds, renovations, remodeling, and custom construction solutions tailored to your specific needs.",
    },
    {
      question: "How long does a typical project take?",
      answer: "We specialize in residential, commercial, and industrial construction projects. This includes new builds, renovations, remodeling, and custom construction solutions tailored to your specific needs.",
    },
    {
      question: "Do you provide free estimates?",
      answer: "We specialize in residential, commercial, and industrial construction projects. This includes new builds, renovations, remodeling, and custom construction solutions tailored to your specific needs.",
    },
    {
      question: "Are you licensed and insured?",
      answer: "We specialize in residential, commercial, and industrial construction projects. This includes new builds, renovations, remodeling, and custom construction solutions tailored to your specific needs.",
    },
    {
      question: "What is your approach to sustainable construction?",
      answer: "We specialize in residential, commercial, and industrial construction projects. This includes new builds, renovations, remodeling, and custom construction solutions tailored to your specific needs.",
    },
    {
      question: "Can you work with my architect or designer?",
      answer: "We specialize in residential, commercial, and industrial construction projects. This includes new builds, renovations, remodeling, and custom construction solutions tailored to your specific needs.",
    },
  ];

  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <CommonHead commonH2={'Frequently Asked Questions'} commonP={'Everything you need to know about working with Space Developer'} />
     
      </div>

      {/* FAQ LIST */}
      <div className="max-w-3xl mx-auto mt-10 space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-[#F7F9F8] rounded-lg p-4 cursor-pointer border border-gray-200"
            onClick={() => setOpenIndex(index === openIndex ? null : index)}
          >
            {/* QUESTION */}
            <div className="flex justify-between items-center">
              <h3 className="text-[18px] font-semibold font-main text-[#09231E]">{item.question}</h3>

              <FiChevronDown
                size={20}
                className={`text-gray-600 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* ANSWER */}
            {openIndex === index && item.answer && (
              <p className=" mt-3 leading-relaxed">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
