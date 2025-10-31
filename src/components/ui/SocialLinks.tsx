"use client";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import * as React from "react";

type SocialItem = {
  href: string;
  label: string;
  Icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
};

type Props = {
  className?: string;
  size?: number;
  strokeWidth?: number;
  items?: SocialItem[];
};

const defaultItems: SocialItem[] = [
  { href: "https://facebook.com/", label: "Facebook", Icon: Facebook },
  { href: "https://twitter.com/", label: "Twitter/X", Icon: Twitter },
  { href: "https://instagram.com/", label: "Instagram", Icon: Instagram },
  { href: "https://linkedin.com/", label: "LinkedIn", Icon: Linkedin },
];

export default function SocialLinks({
  className = "",
  size = 28,
  strokeWidth = 2,
  items = defaultItems,
}: Props) {
  return (
    <div
      className={`w-full flex items-center justify-center gap-6 ${className}`}
    >
      {items.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          target="_blank"
          rel="noreferrer"
          className="text-black transition-colors hover:text-primary dark:text-white/90"
          title={label}
        >
          <Icon size={size} strokeWidth={strokeWidth} />
        </a>
      ))}
    </div>
  );
}
