 import { useCallback, useState } from "react";
import { LANGUAGES } from "../data/languages.js";

const RAPIDAPI_KEY = import.meta.env.VITE_RAPIDAPI_KEY;
const RAPIDAPI_HOST =
  import.meta.env.VITE_RAPIDAPI_HOST || "openl-translate.p.rapidapi.com";
 


export default function Translator() {
  const [text, setText] = useState("");
  const [target, setTarget] = useState("es");
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const translate = useCallback(async () => {
    if (!text.trim()) {
      setStatus("error");
      setErrorMsg("Type something to translate first.");
      return;
    }

    if (!RAPIDAPI_KEY) {
      setStatus("error");
      setErrorMsg(
        "No API key configured. Add VITE_RAPIDAPI_KEY to your .env file."
      );
      return;
    }

    setStatus("loading");
    setErrorMsg("");
    setResult("");

    try {
      const res = await fetch(
        `https://${RAPIDAPI_HOST}/translate/bulk`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            "x-rapidapi-key": RAPIDAPI_KEY,
            "x-rapidapi-host": RAPIDAPI_HOST,
          },
          body: JSON.stringify({
            target_lang: target,
            text: [text],
          }),
        }
      );

      if (!res.ok) {
        throw new Error(`Request failed (${res.status})`);
      }

      const data = await res.json();

      const translated =
        data?.translatedTexts?.[0] ||
        data?.data?.[0] ||
        data?.result?.texts?.[0] ||
        data?.translations?.[0]?.translatedText ||
        JSON.stringify(data);

      setResult(translated);
      setStatus("done");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  }, [text, target]);

  const swapLanguages = () => {
    if (!result) return;

    setText(result);
    setResult(text);
  };

  const clearText = () => {
    setText("");
    setResult("");
    setStatus("idle");
    setErrorMsg("");
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#020817] text-white">
 
      <section className="relative overflow-hidden">

       
        <div className="pointer-events-none absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[120px]" />

        <div className="pointer-events-none absolute left-1/4 top-0 h-[300px] w-[300px] rounded-full bg-cyan-500/5 blur-[100px]" />

        <div className="mx-auto max-w-7xl px-6 pb-12 pt-14 lg:px-10">

          <div className="grid items-center gap-10 lg:grid-cols-2">

           
            <div>

            
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 px-4 py-2 text-sm text-emerald-400">
                <span className="text-lg">✦</span>
                Break language barriers
              </div>

              
              <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Translate
                <span className="block bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  Without Limits
                </span>
              </h1>

             
              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
                Break language barriers and connect with the world.
                Instant, accurate, and contextual translations for
                words, sentences, and more.
              </p>

              
              <div className="mt-9 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-2">

                <Feature
                  icon="ϟ"
                  title="Instant"
                  description="Translate in seconds"
                />

                <Feature
                  icon="◎"
                  title="Accurate"
                  description="Context-aware results"
                />

                <Feature
                  icon="◎"
                  title="100+ Languages"
                  description="Communicate globally"
                />

                <Feature
                  icon="♢"
                  title="Secure"
                  description="Your data is protected"
                />

              </div>
            </div>

            
            <div className="relative flex min-h-[400px] items-center justify-center">

            
              <div className="absolute h-72 w-72 rounded-full bg-emerald-400/10 blur-[70px]" />

            
              <div className="relative flex h-[340px] w-[340px] items-center justify-center rounded-full border border-emerald-400/30 bg-[radial-gradient(circle_at_35%_30%,rgba(20,184,166,0.22),rgba(2,8,23,0.1)_55%,rgba(2,8,23,0.9))] shadow-[0_0_80px_rgba(16,185,129,0.12)]">

             
                <div className="absolute inset-8 rounded-full border border-emerald-400/20" />

                <div className="absolute inset-16 rounded-full border border-cyan-400/20" />

                <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 rotate-[25deg] bg-emerald-400/20" />

                <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 -rotate-[25deg] bg-cyan-400/20" />

                <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-emerald-400/20" />

                <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 rotate-12 bg-cyan-400/20" />

              
                <div className="relative text-center">

                  <div className="text-6xl text-emerald-400">
                    文
                  </div>

                  <div className="mt-1 text-sm text-slate-400">
                    Translate
                  </div>

                </div>

              </div>

              {/* Language Bubbles */}
              <LanguageBubble
                text="Hello!"
                language="English"
                position="left-2 top-10"
                color="emerald"
              />

              <LanguageBubble
                text="Hola!"
                language="Spanish"
                position="right-4 top-8"
                color="blue"
              />

              <LanguageBubble
                text="你好!"
                language="Chinese"
                position="left-0 bottom-20"
                color="blue"
              />

              <LanguageBubble
                text="नमस्ते!"
                language="Hindi"
                position="right-0 top-1/2"
                color="amber"
              />

              <LanguageBubble
                text="مرحبا!"
                language="Arabic"
                position="right-10 bottom-6"
                color="purple"
              />

            </div>
          </div>
        </div>
      </section>

 
      <section className="mx-auto max-w-7xl px-5 pb-10 lg:px-10">

        <div className="rounded-3xl border border-slate-700/80 bg-[#071426]/90 p-5 shadow-2xl shadow-black/30 sm:p-7">

          <div className="grid items-stretch gap-5 lg:grid-cols-[1fr_60px_1fr]">
 
            <div>

              <label className="mb-3 block text-sm font-medium text-slate-300">
                From
              </label>

              <div className="mb-3 flex items-center justify-between rounded-xl border border-slate-700 bg-[#07101f] px-4 py-3">
                <span className="text-sm">
                  English (Detected)
                </span>

                <span className="text-slate-400">
                  ▼
                </span>
              </div>

              <div className="relative">

                <textarea
                  value={text}
                  onChange={(e) => {
                    setText(e.target.value);
                    setStatus("idle");
                  }}
                  rows={6}
                  maxLength={5000}
                  placeholder="Type or paste your text here..."
                  className="w-full resize-none rounded-xl border border-slate-700 bg-[#050d1a] p-5 pb-12 text-lg text-white outline-none placeholder:text-slate-500 focus:border-emerald-400/60 focus:ring-1 focus:ring-emerald-400/30"
                />

                <div className="absolute bottom-4 left-5 text-slate-400">
                  ♫
                </div>

                <div className="absolute bottom-4 right-5 text-sm text-slate-500">
                  {text.length} / 5000
                </div>

              </div>

            </div>

 
            <div className="flex items-center justify-center">

              <button
                type="button"
                onClick={swapLanguages}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-[#0b1b30] text-xl text-slate-300 transition hover:border-emerald-400 hover:text-emerald-400"
                title="Swap"
              >
                ⇄
              </button>

            </div>

 
            <div>

              <label className="mb-3 block text-sm font-medium text-slate-300">
                To
              </label>

              <div className="mb-3 flex items-center rounded-xl border border-slate-700 bg-[#07101f] px-4 py-3">

                <select
                  value={target}
                  onChange={(e) => setTarget(e.target.value)}
                  className="w-full cursor-pointer bg-transparent text-sm text-white outline-none"
                >
                  {LANGUAGES.map((language) => (
                    <option
                      key={language.code}
                      value={language.code}
                      className="bg-slate-900"
                    >
                      {language.label}
                    </option>
                  ))}
                </select>

              </div>

              <div className="relative min-h-[192px] rounded-xl border border-slate-700 bg-[#050d1a] p-5">

                {status === "loading" ? (
                  <div className="flex h-full min-h-[150px] items-center justify-center">
                    <div className="flex items-center gap-3 text-emerald-400">
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-emerald-400/30 border-t-emerald-400" />
                      Translating...
                    </div>
                  </div>
                ) : result ? (
                  <p className="text-lg leading-8 text-emerald-300">
                    {result}
                  </p>
                ) : (
                  <p className="text-lg text-slate-500">
                    Your translation will appear here...
                  </p>
                )}
   
              </div>

            </div>

          </div>

 
          <div className="mt-6 flex justify-center">

            <button
              type="button"
              onClick={translate}
              disabled={status === "loading"}
              className="group flex min-w-[250px] items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 px-8 py-4 text-lg font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5 hover:from-emerald-400 hover:to-teal-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <span className="text-xl transition-transform group-hover:rotate-12">
                ✦
              </span>

              {status === "loading"
                ? "Translating..."
                : "Translate"}
            </button>

          </div>

        </div>

 
        {status === "error" && (
          <div className="mt-5 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
            {errorMsg}
          </div>
        )}

 
        {(text || result) && (
          <div className="mt-4 flex justify-end">
            <button
              type="button"
              onClick={clearText}
              className="text-sm text-slate-500 transition hover:text-white"
            >
              Clear translation
            </button>
          </div>
        )}

      </section>

 
      <section className="mx-auto max-w-xl px-5 pb-14">

        <div className="flex items-center gap-3 rounded-xl border border-slate-700 bg-[#071426] px-5 py-4">

          <span className="text-xl text-emerald-400">
            ♧
          </span>

          <p className="text-sm text-slate-300">
            <strong className="text-emerald-400">
              Pro Tip:
            </strong>{" "}
            For best results, use clear and simple sentences.
          </p>

        </div>

      </section>

    </div>
  );
}

 

function Feature({ icon, title, description }) {
  return (
    <div className="group">

      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/5 text-2xl text-emerald-400 transition group-hover:border-emerald-400 group-hover:bg-emerald-400/10">
        {icon}
      </div>

      <h3 className="font-semibold text-emerald-400">
        {title}
      </h3>

      <p className="mt-1 text-sm leading-5 text-slate-400">
        {description}
      </p>

    </div>
  );
}

 

function LanguageBubble({
  text,
  language,
  position,
  color,
}) {
  const colors = {
    emerald:
      "border-emerald-400/60 bg-emerald-500/10 text-emerald-300",
    blue:
      "border-blue-400/60 bg-blue-500/10 text-blue-300",
    amber:
      "border-amber-400/60 bg-amber-500/10 text-amber-300",
    purple:
      "border-purple-400/60 bg-purple-500/10 text-purple-300",
  };

  return (
    <div
      className={`absolute ${position} rounded-2xl border px-4 py-3 backdrop-blur-md ${colors[color]}`}
    >
      <div className="font-semibold">
        {text}
      </div>

      <div className="mt-1 text-xs text-slate-400">
        {language}
      </div>
    </div>
  );
}