import { lpCopyVol01 } from "../../content/lp-copy-vol-01"

export function ProofSection() {
  const copy = lpCopyVol01.proof
  return (
    <section className="px-6 py-16">
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="text-2xl font-bold tracking-tight">{copy.heading}</h2>
        <p className="mt-4 text-neutral-700 leading-relaxed">{copy.lead}</p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {copy.items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
            >
              <div className="text-[13px] font-semibold text-neutral-900">{item.title}</div>
              <p className="mt-3 text-[13px] leading-relaxed text-neutral-700">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-neutral-200 bg-neutral-50 p-7">
          <div className="text-[12px] font-semibold tracking-wider text-neutral-900">
            {copy.profile.heading}
          </div>
          <div className="mt-4 text-[15px] font-semibold text-neutral-900">{copy.profile.name}</div>
          <p className="mt-2 text-[13px] leading-relaxed text-neutral-700">{copy.profile.oneLiner}</p>
          <ul className="mt-4 space-y-2 text-[13px] text-neutral-700">
            {copy.profile.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2">
                <span className="mt-[7px] inline-block h-1.5 w-1.5 rounded-full bg-neutral-900" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}


