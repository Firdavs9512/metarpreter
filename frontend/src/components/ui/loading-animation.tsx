import Lottie from "react-lottie";
import animationData from "@/assets/loading-animation.json";
import { cn } from "@/lib/utils";

interface LoadingAnimationProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function LoadingAnimation({
  className,
  width = 200,
  height = 200,
}: LoadingAnimationProps) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
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
