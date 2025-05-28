"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs: {question: string, answer: string}[] = [
  { question: "What services does SkyGrid offer?", answer: "SkyGrid provides cloud computing and software engineering services, helping businesses leverage technology to drive innovation and growth." },
  { question: "What is your experience with cloud platforms?", answer: "Our team has extensive experience with leading cloud platforms, including AWS, and can help you navigate the best solutions for your business." },
  { question: "How can SkyGrid help my business?", answer: "We can help your business by providing customized cloud and software solutions that improve efficiency, scalability, and innovation." },
  { question: "What is your approach to software development?", answer: "Our approach is centered around agile methodologies, ensuring flexibility, collaboration, and rapid delivery of high-quality software solutions." },
  { question: "Do you provide ongoing support and maintenance?", answer: "Yes, we offer comprehensive support and maintenance services to ensure your cloud and software solutions continue to meet your evolving business needs."},
  { question: "What is your typical project timeline?", answer: "Project timelines vary depending on complexity and scope, but we work closely with clients to establish realistic timelines and deliver results-driven solutions."},
  { question: "How can I get started with SkyGrid?", answer: "You can get started by contacting us through our website or reaching out directly to discuss your project requirements and explore how we can help your business thrive."},
];



export default function Faq() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  // const [showAll, setShowAll] = useState(false);

  // Toggle function for individual FAQ items
  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div id="faq" className="w-full pt-16 mb-12">

      <div className="my-12 px-8 text-center text-[#E9F5FC]">
        <h1 className="text-xl md:text-3xl leading-[100%] tracking-wide">FAQs</h1>
        <p className="font-normal text-[16px] leading-[160%]">Got questions? We've got answers</p>
      </div>
      <div className="mx-4 md:mx-24 xl:mx-48 space-y-4 rounded-lg gap-4">
        {faqs.map((faq, index) => (
          <FAQItem 
            key={index} 
            question={faq.question} 
            answer={faq.answer} 
            isOpen={expandedIndex === index}
            onClick={() => toggleFAQ(index)}
          />
        ))}
      </div>

      {/* Toggle View More / View Less */}
      {/* <div className="text-center mt-8">
        <Button
          className="px-4 py-2 !shadow-none !bg-transparent text-[#E9F5FC] rounded-lg hover:bg-transparent hover:underline
          font-raleway font-medium text-xl"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "View Less" : "View More"}
        </Button>
      </div> */}
    </div>
  );
}

function FAQItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="faq-gradient-border rounded-lg shadow-sm bg-[#041017]" onClick={onClick}>
      {/* Question Block */}
      <div className="flex justify-between rounded-lg items-center px-4 lg:px-8 py-4 cursor-pointer bg-[#041017] focus-visible:bg-[#041017] hover:bg-[#041017] transition">
        <h3 className="text-base font-medium text-white">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-white" />
        </motion.div>
      </div>

      {/* Answer Section (Collapsible) */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden bg-[#041017] text-white rounded-lg"
      >
        <p className="px-4 lg:px-8 pb-8 font-medium text-[16px] leading-[1.5] text-[#99AEBA]">{answer}</p>
      </motion.div>
    </div>
  );
}
