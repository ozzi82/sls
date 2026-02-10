import { FileText, Download, Wrench, BookOpen, Video, Ruler } from "lucide-react";

export const metadata = {
  title: "Resources & Knowledge Center | Technical Guides & Downloads",
  description: "Download installation guides, CAD files, specification sheets, and technical resources for EdgeLuxe trimless channel letters and LED signage products.",
};

export default function ResourcesPage() {
  const resourceCategories = [
    {
      title: "Installation Guides",
      icon: Wrench,
      description: "Step-by-step installation instructions for all product lines",
      resources: [
        {
          name: "Trimless Channel Letter Installation Guide",
          type: "PDF",
          size: "2.4 MB",
          downloadUrl: "/downloads/trimless-installation-guide.pdf",
        },
        {
          name: "FCO Letters Mounting Instructions",
          type: "PDF",
          size: "1.8 MB",
          downloadUrl: "/downloads/fco-mounting-guide.pdf",
        },
        {
          name: "Blade Sign Installation Manual",
          type: "PDF",
          size: "3.1 MB",
          downloadUrl: "/downloads/blade-sign-installation.pdf",
        },
      ],
    },
    {
      title: "Technical Specifications",
      icon: Ruler,
      description: "Detailed spec sheets with dimensions, electrical requirements, and materials",
      resources: [
        {
          name: "EdgeLuxe LP5 Trimless Face-Lit - Full Specification Sheet",
          type: "VIEW/PRINT",
          size: "Printable",
          downloadUrl: "/specs/lp5",
          isLink: true,
        },
        {
          name: "EdgeLuxe LP3.1 Halo-Lit Standoff - Specification Sheet",
          type: "VIEW/PRINT",
          size: "Printable",
          downloadUrl: "/specs/lp3-1",
          isLink: true,
        },
        {
          name: "EdgeLuxe LP1 Flat Cut-Out (FCO) - Specification Sheet",
          type: "VIEW/PRINT",
          size: "Printable",
          downloadUrl: "/specs/lp1",
          isLink: true,
        },
        {
          name: "EdgeLuxe LP11 Series Cast Acrylic - Full Specification Sheet",
          type: "VIEW/PRINT",
          size: "Printable",
          downloadUrl: "/specs/lp11-series",
          isLink: true,
        },
      ],
    },
    {
      title: "CAD Files & Templates",
      icon: FileText,
      description: "CAD drawings and templates for design and planning",
      resources: [
        {
          name: "Trimless Channel Letter CAD Library",
          type: "DWG",
          size: "4.8 MB",
          downloadUrl: "/downloads/trimless-cad-library.dwg",
        },
        {
          name: "Mounting Pattern Templates",
          type: "DXF",
          size: "2.2 MB",
          downloadUrl: "/downloads/mounting-templates.dxf",
        },
        {
          name: "Blade Sign CAD Files",
          type: "DWG",
          size: "3.5 MB",
          downloadUrl: "/downloads/blade-sign-cad.dwg",
        },
      ],
    },
    {
      title: "Electrical & Wiring",
      icon: Download,
      description: "Electrical requirements, wiring diagrams, and power supply guides",
      resources: [
        {
          name: "LED Module Wiring Diagrams",
          type: "PDF",
          size: "1.6 MB",
          downloadUrl: "/downloads/led-wiring-diagrams.pdf",
        },
        {
          name: "Power Supply Sizing Guide",
          type: "PDF",
          size: "0.9 MB",
          downloadUrl: "/downloads/power-supply-guide.pdf",
        },
        {
          name: "UL Compliance Documentation",
          type: "PDF",
          size: "2.1 MB",
          downloadUrl: "/downloads/ul-compliance-docs.pdf",
        },
      ],
    },
  ];

  const knowledgeArticles = [
    {
      title: "What is Trimless Technology?",
      description: "Understanding the benefits of flush-face channel letters vs traditional trim cap designs",
      icon: BookOpen,
      link: "/knowledge/trimless-technology",
    },
    {
      title: "Choosing the Right LED Module",
      description: "Compare LED module brightness, color temperature, and efficiency for your project",
      icon: BookOpen,
      link: "/knowledge/choosing-led-modules",
    },
    {
      title: "Mounting Methods Comparison",
      description: "Raceway, direct mount, stud mount - which installation method is right for your project?",
      icon: BookOpen,
      link: "/knowledge/mounting-methods",
    },
    {
      title: "Finish Options & Durability",
      description: "Powder coat vs painted finishes: longevity, color matching, and maintenance",
      icon: BookOpen,
      link: "/knowledge/finish-options",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-28 pb-16 text-neutral-100">
        <div
          className="absolute inset-x-0 top-0 h-[2px] md:h-[3px] z-10"
          style={{ background: "linear-gradient(90deg,#ffb84d 0%,#ff7a1a 40%,#ffb84d 70%,#ffd27a 100%)" }}
        />

        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f1a] via-[#0a0e17] to-[#09090b]" />
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vmax] h-[120vmax] rounded-full opacity-20 blur-3xl animate-[spin_40s_linear_infinite]"
            style={{
              background: "conic-gradient(from 0deg, rgba(255,172,64,0.18), rgba(80,170,255,0.18), rgba(255,172,64,0.18))",
            }}
          />
        </div>

        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-white bg-clip-text text-transparent">
              Resources & Knowledge Center
            </span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-200/90 leading-relaxed">
            Download technical specifications, installation guides, CAD files, and access our knowledge base to help you succeed with EdgeLuxe products.
          </p>
        </div>
      </section>

      {/* DOWNLOADS SECTION */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f1a] via-[#0a0e17] to-[#09090b]" />
        </div>

        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-white bg-clip-text text-transparent">
                Technical Downloads
              </span>
            </h2>
            <p className="text-lg text-neutral-200/90">
              Everything you need for successful project planning and installation
            </p>
          </div>

          {/* Resource categories grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {resourceCategories.map((category, idx) => {
              const Icon = category.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-lg hover:bg-white/8 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="rounded-xl bg-white/10 border border-white/20 p-3">
                      <Icon className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                      <p className="text-sm text-neutral-300">{category.description}</p>
                    </div>
                  </div>

                  {/* Resource files */}
                  <div className="space-y-3">
                    {category.resources.map((resource, resIdx) => (
                      <a
                        key={resIdx}
                        href={resource.downloadUrl}
                        className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-orange-400/50 transition-all duration-300 group"
                      >
                        <div className="flex items-center gap-3">
                          <Download className="w-5 h-5 text-orange-400 group-hover:scale-110 transition-transform" />
                          <div>
                            <div className="text-white font-medium text-sm">{resource.name}</div>
                            <div className="text-neutral-400 text-xs">
                              {resource.type} • {resource.size}
                            </div>
                          </div>
                        </div>
                        <svg
                          className="w-5 h-5 text-neutral-400 group-hover:text-orange-400 group-hover:translate-x-1 transition-all"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* KNOWLEDGE BASE SECTION */}
      <section className="relative overflow-hidden py-20 border-t border-white/10">
        <div
          className="absolute inset-x-0 top-0 h-[2px] md:h-[3px] z-10"
          style={{ background: "linear-gradient(90deg,#ffb84d 0%,#ff7a1a 40%,#ffb84d 70%,#ffd27a 100%)" }}
        />

        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f1a] via-[#0a0e17] to-[#09090b]" />
        </div>

        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-white bg-clip-text text-transparent">
                Knowledge Base
              </span>
            </h2>
            <p className="text-lg text-neutral-200/90">
              Learn about EdgeLuxe technology, installation best practices, and product selection
            </p>
          </div>

          {/* Knowledge articles grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {knowledgeArticles.map((article, idx) => {
              const Icon = article.icon;
              return (
                <a
                  key={idx}
                  href={article.link}
                  className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-lg hover:bg-white/8 hover:border-orange-400/50 transition-all duration-300"
                >
                  <div className="mb-4">
                    <div className="inline-flex rounded-xl bg-white/10 border border-white/20 p-3 group-hover:border-orange-400/50 transition-colors">
                      <Icon className="w-6 h-6 text-orange-400" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-neutral-300 leading-relaxed">{article.description}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f1a] via-[#0a0e17] to-[#09090b]" />
        </div>

        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-white bg-clip-text text-transparent">
                Need Help With Your Project?
              </span>
            </h2>
            <p className="text-lg text-neutral-200/90 mb-8">
              Our technical team is ready to assist with product selection, installation planning, and custom solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center rounded-xl px-6 py-3 font-semibold text-neutral-900 shadow-lg"
                style={{ background: "linear-gradient(90deg,#ffb84d,#ff7a1a)" }}
              >
                Contact Technical Support
              </a>
              <a
                href="/products"
                className="inline-flex items-center rounded-xl px-6 py-3 border border-white/20 text-white bg-white/5 backdrop-blur-md hover:bg-white/10 transition"
              >
                View All Products
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
