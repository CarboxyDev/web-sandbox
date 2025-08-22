import { Safari } from "@/components/magicui/safari";

export default function SafariMockup() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      <Safari
        url="quizfoundry.carboxy.xyz"
        className="size-[1000px]"
        imageSrc="https://carboxy.xyz/_next/image?url=%2Fquizfoundry1.png&w=1920&q=75"
      />
    </div>
  );
}
