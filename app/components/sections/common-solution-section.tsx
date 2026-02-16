import { lpCopyVol01 } from "../../content/lp-copy-vol-01"

export function CommonSolutionSection() {
  const copy = lpCopyVol01.commonSolution
  return (
    <section className="px-6 py-16">
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="text-2xl font-bold tracking-tight">{copy.heading}</h2>
        <p className="mt-4 text-neutral-700 leading-relaxed">{copy.lead}</p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {copy.list.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
            >
              <div className="text-[13px] font-semibold text-neutral-900">{item.title}</div>
              <p className="mt-3 text-[13px] leading-relaxed text-neutral-700">{item.body}</p>
            </div>
          ))}
        </div>

        {copy.note ? (
          <p className="mt-8 text-[12px] leading-relaxed text-neutral-500">{copy.note}</p>
        ) : null}
      </div>
    </section>
  )
}


