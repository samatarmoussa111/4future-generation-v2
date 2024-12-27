import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How can I get involved?",
    answer:
      "There are many ways to get involved! You can volunteer, donate, or participate in our programs. Contact us to learn more about current opportunities.",
  },
  {
    question: "What age groups do you serve?",
    answer:
      "We serve children from birth to 5 years old in our Early Childhood Development program, and youth ages 12-18 in our Youth Leadership program.",
  },
  {
    question: "Are your programs free?",
    answer:
      "Many of our programs are free or offered on a sliding scale based on family income. Contact us to learn more about program costs and financial assistance.",
  },
  {
    question: "Where are you located?",
    answer:
      "We have multiple locations throughout the community. Our main office is located at 123 Community Street, and we partner with schools and community centers.",
  },
];

export function FaqSection() {
  return (
    <section className="py-24 md:py-32 px-2">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl mb-16">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto max-w-2xl">
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
