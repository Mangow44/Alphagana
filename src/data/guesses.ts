import type Guess from '@/models/Guess'

export const guesses: Array<Guess> = [
  // nature
  { hiragana: 'いぬ', katakana: 'イヌ', romaji: 'inu', fr: 'chien', en: 'dog' },
  { hiragana: 'ねこ', katakana: 'ネコ', romaji: 'neko', fr: 'chat', en: 'cat' },
  { hiragana: 'うさぎ', katakana: 'ウサギ', romaji: 'usagi', fr: 'lapin', en: 'rabbit' },
  { hiragana: 'らいおん', katakana: 'ライオン', romaji: 'raion', fr: 'lion', en: 'lion' },
  { hiragana: 'さかな', katakana: 'サカナ', romaji: 'sakana', fr: 'poisson', en: 'fish' },
  { hiragana: 'とり', katakana: 'トリ', romaji: 'tori', fr: 'oiseau', en: 'bird' },
  { hiragana: 'とら', katakana: 'トラ', romaji: 'tora', fr: 'tigre', en: 'tiger' },

  // pays
  { hiragana: 'あめりか', katakana: 'アメリカ', romaji: 'amerika', fr: 'états-unis', en: 'united states' },
  { hiragana: 'ふらんす', katakana: 'フランス', romaji: 'furansu', fr: 'france', en: 'france' },
  { hiragana: 'いぎりす', katakana: 'イギリス', romaji: 'igirisu', fr: 'royaume-uni', en: 'united kingdom' },
  { hiragana: 'めきしこ', katakana: 'メキシコ', romaji: 'mekishiko', fr: 'mexique', en: 'mexico' },
  { hiragana: 'にほん', katakana: 'ニホン', romaji: 'nihon', fr: 'japon', en: 'japan' },
  { hiragana: 'ちゅうごく', katakana: 'チュウゴク', romaji: 'chuugoku', fr: 'chine', en: 'china' },
  { hiragana: 'どいつ', katakana: 'ドイツ', romaji: 'doitsu', fr: 'allemagne', en: 'germany' },
  { hiragana: 'ぶらじる', katakana: 'ブラジル', romaji: 'burajiru', fr: 'brésil', en: 'brazil' },

  // couleurs
  { hiragana: 'あかい', katakana: 'アカイ', romaji: 'aka', fr: 'rouge', en: 'red' },
  { hiragana: 'あおい', katakana: 'アオイ', romaji: 'ao', fr: 'bleu', en: 'blue' },
  { hiragana: 'みどり', katakana: 'ミドリ', romaji: 'midori', fr: 'vert', en: 'green' },
  { hiragana: 'きいろい', katakana: 'キイロイ', romaji: 'kiiro', fr: 'jaune', en: 'yellow' },
  { hiragana: 'おれんじ', katakana: 'オレンジ', romaji: 'orenji', fr: 'orange', en: 'orange' },
  { hiragana: 'ぴんく', katakana: 'ピンク', romaji: 'pinku', fr: 'rose', en: 'pink' },
  { hiragana: 'くろい', katakana: 'クロイ', romaji: 'kuro', fr: 'noir', en: 'black' },
  { hiragana: 'しろい', katakana: 'シロイ', romaji: 'shiro', fr: 'blanc', en: 'white' },

  // météo
  { hiragana: 'たいよう', katakana: 'タイヨウ', romaji: 'taiyou', fr: 'soleil', en: 'sun' },
  { hiragana: 'あめ', katakana: 'アメ', romaji: 'ame', fr: 'pluie', en: 'rain' },
  { hiragana: 'つき', katakana: 'ツキ', romaji: 'tsuki', fr: 'lune', en: 'moon' },
  { hiragana: 'はる', katakana: 'ハル', romaji: 'haru', fr: 'printemps', en: 'spring' },
  { hiragana: 'なつ', katakana: 'ナツ', romaji: 'natsu', fr: 'été', en: 'summer' },
  { hiragana: 'あき', katakana: 'アキ', romaji: 'aki', fr: 'automne', en: 'autumn' },
  { hiragana: 'ふゆ', katakana: 'フユ', romaji: 'fuyu', fr: 'hiver', en: 'winter' },

  // vêtements
  { hiragana: 'どれす', katakana: 'ドレス', romaji: 'doresu', fr: 'robe', en: 'dress' },
  { hiragana: 'くつ', katakana: 'クツ', romaji: 'kutsu', fr: 'chaussure', en: 'shoe' },

  // nourriture
  { hiragana: 'ちいず', katakana: 'チーズ', romaji: 'chiizu', fr: 'fromage', en: 'cheese' },
  { hiragana: 'おちゃ', katakana: 'オチャ', romaji: 'ocha', fr: 'thé', en: 'tea' },
  { hiragana: 'おこのみやき', katakana: 'オコノミヤキ', romaji: 'okonomiyaki', fr: 'crêpe salée', en: 'crepe (salty)' },
  { hiragana: 'さしみ', katakana: 'サシミ', romaji: 'sashimi', fr: 'poisson cru frais en tranche', en: 'sliced fresh raw fish' },
  { hiragana: 'しゃぶしゃぶ', katakana: 'シャブシャブ', romaji: 'shabushabu', fr: 'râgout de viande', en: 'meat stew' },
  { hiragana: 'てんぷら', katakana: 'テンプラ', romaji: 'tenpura', fr: 'poisson ou légume frit et pané', en: 'fried and breaded fish or vegetable' },
  { hiragana: 'いただきます', katakana: 'イタダキマス', romaji: 'itadakimasu', fr: 'bon appétit', en: 'enjoy your meal' },
  { hiragana: 'おいしい', katakana: 'オイシイ', romaji: 'oiishi', fr: 'délicieux, savoureux', en: 'delicious, tasty' },

  // Salutations
  { hiragana: 'はじめまして', katakana: 'ハジメマシテ', romaji: 'hajimemashite', fr: 'enchanté', en: 'nice to meet you' },
  { hiragana: 'おはよう', katakana: 'オハヨウ', romaji: 'ohayou', fr: 'bonjour (matin)', en: 'good morning' },
  { hiragana: 'こんにちわ', katakana: 'コンニチワ', romaji: 'konnichiwa', fr: 'bonjour', en: 'hello' },
  { hiragana: 'こんばんわ', katakana: 'コンバンワ', romaji: 'konbanwa', fr: 'bonsoir', en: 'good evening' },
  { hiragana: 'ありがとう', katakana: 'アリガトウ', romaji: 'arigatou', fr: 'merci', en: 'thank you' },
  { hiragana: 'じゃあまた', katakana: 'ジャアマタ', romaji: 'jaa mata', fr: 'à plus tard', en: 'see you soon' },
  { hiragana: 'しつれいします', katakana: 'シツレイシマス', romaji: 'shitsurei shimasu', fr: 'au revoir', en: 'goodbye' },
  { hiragana: 'さようなら', katakana: 'サヨウナラ', romaji: 'sayounara', fr: 'au revoir (adieu)', en: 'farewell' },

  { hiragana: 'どこ', katakana: 'ドコ', romaji: 'doko', fr: 'où', en: 'where' },
  { hiragana: 'どう', katakana: 'ドウ', romaji: 'dou', fr: 'comment', en: 'how' },

  // Professions
  { hiragana: 'こうこうせい', katakana: 'コウコウセイ', romaji: 'koukousei', fr: 'lycéen', en: 'high school student' },
  { hiragana: 'がくせい', katakana: 'ガクセイ', romaji: 'gakusei', fr: 'étudiant', en: 'student' },
  { hiragana: 'かいしゃいん', katakana: 'カイシャイン', romaji: 'kaishain', fr: 'employé', en: 'employee' },
  { hiragana: 'せんせい', katakana: 'センセイ', romaji: 'sensei', fr: 'professeur', en: 'teacher' },

  { hiragana: 'ともだち', katakana: 'トモダチ', romaji: 'tomodachi', fr: 'ami', en: 'friend' },
  { hiragana: 'ちょっと', katakana: 'チョット', romaji: 'chotto', fr: 'un petit peu', en: 'a little' },
  { hiragana: 'はい', katakana: 'ハイ', romaji: 'hai', fr: 'oui', en: 'yes' },
  { hiragana: 'いいえ', katakana: 'イイエ', romaji: 'iie', fr: 'non', en: 'no' },
  { hiragana: 'そうです', katakana: 'ソウデス', romaji: 'sou desu', fr: "c'est vrai, c'est exact", en: "it's true" },
  { hiragana: 'そうですね', katakana: 'ソウデスネ', romaji: 'sou desu ne', fr: 'laisse moi réfléchir', en: 'let me think' },
  { hiragana: 'なまえ', katakana: 'ナマエ', romaji: 'namae', fr: 'nom', en: 'name' },
  { hiragana: 'わたしの', katakana: 'ワタシノ', romaji: 'watashi no', fr: 'mon/ma', en: 'my' },
  { hiragana: 'すみません', katakana: 'スミマセン', romaji: 'sumimasen', fr: 'pardon, excusez-moi', en: 'sorry, excuse me' },

  // Nombres
  { hiragana: 'いち', katakana: 'イチ', romaji: 'ichi', fr: 'un', en: 'one' },
  { hiragana: 'に', katakana: 'ニ', romaji: 'ni', fr: 'deux', en: 'two' },
  { hiragana: 'さん', katakana: 'サン', romaji: 'san', fr: 'trois', en: 'three' },
  { hiragana: 'し / よん', katakana: 'シ / ヨン', romaji: 'shi / yon', fr: 'quatre', en: 'four' },
  { hiragana: 'ご', katakana: 'ゴ', romaji: 'go', fr: 'cinq', en: 'five' },
  { hiragana: 'ろく', katakana: 'ロク', romaji: 'roku', fr: 'six', en: 'six' },
  { hiragana: 'しち / なな', katakana: 'シチ / ナナ', romaji: 'sichi / nana', fr: 'sept', en: 'seven' },
  { hiragana: 'はち', katakana: 'ハチ', romaji: 'hachi', fr: 'huit', en: 'eight' },
  { hiragana: 'きゅう', katakana: 'キュウ', romaji: 'kyuu', fr: 'neuf', en: 'nine' },
  { hiragana: 'じゅう', katakana: 'ジュウ', romaji: 'juu', fr: 'dix', en: 'ten' },
]
