import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { File, Search, Settings } from "lucide-react";

export default function Experiment2() {
  return (
    <div className="relative overflow-hidden h-[500px] w-full flex flex-col items-center justify-center">
      <OrbitingCircles>
        <File />
        <Settings />
        <File />
      </OrbitingCircles>
      <OrbitingCircles radius={100} reverse>
        <File />
        <Settings />
        <File />
        <Search />
      </OrbitingCircles>
    </div>
  );
}
