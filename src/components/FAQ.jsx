export default function FAQ() {
  const faqs = [
    {
      q: "Can I cancel anytime?",
      a: "Yes, you can cancel your subscription at any time from your account settings.",
    },
    { q: "Do you offer certificates?", a: "Yes, you receive a shareable certificate after completing a course." },
    {
      q: "Are courses updated?",
      a: "We update courses regularly to reflect the latest tools and best practices.",
    },
    {
      q: "Is there a free trial?",
      a: "You can explore selected lessons for free before subscribing.",
    },
  ];

  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center">Frequently asked questions</h2>
        <div className="mt-8 divide-y divide-slate-200 rounded-xl border border-slate-200 overflow-hidden">
          {faqs.map((f, idx) => (
            <details key={idx} className="group p-6 open:bg-slate-50">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-slate-900">
                {f.q}
                <span className="ml-4 inline-block rounded-full border border-slate-300 px-2 text-xs text-slate-500 group-open:rotate-180 transition">⌄</span>
              </summary>
              <p className="mt-3 text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
