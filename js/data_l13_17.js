// ═══════════════════════════════════════════
//  LESSONS 13–24 DATA
//  L13: R-controlled ar/or · tch vs ch · C和G變音
//  L14: ir/er/ur · floss規則 · 懶惰音3: et · L1-14複習
//  L15: ou歌曲 · ou/ow區別 · ou5個音 · bl拼音
//  L16: au/aw · 懶惰音4 · L11-16複習 · R-controlled複習
//  L17: J字尾規則 · dge/ge · augh · Silent e · br拼音
//  L18: Long A Long E完整 · ei/ey/eigh · th兩個音 · ng · ar or
//  L19: ugh兩個音 · O第三個音 · OO整理 · 無聲變有聲拼音3
//  L20: Wh · gn/kn · sh/ci/ti/si · 3字母拼音4
//  L21: ch三個音 · sh · ear
//  L22: ph=/f/ · silent e任務整理 · ed三種發音 · 字尾c
//  L23: gu · cei · i四個音 · 複習
//  L24: ts/ds · r的變音 · X兩個音 · 音組典製作 · 規則總複習
// ═══════════════════════════════════════════

const LESSONS = [

  // ─────────────────────────────────────────
  //  LESSON 13
  // ─────────────────────────────────────────
  {
    id: 13,
    title: "R-controlled ar/or · tch · C和G變音",
    emoji: "🔴",
    color: 0,
    topics: [
      {
        name: "R-controlled: ar 和 or",
        rules: [
          "當母音後面緊跟著 r，r 會「控制」母音的發音，使它變成特殊的音",
          "<b>ar</b>：唸 /ɑːr/（像注音「ㄚㄦ」），嘴巴大開再捲舌",
          "例：car、star、farm、hard、bark、part",
          "<b>or</b>：唸 /ɔːr/（像注音「ㄛㄦ」），嘴巴圓再捲舌",
          "例：for、corn、horse、short、sport、born",
          "記憶：r 就像磁鐵，把前面的母音吸走，讓它變成 r-音！"
        ],
        words: [
          { word: "car",   highlight: "ar", zh: "車（ar=/ɑːr/）", emoji: "🚗", search: "car" },
          { word: "star",  highlight: "ar", zh: "星星（ar=/ɑːr/）", emoji: "⭐", search: "star" },
          { word: "farm",  highlight: "ar", zh: "農場（ar=/ɑːr/）", emoji: "🌾", search: "farm" },
          { word: "hard",  highlight: "ar", zh: "困難/硬（ar=/ɑːr/）", emoji: "💪", search: "hard strong" },
          { word: "bark",  highlight: "ar", zh: "樹皮/吠叫（ar=/ɑːr/）", emoji: "🐕", search: "bark dog" },
          { word: "sharp", highlight: "ar", zh: "尖銳（ar=/ɑːr/）", emoji: "🔪", search: "sharp knife" },
          { word: "spark", highlight: "ar", zh: "火花（ar=/ɑːr/）", emoji: "✨", search: "spark fire" },
          { word: "for",   highlight: "or", zh: "為了（or=/ɔːr/）", emoji: "🎁", search: "gift for" },
          { word: "corn",  highlight: "or", zh: "玉米（or=/ɔːr/）", emoji: "🌽", search: "corn" },
          { word: "horse", highlight: "or", zh: "馬（or=/ɔːr/）", emoji: "🐎", search: "horse" },
          { word: "short", highlight: "or", zh: "短的（or=/ɔːr/）", emoji: "📏", search: "short ruler" },
          { word: "sport", highlight: "or", zh: "運動（or=/ɔːr/）", emoji: "⚽", search: "sport soccer" },
          { word: "storm", highlight: "or", zh: "暴風雨（or=/ɔːr/）", emoji: "⛈️", search: "storm" },
          { word: "sword", highlight: "or", zh: "劍（or=/ɔːr/）", emoji: "⚔️", search: "sword" },
          { word: "forest",highlight: "or", zh: "森林（or=/ɔːr/）", emoji: "🌲", search: "forest" }
        ],
        quiz: [
          { word: "star", speak: "star", displayWord: "star", answer: "/ɑːr/",
            choices: ["/æ/（短a）","/eɪ/（長a）","/ɑːr/","/ər/"],
            hint: "⭐ star，ar → /ɑːr/，r 控制了 a！", emoji: "⭐", search: "star" },
          { word: "corn", speak: "corn", displayWord: "corn", answer: "/ɔːr/",
            choices: ["/ɑ/（短o）","/oʊ/（長o）","/ɔːr/","/ər/"],
            hint: "🌽 corn，or → /ɔːr/，r 控制了 o！", emoji: "🌽", search: "corn" },
          { word: "farm", speak: "farm", displayWord: "farm", answer: "/ɑːr/",
            choices: ["/æ/（短a）","/eɪ/（長a）","/ɑːr/","/ɔːr/"],
            hint: "🌾 farm，ar → /ɑːr/！", emoji: "🌾", search: "farm" },
          { word: "sport", speak: "sport", displayWord: "sport", answer: "/ɔːr/",
            choices: ["/ɑ/（短o）","/oʊ/（長o）","/ɔːr/","/ɑːr/"],
            hint: "⚽ sport，or → /ɔːr/！", emoji: "⚽", search: "sport soccer" }
        ]
      },
      {
        name: "tch vs ch · C和G的變音",
        rules: [
          "<b>tch</b>：唸 /tʃ/，和 ch 發音一樣，但 tch 只用在<b>短母音後面</b>",
          "例：catch、match、witch、patch、fetch、hutch",
          "<b>ch</b>：用在其他位置（長母音後、字首、多音節字）",
          "例：chair、cheese、peach、teach、beach",
          "<b>C 的變音</b>：c 後面是 e、i、y → 唸軟音 /s/（city、cycle、cent）；其他情況唸 /k/（cat、cup）",
          "<b>G 的變音</b>：g 後面是 e、i、y → 通常唸軟音 /dʒ/（gem、giraffe、gym）；但有例外（get、give）"
        ],
        words: [
          { word: "catch",   highlight: "tch", zh: "抓（短a+tch）", emoji: "🫳", search: "catch ball" },
          { word: "match",   highlight: "tch", zh: "配對/比賽（短a+tch）", emoji: "🎯", search: "match game" },
          { word: "witch",   highlight: "tch", zh: "女巫（短i+tch）", emoji: "🧙‍♀️", search: "witch" },
          { word: "patch",   highlight: "tch", zh: "補丁（短a+tch）", emoji: "🩹", search: "patch bandage" },
          { word: "fetch",   highlight: "tch", zh: "去拿（短e+tch）", emoji: "🐕", search: "fetch dog" },
          { word: "hutch",   highlight: "tch", zh: "兔籠（短u+tch）", emoji: "🐰", search: "hutch rabbit" },
          { word: "stretch", highlight: "tch", zh: "伸展（短e+tch）", emoji: "🤸", search: "stretch" },
          { word: "city",    highlight: "c",   zh: "城市（c+i → /s/）", emoji: "🏙️", search: "city" },
          { word: "cent",    highlight: "c",   zh: "分（c+e → /s/）", emoji: "💵", search: "cent coin" },
          { word: "cycle",   highlight: "c",   zh: "循環（c+y → /s/）", emoji: "🔄", search: "cycle" },
          { word: "gem",     highlight: "g",   zh: "寶石（g+e → /dʒ/）", emoji: "💎", search: "gem jewel" },
          { word: "giraffe", highlight: "g",   zh: "長頸鹿（g+i → /dʒ/）", emoji: "🦒", search: "giraffe" },
          { word: "gym",     highlight: "g",   zh: "健身房（g+y → /dʒ/）", emoji: "🏋️", search: "gym" },
          { word: "giant",   highlight: "g",   zh: "巨人（g+i → /dʒ/）", emoji: "🧌", search: "giant" },
          { word: "gentle",  highlight: "g",   zh: "溫柔（g+e → /dʒ/）", emoji: "🤗", search: "gentle kind" }
        ],
        quiz: [
          { word: "catch", speak: "catch", displayWord: "ca__", answer: "tch（短母音後）",
            choices: ["ch","tch（短母音後）","c","k"],
            hint: "🫳 catch，短母音 a 後面用 tch！", emoji: "🫳", search: "catch ball" },
          { word: "city", speak: "city", displayWord: "city", answer: "/s/（c軟音）",
            choices: ["/k/（c硬音）","/s/（c軟音）","/tʃ/","/ʃ/"],
            hint: "🏙️ city，c 後面是 i 唸軟音 /s/！", emoji: "🏙️", search: "city" },
          { word: "gem", speak: "gem", displayWord: "gem", answer: "/dʒ/（g軟音）",
            choices: ["/g/（g硬音）","/dʒ/（g軟音）","/ʒ/","/k/"],
            hint: "💎 gem，g 後面是 e 唸軟音 /dʒ/！", emoji: "💎", search: "gem jewel" },
          { word: "peach", speak: "peach", displayWord: "pea__", answer: "ch（長母音後）",
            choices: ["ch（長母音後）","tch（短母音後）","c","k"],
            hint: "🍑 peach，長母音 ea 後面用 ch！", emoji: "🍑", search: "peach" }
        ]
      }
    ],
    story: {
      title: "🐎 The Horse on the Farm",
      pages: [
        { en: "A horse on a farm could catch a star in the dark.", zh: "農場上一匹馬能在黑暗中抓到星星。", highlights: ["horse","farm","catch","star"] },
        { en: "The gentle giant tried to match its speed.", zh: "那個溫柔的巨人試著追上牠的速度。", highlights: ["gentle","giant","match"] },
        { en: "They played sport by the corn in the forest.", zh: "他們在森林裡的玉米旁邊玩運動。", highlights: ["sport","corn","forest"] },
        { en: "It was a short but sparkly night!", zh: "這是一個短暫但閃閃發光的夜晚！", highlights: ["short","night"] }
      ]
    }
  },

  // ─────────────────────────────────────────
  //  LESSON 14
  // ─────────────────────────────────────────
  {
    id: 14,
    title: "ir · er · ur · floss規則 · 懶惰音et",
    emoji: "🌀",
    color: 1,
    topics: [
      {
        name: "R-controlled: ir · er · ur",
        rules: [
          "ir、er、ur 三個音組發音完全一樣：/ɜːr/（類似注音「ㄦ」，捲舌）",
          "<b>ir</b>：bird、girl、first、shirt、third、circle",
          "<b>er</b>：her、fern、germ、verb、person（也常出現在字尾作弱音）",
          "<b>ur</b>：fur、burn、turn、purple、nurse、turtle",
          "記憶法：ir、er、ur 三兄弟，長得不一樣，說話卻一模一樣！",
          "字尾 er 常是懶音（teacher、butter、water），不捲舌只唸 /ər/"
        ],
        words: [
          { word: "bird",   highlight: "ir", zh: "鳥（ir=/ɜːr/）", emoji: "🐦", search: "bird" },
          { word: "girl",   highlight: "ir", zh: "女孩（ir=/ɜːr/）", emoji: "👧", search: "girl" },
          { word: "first",  highlight: "ir", zh: "第一（ir=/ɜːr/）", emoji: "🥇", search: "first medal" },
          { word: "shirt",  highlight: "ir", zh: "襯衫（ir=/ɜːr/）", emoji: "👕", search: "shirt" },
          { word: "circle", highlight: "ir", zh: "圓圈（ir=/ɜːr/）", emoji: "⭕", search: "circle" },
          { word: "her",    highlight: "er", zh: "她的（er=/ɜːr/）", emoji: "👩", search: "woman her" },
          { word: "fern",   highlight: "er", zh: "蕨類植物（er=/ɜːr/）", emoji: "🌿", search: "fern plant" },
          { word: "verb",   highlight: "er", zh: "動詞（er=/ɜːr/）", emoji: "📝", search: "verb word" },
          { word: "germ",   highlight: "er", zh: "細菌（er=/ɜːr/）", emoji: "🦠", search: "germ bacteria" },
          { word: "fur",    highlight: "ur", zh: "毛皮（ur=/ɜːr/）", emoji: "🐾", search: "fur animal" },
          { word: "burn",   highlight: "ur", zh: "燃燒（ur=/ɜːr/）", emoji: "🔥", search: "burn fire" },
          { word: "turn",   highlight: "ur", zh: "轉（ur=/ɜːr/）", emoji: "🔄", search: "turn rotate" },
          { word: "purple", highlight: "ur", zh: "紫色（ur=/ɜːr/）", emoji: "💜", search: "purple color" },
          { word: "nurse",  highlight: "ur", zh: "護士（ur=/ɜːr/）", emoji: "👩‍⚕️", search: "nurse" },
          { word: "turtle", highlight: "ur", zh: "烏龜（ur=/ɜːr/）", emoji: "🐢", search: "turtle" }
        ],
        quiz: [
          { word: "bird", speak: "bird", displayWord: "b_rd", answer: "ir",
            choices: ["ir","er","ur","ar"],
            hint: "🐦 bird，ir → /ɜːr/！", emoji: "🐦", search: "bird" },
          { word: "nurse", speak: "nurse", displayWord: "n_rse", answer: "ur",
            choices: ["ir","er","ur","or"],
            hint: "👩‍⚕️ nurse，ur → /ɜːr/！", emoji: "👩‍⚕️", search: "nurse" },
          { word: "fern", speak: "fern", displayWord: "f_rn", answer: "er",
            choices: ["ir","er","ur","ar"],
            hint: "🌿 fern，er → /ɜːr/！", emoji: "🌿", search: "fern plant" },
          { word: "purple", speak: "purple", displayWord: "p_rple", answer: "ur",
            choices: ["ir","er","ur","or"],
            hint: "💜 purple，ur → /ɜːr/！", emoji: "💜", search: "purple color" }
        ]
      },
      {
        name: "floss規則 · 懶惰音et",
        rules: [
          "<b>floss 規則</b>：單音節字，短母音後面只有一個子音 f、l、s、z → 需要<b>雙寫</b>！",
          "記憶：floss（牙線）這個字本身就用了 ss，幫助記憶！",
          "例：off、cliff（ff）、ball、bell、hill（ll）、pass、miss、dress（ss）、buzz（zz）",
          "<b>懶惰音規則3：et</b>：字尾 -et 很多時候 e 唸懶音 /ə/，所以唸起來像「ɪt」",
          "例：basket、blanket、jacket、rocket、pocket、ticket",
          "這也是為什麼「它」聽起來像 /ɪt/ 而不是 /ɛt/！"
        ],
        words: [
          { word: "off",     highlight: "ff", zh: "關掉（ff=floss規則）", emoji: "🔇", search: "off switch" },
          { word: "cliff",   highlight: "ff", zh: "懸崖（ff=floss規則）", emoji: "🏔️", search: "cliff" },
          { word: "ball",    highlight: "ll", zh: "球（ll=floss規則）", emoji: "⚽", search: "ball" },
          { word: "bell",    highlight: "ll", zh: "鈴（ll=floss規則）", emoji: "🔔", search: "bell" },
          { word: "hill",    highlight: "ll", zh: "山丘（ll=floss規則）", emoji: "⛰️", search: "hill" },
          { word: "pass",    highlight: "ss", zh: "通過（ss=floss規則）", emoji: "✅", search: "pass check" },
          { word: "miss",    highlight: "ss", zh: "想念/小姐（ss=floss規則）", emoji: "😢", search: "miss sad" },
          { word: "dress",   highlight: "ss", zh: "洋裝（ss=floss規則）", emoji: "👗", search: "dress" },
          { word: "buzz",    highlight: "zz", zh: "嗡嗡聲（zz=floss規則）", emoji: "🐝", search: "buzz bee" },
          { word: "basket",  highlight: "et", zh: "籃子（et=懶音）", emoji: "🧺", search: "basket" },
          { word: "jacket",  highlight: "et", zh: "夾克（et=懶音）", emoji: "🧥", search: "jacket" },
          { word: "rocket",  highlight: "et", zh: "火箭（et=懶音）", emoji: "🚀", search: "rocket" },
          { word: "pocket",  highlight: "et", zh: "口袋（et=懶音）", emoji: "👖", search: "pocket pants" },
          { word: "ticket",  highlight: "et", zh: "票（et=懶音）", emoji: "🎟️", search: "ticket" },
          { word: "blanket", highlight: "et", zh: "毯子（et=懶音）", emoji: "🛏️", search: "blanket" }
        ],
        quiz: [
          { word: "ball", speak: "ball", displayWord: "ba__", answer: "ll（floss規則）",
            choices: ["l","ll（floss規則）","le","al"],
            hint: "⚽ ball，短母音後只有 l 要雙寫 ll！", emoji: "⚽", search: "ball" },
          { word: "dress", speak: "dress", displayWord: "dre__", answer: "ss（floss規則）",
            choices: ["s","ss（floss規則）","se","es"],
            hint: "👗 dress，短母音後只有 s 要雙寫 ss！", emoji: "👗", search: "dress" },
          { word: "rocket", speak: "rocket", displayWord: "rock-et", answer: "懶音 /ɪt/",
            choices: ["短音 /ɛt/","懶音 /ɪt/","長音 /iːt/","不發音"],
            hint: "🚀 rocket，字尾 -et 唸懶音 /ɪt/！", emoji: "🚀", search: "rocket" },
          { word: "ticket", speak: "ticket", displayWord: "tick-et", answer: "懶音 /ɪt/",
            choices: ["短音 /ɛt/","懶音 /ɪt/","長音 /iːt/","不發音"],
            hint: "🎟️ ticket，字尾 -et 唸懶音 /ɪt/！", emoji: "🎟️", search: "ticket" }
        ]
      }
    ],
    story: {
      title: "🐢 The Turtle's Ticket",
      pages: [
        { en: "A turtle in a purple shirt found a rocket ticket.", zh: "一隻穿紫色襯衫的烏龜找到了一張火箭票。", highlights: ["turtle","purple","shirt","rocket","ticket"] },
        { en: "She put it in her pocket and ran up the hill.", zh: "她把它放進口袋，跑上山丘。", highlights: ["pocket","hill"] },
        { en: "A bird and a girl said: 'First come, first served!'", zh: "一隻鳥和一個女孩說：「先到先得！」", highlights: ["bird","girl","First","first"] },
        { en: "The turtle passed them all and rang the bell!", zh: "烏龜超過了所有人，按響了鈴鐺！", highlights: ["turtle","passed","bell"] }
      ]
    }
  },

  // ─────────────────────────────────────────
  //  LESSON 15
  // ─────────────────────────────────────────
  {
    id: 15,
    title: "ou歌曲 · ou和ow · ou五個音 · bl拼音",
    emoji: "🎵",
    color: 2,
    topics: [
      {
        name: "ou 和 ow 的五個音",
        rules: [
          "ou 有<b>五種</b>發音（是英文中最複雜的音組之一！）",
          "① /aʊ/（最常見）：out、loud、cloud、mouth、round、found",
          "② /oʊ/（長o）：though、dough、soul、four — 記：雖然長得像 ou，唸長 o",
          "③ /uː/（長u）：you、through、soup、group",
          "④ /ʌ/（短u）：young、touch、double、trouble",
          "⑤ /ɔː/（或-ɔr）：four、pour、your、court",
          "<b>ow</b>：① /aʊ/ 如 cow、now、how、town ② /oʊ/ 如 snow、low（已在L8學過）"
        ],
        words: [
          { word: "out",    highlight: "ou", zh: "出去（ou=/aʊ/①）", emoji: "🚪", search: "exit out" },
          { word: "loud",   highlight: "ou", zh: "大聲（ou=/aʊ/①）", emoji: "📢", search: "loud speaker" },
          { word: "cloud",  highlight: "ou", zh: "雲（ou=/aʊ/①）", emoji: "☁️", search: "cloud" },
          { word: "mouth",  highlight: "ou", zh: "嘴巴（ou=/aʊ/①）", emoji: "👄", search: "mouth" },
          { word: "round",  highlight: "ou", zh: "圓形/一回合（ou=/aʊ/①）", emoji: "⭕", search: "round circle" },
          { word: "found",  highlight: "ou", zh: "找到了（ou=/aʊ/①）", emoji: "🔍", search: "found search" },
          { word: "though", highlight: "ou", zh: "雖然（ou=/oʊ/②）", emoji: "🤔", search: "though thinking" },
          { word: "you",    highlight: "ou", zh: "你（ou=/uː/③）", emoji: "👉", search: "you point" },
          { word: "soup",   highlight: "ou", zh: "湯（ou=/uː/③）", emoji: "🍲", search: "soup bowl" },
          { word: "young",  highlight: "ou", zh: "年輕（ou=/ʌ/④）", emoji: "👶", search: "young child" },
          { word: "touch",  highlight: "ou", zh: "觸摸（ou=/ʌ/④）", emoji: "🤏", search: "touch hand" },
          { word: "four",   highlight: "ou", zh: "四（ou=/ɔːr/⑤）", emoji: "4️⃣", search: "number four" },
          { word: "cow",    highlight: "ow", zh: "牛（ow=/aʊ/）", emoji: "🐄", search: "cow" },
          { word: "town",   highlight: "ow", zh: "小鎮（ow=/aʊ/）", emoji: "🏘️", search: "town village" },
          { word: "crowd",  highlight: "ow", zh: "人群（ow=/aʊ/→但此字用ou）", emoji: "👥", search: "crowd people" }
        ],
        quiz: [
          { word: "cloud", speak: "cloud", displayWord: "cloud", answer: "/aʊ/①最常見",
            choices: ["/aʊ/①最常見","/oʊ/②長o","/uː/③長u","/ʌ/④短u"],
            hint: "☁️ cloud，ou 唸最常見的 /aʊ/！", emoji: "☁️", search: "cloud" },
          { word: "you", speak: "you", displayWord: "you", answer: "/uː/③長u",
            choices: ["/aʊ/①最常見","/oʊ/②長o","/uː/③長u","/ʌ/④短u"],
            hint: "👉 you，ou 唸 /uː/！", emoji: "👉", search: "you point" },
          { word: "young", speak: "young", displayWord: "young", answer: "/ʌ/④短u",
            choices: ["/aʊ/①最常見","/oʊ/②長o","/uː/③長u","/ʌ/④短u"],
            hint: "👶 young，ou 唸 /ʌ/，像短 u！", emoji: "👶", search: "young child" },
          { word: "cow", speak: "cow", displayWord: "cow", answer: "/aʊ/",
            choices: ["/aʊ/","/oʊ/","/uː/","/ʊ/"],
            hint: "🐄 cow，ow 唸 /aʊ/！", emoji: "🐄", search: "cow" }
        ]
      },
      {
        name: "bl 拼音 + t 和 d 碰到 r 的變音",
        rules: [
          "<b>bl 拼音</b>：b + l 快速連唸，例：blue、black、blow、blend、block、bliss",
          "拼音練習：先說 /b/，馬上接 /l/，不要在中間停頓",
          "<b>t 碰到 r 變音</b>：tr 組合中，t 聽起來像 /tʃ/（如 train 聽起來像 chrain）",
          "<b>d 碰到 r 變音</b>：dr 組合中，d 聽起來像 /dʒ/（如 dream 聽起來像 jream）",
          "這是英文的自然連音現象，不是錯誤！"
        ],
        words: [
          { word: "blue",   highlight: "bl", zh: "藍色", emoji: "💙", search: "blue color" },
          { word: "black",  highlight: "bl", zh: "黑色", emoji: "🖤", search: "black color" },
          { word: "blow",   highlight: "bl", zh: "吹", emoji: "💨", search: "blow wind" },
          { word: "blend",  highlight: "bl", zh: "混合", emoji: "🫙", search: "blend mix" },
          { word: "block",  highlight: "bl", zh: "積木/街區", emoji: "🧱", search: "block" },
          { word: "bliss",  highlight: "bl", zh: "極樂", emoji: "😇", search: "bliss happy" },
          { word: "blanket",highlight: "bl", zh: "毯子", emoji: "🛏️", search: "blanket" },
          { word: "blaze",  highlight: "bl", zh: "火焰", emoji: "🔥", search: "blaze fire" },
          { word: "train",  highlight: "tr", zh: "火車（tr→類似ch音）", emoji: "🚂", search: "train" },
          { word: "tree",   highlight: "tr", zh: "樹（tr→類似ch音）", emoji: "🌳", search: "tree" },
          { word: "truck",  highlight: "tr", zh: "卡車（tr→類似ch音）", emoji: "🚛", search: "truck" },
          { word: "dream",  highlight: "dr", zh: "夢（dr→類似j音）", emoji: "💭", search: "dream" },
          { word: "dragon", highlight: "dr", zh: "龍（dr→類似j音）", emoji: "🐉", search: "dragon" },
          { word: "draw",   highlight: "dr", zh: "畫（dr→類似j音）", emoji: "✏️", search: "draw art" },
          { word: "drip",   highlight: "dr", zh: "滴水（dr→類似j音）", emoji: "💧", search: "drip water" }
        ],
        quiz: [
          { word: "blue", speak: "blue", displayWord: "blue", answer: "/bl/",
            choices: ["/b/+停頓+/l/","/bl/","/p/+/l/","/fl/"],
            hint: "💙 blue，bl 要快速連著唸 /bl/！", emoji: "💙", search: "blue color" },
          { word: "black", speak: "black", displayWord: "black", answer: "/bl/",
            choices: ["/b/+停頓+/l/","/bl/","/p/+/l/","/fl/"],
            hint: "🖤 black，bl 快速連唸！", emoji: "🖤", search: "black color" },
          { word: "train", speak: "train", displayWord: "train", answer: "tr→類似/tʃr/",
            choices: ["tr→類似/tʃr/","tr→各自分開唸","tr→/dr/","tr→/str/"],
            hint: "🚂 train，tr 連在一起，t 聽起來像 ch！", emoji: "🚂", search: "train" },
          { word: "dream", speak: "dream", displayWord: "dream", answer: "dr→類似/dʒr/",
            choices: ["dr→類似/dʒr/","dr→各自分開唸","dr→/tr/","dr→/fr/"],
            hint: "💭 dream，dr 連在一起，d 聽起來像 j！", emoji: "💭", search: "dream" }
        ]
      }
    ],
    story: {
      title: "☁️ The Loud Cloud",
      pages: [
        { en: "A young cow in town found a big loud cloud.", zh: "一頭小鎮上的年輕牛找到了一朵大聲的雲。", highlights: ["young","cow","town","found","loud","cloud"] },
        { en: "She blew a blue bubble out of her mouth.", zh: "她從嘴裡吹出一個藍色泡泡。", highlights: ["blew","blue","mouth"] },
        { en: "A dragon flew through the crowd with a dream.", zh: "一條龍帶著夢想飛過人群。", highlights: ["dragon","crowd","dream"] },
        { en: "You can touch the cloud — go on, try it!", zh: "你可以摸摸那朵雲——去吧，試試看！", highlights: ["You","touch","cloud"] }
      ]
    }
  },

  // ─────────────────────────────────────────
  //  LESSON 16
  // ─────────────────────────────────────────
  {
    id: 16,
    title: "au · aw · 懶惰音4 · R-controlled複習",
    emoji: "🌊",
    color: 3,
    topics: [
      {
        name: "au 和 aw 音組",
        rules: [
          "<b>au</b> 和 <b>aw</b> 都唸 /ɔː/（類似「喔」但更開，注音像「ㄛ」）",
          "<b>au</b>：在字的<b>中間</b>，例如：sauce、fault、haunt、cause",
          "<b>aw</b>：在字的<b>結尾</b>或接子音，例如：saw、raw、claw、draw、lawn",
          "外來音組：<b>au</b> 很多來自法語，所以聽起來比較「優雅」",
          "<b>懶惰音規則4</b>：字尾的 -le、-tion、-ous 等都是常見的懶音結尾，整個音節念快念輕"
        ],
        words: [
          { word: "sauce",  highlight: "au", zh: "醬汁（au=/ɔː/）", emoji: "🥫", search: "sauce" },
          { word: "fault",  highlight: "au", zh: "錯誤（au=/ɔː/）", emoji: "❌", search: "fault error" },
          { word: "cause",  highlight: "au", zh: "原因/引起（au=/ɔː/）", emoji: "💡", search: "cause reason" },
          { word: "haunt",  highlight: "au", zh: "鬼魂出沒（au=/ɔː/）", emoji: "👻", search: "haunt ghost" },
          { word: "launch", highlight: "au", zh: "發射/啟動（au=/ɔː/）", emoji: "🚀", search: "launch rocket" },
          { word: "August", highlight: "au", zh: "八月（au=/ɔː/）", emoji: "📅", search: "august calendar" },
          { word: "pause",  highlight: "au", zh: "暫停（au=/ɔː/）", emoji: "⏸️", search: "pause button" },
          { word: "saw",    highlight: "aw", zh: "看見了/鋸子（aw=/ɔː/）", emoji: "🪚", search: "saw tool" },
          { word: "raw",    highlight: "aw", zh: "生的（aw=/ɔː/）", emoji: "🥩", search: "raw meat" },
          { word: "claw",   highlight: "aw", zh: "爪子（aw=/ɔː/）", emoji: "🦞", search: "claw lobster" },
          { word: "draw",   highlight: "aw", zh: "畫（aw=/ɔː/）", emoji: "✏️", search: "draw art" },
          { word: "lawn",   highlight: "aw", zh: "草坪（aw=/ɔː/）", emoji: "🌿", search: "lawn grass" },
          { word: "yawn",   highlight: "aw", zh: "打哈欠（aw=/ɔː/）", emoji: "😪", search: "yawn tired" },
          { word: "crawl",  highlight: "aw", zh: "爬行（aw=/ɔː/）", emoji: "🐛", search: "crawl baby" },
          { word: "straw",  highlight: "aw", zh: "稻草/吸管（aw=/ɔː/）", emoji: "🥤", search: "straw drink" }
        ],
        quiz: [
          { word: "sauce", speak: "sauce", displayWord: "sauce", answer: "/ɔː/",
            choices: ["/aʊ/","/ɔː/","/oʊ/","/æ/"],
            hint: "🥫 sauce，au → /ɔː/！", emoji: "🥫", search: "sauce" },
          { word: "saw", speak: "saw", displayWord: "saw", answer: "/ɔː/",
            choices: ["/aʊ/","/ɔː/","/oʊ/","/æ/"],
            hint: "🪚 saw，aw → /ɔː/！", emoji: "🪚", search: "saw tool" },
          { word: "claw", speak: "claw", displayWord: "claw", answer: "aw（字尾用）",
            choices: ["au（字中用）","aw（字尾用）","oa","ou"],
            hint: "🦞 claw，在字尾用 aw！", emoji: "🦞", search: "claw lobster" },
          { word: "cause", speak: "cause", displayWord: "cause", answer: "au（字中用）",
            choices: ["au（字中用）","aw（字尾用）","oa","ou"],
            hint: "💡 cause，在字中間用 au！", emoji: "💡", search: "cause reason" }
        ]
      },
      {
        name: "R-controlled 複習 + 懶惰音規則4",
        rules: [
          "複習所有 R-controlled 音組：ar=/ɑːr/、or=/ɔːr/、ir=er=ur=/ɜːr/",
          "加上：<b>air</b>=/ɛər/（chair, fair, pair）、<b>ear</b>=/ɪər/（ear, fear, near）",
          "<b>懶惰音規則4</b>：字尾常見懶音結尾（整個音節快速輕唸）：",
          "-tion → /ʃən/（nation, station, action）",
          "-ous → /əs/（famous, nervous, serious）",
          "-ture → /tʃər/（nature, picture, future）"
        ],
        words: [
          { word: "chair",   highlight: "air", zh: "椅子（air=/ɛər/）", emoji: "🪑", search: "chair" },
          { word: "fair",    highlight: "air", zh: "公平/市集（air=/ɛər/）", emoji: "🎡", search: "fair carnival" },
          { word: "pair",    highlight: "air", zh: "一對（air=/ɛər/）", emoji: "👟", search: "pair shoes" },
          { word: "ear",     highlight: "ear", zh: "耳朵（ear=/ɪər/）", emoji: "👂", search: "ear" },
          { word: "fear",    highlight: "ear", zh: "恐懼（ear=/ɪər/）", emoji: "😱", search: "fear scared" },
          { word: "near",    highlight: "ear", zh: "靠近（ear=/ɪər/）", emoji: "📍", search: "near location" },
          { word: "nation",  highlight: "tion", zh: "國家（-tion=/ʃən/）", emoji: "🌍", search: "nation country" },
          { word: "station", highlight: "tion", zh: "車站（-tion=/ʃən/）", emoji: "🚉", search: "station" },
          { word: "action",  highlight: "tion", zh: "行動（-tion=/ʃən/）", emoji: "💥", search: "action" },
          { word: "famous",  highlight: "ous", zh: "著名的（-ous=/əs/）", emoji: "⭐", search: "famous star" },
          { word: "nervous", highlight: "ous", zh: "緊張的（-ous=/əs/）", emoji: "😰", search: "nervous" },
          { word: "nature",  highlight: "ture", zh: "自然（-ture=/tʃər/）", emoji: "🌿", search: "nature" },
          { word: "picture", highlight: "ture", zh: "圖片（-ture=/tʃər/）", emoji: "🖼️", search: "picture" },
          { word: "future",  highlight: "ture", zh: "未來（-ture=/tʃər/）", emoji: "🔮", search: "future" },
          { word: "adventure",highlight:"ture", zh: "冒險（-ture=/tʃər/）", emoji: "🗺️", search: "adventure" }
        ],
        quiz: [
          { word: "chair", speak: "chair", displayWord: "chair", answer: "/ɛər/",
            choices: ["/ɑːr/（ar）","/ɔːr/（or）","/ɜːr/（ir/er/ur）","/ɛər/"],
            hint: "🪑 chair，air → /ɛər/！", emoji: "🪑", search: "chair" },
          { word: "nation", speak: "nation", displayWord: "na-tion", answer: "/ʃən/",
            choices: ["/tɪon/","/ʃən/","/sɪon/","/tiən/"],
            hint: "🌍 nation，-tion 唸 /ʃən/！", emoji: "🌍", search: "nation country" },
          { word: "picture", speak: "picture", displayWord: "pic-ture", answer: "/tʃər/",
            choices: ["/tjʊər/","/tʃər/","/tɪuːr/","/tʌr/"],
            hint: "🖼️ picture，-ture 唸 /tʃər/！", emoji: "🖼️", search: "picture" },
          { word: "famous", speak: "famous", displayWord: "fa-mous", answer: "/əs/",
            choices: ["/ɔːs/","/uːs/","/əs/","/ɪs/"],
            hint: "⭐ famous，-ous 唸輕聲 /əs/！", emoji: "⭐", search: "famous star" }
        ]
      }
    ],
    story: {
      title: "🎡 A Fair in August",
      pages: [
        { en: "In August, a famous fair came to our town.", zh: "八月份，一個著名的市集來到了我們的小鎮。", highlights: ["August","famous","fair","town"] },
        { en: "Near the station, a girl sat in a chair and drew a picture.", zh: "在車站附近，一個女孩坐在椅子上畫圖。", highlights: ["Near","station","chair","picture"] },
        { en: "A claw machine caused quite a pause in the action!", zh: "一台夾娃娃機讓行動暫停了一下！", highlights: ["claw","caused","pause","action"] },
        { en: "The future holds many adventures — don't fear!", zh: "未來充滿許多冒險——不要害怕！", highlights: ["future","adventures","fear"] }
      ]
    }
  },

  // ─────────────────────────────────────────
  //  LESSON 17
  // ─────────────────────────────────────────
  {
    id: 17,
    title: "J字尾規則 · dge/ge · augh · br拼音",
    emoji: "🗡️",
    color: 4,
    topics: [
      {
        name: "J字尾規則 · dge 和 ge",
        rules: [
          "規則：J 不能在英文字的結尾！所以字尾的 /dʒ/ 音改用 <b>dge</b> 或 <b>ge</b>",
          "<b>dge</b>：短母音後面用 dge（就像 ck 一樣）",
          "例：badge、edge、fudge、hedge、lodge、bridge",
          "<b>ge</b>：長母音或其他情況後面用 ge",
          "例：cage、page、huge、stage、age",
          "記憶：dge vs ge，就像 ck vs k 的邏輯一樣！"
        ],
        words: [
          { word: "badge",  highlight: "dge", zh: "徽章（短a+dge）", emoji: "🏅", search: "badge medal" },
          { word: "edge",   highlight: "dge", zh: "邊緣（短e+dge）", emoji: "🔪", search: "edge knife" },
          { word: "fudge",  highlight: "dge", zh: "軟糖（短u+dge）", emoji: "🍫", search: "fudge chocolate" },
          { word: "hedge",  highlight: "dge", zh: "樹籬（短e+dge）", emoji: "🌿", search: "hedge garden" },
          { word: "lodge",  highlight: "dge", zh: "小屋（短o+dge）", emoji: "🏕️", search: "lodge cabin" },
          { word: "bridge", highlight: "dge", zh: "橋（短i+dge）", emoji: "🌉", search: "bridge" },
          { word: "judge",  highlight: "dge", zh: "法官（短u+dge）", emoji: "⚖️", search: "judge court" },
          { word: "stage",  highlight: "ge",  zh: "舞台（長a+ge）", emoji: "🎭", search: "stage theater" },
          { word: "huge",   highlight: "ge",  zh: "巨大（長u+ge）", emoji: "🏔️", search: "huge mountain" },
          { word: "page",   highlight: "ge",  zh: "頁（長a+ge）", emoji: "📄", search: "page book" },
          { word: "cage",   highlight: "ge",  zh: "籠子（長a+ge）", emoji: "🐦", search: "cage" },
          { word: "range",  highlight: "ge",  zh: "範圍（長a+ge）", emoji: "📏", search: "range ruler" },
          { word: "change", highlight: "ge",  zh: "改變（長a+ge）", emoji: "🔄", search: "change" },
          { word: "strange",highlight: "ge",  zh: "奇怪（長a+ge）", emoji: "🤔", search: "strange" },
          { word: "arrange",highlight: "ge",  zh: "安排（長a+ge）", emoji: "📋", search: "arrange organize" }
        ],
        quiz: [
          { word: "badge", speak: "badge", displayWord: "ba__", answer: "dge（短母音後）",
            choices: ["ge（長母音後）","dge（短母音後）","j","ch"],
            hint: "🏅 badge，短母音 a 後面用 dge！", emoji: "🏅", search: "badge medal" },
          { word: "stage", speak: "stage", displayWord: "sta__", answer: "ge（長母音後）",
            choices: ["ge（長母音後）","dge（短母音後）","j","ch"],
            hint: "🎭 stage，長母音 a 後面用 ge！", emoji: "🎭", search: "stage theater" },
          { word: "bridge", speak: "bridge", displayWord: "bri__", answer: "dge（短母音後）",
            choices: ["ge（長母音後）","dge（短母音後）","j","ch"],
            hint: "🌉 bridge，短母音 i 後面用 dge！", emoji: "🌉", search: "bridge" },
          { word: "huge", speak: "huge", displayWord: "hu__", answer: "ge（長母音後）",
            choices: ["ge（長母音後）","dge（短母音後）","j","ch"],
            hint: "🏔️ huge，長母音 u 後面用 ge！", emoji: "🏔️", search: "huge mountain" }
        ]
      },
      {
        name: "augh 音組 + br 拼音",
        rules: [
          "<b>augh</b>：字母 a+u+g+h 組合，gh 不發音，augh 整體唸 /ɔː/",
          "例：caught、taught、daughter、naughty、slaughter",
          "⚠️ 特例：laugh 唸 /æf/（gh 在這裡唸 /f/！）",
          "<b>br 拼音</b>：b + r 快速連唸，例：bread、brown、bridge、bright、brush",
          "拼音練習：先說 /b/，馬上接 /r/，不要停頓"
        ],
        words: [
          { word: "caught",    highlight: "augh", zh: "抓到了（augh=/ɔː/）", emoji: "🫳", search: "caught ball" },
          { word: "taught",    highlight: "augh", zh: "教了（augh=/ɔː/）", emoji: "👩‍🏫", search: "taught teacher" },
          { word: "daughter",  highlight: "augh", zh: "女兒（augh=/ɔː/）", emoji: "👧", search: "daughter girl" },
          { word: "naughty",   highlight: "augh", zh: "頑皮的（augh=/ɔː/）", emoji: "😈", search: "naughty mischief" },
          { word: "laugh",     highlight: "augh", zh: "⚠️笑（augh=/æf/ 特例）", emoji: "😂", search: "laugh" },
          { word: "bread",     highlight: "br",   zh: "麵包（br拼音）", emoji: "🍞", search: "bread" },
          { word: "brown",     highlight: "br",   zh: "棕色（br拼音）", emoji: "🟫", search: "brown color" },
          { word: "bright",    highlight: "br",   zh: "明亮（br拼音）", emoji: "☀️", search: "bright sun" },
          { word: "brush",     highlight: "br",   zh: "刷子（br拼音）", emoji: "🖌️", search: "brush paint" },
          { word: "brave",     highlight: "br",   zh: "勇敢（br拼音）", emoji: "🦁", search: "brave lion" },
          { word: "branch",    highlight: "br",   zh: "樹枝（br拼音）", emoji: "🌿", search: "branch tree" },
          { word: "breathe",   highlight: "br",   zh: "呼吸（br拼音）", emoji: "💨", search: "breathe air" },
          { word: "broken",    highlight: "br",   zh: "破碎的（br拼音）", emoji: "💔", search: "broken heart" },
          { word: "broom",     highlight: "br",   zh: "掃帚（br拼音）", emoji: "🧹", search: "broom sweep" },
          { word: "breakfast", highlight: "br",   zh: "早餐（br拼音）", emoji: "🍳", search: "breakfast" }
        ],
        quiz: [
          { word: "caught", speak: "caught", displayWord: "caught", answer: "/ɔː/",
            choices: ["/aʊ/","/ɔː/","/æf/","/ɑːt/"],
            hint: "🫳 caught，augh → /ɔː/！", emoji: "🫳", search: "caught ball" },
          { word: "laugh", speak: "laugh", displayWord: "laugh", answer: "/æf/（特例）",
            choices: ["/ɔː/（一般augh）","/æf/（特例）","/lɔː/","/lɑːf/"],
            hint: "😂 laugh，這個 augh 特例唸 /æf/！", emoji: "😂", search: "laugh" },
          { word: "bread", speak: "bread", displayWord: "bread", answer: "/br/",
            choices: ["/b/+停頓+/r/","/br/","/pr/","/dr/"],
            hint: "🍞 bread，br 快速連唸 /br/！", emoji: "🍞", search: "bread" },
          { word: "bright", speak: "bright", displayWord: "bright", answer: "/br/+/aɪ/",
            choices: ["/b/+/r/+/ɪ/","/br/+/aɪ/","/pr/+/aɪ/","/fr/+/aɪ/"],
            hint: "☀️ bright = br(/br/) + ight(/aɪ/)！", emoji: "☀️", search: "bright sun" }
        ]
      }
    ],
    story: {
      title: "🌉 The Brave Judge on the Bridge",
      pages: [
        { en: "A brave judge stood on a huge bridge.", zh: "一位勇敢的法官站在一座巨大的橋上。", highlights: ["brave","judge","huge","bridge"] },
        { en: "She caught a naughty daughter eating fudge on the edge.", zh: "她抓到一個頑皮的女兒在邊緣吃軟糖。", highlights: ["caught","naughty","daughter","fudge","edge"] },
        { en: "The daughter began to laugh and change her stage.", zh: "女兒開始笑，並改變了她的舞台。", highlights: ["laugh","change","stage"] },
        { en: "The bright brown bread was the real prize!", zh: "那個明亮的棕色麵包才是真正的獎品！", highlights: ["bright","brown","bread"] }
      ]
    }
  }

]; // end LESSONS
