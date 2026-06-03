# 🌟 CK's Phonics Adventure 自然發音

基於 **CK's English Logic Insights 74音組體系**製作的互動式自然發音學習網站。

- 📚 **24 課** · 完整涵蓋 74 個音組
- 🔊 **點擊發音**（瀏覽器內建語音，不需 API）
- 🖼️ **單字配圖**（Unsplash 免費圖庫，需連網）
- ✏️ **每課小測驗** + 闖關積分
- 📖 **每課繪本故事**（用學過的音組單字撰寫）
- 🇹🇼 **中文規則說明**（適合台灣孩子學習）

---

## 📁 檔案結構

```
ivy-phonics/
├── index.html              ← 主選單（首頁）
├── css/
│   └── style.css           ← 全站共用樣式
├── js/
│   ├── engine_core.js      ← 遊戲引擎（所有頁面共用）
│   ├── data_l1_5.js        ← Unit 1 課程資料（Lesson 1–5）
│   ├── data_l6_12.js       ← Unit 2 課程資料（Lesson 6–12）
│   ├── data_l13_17.js      ← Unit 3 課程資料（Lesson 13–17）
│   └── data_l18_24.js      ← Unit 4 課程資料（Lesson 18–24）
└── lessons/
    ├── lesson1-5.html      ← Unit 1 頁面
    ├── lesson6-12.html     ← Unit 2 頁面
    ├── lesson13-17.html    ← Unit 3 頁面
    └── lesson18-24.html    ← Unit 4 頁面
```

---

## 🚀 上傳到 GitHub Pages（免費網站）— 圖文步驟

### 第一步：申請 GitHub 帳號

1. 開啟瀏覽器，前往 **https://github.com**
2. 點右上角 **Sign up**
3. 輸入 Email、密碼、使用者名稱（例如：`mom`）
4. 完成 Email 驗證

---

### 第二步：建立新的 Repository（資料夾）

1. 登入後，點右上角 **＋** → **New repository**
2. **Repository name** 填入：`ivy-phonics`
   > ⚠️ 名稱很重要！之後網址會是 `https://你的帳號.github.io/phonics`
3. 選 **Public**（公開，這樣才能免費啟用網站）
4. 勾選 **Add a README file**
5. 點綠色按鈕 **Create repository**

---

### 第三步：上傳所有檔案

1. 進入剛建立的 repository 頁面
2. 點 **Add file** → **Upload files**
3. 將整個 `phonics` 資料夾的**所有內容**拖曳進去
   > 注意：要上傳**資料夾內的東西**，不是資料夾本身。
   > 需要依序上傳：先上傳 `index.html`、`README.md`，
   > 再分別上傳 `css/`、`js/`、`lessons/` 三個資料夾

   **上傳方式（比較簡單）：**
   - 點 **Upload files**
   - 把電腦裡的 `index.html` 和 `README.md` 拖進去
   - 點 **Commit changes**（存檔）
   - 重複：點 **Add file** → **Upload files** → 上傳 `css/style.css`
   - 重複：上傳 `js/` 裡所有 `.js` 檔案
   - 重複：上傳 `lessons/` 裡所有 `.html` 檔案

   > 💡 **更簡單的方法**：使用 [GitHub Desktop](https://desktop.github.com/) 應用程式，可以直接把整個資料夾拖進去！

4. 每次上傳完，在下面的框輸入說明（例如：`上傳課程檔案`），然後點 **Commit changes**

---

### 第四步：開啟 GitHub Pages

1. 在 repository 頁面，點上方的 **Settings**（⚙️ 齒輪）
2. 左側選單找到 **Pages**，點進去
3. **Source** 選 `Deploy from a branch`
4. **Branch** 選 `main`，資料夾選 `/ (root)`
5. 點 **Save**
6. 等 1–2 分鐘，頁面上方會出現綠色訊息和網址：
   ```
   Your site is published at https://你的帳號.github.io/phonics/
   ```

---

### 第五步：完成！分享給孩子

複製那個網址，傳給孩子的平板或手機，**加入書籤**就可以隨時使用！

---

## 🔧 之後新增或修改內容

### 修改單字/規則：
1. 在 GitHub 上找到對應的 `js/data_l1_5.js`（或其他資料檔）
2. 點進去 → 點右上角的 **✏️ 鉛筆圖示**（Edit this file）
3. 直接修改文字
4. 完成後點 **Commit changes**
5. 約 30 秒後網站自動更新

### 無法顯示聲音？
- 請用 **Chrome** 瀏覽器（語音功能最完整）
- 部分瀏覽器需要先點擊頁面才能播放聲音

### 圖片沒有顯示？
- 需要連接網路（圖片來自 Unsplash 免費圖庫）
- 沒有網路時會顯示 emoji 代替，功能不受影響

---

## 📊 課程內容對照

| Unit | Lessons | 主要內容 |
|------|---------|---------|
| Unit 1 | L1–5 | 字母音、短母音、閉/開音節、音節數、ck、qu、Schwa、ai/ay |
| Unit 2 | L6–12 | Silent e、ee/ea、igh、o_e、oa、ow/oe、ui/ew、OO四音、oi/oy |
| Unit 3 | L13–17 | ar/or/ir/er/ur、tch/ch、C/G變音、floss規則、ou/ow、au/aw、dge/augh |
| Unit 4 | L18–24 | ei/ey/eigh、th、ng、ugh、O第三音、Wh、gn/kn、sh、ci/ti/si、ch三音、ear、ph、ed三音、gu、X兩音 |

---

*Made with ❤️ for CK · Based on CK's English Logic Insights*
