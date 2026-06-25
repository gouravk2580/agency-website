"use client";

import { ReactNode, useState } from "react";
import { ChevronDown } from "lucide-react";

interface SidebarItem {
  label: string;
  href?: string;
  icon?: ReactNode;
  children?: { label: string; href: string }[];
}

interface SidebarProps {
  items: SidebarItem[];
  activePath?: string;
  className?: string;
}

export default function Sidebar({
  items,
  activePath = "",
  className = "",
}: SidebarProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpand = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  return (
    <nav className={`space-y-1 ${className}`} aria-label="Sidebar">
      {items.map((item) => (
        <div key={item.label}>
          {item.children ? (
            <>
              <button
                onClick={() => toggleExpand(item.label)}
                className="w-full flex items-center justify-between px-4 py-2.5 text-sm rounded-lg hover:bg-muted/50 transition-colors"
              >
                <span className="flex items-center gap-3">
                  {item.icon}
                  {item.label}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-muted transition-transform ${
                    expandedItems.includes(item.label) ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expandedItems.includes(item.label) && (
                <div className="ml-4 space-y-1 mt-1">
                  {item.children.map((child) => (
                    <a
                      key={child.href}
                      href={child.href}
                      className={`block px-4 py-2 text-sm rounded-lg transition-colors ${
                        activePath === child.href
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-muted hover:bg-muted/50 hover:text-text"
                      }`}
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </>
          ) : (
            <a
              href={item.href || "#"}
              className={`flex items-center gap-3 px-4 py-2.5 text-sm rounded-lg transition-colors ${
                activePath === item.href
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted hover:bg-muted/50 hover:text-text"
              }`}
            >
              {item.icon}
              {item.label}
            </a>
          )}
        </div>
      ))}
    </nav>
  );
}
