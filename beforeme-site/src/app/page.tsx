import React from "react";

export default function Home(){
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      <header className="border-b border-slate-100">
        <div className="mx-auto max-w-4xl px-6 py-6">
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-rose-200 via-amber-100 to-sky-100 text-slate-800 shadow-sm">
                <span className="sr-only">BeforeMe</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M4 12h16M12 4v16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h1 className="text-lg font-semibold tracking-tight">BeforeMe</h1>
                <p className="text-xs text-slate-500">Automates the three-before-me Pinterest workflow</p>
              </div>
            </div>
            <div className="text-sm text-slate-500">Built for Etsy sellers — Early access</div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-16">
        <section className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-emerald-600">For Etsy sellers</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-slate-900">
              Grow your Etsy shop on Pinterest
              <span className="block text-rose-600">
                without the daily grind
              </span>
            </h2>
            <p className="mt-4 text-slate-600">
              Pinterest drives consistent traffic to Etsy shops, but only if you follow the "three-before-me" strategy: curate three pins from other creators before pinning your own products. BeforeMe automates this workflow so you can stay consistent without the friction. Focus on creating great products—we'll handle the Pinterest cadence.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-semibold">1</span>
                  <span className="text-slate-700"><strong>Stay consistent:</strong> Pin like a pro every single day, no excuses.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-semibold">2</span>
                  <span className="text-slate-700"><strong>Follow the strategy:</strong> Three-before-me enforced automatically.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-semibold">3</span>
                  <span className="text-slate-700"><strong>Stay in control:</strong> Review and approve every pin before it goes live.</span>
                </li>
              </ul>
            </div>
          </div>

        </section>

        <section className="-mx-6 mt-16 bg-emerald-50 px-6 py-12">
          <div className="mx-auto max-w-4xl">
            <h3 className="text-lg font-semibold text-slate-900">Built for how Etsy sellers actually work</h3>
            <p className="mt-2 text-slate-600">We know you're juggling content creation, shop management, and marketing. BeforeMe removes one friction point: the daily Pinterest discipline. The result is compound growth—your pins work harder for your shop while you focus on what matters.</p>
            
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg bg-white p-4 shadow-sm border border-emerald-100">
                <h4 className="font-semibold text-slate-900">Consistency = Traffic</h4>
                <p className="mt-2 text-sm text-slate-600">Pinterest rewards accounts that pin regularly. We make it effortless.</p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm border border-emerald-100">
                <h4 className="font-semibold text-slate-900">Strategy you know</h4>
                <p className="mt-2 text-sm text-slate-600">Three-before-me isn't a buzzword—it's the proven way to grow on Pinterest.</p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm border border-emerald-100">
                <h4 className="font-semibold text-slate-900">Full transparency</h4>
                <p className="mt-2 text-sm text-slate-600">You control everything. No algorithm surprises, no hidden pins.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="learn" className="mt-12">
          <h3 className="text-lg font-semibold text-slate-900">How it works</h3>
          <ol className="mt-4 space-y-4 text-slate-600">
            <li>
              <strong className="mr-2">Connect:</strong> Link a Pinterest account (OAuth handled separately).
            </li>
            <li>
              <strong className="mr-2">Enforce:</strong> BeforeMe queues and schedules pins so each new pin is supported by three prior saves.
            </li>
            <li>
              <strong className="mr-2">Control:</strong> Review queued actions and pause or approve changes.
            </li>
          </ol>
        </section>

        <section className="mt-12 border-t border-slate-100 pt-8">
          <h4 className="text-sm font-medium text-slate-700">Contact</h4>
          <p className="mt-2 text-sm text-slate-600">Stephanie — stephanie.sithu@gmail.com</p>

          <p className="mt-4 text-xs text-slate-500">BeforeMe is not affiliated with or endorsed by Pinterest.</p>
        </section>
      </main>

      <footer className="border-t border-slate-100">
        <div className="mx-auto max-w-4xl px-6 py-6 text-sm text-slate-500">© {new Date().getFullYear()} BeforeMe — Sandbox student project</div>
      </footer>
    </div>
  );
}
