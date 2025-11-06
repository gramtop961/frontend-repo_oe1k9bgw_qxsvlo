import { Star, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-violet-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-indigo-700 text-sm mb-4">
              <Star className="h-4 w-4" /> Trusted by 50k+ learners
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              Level up your skills with world‑class courses
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Master modern tech with hands-on lessons, real projects, and community support.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#courses" className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-white font-medium shadow hover:bg-indigo-700">
                Browse Courses
              </a>
              <button className="inline-flex items-center gap-2 rounded-md px-5 py-3 border border-slate-300 text-slate-700 hover:bg-slate-50">
                <Play className="h-4 w-4" /> Watch Demo
              </button>
            </div>
            <div className="mt-8 flex items-center gap-6 text-slate-600">
              <div>
                <div className="text-2xl font-semibold text-slate-900">1,200+</div>
                <div className="text-sm">Hours of content</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-slate-900">4.9/5</div>
                <div className="text-sm">Average rating</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-slate-900">Job-ready</div>
                <div className="text-sm">Career paths</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 p-1 shadow-xl">
              <div className="h-full w-full rounded-lg bg-white flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="mx-auto h-16 w-16 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg">
                    <Play className="h-7 w-7" />
                  </div>
                  <p className="mt-4 text-slate-700 font-medium">Preview our interactive lessons</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
