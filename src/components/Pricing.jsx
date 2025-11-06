export default function Pricing() {
  return (
    <section id="pricing" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Simple, transparent pricing</h2>
          <p className="text-slate-600 mt-2">Choose a plan that matches your goals. Cancel anytime.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">Starter</h3>
            <p className="mt-1 text-sm text-slate-600">Great for beginners</p>
            <div className="mt-4 text-4xl font-bold text-slate-900">$9<span className="text-base font-medium text-slate-600">/mo</span></div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>Access to 10+ courses</li>
              <li>Community support</li>
              <li>Certificate for completion</li>
            </ul>
            <button className="mt-6 w-full rounded-md bg-slate-900 text-white py-2 hover:bg-black">Get started</button>
          </div>
          <div className="rounded-2xl border-2 border-indigo-600 bg-white p-6 shadow-lg relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs bg-indigo-600 text-white px-2 py-1 rounded">Popular</div>
            <h3 className="font-semibold text-slate-900">Pro</h3>
            <p className="mt-1 text-sm text-slate-600">Best for serious learners</p>
            <div className="mt-4 text-4xl font-bold text-slate-900">$29<span className="text-base font-medium text-slate-600">/mo</span></div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>All courses + new releases</li>
              <li>Project reviews</li>
              <li>Downloadable resources</li>
            </ul>
            <button className="mt-6 w-full rounded-md bg-indigo-600 text-white py-2 hover:bg-indigo-700">Upgrade</button>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">Team</h3>
            <p className="mt-1 text-sm text-slate-600">Upskill your team</p>
            <div className="mt-4 text-4xl font-bold text-slate-900">$99<span className="text-base font-medium text-slate-600">/mo</span></div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>Seats for 10 members</li>
              <li>Admin analytics</li>
              <li>Priority support</li>
            </ul>
            <button className="mt-6 w-full rounded-md bg-slate-900 text-white py-2 hover:bg-black">Contact sales</button>
          </div>
        </div>
      </div>
    </section>
  );
}
