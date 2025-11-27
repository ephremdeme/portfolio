"use client";

import { useMemo, useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeCopyButtonProps {
  value: string;
  className?: string;
}

export function CodeCopyButton({ value, className }: CodeCopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const label = useMemo(() => (copied ? "Copied" : ""), [copied]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error("Failed to copy code snippet", error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-100 transition",
        "hover:border-emerald-400/70 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400",
        className
      )}
      aria-label={copied ? "Code copied" : "Copy code"}
    >
      {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
      {copied && <span>{label}</span>}
    </button>
  );
}
