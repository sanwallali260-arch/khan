const HomePage = () => {
  return (
    <section className="flex flex-col items-center text-center">
      <h2 className="text-4xl font-bold text-blue-700 mb-6">
        Welcome to Fresh Project
      </h2>
      <p className="text-lg text-gray-700 mb-8 max-w-2xl">
        This is the Home Page built with{" "}
        <span className="font-semibold">Next.js 15</span>,{" "}
        <span className="font-semibold">TypeScript</span>, and{" "}
        <span className="font-semibold">Tailwind CSS</span>.
      </p>
      <img
        src="lali"
        alt="Homepage Banner"
        className="rounded-xl shadow-lg"
      />
    </section>
  );
};

export default HomePage;
