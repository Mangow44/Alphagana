import type Guess from '@/models/Guess'

export const guesses: Array<Guess> = [
  { hiragana: 'はい', romaji: 'hai', fr: 'oui', en: 'yes' },
  { hiragana: 'いいえ', romaji: 'iie', fr: 'non', en: 'no' },

  // nature
  { hiragana: 'いぬ', romaji: 'inu', fr: 'chien', en: 'dog' },
  { hiragana: 'ねこ', romaji: 'neko', fr: 'chat', en: 'cat' },
  { hiragana: 'うさぎ', romaji: 'usagi', fr: 'lapin', en: 'rabbit' },
  { hiragana: 'らいおん', romaji: 'raion', fr: 'lion', en: 'lion' },
  { hiragana: 'さかな', romaji: 'sakana', fr: 'poisson', en: 'fish' },
  { hiragana: 'とり', romaji: 'tori', fr: 'oiseau', en: 'bird' },
  { hiragana: 'とら', romaji: 'tora', fr: 'tigre', en: 'tiger' },

  // pays
  { hiragana: 'あめりか', romaji: 'amerika', fr: 'états-unis', en: 'united states' },
  { hiragana: 'ふらんす', romaji: 'furansu', fr: 'france', en: 'france' },
  { hiragana: 'いぎりす', romaji: 'igirisu', fr: 'royaume-uni', en: 'united kingdom' },
  { hiragana: 'めきしこ', romaji: 'mekishiko', fr: 'mexique', en: 'mexico' },
  { hiragana: 'にほん', romaji: 'nihon', fr: 'japon', en: 'japan' },
  { hiragana: 'ちゅうごく', romaji: 'chuugoku', fr: 'chine', en: 'china' },
  { hiragana: 'どいつ', romaji: 'doitsu', fr: 'allemagne', en: 'germany' },
  { hiragana: 'ぶらじる', romaji: 'burajiru', fr: 'brésil', en: 'brazil' },

  // couleurs
  { hiragana: 'あかい', romaji: 'akai', fr: 'rouge', en: 'red' },
  { hiragana: 'あおい', romaji: 'aoi', fr: 'bleu', en: 'blue' },
  { hiragana: 'みどり', romaji: 'midori', fr: 'vert', en: 'green' },
  { hiragana: 'きいろい', romaji: 'kiiroi', fr: 'jaune', en: 'yellow' },
  { hiragana: 'おれんじ', romaji: 'orenji', fr: 'orange', en: 'orange' },
  { hiragana: 'ぴんく', romaji: 'pinku', fr: 'rose', en: 'pink' },
  { hiragana: 'くろい', romaji: 'kuroi', fr: 'noir', en: 'black' },
  { hiragana: 'しろい', romaji: 'shiroi', fr: 'blanc', en: 'white' },

  // météo
  { hiragana: 'たいよう', romaji: 'taiyou', fr: 'soleil', en: 'sun' },
  { hiragana: 'あめ', romaji: 'ame', fr: 'pluie', en: 'rain' },
  { hiragana: 'つき', romaji: 'tsuki', fr: 'lune', en: 'moon' },
  { hiragana: 'はる', romaji: 'haru', fr: 'printemps', en: 'spring' },
  { hiragana: 'なつ', romaji: 'natsu', fr: 'été', en: 'summer' },
  { hiragana: 'あき', romaji: 'aki', fr: 'automne', en: 'autumn' },
  { hiragana: 'ふゆ', romaji: 'fuyu', fr: 'hiver', en: 'winter' },

  // vêtements
  { hiragana: 'どれす', romaji: 'doresu', fr: 'robe', en: 'dress' },
  { hiragana: 'くつ', romaji: 'kutsu', fr: 'chaussure', en: 'shoe' },

  // nourriture
  { hiragana: 'ちいず', romaji: 'chiizu', fr: 'fromage', en: 'cheese' },
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

  { hiragana: 'ちょっと', romaji: 'chotto', fr: 'un petit peu', en: 'a little' },

  // Salutations
  { hiragana: 'はじめまして', romaji: 'hajimemashite', fr: 'enchanté', en: 'nice to meet you' },
  { hiragana: 'おはよう', romaji: 'ohayou', fr: 'bonne matinée', en: 'good morning' },
  { hiragana: 'こんにちわ', romaji: 'konnichiwa', fr: 'bonjour', en: 'hello' },
  { hiragana: 'こんばんわ', romaji: 'konbanwa', fr: 'bonsoir', en: 'good evening' },
  { hiragana: 'ありがとう', romaji: 'arigatou', fr: 'merci', en: 'thank you' },
  { hiragana: 'さようなら', romaji: 'sayounara', fr: 'au revoir, adieu', en: 'farewell' },

  { hiragana: 'どこ', romaji: 'doko', fr: 'où', en: 'where' },
  { hiragana: 'どう', romaji: 'dou', fr: 'comment', en: 'how' },

  // Professions
  { hiragana: 'こうこうせい', romaji: 'koukousei', fr: 'lycéen', en: 'high school student' },
  { hiragana: 'がくせい', romaji: 'gakusei', fr: 'étudiant', en: 'student' },
  { hiragana: 'かいしゃいん', romaji: 'kaishain', fr: 'employé', en: 'employee' },

  { hiragana: 'ともだち', romaji: 'tomodachi', fr: 'ami', en: 'friend' }
]
