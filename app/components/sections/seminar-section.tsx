import { lpCopyVol01 } from "../../content/lp-copy-vol-01"

export function SeminarSection() {
  const copy = lpCopyVol01.seminar

  return (
    <section className="px-6 py-16">
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="text-2xl font-bold tracking-tight">{copy.heading}</h2>
        <p className="mt-4 text-neutral-700 leading-relaxed">{copy.lead}</p>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200 bg-white p-7 shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
            <div className="text-[12px] font-semibold tracking-wider text-neutral-900">
              得られるもの
            </div>
            <ul className="mt-4 space-y-2 text-[13px] leading-relaxed text-neutral-700">
              {copy.whatYouWillGet.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-[7px] inline-block h-1.5 w-1.5 rounded-full bg-neutral-900" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-7">
            <div className="text-[12px] font-semibold tracking-wider text-neutral-900">
              当日の流れ（例）
            </div>
            <ol className="mt-4 space-y-4">
              {copy.agenda.map((part) => (
                <li key={part.title} className="rounded-xl border border-neutral-200 bg-white p-5">
                  <div className="text-[13px] font-semibold text-neutral-900">{part.title}</div>
                  <ul className="mt-3 space-y-2 text-[13px] leading-relaxed text-neutral-700">
                    {part.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="mt-[7px] inline-block h-1.5 w-1.5 rounded-full bg-neutral-900" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-neutral-200 bg-white p-7 shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
          <div className="text-[12px] font-semibold tracking-wider text-neutral-900">よくある質問</div>
          <div className="mt-4 grid gap-3">
            {copy.faq.map((item) => (
              <details key={item.q} className="group rounded-xl border border-neutral-200 bg-neutral-50 p-5">
                <summary className="cursor-pointer list-none text-[13px] font-semibold text-neutral-900">
                  <span className="mr-2 inline-block rounded-full bg-neutral-900 px-2 py-0.5 text-[11px] font-semibold text-white">
                    Q
                  </span>
                  {item.q}
                </summary>
                <div className="mt-3 text-[13px] leading-relaxed text-neutral-700">
                  <span className="mr-2 inline-block rounded-full border border-neutral-300 bg-white px-2 py-0.5 text-[11px] font-semibold text-neutral-900">
                    A
                  </span>
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

