// ═══════════════════════════════════════════
//  LESSONS 18–24 DATA
// ═══════════════════════════════════════════

const LESSONS = [

  // ─────────────────────────────────────────
  //  LESSON 18
  // ─────────────────────────────────────────
  {
    id: 18,
    title: "Long A/E完整 · ei/ey/eigh · th · ng",
    emoji: "🎼",
    color: 0,
    topics: [
      {
        name: "Long A 完整整理 + ei/ey/eigh",
        rules: [
          "長音 A /eɪ/ 的所有拼法整理：",
          "① <b>a_e</b>（magic e）：cake、lane、brave",
          "② <b>ai</b>（字中）：rain、mail、train",
          "③ <b>ay</b>（字尾）：day、play、stay",
          "④ <b>ei</b>：eight、vein、rein（外來音組，記憶：ei 通常在特定字）",
          "⑤ <b>ey</b>（字尾）：they、grey、obey、prey",
          "⑥ <b>eigh</b>：eight、weight、neigh（gh 不發音）"
        ],
        words: [
          { word: "vein",   highlight: "ei",   zh: "靜脈（ei=/eɪ/）", emoji: "🩸", search: "vein blood" },
          { word: "rein",   highlight: "ei",   zh: "韁繩（ei=/eɪ/）", emoji: "🐎", search: "rein horse" },
          { word: "they",   highlight: "ey",   zh: "他們（ey=/eɪ/）", emoji: "👥", search: "they people" },
          { word: "grey",   highlight: "ey",   zh: "灰色（ey=/eɪ/）", emoji: "🩶", search: "grey color" },
          { word: "obey",   highlight: "ey",   zh: "遵從（ey=/eɪ/）", emoji: "🙏", search: "obey follow" },
          { word: "prey",   highlight: "ey",   zh: "獵物（ey=/eɪ/）", emoji: "🦅", search: "prey eagle" },
          { word: "eight",  highlight: "eigh", zh: "八（eigh=/eɪ/）", emoji: "8️⃣", search: "number eight" },
          { word: "weight", highlight: "eigh", zh: "重量（eigh=/eɪ/）", emoji: "⚖️", search: "weight scale" },
          { word: "neigh",  highlight: "eigh", zh: "馬嘶聲（eigh=/eɪ/）", emoji: "🐴", search: "horse neigh" },
          { word: "freight",highlight: "eigh", zh: "貨運（eigh=/eɪ/）", emoji: "🚢", search: "freight ship" },
          { word: "sleigh", highlight: "eigh", zh: "雪橇（eigh=/eɪ/）", emoji: "🛷", search: "sleigh snow" },
          { word: "cake",   highlight: "a_e",  zh: "蛋糕（a_e=/eɪ/）複習", emoji: "🎂", search: "cake" },
          { word: "rain",   highlight: "ai",   zh: "雨（ai=/eɪ/）複習", emoji: "🌧️", search: "rain" },
          { word: "play",   highlight: "ay",   zh: "玩（ay=/eɪ/）複習", emoji: "🎮", search: "play" },
          { word: "neighbour",highlight:"eigh", zh: "鄰居（eigh=/eɪ/）", emoji: "🏘️", search: "neighbour house" }
        ],
        quiz: [
          { word: "eight", speak: "eight", displayWord: "eight", answer: "eigh → /eɪ/",
            choices: ["eigh → /iːt/","eigh → /eɪ/","eigh → /ɛt/","eigh → /ɪt/"],
            hint: "8️⃣ eight，eigh 唸長 a /eɪ/，gh 不發音！", emoji: "8️⃣", search: "number eight" },
          { word: "they", speak: "they", displayWord: "they", answer: "ey → /eɪ/",
            choices: ["ey → /iː/","ey → /eɪ/","ey → /ɛ/","ey → /ə/"],
            hint: "👥 they，字尾 ey 唸長 a /eɪ/！", emoji: "👥", search: "they people" },
          { word: "weight", speak: "weight", displayWord: "weight", answer: "eigh → /eɪ/",
            choices: ["eigh → /wɪt/","eigh → /eɪ/","eigh → /ɛt/","eigh → /ɪt/"],
            hint: "⚖️ weight，eigh 唸 /eɪ/！", emoji: "⚖️", search: "weight scale" },
          { word: "obey", speak: "obey", displayWord: "obey", answer: "ey → /eɪ/",
            choices: ["ey → /iː/","ey → /eɪ/","ey → /ɛ/","ey → /ɪ/"],
            hint: "🙏 obey，字尾 ey 唸長 a /eɪ/！", emoji: "🙏", search: "obey follow" }
        ]
      },
      {
        name: "th 兩個音 + ng 音組",
        rules: [
          "<b>th</b> 有兩種發音，用嘴型區分：",
          "① <b>有聲 th /ð/</b>：舌頭放在上下齒之間，振動聲帶，例：the、this、that、them、there",
          "② <b>無聲 th /θ/</b>：舌頭放在上下齒之間，不振動聲帶，例：think、three、thank、bath、tooth",
          "<b>ng</b>：字尾 ng 唸 /ŋ/（鼻音，氣流從鼻子出來），例：sing、ring、king、song、long",
          "ng 不能出現在字首！只能在字中或字尾"
        ],
        words: [
          { word: "the",    highlight: "th", zh: "這個/那個（有聲th/ð/）", emoji: "👆", search: "the word" },
          { word: "this",   highlight: "th", zh: "這個（有聲th/ð/）", emoji: "☝️", search: "this here" },
          { word: "that",   highlight: "th", zh: "那個（有聲th/ð/）", emoji: "👉", search: "that there" },
          { word: "them",   highlight: "th", zh: "他們（有聲th/ð/）", emoji: "👥", search: "them people" },
          { word: "there",  highlight: "th", zh: "那裡（有聲th/ð/）", emoji: "📍", search: "there location" },
          { word: "think",  highlight: "th", zh: "想（無聲th/θ/）", emoji: "🤔", search: "think" },
          { word: "three",  highlight: "th", zh: "三（無聲th/θ/）", emoji: "3️⃣", search: "number three" },
          { word: "thank",  highlight: "th", zh: "感謝（無聲th/θ/）", emoji: "🙏", search: "thank" },
          { word: "tooth",  highlight: "th", zh: "牙齒（無聲th/θ/）", emoji: "🦷", search: "tooth" },
          { word: "bath",   highlight: "th", zh: "洗澡（無聲th/θ/）", emoji: "🛁", search: "bath" },
          { word: "sing",   highlight: "ng", zh: "唱（ng=/ŋ/）", emoji: "🎵", search: "sing" },
          { word: "ring",   highlight: "ng", zh: "戒指/鈴（ng=/ŋ/）", emoji: "💍", search: "ring" },
          { word: "king",   highlight: "ng", zh: "國王（ng=/ŋ/）", emoji: "👑", search: "king" },
          { word: "song",   highlight: "ng", zh: "歌（ng=/ŋ/）", emoji: "🎶", search: "song music" },
          { word: "strong", highlight: "ng", zh: "強壯（ng=/ŋ/）", emoji: "💪", search: "strong muscle" }
        ],
        quiz: [
          { word: "the", speak: "the", displayWord: "the", answer: "有聲 /ð/",
            choices: ["有聲 /ð/","無聲 /θ/","/t/","/d/"],
            hint: "👆 the，th 有聲帶震動 → /ð/！", emoji: "👆", search: "the word" },
          { word: "think", speak: "think", displayWord: "think", answer: "無聲 /θ/",
            choices: ["有聲 /ð/","無聲 /θ/","/t/","/d/"],
            hint: "🤔 think，th 沒有聲帶震動 → /θ/！", emoji: "🤔", search: "think" },
          { word: "sing", speak: "sing", displayWord: "sing", answer: "/ŋ/（鼻音）",
            choices: ["/ng/兩個音","無聲/nk/","/ŋ/（鼻音）","/n/+/g/"],
            hint: "🎵 sing，ng 唸一個鼻音 /ŋ/！", emoji: "🎵", search: "sing" },
          { word: "strong", speak: "strong", displayWord: "strong", answer: "/ŋ/（鼻音）",
            choices: ["/ng/兩個音","無聲/nk/","/ŋ/（鼻音）","/n/+/g/"],
            hint: "💪 strong，ng 唸鼻音 /ŋ/！", emoji: "💪", search: "strong muscle" }
        ]
      }
    ],
    story: {
      title: "👑 The King's Eight Sleighs",
      pages: [
        { en: "The king had eight grey sleighs and a strong horse.", zh: "國王有八輛灰色雪橇和一匹強壯的馬。", highlights: ["king","eight","grey","sleighs","strong","horse"] },
        { en: "They thought that three of them were the best.", zh: "他們覺得其中三輛是最好的。", highlights: ["They","thought","three"] },
        { en: "The horse neighed and began to sing a song.", zh: "馬兒嘶叫，然後開始唱歌。", highlights: ["neighed","sing","song"] },
        { en: "Thank them for this — what a sight and a delight!", zh: "感謝他們——真是美景和喜悅！", highlights: ["Thank","them","this","sight"] }
      ]
    }
  },

  // ─────────────────────────────────────────
  //  LESSON 19
  // ─────────────────────────────────────────
  {
    id: 19,
    title: "ugh 兩個音 · O第三個音 · OO整理",
    emoji: "🔮",
    color: 1,
    topics: [
      {
        name: "ugh 兩個音 + O 的第三個音",
        rules: [
          "<b>ugh</b> 有兩種發音：",
          "① gh 不發音，ugh 唸 /ʌf/ 或讓前面的音延長：tough、rough、enough",
          "② gh 唸 /f/，ugh 唸 /ʌf/：enough、rough、tough、laugh（已在L17學）",
          "<b>O 的第三個音</b>：除了短音 /ɑ/ 和長音 /oʊ/，o 還可以唸 /ʌ/ 像短 u！",
          "例：son、done、come、some、love、money、monkey",
          "記憶法：這些字多半是常用的「小字」，需要直接背起來！"
        ],
        words: [
          { word: "tough",  highlight: "ugh", zh: "堅韌（gh=/f/）", emoji: "💪", search: "tough strong" },
          { word: "rough",  highlight: "ugh", zh: "粗糙（gh=/f/）", emoji: "🪨", search: "rough stone" },
          { word: "enough", highlight: "ugh", zh: "足夠（gh=/f/）", emoji: "✅", search: "enough" },
          { word: "though", highlight: "ugh", zh: "雖然（gh不發音）", emoji: "🤔", search: "though thinking" },
          { word: "through",highlight: "ugh", zh: "穿過（gh不發音）", emoji: "🚇", search: "through tunnel" },
          { word: "son",    highlight: "o",   zh: "兒子（o=/ʌ/）", emoji: "👦", search: "son boy" },
          { word: "done",   highlight: "o",   zh: "完成（o=/ʌ/）", emoji: "✅", search: "done finish" },
          { word: "come",   highlight: "o",   zh: "來（o=/ʌ/）", emoji: "👋", search: "come here" },
          { word: "some",   highlight: "o",   zh: "一些（o=/ʌ/）", emoji: "🔢", search: "some number" },
          { word: "love",   highlight: "o",   zh: "愛（o=/ʌ/）", emoji: "❤️", search: "love heart" },
          { word: "money",  highlight: "o",   zh: "錢（o=/ʌ/）", emoji: "💰", search: "money" },
          { word: "monkey", highlight: "o",   zh: "猴子（o=/ʌ/）", emoji: "🐒", search: "monkey" },
          { word: "honey",  highlight: "o",   zh: "蜂蜜（o=/ʌ/）", emoji: "🍯", search: "honey bee" },
          { word: "front",  highlight: "o",   zh: "前面（o=/ʌ/）", emoji: "⬆️", search: "front" },
          { word: "month",  highlight: "o",   zh: "月份（o=/ʌ/）", emoji: "📅", search: "month calendar" }
        ],
        quiz: [
          { word: "tough", speak: "tough", displayWord: "tough", answer: "/ʌf/（gh=/f/）",
            choices: ["/tuːg/","/ʌf/（gh=/f/）","/tɔː/","/tʌg/"],
            hint: "💪 tough，ugh → /ʌf/，gh 唸 /f/！", emoji: "💪", search: "tough strong" },
          { word: "though", speak: "though", displayWord: "though", answer: "/ðoʊ/（gh不發音）",
            choices: ["/ðɔː/","/ðoʊ/（gh不發音）","/ðʌf/","/ðɑg/"],
            hint: "🤔 though，ough → /oʊ/，gh 不發音！", emoji: "🤔", search: "though thinking" },
          { word: "son", speak: "son", displayWord: "son", answer: "/ʌ/（o第三個音）",
            choices: ["/ɑ/（短o）","/oʊ/（長o）","/ʌ/（o第三個音）","/ə/（懶音）"],
            hint: "👦 son，這個 o 唸 /ʌ/，像短 u！", emoji: "👦", search: "son boy" },
          { word: "love", speak: "love", displayWord: "love", answer: "/ʌ/（o第三個音）",
            choices: ["/ɑ/（短o）","/oʊ/（長o）","/ʌ/（o第三個音）","/uː/（長u）"],
            hint: "❤️ love，這個 o 唸 /ʌ/！", emoji: "❤️", search: "love heart" }
        ]
      },
      {
        name: "OO 四個音整理 + 無聲變有聲",
        rules: [
          "OO 四個音複習：",
          "① 長OO /uː/：moon、food、school（最常見）",
          "② 短OO /ʊ/：book、look、cook、good",
          "③ /ɔː/：floor、door（少數，特例）",
          "④ /ʌ/：blood、flood（非常少數，特例）",
          "判斷法：先試長OO /uː/，不對試短OO /ʊ/，其餘兩個直接背！",
          "<b>無聲變有聲</b>：在兩個母音之間，無聲子音常變成有聲（如 s→z：music=/mjuːzɪk/）"
        ],
        words: [
          { word: "moon",   highlight: "oo", zh: "月亮（長OO/uː/）", emoji: "🌙", search: "moon" },
          { word: "food",   highlight: "oo", zh: "食物（長OO/uː/）", emoji: "🍔", search: "food" },
          { word: "school", highlight: "oo", zh: "學校（長OO/uː/）", emoji: "🏫", search: "school" },
          { word: "tooth",  highlight: "oo", zh: "牙齒（長OO/uː/）", emoji: "🦷", search: "tooth" },
          { word: "spoon",  highlight: "oo", zh: "湯匙（長OO/uː/）", emoji: "🥄", search: "spoon" },
          { word: "book",   highlight: "oo", zh: "書（短OO/ʊ/）", emoji: "📚", search: "book" },
          { word: "cook",   highlight: "oo", zh: "廚師（短OO/ʊ/）", emoji: "👨‍🍳", search: "cook" },
          { word: "good",   highlight: "oo", zh: "好（短OO/ʊ/）", emoji: "👍", search: "good" },
          { word: "wood",   highlight: "oo", zh: "木頭（短OO/ʊ/）", emoji: "🪵", search: "wood" },
          { word: "floor",  highlight: "oo", zh: "地板（oo=/ɔː/特例）", emoji: "🏠", search: "floor" },
          { word: "door",   highlight: "oo", zh: "門（oo=/ɔː/特例）", emoji: "🚪", search: "door" },
          { word: "blood",  highlight: "oo", zh: "血（oo=/ʌ/特例）", emoji: "🩸", search: "blood" },
          { word: "flood",  highlight: "oo", zh: "洪水（oo=/ʌ/特例）", emoji: "🌊", search: "flood water" },
          { word: "smooth", highlight: "oo", zh: "光滑（長OO/uː/）", emoji: "🌊", search: "smooth" },
          { word: "soot",   highlight: "oo", zh: "煤灰（短OO/ʊ/）", emoji: "🖤", search: "soot ash" }
        ],
        quiz: [
          { word: "moon", speak: "moon", displayWord: "moon", answer: "長OO /uː/",
            choices: ["長OO /uː/","短OO /ʊ/","/ɔː/特例","/ʌ/特例"],
            hint: "🌙 moon，唸長OO /uː/！", emoji: "🌙", search: "moon" },
          { word: "book", speak: "book", displayWord: "book", answer: "短OO /ʊ/",
            choices: ["長OO /uː/","短OO /ʊ/","/ɔː/特例","/ʌ/特例"],
            hint: "📚 book，唸短OO /ʊ/！", emoji: "📚", search: "book" },
          { word: "blood", speak: "blood", displayWord: "blood", answer: "/ʌ/特例",
            choices: ["長OO /uː/","短OO /ʊ/","/ɔː/特例","/ʌ/特例"],
            hint: "🩸 blood，oo 唸 /ʌ/，是特例！", emoji: "🩸", search: "blood" },
          { word: "floor", speak: "floor", displayWord: "floor", answer: "/ɔː/特例",
            choices: ["長OO /uː/","短OO /ʊ/","/ɔː/特例","/ʌ/特例"],
            hint: "🏠 floor，oo 唸 /ɔː/，是特例！", emoji: "🏠", search: "floor" }
        ]
      }
    ],
    story: {
      title: "🐒 The Monkey's Honey",
      pages: [
        { en: "A monkey came to school with some honey and a spoon.", zh: "一隻猴子帶著一些蜂蜜和一把湯匙來學校。", highlights: ["monkey","come","school","some","honey","spoon"] },
        { en: "He sat on the floor by the door and said: 'Enough!'", zh: "他坐在門旁的地板上說：「夠了！」", highlights: ["floor","door","Enough"] },
        { en: "Though the food was rough, his love was true.", zh: "雖然食物很粗糙，但他的愛是真實的。", highlights: ["Though","food","rough","love"] },
        { en: "He thought: good things are worth it!", zh: "他想：好東西是值得的！", highlights: ["thought","good","worth"] }
      ]
    }
  },

  // ─────────────────────────────────────────
  //  LESSON 20
  // ─────────────────────────────────────────
  {
    id: 20,
    title: "Wh · gn/kn · sh/ci/ti/si · 拼音4",
    emoji: "🔑",
    color: 2,
    topics: [
      {
        name: "Wh 音組 + 不發音的 gn/kn",
        rules: [
          "<b>Wh</b>：大多數情況唸 /w/（who 例外唸 /h/）",
          "例：what、when、where、which、why、while、white",
          "⚠️ 特例：who、whole、whose → wh 唸 /h/",
          "<b>gn</b>（來自德語）：g 不發音，只唸 n，例：gnat、gnome、gnaw、sign、design",
          "<b>kn</b>（來自古英語）：k 不發音，只唸 n，例：know、knife、knee、knight、knock",
          "記憶：這些字的首字母都「裝死」不發音！"
        ],
        words: [
          { word: "what",   highlight: "wh", zh: "什麼（wh=/w/）", emoji: "❓", search: "what question" },
          { word: "when",   highlight: "wh", zh: "什麼時候（wh=/w/）", emoji: "⏰", search: "when time" },
          { word: "where",  highlight: "wh", zh: "哪裡（wh=/w/）", emoji: "📍", search: "where location" },
          { word: "which",  highlight: "wh", zh: "哪個（wh=/w/）", emoji: "🔀", search: "which choice" },
          { word: "white",  highlight: "wh", zh: "白色（wh=/w/）", emoji: "🤍", search: "white color" },
          { word: "who",    highlight: "wh", zh: "誰（wh=/h/ 特例）", emoji: "🕵️", search: "who detective" },
          { word: "whole",  highlight: "wh", zh: "整個（wh=/h/ 特例）", emoji: "⭕", search: "whole complete" },
          { word: "gnome",  highlight: "gn", zh: "地精（gn=n，g不發音）", emoji: "🧙", search: "gnome" },
          { word: "gnaw",   highlight: "gn", zh: "啃（gn=n，g不發音）", emoji: "🐭", search: "gnaw mouse" },
          { word: "sign",   highlight: "gn", zh: "標誌（gn=n，g不發音）", emoji: "🚦", search: "sign" },
          { word: "know",   highlight: "kn", zh: "知道（kn=n，k不發音）", emoji: "💡", search: "know idea" },
          { word: "knife",  highlight: "kn", zh: "刀子（kn=n，k不發音）", emoji: "🔪", search: "knife" },
          { word: "knee",   highlight: "kn", zh: "膝蓋（kn=n，k不發音）", emoji: "🦵", search: "knee" },
          { word: "knight", highlight: "kn", zh: "騎士（kn=n，k不發音）", emoji: "⚔️", search: "knight" },
          { word: "knock",  highlight: "kn", zh: "敲（kn=n，k不發音）", emoji: "🚪", search: "knock door" }
        ],
        quiz: [
          { word: "what", speak: "what", displayWord: "what", answer: "/w/",
            choices: ["/w/","/h/","/hw/","/v/"],
            hint: "❓ what，wh 唸 /w/！", emoji: "❓", search: "what question" },
          { word: "who", speak: "who", displayWord: "who", answer: "/h/（特例）",
            choices: ["/w/","/h/（特例）","/hw/","/v/"],
            hint: "🕵️ who，這個 wh 特例唸 /h/！", emoji: "🕵️", search: "who detective" },
          { word: "knife", speak: "knife", displayWord: "knife", answer: "k 不發音",
            choices: ["k=/k/","k 不發音","k=/n/","k=/g/"],
            hint: "🔪 knife，kn 中 k 不發音！", emoji: "🔪", search: "knife" },
          { word: "sign", speak: "sign", displayWord: "sign", answer: "g 不發音",
            choices: ["g=/g/","g 不發音","g=/n/","g=/dʒ/"],
            hint: "🚦 sign，gn 中 g 不發音！", emoji: "🚦", search: "sign" }
        ]
      },
      {
        name: "sh · ci/ti/si = /ʃ/ · 三字母拼音4",
        rules: [
          "<b>sh</b>：唸 /ʃ/（像「噓」的聲音），例：she、ship、shop、wish、fish、dish",
          "<b>ci / ti / si</b>：當這三個組合出現在母音前面時，都唸 /ʃ/！",
          "例：special（ci=/ʃ/）、nation（ti=/ʃ/）、mansion（si=/ʃ/）",
          "這就是為什麼 -tion 唸 /ʃən/ 而不是 /tɪon/！",
          "<b>三字母拼音4：spr/str/spl</b>：sp+r、st+r、sp+l 快速連唸",
          "例：spring、street、split、spread、strong、splash"
        ],
        words: [
          { word: "she",      highlight: "sh", zh: "她（sh=/ʃ/）", emoji: "👧", search: "she girl" },
          { word: "ship",     highlight: "sh", zh: "船（sh=/ʃ/）", emoji: "🚢", search: "ship" },
          { word: "shop",     highlight: "sh", zh: "商店（sh=/ʃ/）", emoji: "🏪", search: "shop store" },
          { word: "wish",     highlight: "sh", zh: "希望（sh=/ʃ/）", emoji: "⭐", search: "wish star" },
          { word: "dish",     highlight: "sh", zh: "碟子（sh=/ʃ/）", emoji: "🍽️", search: "dish plate" },
          { word: "special",  highlight: "ci", zh: "特別的（ci=/ʃ/）", emoji: "✨", search: "special" },
          { word: "social",   highlight: "ci", zh: "社交的（ci=/ʃ/）", emoji: "👥", search: "social" },
          { word: "nation",   highlight: "ti", zh: "國家（ti=/ʃ/）", emoji: "🌍", search: "nation" },
          { word: "station",  highlight: "ti", zh: "車站（ti=/ʃ/）", emoji: "🚉", search: "station" },
          { word: "mansion",  highlight: "si", zh: "豪宅（si=/ʃ/）", emoji: "🏰", search: "mansion" },
          { word: "spring",   highlight: "spr", zh: "春天/彈簧（spr）", emoji: "🌸", search: "spring flower" },
          { word: "street",   highlight: "str", zh: "街道（str）", emoji: "🏙️", search: "street" },
          { word: "strong",   highlight: "str", zh: "強壯（str）", emoji: "💪", search: "strong" },
          { word: "splash",   highlight: "spl", zh: "濺水（spl）", emoji: "💦", search: "splash water" },
          { word: "spread",   highlight: "spr", zh: "散開（spr）", emoji: "🧈", search: "spread" }
        ],
        quiz: [
          { word: "ship", speak: "ship", displayWord: "ship", answer: "/ʃ/",
            choices: ["/s/","/ʃ/","/tʃ/","/h/"],
            hint: "🚢 ship，sh 唸 /ʃ/（噓聲）！", emoji: "🚢", search: "ship" },
          { word: "nation", speak: "nation", displayWord: "na-tion", answer: "ti → /ʃ/",
            choices: ["ti → /tɪ/","ti → /ʃ/","ti → /ti/","ti → /tʃ/"],
            hint: "🌍 nation，-tion 裡的 ti 唸 /ʃ/！", emoji: "🌍", search: "nation" },
          { word: "special", speak: "special", displayWord: "spe-cial", answer: "ci → /ʃ/",
            choices: ["ci → /sɪ/","ci → /ʃ/","ci → /ki/","ci → /tʃ/"],
            hint: "✨ special，-cial 裡的 ci 唸 /ʃ/！", emoji: "✨", search: "special" },
          { word: "spring", speak: "spring", displayWord: "spring", answer: "/spr/",
            choices: ["/s/+停頓+/p/+停頓+/r/","/spr/","/sp/+/r/","/str/"],
            hint: "🌸 spring，spr 三個音快速連唸！", emoji: "🌸", search: "spring flower" }
        ]
      }
    ],
    story: {
      title: "⚔️ The Knight Who Knew",
      pages: [
        { en: "A knight knocked on the door of a special mansion.", zh: "一位騎士敲了一扇特別豪宅的門。", highlights: ["knight","knocked","special","mansion"] },
        { en: "He knew who lived there — a gnome near the sign!", zh: "他知道住在那裡的是誰——告示牌旁的地精！", highlights: ["knew","who","gnome","sign"] },
        { en: "She had a whole dish of spring soup on the street.", zh: "她在街上有一整盤春天的湯。", highlights: ["whole","dish","spring","street"] },
        { en: "What a strong wish — to share with the nation!", zh: "多麼強烈的願望——要與全國分享！", highlights: ["What","strong","wish","nation"] }
      ]
    }
  },

  // ─────────────────────────────────────────
  //  LESSON 21
  // ─────────────────────────────────────────
  {
    id: 21,
    title: "ch 三個音 · sh · ear 音組",
    emoji: "🎷",
    color: 3,
    topics: [
      {
        name: "ch 的三個發音",
        rules: [
          "<b>ch</b> 有三種發音：",
          "① <b>英語音 /tʃ/</b>（最常見）：chair、cheese、chicken、much、watch",
          "② <b>希臘語音 /k/</b>（來自希臘文的字）：school、echo、stomach、chemistry、character",
          "③ <b>法語音 /ʃ/</b>（來自法語的字）：chef、machine、chauffeur、brochure",
          "判斷法：先試 /tʃ/，如果不對再試 /k/，法語音 /ʃ/ 最少見！",
          "<b>sh 音組複習</b>：sh=/ʃ/，always together"
        ],
        words: [
          { word: "chair",     highlight: "ch", zh: "椅子（ch=/tʃ/ 英語）", emoji: "🪑", search: "chair" },
          { word: "cheese",    highlight: "ch", zh: "起司（ch=/tʃ/ 英語）", emoji: "🧀", search: "cheese" },
          { word: "chicken",   highlight: "ch", zh: "雞（ch=/tʃ/ 英語）", emoji: "🐔", search: "chicken" },
          { word: "much",      highlight: "ch", zh: "很多（ch=/tʃ/ 英語）", emoji: "➕", search: "much many" },
          { word: "beach",     highlight: "ch", zh: "海灘（ch=/tʃ/ 英語）", emoji: "🏖️", search: "beach" },
          { word: "school",    highlight: "ch", zh: "學校（ch=/k/ 希臘）", emoji: "🏫", search: "school" },
          { word: "echo",      highlight: "ch", zh: "回聲（ch=/k/ 希臘）", emoji: "🔊", search: "echo" },
          { word: "stomach",   highlight: "ch", zh: "胃（ch=/k/ 希臘）", emoji: "🫀", search: "stomach" },
          { word: "chemistry", highlight: "ch", zh: "化學（ch=/k/ 希臘）", emoji: "⚗️", search: "chemistry" },
          { word: "chef",      highlight: "ch", zh: "廚師（ch=/ʃ/ 法語）", emoji: "👨‍🍳", search: "chef cook" },
          { word: "machine",   highlight: "ch", zh: "機器（ch=/ʃ/ 法語）", emoji: "⚙️", search: "machine" },
          { word: "shark",     highlight: "sh", zh: "鯊魚（sh=/ʃ/）", emoji: "🦈", search: "shark" },
          { word: "shadow",    highlight: "sh", zh: "陰影（sh=/ʃ/）", emoji: "🌑", search: "shadow" },
          { word: "shelter",   highlight: "sh", zh: "遮蔽/避難所（sh=/ʃ/）", emoji: "🏕️", search: "shelter" },
          { word: "shoulder",  highlight: "sh", zh: "肩膀（sh=/ʃ/）", emoji: "🧍", search: "shoulder" }
        ],
        quiz: [
          { word: "chair", speak: "chair", displayWord: "chair", answer: "/tʃ/（英語ch）",
            choices: ["/tʃ/（英語ch）","/k/（希臘ch）","/ʃ/（法語ch）","/h/"],
            hint: "🪑 chair，ch 最常見的發音 /tʃ/！", emoji: "🪑", search: "chair" },
          { word: "school", speak: "school", displayWord: "school", answer: "/k/（希臘ch）",
            choices: ["/tʃ/（英語ch）","/k/（希臘ch）","/ʃ/（法語ch）","/h/"],
            hint: "🏫 school，ch 唸 /k/！來自希臘文！", emoji: "🏫", search: "school" },
          { word: "chef", speak: "chef", displayWord: "chef", answer: "/ʃ/（法語ch）",
            choices: ["/tʃ/（英語ch）","/k/（希臘ch）","/ʃ/（法語ch）","/h/"],
            hint: "👨‍🍳 chef，ch 唸 /ʃ/！來自法語！", emoji: "👨‍🍳", search: "chef cook" },
          { word: "shark", speak: "shark", displayWord: "shark", answer: "/ʃ/",
            choices: ["/s/","/ʃ/","/tʃ/","/k/"],
            hint: "🦈 shark，sh 唸 /ʃ/！", emoji: "🦈", search: "shark" }
        ]
      },
      {
        name: "ear 音組的三個音",
        rules: [
          "<b>ear</b> 有三種發音：",
          "① /ɪər/（最常見）：ear、fear、near、hear、dear、clear",
          "② /ɛər/（像 air）：bear、pear、wear、swear",
          "③ /ɜːr/（像 ir/er/ur）：earth、early、earn、learn、search",
          "判斷法：先試 /ɪər/，如果不對試 /ɛər/，第三種直接背！",
          "記憶：'聽到（hear）' 和 '熊（bear）' 的 ear 不一樣！"
        ],
        words: [
          { word: "ear",    highlight: "ear", zh: "耳朵（ear=/ɪər/）", emoji: "👂", search: "ear" },
          { word: "fear",   highlight: "ear", zh: "恐懼（ear=/ɪər/）", emoji: "😱", search: "fear" },
          { word: "near",   highlight: "ear", zh: "靠近（ear=/ɪər/）", emoji: "📍", search: "near" },
          { word: "hear",   highlight: "ear", zh: "聽（ear=/ɪər/）", emoji: "👂", search: "hear listen" },
          { word: "dear",   highlight: "ear", zh: "親愛的（ear=/ɪər/）", emoji: "💌", search: "dear letter" },
          { word: "clear",  highlight: "ear", zh: "清楚（ear=/ɪər/）", emoji: "💧", search: "clear water" },
          { word: "year",   highlight: "ear", zh: "年（ear=/ɪər/）", emoji: "📅", search: "year calendar" },
          { word: "bear",   highlight: "ear", zh: "熊（ear=/ɛər/）", emoji: "🐻", search: "bear" },
          { word: "pear",   highlight: "ear", zh: "梨子（ear=/ɛər/）", emoji: "🍐", search: "pear" },
          { word: "wear",   highlight: "ear", zh: "穿（ear=/ɛər/）", emoji: "👕", search: "wear clothes" },
          { word: "earth",  highlight: "ear", zh: "地球/泥土（ear=/ɜːr/）", emoji: "🌍", search: "earth" },
          { word: "early",  highlight: "ear", zh: "早（ear=/ɜːr/）", emoji: "🌅", search: "early sunrise" },
          { word: "earn",   highlight: "ear", zh: "賺取（ear=/ɜːr/）", emoji: "💰", search: "earn money" },
          { word: "learn",  highlight: "ear", zh: "學習（ear=/ɜːr/）", emoji: "📚", search: "learn study" },
          { word: "search", highlight: "ear", zh: "搜尋（ear=/ɜːr/）", emoji: "🔍", search: "search" }
        ],
        quiz: [
          { word: "hear", speak: "hear", displayWord: "hear", answer: "/ɪər/①",
            choices: ["/ɪər/①","/ɛər/②","/ɜːr/③","/eɪr/"],
            hint: "👂 hear（聽），ear 唸 /ɪər/！", emoji: "👂", search: "hear listen" },
          { word: "bear", speak: "bear", displayWord: "bear", answer: "/ɛər/②",
            choices: ["/ɪər/①","/ɛər/②","/ɜːr/③","/eɪr/"],
            hint: "🐻 bear（熊），ear 唸 /ɛər/，像 air！", emoji: "🐻", search: "bear" },
          { word: "earth", speak: "earth", displayWord: "earth", answer: "/ɜːr/③",
            choices: ["/ɪər/①","/ɛər/②","/ɜːr/③","/eɪr/"],
            hint: "🌍 earth（地球），ear 唸 /ɜːr/！", emoji: "🌍", search: "earth" },
          { word: "learn", speak: "learn", displayWord: "learn", answer: "/ɜːr/③",
            choices: ["/ɪər/①","/ɛər/②","/ɜːr/③","/eɪr/"],
            hint: "📚 learn（學習），ear 唸 /ɜːr/！", emoji: "📚", search: "learn study" }
        ]
      }
    ],
    story: {
      title: "🐻 The Bear Who Learned Early",
      pages: [
        { en: "A bear got up early to search for a pear near the school.", zh: "一隻熊早起去學校附近尋找梨子。", highlights: ["bear","early","search","pear","near","school"] },
        { en: "The chef at the school kitchen made chicken and cheese.", zh: "學校廚房的廚師做了雞肉和起司。", highlights: ["chef","school","chicken","cheese"] },
        { en: "The bear could hear an echo from the earth.", zh: "熊可以聽見從大地傳來的回聲。", highlights: ["hear","echo","earth"] },
        { en: "It was clear — this year, the bear would learn a lot!", zh: "很清楚——今年，熊會學到很多！", highlights: ["clear","year","bear","learn"] }
      ]
    }
  },

  // ─────────────────────────────────────────
  //  LESSON 22
  // ─────────────────────────────────────────
  {
    id: 22,
    title: "ph=/f/ · Silent e整理 · ed三種音 · 字尾c",
    emoji: "📸",
    color: 4,
    topics: [
      {
        name: "ph=/f/ + ed 的三種發音",
        rules: [
          "<b>ph</b>：來自希臘文，唸 /f/，和 f 發音相同",
          "例：phone、photo、elephant、dolphin、alphabet、trophy",
          "<b>ed 的三種發音</b>（過去式結尾）：",
          "① 動詞字尾是 t 或 d → ed 唸 /ɪd/：wanted、ended、landed",
          "② 動詞字尾是無聲子音（p/k/f/s/ch/sh）→ ed 唸 /t/：jumped、walked、laughed",
          "③ 動詞字尾是有聲子音或母音 → ed 唸 /d/：played、called、moved"
        ],
        words: [
          { word: "phone",    highlight: "ph", zh: "電話（ph=/f/）", emoji: "📱", search: "phone" },
          { word: "photo",    highlight: "ph", zh: "照片（ph=/f/）", emoji: "📷", search: "photo" },
          { word: "elephant", highlight: "ph", zh: "大象（ph=/f/）", emoji: "🐘", search: "elephant" },
          { word: "dolphin",  highlight: "ph", zh: "海豚（ph=/f/）", emoji: "🐬", search: "dolphin" },
          { word: "alphabet", highlight: "ph", zh: "字母表（ph=/f/）", emoji: "🔤", search: "alphabet" },
          { word: "trophy",   highlight: "ph", zh: "獎盃（ph=/f/）", emoji: "🏆", search: "trophy" },
          { word: "graph",    highlight: "ph", zh: "圖表（ph=/f/）", emoji: "📊", search: "graph" },
          { word: "wanted",   highlight: "ed", zh: "想要了（ed=/ɪd/）", emoji: "💭", search: "wanted" },
          { word: "landed",   highlight: "ed", zh: "降落了（ed=/ɪd/）", emoji: "✈️", search: "landed plane" },
          { word: "jumped",   highlight: "ed", zh: "跳了（ed=/t/）", emoji: "🐸", search: "jumped frog" },
          { word: "walked",   highlight: "ed", zh: "走了（ed=/t/）", emoji: "🚶", search: "walked" },
          { word: "played",   highlight: "ed", zh: "玩了（ed=/d/）", emoji: "🎮", search: "played" },
          { word: "called",   highlight: "ed", zh: "叫了（ed=/d/）", emoji: "📞", search: "called phone" },
          { word: "laughed",  highlight: "ed", zh: "笑了（ed=/t/）", emoji: "😂", search: "laughed" },
          { word: "ended",    highlight: "ed", zh: "結束了（ed=/ɪd/）", emoji: "🏁", search: "ended finish" }
        ],
        quiz: [
          { word: "phone", speak: "phone", displayWord: "phone", answer: "/f/",
            choices: ["/p/","/f/","/ph/","/h/"],
            hint: "📱 phone，ph 唸 /f/，來自希臘文！", emoji: "📱", search: "phone" },
          { word: "wanted", speak: "wanted", displayWord: "want-ed", answer: "/ɪd/（字尾t+ed）",
            choices: ["/ɪd/（字尾t+ed）","/t/（無聲+ed）","/d/（有聲+ed）","/əd/"],
            hint: "💭 wanted，字尾是 t，所以 ed 唸 /ɪd/！", emoji: "💭", search: "wanted" },
          { word: "jumped", speak: "jumped", displayWord: "jump-ed", answer: "/t/（無聲p+ed）",
            choices: ["/ɪd/（字尾t/d+ed）","/t/（無聲p+ed）","/d/（有聲+ed）","/əd/"],
            hint: "🐸 jumped，字尾是 p（無聲），所以 ed 唸 /t/！", emoji: "🐸", search: "jumped frog" },
          { word: "played", speak: "played", displayWord: "play-ed", answer: "/d/（有聲y+ed）",
            choices: ["/ɪd/（字尾t/d+ed）","/t/（無聲+ed）","/d/（有聲y+ed）","/əd/"],
            hint: "🎮 played，字尾是 y（有聲），所以 ed 唸 /d/！", emoji: "🎮", search: "played" }
        ]
      },
      {
        name: "字尾 c + Silent e 任務整理",
        rules: [
          "<b>字尾 c 的規則</b>：什麼時候字尾用 c 而不是 ck？",
          "多音節字字尾用單獨的 c：panic、magic、topic、attic、traffic",
          "注意：單音節字短母音後用 ck（back、duck），多音節字尾用 c！",
          "<b>Silent e 五個任務完整整理</b>：",
          "① 讓前面母音唸長音（cake, kite, bone）",
          "② 讓字不以 v 或 u 結尾（give, have, blue）",
          "③ 讓 c 唸軟音 /s/（face, ice, race）",
          "④ 讓 g 唸軟音 /dʒ/（age, page, huge）",
          "⑤ 補足 -le 音節（table, puzzle, circle）"
        ],
        words: [
          { word: "panic",    highlight: "c",   zh: "恐慌（多音節字尾c）", emoji: "😱", search: "panic scared" },
          { word: "magic",    highlight: "c",   zh: "魔法（多音節字尾c）", emoji: "🪄", search: "magic" },
          { word: "topic",    highlight: "c",   zh: "主題（多音節字尾c）", emoji: "📝", search: "topic" },
          { word: "attic",    highlight: "c",   zh: "閣樓（多音節字尾c）", emoji: "🏠", search: "attic" },
          { word: "traffic",  highlight: "c",   zh: "交通（多音節字尾c）", emoji: "🚗", search: "traffic" },
          { word: "cake",     highlight: "a_e", zh: "①長音（a_e）", emoji: "🎂", search: "cake" },
          { word: "give",     highlight: "ve",  zh: "②不以v結尾", emoji: "🎁", search: "give" },
          { word: "face",     highlight: "ce",  zh: "③c軟音/s/", emoji: "😊", search: "face" },
          { word: "age",      highlight: "ge",  zh: "④g軟音/dʒ/", emoji: "🎂", search: "age" },
          { word: "table",    highlight: "le",  zh: "⑤補足le音節", emoji: "🪑", search: "table" },
          { word: "ice",      highlight: "ce",  zh: "③c軟音/s/", emoji: "🧊", search: "ice" },
          { word: "huge",     highlight: "ge",  zh: "④g軟音/dʒ/", emoji: "🏔️", search: "huge mountain" },
          { word: "love",     highlight: "ve",  zh: "②不以v結尾", emoji: "❤️", search: "love" },
          { word: "puzzle",   highlight: "le",  zh: "⑤補足le音節", emoji: "🧩", search: "puzzle" },
          { word: "police",   highlight: "ce",  zh: "③c軟音/s/", emoji: "👮", search: "police" }
        ],
        quiz: [
          { word: "magic", speak: "magic", displayWord: "magic", answer: "多音節字尾用c",
            choices: ["多音節字尾用c","短母音後用ck","長母音後用ke","一律用k"],
            hint: "🪄 magic，多音節字尾用單獨的 c！", emoji: "🪄", search: "magic" },
          { word: "face", speak: "face", displayWord: "face", answer: "③c遇e唸/s/",
            choices: ["①讓a長音","②不讓字以v結尾","③c遇e唸/s/","④g遇e唸/dʒ/"],
            hint: "😊 face，這個 e 讓 c 唸軟音 /s/！", emoji: "😊", search: "face" },
          { word: "give", speak: "give", displayWord: "give", answer: "②不讓字以v結尾",
            choices: ["①讓i長音","②不讓字以v結尾","③c遇e唸/s/","⑤補le音節"],
            hint: "🎁 give，這個 e 讓字不以 v 結尾！", emoji: "🎁", search: "give" },
          { word: "puzzle", speak: "puzzle", displayWord: "puz-zle", answer: "⑤補le音節",
            choices: ["①讓u長音","②不讓字以v結尾","③c遇e唸/s/","⑤補le音節"],
            hint: "🧩 puzzle，這個 e 讓 le 成為一個音節！", emoji: "🧩", search: "puzzle" }
        ]
      }
    ],
    story: {
      title: "🐬 The Dolphin's Photo",
      pages: [
        { en: "A dolphin wanted to take a photo with an elephant.", zh: "一隻海豚想和一隻大象合照。", highlights: ["dolphin","wanted","photo","elephant"] },
        { en: "The elephant jumped and played — it was pure magic!", zh: "大象跳著玩耍——真是純粹的魔法！", highlights: ["elephant","jumped","played","magic"] },
        { en: "They called a chef and walked to a huge table.", zh: "他們叫來一位廚師，走向一張巨大的桌子。", highlights: ["called","chef","walked","huge","table"] },
        { en: "The topic of the day: who laughed the most?", zh: "當天的話題：誰笑得最多？", highlights: ["topic","laughed"] }
      ]
    }
  },

  // ─────────────────────────────────────────
  //  LESSON 23
  // ─────────────────────────────────────────
  {
    id: 23,
    title: "gu · cei · i 的四個音 · 總複習",
    emoji: "🎯",
    color: 0,
    topics: [
      {
        name: "gu 音組 + cei 拼法",
        rules: [
          "<b>gu</b>：在 e 或 i 前面，g + u 讓 g 維持硬音 /g/，u 不發音",
          "如果沒有 u，g 後面接 e/i 就會變軟音 /dʒ/（gem, giraffe）",
          "例：guess、guide、guitar、guard、guilty、guest",
          "<b>cei</b>：c + e + i 組合，唸 /siː/，常見規則：",
          "i before e except after c（ei 通常寫成 ie，但 c 後面例外寫成 ei）",
          "例：receive、ceiling、deceive、perceive、conceit"
        ],
        words: [
          { word: "guess",    highlight: "gu", zh: "猜測（gu讓g硬音）", emoji: "🤔", search: "guess" },
          { word: "guide",    highlight: "gu", zh: "導覽/指引（gu讓g硬音）", emoji: "🗺️", search: "guide map" },
          { word: "guitar",   highlight: "gu", zh: "吉他（gu讓g硬音）", emoji: "🎸", search: "guitar" },
          { word: "guard",    highlight: "gu", zh: "守衛（gu讓g硬音）", emoji: "💂", search: "guard" },
          { word: "guilty",   highlight: "gu", zh: "有罪的（gu讓g硬音）", emoji: "⚖️", search: "guilty" },
          { word: "guest",    highlight: "gu", zh: "客人（gu讓g硬音）", emoji: "🏠", search: "guest" },
          { word: "vague",    highlight: "gu", zh: "模糊的（gu讓g硬音）", emoji: "🌫️", search: "vague fog" },
          { word: "receive",  highlight: "cei", zh: "收到（cei=/siː/）", emoji: "📬", search: "receive mail" },
          { word: "ceiling",  highlight: "cei", zh: "天花板（cei=/siː/）", emoji: "🏠", search: "ceiling" },
          { word: "deceive",  highlight: "cei", zh: "欺騙（cei=/siː/）", emoji: "🎭", search: "deceive" },
          { word: "perceive", highlight: "cei", zh: "察覺（cei=/siː/）", emoji: "👁️", search: "perceive" },
          { word: "field",    highlight: "ie",  zh: "田野（ie=/iː/，c後面才用ei）", emoji: "🌾", search: "field" },
          { word: "believe",  highlight: "ie",  zh: "相信（ie=/iː/）", emoji: "💫", search: "believe" },
          { word: "piece",    highlight: "ie",  zh: "一片（ie=/iː/）", emoji: "🍕", search: "piece pizza" },
          { word: "chief",    highlight: "ie",  zh: "首領（ie=/iː/）", emoji: "👑", search: "chief leader" }
        ],
        quiz: [
          { word: "guitar", speak: "guitar", displayWord: "guitar", answer: "g硬音/g/（gu保護）",
            choices: ["g軟音/dʒ/","g硬音/g/（gu保護）","g不發音","g=/k/"],
            hint: "🎸 guitar，gu 讓 g 維持硬音 /g/！", emoji: "🎸", search: "guitar" },
          { word: "guess", speak: "guess", displayWord: "guess", answer: "g硬音/g/（gu保護）",
            choices: ["g軟音/dʒ/","g硬音/g/（gu保護）","g不發音","g=/k/"],
            hint: "🤔 guess，gu 讓 g 維持硬音 /g/！", emoji: "🤔", search: "guess" },
          { word: "ceiling", speak: "ceiling", displayWord: "ceiling", answer: "cei（c後面用ei）",
            choices: ["cieling（ie）","ceiling（ei）→ cei（c後面用ei）","ceeling","seling"],
            hint: "🏠 ceiling，c 後面用 ei 不用 ie！", emoji: "🏠", search: "ceiling" },
          { word: "receive", speak: "receive", displayWord: "receive", answer: "cei（c後面用ei）",
            choices: ["recieve（ie）","receive（ei）→ cei（c後面用ei）","receve","receeve"],
            hint: "📬 receive，c 後面用 ei！", emoji: "📬", search: "receive mail" }
        ]
      },
      {
        name: "i 的四個音 · 總複習",
        rules: [
          "i 有<b>四個</b>發音：",
          "① <b>短音 /ɪ/</b>（閉音節）：sit、big、fish、him",
          "② <b>長音 /aɪ/</b>（magic e 或 igh）：bike、kite、night、bright",
          "③ <b>字尾 y → /aɪ/</b>（單音節）：fly、dry、sky、try",
          "④ <b>字尾 y → /iː/</b>（多音節）：happy、baby、funny、candy",
          "口訣：i 是個大明星，有四種不同演出！"
        ],
        words: [
          { word: "sit",    highlight: "i",  zh: "坐（i短音/ɪ/）①", emoji: "🪑", search: "sit chair" },
          { word: "big",    highlight: "i",  zh: "大的（i短音/ɪ/）①", emoji: "🏔️", search: "big mountain" },
          { word: "bike",   highlight: "i_e",zh: "腳踏車（i長音/aɪ/）②", emoji: "🚲", search: "bike" },
          { word: "night",  highlight: "igh",zh: "夜晚（igh=/aɪ/）②", emoji: "🌙", search: "night" },
          { word: "fly",    highlight: "y",  zh: "飛（單音節y=/aɪ/）③", emoji: "🦅", search: "fly eagle" },
          { word: "sky",    highlight: "y",  zh: "天空（單音節y=/aɪ/）③", emoji: "🌤️", search: "sky" },
          { word: "happy",  highlight: "y",  zh: "快樂（多音節y=/iː/）④", emoji: "😊", search: "happy" },
          { word: "baby",   highlight: "y",  zh: "嬰兒（多音節y=/iː/）④", emoji: "👶", search: "baby" },
          { word: "kite",   highlight: "i_e",zh: "風箏（i長音/aɪ/）②", emoji: "🪁", search: "kite" },
          { word: "candy",  highlight: "y",  zh: "糖果（多音節y=/iː/）④", emoji: "🍬", search: "candy" },
          { word: "bright", highlight: "igh",zh: "明亮（igh=/aɪ/）②", emoji: "☀️", search: "bright" },
          { word: "dry",    highlight: "y",  zh: "乾（單音節y=/aɪ/）③", emoji: "🏜️", search: "dry desert" },
          { word: "funny",  highlight: "y",  zh: "好笑（多音節y=/iː/）④", emoji: "😄", search: "funny" },
          { word: "fish",   highlight: "i",  zh: "魚（i短音/ɪ/）①", emoji: "🐟", search: "fish" },
          { word: "tiny",   highlight: "y",  zh: "微小的（多音節y=/iː/）④", emoji: "🔬", search: "tiny small" }
        ],
        quiz: [
          { word: "sit", speak: "sit", displayWord: "sit", answer: "①短音/ɪ/",
            choices: ["①短音/ɪ/","②長音/aɪ/","③單音節y","④多音節y"],
            hint: "🪑 sit，閉音節，i 唸短音 /ɪ/！", emoji: "🪑", search: "sit chair" },
          { word: "bike", speak: "bike", displayWord: "bike", answer: "②長音/aɪ/",
            choices: ["①短音/ɪ/","②長音/aɪ/","③單音節y","④多音節y"],
            hint: "🚲 bike，magic e，i 唸長音 /aɪ/！", emoji: "🚲", search: "bike" },
          { word: "fly", speak: "fly", displayWord: "fly", answer: "③單音節y=/aɪ/",
            choices: ["①短音/ɪ/","②長音/aɪ/","③單音節y=/aɪ/","④多音節y=/iː/"],
            hint: "🦅 fly，單音節字尾 y 唸 /aɪ/！", emoji: "🦅", search: "fly eagle" },
          { word: "happy", speak: "happy", displayWord: "happy", answer: "④多音節y=/iː/",
            choices: ["①短音/ɪ/","②長音/aɪ/","③單音節y=/aɪ/","④多音節y=/iː/"],
            hint: "😊 happy，多音節字尾 y 唸 /iː/！", emoji: "😊", search: "happy" }
        ]
      }
    ],
    story: {
      title: "🎸 The Guilty Guitar Player",
      pages: [
        { en: "A funny baby tried to play the guitar in the bright night.", zh: "一個好笑的嬰兒在明亮的夜晚試著彈吉他。", highlights: ["funny","baby","guitar","bright","night"] },
        { en: "The guard at the ceiling had a guilty look.", zh: "天花板上的守衛看起來很心虛。", highlights: ["guard","ceiling","guilty"] },
        { en: "He had to receive a guide to believe in himself.", zh: "他需要接受指引才能相信自己。", highlights: ["receive","guide","believe"] },
        { en: "The baby was happy — she could fly up to the sky!", zh: "嬰兒很開心——她可以飛上天空！", highlights: ["baby","happy","fly","sky"] }
      ]
    }
  },

  // ─────────────────────────────────────────
  //  LESSON 24
  // ─────────────────────────────────────────
  {
    id: 24,
    title: "ts/ds · r的變音 · X兩個音 · 規則總複習",
    emoji: "🏆",
    color: 1,
    topics: [
      {
        name: "ts/ds · r的變音 · X的兩個音",
        rules: [
          "<b>ts 和 ds</b>：複數或第三人稱加 s，s 前面是 t 或 d 時，連讀成 /ts/ 或 /dz/",
          "例：cats=/kæts/、beds=/bɛdz/、meets、roads、birds",
          "<b>r 的變音</b>：r 後面接母音時（linking r），r 會影響前面的音",
          "例：car + engine → /kɑːr ɛndʒɪn/，r 連接下一個詞的母音",
          "<b>X 的兩個音</b>：",
          "① /ks/（最常見）：box、fox、mix、fix、taxi、six",
          "② /gz/（x 在重音母音後）：exam、exact、example、exist"
        ],
        words: [
          { word: "cats",    highlight: "ts",  zh: "貓們（ts=/ts/）", emoji: "🐱", search: "cats" },
          { word: "beds",    highlight: "ds",  zh: "床們（ds=/dz/）", emoji: "🛏️", search: "beds" },
          { word: "birds",   highlight: "ds",  zh: "鳥們（ds=/dz/）", emoji: "🐦", search: "birds" },
          { word: "roads",   highlight: "ds",  zh: "道路們（ds=/dz/）", emoji: "🛤️", search: "roads" },
          { word: "meets",   highlight: "ts",  zh: "見面（ts=/ts/）", emoji: "🤝", search: "meets" },
          { word: "box",     highlight: "x",   zh: "箱子（x=/ks/）①", emoji: "📦", search: "box" },
          { word: "fox",     highlight: "x",   zh: "狐狸（x=/ks/）①", emoji: "🦊", search: "fox" },
          { word: "mix",     highlight: "x",   zh: "混合（x=/ks/）①", emoji: "🫙", search: "mix" },
          { word: "fix",     highlight: "x",   zh: "修理（x=/ks/）①", emoji: "🔧", search: "fix repair" },
          { word: "taxi",    highlight: "x",   zh: "計程車（x=/ks/）①", emoji: "🚕", search: "taxi" },
          { word: "six",     highlight: "x",   zh: "六（x=/ks/）①", emoji: "6️⃣", search: "number six" },
          { word: "exam",    highlight: "x",   zh: "考試（x=/gz/）②", emoji: "📝", search: "exam test" },
          { word: "exact",   highlight: "x",   zh: "精確的（x=/gz/）②", emoji: "✅", search: "exact precise" },
          { word: "example", highlight: "x",   zh: "例子（x=/gz/）②", emoji: "📖", search: "example" },
          { word: "exist",   highlight: "x",   zh: "存在（x=/gz/）②", emoji: "🌟", search: "exist" }
        ],
        quiz: [
          { word: "box", speak: "box", displayWord: "box", answer: "/ks/①最常見",
            choices: ["/ks/①最常見","/gz/②重音母音後","/z/","/s/"],
            hint: "📦 box，x 唸 /ks/，最常見！", emoji: "📦", search: "box" },
          { word: "exam", speak: "exam", displayWord: "exam", answer: "/gz/②重音母音後",
            choices: ["/ks/①最常見","/gz/②重音母音後","/z/","/s/"],
            hint: "📝 exam，x 在重音母音後唸 /gz/！", emoji: "📝", search: "exam test" },
          { word: "cats", speak: "cats", displayWord: "cats", answer: "/ts/",
            choices: ["/ts/","/dz/","/s/","/z/"],
            hint: "🐱 cats，t+s 連讀成 /ts/！", emoji: "🐱", search: "cats" },
          { word: "beds", speak: "beds", displayWord: "beds", answer: "/dz/",
            choices: ["/ts/","/dz/","/s/","/z/"],
            hint: "🛏️ beds，d+s 連讀成 /dz/！", emoji: "🛏️", search: "beds" }
        ]
      },
      {
        name: "74音組規則總複習 🏆",
        rules: [
          "🎉 恭喜！你已經學完所有 74 個音組！以下是完整規則地圖：",
          "【短母音】a/e/i/o/u 在閉音節 → /æ/、/ɛ/、/ɪ/、/ɑ/、/ʌ/",
          "【長母音】magic e / 母音二重組（ai/ay/ee/ea/oa/ow...）/ 字尾開音節",
          "【R-controlled】ar=/ɑːr/、or=/ɔːr/、ir=er=ur=/ɜːr/、air=/ɛər/、ear=/ɪər/",
          "【特殊音組】oi/oy=/ɔɪ/、ou/ow=/aʊ/、OO=/uː/或/ʊ/、au/aw=/ɔː/",
          "【不發音】kn=n、wr=r、gn=n、gh（多數不發音）、silent e",
          "【拼音組合】bl/br/cl/cr/dr/fl/fr/gl/gr/pl/pr/sl/sm/sn/sp/st/sw/tr/tw"
        ],
        words: [
          { word: "cat",    highlight: "a",   zh: "貓（短母音a）", emoji: "🐱", search: "cat" },
          { word: "cake",   highlight: "a_e", zh: "蛋糕（magic e長a）", emoji: "🎂", search: "cake" },
          { word: "rain",   highlight: "ai",  zh: "雨（ai長a）", emoji: "🌧️", search: "rain" },
          { word: "car",    highlight: "ar",  zh: "車（ar=R-controlled）", emoji: "🚗", search: "car" },
          { word: "book",   highlight: "oo",  zh: "書（短OO）", emoji: "📚", search: "book" },
          { word: "moon",   highlight: "oo",  zh: "月亮（長OO）", emoji: "🌙", search: "moon" },
          { word: "boy",    highlight: "oy",  zh: "男孩（oy=/ɔɪ/）", emoji: "👦", search: "boy" },
          { word: "cloud",  highlight: "ou",  zh: "雲（ou=/aʊ/）", emoji: "☁️", search: "cloud" },
          { word: "saw",    highlight: "aw",  zh: "看見了（aw=/ɔː/）", emoji: "👀", search: "saw" },
          { word: "bird",   highlight: "ir",  zh: "鳥（ir=/ɜːr/）", emoji: "🐦", search: "bird" },
          { word: "night",  highlight: "igh", zh: "夜晚（igh=/aɪ/）", emoji: "🌙", search: "night" },
          { word: "phone",  highlight: "ph",  zh: "電話（ph=/f/）", emoji: "📱", search: "phone" },
          { word: "write",  highlight: "wr",  zh: "寫（wr=r）", emoji: "✍️", search: "write" },
          { word: "know",   highlight: "kn",  zh: "知道（kn=n）", emoji: "💡", search: "know" },
          { word: "guitar", highlight: "gu",  zh: "吉他（gu讓g硬音）", emoji: "🎸", search: "guitar" }
        ],
        quiz: [
          { word: "rain", speak: "rain", displayWord: "rain", answer: "ai（字中長a）",
            choices: ["a_e（magic e）","ai（字中長a）","ay（字尾長a）","ey（字尾長a）"],
            hint: "🌧️ rain，字中間長a用 ai！", emoji: "🌧️", search: "rain" },
          { word: "write", speak: "write", displayWord: "write", answer: "wr → 只唸/r/",
            choices: ["wr → 唸/wr/","wr → 只唸/r/","wr → 只唸/w/","wr → 唸/v/"],
            hint: "✍️ write，wr 中 w 不發音！", emoji: "✍️", search: "write" },
          { word: "phone", speak: "phone", displayWord: "phone", answer: "ph=/f/",
            choices: ["ph=/p/","ph=/f/","ph=/ph/","ph=/h/"],
            hint: "📱 phone，ph 唸 /f/！", emoji: "📱", search: "phone" },
          { word: "guitar", speak: "guitar", displayWord: "guitar", answer: "gu讓g維持硬音",
            choices: ["gu讓g唸/dʒ/","gu讓g維持硬音","gu不影響g","gu讓u不發音"],
            hint: "🎸 guitar，gu 讓 g 維持硬音 /g/！", emoji: "🎸", search: "guitar" }
        ]
      }
    ],
    story: {
      title: "🏆 The Grand Phonics Adventure",
      pages: [
        { en: "Six cats, three birds, and a fox sat on the beds.", zh: "六隻貓、三隻鳥和一隻狐狸坐在床上。", highlights: ["Six","cats","birds","fox","beds"] },
        { en: "A knight with a guitar began to play in the bright night.", zh: "一位騎士帶著吉他在明亮的夜晚開始彈奏。", highlights: ["knight","guitar","bright","night"] },
        { en: "The boy on the phone said: 'What an exact example!'", zh: "電話裡的男孩說：「多麼精確的例子！」", highlights: ["boy","phone","exact","example"] },
        { en: "You know the rules now — go write your own adventure!", zh: "你現在知道所有規則了——去寫你自己的冒險吧！", highlights: ["know","write","adventure"] }
      ]
    }
  }

]; // end LESSONS
