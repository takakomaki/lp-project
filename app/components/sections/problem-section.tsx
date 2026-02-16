import { lpCopyVol01 } from "../../content/lp-copy-vol-01"

export function ProblemSection() {
  const copy = lpCopyVol01.problem
  return (
    <section className="px-6 py-16">
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="text-2xl font-bold tracking-tight">{copy.heading}</h2>
        <p className="mt-4 text-neutral-700 leading-relaxed">{copy.lead}</p>

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {copy.questions.map((q) => (
            <div key={q} className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
              <div className="text-[13px] text-neutral-800">- {q}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {copy.blindSpots.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
            >
              <div className="text-[13px] font-semibold text-neutral-900">{b.title}</div>
              <p className="mt-3 text-[13px] leading-relaxed text-neutral-700">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


