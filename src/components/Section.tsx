import { ReactNode } from "react";

export default function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="container mx-auto py-16 md:py-24">
      <h2 className="text-center text-3xl font-bold md:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm opacity-80 md:text-base">
          {subtitle}
        </p>
      )}
      <div className="mt-10">{children}</div>
    </section>
  );
}
