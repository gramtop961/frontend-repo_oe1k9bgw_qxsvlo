import { Clock, Layers, Star } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "React & Tailwind Mastery",
    instructor: "Ava Thompson",
    rating: 4.9,
    hours: 18,
    level: "Intermediate",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1740&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Python for Data Science",
    instructor: "Noah Patel",
    rating: 4.8,
    hours: 22,
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1740&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Full‑Stack with FastAPI",
    instructor: "Mia Rodriguez",
    rating: 4.9,
    hours: 16,
    level: "Intermediate",
    image:
      "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1740&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "UI/UX Foundations",
    instructor: "Liam Nguyen",
    rating: 4.7,
    hours: 14,
    level: "All levels",
    image:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1740&auto=format&fit=crop",
  },
];

function CourseCard({ course }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
      <div className="relative">
        <img src={course.image} alt={course.title} className="h-44 w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
        <span className="absolute bottom-2 left-2 rounded-md bg-white/90 px-2 py-1 text-xs font-medium text-slate-700 shadow">
          {course.level}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-slate-900 line-clamp-2">{course.title}</h3>
        <p className="mt-1 text-sm text-slate-600">{course.instructor}</p>
        <div className="mt-3 flex items-center justify-between text-sm text-slate-600">
          <span className="inline-flex items-center gap-1"><Star className="h-4 w-4 text-amber-500" /> {course.rating}</span>
          <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" /> {course.hours}h</span>
          <span className="inline-flex items-center gap-1"><Layers className="h-4 w-4" /> {course.level}</span>
        </div>
        <button className="mt-4 w-full rounded-md bg-indigo-600 px-4 py-2 text-white font-medium hover:bg-indigo-700">
          View details
        </button>
      </div>
    </div>
  );
}

export default function CourseGrid() {
  return (
    <section id="courses" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Popular Courses</h2>
          <p className="text-slate-600 mt-1">Hand-picked programs to kickstart your learning journey</p>
        </div>
        <a href="#" className="text-indigo-600 hover:text-indigo-700 font-medium">View all</a>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((c) => (
          <CourseCard key={c.id} course={c} />
        ))}
      </div>
    </section>
  );
}
