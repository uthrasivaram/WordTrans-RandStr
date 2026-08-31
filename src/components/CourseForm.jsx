import { useState } from "react";
import { ChevronDown, CheckCircle, ArrowLeft } from "lucide-react";

function CourseForm() {
  const [step, setStep] = useState("form");

  const [formData, setFormData] = useState({
    experience: "",
    topic: "",
    name: "",
    phone: "",
    email: "",
  });

  const experiences = [
    "Working Professional - Technical Roles",
    "Working Professional - Non Technical",
    "College Student - Final Year",
    "College Student - 1st to Pre-final Year",
    "Others",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setStep("loading");

    // Demo loading screen
    setTimeout(() => {
      setStep("course");
    }, 2000);
  };

  // =============================
  // STEP 2 - LOADING SCREEN
  // =============================
  if (step === "loading") {
    return (
      <div className="flex min-h-[650px] w-full items-center justify-center bg-[#282828] px-6 text-white">
        <div className="flex flex-col items-center text-center">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-600 border-t-[#ff6d3d]" />

          <p className="mt-6 text-sm">
            Just a moment, we’re finding the right course for you....
          </p>
        </div>
      </div>
    );
  }

  // =============================
  // STEP 3 - RECOMMENDED COURSE
  // =============================
  if (step === "course") {
    return (
      <div className="relative min-h-[650px] w-full bg-[#282828] p-6 text-white">
        {/* Back */}
        <button
          onClick={() => setStep("form")}
          className="flex items-center gap-2 text-gray-300"
        >
          <ArrowLeft size={20} />
          Back
        </button>

        <div className="mt-6">
          <h2 className="text-xl font-bold">
            Hey {formData.name || ""},
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            We’ve found just the course for you!
          </p>
        </div>

        {/* Course Image */}
        <div className="relative mt-8">
          <img
            src="https://files.codingninjas.in/professional-programmer-working-late-dark-office-2-1747212900.webp"
            alt="Course"
            className="h-[140px] w-full rounded-xl object-cover"
          />

          <img
            src="https://files.codingninjas.in/frame-1437253623-1757938442.svg"
            alt=""
            className="absolute -bottom-5 left-3 h-10 w-10 rounded-lg"
          />
        </div>

        {/* Course details */}
        <div className="mt-8">
          <span className="rounded bg-orange-500/20 px-3 py-1 text-xs text-orange-400">
            Recommended
          </span>

          <h3 className="mt-4 text-xl font-bold">
            Software Development Job Bootcamp with GenAI
          </h3>
        </div>

        {/* Checklist */}
        <div className="mt-6 space-y-5">
          {[
            "Job ready AI-infused curriculum",
            "15+ industry ready projects",
            "95% placement rate",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle
                size={18}
                className="shrink-0 text-green-400"
              />

              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>

        <button className="mt-8 w-full rounded-lg bg-[#ff6d3d] py-3 font-bold text-white">
          Visit course page
        </button>

        <div className="mt-8 flex items-center gap-2 text-sm">
          <button className="font-semibold text-[#ff6d3d]">
            Book a free webinar
          </button>

          <span className="text-gray-400">
            to learn more
          </span>
        </div>
      </div>
    );
  }

  // =============================
  // STEP 1 - MAIN FORM
  // =============================
  return (
    <div className="w-full overflow-hidden rounded-xl bg-[#282828] text-white shadow-2xl">

      <form
        onSubmit={handleSubmit}
        className="p-6 sm:p-8"
      >
        {/* Heading */}
        <h2 className="text-xl font-bold text-gray-200">
          Let's find the right course for you
        </h2>

        {/* Experience */}
        <div className="mt-5">
          <label className="text-sm text-gray-300">
            Experience
          </label>

          <div className="mt-3 space-y-3">
            {experiences.map((experience) => (
              <label
                key={experience}
                className="flex h-9 cursor-pointer items-center gap-3 text-sm text-gray-200"
              >
                <input
                  type="radio"
                  name="experience"
                  value={experience}
                  checked={formData.experience === experience}
                  onChange={handleChange}
                  required
                  className="h-4 w-4 accent-[#ff6d3d]"
                />

                <span>{experience}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Topic */}
        <div className="mt-5">
          <label className="mb-2 block text-sm text-gray-300">
            Select topic of interest
          </label>

          <div className="relative">
            <select
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              required
              className="h-12 w-full appearance-none rounded-md border border-gray-500 bg-[#1f1f1f] px-3 text-sm text-white outline-none focus:border-[#ff6d3d]"
            >
              <option value="">
                Select your options/choices
              </option>

              <option value="software-development">
                Software Development
              </option>

              <option value="data-science">
                Data Science
              </option>

              <option value="artificial-intelligence">
                Artificial Intelligence
              </option>
            </select>

            <ChevronDown
              size={18}
              className="pointer-events-none absolute right-3 top-3.5 text-gray-400"
            />
          </div>
        </div>

        {/* Name */}
        <div className="mt-5">
          <label className="mb-2 block text-sm text-gray-300">
            Name
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
            required
            className="h-12 w-full rounded-md border border-gray-500 bg-[#1f1f1f] px-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-[#ff6d3d]"
          />
        </div>

        {/* Phone */}
        <div className="mt-5">
          <label className="mb-2 block text-sm text-gray-300">
            Phone Number
          </label>

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            required
            className="h-12 w-full rounded-md border border-gray-500 bg-[#1f1f1f] px-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-[#ff6d3d]"
          />
        </div>

        {/* Email */}
        <div className="mt-5">
          <label className="mb-2 block text-sm text-gray-300">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
            className="h-12 w-full rounded-md border border-gray-500 bg-[#1f1f1f] px-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-[#ff6d3d]"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="mt-6 h-12 w-full rounded-lg bg-[#ff6d3d] font-bold text-white transition hover:bg-[#ff5722]"
        >
          Find your course
        </button>
      </form>

      {/* Disclaimer */}
      <div className="px-6 pb-6 text-[10px] leading-4 text-gray-500">
        I authorise Coding Ninjas to contact me with course updates & offers
        via Email/SMS/Whatsapp/Call. I have read and agree to{" "}

        <a
          href="#"
          className="underline"
        >
          Privacy Policy
        </a>

        {" "} & {" "}

        <a
          href="#"
          className="underline"
        >
          Terms of use
        </a>
      </div>
    </div>
  );
}

export default CourseForm;