export function AboutHero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-24">
        <div className="mb-6 font-mono text-[12px] uppercase tracking-widest text-primary">
          About
        </div>
        <h1 className="max-w-4xl text-5xl font-medium tracking-tight md:text-6xl">
          we&apos;re building the thing{" "}
          <span className="font-normal italic text-muted-foreground">
            we wanted to exist.
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
          Canary is a small team building hardware and software for one problem: your car
          is somewhere else, someone else is driving it, and you have no idea what&apos;s
          happening to it.
        </p>
      </div>
    </section>
  );
}
