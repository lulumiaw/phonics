// ═══════════════════════════════════════════
//  DATA
// ═══════════════════════════════════════════

const LESSONS = [
  {
    id: 1,
    title: "字母與發音入門",
    emoji: "🔤",
    color: 0,
    topics: [
      {
        name: "短母音 Short Vowels",
        rules: [
          "英文有 5 個母音字母：a, e, i, o, u",
          "短母音唸法：<b>a</b>=/æ/（ㄟ短，嘴巴大開），<b>e</b>=/ɛ/（ㄝ），<b>i</b>=/ɪ/（ㄧ短），<b>o</b>=/ɑ/（ㄚ），<b>u</b>=/ʌ/（ㄚ短）",
          "🔒 <b>閉音節</b>（唸短音）：字以【子音】結尾，把母音「關住」→ 唸短音。例：c<u>a</u>t、b<u>e</u>d、b<u>i</u>g、d<u>o</u>g、c<u>u</u>p",
          "🔓 <b>開音節</b>（唸長音）：字以【母音】結尾，母音在最後「自由開放」→ 唸長音（自己的名字）。例：g<u>o</u>、m<u>e</u>、h<u>i</u>",
          "記憶訣：閉音節像把母音關在房子裡（後面有子音），開音節像讓母音走出門口（後面沒子音）！"
        ],
        words: [
          { word: "cat",  syllable: "cat", highlight: "a", zh: "貓 🔒閉音節", emoji: "🐱", search: "cat animal" },
          { word: "bed",  syllable: "bed", highlight: "e", zh: "床 🔒閉音節", emoji: "🛏️", search: "bed furniture" },
          { word: "big",  syllable: "big", highlight: "i", zh: "大的 🔒閉音節", emoji: "🏔️", search: "mountain big" },
          { word: "dog",  syllable: "dog", highlight: "o", zh: "狗 🔒閉音節", emoji: "🐶", search: "dog puppy" },
          { word: "cup",  syllable: "cup", highlight: "u", zh: "杯子 🔒閉音節", emoji: "☕", search: "cup mug" },
          { word: "hat",  syllable: "hat", highlight: "a", zh: "帽子 🔒閉音節", emoji: "🎩", search: "hat" },
          { word: "jet",  syllable: "jet", highlight: "e", zh: "噴射機 🔒閉音節", emoji: "✈️", search: "jet airplane" },
          { word: "sit",  syllable: "sit", highlight: "i", zh: "坐 🔒閉音節", emoji: "🪑", search: "chair sit" },
          { word: "mop",  syllable: "mop", highlight: "o", zh: "拖把 🔒閉音節", emoji: "🧹", search: "mop cleaning" },
          { word: "run",  syllable: "run", highlight: "u", zh: "跑 🔒閉音節", emoji: "🏃", search: "running" },
          { word: "map",  syllable: "map", highlight: "a", zh: "地圖 🔒閉音節", emoji: "🗺️", search: "map" },
          { word: "net",  syllable: "net", highlight: "e", zh: "網子 🔒閉音節", emoji: "🥅", search: "net goal" },
          { word: "lip",  syllable: "lip", highlight: "i", zh: "嘴唇 🔒閉音節", emoji: "💋", search: "lip mouth" },
          { word: "box",  syllable: "box", highlight: "o", zh: "箱子 🔒閉音節", emoji: "📦", search: "box cardboard" },
          { word: "bug",  syllable: "bug", highlight: "u", zh: "蟲子 🔒閉音節", emoji: "🐛", search: "bug insect" }
        ],
        quiz: [
          { word: "cat", speak: "cat", displayWord: "c _ t", answer: "a", choices: ["a","e","i","o"],
            type: "fill", hint: "🐱 這個字是「貓」！", emoji: "🐱", search: "cat animal" },
          { word: "bed", speak: "bed", displayWord: "b _ d", answer: "e", choices: ["a","e","i","o"],
            type: "fill", hint: "🛏️ 這個字是「床」！", emoji: "🛏️", search: "bed furniture" },
          { word: "dog", speak: "dog", displayWord: "d _ g", answer: "o", choices: ["a","o","u","e"],
            type: "fill", hint: "🐶 這個字是「狗」！", emoji: "🐶", search: "dog puppy" },
          { word: "cup", speak: "cup", displayWord: "c _ p", answer: "u", choices: ["a","e","i","u"],
            type: "fill", hint: "☕ 這個字是「杯子」！", emoji: "☕", search: "cup mug" },
          { word: "sit", speak: "sit", displayWord: "s _ t", answer: "i", choices: ["a","e","i","o"],
            type: "fill", hint: "🪑 這個動作是「坐」！", emoji: "🪑", search: "chair sit" }
        ]
      },
      {
        name: "有聲 vs 無聲子音",
        rules: [
          "有聲子音：聲帶振動，例如 /b/, /d/, /g/, /v/, /z/（摸喉嚨有震動！）",
          "無聲子音：聲帶不振動，例如 /p/, /t/, /k/, /f/, /s/（摸喉嚨沒震動）",
          "成對比較：b↔p、d↔t、g↔k、v↔f、z↔s — 嘴型一樣，只差有沒有聲音",
          "試試看：說 /b/ 時嘴唇碰在一起「爆破」，說 /p/ 一樣但沒聲音"
        ],
        words: [
          { word: "pat",  highlight: "p", zh: "輕拍（無聲p）", emoji: "👋", search: "hand wave" },
          { word: "bat",  highlight: "b", zh: "球棒（有聲b）", emoji: "🦇", search: "bat" },
          { word: "ten",  highlight: "t", zh: "十（無聲t）", emoji: "🔟", search: "number ten" },
          { word: "dot",  highlight: "d", zh: "點（有聲d）", emoji: "🔵", search: "blue dot circle" },
          { word: "cap",  highlight: "c", zh: "帽子（無聲k）", emoji: "🧢", search: "baseball cap" },
          { word: "gap",  highlight: "g", zh: "縫隙（有聲g）", emoji: "🪨", search: "rock crack" },
          { word: "fan",  highlight: "f", zh: "電風扇（無聲f）", emoji: "🌀", search: "fan electric" },
          { word: "van",  highlight: "v", zh: "廂型車（有聲v）", emoji: "🚐", search: "van vehicle" },
          { word: "sun",  highlight: "s", zh: "太陽（無聲s）", emoji: "☀️", search: "sun sunshine" },
          { word: "zip",  highlight: "z", zh: "拉鍊（有聲z）", emoji: "🔐", search: "zipper zip" },
          { word: "pig",  highlight: "p", zh: "豬（無聲p）", emoji: "🐷", search: "pig" },
          { word: "dig",  highlight: "d", zh: "挖（有聲d）", emoji: "⛏️", search: "digging shovel" },
          { word: "tip",  highlight: "t", zh: "頂端（無聲t）", emoji: "🔺", search: "tip point" },
          { word: "cot",  highlight: "c", zh: "小床（無聲k）", emoji: "🛏️", search: "cot bed" },
          { word: "vat",  highlight: "v", zh: "大桶（有聲v）", emoji: "🪣", search: "bucket vat" }
        ],
        quiz: [
          { word: "bat", speak: "bat", displayWord: "bat", answer: "有聲 b", choices: ["有聲 b","無聲 p","有聲 d","無聲 t"],
            type: "choose", hint: "🦇 bat（球棒），b 有聲帶震動！", emoji: "🦇", search: "bat" },
          { word: "pat", speak: "pat", displayWord: "pat", answer: "無聲 p", choices: ["有聲 b","無聲 p","有聲 g","無聲 k"],
            type: "choose", hint: "👋 pat（輕拍），p 沒有聲帶震動！", emoji: "👋", search: "hand wave" },
          { word: "fan", speak: "fan", displayWord: "fan", answer: "無聲 f", choices: ["有聲 v","無聲 f","有聲 z","無聲 s"],
            type: "choose", hint: "🌀 fan（風扇），f 沒有聲帶震動！", emoji: "🌀", search: "fan electric" },
          { word: "van", speak: "van", displayWord: "van", answer: "有聲 v", choices: ["有聲 v","無聲 f","有聲 b","無聲 p"],
            type: "choose", hint: "🚐 van（廂型車），v 有聲帶震動！", emoji: "🚐", search: "van vehicle" }
        ]
      },
      {
        name: "字母名稱 Letter Names (A–Z)",
        rules: [
          "每個字母有兩種身份：<b>字母名稱</b>（背 ABC 時唸的）和<b>字母發音</b>（拼字時唸的）",
          "例如：字母 <b>A</b> 的名稱唸「/eɪ/」，但發音是「/æ/」（短母音）",
          "字母 <b>B</b> 名稱唸「/biː/」，發音是「/b/」（爆破音）",
          "母音字母（A E I O U）：名稱就是它們的<b>長音</b>！A=/eɪ/、E=/iː/、I=/aɪ/、O=/oʊ/、U=/juː/",
          "子音字母名稱和發音不同，拼字時要用<b>發音</b>，不能用名稱！"
        ],
        words: [
          { word: "ape",   highlight: "a", zh: "猿猴（A的長音/eɪ/開頭）", emoji: "🦧", search: "ape monkey" },
          { word: "eat",   highlight: "e", zh: "吃（E的長音/iː/開頭）", emoji: "🍽️", search: "eating food" },
          { word: "ice",   highlight: "i", zh: "冰（I的長音/aɪ/開頭）", emoji: "🧊", search: "ice cube" },
          { word: "open",  highlight: "o", zh: "開（O的長音/oʊ/開頭）", emoji: "🚪", search: "open door" },
          { word: "unit",  highlight: "u", zh: "單位（U的長音/juː/開頭）", emoji: "📐", search: "ruler unit" },
          { word: "ace",   highlight: "a", zh: "王牌（長a）", emoji: "🃏", search: "ace card" },
          { word: "even",  highlight: "e", zh: "偶數/甚至（長e）", emoji: "2️⃣", search: "even number" },
          { word: "ivy",   highlight: "i", zh: "常春藤（長i）", emoji: "🌿", search: "ivy plant" },
          { word: "obey",  highlight: "o", zh: "遵從（長o）", emoji: "🙏", search: "obey follow" },
          { word: "use",   highlight: "u", zh: "使用（長u）", emoji: "🔧", search: "use tool" },
          { word: "ant",   highlight: "a", zh: "螞蟻（A的短音）", emoji: "🐜", search: "ant" },
          { word: "egg",   highlight: "e", zh: "蛋（E的短音）", emoji: "🥚", search: "egg" },
          { word: "in",    highlight: "i", zh: "在裡面（I的短音）", emoji: "📦", search: "inside box" },
          { word: "ox",    highlight: "o", zh: "公牛（O的短音）", emoji: "🐂", search: "ox bull" },
          { word: "up",    highlight: "u", zh: "往上（U的短音）", emoji: "⬆️", search: "up arrow" }
        ],
        quiz: [
          { word: "ace", speak: "ace", displayWord: "ace", answer: "長音 /eɪ/", choices: ["短音 /æ/","長音 /eɪ/","懶音 /ə/","不發音"],
            type: "choose", hint: "🃏 ace，A 開頭唸 A 的名字 /eɪ/！", emoji: "🃏", search: "ace card" },
          { word: "ant", speak: "ant", displayWord: "ant", answer: "短音 /æ/", choices: ["短音 /æ/","長音 /eɪ/","懶音 /ə/","不發音"],
            type: "choose", hint: "🐜 ant，a 在閉音節唸短音 /æ/！", emoji: "🐜", search: "ant" },
          { word: "ice", speak: "ice", displayWord: "ice", answer: "長音 /aɪ/", choices: ["短音 /ɪ/","長音 /aɪ/","懶音 /ə/","不發音"],
            type: "choose", hint: "🧊 ice，I 開頭唸 I 的名字 /aɪ/！", emoji: "🧊", search: "ice cube" },
          { word: "egg", speak: "egg", displayWord: "egg", answer: "短音 /ɛ/", choices: ["短音 /ɛ/","長音 /iː/","懶音 /ə/","不發音"],
            type: "choose", hint: "🥚 egg，e 在閉音節唸短音 /ɛ/！", emoji: "🥚", search: "egg" },
          { word: "open", speak: "open", displayWord: "open", answer: "長音 /oʊ/", choices: ["短音 /ɑ/","長音 /oʊ/","懶音 /ə/","不發音"],
            type: "choose", hint: "🚪 open，O 開頭唸 O 的名字 /oʊ/！", emoji: "🚪", search: "open door" }
        ]
      }
    ],
    story: {
      title: "🐱 The Big Cat",
      pages: [
        { en: "The big cat sat on a mat.", zh: "大貓坐在墊子上。", highlights: ["big","cat","sat","mat"] },
        { en: "The cat had a red hat.", zh: "那隻貓戴著紅帽子。", highlights: ["cat","hat"] },
        { en: "The dog ran to the bed.", zh: "狗跑向床。", highlights: ["dog","bed"] },
        { en: "The cat and the dog sat and ate.", zh: "貓和狗坐下來吃東西。", highlights: ["cat","dog","sat"] }
      ]
    }
  },
  {
    id: 2,
    title: "音節 · ck音組",
    emoji: "📚",
    color: 1,
    topics: [
      {
        name: "數音節 Syllables",
        rules: [
          "一個<b>母音發音</b>（不是母音字母）= 一個音節",
          "數音節方法：手放下巴下，唸單字時下巴往下動幾次 = 幾個音節",
          "🔒 <b>閉音節斷法（VC-CV）</b>：兩個子音夾在中間，從中間切開。例：rab-bit、kit-ten、but-ton",
          "🔓 <b>開音節斷法（V-CV）</b>：一個子音夾在兩母音之間，切在子音前面。例：ba-by、ti-ger、o-pen",
          "音節分割符號用「-」表示斷點"
        ],
        wordGroups: [
          {
            groupLabel: "✅ 規則例 — 照規則來的",
            groupNote: "這些字完全按照閉音節或開音節規則斷開，沒有例外！",
            groupColor: "#edfff0",
            groupBorder: "#6bcb77",
            words: [
              { word: "cat",       syllable: "cat",         syllableCount: 1, highlight: "a", zh: "貓 ①1音節", emoji: "🐱", search: "cat" },
              { word: "fish",      syllable: "fish",        syllableCount: 1, highlight: "i", zh: "魚 ①1音節", emoji: "🐟", search: "fish" },
              { word: "drum",      syllable: "drum",        syllableCount: 1, highlight: "u", zh: "鼓 ①1音節", emoji: "🥁", search: "drum" },
              { word: "rabbit",    syllable: "rab-bit",     syllableCount: 2, highlight: "a", zh: "兔子 ②rab+bit（閉+閉）", emoji: "🐰", search: "rabbit" },
              { word: "kitten",    syllable: "kit-ten",     syllableCount: 2, highlight: "i", zh: "小貓 ②kit+ten（閉+閉）", emoji: "🐱", search: "kitten" },
              { word: "button",    syllable: "but-ton",     syllableCount: 2, highlight: "u", zh: "按鈕 ②but+ton（閉+閉）", emoji: "🔘", search: "button" },
              { word: "basket",    syllable: "bas-ket",     syllableCount: 2, highlight: "a", zh: "籃子 ②bas+ket（閉+閉）", emoji: "🧺", search: "basket" },
              { word: "picnic",    syllable: "pic-nic",     syllableCount: 2, highlight: "i", zh: "野餐 ②pic+nic（閉+閉）", emoji: "🧺", search: "picnic" },
              { word: "mitten",    syllable: "mit-ten",     syllableCount: 2, highlight: "i", zh: "手套 ②mit+ten（閉+閉）", emoji: "🧤", search: "mitten glove" },
              { word: "robot",     syllable: "ro-bot",      syllableCount: 2, highlight: "o", zh: "機器人 ②ro+bot（開+閉）", emoji: "🤖", search: "robot" },
              { word: "music",     syllable: "mu-sic",      syllableCount: 2, highlight: "u", zh: "音樂 ②mu+sic（開+閉）", emoji: "🎵", search: "music" },
              { word: "sunset",    syllable: "sun-set",     syllableCount: 2, highlight: "u", zh: "日落 ②sun+set（閉+閉）", emoji: "🌇", search: "sunset" },
              { word: "napkin",    syllable: "nap-kin",     syllableCount: 2, highlight: "a", zh: "餐巾 ②nap+kin（閉+閉）", emoji: "🍽️", search: "napkin" },
              { word: "banana",    syllable: "ba-na-na",    syllableCount: 3, highlight: "a", zh: "香蕉 ③ba+na+na（開+開+開）", emoji: "🍌", search: "banana" },
              { word: "butterfly", syllable: "but-ter-fly", syllableCount: 3, highlight: "u", zh: "蝴蝶 ③but+ter+fly", emoji: "🦋", search: "butterfly" }
            ]
          },
          {
            groupLabel: "⚠️ 特例 — 需要特別記憶",
            groupNote: "這些字有特殊發音，不完全按規則走。不用擔心，先認識它們就好！",
            groupColor: "#fff8e6",
            groupBorder: "#ffd93d",
            words: [
              {
                word: "apple",  syllable: "ap-ple", syllableCount: 2, highlight: "a",
                zh: "蘋果 ②ap+ple", emoji: "🍎", search: "apple",
                note: "⚠️ -le 結尾：子音+le 算一個音節，如 ap-ple、ta-ble、puz-zle"
              },
              {
                word: "table",  syllable: "ta-ble", syllableCount: 2, highlight: "a",
                zh: "桌子 ②ta+ble", emoji: "🪑", search: "table",
                note: "⚠️ -le 結尾：ta- 是開音節，a 唸長音 /eɪ/"
              },
              {
                word: "lemon",  syllable: "lem-on", syllableCount: 2, highlight: "o",
                zh: "檸檬 ②lem+on", emoji: "🍋", search: "lemon",
                note: "⚠️ 懶惰音：第二音節 -on 的 o 唸懶音 /ə/（不唸短音），因為它在非重音節"
              },
              {
                word: "open",   syllable: "o-pen",  syllableCount: 2, highlight: "o",
                zh: "開的 ②o+pen", emoji: "🚪", search: "open door",
                note: "✅ 開音節：o- 是開音節，o 唸長音 /oʊ/；-pen 是閉音節，e 唸短音"
              },
              {
                word: "elephant", syllable: "el-e-phant", syllableCount: 3, highlight: "e",
                zh: "大象 ③el+e+phant", emoji: "🐘", search: "elephant",
                note: "⚠️ 兩個特例：① ph 唸 /f/（不是 p+h）② 第二音節 -e- 唸懶音 /ə/"
              },
              {
                word: "camera", syllable: "cam-er-a", syllableCount: 3, highlight: "a",
                zh: "相機 ③cam+er+a", emoji: "📷", search: "camera",
                note: "⚠️ 結尾 -a 唸懶音 /ə/（不唸長音）。常見字尾 -a 都唸懶音，如 sofa、panda"
              }
            ]
          }
        ],
        // keep flat words array for quiz (only regular examples)
        words: [
          { word: "cat",       syllable: "cat",         syllableCount: 1, highlight: "a", zh: "貓 ①1音節", emoji: "🐱", search: "cat" },
          { word: "fish",      syllable: "fish",        syllableCount: 1, highlight: "i", zh: "魚 ①1音節", emoji: "🐟", search: "fish" },
          { word: "drum",      syllable: "drum",        syllableCount: 1, highlight: "u", zh: "鼓 ①1音節", emoji: "🥁", search: "drum" },
          { word: "rabbit",    syllable: "rab-bit",     syllableCount: 2, highlight: "a", zh: "兔子 ②rab+bit", emoji: "🐰", search: "rabbit" },
          { word: "kitten",    syllable: "kit-ten",     syllableCount: 2, highlight: "i", zh: "小貓 ②kit+ten", emoji: "🐱", search: "kitten" },
          { word: "button",    syllable: "but-ton",     syllableCount: 2, highlight: "u", zh: "按鈕 ②but+ton", emoji: "🔘", search: "button" },
          { word: "basket",    syllable: "bas-ket",     syllableCount: 2, highlight: "a", zh: "籃子 ②bas+ket", emoji: "🧺", search: "basket" },
          { word: "picnic",    syllable: "pic-nic",     syllableCount: 2, highlight: "i", zh: "野餐 ②pic+nic", emoji: "🧺", search: "picnic" },
          { word: "mitten",    syllable: "mit-ten",     syllableCount: 2, highlight: "i", zh: "手套 ②mit+ten", emoji: "🧤", search: "mitten glove" },
          { word: "robot",     syllable: "ro-bot",      syllableCount: 2, highlight: "o", zh: "機器人 ②ro+bot", emoji: "🤖", search: "robot" },
          { word: "music",     syllable: "mu-sic",      syllableCount: 2, highlight: "u", zh: "音樂 ②mu+sic", emoji: "🎵", search: "music" },
          { word: "sunset",    syllable: "sun-set",     syllableCount: 2, highlight: "u", zh: "日落 ②sun+set", emoji: "🌇", search: "sunset" },
          { word: "napkin",    syllable: "nap-kin",     syllableCount: 2, highlight: "a", zh: "餐巾 ②nap+kin", emoji: "🍽️", search: "napkin" },
          { word: "banana",    syllable: "ba-na-na",    syllableCount: 3, highlight: "a", zh: "香蕉 ③ba+na+na", emoji: "🍌", search: "banana" },
          { word: "butterfly", syllable: "but-ter-fly", syllableCount: 3, highlight: "u", zh: "蝴蝶 ③but+ter+fly", emoji: "🦋", search: "butterfly" }
        ],
        quiz: [
          { word: "rabbit", speak: "rabbit", displayWord: "rab-bit", answer: "2個", choices: ["1個","2個","3個","4個"],
            type: "choose", hint: "🐰 rabbit = rab + bit，下巴動兩次！", emoji: "🐰", search: "rabbit" },
          { word: "banana", speak: "banana", displayWord: "ba-na-na", answer: "3個", choices: ["1個","2個","3個","4個"],
            type: "choose", hint: "🍌 banana = ba + na + na，下巴動三次！", emoji: "🍌", search: "banana" },
          { word: "basket", speak: "basket", displayWord: "bas-ket", answer: "2個", choices: ["1個","2個","3個","4個"],
            type: "choose", hint: "🧺 basket = bas + ket，下巴動兩次！", emoji: "🧺", search: "basket" },
          { word: "butterfly", speak: "butterfly", displayWord: "but-ter-fly", answer: "3個", choices: ["1個","2個","3個","4個"],
            type: "choose", hint: "🦋 butterfly = but + ter + fly，下巴動三次！", emoji: "🦋", search: "butterfly" }
        ]
      },
      {
        name: "ck 音組規則",
        rules: [
          "ck 唸 /k/ 的聲音（跟 k 一樣）",
          "規則：<b>短母音</b>後面直接接 ck（一個音節的字）",
          "例如：du<u>ck</u>、so<u>ck</u>、ba<u>ck</u>、ki<u>ck</u>、lo<u>ck</u>",
          "長母音或母音組合後<b>不用 ck</b>，用 k 或 ke（例：bike, make）",
          "記憶口訣：短母音後面 ck 跟著跑，長母音後面 ck 不要來！"
        ],
        words: [
          { word: "duck",  highlight: "ck", zh: "鴨子 🔒短u+ck", emoji: "🦆", search: "duck" },
          { word: "sock",  highlight: "ck", zh: "襪子 🔒短o+ck", emoji: "🧦", search: "sock" },
          { word: "back",  highlight: "ck", zh: "背/後面 🔒短a+ck", emoji: "🎒", search: "backpack" },
          { word: "kick",  highlight: "ck", zh: "踢 🔒短i+ck", emoji: "🦵", search: "kick soccer" },
          { word: "lock",  highlight: "ck", zh: "鎖 🔒短o+ck", emoji: "🔒", search: "lock" },
          { word: "neck",  highlight: "ck", zh: "脖子 🔒短e+ck", emoji: "🦒", search: "giraffe" },
          { word: "truck", highlight: "ck", zh: "卡車 🔒短u+ck", emoji: "🚛", search: "truck" },
          { word: "black", highlight: "ck", zh: "黑色 🔒短a+ck", emoji: "🖤", search: "black color" },
          { word: "clock", highlight: "ck", zh: "時鐘 🔒短o+ck", emoji: "🕐", search: "clock" },
          { word: "stick", highlight: "ck", zh: "棍子 🔒短i+ck", emoji: "🥢", search: "stick wood" },
          { word: "brick", highlight: "ck", zh: "磚塊 🔒短i+ck", emoji: "🧱", search: "brick wall" },
          { word: "snack", highlight: "ck", zh: "點心 🔒短a+ck", emoji: "🍪", search: "snack cookie" },
          { word: "check", highlight: "ck", zh: "確認 🔒短e+ck", emoji: "✅", search: "check mark" },
          { word: "block", highlight: "ck", zh: "積木 🔒短o+ck", emoji: "🟫", search: "wood block" },
          { word: "track", highlight: "ck", zh: "軌道 🔒短a+ck", emoji: "🛤️", search: "train track" }
        ],
        quiz: [
          { word: "duck", speak: "duck", displayWord: "du__", answer: "ck", choices: ["k","ck","c","cc"],
            type: "fill", hint: "🦆 duck（鴨子），短母音 u 後面用 ck！", emoji: "🦆", search: "duck" },
          { word: "sock", speak: "sock", displayWord: "so__", answer: "ck", choices: ["k","ck","c","ke"],
            type: "fill", hint: "🧦 sock（襪子），短母音 o 後面用 ck！", emoji: "🧦", search: "sock" },
          { word: "kick", speak: "kick", displayWord: "ki__", answer: "ck", choices: ["k","ck","c","kk"],
            type: "fill", hint: "🦵 kick（踢），短母音 i 後面用 ck！", emoji: "🦵", search: "kick soccer" },
          { word: "neck", speak: "neck", displayWord: "ne__", answer: "ck", choices: ["k","ck","c","ke"],
            type: "fill", hint: "🦒 neck（脖子），短母音 e 後面用 ck！", emoji: "🦒", search: "giraffe" }
        ]
      },
      {
        name: "Short a 拼讀練習",
        rules: [
          "Short a = /æ/，嘴巴大開，像被嚇到的樣子",
          "典型模式：子音 + a + 子音 → 閉音節，a 唸短音",
          "常見字族（word families）：-at（cat, bat, hat, mat, rat）、-an（can, man, pan, ran）、-ap（cap, map, nap, tap）",
          "字族練習：先記住字尾，再換字首，快速認識新字！"
        ],
        words: [
          { word: "cat",  highlight: "a", zh: "貓 -at字族", emoji: "🐱", search: "cat" },
          { word: "bat",  highlight: "a", zh: "球棒 -at字族", emoji: "🦇", search: "bat" },
          { word: "hat",  highlight: "a", zh: "帽子 -at字族", emoji: "🎩", search: "hat" },
          { word: "mat",  highlight: "a", zh: "墊子 -at字族", emoji: "🟫", search: "mat floor" },
          { word: "rat",  highlight: "a", zh: "老鼠 -at字族", emoji: "🐀", search: "rat mouse" },
          { word: "can",  highlight: "a", zh: "罐子/能夠 -an字族", emoji: "🥫", search: "can tin" },
          { word: "man",  highlight: "a", zh: "男人 -an字族", emoji: "👨", search: "man person" },
          { word: "pan",  highlight: "a", zh: "平底鍋 -an字族", emoji: "🍳", search: "pan frying" },
          { word: "ran",  highlight: "a", zh: "跑了（run的過去式）-an字族", emoji: "🏃", search: "running" },
          { word: "fan",  highlight: "a", zh: "風扇/粉絲 -an字族", emoji: "🌀", search: "fan" },
          { word: "cap",  highlight: "a", zh: "帽子 -ap字族", emoji: "🧢", search: "baseball cap" },
          { word: "map",  highlight: "a", zh: "地圖 -ap字族", emoji: "🗺️", search: "map" },
          { word: "nap",  highlight: "a", zh: "小睡 -ap字族", emoji: "😴", search: "sleeping nap" },
          { word: "tap",  highlight: "a", zh: "輕敲/水龍頭 -ap字族", emoji: "🚿", search: "faucet tap" },
          { word: "bag",  highlight: "a", zh: "袋子 -ag字族", emoji: "👜", search: "bag handbag" }
        ],
        quiz: [
          { word: "cat", speak: "cat", displayWord: "c _ t", answer: "a", choices: ["a","e","i","o"],
            type: "fill", hint: "🐱 cat，閉音節，a 唸短音 /æ/！", emoji: "🐱", search: "cat" },
          { word: "pan", speak: "pan", displayWord: "p _ n", answer: "a", choices: ["a","e","i","u"],
            type: "fill", hint: "🍳 pan（平底鍋），a 唸短音 /æ/！", emoji: "🍳", search: "pan frying" },
          { word: "map", speak: "map", displayWord: "m _ p", answer: "a", choices: ["a","o","u","e"],
            type: "fill", hint: "🗺️ map（地圖），a 唸短音 /æ/！", emoji: "🗺️", search: "map" },
          { word: "bat", speak: "bat", displayWord: "b _ t", answer: "a", choices: ["a","e","i","o"],
            type: "fill", hint: "🦇 bat（球棒），a 唸短音 /æ/！", emoji: "🦇", search: "bat" }
        ]
      }
    ],
    story: {
      title: "🦆 Duck and the Sock",
      pages: [
        { en: "Duck has a big sock.", zh: "鴨子有一隻大襪子。", highlights: ["Duck","big","sock"] },
        { en: "The sock is on the back of the duck.", zh: "那隻襪子在鴨子的背上。", highlights: ["sock","back","duck"] },
        { en: "Duck sat on a rock.", zh: "鴨子坐在一塊石頭上。", highlights: ["Duck","sat","rock"] },
        { en: "Duck did not drop the sock!", zh: "鴨子沒有讓襪子掉下來！", highlights: ["Duck","sock"] }
      ]
    }
  },
  {
    id: 3,
    title: "Open Syllable · qu音組",
    emoji: "🔓",
    color: 2,
    topics: [
      {
        name: "開音節 Open Syllable",
        rules: [
          "開音節：字（或音節）以母音結尾，母音唸長音",
          "例如：go（長o）、me（長e）、hi（長i）、she（長e）",
          "一個字的字首是 c 或 k 時用哪個？：母音是 a/o/u 前用 c（如 cat, cup），母音是 e/i/y 前用 k（如 keep, kit）",
          "短母音 short o：hat, van, can, bad, map"
        ],
        words: [
          { word: "go",    highlight: "o",  zh: "去（長o 開音節）", emoji: "🚶", search: "go walk" },
          { word: "me",    highlight: "e",  zh: "我（長e 開音節）", emoji: "🙋", search: "person pointing" },
          { word: "hi",    highlight: "i",  zh: "嗨（長i 開音節）", emoji: "👋", search: "wave hello" },
          { word: "she",   highlight: "e",  zh: "她（長e 開音節）", emoji: "👧", search: "girl" },
          { word: "no",    highlight: "o",  zh: "不（長o 開音節）", emoji: "🚫", search: "no sign" },
          { word: "we",    highlight: "e",  zh: "我們（長e 開音節）", emoji: "👫", search: "friends together" },
          { word: "be",    highlight: "e",  zh: "是/存在（長e 開音節）", emoji: "✨", search: "exist star" },
          { word: "he",    highlight: "e",  zh: "他（長e 開音節）", emoji: "👦", search: "boy" },
          { word: "so",    highlight: "o",  zh: "所以（長o 開音節）", emoji: "💡", search: "idea light bulb" },
          { word: "by",    highlight: "y",  zh: "旁邊/被（長i y結尾）", emoji: "📍", search: "location pin" },
          { word: "my",    highlight: "y",  zh: "我的（長i y結尾）", emoji: "💼", search: "my belongings" },
          { word: "fly",   highlight: "y",  zh: "飛（長i y結尾）", emoji: "🦅", search: "eagle fly" },
          { word: "try",   highlight: "y",  zh: "試試（長i y結尾）", emoji: "💪", search: "try effort" },
          { word: "sky",   highlight: "y",  zh: "天空（長i y結尾）", emoji: "🌤️", search: "sky blue" },
          { word: "dry",   highlight: "y",  zh: "乾的（長i y結尾）", emoji: "🏜️", search: "desert dry" }
        ],
        quiz: [
          { word: "go", speak: "go", displayWord: "go", answer: "長音 /oʊ/", choices: ["短音 /ɑ/","長音 /oʊ/","懶音 /ə/","不發音"],
            type: "choose", hint: "🚶 go，o 結尾是開音節，唸長音！", emoji: "🚶", search: "go walk" },
          { word: "me", speak: "me", displayWord: "me", answer: "長音 /iː/", choices: ["短音 /ɛ/","長音 /iː/","懶音 /ə/","不發音"],
            type: "choose", hint: "🙋 me，e 結尾是開音節，唸長音！", emoji: "🙋", search: "person pointing" },
          { word: "fly", speak: "fly", displayWord: "fly", answer: "長音 /aɪ/", choices: ["短音 /ɪ/","長音 /aɪ/","懶音 /ə/","/y/"],
            type: "choose", hint: "🦅 fly，字尾 y 唸長 i /aɪ/！", emoji: "🦅", search: "eagle fly" },
          { word: "sky", speak: "sky", displayWord: "sky", answer: "長音 /aɪ/", choices: ["短音 /ɪ/","長音 /aɪ/","懶音 /ə/","/y/"],
            type: "choose", hint: "🌤️ sky，字尾 y 唸長 i /aɪ/！", emoji: "🌤️", search: "sky blue" }
        ]
      },
      {
        name: "qu 音組",
        rules: [
          "qu 在英文中永遠一起出現，單獨的 q 不存在",
          "qu 唸 /kw/ 的聲音",
          "例如：queen, quit, quick, quack",
          "記憶口訣：q 的好朋友是 u，它們形影不離！"
        ],
        words: [
          { word: "queen",   highlight: "qu", zh: "女王", emoji: "👸", search: "queen crown" },
          { word: "quit",    highlight: "qu", zh: "退出/停止", emoji: "🚪", search: "exit door" },
          { word: "quick",   highlight: "qu", zh: "快速", emoji: "⚡", search: "lightning fast" },
          { word: "quack",   highlight: "qu", zh: "呱呱叫", emoji: "🦆", search: "duck" },
          { word: "quiz",    highlight: "qu", zh: "測驗", emoji: "📝", search: "quiz test paper" },
          { word: "quilt",   highlight: "qu", zh: "棉被", emoji: "🛏️", search: "quilt blanket" },
          { word: "quiet",   highlight: "qu", zh: "安靜", emoji: "🤫", search: "quiet shush" },
          { word: "quite",   highlight: "qu", zh: "相當/很", emoji: "👍", search: "thumbs up quite" },
          { word: "quote",   highlight: "qu", zh: "引用/引述", emoji: "💬", search: "quote speech" },
          { word: "quest",   highlight: "qu", zh: "探索/任務", emoji: "🗡️", search: "quest adventure" },
          { word: "quip",    highlight: "qu", zh: "妙語", emoji: "😄", search: "joke laugh" },
          { word: "squirrel",highlight: "qu", zh: "松鼠", emoji: "🐿️", search: "squirrel" },
          { word: "square",  highlight: "qu", zh: "正方形", emoji: "⬛", search: "square shape" },
          { word: "squeeze", highlight: "qu", zh: "擠壓", emoji: "🍋", search: "squeeze lemon" },
          { word: "liquid",  highlight: "qu", zh: "液體", emoji: "💧", search: "liquid water" }
        ],
        quiz: [
          { word: "queen", speak: "queen", displayWord: "queen", answer: "/kw/", choices: ["/k/","/kw/","/w/","/kj/"],
            type: "choose", hint: "👸 queen，qu 永遠一起唸 /kw/！", emoji: "👸", search: "queen crown" },
          { word: "quiet", speak: "quiet", displayWord: "quiet", answer: "u", choices: ["a","e","u","o"],
            type: "choose", hint: "🤫 quiet，q 後面一定要跟著 u！", emoji: "🤫", search: "quiet shush" },
          { word: "squirrel", speak: "squirrel", displayWord: "squirrel", answer: "/kw/", choices: ["/k/","/kw/","/sw/","/s/"],
            type: "choose", hint: "🐿️ squirrel，中間的 qu 一樣唸 /kw/！", emoji: "🐿️", search: "squirrel" }
        ]
      }
    ],
    story: {
      title: "👸 Queen Bee and the Quick Quiz",
      pages: [
        { en: "The queen bee can go very quick.", zh: "蜂后飛得非常快。", highlights: ["queen","go","quick"] },
        { en: "She said: 'We quit! No more quiz!'", zh: "她說：「我們退出！不要再測驗了！」", highlights: ["She","quit","quiz"] },
        { en: "The big bee said hi to me.", zh: "那隻大蜜蜂向我打招呼。", highlights: ["big","hi","me"] },
        { en: "We go! No, we stay!", zh: "我們走！不，我們留下來！", highlights: ["We","go","No","we"] }
      ]
    }
  },
  {
    id: 4,
    title: "Open Syllable 2 · Schwa",
    emoji: "🌀",
    color: 3,
    topics: [
      {
        name: "懶惰音 Schwa /ə/",
        rules: [
          "Schwa（懶惰音）是英文中最常見的母音發音，寫作 /ə/",
          "發音像快速說的「ㄜ」或「uh」",
          "通常出現在非重音節，母音在非重音位置容易變成 schwa",
          "例如：about（a=schwa），sofa（a=schwa），lemon（o=schwa）",
          "<a> 的第三個音：字的結尾 a 常發 schwa，例如：sofa, panda, pizza"
        ],
        words: [
          { word: "sofa",    highlight: "a", zh: "沙發（尾a=懶音）", emoji: "🛋️", search: "sofa couch" },
          { word: "panda",   highlight: "a", zh: "熊貓（尾a=懶音）", emoji: "🐼", search: "panda" },
          { word: "pizza",   highlight: "a", zh: "披薩（尾a=懶音）", emoji: "🍕", search: "pizza" },
          { word: "lemon",   highlight: "o", zh: "檸檬（o=懶音）", emoji: "🍋", search: "lemon" },
          { word: "about",   highlight: "a", zh: "關於（首a=懶音）", emoji: "📖", search: "book reading" },
          { word: "China",   highlight: "a", zh: "中國（尾a=懶音）", emoji: "🇨🇳", search: "China map" },
          { word: "banana",  highlight: "a", zh: "香蕉（中間a=懶音）", emoji: "🍌", search: "banana" },
          { word: "camera",  highlight: "a", zh: "相機（尾a=懶音）", emoji: "📷", search: "camera" },
          { word: "extra",   highlight: "a", zh: "額外的（尾a=懶音）", emoji: "➕", search: "extra plus" },
          { word: "agenda",  highlight: "a", zh: "議程（尾a=懶音）", emoji: "📋", search: "agenda planner" },
          { word: "comma",   highlight: "a", zh: "逗號（尾a=懶音）", emoji: "❓", search: "comma punctuation" },
          { word: "tuna",    highlight: "a", zh: "鮪魚（尾a=懶音）", emoji: "🐟", search: "tuna fish" },
          { word: "yoga",    highlight: "a", zh: "瑜伽（尾a=懶音）", emoji: "🧘", search: "yoga" },
          { word: "cobra",   highlight: "a", zh: "眼鏡蛇（尾a=懶音）", emoji: "🐍", search: "cobra snake" },
          { word: "drama",   highlight: "a", zh: "戲劇（尾a=懶音）", emoji: "🎭", search: "drama theater" }
        ],
        quiz: [
          { word: "sofa", speak: "sofa", displayWord: "sofa", answer: "懶音 /ə/", choices: ["長音 /eɪ/","短音 /æ/","懶音 /ə/","不發音"],
            type: "choose", hint: "🛋️ sofa，結尾 a 唸懶音 /ə/！", emoji: "🛋️", search: "sofa couch" },
          { word: "about", speak: "about", displayWord: "about", answer: "懶音 /ə/", choices: ["長音 /eɪ/","短音 /æ/","懶音 /ə/","不發音"],
            type: "choose", hint: "📖 about，開頭 a 唸懶音 /ə/！", emoji: "📖", search: "book reading" },
          { word: "lemon", speak: "lemon", displayWord: "lem-on", answer: "懶音 /ə/", choices: ["短音 /ɑ/","長音 /oʊ/","懶音 /ə/","不發音"],
            type: "choose", hint: "🍋 lemon，第二音節 -on 的 o 唸懶音！", emoji: "🍋", search: "lemon" },
          { word: "banana", speak: "banana", displayWord: "ba-na-na", answer: "懶音 /ə/", choices: ["長音 /eɪ/","短音 /æ/","懶音 /ə/","不發音"],
            type: "choose", hint: "🍌 banana，中間那個 a 唸懶音！", emoji: "🍌", search: "banana" }
        ]
      },
      {
        name: "wor 音組",
        rules: [
          "wor 是一個特別的音組，唸 /wɜr/（類似注音「ㄨㄦ」）",
          "例如：word, work, world, worm, worth",
          "注意：w 後面的 o 不唸短音，而是配合 r 變成 /ɜr/"
        ],
        words: [
          { word: "word",    highlight: "wor", zh: "單字", emoji: "📝", search: "word writing" },
          { word: "work",    highlight: "wor", zh: "工作", emoji: "💼", search: "work office" },
          { word: "world",   highlight: "wor", zh: "世界", emoji: "🌍", search: "world globe" },
          { word: "worm",    highlight: "wor", zh: "蟲", emoji: "🪱", search: "worm" },
          { word: "worth",   highlight: "wor", zh: "有價值的", emoji: "💎", search: "diamond gem" },
          { word: "worse",   highlight: "wor", zh: "更差的", emoji: "📉", search: "graph down" },
          { word: "worst",   highlight: "wor", zh: "最差的", emoji: "😓", search: "sad disappointed" },
          { word: "worry",   highlight: "wor", zh: "擔心", emoji: "😟", search: "worry anxious" },
          { word: "worship", highlight: "wor", zh: "崇拜/敬拜", emoji: "🙏", search: "worship pray" },
          { word: "worthy",  highlight: "wor", zh: "值得的", emoji: "🏆", search: "trophy worthy" },
          { word: "worn",    highlight: "wor", zh: "磨損的", emoji: "👟", search: "worn shoe" },
          { word: "worker",  highlight: "wor", zh: "工人", emoji: "👷", search: "worker construction" },
          { word: "workout", highlight: "wor", zh: "鍛鍊", emoji: "🏋️", search: "workout gym" },
          { word: "wording", highlight: "wor", zh: "措辭/用詞", emoji: "✍️", search: "writing pen" },
          { word: "workshop",highlight: "wor", zh: "工作坊", emoji: "🔨", search: "workshop tools" }
        ],
        quiz: [
          { word: "word", speak: "word", displayWord: "word", answer: "/wɜr/", choices: ["/wɑr/","/wɜr/","/wor/","/war/"],
            type: "choose", hint: "📝 word，wor 唸 /wɜr/，不是 /wɑr/！", emoji: "📝", search: "word writing" },
          { word: "work", speak: "work", displayWord: "work", answer: "/wɜrk/", choices: ["/wɑrk/","/wɜrk/","/wɔrk/","/wʌrk/"],
            type: "choose", hint: "💼 work，wor 唸 /wɜr/，所以是 /wɜrk/！", emoji: "💼", search: "work office" },
          { word: "worm", speak: "worm", displayWord: "worm", answer: "/wɜrm/", choices: ["/wɑrm/","/wɜrm/","/worm/","/wʌrm/"],
            type: "choose", hint: "🪱 worm（蟲），wor = /wɜr/！", emoji: "🪱", search: "worm" }
        ]
      }
    ],
    story: {
      title: "🐼 Panda and the Sofa",
      pages: [
        { en: "Panda sat on the sofa.", zh: "熊貓坐在沙發上。", highlights: ["Panda","sofa"] },
        { en: "She had a big pizza and a lemon.", zh: "她有一個大披薩和一顆檸檬。", highlights: ["big","pizza","lemon"] },
        { en: "Panda said: 'This pizza is worth it!'", zh: "熊貓說：「這個披薩值得！」", highlights: ["Panda","pizza","worth"] },
        { en: "The world is good. Panda went to work.", zh: "這個世界真好。熊貓去工作了。", highlights: ["world","Panda","work"] }
      ]
    }
  },
  {
    id: 5,
    title: "長母音歌 · ai · ay",
    emoji: "🎵",
    color: 4,
    topics: [
      {
        name: "長母音規則",
        rules: [
          "規則：英文字最後一個字母，不能是 I, U, V, J！",
          "所以長音 /eɪ/ 在字尾用 ay（不能用 ai），例如：day, say, play",
          "ai 用在單字中間，例如：rain, mail, train",
          "<a> 的第三個音 Part 2：ay 結尾的字，a 發長音 /eɪ/"
        ],
        words: [
          { word: "rain",   highlight: "ai", zh: "雨 (ai字中)", emoji: "🌧️", search: "rain" },
          { word: "mail",   highlight: "ai", zh: "信件 (ai字中)", emoji: "📬", search: "mailbox" },
          { word: "train",  highlight: "ai", zh: "火車 (ai字中)", emoji: "🚂", search: "train" },
          { word: "tail",   highlight: "ai", zh: "尾巴 (ai字中)", emoji: "🐕", search: "dog tail" },
          { word: "nail",   highlight: "ai", zh: "指甲/釘子 (ai字中)", emoji: "💅", search: "nail" },
          { word: "sail",   highlight: "ai", zh: "帆/航行 (ai字中)", emoji: "⛵", search: "sailboat" },
          { word: "pain",   highlight: "ai", zh: "痛 (ai字中)", emoji: "🤕", search: "pain hurt" },
          { word: "wait",   highlight: "ai", zh: "等待 (ai字中)", emoji: "⏳", search: "wait hourglass" },
          { word: "paid",   highlight: "ai", zh: "付款了 (ai字中)", emoji: "💳", search: "payment card" },
          { word: "chain",  highlight: "ai", zh: "鏈條 (ai字中)", emoji: "⛓️", search: "chain" },
          { word: "brain",  highlight: "ai", zh: "大腦 (ai字中)", emoji: "🧠", search: "brain" },
          { word: "plain",  highlight: "ai", zh: "平原/樸素 (ai字中)", emoji: "🏕️", search: "plain field" },
          { word: "snail",  highlight: "ai", zh: "蝸牛 (ai字中)", emoji: "🐌", search: "snail" },
          { word: "trail",  highlight: "ai", zh: "小徑 (ai字中)", emoji: "🥾", search: "hiking trail" },
          { word: "claim",  highlight: "ai", zh: "聲稱 (ai字中)", emoji: "📢", search: "claim announce" }
        ],
        quiz: [
          { word: "rain", speak: "rain", displayWord: "r _ _ n", answer: "ai", choices: ["ai","ay","a","ae"],
            type: "fill", hint: "🌧️ rain（雨），ai 在字中間！", emoji: "🌧️", search: "rain" },
          { word: "mail", speak: "mail", displayWord: "m _ _ l", answer: "ai", choices: ["ai","ay","a","ei"],
            type: "fill", hint: "📬 mail（信件），ai 在字中間！", emoji: "📬", search: "mailbox" },
          { word: "snail", speak: "snail", displayWord: "sn _ _ l", answer: "ai", choices: ["ai","ay","a","ei"],
            type: "fill", hint: "🐌 snail（蝸牛），ai 在字中間！", emoji: "🐌", search: "snail" },
          { word: "train", speak: "train", displayWord: "tr _ _ n", answer: "ai", choices: ["ai","ay","a","oa"],
            type: "fill", hint: "🚂 train（火車），ai 在字中間！", emoji: "🚂", search: "train" }
        ]
      },
      {
        name: "ay 音組",
        rules: [
          "ay 唸 /eɪ/，永遠在字尾或音節尾",
          "常見字：day, say, play, stay, away",
          "記憶：ay = a 說自己的名字！（long a）"
        ],
        words: [
          { word: "day",    highlight: "ay", zh: "白天/日", emoji: "☀️", search: "sunny day" },
          { word: "say",    highlight: "ay", zh: "說", emoji: "💬", search: "speech bubble" },
          { word: "play",   highlight: "ay", zh: "玩耍", emoji: "🎮", search: "play toys" },
          { word: "stay",   highlight: "ay", zh: "留下", emoji: "🏠", search: "home house" },
          { word: "away",   highlight: "ay", zh: "離開", emoji: "✈️", search: "airplane fly" },
          { word: "today",  highlight: "ay", zh: "今天", emoji: "📅", search: "calendar today" },
          { word: "way",    highlight: "ay", zh: "方式/路", emoji: "🛤️", search: "road way" },
          { word: "hay",    highlight: "ay", zh: "乾草", emoji: "🌾", search: "hay field" },
          { word: "pay",    highlight: "ay", zh: "付款", emoji: "💰", search: "pay money" },
          { word: "gray",   highlight: "ay", zh: "灰色", emoji: "🩶", search: "gray color" },
          { word: "pray",   highlight: "ay", zh: "祈禱", emoji: "🙏", search: "pray hands" },
          { word: "spray",  highlight: "ay", zh: "噴霧", emoji: "💦", search: "spray water" },
          { word: "clay",   highlight: "ay", zh: "黏土", emoji: "🏺", search: "clay pottery" },
          { word: "delay",  highlight: "ay", zh: "延誤", emoji: "⏰", search: "delay clock" },
          { word: "birthday",highlight: "ay", zh: "生日", emoji: "🎂", search: "birthday cake" }
        ],
        quiz: [
          { word: "day", speak: "day", displayWord: "d _ _", answer: "ay", choices: ["ai","ay","a","ae"],
            type: "fill", hint: "☀️ day（白天），字尾用 ay 不用 ai！", emoji: "☀️", search: "sunny day" },
          { word: "play", speak: "play", displayWord: "pl _ _", answer: "ay", choices: ["ai","ay","a","oi"],
            type: "fill", hint: "🎮 play（玩耍），字尾用 ay！", emoji: "🎮", search: "play toys" },
          { word: "spray", speak: "spray", displayWord: "spr _ _", answer: "ay", choices: ["ai","ay","a","ei"],
            type: "fill", hint: "💦 spray（噴霧），字尾用 ay！", emoji: "💦", search: "spray water" },
          { word: "rain", speak: "rain", displayWord: "r_in", answer: "ai", choices: ["ai","ay","a","ei"],
            type: "fill", hint: "🌧️ rain（雨），在字中間用 ai 不用 ay！", emoji: "🌧️", search: "rain" }
        ]
      }
    ],
    story: {
      title: "🌧️ A Rainy Day",
      pages: [
        { en: "Today is a rainy day.", zh: "今天是個下雨天。", highlights: ["Today","rainy","day"] },
        { en: "I say: 'Let's stay and play!'", zh: "我說：「讓我們留下來玩吧！」", highlights: ["say","stay","play"] },
        { en: "We play with a train by the window.", zh: "我們在窗邊玩火車。", highlights: ["play","train"] },
        { en: "The rain went away. Yay!", zh: "雨停了。耶！", highlights: ["rain","away"] }
      ]
    }
  }
];
