"use client";

export const Hero = () => {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center animate-hero-bg"
      style={{ backgroundImage: `url('/hero-section-bg.png')` }}
    >
      <div className="absolute inset-0 bg-black/70 z-0" />{" "}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-8xl font-bold">Sparking Your Vision</h1>
        <p className="mt-4 text-lg max-w-xl">
          Empower your business to thrive with innovative software solutions,
          smart branding strategies, and flexible pay-as-you-go plans that make
          growth effortless and affordable.
        </p>
        <div className="mt-6 flex gap-4">
          <button className=" bg-red-800 px-6 py-2">Get Started</button>
          <button className="px-6 py-2 border border-white text-white bg-transparent hover:bg-white hover:text-black transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};
