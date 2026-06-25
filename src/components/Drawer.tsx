"use client";

import { ReactNode, useEffect } from "react";
import { X } from "lucide-react";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  side?: "left" | "right";
  className?: string;
}

export default function Drawer({
  isOpen,
  onClose,
  title,
  children,
  side = "right",
  className = "",
}: DrawerProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-dark/50 backdrop-blur-sm" onClick={onClose} />
      <div
        className={`fixed top-0 ${side === "right" ? "right-0" : "left-0"} h-full w-full max-w-md bg-white shadow-xl animate-[slideIn${side === "right" ? "Right" : "Left"}_0.3s_ease] ${className}`}
      >
        {title && (
          <div className="flex items-center justify-between px-6 py-4 border-b border-border">
            <h3 className="text-lg font-semibold text-text">{title}</h3>
            <button
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-muted/50 transition-colors"
              aria-label="Close drawer"
            >
              <X className="w-5 h-5 text-muted" />
            </button>
          </div>
        )}
        <div className="p-6 overflow-y-auto h-[calc(100%-72px)]">{children}</div>
      </div>
    </div>
  );
}
