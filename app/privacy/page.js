export const metadata = {
  title: "Privacy Policy | Sunlite Signs",
  description: "Privacy policy for Sunlite Signs - Learn how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-28 pb-16 text-neutral-100">
        {/* top separator line */}
        <div
          className="absolute inset-x-0 top-0 h-[2px] md:h-[3px] z-10"
          style={{
            background:
              "linear-gradient(90deg,#ffb84d 0%,#ff7a1a 40%,#ffb84d 70%,#ffd27a 100%)",
          }}
        />
        {/* background glows */}
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

        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-white bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-200/90">
            Last updated: January 2026
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="rounded-3xl border border-white/10 bg-white/6 backdrop-blur-xl p-8 md:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.35)] space-y-8 text-neutral-200">

            {/* Introduction */}
            <div>
              <p className="text-lg leading-relaxed">
                Sunlite Signs LLC ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">Personal Information</h3>
              <p className="leading-relaxed mb-3">
                When you request a quote or contact us, we may collect:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Name and business name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Business address</li>
                <li>Project details and specifications</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">Automatically Collected Information</h3>
              <p className="leading-relaxed mb-3">
                When you visit our website, we may automatically collect:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Pages visited and time spent</li>
                <li>Referring website</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
              <p className="leading-relaxed mb-3">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Process quote requests and provide customer service</li>
                <li>Communicate about your projects and orders</li>
                <li>Send production updates and delivery notifications</li>
                <li>Improve our website and services</li>
                <li>Respond to inquiries and support requests</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Information Sharing and Disclosure</h2>
              <p className="leading-relaxed mb-3">
                We do not sell, trade, or rent your personal information to third parties. We may share your information with:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">Service Providers:</strong> Third-party vendors who assist with website hosting, email services, and business operations</li>
                <li><strong className="text-white">Shipping Partners:</strong> Freight companies and carriers to fulfill orders</li>
                <li><strong className="text-white">Legal Requirements:</strong> When required by law or to protect our rights</li>
              </ul>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Cookies and Tracking Technologies</h2>
              <p className="leading-relaxed mb-3">
                We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files stored on your device. You can control cookies through your browser settings, but disabling them may affect website functionality.
              </p>
            </div>

            {/* Third-Party Services */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
              <p className="leading-relaxed mb-3">
                Our website may use third-party services including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">HubSpot:</strong> For contact forms and quote requests</li>
                <li><strong className="text-white">Analytics Services:</strong> To understand website usage and improve our services</li>
              </ul>
              <p className="leading-relaxed mt-3">
                These services have their own privacy policies and may collect information independently.
              </p>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* Data Retention */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Data Retention</h2>
              <p className="leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. Quote requests and project information are typically retained for business and tax purposes.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
              <p className="leading-relaxed mb-3">
                Depending on your location, you may have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Restrict or object to certain processing</li>
              </ul>
              <p className="leading-relaxed mt-3">
                To exercise these rights, please contact us using the information below.
              </p>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Children's Privacy</h2>
              <p className="leading-relaxed">
                Our services are intended for business-to-business transactions. We do not knowingly collect information from individuals under 18 years of age.
              </p>
            </div>

            {/* Changes to Policy */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Changes to This Privacy Policy</h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time. The updated version will be indicated by the "Last updated" date at the top of this page. We encourage you to review this Privacy Policy periodically.
              </p>
            </div>

            {/* Contact */}
            <div className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="leading-relaxed mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2">
                <p><strong className="text-white">Sunlite Signs LLC</strong></p>
                <p>Email: hello@sunlitesigns.com</p>
                <p>Phone (EAST): +1 (689) 294-0912</p>
                <p>Phone (WEST): +1 (651) 230-2827</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
