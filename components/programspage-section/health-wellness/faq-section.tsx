import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who can participate in your health programs?",
    answer:
      "Our programs are open to all community members, with activities designed for different age groups and ability levels.",
  },
  {
    question: "Are there costs associated with your programs?",
    answer:
      "Many of our programs are free or offered on a sliding scale. We also accept various insurance plans and can provide financial assistance.",
  },
  {
    question: "How often do programs meet?",
    answer:
      "Program schedules vary, with options ranging from weekly classes to monthly workshops and special events.",
  },
  {
    question: "Do you offer individual consultations?",
    answer:
      "Yes, we provide one-on-one consultations with health professionals for personalized guidance and support.",
  },
  {
    question: "What qualifications do your health educators have?",
    answer:
      "Our team includes certified health educators, nutritionists, fitness instructors, and mental health professionals.",
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
