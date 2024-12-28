import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What age groups do you serve?",
    answer:
      "Our Early Childhood Development program serves children from birth to 5 years old and their families.",
  },
  {
    question: "How often are the sessions?",
    answer:
      "We offer flexible scheduling with options for daily, weekly, or bi-weekly sessions depending on your family's needs.",
  },
  {
    question: "What is your approach to early learning?",
    answer:
      "We use a play-based, developmentally appropriate approach that combines structured activities with free exploration.",
  },
  {
    question: "How do you involve parents?",
    answer:
      "Parents are essential partners in our program. We offer regular workshops, communication channels, and opportunities for involvement.",
  },
  {
    question: "What qualifications do your staff have?",
    answer:
      "All our staff are certified early childhood educators with extensive experience and ongoing professional development.",
  },
];

export function FaqSection() {
  return (
    <section className="py-24 md:py-32 px-2">
      <div className="container max-w-7xl mx-auto">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-16 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
