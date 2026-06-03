// ═══════════════════════════════════════════
//  LESSONS 6–12 DATA
//  對應 Ivy's English Logic Insights
//  L6: Silent e 判斷 / ee / ea
//  L7: i 和 y 四音 / igh / o_e
//  L8: 複習長母音 / oa / ow / oe
//  L9: 長母音 U song / u_e / ui / ew
//  L10: 複習長母音 / wr / ie / bu / ea short e
//  L11: Silent e 新工作 / OO四個音
//  L12: oi/oy / Lazy O / 懶惰音規則
// ═══════════════════════════════════════════

const LESSONS = [

  // ─────────────────────────────────────────
  //  LESSON 6
  // ─────────────────────────────────────────
  {
    id: 6,
    title: "Silent e · ee · ea",
    emoji: "🔇",
    color: 0,
    topics: [
      {
        name: "Silent e 的任務",
        rules: [
          "Silent e（魔法 e）：字尾的 e 不發音，但它讓前面的母音唸<b>長音</b>（自己的名字）",
          "公式：子音 + 短母音 + 子音 → 加上 e → 子音 + 長母音 + 子音 + e",
          "例：cap → c<u>a</u>pe（斗篷）、kit → k<u>i</u>te（風箏）、hop → h<u>o</u>pe（希望）",
          "判斷方法：字尾有 e，往前數兩個位置，那個母音唸長音！",
          "E song：e 在字尾時有幾個任務？① 讓前面母音唸長音 ② 讓前面 c/g 唸軟音（之後學）③ 有時候純裝飾（如 have, give）"
        ],
        words: [
          { word: "cape",  highlight: "a_e", zh: "斗篷（a長音）", emoji: "🦸", search: "cape superhero" },
          { word: "kite",  highlight: "i_e", zh: "風箏（i長音）", emoji: "🪁", search: "kite flying" },
          { word: "hope",  highlight: "o_e", zh: "希望（o長音）", emoji: "🌟", search: "hope star" },
          { word: "cute",  highlight: "u_e", zh: "可愛（u長音）", emoji: "🐣", search: "cute chick" },
          { word: "bike",  highlight: "i_e", zh: "腳踏車（i長音）", emoji: "🚲", search: "bicycle bike" },
          { word: "cake",  highlight: "a_e", zh: "蛋糕（a長音）", emoji: "🎂", search: "cake birthday" },
          { word: "bone",  highlight: "o_e", zh: "骨頭（o長音）", emoji: "🦴", search: "bone dog" },
          { word: "tune",  highlight: "u_e", zh: "曲調（u長音）", emoji: "🎵", search: "music tune" },
          { word: "pine",  highlight: "i_e", zh: "松樹（i長音）", emoji: "🌲", search: "pine tree" },
          { word: "wave",  highlight: "a_e", zh: "海浪/揮手（a長音）", emoji: "🌊", search: "ocean wave" },
          { word: "stone", highlight: "o_e", zh: "石頭（o長音）", emoji: "🪨", search: "stone rock" },
          { word: "mule",  highlight: "u_e", zh: "騾子（u長音）", emoji: "🐴", search: "mule donkey" },
          { word: "bride", highlight: "i_e", zh: "新娘（i長音）", emoji: "👰", search: "bride wedding" },
          { word: "grape", highlight: "a_e", zh: "葡萄（a長音）", emoji: "🍇", search: "grapes" },
          { word: "smoke", highlight: "o_e", zh: "煙霧（o長音）", emoji: "💨", search: "smoke fire" }
        ],
        quiz: [
          { word: "kite", speak: "kite", displayWord: "kite", answer: "長音 /aɪ/",
            choices: ["短音 /ɪ/","長音 /aɪ/","不發音","懶音 /ə/"],
            hint: "🪁 kite，字尾有 e，i 唸長音！", emoji: "🪁", search: "kite flying" },
          { word: "cake", speak: "cake", displayWord: "cake", answer: "長音 /eɪ/",
            choices: ["短音 /æ/","長音 /eɪ/","不發音","懶音 /ə/"],
            hint: "🎂 cake，字尾有 e，a 唸長音！", emoji: "🎂", search: "cake birthday" },
          { word: "hope", speak: "hope", displayWord: "hope", answer: "長音 /oʊ/",
            choices: ["短音 /ɑ/","長音 /oʊ/","不發音","懶音 /ə/"],
            hint: "🌟 hope，字尾有 e，o 唸長音！", emoji: "🌟", search: "hope star" },
          { word: "cute", speak: "cute", displayWord: "cute", answer: "長音 /juː/",
            choices: ["短音 /ʌ/","長音 /juː/","不發音","懶音 /ə/"],
            hint: "🐣 cute，字尾有 e，u 唸長音！", emoji: "🐣", search: "cute chick" },
          { word: "pine", speak: "pine", displayWord: "pine", answer: "長音 /aɪ/",
            choices: ["短音 /ɪ/","長音 /aɪ/","不發音","懶音 /ə/"],
            hint: "🌲 pine（松樹），字尾有 e，i 唸長音！", emoji: "🌲", search: "pine tree" }
        ]
      },
      {
        name: "ee 和 ea 音組",
        rules: [
          "<b>ee</b>：兩個 e 在一起，唸長音 /iː/（像 E 的名字）",
          "<b>ea</b>：e + a 組合，<b>大多數</b>時候唸長音 /iː/（和 ee 一樣）",
          "記憶口訣：When two vowels go walking, the first one does the talking！（兩個母音一起走，第一個說自己名字）",
          "⚠️ ea 特例：有時唸短音 /ɛ/，例如：bread、head、dead（記憶：這些字多半跟「不好的事」有關！）",
          "區別 ee vs ea：發音一樣，拼法不同，需要記憶哪個字用哪個拼法"
        ],
        words: [
          { word: "tree",  highlight: "ee", zh: "樹（ee=/iː/）", emoji: "🌳", search: "tree" },
          { word: "bee",   highlight: "ee", zh: "蜜蜂（ee=/iː/）", emoji: "🐝", search: "bee" },
          { word: "feet",  highlight: "ee", zh: "腳（ee=/iː/）", emoji: "🦶", search: "feet" },
          { word: "sheep", highlight: "ee", zh: "羊（ee=/iː/）", emoji: "🐑", search: "sheep" },
          { word: "green", highlight: "ee", zh: "綠色（ee=/iː/）", emoji: "💚", search: "green color" },
          { word: "sleep", highlight: "ee", zh: "睡覺（ee=/iː/）", emoji: "😴", search: "sleep" },
          { word: "sweet", highlight: "ee", zh: "甜的（ee=/iː/）", emoji: "🍬", search: "sweet candy" },
          { word: "eat",   highlight: "ea", zh: "吃（ea=/iː/）", emoji: "🍽️", search: "eating" },
          { word: "sea",   highlight: "ea", zh: "海洋（ea=/iː/）", emoji: "🌊", search: "sea ocean" },
          { word: "leaf",  highlight: "ea", zh: "葉子（ea=/iː/）", emoji: "🍃", search: "leaf" },
          { word: "beach", highlight: "ea", zh: "海灘（ea=/iː/）", emoji: "🏖️", search: "beach" },
          { word: "dream", highlight: "ea", zh: "夢（ea=/iː/）", emoji: "💭", search: "dream" },
          { word: "bread", highlight: "ea", zh: "⚠️麵包（ea=/ɛ/ 特例）", emoji: "🍞", search: "bread" },
          { word: "head",  highlight: "ea", zh: "⚠️頭（ea=/ɛ/ 特例）", emoji: "🗣️", search: "head person" },
          { word: "dead",  highlight: "ea", zh: "⚠️死的（ea=/ɛ/ 特例）", emoji: "💀", search: "skull dead" }
        ],
        quiz: [
          { word: "tree", speak: "tree", displayWord: "tree", answer: "/iː/",
            choices: ["/ɛ/","/iː/","/eɪ/","/æ/"],
            hint: "🌳 tree，ee 唸長音 /iː/！", emoji: "🌳", search: "tree" },
          { word: "eat", speak: "eat", displayWord: "eat", answer: "/iː/",
            choices: ["/ɛ/","/iː/","/eɪ/","/æ/"],
            hint: "🍽️ eat，ea 大多唸長音 /iː/！", emoji: "🍽️", search: "eating" },
          { word: "bread", speak: "bread", displayWord: "bread", answer: "/ɛ/（特例）",
            choices: ["/iː/","/ɛ/（特例）","/eɪ/","/æ/"],
            hint: "🍞 bread（麵包），ea 特例，唸短音 /ɛ/！", emoji: "🍞", search: "bread" },
          { word: "sheep", speak: "sheep", displayWord: "sheep", answer: "/iː/",
            choices: ["/ɛ/","/iː/","/eɪ/","/ʃ/"],
            hint: "🐑 sheep，ee 唸長音 /iː/！", emoji: "🐑", search: "sheep" }
        ]
      },
      {
        name: "分辨 ee 和 ea",
        rules: [
          "ee 和 ea 發音相同（都是 /iː/），但用法不同，需靠記憶",
          "常用 <b>ee</b> 的字：see、tree、bee、feet、keep、need、feel、week",
          "常用 <b>ea</b> 的字：eat、sea、leaf、read、meat、heat、bean、team",
          "小技巧：ea 的字很多跟「自然、食物」有關（sea、leaf、peach、bean）",
          "練習：不確定時先寫 ee，因為 ee 更常見；若不對再換 ea"
        ],
        words: [
          { word: "see",   highlight: "ee", zh: "看見（ee）", emoji: "👀", search: "eyes see" },
          { word: "meat",  highlight: "ea", zh: "肉（ea）", emoji: "🥩", search: "meat" },
          { word: "keep",  highlight: "ee", zh: "保持（ee）", emoji: "🔐", search: "keep lock" },
          { word: "bean",  highlight: "ea", zh: "豆子（ea）", emoji: "🫘", search: "beans" },
          { word: "week",  highlight: "ee", zh: "一週（ee）", emoji: "📅", search: "week calendar" },
          { word: "peach", highlight: "ea", zh: "桃子（ea）", emoji: "🍑", search: "peach fruit" },
          { word: "feel",  highlight: "ee", zh: "感覺（ee）", emoji: "❤️", search: "feel heart" },
          { word: "teach", highlight: "ea", zh: "教（ea）", emoji: "👩‍🏫", search: "teacher" },
          { word: "seed",  highlight: "ee", zh: "種子（ee）", emoji: "🌱", search: "seed plant" },
          { word: "steam", highlight: "ea", zh: "蒸氣（ea）", emoji: "♨️", search: "steam hot" },
          { word: "steel", highlight: "ee", zh: "鋼鐵（ee）", emoji: "⚙️", search: "steel metal" },
          { word: "sneak", highlight: "ea", zh: "偷偷摸摸（ea）", emoji: "🤫", search: "sneaking" },
          { word: "cheese",highlight: "ee", zh: "起司（ee）", emoji: "🧀", search: "cheese" },
          { word: "stream",highlight: "ea", zh: "小溪（ea）", emoji: "🏞️", search: "stream river" },
          { word: "speed", highlight: "ee", zh: "速度（ee）", emoji: "⚡", search: "speed fast" }
        ],
        quiz: [
          { word: "meat", speak: "meat", displayWord: "m _ _ t", answer: "ea",
            choices: ["ee","ea","ie","ei"],
            hint: "🥩 meat（肉），跟食物有關用 ea！", emoji: "🥩", search: "meat" },
          { word: "week", speak: "week", displayWord: "w _ _ k", answer: "ee",
            choices: ["ee","ea","ie","ei"],
            hint: "📅 week（一週），記憶：week 用 ee！", emoji: "📅", search: "week calendar" },
          { word: "bean", speak: "bean", displayWord: "b _ _ n", answer: "ea",
            choices: ["ee","ea","ie","ei"],
            hint: "🫘 bean（豆子），食物用 ea！", emoji: "🫘", search: "beans" },
          { word: "seed", speak: "seed", displayWord: "s _ _ d", answer: "ee",
            choices: ["ee","ea","ie","ei"],
            hint: "🌱 seed（種子），記憶：seed 用 ee！", emoji: "🌱", search: "seed plant" }
        ]
      }
    ],
    story: {
      title: "🐝 The Bee and the Green Tree",
      pages: [
        { en: "A bee sat in a big green tree.", zh: "一隻蜜蜂坐在一棵大綠樹上。", highlights: ["bee","green","tree"] },
        { en: "The bee could see the sea.", zh: "蜜蜂可以看見大海。", highlights: ["bee","see","sea"] },
        { en: "It had a dream to eat a sweet peach.", zh: "牠夢想著吃一顆甜甜的桃子。", highlights: ["dream","eat","sweet","peach"] },
        { en: "The bee flew with speed to find the treat!", zh: "蜜蜂快速飛去找這美食！", highlights: ["bee","speed"] }
      ]
    }
  },

  // ─────────────────────────────────────────
  //  LESSON 7
  // ─────────────────────────────────────────
  {
    id: 7,
    title: "i 和 y 的四個音 · igh · o_e",
    emoji: "🔦",
    color: 1,
    topics: [
      {
        name: "i 和 y 的四個發音",
        rules: [
          "i 有四種發音：① 短音 /ɪ/ (sit) ② 長音 /aɪ/ (bike) ③ 字尾 y=/aɪ/ (fly) ④ 字尾 y=/iː/ (baby)",
          "y 在字<b>尾</b>時：① 單音節字 → 唸長 i /aɪ/（fly, dry, try） ② 多音節字 → 唸長 e /iː/（baby, happy, candy）",
          "英文字最後一個字母不能是 i，所以長 i 在字尾改寫 <b>y</b>！",
          "三個小幫手：<b>igh</b> = /aɪ/（night, light），<b>i_e</b> = /aɪ/（bike），<b>y</b> = /aɪ/（fly）",
          "o_e 練習：o + 子音 + e → o 唸長音 /oʊ/（home, note, rope）"
        ],
        words: [
          { word: "fly",   highlight: "y",   zh: "飛（y=/aɪ/ 單音節）", emoji: "🦅", search: "eagle fly" },
          { word: "dry",   highlight: "y",   zh: "乾（y=/aɪ/ 單音節）", emoji: "🏜️", search: "desert dry" },
          { word: "sky",   highlight: "y",   zh: "天空（y=/aɪ/ 單音節）", emoji: "🌤️", search: "sky" },
          { word: "baby",  highlight: "y",   zh: "嬰兒（y=/iː/ 多音節）", emoji: "👶", search: "baby" },
          { word: "happy", highlight: "y",   zh: "快樂（y=/iː/ 多音節）", emoji: "😊", search: "happy" },
          { word: "candy", highlight: "y",   zh: "糖果（y=/iː/ 多音節）", emoji: "🍬", search: "candy" },
          { word: "funny", highlight: "y",   zh: "好笑（y=/iː/ 多音節）", emoji: "😄", search: "funny laugh" },
          { word: "night", highlight: "igh", zh: "夜晚（igh=/aɪ/）", emoji: "🌙", search: "night moon" },
          { word: "light", highlight: "igh", zh: "光（igh=/aɪ/）", emoji: "💡", search: "light bulb" },
          { word: "right", highlight: "igh", zh: "右/正確（igh=/aɪ/）", emoji: "✅", search: "right correct" },
          { word: "fight", highlight: "igh", zh: "打架（igh=/aɪ/）", emoji: "🥊", search: "fight boxing" },
          { word: "sight", highlight: "igh", zh: "視力/景色（igh=/aɪ/）", emoji: "👁️", search: "sight eye" },
          { word: "bright",highlight: "igh", zh: "明亮（igh=/aɪ/）", emoji: "☀️", search: "bright sun" },
          { word: "fright",highlight: "igh", zh: "驚嚇（igh=/aɪ/）", emoji: "😱", search: "fright scared" },
          { word: "mighty",highlight: "igh", zh: "強大的（igh=/aɪ/）", emoji: "💪", search: "mighty strong" }
        ],
        quiz: [
          { word: "fly", speak: "fly", displayWord: "fly", answer: "/aɪ/（長i）",
            choices: ["/ɪ/（短i）","/aɪ/（長i）","/iː/（長e）","/ə/（懶音）"],
            hint: "🦅 fly，單音節字尾 y 唸長 i /aɪ/！", emoji: "🦅", search: "eagle fly" },
          { word: "baby", speak: "baby", displayWord: "baby", answer: "/iː/（長e）",
            choices: ["/ɪ/（短i）","/aɪ/（長i）","/iː/（長e）","/ə/（懶音）"],
            hint: "👶 baby，多音節字尾 y 唸長 e /iː/！", emoji: "👶", search: "baby" },
          { word: "night", speak: "night", displayWord: "night", answer: "/aɪ/",
            choices: ["/ɪ/","/aɪ/","/iː/","/nɪ/"],
            hint: "🌙 night，igh = /aɪ/！", emoji: "🌙", search: "night moon" },
          { word: "happy", speak: "happy", displayWord: "happy", answer: "/iː/（長e）",
            choices: ["/ɪ/（短i）","/aɪ/（長i）","/iː/（長e）","/æ/（短a）"],
            hint: "😊 happy，多音節字尾 y 唸長 e /iː/！", emoji: "😊", search: "happy" }
        ]
      },
      {
        name: "o_e 長音 o 練習",
        rules: [
          "o + 子音 + e（magic e）→ o 唸長音 /oʊ/",
          "例：h<u>o</u>me、n<u>o</u>te、r<u>o</u>pe、sm<u>o</u>ke",
          "短母音 o（閉音節）vs 長母音 o（o_e）對比：hop vs hope、not vs note、rod vs rode",
          "o_e 的規則也適用多音節字：g<u>lo</u>be、str<u>o</u>ke"
        ],
        words: [
          { word: "home",  highlight: "o_e", zh: "家（o長音）", emoji: "🏠", search: "home house" },
          { word: "note",  highlight: "o_e", zh: "筆記（o長音）", emoji: "📝", search: "note paper" },
          { word: "rope",  highlight: "o_e", zh: "繩子（o長音）", emoji: "🪢", search: "rope" },
          { word: "bone",  highlight: "o_e", zh: "骨頭（o長音）", emoji: "🦴", search: "bone" },
          { word: "hole",  highlight: "o_e", zh: "洞（o長音）", emoji: "🕳️", search: "hole ground" },
          { word: "rose",  highlight: "o_e", zh: "玫瑰（o長音）", emoji: "🌹", search: "rose flower" },
          { word: "vote",  highlight: "o_e", zh: "投票（o長音）", emoji: "🗳️", search: "vote ballot" },
          { word: "globe", highlight: "o_e", zh: "地球儀（o長音）", emoji: "🌍", search: "globe earth" },
          { word: "smoke", highlight: "o_e", zh: "煙（o長音）", emoji: "💨", search: "smoke" },
          { word: "store", highlight: "o_e", zh: "商店（o長音）", emoji: "🏪", search: "store shop" },
          { word: "stove", highlight: "o_e", zh: "爐子（o長音）", emoji: "🍳", search: "stove cooking" },
          { word: "phone", highlight: "o_e", zh: "電話（o長音）", emoji: "📱", search: "phone" },
          { word: "quote", highlight: "o_e", zh: "引述（o長音）", emoji: "💬", search: "quote speech" },
          { word: "drove", highlight: "o_e", zh: "開車了（o長音）", emoji: "🚗", search: "driving car" },
          { word: "wrote", highlight: "o_e", zh: "寫了（o長音）", emoji: "✍️", search: "writing" }
        ],
        quiz: [
          { word: "home", speak: "home", displayWord: "home", answer: "長音 /oʊ/",
            choices: ["短音 /ɑ/","長音 /oʊ/","不發音","懶音 /ə/"],
            hint: "🏠 home，o_e → o 唸長音！", emoji: "🏠", search: "home house" },
          { word: "note", speak: "note", displayWord: "note", answer: "長音 /oʊ/",
            choices: ["短音 /ɑ/","長音 /oʊ/","不發音","懶音 /ə/"],
            hint: "📝 note，o_e → o 唸長音！", emoji: "📝", search: "note paper" },
          { word: "hop vs hope", speak: "hope", displayWord: "hop → hope", answer: "加e變長音",
            choices: ["短音不變","加e變長音","e不發音所以一樣","加e變懶音"],
            hint: "hop（短o）加上 e → hope（長o）！", emoji: "🌟", search: "hope" },
          { word: "rose", speak: "rose", displayWord: "rose", answer: "長音 /oʊ/",
            choices: ["短音 /ɑ/","長音 /oʊ/","不發音","懶音 /ə/"],
            hint: "🌹 rose，o_e → o 唸長音！", emoji: "🌹", search: "rose flower" }
        ]
      }
    ],
    story: {
      title: "🌙 A Bright Night",
      pages: [
        { en: "On a bright night, a baby owl sat on a rope.", zh: "在一個明亮的夜晚，一隻小貓頭鷹坐在繩子上。", highlights: ["bright","night","baby","rope"] },
        { en: "The owl could fly high in the sky.", zh: "貓頭鷹可以飛得很高。", highlights: ["fly","sky"] },
        { en: "It saw a light from a home far away.", zh: "牠看見遠處一個家裡的燈光。", highlights: ["light","home"] },
        { en: "The happy owl sang all night long!", zh: "快樂的貓頭鷹整夜唱歌！", highlights: ["happy","night"] }
      ]
    }
  },

  // ─────────────────────────────────────────
  //  LESSON 8
  // ─────────────────────────────────────────
  {
    id: 8,
    title: "複習長母音 · oa · ow · oe",
    emoji: "🎵",
    color: 2,
    topics: [
      {
        name: "複習長母音 + oa 音組",
        rules: [
          "複習：長母音共有五個，唸字母自己的名字：A=/eɪ/、E=/iː/、I=/aɪ/、O=/oʊ/、U=/juː/",
          "<b>oa</b>：o + a 組合，唸長音 /oʊ/（o 說自己名字，a 不發音）",
          "oa 永遠在字的<b>中間</b>，不出現在字尾",
          "例：boat、coat、road、toast、goat",
          "Short o（閉音節）vs Long o（oa/o_e/ow）：cot vs coat、rod vs road"
        ],
        words: [
          { word: "boat",  highlight: "oa", zh: "船（oa=/oʊ/）", emoji: "⛵", search: "boat sailing" },
          { word: "coat",  highlight: "oa", zh: "外套（oa=/oʊ/）", emoji: "🧥", search: "coat jacket" },
          { word: "road",  highlight: "oa", zh: "道路（oa=/oʊ/）", emoji: "🛤️", search: "road" },
          { word: "toast", highlight: "oa", zh: "吐司（oa=/oʊ/）", emoji: "🍞", search: "toast bread" },
          { word: "goat",  highlight: "oa", zh: "山羊（oa=/oʊ/）", emoji: "🐐", search: "goat" },
          { word: "soap",  highlight: "oa", zh: "肥皂（oa=/oʊ/）", emoji: "🧼", search: "soap" },
          { word: "foam",  highlight: "oa", zh: "泡沫（oa=/oʊ/）", emoji: "🫧", search: "foam bubbles" },
          { word: "moan",  highlight: "oa", zh: "呻吟（oa=/oʊ/）", emoji: "😩", search: "moan pain" },
          { word: "cloak", highlight: "oa", zh: "斗篷（oa=/oʊ/）", emoji: "🧥", search: "cloak cape" },
          { word: "croak", highlight: "oa", zh: "呱呱（蛙叫）（oa=/oʊ/）", emoji: "🐸", search: "frog croak" },
          { word: "groan", highlight: "oa", zh: "嘆氣（oa=/oʊ/）", emoji: "😮‍💨", search: "groan sigh" },
          { word: "soak",  highlight: "oa", zh: "浸泡（oa=/oʊ/）", emoji: "🛁", search: "soak bath" },
          { word: "coach", highlight: "oa", zh: "教練（oa=/oʊ/）", emoji: "🏆", search: "coach sports" },
          { word: "loaf",  highlight: "oa", zh: "一條麵包（oa=/oʊ/）", emoji: "🍞", search: "loaf bread" },
          { word: "roast", highlight: "oa", zh: "烤（oa=/oʊ/）", emoji: "🔥", search: "roast fire" }
        ],
        quiz: [
          { word: "boat", speak: "boat", displayWord: "b _ _ t", answer: "oa",
            choices: ["oa","oe","ow","o_e"],
            hint: "⛵ boat（船），在字中間用 oa！", emoji: "⛵", search: "boat sailing" },
          { word: "coat", speak: "coat", displayWord: "c _ _ t", answer: "oa",
            choices: ["oa","oe","ow","o_e"],
            hint: "🧥 coat（外套），在字中間用 oa！", emoji: "🧥", search: "coat jacket" },
          { word: "road", speak: "road", displayWord: "r _ _ d", answer: "oa",
            choices: ["oa","oe","ow","o_e"],
            hint: "🛤️ road（道路），在字中間用 oa！", emoji: "🛤️", search: "road" },
          { word: "soap", speak: "soap", displayWord: "s _ _ p", answer: "oa",
            choices: ["oa","oe","ow","oo"],
            hint: "🧼 soap（肥皂），在字中間用 oa！", emoji: "🧼", search: "soap" }
        ]
      },
      {
        name: "ow 和 oe 音組（長o）",
        rules: [
          "<b>ow</b> 有兩個音：① 唸長音 /oʊ/（通常在字尾或 -ow 後接 n）② 唸 /aʊ/ 如 cow、now（之後 L15 學）",
          "現在先學 ow=/oʊ/：row、low、snow、know、grow、show",
          "<b>oe</b>：o + e 組合，唸長音 /oʊ/，通常在字尾",
          "例：toe、foe、doe、goes",
          "y 的四個音：字尾單音節 y=/aɪ/（fly），字尾多音節 y=/iː/（happy）— 複習"
        ],
        words: [
          { word: "row",   highlight: "ow", zh: "排/划船（ow=/oʊ/）", emoji: "🚣", search: "row boat" },
          { word: "low",   highlight: "ow", zh: "低的（ow=/oʊ/）", emoji: "⬇️", search: "low arrow" },
          { word: "snow",  highlight: "ow", zh: "雪（ow=/oʊ/）", emoji: "❄️", search: "snow" },
          { word: "know",  highlight: "ow", zh: "知道（ow=/oʊ/）", emoji: "💡", search: "know idea" },
          { word: "grow",  highlight: "ow", zh: "生長（ow=/oʊ/）", emoji: "🌱", search: "grow plant" },
          { word: "show",  highlight: "ow", zh: "展示（ow=/oʊ/）", emoji: "🎪", search: "show performance" },
          { word: "blow",  highlight: "ow", zh: "吹（ow=/oʊ/）", emoji: "💨", search: "blow wind" },
          { word: "flow",  highlight: "ow", zh: "流動（ow=/oʊ/）", emoji: "🌊", search: "flow water" },
          { word: "glow",  highlight: "ow", zh: "發光（ow=/oʊ/）", emoji: "✨", search: "glow light" },
          { word: "toe",   highlight: "oe", zh: "腳趾（oe=/oʊ/）", emoji: "🦶", search: "toe foot" },
          { word: "foe",   highlight: "oe", zh: "敵人（oe=/oʊ/）", emoji: "⚔️", search: "enemy foe" },
          { word: "doe",   highlight: "oe", zh: "母鹿（oe=/oʊ/）", emoji: "🦌", search: "deer doe" },
          { word: "goes",  highlight: "oe", zh: "去（oe=/oʊ/）", emoji: "🚶", search: "walk goes" },
          { word: "hoe",   highlight: "oe", zh: "鋤頭（oe=/oʊ/）", emoji: "🌾", search: "hoe garden" },
          { word: "oboe",  highlight: "oe", zh: "雙簧管（oe=/oʊ/）", emoji: "🎷", search: "oboe instrument" }
        ],
        quiz: [
          { word: "snow", speak: "snow", displayWord: "snow", answer: "/oʊ/（長o）",
            choices: ["/aʊ/（cow音）","/oʊ/（長o）","/ɑ/（短o）","/ə/（懶音）"],
            hint: "❄️ snow，ow 在這裡唸長音 /oʊ/！", emoji: "❄️", search: "snow" },
          { word: "toe", speak: "toe", displayWord: "toe", answer: "/oʊ/（長o）",
            choices: ["/ɑ/（短o）","/oʊ/（長o）","/iː/（長e）","/ə/（懶音）"],
            hint: "🦶 toe（腳趾），oe 唸長音 /oʊ/！", emoji: "🦶", search: "toe foot" },
          { word: "grow", speak: "grow", displayWord: "grow", answer: "/oʊ/（長o）",
            choices: ["/aʊ/（cow音）","/oʊ/（長o）","/ɑ/（短o）","/ɔ/"],
            hint: "🌱 grow，ow 在這裡唸長音 /oʊ/！", emoji: "🌱", search: "grow plant" },
          { word: "know", speak: "know", displayWord: "know", answer: "/oʊ/（長o）",
            choices: ["/aʊ/","/oʊ/（長o）","/ɑ/","/nɒ/"],
            hint: "💡 know，ow 唸長音，而且 k 不發音！", emoji: "💡", search: "know idea" }
        ]
      }
    ],
    story: {
      title: "🐐 The Goat on the Road",
      pages: [
        { en: "A goat in a coat stood on a long road.", zh: "一隻穿著外套的山羊站在一條長路上。", highlights: ["goat","coat","road"] },
        { en: "The road was low, and snow began to grow.", zh: "路很低，雪開始越積越多。", highlights: ["road","low","snow","grow"] },
        { en: "The goat let out a groan and sat on a loaf of toast.", zh: "山羊嘆了口氣，坐在一條吐司上。", highlights: ["goat","groan","loaf","toast"] },
        { en: "Then it got up and went with the flow!", zh: "然後牠站起來，隨波逐流！", highlights: ["flow"] }
      ]
    }
  },

  // ─────────────────────────────────────────
  //  LESSON 9
  // ─────────────────────────────────────────
  {
    id: 9,
    title: "長U音 · u_e · ui · ew",
    emoji: "🎶",
    color: 3,
    topics: [
      {
        name: "長U的兩種發音",
        rules: [
          "長母音 U 有<b>兩種</b>讀法：① /juː/（像注音「一ㄨ」）② /uː/（嘴巴圓，像注音「ㄨ」）",
          "① /juː/：cute、use、mule、tune（先有 /j/ 的滑音）",
          "② /uː/：blue、true、fruit、glue（直接圓嘴，沒有滑音）",
          "英文最後一個字母不能是 U，所以長 u 在字尾通常用 <b>ue</b>（blue, true, clue）",
          "規則：兩音節字最後一個字不可以是 U，改寫成 ue"
        ],
        words: [
          { word: "cute",  highlight: "u_e", zh: "可愛（/juː/）", emoji: "🐣", search: "cute animal" },
          { word: "use",   highlight: "u_e", zh: "使用（/juː/）", emoji: "🔧", search: "use tool" },
          { word: "mule",  highlight: "u_e", zh: "騾子（/juː/）", emoji: "🐴", search: "mule donkey" },
          { word: "tune",  highlight: "u_e", zh: "曲調（/juː/）", emoji: "🎵", search: "music tune" },
          { word: "cube",  highlight: "u_e", zh: "正方體（/juː/）", emoji: "🧊", search: "cube ice" },
          { word: "fume",  highlight: "u_e", zh: "煙霧/惱怒（/juː/）", emoji: "💨", search: "fume smoke" },
          { word: "blue",  highlight: "ue",  zh: "藍色（/uː/）", emoji: "💙", search: "blue color" },
          { word: "true",  highlight: "ue",  zh: "真的（/uː/）", emoji: "✅", search: "true correct" },
          { word: "clue",  highlight: "ue",  zh: "線索（/uː/）", emoji: "🔍", search: "clue detective" },
          { word: "glue",  highlight: "ue",  zh: "膠水（/uː/）", emoji: "🔑", search: "glue stick" },
          { word: "flute", highlight: "u_e", zh: "長笛（/uː/）", emoji: "🎷", search: "flute instrument" },
          { word: "prune", highlight: "u_e", zh: "李子乾（/uː/）", emoji: "🍇", search: "prune dried" },
          { word: "brute", highlight: "u_e", zh: "野蠻人（/uː/）", emoji: "👹", search: "brute monster" },
          { word: "dune",  highlight: "u_e", zh: "沙丘（/juː/）", emoji: "🏜️", search: "sand dune" },
          { word: "plume", highlight: "u_e", zh: "羽毛（/uː/）", emoji: "🪶", search: "feather plume" }
        ],
        quiz: [
          { word: "cute", speak: "cute", displayWord: "cute", answer: "/juː/",
            choices: ["/juː/","/uː/","/ʌ/","/ə/"],
            hint: "🐣 cute，u_e → u 唸 /juː/（有滑音）！", emoji: "🐣", search: "cute animal" },
          { word: "blue", speak: "blue", displayWord: "blue", answer: "/uː/",
            choices: ["/juː/","/uː/","/ʌ/","/ə/"],
            hint: "💙 blue，ue → /uː/（圓嘴，沒有滑音）！", emoji: "💙", search: "blue color" },
          { word: "clue", speak: "clue", displayWord: "clue", answer: "/uː/",
            choices: ["/juː/","/uː/","/ʌ/","/kl/"],
            hint: "🔍 clue（線索），ue → /uː/！", emoji: "🔍", search: "clue detective" },
          { word: "tune", speak: "tune", displayWord: "tune", answer: "/juː/",
            choices: ["/juː/","/uː/","/ʌ/","/ə/"],
            hint: "🎵 tune（曲調），u_e → /juː/！", emoji: "🎵", search: "music tune" }
        ]
      },
      {
        name: "ui 和 ew 音組",
        rules: [
          "<b>ui</b>：u + i 組合，唸 /uː/（圓嘴長音），例如：fruit、juice、suit、build（⚠️build特例唸/ɪ/）",
          "<b>ew</b>：e + w 組合，唸 /uː/ 或 /juː/，例如：new、few、dew、blew、drew",
          "ew 唸 /juː/：new、few、dew、knew（有滑音）",
          "ew 唸 /uː/：blew、drew、flew、grew、brew（沒有滑音）",
          "9個字母排序練習：ui 和 ew 雖然長相不同，聲音很接近！"
        ],
        words: [
          { word: "fruit",  highlight: "ui", zh: "水果（ui=/uː/）", emoji: "🍎", search: "fruit" },
          { word: "juice",  highlight: "ui", zh: "果汁（ui=/uː/）", emoji: "🍹", search: "juice drink" },
          { word: "suit",   highlight: "ui", zh: "西裝（ui=/uː/）", emoji: "👔", search: "suit jacket" },
          { word: "bruise", highlight: "ui", zh: "瘀青（ui=/uː/）", emoji: "🤕", search: "bruise injury" },
          { word: "cruise", highlight: "ui", zh: "乘船遊覽（ui=/uː/）", emoji: "🚢", search: "cruise ship" },
          { word: "new",    highlight: "ew", zh: "新的（ew=/juː/）", emoji: "🆕", search: "new" },
          { word: "few",    highlight: "ew", zh: "少數的（ew=/juː/）", emoji: "3️⃣", search: "few number" },
          { word: "dew",    highlight: "ew", zh: "露水（ew=/juː/）", emoji: "💧", search: "dew drops" },
          { word: "blew",   highlight: "ew", zh: "吹了（ew=/uː/）", emoji: "💨", search: "wind blew" },
          { word: "drew",   highlight: "ew", zh: "畫了（ew=/uː/）", emoji: "🎨", search: "drew painting" },
          { word: "flew",   highlight: "ew", zh: "飛了（ew=/uː/）", emoji: "🦅", search: "flew bird" },
          { word: "grew",   highlight: "ew", zh: "長大了（ew=/uː/）", emoji: "🌳", search: "grew tree" },
          { word: "brew",   highlight: "ew", zh: "釀造（ew=/uː/）", emoji: "☕", search: "brew coffee" },
          { word: "chew",   highlight: "ew", zh: "咀嚼（ew=/uː/）", emoji: "🍖", search: "chew food" },
          { word: "stew",   highlight: "ew", zh: "燉菜（ew=/uː/）", emoji: "🍲", search: "stew soup" }
        ],
        quiz: [
          { word: "fruit", speak: "fruit", displayWord: "fruit", answer: "/uː/",
            choices: ["/juː/","/uː/","/ʌ/","/ɪ/"],
            hint: "🍎 fruit，ui → /uː/（圓嘴）！", emoji: "🍎", search: "fruit" },
          { word: "new", speak: "new", displayWord: "new", answer: "/juː/",
            choices: ["/juː/","/uː/","/ɛ/","/ə/"],
            hint: "🆕 new，ew → /juː/（有滑音）！", emoji: "🆕", search: "new" },
          { word: "blew", speak: "blew", displayWord: "blew", answer: "/uː/",
            choices: ["/juː/","/uː/","/ɛ/","/eɪ/"],
            hint: "💨 blew（吹了），ew → /uː/（沒有滑音）！", emoji: "💨", search: "wind blew" },
          { word: "juice", speak: "juice", displayWord: "juice", answer: "/uː/",
            choices: ["/juː/","/uː/","/ʌ/","/ɪ/"],
            hint: "🍹 juice（果汁），ui → /uː/！", emoji: "🍹", search: "juice drink" }
        ]
      }
    ],
    story: {
      title: "🍹 The Fruit Juice Brew",
      pages: [
        { en: "A few cute animals grew some fruit.", zh: "幾隻可愛的動物種了一些水果。", highlights: ["few","cute","grew","fruit"] },
        { en: "They used a new pot to brew fruit juice.", zh: "牠們用一個新鍋子釀造果汁。", highlights: ["new","brew","fruit","juice"] },
        { en: "The wind blew and dew fell on the fruit.", zh: "風吹來，露水落在水果上。", highlights: ["blew","dew","fruit"] },
        { en: "The juice was true blue delicious!", zh: "果汁真的非常好喝！", highlights: ["juice","true","blue"] }
      ]
    }
  },

  // ─────────────────────────────────────────
  //  LESSON 10
  // ─────────────────────────────────────────
  {
    id: 10,
    title: "複習長母音音組 · wr · ie · ea短音",
    emoji: "📖",
    color: 4,
    topics: [
      {
        name: "wr 音組 + ie 發長e",
        rules: [
          "<b>wr</b>：來自古英文，w 不發音，只唸 /r/",
          "例：write、wrap、wrong、wrist、wreck",
          "記憶：wr 像「扭曲的 r」，w 被 r 把它的聲音搶走了！",
          "<b>ie</b> 在字<b>中間</b>：通常唸長 e /iː/（field, grief, piece）",
          "<b>ie</b> 在字<b>尾</b>：通常唸長 i /aɪ/（pie, tie, die, lie）— 和 y 字尾一樣！",
          "<b>bu</b> 音組：b + u → 特殊，例如 buy(/baɪ/)、bury(/bɛri/)"
        ],
        words: [
          { word: "write",  highlight: "wr", zh: "寫（w不發音）", emoji: "✍️", search: "write pen" },
          { word: "wrap",   highlight: "wr", zh: "包裝（w不發音）", emoji: "🎁", search: "wrap gift" },
          { word: "wrong",  highlight: "wr", zh: "錯誤（w不發音）", emoji: "❌", search: "wrong error" },
          { word: "wrist",  highlight: "wr", zh: "手腕（w不發音）", emoji: "⌚", search: "wrist watch" },
          { word: "wreck",  highlight: "wr", zh: "殘骸（w不發音）", emoji: "🚢", search: "shipwreck" },
          { word: "wren",   highlight: "wr", zh: "鷦鷯（小鳥）（w不發音）", emoji: "🐦", search: "wren bird" },
          { word: "pie",    highlight: "ie", zh: "派（ie字尾=/aɪ/）", emoji: "🥧", search: "pie" },
          { word: "tie",    highlight: "ie", zh: "領帶/綁（ie字尾=/aɪ/）", emoji: "👔", search: "tie necktie" },
          { word: "die",    highlight: "ie", zh: "死/骰子（ie字尾=/aɪ/）", emoji: "🎲", search: "dice die" },
          { word: "field",  highlight: "ie", zh: "田野（ie字中=/iː/）", emoji: "🌾", search: "field" },
          { word: "piece",  highlight: "ie", zh: "一片（ie字中=/iː/）", emoji: "🍕", search: "piece pizza" },
          { word: "grief",  highlight: "ie", zh: "悲傷（ie字中=/iː/）", emoji: "😢", search: "grief sad" },
          { word: "thief",  highlight: "ie", zh: "小偷（ie字中=/iː/）", emoji: "🦹", search: "thief" },
          { word: "brief",  highlight: "ie", zh: "簡短的（ie字中=/iː/）", emoji: "📝", search: "brief short" },
          { word: "chief",  highlight: "ie", zh: "酋長/首領（ie字中=/iː/）", emoji: "👑", search: "chief leader" }
        ],
        quiz: [
          { word: "write", speak: "write", displayWord: "write", answer: "w 不發音",
            choices: ["w=/w/","w 不發音","w=/v/","w=/b/"],
            hint: "✍️ write，wr 中 w 不發音，只唸 /r/！", emoji: "✍️", search: "write pen" },
          { word: "pie", speak: "pie", displayWord: "pie", answer: "/aɪ/（字尾ie）",
            choices: ["/iː/（字中ie）","/aɪ/（字尾ie）","/ɪ/","/eɪ/"],
            hint: "🥧 pie，ie 在字尾唸長 i /aɪ/！", emoji: "🥧", search: "pie" },
          { word: "field", speak: "field", displayWord: "field", answer: "/iː/（字中ie）",
            choices: ["/iː/（字中ie）","/aɪ/（字尾ie）","/ɪ/","/eɪ/"],
            hint: "🌾 field，ie 在字中間唸長 e /iː/！", emoji: "🌾", search: "field" },
          { word: "wrong", speak: "wrong", displayWord: "wrong", answer: "w 不發音",
            choices: ["w=/w/","w 不發音","w=/v/","w=/r/"],
            hint: "❌ wrong，wr 中 w 不發音！", emoji: "❌", search: "wrong error" }
        ]
      },
      {
        name: "ea 的短音 + 切音節練習",
        rules: [
          "ea 大多唸長音 /iː/，但有一組重要例外唸短音 /ɛ/",
          "ea=/ɛ/ 的常見字：bread、head、dead、read（過去式）、spread、thread、instead",
          "記憶法：這些字多半跟「靜態、沉重」有關（麵包、頭、死亡）",
          "<b>bu 音組</b>：bu 後面有母音時，u 唸 /ʌ/ 如 bus、but；buy 特例唸 /aɪ/",
          "複習切音節：ea 字如 ea-gle（2節）、fea-ther（2節）"
        ],
        words: [
          { word: "bread",   highlight: "ea", zh: "麵包（ea=/ɛ/ 特例）", emoji: "🍞", search: "bread" },
          { word: "head",    highlight: "ea", zh: "頭（ea=/ɛ/ 特例）", emoji: "🗣️", search: "head" },
          { word: "dead",    highlight: "ea", zh: "死的（ea=/ɛ/ 特例）", emoji: "💀", search: "skull" },
          { word: "spread",  highlight: "ea", zh: "塗抹/散開（ea=/ɛ/ 特例）", emoji: "🧈", search: "spread butter" },
          { word: "thread",  highlight: "ea", zh: "線（ea=/ɛ/ 特例）", emoji: "🧵", search: "thread sewing" },
          { word: "instead", highlight: "ea", zh: "代替（ea=/ɛ/ 特例）", emoji: "🔄", search: "instead replace" },
          { word: "feather", highlight: "ea", zh: "羽毛（ea=/ɛ/ 特例）", emoji: "🪶", search: "feather" },
          { word: "weather", highlight: "ea", zh: "天氣（ea=/ɛ/ 特例）", emoji: "🌤️", search: "weather" },
          { word: "leather", highlight: "ea", zh: "皮革（ea=/ɛ/ 特例）", emoji: "👜", search: "leather bag" },
          { word: "eagle",   highlight: "ea", zh: "老鷹（ea=/iː/ 長音）", emoji: "🦅", search: "eagle" },
          { word: "beast",   highlight: "ea", zh: "野獸（ea=/iː/ 長音）", emoji: "🐺", search: "beast" },
          { word: "feast",   highlight: "ea", zh: "盛宴（ea=/iː/ 長音）", emoji: "🍽️", search: "feast dinner" },
          { word: "east",    highlight: "ea", zh: "東方（ea=/iː/ 長音）", emoji: "🧭", search: "east compass" },
          { word: "least",   highlight: "ea", zh: "最少（ea=/iː/ 長音）", emoji: "📉", search: "least minimum" },
          { word: "yeast",   highlight: "ea", zh: "酵母（ea=/iː/ 長音）", emoji: "🍞", search: "yeast bread" }
        ],
        quiz: [
          { word: "bread", speak: "bread", displayWord: "bread", answer: "/ɛ/（短音特例）",
            choices: ["/iː/（長音）","/ɛ/（短音特例）","/eɪ/","/ə/"],
            hint: "🍞 bread（麵包），ea 特例唸短音 /ɛ/！", emoji: "🍞", search: "bread" },
          { word: "eagle", speak: "eagle", displayWord: "eagle", answer: "/iː/（長音）",
            choices: ["/iː/（長音）","/ɛ/（短音特例）","/eɪ/","/ə/"],
            hint: "🦅 eagle（老鷹），ea 唸長音 /iː/！", emoji: "🦅", search: "eagle" },
          { word: "weather", speak: "weather", displayWord: "weather", answer: "/ɛ/（短音特例）",
            choices: ["/iː/（長音）","/ɛ/（短音特例）","/eɪ/","/ə/"],
            hint: "🌤️ weather（天氣），ea 特例唸短音 /ɛ/！", emoji: "🌤️", search: "weather" },
          { word: "feast", speak: "feast", displayWord: "feast", answer: "/iː/（長音）",
            choices: ["/iː/（長音）","/ɛ/（短音特例）","/eɪ/","/ə/"],
            hint: "🍽️ feast（盛宴），ea 唸長音 /iː/！", emoji: "🍽️", search: "feast dinner" }
        ]
      }
    ],
    story: {
      title: "🦅 The Eagle and the Bread",
      pages: [
        { en: "An eagle with a feather on its head sat in a field.", zh: "一隻頭上有羽毛的老鷹坐在田野上。", highlights: ["eagle","feather","head","field"] },
        { en: "It found a piece of bread and spread it on a leaf.", zh: "牠找到一片麵包，把它塗在葉子上。", highlights: ["piece","bread","spread"] },
        { en: "The weather was fine and the feast began.", zh: "天氣很好，盛宴開始了。", highlights: ["weather","feast"] },
        { en: "The eagle wrote the menu with a brief note.", zh: "老鷹用一張簡短的便條寫了菜單。", highlights: ["wrote","brief","note"] }
      ]
    }
  },

  // ─────────────────────────────────────────
  //  LESSON 11
  // ─────────────────────────────────────────
  {
    id: 11,
    title: "Silent e 新工作 · OO 四個音",
    emoji: "🔮",
    color: 0,
    topics: [
      {
        name: "Silent e 的新工作",
        rules: [
          "Silent e 除了讓前面母音唸長音，還有其他工作：",
          "① <b>每個音節都要有一個母音</b>：如果字尾是子音 + le，e 補足那個音節（例：ta-ble、puz-zle）",
          "② <b>讓字不以 v 或 u 結尾</b>：give（沒有 e 就是 giv，不合規則）、have、love、live",
          "③ <b>讓 c 唸軟音 /s/</b>（c 後面是 e 時）：ice、face、race、place",
          "④ <b>讓 g 唸軟音 /dʒ/</b>（g 後面是 e 時）：age、cage、page、huge",
          "結論：e 在字尾時，可能是長音觸發器，也可能只是在「幫忙」！"
        ],
        words: [
          { word: "give",  highlight: "ve", zh: "給（e讓字不以v結尾）", emoji: "🎁", search: "give gift" },
          { word: "have",  highlight: "ve", zh: "有（e讓字不以v結尾）", emoji: "✋", search: "have hand" },
          { word: "love",  highlight: "ve", zh: "愛（e讓字不以v結尾）", emoji: "❤️", search: "love heart" },
          { word: "live",  highlight: "ve", zh: "住/活著（e讓字不以v結尾）", emoji: "🏠", search: "live home" },
          { word: "ice",   highlight: "ce", zh: "冰（c+e → /s/）", emoji: "🧊", search: "ice cube" },
          { word: "face",  highlight: "ce", zh: "臉（c+e → /s/）", emoji: "😊", search: "face smile" },
          { word: "race",  highlight: "ce", zh: "比賽（c+e → /s/）", emoji: "🏁", search: "race finish" },
          { word: "place", highlight: "ce", zh: "地方（c+e → /s/）", emoji: "📍", search: "place location" },
          { word: "age",   highlight: "ge", zh: "年齡（g+e → /dʒ/）", emoji: "🎂", search: "age birthday" },
          { word: "cage",  highlight: "ge", zh: "籠子（g+e → /dʒ/）", emoji: "🐦", search: "cage bird" },
          { word: "page",  highlight: "ge", zh: "頁面（g+e → /dʒ/）", emoji: "📄", search: "page book" },
          { word: "huge",  highlight: "ge", zh: "巨大的（g+e → /dʒ/）", emoji: "🏔️", search: "huge mountain" },
          { word: "table", highlight: "le", zh: "桌子（le補音節）", emoji: "🪑", search: "table" },
          { word: "puzzle",highlight: "le", zh: "謎題（le補音節）", emoji: "🧩", search: "puzzle" },
          { word: "circle",highlight: "le", zh: "圓圈（le補音節）", emoji: "⭕", search: "circle" }
        ],
        quiz: [
          { word: "face", speak: "face", displayWord: "face", answer: "/s/（c+e軟音）",
            choices: ["/k/（硬音c）","/s/（c+e軟音）","/tʃ/","/ʃ/"],
            hint: "😊 face，c 遇到 e 變軟音 /s/！", emoji: "😊", search: "face smile" },
          { word: "age", speak: "age", displayWord: "age", answer: "/dʒ/（g+e軟音）",
            choices: ["/g/（硬音g）","/dʒ/（g+e軟音）","/ʒ/","/k/"],
            hint: "🎂 age，g 遇到 e 變軟音 /dʒ/！", emoji: "🎂", search: "age birthday" },
          { word: "give", speak: "give", displayWord: "give", answer: "e不讓v結尾",
            choices: ["e讓i唸長音","e不讓v結尾","e是裝飾","e讓g軟化"],
            hint: "🎁 give，這個 e 是為了不讓字以 v 結尾！", emoji: "🎁", search: "give gift" },
          { word: "table", speak: "table", displayWord: "ta-ble", answer: "e補足音節",
            choices: ["e讓a唸長音","e讓t軟化","e補足音節","e是裝飾"],
            hint: "🪑 table，-ble 裡的 e 讓 le 成為一個音節！", emoji: "🪑", search: "table" }
        ]
      },
      {
        name: "OO 的四個發音",
        rules: [
          "oo 是英文中最常見的音組之一，有<b>四個</b>發音！",
          "① <b>長OO /uː/</b>（嘴巴最圓）：moon、food、school、pool → 最常見",
          "② <b>短OO /ʊ/</b>（嘴巴半圓）：book、look、cook、good → 記憶：書本相關的字常用短OO",
          "③ <b>/ɔː/（door音）</b>：floor、door（少數，特例）",
          "④ <b>/ʌ/（blood音）</b>：blood、flood（非常少見特例）",
          "判斷法：先試長OO，不對再試短OO，剩下兩個背起來就好！"
        ],
        wordGroups: [
          {
            groupLabel: "① 長OO /uː/ — 最多字",
            groupNote: "嘴巴最圓，像在說「嗚」，例如 moon、food",
            groupColor: "#eef4ff",
            groupBorder: "#4d96ff",
            words: [
              { word: "moon",   highlight: "oo", zh: "月亮", emoji: "🌙", search: "moon" },
              { word: "food",   highlight: "oo", zh: "食物", emoji: "🍔", search: "food" },
              { word: "school", highlight: "oo", zh: "學校", emoji: "🏫", search: "school" },
              { word: "pool",   highlight: "oo", zh: "游泳池", emoji: "🏊", search: "swimming pool" },
              { word: "tooth",  highlight: "oo", zh: "牙齒", emoji: "🦷", search: "tooth" },
              { word: "spoon",  highlight: "oo", zh: "湯匙", emoji: "🥄", search: "spoon" },
              { word: "bloom",  highlight: "oo", zh: "開花", emoji: "🌸", search: "bloom flower" },
              { word: "smooth", highlight: "oo", zh: "光滑的", emoji: "🌊", search: "smooth water" }
            ]
          },
          {
            groupLabel: "② 短OO /ʊ/ — 書本類常見",
            groupNote: "嘴巴半圓，比長OO放鬆一些，例如 book、look",
            groupColor: "#edfff0",
            groupBorder: "#6bcb77",
            words: [
              { word: "book",   highlight: "oo", zh: "書", emoji: "📚", search: "book" },
              { word: "look",   highlight: "oo", zh: "看", emoji: "👀", search: "look eyes" },
              { word: "cook",   highlight: "oo", zh: "廚師/烹飪", emoji: "👨‍🍳", search: "cook chef" },
              { word: "good",   highlight: "oo", zh: "好的", emoji: "👍", search: "good thumbs" },
              { word: "wood",   highlight: "oo", zh: "木頭", emoji: "🪵", search: "wood log" },
              { word: "foot",   highlight: "oo", zh: "腳", emoji: "🦶", search: "foot" },
              { word: "hook",   highlight: "oo", zh: "鉤子", emoji: "🎣", search: "hook fishing" }
            ]
          }
        ],
        words: [
          { word: "moon",  highlight: "oo", zh: "月亮（長OO）", emoji: "🌙", search: "moon" },
          { word: "book",  highlight: "oo", zh: "書（短OO）", emoji: "📚", search: "book" },
          { word: "food",  highlight: "oo", zh: "食物（長OO）", emoji: "🍔", search: "food" },
          { word: "look",  highlight: "oo", zh: "看（短OO）", emoji: "👀", search: "look eyes" }
        ],
        quiz: [
          { word: "moon", speak: "moon", displayWord: "moon", answer: "長OO /uː/",
            choices: ["長OO /uː/","短OO /ʊ/","/ɔː/","/ʌ/"],
            hint: "🌙 moon（月亮），唸長OO /uː/！", emoji: "🌙", search: "moon" },
          { word: "book", speak: "book", displayWord: "book", answer: "短OO /ʊ/",
            choices: ["長OO /uː/","短OO /ʊ/","/ɔː/","/ʌ/"],
            hint: "📚 book（書），唸短OO /ʊ/！", emoji: "📚", search: "book" },
          { word: "school", speak: "school", displayWord: "school", answer: "長OO /uː/",
            choices: ["長OO /uː/","短OO /ʊ/","/ɔː/","/sk/"],
            hint: "🏫 school（學校），唸長OO /uː/！", emoji: "🏫", search: "school" },
          { word: "good", speak: "good", displayWord: "good", answer: "短OO /ʊ/",
            choices: ["長OO /uː/","短OO /ʊ/","/ɔː/","/ʌ/"],
            hint: "👍 good（好的），唸短OO /ʊ/！", emoji: "👍", search: "good thumbs" }
        ]
      }
    ],
    story: {
      title: "🦁 The Huge Cage",
      pages: [
        { en: "A huge lion lived in a cage at school.", zh: "一隻巨大的獅子住在學校的籠子裡。", highlights: ["huge","cage","school"] },
        { en: "It liked to look at the moon and eat food.", zh: "牠喜歡看月亮和吃東西。", highlights: ["look","moon","food"] },
        { en: "The cook gave it a good piece of meat.", zh: "廚師給了牠一塊好肉。", highlights: ["cook","good","piece","meat"] },
        { en: "The lion used a spoon — what a funny sight!", zh: "獅子用湯匙吃——真是有趣的畫面！", highlights: ["spoon","funny","sight"] }
      ]
    }
  },

  // ─────────────────────────────────────────
  //  LESSON 12
  // ─────────────────────────────────────────
  {
    id: 12,
    title: "oi · oy · Lazy O · 懶惰音規則",
    emoji: "🌀",
    color: 1,
    topics: [
      {
        name: "oi 和 oy 音組",
        rules: [
          "<b>oi</b> 和 <b>oy</b> 都唸 /ɔɪ/（像中文「哦-一」快速連唸）",
          "位置規則：<b>oi</b> 在字的<b>中間</b>（後面還有字母）",
          "位置規則：<b>oy</b> 在字的<b>結尾</b>（字尾不能是 i，所以改用 y）",
          "例：oil（字中）、boy（字尾）、coin（字中）、toy（字尾）",
          "記憶：oy 就像 ay（字尾長a）和 ey 一樣，y 在字尾充當 i 的角色！"
        ],
        words: [
          { word: "oil",    highlight: "oi", zh: "油（oi字中）", emoji: "🫙", search: "oil bottle" },
          { word: "coin",   highlight: "oi", zh: "硬幣（oi字中）", emoji: "🪙", search: "coin money" },
          { word: "soil",   highlight: "oi", zh: "土壤（oi字中）", emoji: "🌱", search: "soil dirt" },
          { word: "foil",   highlight: "oi", zh: "鋁箔（oi字中）", emoji: "🥘", search: "foil wrap" },
          { word: "join",   highlight: "oi", zh: "加入（oi字中）", emoji: "🤝", search: "join hands" },
          { word: "voice",  highlight: "oi", zh: "聲音（oi字中）", emoji: "🎤", search: "voice microphone" },
          { word: "point",  highlight: "oi", zh: "指向/重點（oi字中）", emoji: "👆", search: "point finger" },
          { word: "boy",    highlight: "oy", zh: "男孩（oy字尾）", emoji: "👦", search: "boy kid" },
          { word: "toy",    highlight: "oy", zh: "玩具（oy字尾）", emoji: "🧸", search: "toy teddy" },
          { word: "joy",    highlight: "oy", zh: "快樂（oy字尾）", emoji: "😊", search: "joy happy" },
          { word: "enjoy",  highlight: "oy", zh: "享受（oy字尾）", emoji: "🎉", search: "enjoy celebrate" },
          { word: "royal",  highlight: "oy", zh: "皇家的（oy字中）", emoji: "👑", search: "royal crown" },
          { word: "loyal",  highlight: "oy", zh: "忠誠的（oy字中）", emoji: "🐕", search: "loyal dog" },
          { word: "destroy",highlight: "oy", zh: "毀滅（oy字尾）", emoji: "💥", search: "destroy explosion" },
          { word: "employ", highlight: "oy", zh: "僱用（oy字尾）", emoji: "💼", search: "employ work" }
        ],
        quiz: [
          { word: "coin", speak: "coin", displayWord: "coin", answer: "oi（字中）",
            choices: ["oi（字中）","oy（字尾）","oa","ou"],
            hint: "🪙 coin（硬幣），在字中間用 oi！", emoji: "🪙", search: "coin money" },
          { word: "toy", speak: "toy", displayWord: "toy", answer: "oy（字尾）",
            choices: ["oi（字中）","oy（字尾）","oa","ou"],
            hint: "🧸 toy（玩具），在字尾用 oy！", emoji: "🧸", search: "toy teddy" },
          { word: "join", speak: "join", displayWord: "j _ _ n", answer: "oi",
            choices: ["oi","oy","oe","ou"],
            hint: "🤝 join（加入），字中間用 oi！", emoji: "🤝", search: "join hands" },
          { word: "enjoy", speak: "enjoy", displayWord: "enj _ _", answer: "oy",
            choices: ["oi","oy","oe","ou"],
            hint: "🎉 enjoy（享受），字尾用 oy！", emoji: "🎉", search: "enjoy celebrate" }
        ]
      },
      {
        name: "Lazy O / 懶惰音規則 1 和 2",
        rules: [
          "<b>懶惰音規則 1</b>：a 在第一個字（非重音開頭音節）唸懶音 /ə/",
          "例：<u>a</u>bout、<u>a</u>lone、<u>a</u>go、<u>a</u>live — 這些字首的 a 唸 /ə/！",
          "<b>懶惰音規則 2</b>：a 在最後一個字母時（非重音字尾）通常唸懶音 /ə/",
          "例：sof<u>a</u>、pand<u>a</u>、pizz<u>a</u>、Chin<u>a</u> — 字尾 a 唸 /ə/！",
          "<b>Lazy O</b>：o 在非重音節也常唸懶音，例如：lem<u>o</u>n、comm<u>o</u>n、seas<u>o</u>n",
          "總結：非重音節的母音容易「偷懶」變成 /ə/！"
        ],
        words: [
          { word: "about",   highlight: "a",  zh: "關於（首a=懶音）", emoji: "📖", search: "about book" },
          { word: "alone",   highlight: "a",  zh: "獨自（首a=懶音）", emoji: "🧍", search: "alone person" },
          { word: "ago",     highlight: "a",  zh: "以前（首a=懶音）", emoji: "⏰", search: "ago time" },
          { word: "alive",   highlight: "a",  zh: "活著（首a=懶音）", emoji: "❤️", search: "alive heart" },
          { word: "among",   highlight: "a",  zh: "在...之中（首a=懶音）", emoji: "👥", search: "among group" },
          { word: "sofa",    highlight: "a",  zh: "沙發（尾a=懶音）", emoji: "🛋️", search: "sofa" },
          { word: "extra",   highlight: "a",  zh: "額外的（尾a=懶音）", emoji: "➕", search: "extra plus" },
          { word: "lemon",   highlight: "o",  zh: "檸檬（中o=懶音）", emoji: "🍋", search: "lemon" },
          { word: "common",  highlight: "o",  zh: "普通的（中o=懶音）", emoji: "📊", search: "common chart" },
          { word: "season",  highlight: "o",  zh: "季節（中o=懶音）", emoji: "🍂", search: "autumn season" },
          { word: "lesson",  highlight: "o",  zh: "課（中o=懶音）", emoji: "📝", search: "lesson class" },
          { word: "button",  highlight: "o",  zh: "按鈕（中o=懶音）", emoji: "🔘", search: "button" },
          { word: "cotton",  highlight: "o",  zh: "棉花（中o=懶音）", emoji: "☁️", search: "cotton cloud" },
          { word: "person",  highlight: "o",  zh: "人（中o=懶音）", emoji: "👤", search: "person silhouette" },
          { word: "ribbon",  highlight: "o",  zh: "絲帶（中o=懶音）", emoji: "🎀", search: "ribbon bow" }
        ],
        quiz: [
          { word: "about", speak: "about", displayWord: "about", answer: "懶音 /ə/",
            choices: ["長音 /eɪ/","短音 /æ/","懶音 /ə/","不發音"],
            hint: "📖 about，開頭 a 在非重音節唸懶音！", emoji: "📖", search: "about book" },
          { word: "lemon", speak: "lemon", displayWord: "lem-on", answer: "懶音 /ə/",
            choices: ["長音 /oʊ/","短音 /ɑ/","懶音 /ə/","不發音"],
            hint: "🍋 lemon，第二音節的 o 唸懶音！", emoji: "🍋", search: "lemon" },
          { word: "sofa", speak: "sofa", displayWord: "sofa", answer: "懶音 /ə/",
            choices: ["長音 /eɪ/","短音 /æ/","懶音 /ə/","不發音"],
            hint: "🛋️ sofa，字尾 a 唸懶音！", emoji: "🛋️", search: "sofa" },
          { word: "season", speak: "season", displayWord: "sea-son", answer: "懶音 /ə/",
            choices: ["長音 /oʊ/","短音 /ɑ/","懶音 /ə/","不發音"],
            hint: "🍂 season，第二音節的 o 唸懶音！", emoji: "🍂", search: "autumn season" }
        ]
      }
    ],
    story: {
      title: "🪙 The Boy and the Oil Coin",
      pages: [
        { en: "A boy found a coin in the soil.", zh: "一個男孩在土裡找到了一枚硬幣。", highlights: ["boy","coin","soil"] },
        { en: "He was alone, but full of joy.", zh: "他獨自一人，卻充滿快樂。", highlights: ["alone","joy"] },
        { en: "He used it to buy a toy and enjoy a lemon treat.", zh: "他用它買了一個玩具，享受了一份檸檬點心。", highlights: ["toy","enjoy","lemon"] },
        { en: "About a season ago, he had lost it — now he had it back!", zh: "大約一個季節前，他把它弄丟了——現在找回來了！", highlights: ["About","season","ago"] }
      ]
    }
  }

]; // end LESSONS
