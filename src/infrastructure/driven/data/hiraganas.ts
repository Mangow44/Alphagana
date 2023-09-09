import type { HiraganaDto } from '@/infrastructure/driven/dto/HiraganaDto'

export const hiraganas: HiraganaDto[] = [
  // Nom commun
  { hiragana: 'なまえ', romaji: 'namae', fr: 'nom', en: 'name' },
  { hiragana: 'だれ', romaji: 'dare', fr: 'qui', en: 'who' },

  // Expressions
  { hiragana: 'なにか', romaji: 'nanika', fr: 'quelque chose', en: 'something' },
  { hiragana: 'そうです', romaji: 'sou desu', fr: "c'est vrai, c'est exact", en: "that's right" },
  { hiragana: 'そうですね', romaji: 'sou desu ne', fr: 'laisse moi réfléchir', en: 'let me think' },

  // Salutations / Politesse
  { hiragana: 'はじめまして', romaji: 'hajimemashite', fr: 'enchanté', en: 'nice to meet you' },
  { hiragana: 'おはよう', romaji: 'ohayou', fr: 'bonjour (matin)', en: 'good morning' },
  { hiragana: 'こんにちわ', romaji: 'konnichiwa', fr: 'bonjour', en: 'hello' },
  { hiragana: 'こんばんわ', romaji: 'konbanwa', fr: 'bonsoir', en: 'good evening' },
  { hiragana: 'じゃあまた', romaji: 'jaa mata', fr: 'à plus tard', en: 'see you' },
  { hiragana: 'またね', romaji: 'mata ne', fr: 'à bientôt', en: 'see you soon' },
  { hiragana: 'またあした', romaji: 'mata ashita', fr: 'à demain', en: 'see you tomorrow' },
  { hiragana: 'しつれいします', romaji: 'shitsurei shimasu', fr: 'au revoir', en: 'goodbye' },
  { hiragana: 'さようなら', romaji: 'sayounara', fr: 'au revoir (adieu)', en: 'farewell' },
  {
    hiragana: 'すみません',
    romaji: 'sumimasen',
    fr: 'pardon, excusez-moi',
    en: 'sorry, excuse me'
  },
  { hiragana: 'ありがとう', romaji: 'arigatou', fr: 'merci', en: 'thank you' },
  { hiragana: 'おねがいします', romaji: 'onegai shimasu', fr: "s'il vout plaît", en: 'please' },

  // Adverbes
  { hiragana: 'はい', romaji: 'hai', fr: 'oui', en: 'yes' },
  { hiragana: 'いいえ', romaji: 'iie', fr: 'non', en: 'no' },
  { hiragana: 'どこ', romaji: 'doko', fr: 'où', en: 'where' },
  { hiragana: 'どう', romaji: 'dou', fr: "comment (c'est comment ?)", en: 'how (how is it ?)' },
  {
    hiragana: 'どうやって',
    romaji: 'douyatte',
    fr: 'comment (par quel moyen ?)',
    en: 'how (in what way ?)'
  },
  { hiragana: 'ここ', romaji: 'koko', fr: 'ici', en: 'here' },
  { hiragana: 'あそこ', romaji: 'asoko', fr: 'là-bas', en: 'over there' },
  { hiragana: 'ちょっと', romaji: 'chotto', fr: 'un petit peu', en: 'a little' },
  { hiragana: 'もっと ', romaji: 'motto', fr: 'plus, encore', en: 'more' },
  { hiragana: 'とても ', romaji: 'totemo', fr: 'beaucoup, très', en: 'a lot, very' },
  { hiragana: 'よく ', romaji: 'yoku', fr: 'souvent', en: 'often' },
  { hiragana: 'もう ', romaji: 'mou', fr: 'déjà', en: 'already' },

  // Adjectifs
  { hiragana: 'たくさん ', romaji: 'takusan', fr: 'beaucoup (quantité)', en: 'a lot' },
  { hiragana: 'おおきい ', romaji: 'ookii', fr: 'grand', en: 'tall' },
  { hiragana: 'ちいさい ', romaji: 'chiisai', fr: 'petit', en: 'small' },
  { hiragana: 'わたしの', romaji: 'watashi no', fr: 'mon / ma', en: 'my' },
  { hiragana: 'あなたの', romaji: 'anata no', fr: 'ton / ta', en: 'your' },

  // Professions
  { hiragana: 'がくせい', romaji: 'gakusei', fr: 'étudiant', en: 'student' },
  { hiragana: 'こうこうせい', romaji: 'koukousei', fr: 'lycéen', en: 'high school student' },
  {
    hiragana: 'だいがくせい',
    romaji: 'daigakusei',
    fr: "étudiant à l'université",
    en: 'university student'
  },
  { hiragana: 'かいしゃいん', romaji: 'kaishain', fr: 'employé', en: 'employee' },
  { hiragana: 'せんせい', romaji: 'sensei', fr: 'professeur', en: 'teacher' },
  { hiragana: 'いしゃ', romaji: 'isha', fr: 'médecin, docteur', en: 'doctor' },

  // Nourriture
  { hiragana: 'いただきます', romaji: 'itadakimasu', fr: 'bon appétit', en: 'enjoy your meal' },
  { hiragana: 'おいしい', romaji: 'oiishi', fr: 'délicieux, savoureux', en: 'delicious, tasty' },
  { hiragana: 'おちゃ', romaji: 'ocha', fr: 'thé', en: 'tea' },
  { hiragana: 'おこのみやき', romaji: 'okonomiyaki', fr: 'crêpe salée', en: 'crepe (salty)' },
  {
    hiragana: 'さしみ',
    romaji: 'sashimi',
    fr: 'poisson cru frais en tranche',
    en: 'sliced fresh raw fish'
  },
  { hiragana: 'しゃぶしゃぶ', romaji: 'shabushabu', fr: 'râgout de viande', en: 'meat stew' },
  {
    hiragana: 'てんぷら',
    romaji: 'tenpura',
    fr: 'poisson ou légume frit et pané',
    en: 'fried and breaded fish or vegetable'
  },

  // Saisons
  { hiragana: 'はる', romaji: 'haru', fr: 'printemps', en: 'spring' },
  { hiragana: 'なつ', romaji: 'natsu', fr: 'été', en: 'summer' },
  { hiragana: 'あき', romaji: 'aki', fr: 'automne', en: 'autumn' },
  { hiragana: 'ふゆ', romaji: 'fuyu', fr: 'hiver', en: 'winter' },

  // Nombres
  { hiragana: 'いち', romaji: 'ichi', fr: 'un', en: 'one' },
  { hiragana: 'に', romaji: 'ni', fr: 'deux', en: 'two' },
  { hiragana: 'さん', romaji: 'san', fr: 'trois', en: 'three' },
  { hiragana: 'し / よん', romaji: 'shi / yon', fr: 'quatre', en: 'four' },
  { hiragana: 'ご', romaji: 'go', fr: 'cinq', en: 'five' },
  { hiragana: 'ろく', romaji: 'roku', fr: 'six', en: 'six' },
  { hiragana: 'しち / なな', romaji: 'sichi / nana', fr: 'sept', en: 'seven' },
  { hiragana: 'はち', romaji: 'hachi', fr: 'huit', en: 'eight' },
  { hiragana: 'きゅう / く', romaji: 'kyuu / ku', fr: 'neuf', en: 'nine' },
  { hiragana: 'じゅう', romaji: 'juu', fr: 'dix', en: 'ten' },

  // Couleurs
  { hiragana: 'しろ', romaji: 'shiro', fr: 'blanc', en: 'white' },
  { hiragana: 'はいいろ', romaji: 'haiiro', fr: 'gris', en: 'gray' },
  { hiragana: 'くろ', romaji: 'kuro', fr: 'noir', en: 'black' },
  { hiragana: 'あか', romaji: 'aka', fr: 'rouge', en: 'red' },
  { hiragana: 'きいろ', romaji: 'kiiro', fr: 'jaune', en: 'yellow' },
  { hiragana: 'みどり', romaji: 'midori', fr: 'vert', en: 'green' },
  { hiragana: 'あお', romaji: 'ao', fr: 'bleu-vert', en: 'blue-green' },

  // Temporalité
  { hiragana: 'いま', romaji: 'ima', fr: 'maintenant', en: 'now' },
  { hiragana: 'じ', romaji: 'ji', fr: 'heure', en: 'hours' },

  // Maison
  { hiragana: 'いえ ', romaji: 'ie', fr: 'maison', en: 'house' }
]
