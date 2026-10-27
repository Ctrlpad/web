import { Badge } from "@/components/ui/badge";

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
  return (
    <div className="bg-black p-6 rounded-2xl grid grid-cols-3 gap-4">
      <div className="bg-[#858AE3] w-32 h-32 flex items-center justify-center rounded-xl">1</div>
      <div className="bg-[#34D399] w-32 h-32 flex items-center justify-center rounded-xl">2</div>
      <div className="bg-[#FFB700] w-32 h-32 flex items-center justify-center rounded-xl">3</div>
      <div className="bg-[#AACC00] w-32 h-32 flex items-center justify-center rounded-xl">4</div>
      <div className="bg-[#F44491] w-32 h-32 flex items-center justify-center rounded-xl">5</div>
      <div className="bg-[#3B82F6] w-32 h-32 flex items-center justify-center rounded-xl">6</div>
    </div>
  )
}
