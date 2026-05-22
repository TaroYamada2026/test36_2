import { useState, useEffect } from "react";

function App() {
  // State management
  const [screen, setScreen] = useState("home"); // 'home', 'searching', 'result', 'realistic-result'
  const [gender, setGender] = useState("male");
  const [income, setIncome] = useState("2000");
  const [age, setAge] = useState("20s");
  const [height, setHeight] = useState("180");
  const [education, setEducation] = useState("tokyo");
  const [looks, setLooks] = useState("idol");

  // Searching animation states
  const [searchStep, setSearchStep] = useState(0);
  const [progress, setProgress] = useState(0);

  // Searching logs for realistic simulation
  const searchLogs = [
    "全国の会員データベース（12,504,821人）に接続中...",
    "ご指定の「希望性別」フィルターを適用中...",
    "年収審査を実施中（1,500万円以上のプレミア層を抽出中）...",
    "学歴フィルター「東大・京大・海外大卒」をスキャン中...",
    "画像認識AIによる「アイドル・モデル級」顔面偏差値測定中...",
    "希望身長 180cm以上の遺伝子情報を検索中...",
    "性格・価値観の相性をスーパーコンピューターで高速演算中...",
    "妥協なき奇跡の組み合わせを最終マッチング中...",
  ];

  useEffect(() => {
    let interval;
    if (screen === "searching") {
      // Reset search progress
      setSearchStep(0);
      setProgress(0);

      // Increment progress and logs over 4 seconds
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setScreen("result");
            }, 500);
            return 100;
          }
          return prev + 1;
        });
      }, 40);
    }
    return () => clearInterval(interval);
  }, [screen]);

  // Sync log steps with percentage progress
  useEffect(() => {
    if (screen === "searching") {
      const step = Math.min(
        Math.floor((progress / 100) * searchLogs.length),
        searchLogs.length - 1
      );
      setSearchStep(step);
    }
  }, [progress]);

  // Start search handler
  const handleSearch = (e) => {
    e.preventDefault();
    setScreen("searching");
  };

  // Reset or lower standard handler
  const handleLowerStandards = () => {
    // Instantly show the funny realistic result
    setScreen("realistic-result");
  };

  const handleReset = () => {
    setGender("male");
    setIncome("2000");
    setAge("20s");
    setHeight("180");
    setEducation("tokyo");
    setLooks("idol");
    setScreen("home");
  };

  return (
    <div class="bg-white rounded-3xl shadow-xl overflow-hidden border border-pink-100 transition-all duration-300">
      {/* Header */}
      <div class="bg-gradient-to-r from-rose-500 to-pink-500 p-6 text-white text-center relative">
        <div class="absolute top-4 left-4 opacity-20">
          <i class="fa-solid fa-heart text-3xl heart-pulse"></i>
        </div>
        <div class="absolute top-4 right-4 opacity-20">
          <i class="fa-solid fa-wand-magic-sparkles text-3xl"></i>
        </div>
        <h1 class="text-2xl font-black tracking-wider flex items-center justify-center gap-2">
          <i class="fa-solid fa-heart-circle-check"></i>
          AIプロフェッショナル結婚相談所
        </h1>
        <p class="text-xs opacity-90 mt-1">
          AI超精密マッチングシステム Ver.8.4
        </p>
      </div>

      {/* SCREEN 1: HOME (FORM) */}
      {screen === "home" && (
        <div class="p-6">
          <div class="flex flex-col items-center mb-6">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiqZxk3tSeQDwBOke4XV38PkmWI0kGBsnYFuOwz3klQ5qfC_yVlIiLTBntxvFb305HfHTUIXxNYctwZIRDTYoIXp7B077wWMwlNr0kh_HbUSdEFn0IGoWRPYxJa43ZmPUVDJQfnV7CihR0/s450/wedding_couple_young.png"
              alt="幸せなカップル"
              class="w-40 h-40 object-contain drop-shadow-md mb-3"
            />
            <h2 class="text-lg font-bold text-gray-800 text-center">
              AIがあなたに最高のパートナーを。
              <br />
              妥協のない「理想」を入力してください。
            </h2>
          </div>

          <form onSubmit={handleSearch} class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
              {/* Gender */}
              <div>
                <label class="block text-xs font-bold text-rose-500 mb-1">
                  <i class="fa-solid fa-venus-mars mr-1"></i>希望の性別
                </label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  class="w-full border-2 border-pink-100 rounded-xl p-2.5 text-sm bg-pink-50/50 focus:border-rose-400 focus:outline-none"
                >
                  <option value="male">男性を希望</option>
                  <option value="female">女性を希望</option>
                </select>
              </div>

              {/* Age */}
              <div>
                <label class="block text-xs font-bold text-rose-500 mb-1">
                  <i class="fa-solid fa-cake-candles mr-1"></i>希望の年齢層
                </label>
                <select
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  class="w-full border-2 border-pink-100 rounded-xl p-2.5 text-sm bg-pink-50/50 focus:border-rose-400 focus:outline-none"
                >
                  <option value="20s">20代前半 (20〜24才)</option>
                  <option value="25s">20代後半 (25〜29才)</option>
                  <option value="30s">30代前半 (30〜34才)</option>
                </select>
              </div>
            </div>

            {/* Annual Income */}
            <div>
              <label class="block text-xs font-bold text-rose-500 mb-1">
                <i class="fa-solid fa-yen-sign mr-1"></i>希望の年収
              </label>
              <select
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                class="w-full border-2 border-pink-100 rounded-xl p-2.5 text-sm bg-pink-50/50 focus:border-rose-400 focus:outline-none font-bold text-rose-700"
              >
                <option value="1000">1,000万円以上 (最低ライン)</option>
                <option value="1500">1,500万円以上 (理想)</option>
                <option value="2000">2,000万円以上 (ゆずれない)</option>
                <option value="3000">3,000万円以上 (できればこれくらい)</option>
              </select>
            </div>

            <div class="grid grid-cols-2 gap-4">
              {/* Height */}
              <div>
                <label class="block text-xs font-bold text-rose-500 mb-1">
                  <i class="fa-solid fa-arrows-up-down mr-1"></i>希望身長
                  (男性の場合)
                </label>
                <select
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  class="w-full border-2 border-pink-100 rounded-xl p-2.5 text-sm bg-pink-50/50 focus:border-rose-400 focus:outline-none"
                >
                  <option value="175">175cm以上</option>
                  <option value="180">180cm以上 (高身長必須)</option>
                  <option value="185">185cm以上 (モデル体型)</option>
                </select>
              </div>

              {/* Academic Background */}
              <div>
                <label class="block text-xs font-bold text-rose-500 mb-1">
                  <i class="fa-solid fa-graduation-cap mr-1"></i>最終学歴
                </label>
                <select
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                  class="w-full border-2 border-pink-100 rounded-xl p-2.5 text-sm bg-pink-50/50 focus:border-rose-400 focus:outline-none"
                >
                  <option value="univ">MARCH・関関同立以上</option>
                  <option value="early">早慶上智・旧帝大卒</option>
                  <option value="tokyo">東京大学・京都大学卒限定</option>
                  <option value="overseas">海外超一流MBAホルダー</option>
                </select>
              </div>
            </div>

            {/* Looks / Appearance */}
            <div>
              <label class="block text-xs font-bold text-rose-500 mb-1">
                <i class="fa-solid fa-face-smile-wink mr-1"></i>希望のビジュアル
              </label>
              <select
                value={looks}
                onChange={(e) => setLooks(e.target.value)}
                class="w-full border-2 border-pink-100 rounded-xl p-2.5 text-sm bg-pink-50/50 focus:border-rose-400 focus:outline-none"
              >
                <option value="average">清潔感があればOK</option>
                <option value="cute">塩顔・醤油顔のイケメン/美女</option>
                <option value="model">雑誌の専属モデル級</option>
                <option value="idol">現役トップアイドル・有名女優級</option>
              </select>
            </div>

            {/* Search Button */}
            <button
              type="submit"
              class="w-full mt-6 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-extrabold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl hover:opacity-95 transition-all flex items-center justify-center gap-2 text-lg active:scale-[0.98]"
            >
              <i class="fa-solid fa-magnifying-glass-chart"></i>
              AI超精密マッチングを開始
            </button>
          </form>
        </div>
      )}

      {/* SCREEN 2: SEARCHING (SPINNER & RUNNING LOGS) */}
      {screen === "searching" && (
        <div class="p-8 text-center flex flex-col items-center min-h-[450px] justify-center">
          {/* Super cute loader with icon & rotating heart border */}
          <div class="relative w-28 h-28 mb-8">
            <div class="absolute inset-0 rounded-full border-4 border-rose-100 border-t-rose-500 animate-spin"></div>
            <div
              class="absolute inset-2 rounded-full border-4 border-pink-50 border-b-pink-400 animate-spin"
              style={{
                animationDirection: "reverse",
                animationDuration: "1.5s",
              }}
            ></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <i class="fa-solid fa-heart-pulse text-4xl text-rose-500 heart-pulse"></i>
            </div>
          </div>

          {/* Circular progress text */}
          <p class="text-3xl font-black text-rose-600 mb-2">{progress}%</p>
          <p class="text-xs font-bold text-gray-400 tracking-widest uppercase mb-6">
            AI Super Computing Matcher
          </p>

          {/* Dynamic status card */}
          <div class="w-full bg-slate-50 rounded-2xl p-4 border border-slate-100 min-h-[90px] flex items-center justify-center">
            <div class="text-sm font-medium text-slate-600 leading-relaxed text-left max-w-sm">
              <i class="fa-solid fa-cog fa-spin mr-2 text-rose-400"></i>
              <span class="typing-effect text-xs md:text-sm">
                {searchLogs[searchStep]}
              </span>
            </div>
          </div>

          {/* Ticking indicator bar */}
          <div class="w-full bg-slate-100 h-1.5 rounded-full mt-6 overflow-hidden">
            <div
              class="bg-gradient-to-r from-rose-500 to-pink-500 h-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* SCREEN 3: RESULT 0 MATCHES */}
      {screen === "result" && (
        <div class="p-8 text-center flex flex-col items-center">
          {/* Headcount Indicator */}
          <div class="bg-rose-50 border border-rose-200 text-rose-600 font-bold px-4 py-1.5 rounded-full text-xs mb-4">
            AI診断結果
          </div>

          {/* Witch Image */}
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiWqhxfZbEK-Z3dKsFKdZer47Ijp7or8C-HeiyAQYWaLxyquweGOkz_Ot8mGOsnO8gmGX1i_iMWyAi-Ds2RfcDC4uYUAG32tSQCZNAVUoLgN0BhCeHkvWcOl2LBpF26Aa9kipb1JE9jMi2Q/s400/halloween_chara6_majo.png"
            alt="魔法使い（魔女）"
            class="w-32 h-32 object-contain drop-shadow-md mb-4"
          />

          {/* Big Number */}
          <div class="text-gray-400 text-sm font-bold mb-1">
            マッチング候補者
          </div>
          <div class="text-7xl font-black text-rose-600 mb-6 tracking-tight">
            0<span class="text-2xl font-bold text-gray-800 ml-1">件</span>
          </div>

          {/* The core request sentence */}
          <div class="bg-red-50 border border-red-200 rounded-2xl p-5 mb-6 w-full text-left">
            <h3 class="text-red-700 font-extrabold text-base mb-2 text-center">
              ⚠️ 理想が高すぎます。
              <br />
              条件の見直しをお願いします。
            </h3>
            <div class="text-xs text-slate-600 space-y-2 leading-relaxed mt-3 border-t border-red-100 pt-3">
              <p>
                💡{" "}
                <strong class="text-slate-800">AIからの辛口アドバイス:</strong>
              </p>
              <p>
                「年収
                {income === "3000"
                  ? "3000万以上"
                  : income === "2000"
                  ? "2000万以上"
                  : "1000万以上"}
                」「東大・京大卒レベル」「アイドル顔」を同時に満たす独身のお相手は、日本の砂漠で一粒のダイヤモンドを見つける難易度です。
              </p>
              <p class="font-bold text-red-600">
                ※なお、ご指定の条件に該当する人物は、現在「異世界」にしか存在しないか、あるいはすでに石油王と結婚している可能性があります。
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div class="flex flex-col gap-3 w-full">
            <button
              onClick={handleLowerStandards}
              class="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold py-3.5 px-6 rounded-2xl shadow hover:opacity-95 transition-all flex items-center justify-center gap-2 text-base active:scale-[0.98]"
            >
              <i class="fa-solid fa-circle-down"></i>
              現実を見る（条件を大幅に下げて再検索）
            </button>
            <button
              onClick={handleReset}
              class="w-full bg-slate-100 text-slate-600 font-bold py-3.5 px-6 rounded-2xl hover:bg-slate-200 transition-all text-sm"
            >
              希望条件を微調整して再チャレンジ
            </button>
          </div>
        </div>
      )}

      {/* SCREEN 4: REALISTIC RESULT */}
      {screen === "realistic-result" && (
        <div class="p-8 text-center flex flex-col items-center">
          <div class="bg-emerald-50 border border-emerald-200 text-emerald-600 font-bold px-4 py-1.5 rounded-full text-xs mb-4">
            条件妥協後のAIマッチング結果
          </div>

          <div class="text-gray-400 text-sm font-bold mb-1">
            マッチング候補者
          </div>
          <div class="text-7xl font-black text-emerald-500 mb-6 tracking-tight animate-bounce">
            1<span class="text-2xl font-bold text-gray-800 ml-1">件</span>
          </div>

          {/* Realistic Match Card */}
          <div class="w-full bg-emerald-50/50 border-2 border-emerald-200 rounded-2xl p-5 mb-6 text-left relative overflow-hidden">
            <div class="absolute -top-1 -right-1 bg-emerald-500 text-white font-black text-[10px] px-3 py-1 rounded-bl-xl uppercase tracking-wider">
              相性 98%
            </div>

            <h4 class="font-extrabold text-lg text-emerald-800 mb-3 flex items-center gap-1.5">
              <i class="fa-solid fa-circle-user text-emerald-500"></i>
              山田 たろう (46歳)
            </h4>

            <div class="grid grid-cols-2 gap-y-2 gap-x-4 text-xs text-slate-700 mb-4 bg-white p-3.5 rounded-xl border border-emerald-100">
              <p>
                💼 <strong>職業:</strong> 地方自治体臨時職員
              </p>
              <p>
                💴 <strong>年収:</strong> 約 320万円
              </p>
              <p>
                📏 <strong>身長:</strong> 162cm (靴下厚めで164cm)
              </p>
              <p>
                🎓 <strong>学歴:</strong> 地元高校普通科 卒
              </p>
              <p class="col-span-2">
                🏠 <strong>居住形態:</strong> 実家暮らし（母・猫と同居）
              </p>
            </div>

            <div class="bg-white p-3.5 rounded-xl border border-emerald-100 text-xs text-slate-600 leading-relaxed">
              <p class="font-bold text-emerald-700 mb-1">
                💬 お相手からの一言メッセージ:
              </p>
              <p class="italic">
                「毎日温かいお味噌汁を作ってくれる方を探しています。趣味は実家で猫の写真をとることです。実家に遊びにきてくれる方ならどなたでも大歓迎！母も楽しみにしております。」
              </p>
            </div>
          </div>

          {/* Final CTA Buttons */}
          <div class="flex flex-col gap-3 w-full">
            <button
              onClick={() =>
                alert(
                  "山田たろうさんにアプローチを送りました！（※このアプリはデモです）"
                )
              }
              class="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold py-3.5 px-6 rounded-2xl shadow transition-all flex items-center justify-center gap-2 text-base"
            >
              <i class="fa-solid fa-paper-plane"></i>
              この人に会って現実を妥協する
            </button>
            <button
              onClick={handleReset}
              class="w-full bg-slate-100 text-slate-600 font-bold py-3.5 px-6 rounded-2xl hover:bg-slate-200 transition-all text-sm"
            >
              もう一度、夢を追いかける（最初からやり直す）
            </button>
          </div>
        </div>
      )}

      {/* Footer decoration */}
      <div class="bg-rose-50 px-6 py-4 border-t border-rose-100 flex items-center justify-between text-xs text-rose-400">
        <span>プライバシーマーク取得済</span>
        <span>© 2026 AI Marriage Success Inc.</span>
      </div>
    </div>
  );
}

export default App;
