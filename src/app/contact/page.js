export default function contactPage({ mapUrl }) {
    const MAP_URL =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5961894023444!2d74.97071719678956!3d13.061356100000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4ab25da9e6b5b%3A0x19b2bd53448f91f9!2sAlva%27s%20Degree%20College%20(UG)!5e0!3m2!1sen!2sin!4v1764321870203!5m2!1sen!2sin";
    return (
    <>    
    <section className="w-full px-6 md:px-12 py-12 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-14 items-start">

        {/* LEFT (now the CONTACT DETAILS CARD) */}
        <div className="flex-1 order-1 md:order-none">
          <div className="relative">
            <div className="absolute inset-0 blur-2xl bg-red-200/40 rounded-[32px] -z-10" />

            <div className="bg-[#dd5d52] text-white rounded-[32px] p-7 md:p-8 shadow-lg border border-white/30">
              <h3 className="text-2xl font-semibold text-center mb-5">
                Alva’s College
              </h3>

              <div className="flex items-start gap-3 mb-4">
                📍
                <p className="leading-relaxed text-sm md:text-base">
                  Smt. Sundari Ananda Alva Campus<br />
                  Vidyagiri, Moodbidri<br />
                  Dakshina Kannada – 574227<br />
                  Karnataka, India.
                </p>
              </div>

              <div className="flex items-start gap-3 mb-3">
                📞
                <p className="text-sm md:text-base">
                  <span className="font-semibold">Phone:</span> 9743700154<br />
                  <span className="font-semibold">Mobile:</span> 8150079070<br />
                  <span className="font-semibold">Fax:</span> 08258-237341
                </p>
              </div>

              <div className="flex items-start gap-3 mt-3">
                ✉️
                <p className="text-sm md:text-base">
                  <span className="font-semibold">Email:</span>{" "}
                  <a
                    href="mailto:acpe@alvas.org"
                    className="underline hover:text-gray-100"
                  >
                    acpe@alvas.org
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT (now the TITLE + BUTTONS) */}
        <div className="flex-1 order-0 md:order-none">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Contact
          </h2>
          <div className="w-24 h-2 bg-red-500 rounded-full mt-3 mb-6" />

          <p className="text-gray-600 mb-6 text-sm md:text-base">
            Reach out to us for admissions, course details, or any queries.
            We're here to help you discover more about{" "}
            <span className="font-semibold">Alva’s College of Physical Education</span>.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="tel:9743700154"
              className="inline-flex items-center gap-2 rounded-full border border-red-500 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 transition"
            >
              📞 Call Us
            </a>

            <a
              href="mailto:acpe@alvas.org"
              className="inline-flex items-center gap-2 rounded-full bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600 transition"
            >
              ✉️ Send Email
            </a>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
            >
              📍 Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* MAP SECTION */}
    <section className="w-full px-6 md:px-12 py-10">
      {/* Title */}
      <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
        Route Map:
      </h2>

      {/* Map container */}
      <div className="mt-4 w-full bg-[#e0e0e0] rounded-[32px] overflow-hidden shadow-sm">
        <iframe
          src={MAP_URL}
          width="100%"            // full width of the grey box
          height="500"            // same height as your example
          style={{ border: 0 }}   // JSX style must be an object
          allowFullScreen         // boolean prop in JSX
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
    
</>
    );
}