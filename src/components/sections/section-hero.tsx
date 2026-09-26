import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import WavyRippleBackground from "@/components/lightswind/wavy-ripple-background";
import { TypingText } from "@/components/lightswind/typing-text";

const SectionHero = () => {
  return (
    <div className="relative isolate overflow-hidden bg-slate-950">
      <WavyRippleBackground waveColor="#3b82f6" backgroundColor="#020617" />
      <section className="relative z-10 pb-16 pt-32 text-white md:pt-40 lg:pb-28 lg:pt-60">
        <div className="container max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                TECHCORE DEVELOPERS
              </p>
              <TypingText
                as="h1"
                className="max-w-xl leading-tight lg:text-6xl"
                fontSize="text-4xl"
                fontWeight="font-bold"
                color="text-white"
                letterSpacing="tracking-normal"
              >
                Where Developers Build the Future.
              </TypingText>
              <p className="mt-6 max-w-xl text-lg text-white/80">
                TECHCORE brings developers together to learn, collaborate, solve real-world
                problems, and turn ideas into working technology.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/projects">Explore Our Projects</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/developers">Meet Our Developers</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border border-white/20 bg-slate-950/60 p-6 shadow-xl backdrop-blur-sm">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["Learn", "+ Shared knowledge"],
                  ["Build", "+ Real projects"],
                  ["Collaborate", "+ Team-based work"],
                  ["Innovate", "+ Emerging tech"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-xl bg-white/10 p-5">
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{label}</div>
                    <div className="mt-2 text-lg font-bold text-white">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionHero;
