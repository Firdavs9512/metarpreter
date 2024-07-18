import Lottie from "react-lottie";
import cubeData from "@/assets/loading-animation.json";
import textData from "@/assets/loading-text-animation.json";
import { cn } from "@/lib/utils";

interface LoadingAnimationProps {
  className?: string;
  width?: number;
  height?: number;
  type?: Types;
}

type Types = "text" | "cube";

export default function LoadingAnimation({
  className,
  width = 200,
  height = 200,
  type = "cube",
}: LoadingAnimationProps) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: type === "cube" ? cubeData : textData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      className={cn("flex items-center justify-center min-h-screen", className)}
    >
      <Lottie
        options={defaultOptions}
        height={height}
        width={width}
        isClickToPauseDisabled
      />
    </div>
  );
}
