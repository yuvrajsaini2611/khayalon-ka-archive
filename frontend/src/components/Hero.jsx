function Hero() {
  return (
    <section className="max-w-3xl mx-auto px-8 py-24 text-center">
      <p className="font-ui text-xs tracking-widest text-gold mb-6 uppercase">
        EST . 2026 . Udaipur
      </p>

      <h1 className="font-heading text-5xl text-ink leading-tight mb-6">
        ख़यालों का आर्काइव
      </h1>

      <p className="font-body text-lg text-inklight leading-relaxed max-w-xl mx-auto mb-10">
        A quiet corner of the internet where thoughts are preserved —
        unfiltered, imperfect, and honest.
      </p>

      <div className="flex items-center justify-center gap-4 text-gold">
        <div className="h-px w-16 bg-gold opacity-40"></div>
        <span className="text-lg">✦</span>
        <div className="h-px w-16 bg-gold opacity-40"></div>
      </div>
    </section>
  );
}

export default Hero;
