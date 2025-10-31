import Header from "@/components/Header";
import Section from "@/components/Section";
import Image from "next/image";
import { projects, services } from "@/data";
import { Download, Mail } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section
        id="home"
        className="container mx-auto grid gap-10 py-16 md:grid-cols-2 md:py-24"
      >
        <div className="flex flex-col justify-center">
          <p className="text-sm opacity-70">
            Hi I am <b>Muhammad Bin Jameel</b>
          </p>
          <h1 className="mt-2 text-5xl leading-tight font-extrabold md:text-6xl">
            UI &amp; UX
            <br />
            Designer
          </h1>
          <p className="mt-4 max-w-xl opacity-80">
            Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
            felis ligula aliquam venenatis.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a
              href="#contact"
              className="bg-primary inline-flex items-center gap-2 rounded-md px-5 py-3 text-white"
            >
              <Mail size={18} /> Hire Me
            </a>
            <a
              href="/cv.pdf"
              className="inline-flex items-center gap-2 rounded-md border px-5 py-3"
            >
              <Download size={18} /> Download CV
            </a>
          </div>
          {/* Соц.іконки за потреби */}
        </div>

        <div className="relative">
          <div className="bg-primary/10 absolute inset-0 -z-10 rounded-full blur-3xl" />
          <Image
            src="/hero.png"
            alt="Portrait"
            width={520}
            height={520}
            priority
            className="mx-auto rounded-[32px] object-cover"
          />
        </div>
      </section>

      {/* About */}
      <Section
        id="about"
        title="About Me"
        subtitle="Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula."
      >
        <div className="grid items-center gap-10 md:grid-cols-2">
          <Image
            src="/about.png"
            alt="About"
            width={420}
            height={420}
            className="mx-auto rounded-3xl"
          />
          <div>
            {[
              { label: "UX", value: 80 },
              { label: "Website Design", value: 92 },
              { label: "App Design", value: 86 },
              { label: "Graphic Design", value: 90 },
            ].map((s) => (
              <div key={s.label} className="mb-6">
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-medium">{s.label}</span>
                  <span>{s.value}%</span>
                </div>
                <div className="h-2 rounded bg-black/10 dark:bg-white/10">
                  <div
                    className="bg-primary h-2 rounded"
                    style={{ width: `${s.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section id="services" title="Services">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border bg-white p-6 dark:bg-black"
            >
              <div className="text-primary mb-3 text-3xl">🧩</div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm opacity-80">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="My Projects">
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <div key={p.title} className="overflow-hidden rounded-2xl border">
              <Image
                src={p.image}
                alt={p.title}
                width={560}
                height={360}
                className="h-auto w-full"
              />
              <div className="p-4">
                <span className="bg-primary/10 text-primary rounded px-2 py-1 text-xs">
                  {p.tag}
                </span>
                <h4 className="mt-3 font-semibold">{p.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials (простий варіант; слайдер можна підключити embla) */}
      <Section id="testimonials" title="Testimonials">
        <div className="grid gap-6 md:grid-cols-2">
          {[1, 2].map((i) => (
            <figure key={i} className="rounded-2xl border p-6">
              <div className="text-primary text-5xl leading-none">“</div>
              <blockquote className="-mt-4 opacity-80">
                Lorem ipsum dolor sit amet consectetur. Id purus placerat
                scelerisque ullamcorper.
              </blockquote>
              <figcaption className="mt-4 text-sm">
                <b>Name</b> — CEO
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section id="contact" title="Lets Design Together">
        <form className="mx-auto flex max-w-xl gap-3">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="flex-1 rounded-md border bg-transparent px-4 py-3"
          />
          <button
            type="submit"
            className="bg-primary rounded-md px-5 py-3 text-white"
          >
            Contact Me
          </button>
        </form>
      </Section>

      {/* Footer */}
      <footer className="border-t py-10">
        <div className="container mx-auto text-center text-sm opacity-80">
          <div className="mb-4 font-semibold">
            <span className="bg-primary mr-1 rounded px-1.5 py-0.5 text-white">
              M
            </span>
            uhammad
          </div>
          <nav className="mb-4 flex justify-center gap-5">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact Us</a>
          </nav>
          © 2023 <b>Muhammad</b> All Rights Reserved., Inc.
        </div>
      </footer>
    </>
  );
}
