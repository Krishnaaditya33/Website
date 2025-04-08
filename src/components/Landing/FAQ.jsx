// components/Landing/FAQ.jsx
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "How does Mailmind's AI learn my preferences?",
    answer: "Our machine learning model analyzes your email interactions - which emails you open, reply to, and label as important. Over time, it adapts to your unique workflow through continuous feedback."
  },
  {
    question: "Is my email data secure?",
    answer: "Absolutely. We use read-only OAuth access and never store your email content. All processing happens in-memory and we comply with GDPR regulations."
  },
  {
    question: "Can I use Mailmind with multiple email accounts?",
    answer: "Yes! The Pro plan supports up to 5 accounts. Our enterprise plan offers unlimited account support with team management features."
  },
  {
    question: "What if the AI makes a mistake?",
    answer: "You can easily reclassify emails with one click. Our system learns from these corrections to improve future accuracy."
  }
]

export default function FAQ() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <Disclosure key={i}>
              {({ open }) => (
                <div className="border rounded-lg hover:shadow-md transition-shadow">
                  <Disclosure.Button className="flex justify-between items-center w-full px-6 py-4">
                    <span className="text-left font-medium text-gray-900">
                      {faq.question}
                    </span>
                    <ChevronDownIcon className={`w-5 h-5 text-blue-600 ${
                      open ? 'transform rotate-180' : ''
                    } transition-transform`} />
                  </Disclosure.Button>
                  
                  <Disclosure.Panel className="px-6 py-4 text-gray-600 bg-gray-50 border-t">
                    {faq.answer}
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions?{' '}
            <a href="mailto:support@mailmind.ai" className="text-blue-600 hover:underline">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
