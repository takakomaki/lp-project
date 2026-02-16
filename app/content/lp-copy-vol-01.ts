/**
 * LPコピー（Vol.01）— Single Source of Truth
 *
 * - 画面表示用の文言は、原則このファイルに集約します。
 * - コンポーネント側は「表示ロジック」に寄せ、コピーのハードコードを避けます。
 * - 迷ったら `docs/brief-kato.md` を優先（世界観の前提）。
 */

export type LpCopyVol01 = {
  meta: {
    /** コピーの版（運用上の識別子） */
    version: string
    /** 更新日（表示/運用用） */
    updatedAt: string
    /** 言語（将来的な多言語化のためのメタ） */
    locale: "ja-JP"
    /** ページ識別 */
    slug: "vol-01"
  }

  seo: {
    /** titleタグ（未確定なら仮でOK） */
    title: string
    /** OGP/スニペット用（1〜2文） */
    description: string
  }

  hero: {
    badge: string
    headline: string
    subhead: string
    lead?: string
    bullets?: string[]
    ctas: {
      primaryLabel: string
      secondaryLabel?: string
      /** 申込が未確定でも成立する文言（UI側で切替用） */
      standbyLabel: string
    }
    variants?: {
      headlineCandidates: string[]
      subheadCandidates: string[]
      primaryCtaCandidates: string[]
    }
  }

  philosophy: {
    heading: string
    lead: string
    principles: Array<{
      title: string
      body: string
    }>
    closing: string
  }

  problem: {
    heading: string
    lead: string
    questions: string[]
    blindSpots: Array<{
      title: string
      body: string
    }>
  }

  commonSolution: {
    heading: string
    lead: string
    list: Array<{
      title: string
      body: string
    }>
    note?: string
  }

  trueCause: {
    heading: string
    lead: string
    pillars: Array<{
      title: string
      body: string
    }>
    takeaway: string
  }

  heaven: {
    heading: string
    lead: string
    scenes: Array<{
      title: string
      body: string
    }>
  }

  hell: {
    heading: string
    lead: string
    scenes: Array<{
      title: string
      body: string
    }>
  }

  proof: {
    heading: string
    lead: string
    items: Array<{
      title: string
      body: string
    }>
    profile: {
      heading: string
      name: string
      oneLiner: string
      highlights: string[]
    }
  }

  seminar: {
    heading: string
    lead: string
    whatYouWillGet: string[]
    agenda: Array<{
      title: string
      bullets: string[]
    }>
    faq: Array<{
      q: string
      a: string
    }>
  }

  cta: {
    heading: string
    lead: string
    microcopy?: string
    primaryLabel: string
    standbyLabel: string
    secondaryLabel?: string
  }

  compliance: {
    /** LP上で必ず出す免責（UIで表示） */
    disclaimer: string[]
    /** 表現を安全側に保つための運用メモ（UIには出さない想定） */
    guardrails: string[]
  }
}

