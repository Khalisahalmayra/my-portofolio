type Tool = {
  name: string;
  icon: string | null;
};

const TOOLS: Tool[] = [
  { name: "Figma", icon: "https://skillicons.dev/icons?i=figma" },
  { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
  { name: "TypeScript", icon: "https://skillicons.dev/icons?i=ts" },
  { name: "HTML", icon: "https://skillicons.dev/icons?i=html" },
  { name: "CSS", icon: "https://skillicons.dev/icons?i=css" },
  { name: "Java", icon: "https://skillicons.dev/icons?i=java" },
  { name: "React", icon: "https://skillicons.dev/icons?i=react" },
  { name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs" },
  { name: "React Native", icon: "https://skillicons.dev/icons?i=react" },
  { name: "Expo", icon: "https://skillicons.dev/icons?i=expo" },
  { name: "Tailwind CSS", icon: "https://skillicons.dev/icons?i=tailwind" },
  { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
  { name: "Express.js", icon: "https://skillicons.dev/icons?i=express" },
  { name: "NextAuth", icon: "https://skillicons.dev/icons?i=nextjs" },
  { name: "Jwt", icon: null },
  { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
  { name: "PostgresSQL", icon: "https://skillicons.dev/icons?i=postgresql" },
  { name: "Adobe Ilustrator", icon: null },
  { name: "Supabase", icon: "https://skillicons.dev/icons?i=supabase" },
  { name: "Postman", icon: "https://skillicons.dev/icons?i=postman" },
  { name: "Thunder Client", icon: null },
  { name: "Github", icon: "https://skillicons.dev/icons?i=github" },
];

// Split all tools across just two rows
const ROW_1 = TOOLS.slice(0, 11);
const ROW_2 = TOOLS.slice(11);

function Pill({ tool }: { tool: Tool }) {
  return (
    <div className="flex items-center gap-2.5 whitespace-nowrap rounded-full border-[1.5px] border-[#9fc7ef] px-6 py-3.5">
      {tool.icon ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={tool.icon} alt={tool.name} className="h-5 w-5" />
      ) : (
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#a9cdef] text-[10px] font-bold text-white">
          {tool.name.charAt(0)}
        </span>
      )}
      <span className="text-[17px] font-semibold text-[#1f2430]">
        {tool.name}
      </span>
    </div>
  );
}

function MarqueeRow({ items, reverse }: { items: Tool[]; reverse?: boolean }) {
  return (
    <div className="group overflow-hidden">
      <div
        className={`flex w-max gap-5 group-hover:[animation-play-state:paused] ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {[...items, ...items].map((tool, i) => (
          <Pill key={`${tool.name}-${i}`} tool={tool} />
        ))}
      </div>
    </div>
  );
}

export default function Toolkit() {
  return (
    <section id="toolkit" className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-0">
      <h2 className="inline bg-[#fdf6c5] px-2 py-1 text-2xl font-extrabold text-[#8fc3e8] md:text-3xl">
        My Toolkit
      </h2>

      <div className="mt-10 flex flex-col gap-5">
        <MarqueeRow items={ROW_1} />
        <MarqueeRow items={ROW_2} reverse />
      </div>
    </section>
  );
}