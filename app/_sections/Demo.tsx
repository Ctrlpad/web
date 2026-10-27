import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils"
import { Terminal, EighthNote, NotebookPen, GitPullRequest, VolumeOff, Mic } from "lucide-react"

export default function Demo() {
  return (
    <section className="border-border border-t" id="demo">
      <div className="w-full flex flex-col items-center gap-6 py-10">
        <div className="flex flex-col py-5 items-center space-y-2">
          <Badge className="bg-[#10B981] text-base">Demo</Badge>
          <h1 className="text-4xl font-semibold">One Pad. Every App</h1>
          <p>Each key fires a different action</p>
        </div>
        <Ctrlpad />
      </div>
    </section>
  )
}

function Ctrlpad() {
  const buttons = [
    { label: <Terminal size={40} />, color: "bg-[#858AE3]", border: "border-[#6b70b4]" },
    { label: <EighthNote size={40} />, color: "bg-[#34D399]", border: "border-[#28a877]" },
    { label: <NotebookPen size={40} />, color: "bg-[#FFB700]", border: "border-[#cc9200]" },
    { label: <GitPullRequest size={40} />, color: "bg-[#AACC00]", border: "border-[#88a300]" },
    { label: <VolumeOff size={40} />, color: "bg-[#F44491]", border: "border-[#c23573]" },
    { label: <Mic size={40} />, color: "bg-[#3B82F6]", border: "border-[#2f68c4]" },
  ];

  return (
    <div className="bg-black p-6 rounded-2xl grid grid-cols-3 gap-4">
      {buttons.map(({ label, color, border }) => (
        <button
          className={cn(
            "w-32 h-32 flex items-center justify-center rounded-xl border-b-5 border-r-4 text-black font-bold hover:border-b-7 hover:border-r-6 transition-[border] duration-150 ease-in-out",
            color,
            border
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
