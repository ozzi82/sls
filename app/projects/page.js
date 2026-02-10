// app/projects/page.js
import ProjectsGrid from "./ProjectsGrid";

export const metadata = {
  title: "Project References | Sunlite Signs",
  description:
    "Explore our portfolio of completed signage projects. German-engineered trimless channel letters, cast acrylic, and custom illuminated signs for businesses across North America.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 pb-16 text-neutral-100">
        {/* top separator line */}
        <div
          className="absolute inset-x-0 top-0 h-[2px] md:h-[3px] z-10"
          style={{ background: "linear-gradient(90deg,#ffb84d 0%,#ff7a1a 40%,#ffb84d 70%,#ffd27a 100%)" }}
        />

        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f1a] via-[#0a0e17] to-[#09090b]" />
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vmax] h-[140vmax] rounded-full opacity-20 blur-3xl animate-[spin_40s_linear_infinite]"
            style={{
              background:
                "conic-gradient(from 0deg, rgba(255,172,64,0.18), rgba(80,170,255,0.18), rgba(255,172,64,0.18))",
            }}
          />
        </div>

        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-white bg-clip-text text-transparent">
                Project References
              </span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-200/90 mb-6">
              Showcasing our German-engineered signage solutions installed by sign companies across North America.
              Click any image to view larger.
            </p>
          </div>
        </div>
      </section>

      <ProjectsGrid />
    </main>
  );
}
