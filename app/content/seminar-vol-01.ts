import type { SeminarInfo } from "./seminar"

/**
 * シリーズ用の固定ページ（/vol-01）に紐づくセミナー情報です。
 * 次回以降はこのファイルをコピーして `seminar-vol-02.ts` のように増やしてください。
 */
export const seminarVol01: SeminarInfo = {
  title: "加藤雅俊特別セミナー（Vol.01）",
  subtitle: "血管からはじめる、薬に頼り続けない未来へ",

  applicationUrl: null,
  lineUrl: null,
  youtubeUrl: null,
  bookUrl: null,

  date: "未定",
  time: "未定",
  format: "オンライン（予定）",
  venue: "未定",
  capacity: "未定",
  price: "未定",

  forWhom: [
    "薬が増え続けることに、静かな違和感がある方",
    "検査数値に追われず、根本から整えたい方",
    "血管・血流の重要性を、体系的に理解したい方",
  ],
  bonuses: ["特典は準備中です（確定次第更新します）"],
  notes: [
    "内容・日程は変更となる場合があります。",
    "服薬中の方は、自己判断での中止・変更はお控えください。",
  ],
  disclaimer: [
    "本セミナーは医療行為・診断・治療を目的としたものではありません。",
    "気になる症状がある場合は、医療機関へご相談ください。",
  ],

  updatedAt: "2026-02-15",
}

