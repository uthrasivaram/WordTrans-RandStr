 
import {useCallback,useEffect,useMemo,useState} from "react";

import Toggle from "../components/Toggle.jsx";
import { CHARSETS } from "../data/charsets.js";

export default function RandomString() {
  const [length, setLength] = useState(16);
  const [useUpper, setUseUpper] = useState(true);
  const [useDigits, setUseDigits] = useState(true);
  const [useSymbols, setUseSymbols] = useState(false);
  const [value, setValue] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = useCallback(() => {
    let pool = CHARSETS.lower;

    if (useUpper) {
      pool += CHARSETS.upper;
    }

    if (useDigits) {
      pool += CHARSETS.digits;
    }

    if (useSymbols) {
      pool += CHARSETS.symbols;
    }

    const bytes = new Uint32Array(length);

    crypto.getRandomValues(bytes);

    let output = "";

    for (let i = 0; i < length; i++) {
      output += pool[bytes[i] % pool.length];
    }

    setValue(output);
    setCopied(false);
  }, [length, useUpper, useDigits, useSymbols]);

  // Generate automatically when options change
  useEffect(() => {
    generate();
  }, [generate]);

  const entropyBits = useMemo(() => {
    let poolSize = CHARSETS.lower.length;

    if (useUpper) {
      poolSize += CHARSETS.upper.length;
    }

    if (useDigits) {
      poolSize += CHARSETS.digits.length;
    }

    if (useSymbols) {
      poolSize += CHARSETS.symbols.length;
    }

    return Math.round(length * Math.log2(poolSize));
  }, [length, useUpper, useDigits, useSymbols]);

  const copy = async () => {
    if (!value) return;

    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#020817] text-white">

  

      <section className="relative overflow-hidden">
 
        <div className="pointer-events-none absolute -left-40 top-10 h-[450px] w-[450px] rounded-full bg-amber-500/10 blur-[130px]" />

        <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[130px]" />

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">

          <div className="grid items-center gap-16 lg:grid-cols-2">
 
            <div>
 
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/5 px-4 py-2 text-sm text-amber-300">

                <span className="flex h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.8)]" />

                Secure random generation

              </div>
 
              <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">

                Generate

                <span className="block bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-400 bg-clip-text text-transparent">
                  Random Strings
                </span>

              </h1>
 
              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
                Create random strings for passwords, testing,
                development, IDs, tokens, and more. Choose exactly
                which characters you want to include.
              </p>

              {/* Features */}
              <div className="mt-9 grid grid-cols-2 gap-6">

                <Feature
                  icon="ϟ"
                  title="Instant"
                  description="Generate immediately"
                />

                <Feature
                  icon="◇"
                  title="Secure"
                  description="Web Crypto API"
                />

                <Feature
                  icon="Aa"
                  title="Custom"
                  description="Choose character sets"
                />

                <Feature
                  icon="∞"
                  title="Flexible"
                  description="4–64 characters"
                />

              </div>

            </div>

 
            <div className="relative flex min-h-[400px] items-center justify-center">

              <div className="absolute h-80 w-80 rounded-full bg-amber-400/10 blur-[100px]" />
 
              <div className="relative w-full max-w-lg rounded-3xl border border-slate-700 bg-[#071426]/90 p-5 shadow-2xl shadow-black/40 backdrop-blur-xl">
 
                <div className="mb-6 flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/10 text-xl text-amber-300">
                      #
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        String Generator
                      </h3>

                      <p className="text-xs text-slate-500">
                        Live preview
                      </p>
                    </div>

                  </div>

                  <div className="flex items-center gap-2 text-xs text-emerald-400">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    Ready
                  </div>

                </div>

 
                <div className="rounded-2xl border border-amber-400/20 bg-[#030b17] p-5">

                  <p className="mb-3 text-xs uppercase tracking-[0.2em] text-slate-500">
                    Generated string
                  </p>

                  <p className="break-all font-mono text-lg leading-8 text-amber-300">
                    {value || "Generating..."}
                  </p>

                </div>
 
                <div className="mt-5 flex flex-wrap gap-2">

                  {[
                    "A-Z",
                    "a-z",
                    "0-9",
                    "!@#$",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 font-mono text-xs text-slate-400"
                    >
                      {item}
                    </span>
                  ))}

                </div>

 
                <div className="mt-6 flex items-center justify-between border-t border-slate-800 pt-5">

                  <span className="text-sm text-slate-500">
                    Entropy
                  </span>

                  <span className="font-mono text-amber-300">
                    ~{entropyBits} bits
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
 

      <section className="mx-auto max-w-5xl px-5 pb-20 lg:px-10">

        <div className="rounded-3xl border border-slate-700 bg-[#071426]/90 p-5 shadow-2xl shadow-black/30 sm:p-8">

         
          <div className="mb-8">

            <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-amber-400">
              Customize
            </p>

            <h2 className="text-3xl font-bold">
              Build your string
            </h2>

            <p className="mt-2 text-slate-400">
              Adjust the options below. Your string regenerates automatically.
            </p>

          </div>
          
 
          <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-stretch">

            {/* LEFT — Result */}
            <div className="w-full sm:basis-2/3">
              <div className="relative h-full rounded-2xl border border-amber-400/20 bg-[#030b17] p-6">

                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    Result
                  </span>

                  <span className="text-xs text-slate-600">
                    {value.length} characters
                  </span>
                </div>

                <div className="min-h-16 break-all font-mono text-lg leading-8 text-amber-300">
                  {value || "—"}
                </div>

              </div>
            </div>


            {/* RIGHT — Buttons */}
            <div className="w-full sm:basis-1/3">
              <div className="flex h-full flex-col justify-center gap-3">

                <button
                  onClick={generate}
                  className="w-full rounded-xl bg-gradient-to-r from-amber-400 to-orange-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-amber-500/10 transition hover:-translate-y-0.5 hover:from-amber-300 hover:to-orange-300"
                >
                  ↻ Regenerate
                </button>

                <button
                  onClick={copy}
                  disabled={!value}
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 font-semibold text-white transition hover:border-amber-400 hover:text-amber-300 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {copied ? "✓ Copied" : "Copy"}
                </button>

              </div>
            </div>

          </div> 
   
          <div className="my-8 border-t border-slate-800" />

 
          <div className="grid gap-10 md:grid-cols-2">
 
            <div>

              <div className="mb-4 flex items-center justify-between">

                <div>
                  <h3 className="font-semibold">
                    String length
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Choose between 4 and 64 characters.
                  </p>
                </div>

                <div className="rounded-lg bg-amber-400/10 px-3 py-1.5 font-mono text-amber-300">
                  {length}
                </div>

              </div>

              <input
                type="range"
                min="4"
                max="64"
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-700 accent-amber-400"
              />

              <div className="mt-2 flex justify-between text-xs text-slate-600">
                <span>4</span>
                <span>32</span>
                <span>64</span>
              </div>

            </div>
 
            <div>

              <h3 className="font-semibold">
                Character set
              </h3>

              <p className="mb-4 mt-1 text-sm text-slate-500">
                Select the characters to include.
              </p>

              <div className="space-y-3">

                <Toggle
                  label="Uppercase letters (A–Z)"
                  checked={useUpper}
                  onChange={setUseUpper}
                />

                <Toggle
                  label="Digits (0–9)"
                  checked={useDigits}
                  onChange={setUseDigits}
                />

                <Toggle
                  label="Symbols (!@#$…)"
                  checked={useSymbols}
                  onChange={setUseSymbols}
                />

              </div>

            </div>

          </div>

 
          <div className="mt-8 rounded-2xl border border-slate-800 bg-[#030b17] p-5">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              <div>

                <h3 className="font-semibold">
                  Estimated entropy
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Higher entropy generally means more possible combinations.
                </p>

              </div>

              <div className="text-2xl font-bold text-amber-300">
                ~{entropyBits}
                <span className="ml-2 text-sm font-normal text-slate-500">
                  bits
                </span>
              </div>

            </div>
 
            <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-800">

              <div
                className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-400 transition-all duration-300"
                style={{
                  width: `${Math.min(
                    100,
                    (entropyBits / 384) * 100
                  )}%`,
                }}
              />

            </div>

          </div>

        </div>

      </section>
 
      <section className="border-y border-slate-800/70 bg-[#030b17]">

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

          <div className="grid gap-10 md:grid-cols-3">

            <InfoCard
              icon="⚡"
              title="Instant generation"
              text="Generate a new string immediately whenever you need one."
            />

            <InfoCard
              icon="🔐"
              title="Cryptographically random"
              text="Random values are generated using the browser Web Crypto API."
            />

            <InfoCard
              icon="⚙"
              title="Fully customizable"
              text="Choose the length and character groups that fit your use case."
            />

          </div>

        </div>

      </section>
 
      <section className="relative overflow-hidden">

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-[100px]" />

        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center">

          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-amber-400">
            Randomize
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Need another string?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-slate-400">
            Change your options or simply hit regenerate to create
            something new.
          </p>

          <button
            onClick={generate}
            className="mt-8 rounded-xl bg-amber-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-amber-300"
          >
            Generate New String
          </button>

        </div>

      </section>
 
      <footer className="border-t border-slate-800 px-6 py-8">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">

          <span>
            WordTrans
          </span>

          <span>
            Secure random string generator
          </span>

        </div>

      </footer>

    </div>
  );
}

 
function Feature({ icon, title, description }) {
  return (
    <div className="group">

      <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/5 text-lg text-amber-300 transition group-hover:border-amber-400/50">
        {icon}
      </div>

      <h3 className="font-semibold text-amber-300">
        {title}
      </h3>

      <p className="mt-1 text-sm leading-5 text-slate-500">
        {description}
      </p>

    </div>
  );
}

 

function InfoCard({ icon, title, text }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">

      <div className="mb-4 text-2xl">
        {icon}
      </div>

      <h3 className="text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-2 leading-7 text-slate-400">
        {text}
      </p>

    </div>
  );
}
 
