import React from "react";

export function Divider() {
  return (
    <div className="flex items-center gap-3 my-8">
      <div className="flex-1 h-px bg-white/[0.06]" />
      <div className="text-neutral-600 text-lg">◆</div>
      <div className="flex-1 h-px bg-white/[0.06]" />
    </div>
  );
}

export function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-2 border-green-500 pl-5 pr-4 py-4 my-7 bg-green-500/[0.03] rounded-r-lg">
      <div className="text-neutral-200 text-sm italic">{children}</div>
    </div>
  );
}

export function Emphasis({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-green-500 text-sm italic my-6">{children}</p>
  );
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-lg md:text-xl font-bold text-white mt-8 mb-4">{children}</h2>
  );
}

export function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-neutral-400 leading-[1.85] mb-5">{children}</p>
  );
}

export function LeadText({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-lg md:text-xl text-neutral-200 font-medium mb-6">{children}</p>
  );
}

export function BulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-disc list-inside text-neutral-400 leading-[1.85] mb-5 space-y-1.5 pl-2">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