export const lpCopyVol01: LpCopyVol01 = {
  meta: {
    version: "vol-01-copy-v1",
    updatedAt: "2026-02-16",
    locale: "ja-JP",
    slug: "vol-01",
  },

  seo: {
    title: "加藤雅俊特別セミナー（Vol.01）｜血管からはじめる、薬に頼り続けない未来へ",
    description:
      "血圧や検査数値に振り回されない。血管・血流という“体の土台”から整え、薬に頼り続けない未来へ向かうための90分。",
  },

  hero: {
    badge: "KATO SPECIAL SEMINAR / VOL.01",
    headline: "血管は、あなたの未来の地図。",
    subhead: "薬に頼り続ける人生に、静かな違和感を覚えているあなたへ。",
    lead:
      "数値を“抑える”より、体の土台を整える。血管・血流の仕組みと、今日からできる手順を一つにまとめてお伝えします。",
    bullets: [
      "血圧・コレステロール・血糖…「数字の不安」を“手順”に変える",
      "血管＝37兆個の細胞へ届く「道路」から整える",
      "自宅でできる短時間の実践で、続く仕組みを作る",
    ],
    ctas: {
      primaryLabel: "セミナーに申し込む",
      standbyLabel: "申込受付は準備中です",
      secondaryLabel: "まずはLINEで受け取る",
    },
    variants: {
      headlineCandidates: [
        "血圧は、あなたを守るためのメッセージ。",
        "数値に振り回されない。血管から整える。",
        "薬の前に、整える順番がある。",
        "血管を鍛えると、未来が変わる。",
      ],
      subheadCandidates: [
        "「このまま薬が増え続けるのかな…」その違和感を、今日からの手順に変えませんか。",
        "がんばっているのに変わらない。その理由を“道路（血管）”からほどきます。",
        "不安を消すのではなく、理解して整える。体を相棒に戻す時間です。",
      ],
      primaryCtaCandidates: [
        "不安を手順に変える90分へ",
        "血管から整えるセミナーに参加する",
        "まずは全体像をつかむ",
      ],
    },
  },

  philosophy: {
    heading: "薬に頼らず、笑顔で生きるために。",
    lead:
      "先生が大切にしているのは「数値」ではなく「体の土台」。体を敵にせず、相棒として整えることで、未来は変えられます。",
    principles: [
      {
        title: "血管は、体の“道路”",
        body:
          "37兆個の細胞へ栄養と酸素を運ぶ道が荒れていれば、何をしても届きにくい。まず道路（血管・血流）から整えます。",
      },
      {
        title: "血圧は“悪者”ではなくメッセージ",
        body:
          "怖がって抑え込む前に、体が何を伝えているのかを読む。サインを理解すると、やるべき順番が見えてきます。",
      },
      {
        title: "続くやり方が、勝つ",
        body:
          "難しい正解より、続く手順。自宅でできる短時間の実践を軸に、生活の中で積み上がる設計にします。",
      },
    ],
    closing:
      "不安を“根性”で押さえ込むのではなく、理解して整える。ここから、薬に頼り続けない未来への地図を描きましょう。",
  },

  problem: {
    heading: "多くの人が“正しい”と思っている対処法には、盲点があります。",
    lead:
      "減塩、野菜から、運動は気が向いたら…。がんばっているのに変わらないのは、努力が足りないからではありません。",
    questions: [
      "数値は下がったのに、不安が消えない",
      "薬が増えるたびに「このままでいいのか」と思う",
      "がんばっているのに、検査結果が変わらない",
      "「異常なし」に安心したはずなのに、体調はすっきりしない",
    ],
    blindSpots: [
      {
        title: "“数字”だけを追うと、体の土台が置き去りになる",
        body:
          "数字は結果。結果だけを追うと、原因（血管・血流・筋肉・睡眠・腸など）に手が届きません。",
      },
      {
        title: "情報が多すぎて、続かない",
        body:
          "何を信じればいいか分からないまま、やることだけ増える。続かないのは意志の問題ではなく、設計の問題です。",
      },
      {
        title: "体は“急かされる”のが苦手",
        body:
          "焦って一気に変えようとすると、むしろ乱れやすい。体のペースに合わせて整える“順番”が必要です。",
      },
    ],
  },

  commonSolution: {
    heading: "よくある“対処”を、もう一段深いところへ。",
    lead:
      "間違いではない。けれど、それだけでは足りないことがある。セミナーでは、表面的な対処を“体の仕組み”に接続します。",
    list: [
      {
        title: "減塩・我慢だけで乗り切ろうとする",
        body:
          "「何を減らすか」だけでなく、「何を入れるか」「どう巡らせるか」へ。続く形に組み直します。",
      },
      {
        title: "野菜から食べれば安心、になっている",
        body:
          "“順番”より大事な全体の設計がある。体の目的（巡り）に合わせて、食の組み方を再設計します。",
      },
      {
        title: "運動が気合い頼みで続かない",
        body:
          "短時間でも“効くポイント”がある。血管に効かせる動きへ、最短の手順にします。",
      },
    ],
    note:
      "※ 本セミナーは医療行為ではありません。生活習慣の理解と選択肢を増やすための学びの場です。",
  },

  trueCause: {
    heading: "原因は、“血管・血流”という土台にある。",
    lead:
      "血圧も、脳も、疲れやすさも。バラバラに見える悩みを、一本の軸（血管・血流）でつなぎ直します。",
    pillars: [
      {
        title: "血管（道路）が弱ると、全身の“届き方”が変わる",
        body:
          "細胞へ届く栄養と酸素。老廃物の回収。巡りが乱れると、体は必死に帳尻を合わせようとします。",
      },
      {
        title: "筋肉は、血管を助ける“発電所”",
        body:
          "運動で生まれるメッセージ（例：NOや筋由来の働き）が、血管や脳にも良い方向へ働く。だから“血管に効く運動”が要です。",
      },
      {
        title: "睡眠・腸・日光・呼吸が、巡りの質を決める",
        body:
          "何を食べるかだけでなく、休めているか・整っているか。生活の土台を一つの設計図にまとめます。",
      },
    ],
    takeaway:
      "数値を怖がる前に、体のメッセージを読む。すると、やるべき順番が見えてきます。",
  },

  heaven: {
    heading: "整うと、日常が変わる。",
    lead:
      "“特別な日”のためではなく、毎日のために。小さな変化が、静かに積み上がっていきます。",
    scenes: [
      {
        title: "朝が、軽い",
        body: "目覚めが変わると、1日の選択が変わる。体を急かさず、巡りのリズムを取り戻します。",
      },
      {
        title: "数字の通知に、心が振れにくくなる",
        body: "結果を“読む”力がつくと、不安が減る。数値は敵ではなく、調整のための情報になります。",
      },
      {
        title: "家族との時間が、ちゃんと残る",
        body:
          "将来の不安を、今日の手順へ。自分だけでなく、家族の未来にもつながる設計にします。",
      },
    ],
  },

  hell: {
    heading: "このまま何も変えないと、どうなるか。",
    lead:
      "脅すためではありません。選択肢を増やすために、“今の延長線”を一度だけ見つめます。",
    scenes: [
      {
        title: "薬が増えるほど、不安が消えない",
        body: "抑えても、原因が残ると不安は消えにくい。だから土台から整える順番が必要です。",
      },
      {
        title: "がんばっているのに、報われない",
        body:
          "努力の量ではなく、設計の方向。正しいつもりの対処が“ズレた努力”になっていることがあります。",
      },
      {
        title: "「このままでいいのか」が、ずっと残る",
        body: "体の仕組みが分からないと、判断ができない。判断できない不安は、長く残ります。",
      },
    ],
  },

  proof: {
    heading: "先生が伝えたいのは、流行りの健康法ではありません。",
    lead:
      "血液・血管という“土台”から、体を読み解く。数値に振り回されないための、原理と手順です。",
    items: [
      {
        title: "専門性：薬剤師 × 血液の視点",
        body:
          "薬に頼り続けない未来を目指すために、体の状態を“血の流れ”から考えるアプローチを大切にしています。",
      },
      {
        title: "再現性：生活の中で続く設計",
        body:
          "特別な道具や難しい理論より、今日からできる小さな実践。続く形に落とし込むことを重視します。",
      },
      {
        title: "一貫性：不安を“手順”へ変える",
        body:
          "不安を煽らず、理解で支える。体のメッセージを読み、順番を決め、積み上げる。軸は一貫しています。",
      },
    ],
    profile: {
      heading: "講師プロフィール（要約）",
      name: "加藤 雅俊",
      oneLiner: "血液・血管の視点から「薬に頼り続けない未来」を提案する薬剤師。",
      highlights: [
        "血液データ・血流の視点で、生活習慣を設計する",
        "メディア・著書など（詳細は確定次第、追記）",
      ],
    },
  },

  seminar: {
    heading: "このセミナーで得られるもの",
    lead:
      "“正解探し”を終わらせるために。血管・血流という一本の軸で、今の不安を整理し、次の一手を決めます。",
    whatYouWillGet: [
      "血圧・検査数値を「体のメッセージ」として読む視点",
      "血管＝道路という考え方（全身の悩みを一本の軸で整理）",
      "血管に効かせる運動のポイント（短時間・自宅）",
      "食・睡眠・腸・ストレスを“続く設計図”にまとめるコツ",
      "薬や医療との向き合い方（自己判断を避け、選択肢を増やす）",
    ],
    agenda: [
      {
        title: "Part 1：数値に振り回されないための、体の読み方",
        bullets: [
          "血圧は“悪者”ではなくメッセージ",
          "数字は結果。原因（土台）へ降りていく",
        ],
      },
      {
        title: "Part 2：血管＝道路。巡りを整える原理",
        bullets: [
          "血管・血流が変わると、届き方が変わる",
          "筋肉（運動）が血管と脳へ与える影響",
        ],
      },
      {
        title: "Part 3：今日からできる“続く手順”",
        bullets: [
          "短時間でできる実践（例：椅子まわりの運動など）",
          "食・睡眠・腸・日光・呼吸を一枚にまとめる",
        ],
      },
      {
        title: "Part 4：不安を手順に変える（質疑・整理）",
        bullets: ["いまの状況を“言語化”し、次の一手を決める"],
      },
    ],
    faq: [
      {
        q: "薬をやめる話ですか？",
        a: "いいえ。自己判断での中止・変更を促すものではありません。体の土台を整えて選択肢を増やし、必要に応じて医師と相談しながら考えるための内容です。",
      },
      {
        q: "運動が苦手でも大丈夫ですか？",
        a: "大丈夫です。続けやすい短時間の実践を中心に、血管に効かせる“ポイント”を分かりやすく扱います。",
      },
      {
        q: "数値が正常でも受ける意味はありますか？",
        a: "あります。「異常なし」でも不調や不安が残ることは珍しくありません。体のメッセージを読む視点があると、日々の選択が変わります。",
      },
    ],
  },

  cta: {
    heading: "まず、あなたの状態を一緒に整理しませんか",
    lead:
      "数値や薬の不安を「一度、言語化」してから。血管・血流という軸で、これからの選択肢を増やすためのセミナーです。",
    microcopy:
      "※ 申込URLが未確定の場合は「準備中」表示になります。LINE導線がある場合はそちらもご利用ください。",
    primaryLabel: "セミナーに申し込む",
    standbyLabel: "申込受付は準備中です",
    secondaryLabel: "公式LINEで受け取る",
  },

  compliance: {
    disclaimer: [
      "本セミナーは医療行為・診断・治療を目的としたものではありません。",
      "服薬中の方は、自己判断での中止・変更はお控えください。必ず医師へご相談ください。",
      "気になる症状がある場合は、医療機関へご相談ください。",
    ],
    guardrails: [
      "LPでは強い対立構図（医療制度・検査・薬への断罪）を前面に出さない。主語は常に“生活設計”へ。",
      "断定→理由の順で書く場合でも、医療的断定（治る/治せる等）は避ける。",
      "深い論点はセミナー内へ寄せ、LPは参加の不安を解くことに集中する。",
    ],
  },
}

