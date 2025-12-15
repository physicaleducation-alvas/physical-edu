export default function CampusInsights() {
  return (
    <>
      {/* CAMPUS INSIGHTS SECTION */}
      <section className="relative w-full py-12 overflow-hidden bg-white mt-13">
        {/* Angled orange background band */}
        <div
          className="absolute inset-x-0 top-0 h-64 bg-linear-to-r from-[#fbb03b] via-[#f8a034] to-[#f58c1f]"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 100%)",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-4 md:px-10">
          {/* HEADER */}
          <div className="text-white mb-10">
            <p className="text-xs tracking-[0.25em] uppercase opacity-80">
              What's happening here
            </p>
            <h2 className="text-2xl md:text-3xl content3 font-extrabold mt-2">
              Campus Insights
            </h2>
            <p className="mt-2 text-sm md:text-base content2 max-w-2xl opacity-90">
              A quick visual snapshot of academics, sports and campus life - all
              the reasons students love being here.
            </p>
          </div>

          {/* FLOATING CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 -mt-4">
            {/* Card 1 – Today on Campus */}
            <article className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl border border-orange-50 p-5 md:p-6 relative overflow-hidden hover:-translate-y-1 hover:shadow-2xl transition">
              <div className="absolute -right-8 -top-8 w-20 h-20 bg-orange-100/60 rounded-full" />
              <div className="relative">
                <h3 className="text-sm font-semibold text-[#f1861c] uppercase content3 tracking-wide">
                  Today on Campus
                </h3>
                <p className="mt-2 text-base md:text-lg font-semibold content3 text-gray-900">
                  Workshops, guest talks & practice sessions
                </p>
                <p className="mt-2 text-xs content3 text-gray-600">
                  Stay tuned to expert lectures, skill labs and daily academic
                  buzz happening across the campus.
                </p>
              </div>
            </article>

            {/* Card 2 – Key Numbers */}
            <article className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl border border-orange-50 p-5 md:p-6 relative overflow-hidden hover:-translate-y-1 hover:shadow-2xl transition">
              <div className="absolute -left-10 top-10 w-24 h-24 bg-orange-100/70 rounded-full" />
              <div className="relative">
                <h3 className="text-sm content3 font-semibold text-[#f1861c] uppercase tracking-wide">
                  Key Numbers
                </h3>
                <p className="mt-2 content3 text-base md:text-lg font-semibold text-gray-900">
                  Performance & participation at a glance
                </p>

                <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                  <div className="flex flex-col items-center content3">
                    <span className="text-xl content3 md:text-2xl font-extrabold text-gray-900">
                      95%
                    </span>
                    <span className="text-[10px] md:text-xs text-gray-500">
                      University result
                    </span>
                  </div>
                  <div className="flex flex-col items-center content3">
                    <span className="text-xl content3 md:text-2xl font-extrabold text-gray-900">
                      40+
                    </span>
                    <span className="text-[10px] md:text-xs text-gray-500">
                      Sports medals
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-xl md:text-2xl content3 font-extrabold text-gray-900">
                      60+
                    </span>
                    <span className="text-[10px] md:text-xs text-gray-500">
                      Events yearly
                    </span>
                  </div>
                </div>


              </div>
            </article>

            {/* Card 3 – Campus Life Timeline */}
            <article className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl border border-orange-50 p-5 md:p-6 relative overflow-hidden hover:-translate-y-1 hover:shadow-2xl transition">
              <div className="absolute -right-6 bottom-0 w-24 h-24 bg-orange-100/60 rounded-full" />
              <div className="relative">
                <h3 className="text-sm content3 font-semibold text-[#f1861c] uppercase tracking-wide">
                  Campus Life
                </h3>
                <p className="mt-2 content3 text-base md:text-lg font-semibold text-gray-900">
                  A day in the life of our students
                </p>

                {/* mini timeline */}
                <ol className="mt-4 space-y-1 text-xs text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-[#f1861c]" />
                    <span>
                      <strong>Morning:</strong> Fitness, warm-up drills and
                      classroom sessions.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-[#f1861c]" />
                    <span>
                      <strong>Afternoon:</strong> Labs, practice teaching,
                      specialisation activities.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-[#f1861c]" />
                    <span>
                      <strong>Evening:</strong> Games, cultural rehearsals and
                      club meets.
                    </span>
                  </li>
                </ol>

                <button className="mt-4 subtitle2 inline-flex items-center text-xs font-semibold text-[#f1861c] rounded-full border border-[#f1861c]/40 px-3 py-1.5 hover:bg-[#f1861c]/5 transition">
                  Explore campus gallery →
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}   