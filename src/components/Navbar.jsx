 import React, { useState, useRef } from "react";
 
   
  
 const menuData = {
   about: {
     options: [
       {
         id: "company",
         label: "Company",
         food: [
           { title: "Our Kitchen", desc: "How we source and prep every dish." },
           { title: "Farm Partners", desc: "Meet the growers behind our produce." },
         ],
         snacks: [
           { title: "Snack Lab", desc: "Where we test new bite-sized ideas." },
           { title: "Packaging", desc: "Why our wrappers are compostable." },
           { title: "Quality Checks", desc: "Every batch tasted before it ships." },
         ],
       },
       {
         id: "mission",
         label: "Mission",
         food: [
           { title: "Zero Waste", desc: "Our pledge to cut kitchen waste in half." },
           { title: "Local Sourcing", desc: "Ingredients from within 100 miles." },
         ],
         snacks: [
           { title: "Healthy Bites", desc: "Snacks with less sugar, more flavor." },
           { title: "Recyclable Bags", desc: "100% recyclable snack packaging." },
         ],
       },
       {
         id: "team",
         label: "Our Team",
         food: [
           { title: "Head Chefs", desc: "The people crafting every recipe." },
         ],
         snacks: [
           { title: "Flavor Scouts", desc: "Team hunting the next big snack." },
           { title: "Tasters Panel", desc: "Volunteers who rate every new snack." },
         ],
       },
       {
         id: "careers",
         label: "Careers",
         food: [
           { title: "Kitchen Roles", desc: "Open positions in our food teams." },
           { title: "Internships", desc: "Learn recipe development hands-on." },
           { title: "Culinary Grants", desc: "Funding for young chefs." },
         ],
         snacks: [
           { title: "Snack R&D Jobs", desc: "Help invent our next snack line." },
         ],
       },
       {
         id: "press",
         label: "Press",
         food: [
           { title: "Food Features", desc: "Press coverage on our menu launches." },
         ],
         snacks: [
           { title: "Snack Awards", desc: "Recognitions for our snack range." },
           { title: "Media Kit", desc: "Logos, photos and brand assets." },
         ],
       },
     ],
   },
   content: {
     options: [
       {
         id: "recipes",
         label: "Recipes",
         food: [
           { title: "Weeknight Meals", desc: "Quick dinners ready in 30 minutes." },
           { title: "Family Favorites", desc: "Recipes passed down through years." },
         ],
         snacks: [
           { title: "No-Bake Snacks", desc: "Simple bites with zero oven time." },
           { title: "Party Trays", desc: "Snack platters for any gathering." },
         ],
       },
       {
         id: "guides",
         label: "Guides",
         food: [
           { title: "Meal Prep 101", desc: "A beginner's guide to prepping food." },
         ],
         snacks: [
           { title: "Pantry Guide", desc: "Stocking a healthy snack pantry." },
           { title: "Storage Tips", desc: "Keep snacks fresh for longer." },
           { title: "Portioning", desc: "Right snack sizes for every craving." },
         ],
       },
       {
         id: "videos",
         label: "Videos",
         food: [
           { title: "Cooking Shorts", desc: "One-minute recipes to try tonight." },
           { title: "Chef Interviews", desc: "Conversations with our head chefs." },
         ],
         snacks: [
           { title: "Snack Reviews", desc: "Video taste tests of new arrivals." },
         ],
       },
       {
         id: "blog",
         label: "Blog",
         food: [
           { title: "Seasonal Eating", desc: "What to cook this time of year." },
         ],
         snacks: [
           { title: "Snack Trends", desc: "What's popular in snacking right now." },
           { title: "Behind the Bite", desc: "Stories from our snack kitchen." },
         ],
       },
       {
         id: "community",
         label: "Community",
         food: [
           { title: "Recipe Swap", desc: "Share and discover member recipes." },
           { title: "Cook-Alongs", desc: "Join live weekly cooking sessions." },
         ],
         snacks: [
           { title: "Snack Club", desc: "Monthly picks voted by members." },
         ],
       },
     ],
   },
 };
  
 function ChevronDownIcon() {
   return (
     <svg
       width="12"
       height="12"
       viewBox="0 0 24 24"
       fill="none"
       stroke="currentColor"
       strokeWidth="2.5"
       strokeLinecap="round"
       strokeLinejoin="round"
       className="ml-1"
     >
       <polyline points="6 9 12 15 18 9" />
     </svg>
   );
 }
 
  
 const hoverPill =
   "transition-colors duration-200 rounded-full hover:bg-slate-100";
 
 function MegaMenu({ menuKey }) {
   const options = menuData[menuKey].options;
   const [activeId, setActiveId] = useState(options[0].id);
   const active = options.find((o) => o.id === activeId) || options[0];
 
   return (
     <div
       className="absolute left-0 top-full w-full bg-white border-t border-slate-100 shadow-xl z-40"
       style={{ height: "400px" }}
     >
       <div className="flex h-full max-w-[1600px] mx-auto">
         {/* Left column: 5 selectable options, 150px wide */}
         <div className="flex flex-col gap-1 py-6 pl-[200px] pr-4 border-r border-slate-100" style={{ minWidth: "150px" }}>
           {options.map((opt) => (
             <button
               key={opt.id}
               onMouseEnter={() => setActiveId(opt.id)}
               onFocus={() => setActiveId(opt.id)}
               className={`text-left text-sm px-4 py-2.5 ${hoverPill} ${
                 activeId === opt.id
                   ? "bg-slate-100 text-slate-900 font-medium"
                   : "text-slate-600"
               }`}
               style={{ width: "150px" }}
             >
               {opt.label}
             </button>
           ))}
         </div>
 
         {/* Right side: Food + Snacks columns, shown in a row */}
         <div className="flex-1 py-6 px-10 overflow-y-auto">
           <div className="grid grid-cols-2 gap-10 h-full">
             {/* Food column */}
             <div>
               <h3 className="text-xs font-semibold tracking-wide text-slate-400 uppercase mb-4">
                 Food
               </h3>
               <div className="flex flex-col gap-1">
                 {active.food.map((item, i) => (
                   <a
                     key={i}
                     href="#"
                     className={`block px-3 py-2 ${hoverPill}`}
                   >
                     <p className="text-sm font-medium text-slate-800">
                       {item.title}
                     </p>
                     <p className="text-xs text-slate-500 mt-0.5">
                       {item.desc}
                     </p>
                   </a>
                 ))}
               </div>
             </div>
 
             {/* Snacks column */}
             <div>
               <h3 className="text-xs font-semibold tracking-wide text-slate-400 uppercase mb-4">
                 Snacks
               </h3>
               <div className="flex flex-col gap-1">
                 {active.snacks.map((item, i) => (
                   <a
                     key={i}
                     href="#"
                     className={`block px-3 py-2 ${hoverPill}`}
                   >
                     <p className="text-sm font-medium text-slate-800">
                       {item.title}
                     </p>
                     <p className="text-xs text-slate-500 mt-0.5">
                       {item.desc}
                     </p>
                   </a>
                 ))}
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   );
 }
 
 export default function Navbar() {
   const [openMenu, setOpenMenu] = useState(null); // null | "about" | "content"
   const closeTimer = useRef(null);
 
   const openWithHover = (key) => {
     if (closeTimer.current) clearTimeout(closeTimer.current);
     setOpenMenu(key);
   };
 
   const scheduleClose = () => {
     closeTimer.current = setTimeout(() => setOpenMenu(null), 150);
   };
 
   return (
     <nav
       className="relative w-full border-b border-slate-200 bg-[#1f1f1f] font-semibold text-white"
       onMouseLeave={scheduleClose}
     >
       <div className="flex items-center justify-between h-15 pl-[200px] pr-[200px]">
         {/* Left side: nav links */}
         <div className="flex items-center gap-2">
           <a href="#" className={`flex items-center px-2 py-2 ${hoverPill}`}>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ4IiBoZWlnaHQ9IjI2IiB2aWV3Qm94PSIwIDAgMTQ4IDI2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfNDIzM18yNDE4NSkiPgo8cGF0aCBkPSJNMzguMDk4IDE4LjAzMjRDMzUuMjI0MiAxOC4wMzI0IDMzLjA0NjUgMTUuODU0NyAzMy4wNDY1IDEzLjAwMzhDMzMuMDQ2NSAxMC4xNTI4IDM1LjIyNDIgNy45OTI2OCAzOC4wOTggNy45OTI2OEM0MC40ODkzIDcuOTkyNjggNDIuMzQ2MyA5LjQ0NDUgNDIuODgxNSAxMS42Mzk4SDQwLjkxODJDNDAuNDE4MSAxMC41NDIyIDM5LjM0NzcgOS44Njg5NyAzOC4wOTggOS44Njg5N0MzNi4zNjY3IDkuODY4OTcgMzUuMDYzNCAxMS4yMzIgMzUuMDYzNCAxMy4wMDI5QzM1LjA2MzQgMTQuNzczNyAzNi4zODQzIDE2LjE1NDQgMzguMDk4IDE2LjE1NDRDMzkuMzY1MyAxNi4xNTQ0IDQwLjM4MjEgMTUuNDgxMiA0MC45MDA2IDE0LjMxMzJINDIuODk5MUM0Mi4zODE0IDE2LjU0MzcgNDAuNDcxNyAxOC4wMzE1IDM4LjA5OCAxOC4wMzE1VjE4LjAzMjRaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNDkuMzA3NSAxOC4wMzI0QzQ2LjM0NSAxOC4wMzI0IDQ0LjE0OTcgMTUuODg5OCA0NC4xNDk3IDEzLjAwMzhDNDQuMTQ5NyAxMC4xMTc3IDQ2LjM0NSA3Ljk5MjY4IDQ5LjMwNzUgNy45OTI2OEM1Mi4yNyA3Ljk5MjY4IDU0LjQ0NzggMTAuMTM1MyA1NC40NDc4IDEzLjAwMzhDNTQuNDQ3OCAxNS44NzIzIDUyLjI1MjUgMTguMDMyNCA0OS4zMDc1IDE4LjAzMjRaTTQ5LjMwNzUgMTYuMTU1MkM1MS4xMjg0IDE2LjE1NTIgNTIuNDMwOSAxNC44NDQ5IDUyLjQzMDkgMTMuMDAzOEM1Mi40MzA5IDExLjE2MjYgNTEuMTI3NiA5Ljg2OTg1IDQ5LjMwNzUgOS44Njk4NUM0Ny40ODc0IDkuODY5ODUgNDYuMTY2NiAxMS4xODAyIDQ2LjE2NjYgMTMuMDAzOEM0Ni4xNjY2IDE0LjgyNzMgNDcuNDY5OSAxNi4xNTUyIDQ5LjMwNzUgMTYuMTU1MloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02NC4wNTUxIDQuODA2MTVINjYuMDM2VjE3LjgwMjNINjQuNTM2N0w2NC4yNjg3IDE2LjcwNDZDNjMuNDExOCAxNy41MzY5IDYyLjIxNjYgMTguMDMyNSA2MC44NzgxIDE4LjAzMjVDNTcuOTUwOCAxOC4wMzI1IDU1Ljg2MjcgMTUuODcyNCA1NS44NjI3IDEzLjAyMTRDNTUuODYyNyAxMC4xNzA1IDU3Ljk1MDggNy45OTI3OCA2MC44NzgxIDcuOTkyNzhDNjIuMTA5NCA3Ljk5Mjc4IDYzLjE5ODIgOC4zOTk2OCA2NC4wNTUxIDkuMTA4MDJWNC44MDYxNVpNNjEuMDIwNSAxNi4xNTUzQzYyLjg0MTQgMTYuMTU1MyA2NC4xNzk5IDE0Ljc5MjMgNjQuMTc5OSAxMy4wMDM5QzY0LjE3OTkgMTEuMjE1NCA2Mi44NDE0IDkuODY5OTYgNjEuMDIwNSA5Ljg2OTk2QzU5LjE5OTYgOS44Njk5NiA1Ny44Nzk2IDExLjIxNTQgNTcuODc5NiAxMy4wMDM5QzU3Ljg3OTYgMTQuNzkyMyA1OS4yMTggMTYuMTU1MyA2MS4wMjA1IDE2LjE1NTNaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNjguODI5IDYuNzU0NTFWNC43MTgyNkg3MC44NjM1VjYuNzU0NTFINjguODI5Wk02OC44NjUgMTcuNzg0N1Y4LjIyMzkxSDcwLjg0NTlWMTcuNzg0N0g2OC44NjVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNzguNzQ0NyA4LjAxMTIzQzgxLjAxMTIgOC4wMTEyMyA4Mi40MjE3IDkuNjc1NzMgODIuNDIxNyAxMi4wMzAxVjE3Ljc4NDdIODAuNDQwOVYxMi40Mzc5QzgwLjQ0MDkgMTAuNzAzMSA3OS42NzM2IDkuNzgyMDcgNzguMjI4IDkuNzgyMDdDNzYuNzExMSA5Ljc4MjA3IDc1LjYzOTggMTAuOTg2MSA3NS42Mzk4IDEyLjY2ODFWMTcuNzg0N0g3My42NTg5VjguMjIzOTFINzUuMDMzNEw3NS40MjYzIDkuNTY5MzlDNzYuMTM5OSA4LjU5NTY1IDc3LjMzNiA4LjAxMTIzIDc4Ljc0NTYgOC4wMTEyM0g3OC43NDQ3WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTkyLjk4MSA4LjIyNEg5NC4yODQzVjE2LjU0NTZDOTQuMjg0MyAxOS41OTA4IDkyLjQ2MzMgMjEuNDUwNCA4OS40ODMyIDIxLjQ1MDRDODcuMDAyMyAyMS40NTA0IDg1LjI1MzQgMjAuMTc1MiA4NC43NzE4IDE4LjA4NjJIODYuNzM1MUM4Ny4xMTA0IDE5LjEzMTEgODguMjUyOSAxOS43MTQ3IDg5LjQ2NjUgMTkuNzE0N0M5MS4xMjY3IDE5LjcxNDcgOTIuMzU3OSAxOC42MTcgOTIuMzU3OSAxNi44MTFWMTYuMzY4MUM5MS41MTg2IDE3LjA5NCA5MC40MTIyIDE3LjUxOTQgODkuMTYyNSAxNy41MTk0Qzg2LjQ2NzEgMTcuNTE5NCA4NC4zOTc1IDE1LjQ0OCA4NC4zOTc1IDEyLjc1N0M4NC4zOTc1IDEwLjA2NiA4Ni40NjggNy45OTQ2MyA4OS4xNjI1IDcuOTk0NjNDOTAuNTczIDcuOTk0NjMgOTEuODA0MiA4LjU2MTQ3IDkyLjY3ODcgOS40NjQwM0w5Mi45ODI3IDguMjI0ODhMOTIuOTgxIDguMjI0Wk04OS4zNzYgMTUuNjk1OEM5MS4wODk3IDE1LjY5NTggOTIuMzM4NSAxNC40NTY3IDkyLjMzODUgMTIuNzU3QzkyLjMzODUgMTEuMDU3MyA5MS4xMDczIDkuODM1NzcgODkuMzc2IDkuODM1NzdDODcuNjQ0NyA5LjgzNTc3IDg2LjQxMjYgMTEuMDkyNSA4Ni40MTI2IDEyLjc1N0M4Ni40MTI2IDE0LjQyMTUgODcuNjYyMyAxNS42OTU4IDg5LjM3NiAxNS42OTU4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEwMS44NjcgOC4wNDYzOUMxMDQuMTg3IDguMDQ2MzkgMTA1LjYzMyA5LjY5MzMxIDEwNS42MzMgMTIuMTE4OVYxNy43ODQ3SDEwNC43NThWMTIuMjk2NEMxMDQuNzU4IDEwLjExODcgMTAzLjYxNiA4Ljg0MzQ4IDEwMS42NyA4Ljg0MzQ4Qzk5LjcyNDIgOC44NDM0OCA5OC4yNjA5IDEwLjQxOTIgOTguMjYwOSAxMi4zMzE2VjE3Ljc4NDdIOTcuMzg2NVY4LjIyMzkxSDk4LjAyODlMOTguMjA3MyAxMC4xNzE0Qzk4LjkwMzMgOC44Nzg2NCAxMDAuMjc4IDguMDQ2MzkgMTAxLjg2NiA4LjA0NjM5SDEwMS44NjdaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTA4LjY5NSA2LjI1NzdWNS4wMzYxM0gxMDkuODAyVjYuMjU3N0gxMDguNjk1Wk0xMDguODIgMTcuNzg0NFY4LjIyMzY0SDEwOS42OTRWMTcuNzg0NEgxMDguODJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTE3LjUzNiA4LjA0NjM5QzExOS44NTYgOC4wNDYzOSAxMjEuMzAyIDkuNjkzMzEgMTIxLjMwMiAxMi4xMTg5VjE3Ljc4NDdIMTIwLjQyOFYxMi4yOTY0QzEyMC40MjggMTAuMTE4NyAxMTkuMjg1IDguODQzNDggMTE3LjMzOSA4Ljg0MzQ4QzExNS4zOTQgOC44NDM0OCAxMTMuOTMgMTAuNDE5MiAxMTMuOTMgMTIuMzMxNlYxNy43ODQ3SDExMy4wNTZWOC4yMjM5MUgxMTMuNjk4TDExMy44NzcgMTAuMTcxNEMxMTQuNTczIDguODc4NjQgMTE1Ljk0NyA4LjA0NjM5IDExNy41MzUgOC4wNDYzOUgxMTcuNTM2WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEyNC41OTcgNi4yNTc3VjUuMDM2MTNIMTI1LjY4NlY2LjI1NzdIMTI0LjU5N1pNMTIyLjA2MiAyMS4xODM3VjIwLjM4NjZIMTIyLjQ3M0MxMjMuODgzIDIwLjM4NjYgMTI0LjcwNCAxOS41NzIgMTI0LjcwNCAxOC4xNzM3VjguMjIzNjRIMTI1LjU3OFYxOC4yMjc0QzEyNS41NzggMjAuMDMzMyAxMjQuNDAxIDIxLjE4NDYgMTIyLjU4IDIxLjE4NDZIMTIyLjA2MlYyMS4xODM3WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEzNy4zNTkgOC4yMjQwMUgxMzguMDczVjE3Ljc4NDhIMTM3LjM0MUwxMzcuMjM0IDE1LjcxMzRDMTM2LjM5NiAxNy4wOTQgMTM0Ljg5NyAxNy45Nzk5IDEzMy4wNCAxNy45Nzk5QzEzMC4yMTkgMTcuOTc5OSAxMjguMDk1IDE1LjgzNzMgMTI4LjA5NSAxMy4wMDQ4QzEyOC4wOTUgMTAuMTcyNCAxMzAuMjE5IDguMDQ3MzYgMTMzLjA0IDguMDQ3MzZDMTM0Ljg5NiA4LjA0NzM2IDEzNi4zOTUgOC45MzIzNCAxMzcuMjM0IDEwLjMxMzlMMTM3LjM1OSA4LjIyNDg5VjguMjI0MDFaTTEzMy4wOTMgMTcuMTQ3NkMxMzUuNDY3IDE3LjE0NzYgMTM3LjE5OCAxNS4zOTQ0IDEzNy4xOTggMTMuMDA0OEMxMzcuMTk4IDEwLjYxNTMgMTM1LjQ2NyA4Ljg3OTYxIDEzMy4wOTMgOC44Nzk2MUMxMzAuNzIgOC44Nzk2MSAxMjguOTg4IDEwLjY2OCAxMjguOTg4IDEzLjAwNDhDMTI4Ljk4OCAxNS4zNDE2IDEzMC43NTYgMTcuMTQ3NiAxMzMuMDkzIDE3LjE0NzZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTQ0LjMwNSAxNy45Nzk4QzE0Mi4wOTIgMTcuOTc5OCAxNDAuNyAxNi44ODIxIDE0MC41NzUgMTUuMDkzN0gxNDEuNDMyQzE0MS41NTYgMTYuNDIxNiAxNDIuNjYzIDE3LjE4MjcgMTQ0LjMyMyAxNy4xODI3QzE0NS45ODMgMTcuMTgyNyAxNDcuMTI1IDE2LjQyMTYgMTQ3LjEyNSAxNS4yMTc2QzE0Ny4xMjUgMTMuNzMwNiAxNDUuNjc5IDEzLjQ2NDQgMTQ0LjE4IDEzLjIxNjVDMTQyLjUyIDEyLjkzMzYgMTQwLjc1MyAxMi42MTQ1IDE0MC43NTMgMTAuNjQ5NUMxNDAuNzUzIDkuMDkxMzEgMTQyLjE2NCA4LjA0NjM5IDE0NC4yNTEgOC4wNDYzOUMxNDYuMzM4IDguMDQ2MzkgMTQ3LjY3NyA5LjEwODg5IDE0Ny43NDkgMTAuODA4NUgxNDYuOTFDMTQ2LjgzOSA5LjU1MTgyIDE0NS44NTcgOC44MjU5MSAxNDQuMjMzIDguODI1OTFDMTQyLjYwOSA4LjgyNTkxIDE0MS42MDkgOS41NTE4MiAxNDEuNjA5IDEwLjYzMTlDMTQxLjYwOSAxMS45MjQ3IDE0Mi45MTIgMTIuMTM2NSAxNDQuMzkzIDEyLjM4NTJDMTQ2LjA3MSAxMi42NjgxIDE0Ny45OTggMTIuOTg3MiAxNDcuOTk4IDE1LjE4MjVDMTQ3Ljk5OCAxNi44ODIxIDE0Ni41MTYgMTcuOTc5OCAxNDQuMzA0IDE3Ljk3OThIMTQ0LjMwNVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMi44Mjc0IDI1Ljk4MjJDMTkuOTExNyAyNS45ODIyIDI1LjY1NDggMjAuMTY5OSAyNS42NTQ4IDEzLjAwMDFDMjUuNjU0OCA1LjgzMDMzIDE5LjkxMTcgMC4wMTgwNjY0IDEyLjgyNzQgMC4wMTgwNjY0QzUuNzQzMDEgMC4wMTgwNjY0IDAgNS44MzAzMyAwIDEzLjAwMDFDMCAyMC4xNjk5IDUuNzQzMDEgMjUuOTgyMiAxMi44Mjc0IDI1Ljk4MjJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNC42NTE1NiAxMy4wNDA0QzQuNjEyODkgMTQuMzY0OCA0Ljg0MzE1IDE1LjY4OTIgNS4yNjY3NCAxNi45NzMyQzUuNjUxNjcgMTguMDYzOCA2LjM4Mjg1IDE4Ljk5ODkgNy4zNDYwNSAxOS42NjA3QzguNDYyMTYgMjAuMzYyIDkuNzQzNDkgMjAuNjM0NCAxMS4wODAyIDIwLjYzNDRIMTkuMjc5N1YxNi43Mjg5SDExLjA2N0M5LjA2MTUyIDE2LjcyODkgOC4wOTgzMyAxNS4zNSA4LjA5ODMzIDEzLjA0ODRWMTMuMDUxQzguMDk4MzMgMTAuNzQ5MyA5LjA2MjQgOS4zNzU3MyAxMS4wNjcgOS4zNzU3M0gxOS4yNzg4VjUuNDcwMjFIMTEuMDc5M0M5Ljc4MzA0IDUuNDcwMjEgOC40NjIxNiA1Ljc0MjY1IDcuMzQ1MTcgNi40NDM5NkM2LjM4Mjg1IDcuMTA1NzIgNS42NTE2NyA4LjAzOTkxIDUuMjY1ODYgOS4xMzE0MUM0Ljg0MjI3IDEwLjQxNjMgNC42MTIwMSAxMS43Mzk4IDQuNjUwNjggMTMuMDY0MiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzQyMzNfMjQxODUpIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOS42MzE5NiAxMi4yNDE3TDEzLjQ4MTIgMTIuOTg2MUMxMy40ODEyIDEyLjk4NjEgMTAuNjU3NiAxNS45NTQ4IDkuNjMxOTYgMTIuMjQxN1oiIGZpbGw9IiM0MTQxNDEiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOC42NTkzIDEyLjI1NDlMMTQuOTI2OSAxMy4wMzc5QzE0LjkyNjkgMTMuMDM3OSAxOC4xNTkyIDE1Ljk3NSAxOC42NTkzIDEyLjI1NDlaIiBmaWxsPSIjNDE0MTQxIi8+CjwvZz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl80MjMzXzI0MTg1IiB4MT0iNC42NDcxNyIgeTE9IjEzLjA1MjciIHgyPSIxOS4yNzg4IiB5Mj0iMTMuMDUyNyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRjE2MjIyIi8+CjxzdG9wIG9mZnNldD0iMC4yNiIgc3RvcC1jb2xvcj0iI0YzNzQyMSIvPgo8c3RvcCBvZmZzZXQ9IjAuNzEiIHN0b3AtY29sb3I9IiNGNjhEMUUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRjc5ODFEIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxjbGlwUGF0aCBpZD0iY2xpcDBfNDIzM18yNDE4NSI+CjxyZWN0IHdpZHRoPSIxNDgiIGhlaWdodD0iMjUuOTY0MSIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC4wMTgwNjY0KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="
              alt="Home"
              style={{ height: "26px" }}
              className="w-auto object-contain"
            />
          </a>
 
           <div
             className="relative"
             onMouseEnter={() => openWithHover("about")}
           >
             <button
               className={`flex items-center px-4 py-2 text-base  ${hoverPill} ${
                 openMenu === "about" ? "bg-slate-100 text-slate-900" : ""
               }`}
             >
                For working professionals 
               <ChevronDownIcon />
             </button>
           </div>
 
           <div
             className="relative"
             onMouseEnter={() => openWithHover("content")}
           >
             <button
               className={`flex items-center px-4 py-2 text-base ${hoverPill} ${
                 openMenu === "content" ? "bg-slate-100 text-slate-900" : ""
               }`}
             >
                 For College Students 
               <ChevronDownIcon />
             </button>
           </div>
         </div>
 
         {/* Right side: Login */}
         <div className="flex items-center">
           <button
             className="bg-[#f66c3b] hover:bg-[#f66c3b] text-sm text-white py-2 px-4 rounded-lg"
           >
             Login
           </button>
         </div>
       </div>
 
       {/* Mega dropdown, full page width */}
       {openMenu && (
         <div onMouseEnter={() => openWithHover(openMenu)}>
           <MegaMenu menuKey={openMenu} />
         </div>
       )}
     </nav>
   );
 }