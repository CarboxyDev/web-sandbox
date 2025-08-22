import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";

export default function Experiment3() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <AnimatedThemeToggler className="flex flex-col items-center justify-center size-14 border rounded-full bg-accent p-2 cursor-pointer" />
    </div>
  );
}
