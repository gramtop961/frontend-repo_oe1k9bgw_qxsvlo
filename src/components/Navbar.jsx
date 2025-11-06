import { BookOpen, Search, ShoppingCart, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
            <BookOpen className="h-5 w-5 text-white" />
          </div>
          <span className="font-semibold text-slate-900 text-lg">CourseFlow</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-slate-600">
          <a href="#courses" className="hover:text-slate-900 transition">Courses</a>
          <a href="#features" className="hover:text-slate-900 transition">Features</a>
          <a href="#pricing" className="hover:text-slate-900 transition">Pricing</a>
          <a href="#faq" className="hover:text-slate-900 transition">FAQ</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50">
            <Search className="h-4 w-4" />
            <span className="hidden md:inline">Search</span>
          </button>
          <button className="relative p-2 rounded-md hover:bg-slate-100">
            <ShoppingCart className="h-5 w-5 text-slate-700" />
            <span className="absolute -top-1 -right-1 h-5 w-5 text-[10px] bg-indigo-600 text-white rounded-full flex items-center justify-center">2</span>
          </button>
          <button className="p-2 rounded-md hover:bg-slate-100">
            <User className="h-5 w-5 text-slate-700" />
          </button>
        </div>
      </div>
    </header>
  );
}
