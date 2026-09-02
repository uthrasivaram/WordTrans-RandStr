 
import { NavLink } from "react-router-dom";
import RouteCard from "../components/RouteCard.jsx";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#020817] text-white">
 
      <section className="relative">
 
        <div className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-emerald-500/10 blur-[120px]" />

        <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[130px]" />

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-15">

          <div className="grid items-center gap-16 lg:grid-cols-2">
 
            <div>
 
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 px-4 py-2 text-sm text-emerald-400">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                Simple tools. Powerful results.
              </div>
 
              <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                  Your everyday

                <span className="block bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  language toolkit.
                </span>

              </h1>
 
              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
                WordTrans brings together simple tools for translating
                text and generating random strings. Fast, clean, and
                built for everyday use.
              </p> 

              <div className="mt-9 flex flex-wrap gap-4">

                <NavLink
                  to="/translate"
                  className="group flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5 hover:bg-emerald-400"
                >
                  Start Translating

                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </NavLink>

                <NavLink
                  to="/random"
                  className="rounded-xl border border-slate-700 px-6 py-3.5 font-semibold text-white transition hover:border-emerald-400 hover:text-emerald-400"
                >
                  Generate Strings
                </NavLink>

              </div>
 
              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-500">

                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  No installation
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  Fast & simple
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  Browser based
                </div>

              </div>

            </div>
 
            <div className="relative flex min-h-[430px] items-center justify-center">
 
              <div className="absolute h-80 w-80 rounded-full bg-emerald-400/10 blur-[90px]" />
 
              <div className="relative w-full max-w-md rounded-3xl border border-slate-700 bg-[#071426]/90 p-5 shadow-2xl shadow-black/40 backdrop-blur-xl">
 
                <div className="mb-5 flex items-center justify-between">

                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400/70" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                    <span className="h-3 w-3 rounded-full bg-green-400/70" />
                  </div>

                  <div className="text-xs text-slate-500">
                    WordTrans
                  </div>

                </div>
 
                <div className="rounded-2xl border border-slate-700 bg-[#030b17] p-5">

                  <div className="mb-3 text-xs uppercase tracking-wider text-slate-500">
                    English
                  </div>

                  <p className="text-xl font-medium">
                    Hello, how are you?
                  </p>

                </div>
 
                <div className="flex justify-center py-4">

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-500/10 text-emerald-400">
                    ↓
                  </div>

                </div>
 
                <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5">

                  <div className="mb-3 flex items-center justify-between">

                    <span className="text-xs uppercase tracking-wider text-emerald-400">
                      Spanish
                    </span>

                    <span className="text-xs text-slate-500">
                      ES
                    </span>

                  </div>

                  <p className="text-xl font-medium text-emerald-300">
                    Hola, ¿cómo estás?
                  </p>

                </div>
 
                <div className="mt-5 flex items-center justify-between">

                  <span className="text-xs text-slate-500">
                    Translation complete
                  </span>

                  <span className="text-emerald-400">
                    ✓
                  </span>

                </div>

              </div>

 
              <div className="absolute -left-4 top-14 rounded-2xl border border-emerald-400/30 bg-[#071426]/90 px-4 py-3 shadow-xl backdrop-blur-md sm:-left-10">

                <div className="text-lg font-semibold text-emerald-300">
                  100+
                </div>

                <div className="text-xs text-slate-500">
                  Languages
                </div>

              </div>
 
              <div className="absolute -right-3 bottom-14 rounded-2xl border border-amber-400/30 bg-[#071426]/90 px-4 py-3 shadow-xl backdrop-blur-md sm:-right-8">

                <div className="text-lg font-semibold text-amber-300">
                  64
                </div>

                <div className="text-xs text-slate-500">
                  Character length
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

 
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">

        <div className="mb-8">

          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
            Explore the tools
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Everything you need,
            <span className="text-slate-500"> in one place.</span>
          </h2>

        </div>


        <div className="grid gap-5 md:grid-cols-2">
 
          <RouteCard
            to="/translate"
            title="Translator"
            desc="Turn an English sentence into the language of your choice using our translation tool."
            accent="teal"
          />
 
          <RouteCard
            to="/random"
            title="Random strings"
            desc="Generate secure random strings with adjustable length and character sets."
            accent="amber"
          />

        </div>

      </section>

 
      <section className="border-y border-slate-800/70 bg-[#030b17]">

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

          <div className="grid gap-10 md:grid-cols-3">

            <Feature
              icon="⚡"
              title="Fast"
              text="Get results instantly without complicated interfaces."
            />

            <Feature
              icon="◈"
              title="Simple"
              text="Focused tools designed to do one thing really well."
            />

            <Feature
              icon="◎"
              title="Accessible"
              text="Use WordTrans directly from your browser, anywhere."
            />

          </div>

        </div>

      </section>

 
      <section className="relative overflow-hidden">

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[100px]" />

        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center">

          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
            Ready?
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Start with a simple tool.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-slate-400">
            Translate your next sentence or generate a random string
            in just a few clicks.
          </p>

          <div className="mt-8 flex justify-center gap-4">

            <NavLink
              to="/translate"
              className="rounded-xl bg-emerald-500 px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-emerald-400"
            >
              Try Translator
            </NavLink>

            <NavLink
              to="/random"
              className="rounded-xl border border-slate-700 px-7 py-3.5 font-semibold text-white transition hover:border-emerald-400 hover:text-emerald-400"
            >
              Random Strings
            </NavLink>

          </div>

        </div>

      </section>
 
      <footer className="border-t border-slate-800 px-6 py-8">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">

          <div>
            © {new Date().getFullYear()} Uthra Ganapathy. All rights reserved.
          </div>

          <div className="flex gap-5">

            <NavLink
              to="/"
              className="transition hover:text-emerald-400"
            >
              Home
            </NavLink>

            <NavLink
              to="/translate"
              className="transition hover:text-emerald-400"
            >
              Translator
            </NavLink>

            <NavLink
              to="/random"
              className="transition hover:text-emerald-400"
            >
              Random strings
            </NavLink>

          </div>

        </div>

      </footer>

    </div>
  );
}
 

function Feature({ icon, title, text }) {
  return (
    <div className="group">

      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-xl text-emerald-400 transition group-hover:border-emerald-400/50 group-hover:bg-emerald-500/10">
        {icon}
      </div>

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-2 max-w-sm leading-7 text-slate-400">
        {text}
      </p>

    </div>
  );
}

