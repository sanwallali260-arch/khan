const HomePage = () => {
  return (
    <section className="flex flex-col items-center text-center">
      <h2 className="text-4xl font-bold text-teal-700 mb-6">
        Welcome to Medium Project
      </h2>
      <p className="text-lg text-gray-700 mb-8 max-w-2xl">
        A clean and simple website built with{" "}
        <span className="font-semibold">Next.js 15</span>,{" "}
        <span className="font-semibold">TypeScript</span>, and{" "}
        <span className="font-semibold">Tailwind CSS</span>.  
        Perfect for learning and starting new projects.
      </p>
      <img
        src="khan"
        alt="Homepage Banner"
        className="rounded-lg shadow-lg"
      />
    </section>
  );
};

export default HomePage;
