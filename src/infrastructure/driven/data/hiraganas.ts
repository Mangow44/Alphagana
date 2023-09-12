import type { HiraganaDto } from '@/infrastructure/driven/dto/HiraganaDto'

// https://furansujapon.com/voyage/top-100-mots-japonais/

export const hiraganas: HiraganaDto[] = [
  // Communication
  { hiragana: 'はい', romaji: 'hai', fr: 'oui', en: 'yes' },
  { hiragana: 'いいえ', romaji: 'iie', fr: 'non', en: 'no' },
  { hiragana: 'わかりません', romaji: 'wakarimasen', fr: 'je ne comprends pas', en: "I don't understand" },
  { hiragana: 'しりません', romaji: 'shirimasen', fr: 'je ne sais pas', en: "I don't know" },
  { hiragana: 'わすれました', romaji: 'wasuremashita', fr: "j'ai oublié", en: 'I forgot' },
  { hiragana: 'たぶん', romaji: 'tabun', fr: 'peut-être', en: 'maybe' },
  { hiragana: 'だいじょうぶ', romaji: 'daijoubu', fr: 'ça va', en: "I'm good" },

  // Pronoms
  { hiragana: 'わたし', romaji: 'watashi', fr: 'je / moi', en: 'I / me' },
  { hiragana: 'あなた', romaji: 'anata', fr: 'tu / toi', en: 'you' },
  { hiragana: 'おかあさん', romaji: 'okaasan', fr: 'maman', en: 'mom' },
  { hiragana: 'おにいさん', romaji: 'oniisan', fr: 'grand-frère', en: 'big brother' },
  { hiragana: 'おねえさん', romaji: 'oneesan', fr: 'grande-soeur', en: 'big sister' },
  { hiragana: 'おとうと', romaji: 'otouto', fr: 'petit-frère', en: 'little brother' },
  { hiragana: 'いもうと', romaji: 'imouto', fr: 'petite-soeur', en: 'little sister' },
  { hiragana: 'ともだち', romaji: 'tomodachi', fr: 'ami', en: 'friend' },

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
  { hiragana: 'すみません', romaji: 'sumimasen', fr: 'désolé, excusez-moi', en: 'sorry, excuse me' },
  { hiragana: 'ごめんなさい', romaji: 'gomennasai', fr: 'pardon', en: 'sorry' },
  { hiragana: 'ありがとう', romaji: 'arigatou', fr: 'merci', en: 'thank you' },
  { hiragana: 'おねがいします', romaji: 'onegai shimasu', fr: "s'il vous plaît", en: 'please' },

  // Adverbes
  { hiragana: 'どこ', romaji: 'doko', fr: 'où', en: 'where' },
  { hiragana: 'どう', romaji: 'dou', fr: "comment (c'est comment ?)", en: 'how (how is it ?)' },
  { hiragana: 'どうやって', romaji: 'douyatte', fr: 'comment (par quel moyen ?)', en: 'how (in what way ?)' },
  { hiragana: 'ここ', romaji: 'koko', fr: 'ici', en: 'here' },
  { hiragana: 'あそこ', romaji: 'asoko', fr: 'là-bas', en: 'over there' },
  { hiragana: 'ちょっと', romaji: 'chotto', fr: 'un petit peu', en: 'a little' },
  { hiragana: 'もっと', romaji: 'motto', fr: 'plus, encore', en: 'more' },
  { hiragana: 'とても', romaji: 'totemo', fr: 'beaucoup, très', en: 'a lot, very' },
  { hiragana: 'よく', romaji: 'yoku', fr: 'souvent', en: 'often' },
  { hiragana: 'もう', romaji: 'mou', fr: 'déjà', en: 'already' },

  // Adjectifs
  { hiragana: 'たくさん', romaji: 'takusan', fr: 'beaucoup (quantité)', en: 'a lot' },
  { hiragana: 'おおきい', romaji: 'ookii', fr: 'grand', en: 'tall' },
  { hiragana: 'ちいさい', romaji: 'chiisai', fr: 'petit', en: 'small' },
  { hiragana: 'わたしの', romaji: 'watashi no', fr: 'mon / ma', en: 'my' },
  { hiragana: 'あなたの', romaji: 'anata no', fr: 'ton / ta', en: 'your' },

  // Professions
  { hiragana: 'がくせい', romaji: 'gakusei', fr: 'étudiant', en: 'student' },
  { hiragana: 'こうこうせい', romaji: 'koukousei', fr: 'lycéen', en: 'high school student' },
  { hiragana: 'だいがくせい', romaji: 'daigakusei', fr: "étudiant à l'université", en: 'university student' },
  { hiragana: 'かいしゃいん', romaji: 'kaishain', fr: 'employé', en: 'employee' },
  { hiragana: 'せんせい', romaji: 'sensei', fr: 'professeur', en: 'teacher' },
  { hiragana: 'いしゃ', romaji: 'isha', fr: 'médecin, docteur', en: 'doctor' },

  // Nourriture
  { hiragana: 'いただきます', romaji: 'itadakimasu', fr: 'bon appétit', en: 'enjoy your meal' },
  { hiragana: 'おいしい', romaji: 'oiishi', fr: 'délicieux, savoureux', en: 'delicious, tasty' },
  { hiragana: 'おちゃ', romaji: 'ocha', fr: 'thé', en: 'tea' },
  { hiragana: 'おこのみやき', romaji: 'okonomiyaki', fr: 'crêpe salée', en: 'crepe (salty)' },
  { hiragana: 'さしみ', romaji: 'sashimi', fr: 'poisson cru frais en tranche', en: 'sliced fresh raw fish' },
  { hiragana: 'しゃぶしゃぶ', romaji: 'shabushabu', fr: 'râgout de viande', en: 'meat stew' },
  { hiragana: 'てんぷら', romaji: 'tenpura', fr: 'poisson ou légume frit et pané', en: 'fried and breaded fish or vegetable'},

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
  { hiragana: 'ひゃく', romaji: 'hyaku', fr: 'cent', en: 'one hundred' },

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
  { hiragana: 'あさ', romaji: 'asa', fr: 'matin', en: 'morning' },
  { hiragana: 'ひる', romaji: 'hiru', fr: 'midi', en: 'noon' },
  { hiragana: 'ゆうがた', romaji: 'yuugata', fr: 'soir', en: 'evening' },
  { hiragana: 'よる', romaji: 'yoru', fr: 'nuit', en: 'night' },

  // Maison
  { hiragana: 'いえ', romaji: 'ie', fr: 'maison', en: 'house' },

  // Transports
  { hiragana: 'ひこうき', romaji: 'hikouki', fr: 'avion', en: 'plane' },
  { hiragana: 'ふね', romaji: 'fune', fr: 'bateau', en: 'boat' },
  { hiragana: 'でんしゃ', romaji: 'densha', fr: 'train', en: 'train' },
  { hiragana: 'しんかんせん', romaji: 'shinkansen', fr: 'TGV', en: 'HSR' },
  { hiragana: 'くるま', romaji: 'kuruma', fr: 'voiture', en: 'car' },
  { hiragana: 'じてんしゃ', romaji: 'jitensha', fr: 'vélo', en: 'bike' },

  // Directions
  { hiragana: 'まっすぐ', romaji: 'massugu', fr: 'tout droit', en: 'straight ahead' },
  { hiragana: 'ひだり', romaji: 'hidari', fr: 'gauche', en: 'left' },
  { hiragana: 'みぎ', romaji: 'migi', fr: 'droite', en: 'right' },
  { hiragana: 'きた', romaji: 'kita', fr: 'nord', en: 'north' },
  { hiragana: 'ひがし', romaji: 'higashi', fr: 'est (direction)', en: 'east' },
  { hiragana: 'みなみ', romaji: 'minami', fr: 'sud', en: 'south' },
  { hiragana: 'にし', romaji: 'nishi', fr: 'ouest', en: 'west' },

  // Lieux
  { hiragana: 'ぎんこう', romaji: 'ginkou', fr: 'banque', en: 'bank' },
  { hiragana: 'えき', romaji: 'eki', fr: 'gare', en: 'train station' },
  { hiragana: 'びょういん', romaji: 'biyoin', fr: 'hôpital', en: 'hospital' },
  { hiragana: 'まちのちゅしん', romaji: 'machi no chushin', fr: 'centre-ville', en: 'downtown' },

  // Jours de la semaine
  { hiragana: 'げつようび', romaji: 'getsuyoubi', fr: 'lundi', en: 'monday' },
  { hiragana: 'かようび', romaji: 'kayoubi', fr: 'mardi', en: 'tuesday' },
  { hiragana: 'すいようび', romaji: 'suiyoubi', fr: 'mercredi', en: 'wednesday' },
  { hiragana: 'もくようび', romaji: 'mokuyoubi', fr: 'jeudi', en: 'thursday' },
  { hiragana: 'きんようび', romaji: 'kinyoubi', fr: 'vendredi', en: 'friday' },
  { hiragana: 'どようび', romaji: 'doyoubi', fr: 'samedi', en: 'saturday' },
  { hiragana: 'にちようび', romaji: 'nichiyoubi', fr: 'dimanche', en: 'sunday' },

  // Mois de la semaine
  { hiragana: 'いちがつ', romaji: 'ichigatsu', fr: 'janvier', en: 'january' },
  { hiragana: 'にがつ', romaji: 'nigatsu', fr: 'février', en: 'febuary' },
  { hiragana: 'さんがつ', romaji: 'sangatsu', fr: 'mars', en: 'march' },
  { hiragana: 'しがつ', romaji: 'shigatsu', fr: 'avril', en: 'april' },
  { hiragana: 'ごがつ', romaji: 'gogatsu', fr: 'mai', en: 'may' },
  { hiragana: 'ろくがつ', romaji: 'rokugatsu', fr: 'juin', en: 'june' },
  { hiragana: 'しちがつ', romaji: 'shichigatsu', fr: 'juillet', en: 'july' },
  { hiragana: 'はちがつ', romaji: 'hachigatsu', fr: 'août', en: 'august' },
  { hiragana: 'くがつ', romaji: 'kugatsu', fr: 'septembre', en: 'september' },
  { hiragana: 'じゅうがつ', romaji: 'juugatsu', fr: 'octobre', en: 'october' },
  { hiragana: 'じゅういちがつ', romaji: 'juuichigatsu', fr: 'novembre', en: 'november' },
  { hiragana: 'じゅうにがつ', romaji: 'juunigatsu', fr: 'décembre', en: 'december' }
]
