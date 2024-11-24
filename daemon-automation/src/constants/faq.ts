export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "What services do you offer?",
    answer: "We specialize in automation solutions including process automation, workflow optimization, and custom software development. Our services cover everything from simple task automation to complex enterprise-level systems."
  },
  {
    question: "How long does a typical automation project take?",
    answer: "Project timelines vary based on complexity and scope. Simple automations might take a few weeks, while more complex systems could take several months. We'll provide a detailed timeline estimate during our initial consultation."
  },
  {
    question: "What technologies do you use?",
    answer: "We use a wide range of modern technologies including Python, JavaScript, Node.js, and various cloud platforms. Our technology stack is chosen based on your specific needs and requirements."
  },
  {
    question: "How do you ensure security in automation solutions?",
    answer: "Security is our top priority. We implement industry-standard security practices, regular audits, and follow best practices for data protection. All solutions are built with security in mind from the ground up."
  },
  {
    question: "Do you provide support after implementation?",
    answer: "Yes, we offer ongoing support and maintenance for all our solutions. This includes bug fixes, updates, and system monitoring to ensure everything runs smoothly."
  }
];
