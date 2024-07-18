import React, { useState } from "react";
import { Copy as CopyIcon } from "lucide-react";

interface CopyProps {
  className?: string;
  children: React.ReactNode;
  copyText?: string;
}

export default function Copy({ children, className, copyText }: CopyProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const textToCopy = copyText || children?.toString() || "";
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000); // Hide the copied text after 2 seconds
    });
  };

  return (
    <div className={`relative flex items-center space-x-2 ${className}`}>
      {children}
      <div
        className={`absolute top-[-30px] left-1/2 transform bg-gray-800 text-white text-xs px-2 py-1 rounded transition-opacity duration-300 ${copied ? "opacity-100" : "opacity-0"}`}
      >
        Copied!
      </div>
      <button onClick={handleCopy} className="focus:outline-none">
        <CopyIcon className="w-5 h-5 text-gray-600 hover:text-gray-800 transition-colors duration-300" />
      </button>
    </div>
  );
}
