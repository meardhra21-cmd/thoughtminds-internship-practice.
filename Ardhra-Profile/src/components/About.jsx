import { GraduationCap } from "lucide-react";

export default function About() {
  const timeline = [
    {
      degree: "B.Tech CSE (AI & DS)",
      institution: "Mentor Academy for Design Entrepreneurship, Innovation and Technology (MADEIT), Ernakulam",
      board: "APJ Abdul Kalam Technological University",
      duration: "2025 – 2029",
      result: "7.29 CGPA"
    },
    {
      degree: "Higher Secondary (HSE)",
      institution: "St. George's H.S.S, Pariyaram",
      board: "State Board",
      duration: "2023 – 2025",
      result: "92.16%"
    },
    {
      degree: "SSLC",
      institution: "St. George's H.S.S, Pariyaram",
      board: "State Board",
      duration: "Until 2023",
      result: "100%"
    }
  ];

  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-20 border-t border-slate-900">
      <div className="grid md:grid-cols-5 gap-12">
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
            <span className="text-cyan-400 font-mono">01.</span> About Me
          </h2>
          <p className="text-slate-400 leading-relaxed">
            I am a curious and self-driven learner passionate about technology, data-driven insights, and continuous improvement. My ultimate roadmap focuses on deep-diving into statistical data modeling and building robust AI architectures that solve actual ground-level bottlenecks.
          </p>
          <div className="space-y-3">
            <h4 className="text-xs font-mono tracking-wider text-slate-500 uppercase">Core Interests</h4>
            <div className="flex flex-wrap gap-2">
              {["Data Science", "Artificial Intelligence", "Web Development", "Problem Solving"].map((interest) => (
                <span key={interest} className="px-3 py-1 text-xs rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-3 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
            <GraduationCap className="text-purple-400 w-7 h-7" /> Academic Roadmap
          </h2>
          <div className="space-y-6 relative border-l border-slate-800 pl-4 ml-2">
            {timeline.map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-slate-900 border-2 border-cyan-400 group-hover:bg-cyan-400 transition-colors" />
                <div className="bg-slate-900/40 border border-slate-800/80 p-4 rounded-xl space-y-2 hover:border-slate-700/60 transition-colors">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <h3 className="font-bold text-slate-200">{item.degree}</h3>
                    <span className="text-xs font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/5 border border-cyan-500/10">{item.duration}</span>
                  </div>
                  <p className="text-sm text-slate-400">{item.institution}</p>
                  {item.board && <p className="text-xs text-slate-500">{item.board}</p>}
                  <div className="text-xs text-purple-400 font-mono pt-1">
                    Performance: <span className="text-slate-200 font-bold">{item.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}