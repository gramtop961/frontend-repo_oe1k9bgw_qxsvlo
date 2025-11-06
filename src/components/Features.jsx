import { BadgeCheck, Laptop, Users, Trophy } from "lucide-react";

const features = [
  {
    icon: BadgeCheck,
    title: "Industry‑ready skills",
    desc: "Curriculum designed with experts and kept up to date with the latest tools.",
  },
  {
    icon: Laptop,
    title: "Project‑based learning",
    desc: "Build real, portfolio‑ready projects with step‑by‑step guidance.",
  },
  { icon: Users, title: "Mentor support", desc: "Get unstuck fast with community Q&A and mentor feedback." },
  { icon: Trophy, title: "Certificates", desc: "Earn shareable certificates to showcase your achievements." },
];

export default function Features() {
  return (
    <section id="features" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Why learners choose us</h2>
          <p className="text-slate-600 mt-2">
            Everything you need to learn effectively and accelerate your career.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
