var faker = require('faker');
var characters = ["able",   "abnormal ",   "above average",   "absent-minded",   "adventurous",   "affectionate",   "agile",   "agreeable",   "alert",   "amazing",   "ambitious",   "amiable",   "amusing",   "analytical",   "angelic",   "apathetic",   "apprehensive",   "ardent",   "artificial",   "artistic",   "assertive",   "attentive",   "average",   "awesome",   "awful",   "balanced",   "beautiful",   "below average",   "beneficent",   "blue",   "blunt",   "boisterous",   "brave",   "bright",   "brilliant",   "buff",   "callous",   "candid",   "cantankerous",   "capable",   "careful",   "careless",   "caustic",   "cautious",   "charming",   "cheerful",   "chic",   "childish",   "childlike",   "churlish",   "circumspect",   "civil",   "clean",   "clever",   "clumsy",   "coherent",   "cold",   "competent",   "composed",   "conceited",   "condescending",   "confident",   "confused",   "conscientious",   "considerate",   "content",   "cool",   "cool-headed",   "cooperative",   "cordial",   "courageous",   "cowardly",   "crabby",   "crafty",   "cranky",   "crass",   "critical",   "cruel",   "curious",   "cynical",   "dainty",   "decisive",   "deep",   "deferential",   "deft",   "delicate",   "delightful",   "demonic",   "demure",   "dependent",   "depressed",   "devoted",   "dextrous",   "diligent",   "direct",   "dirty",   "disagreeable",   "discerning",   "discreet",   "disruptive",   "distant",   "distraught",   "distrustful",   "dowdy",   "dramatic",   "dreary",   "drowsy",   "drugged",   "drunk",   "dull",   "dutiful",   "eager",   "earnest",   "easy-going",   "efficient",   "egotistical",   "elfin",   "emotional",   "energetic",   "enterprising",   "enthusiastic",   "evasive",   "even-tempered",   "exacting",   "excellent",   "excitable",   "experienced",   "fabulous",   "fastidious",   "ferocious",   "fervent",   "fiery",   "flabby",   "flaky",   "flashy",   "frank",   "friendly",   "funny",   "fussy",   "generous",   "gentle",   "gloomy",   "glutinous",   "good",   "grave",   "great",   "groggy",   "grouchy",   "guarded",   "hateful",   "hearty",   "helpful",   "hesitant",   "hot-headed",   "hypercritical",   "hysterical",   "idiotic",   "idle",   "illogical",   "imaginative",   "immature",   "immodest",   "impatient",   "imperturbable",   "impetuous",   "impractical",   "impressionable",   "impressive",   "impulsive",   "inactive",   "incisive",   "incompetent",   "inconsiderate",   "inconsistent",   "indefatigable",   "independent",   "indiscreet",   "indolent",   "industrious",   "inexperienced",   "insensitive",   "inspiring",   "intelligent",   "interesting",   "intolerant",   "inventive",   "irascible",   "irritable",   "irritating",   "jocular",   "jovial",   "joyous",   "judgmental",   "keen",   "kind",   "lame",   "lazy",   "lean",   "leery",   "lethargic",   "level-headed",   "listless",   "lithe",   "lively",   "local",   "logical",   "long-winded",   "lovable",   "love-lorn",   "lovely",   "maternal",   "mature",   "mean",   "meddlesome",   "mercurial",   "methodical",   "meticulous",   "mild",   "miserable",   "modest",   "moronic",   "morose",   "motivated",   "musical",   "naive",   "nasty",   "natural",   "naughty",   "negative",   "nervous",   "noisy",   "normal",   "nosy",   "numb",   "obliging",   "obnoxious",   "old-fashioned",   "one-sided",   "orderly",   "ostentatious",   "outgoing",   "outspoken",   "passionate",   "passive",   "paternal",   "paternalistic",   "patient",   "peaceful",   "peevish",   "pensive",   "persevering",   "persnickety",   "petulant",   "picky",   "plain",   "plain-speaking",   "playful",   "pleasant",   "plucky",   "polite",   "popular",   "positive",   "powerful",   "practical",   "prejudiced",   "pretty",   "proficient",   "proud",   "provocative",   "prudent",   "punctual",   "quarrelsome",   "querulous",   "quick",   "quick-tempered",   "quiet",   "realistic",   "reassuring",   "reclusive",   "reliable",   "reluctant",   "resentful",   "reserved",   "resigned",   "resourceful",   "respected",   "respectful",   "responsible",   "restless",   "revered",   "ridiculous",   "sad",   "sassy",   "saucy",   "sedate",   "self-assured",   "selfish",   "sensible",   "sensitive",   "sentimental",   "serene",   "serious",   "sharp",   "short-tempered",   "shrewd",   "shy",   "silly",   "sincere",   "sleepy",   "slight",   "sloppy",   "slothful",   "slovenly",   "slow",   "smart",   "snazzy",   "sneering",   "snobby",   "sober",   "somber",   "sophisticated",   "soulful",   "soulless",   "sour",   "spirited",   "spiteful",   "stable",   "staid",   "steady",   "stern",   "stoic",   "striking",   "strong",   "stupid",   "sturdy",   "subtle",   "sulky",   "sullen",   "supercilious",   "superficial",   "surly",   "suspicious",   "sweet",   "tactful",   "tactless",   "talented",   "testy",   "thinking",   "thoughtful",   "thoughtless",   "timid",   "tired",   "tolerant",   "touchy",   "tranquil",   "ugly",   "unaffected",   "unbalanced",   "uncertain",   "uncooperative",   "undependable",   "unemotional",   "unfriendly",   "unguarded",   "unhelpful",   "unimaginative",   "unmotivated",   "unpleasant",   "unpopular",   "unreliable",   "unsophisticated",   "unstable",   "unsure",   "unthinking",   "unwilling",   "venal",   "versatile",   "vigilant",   "volcanic",   "vulnerable",   "warm",   "warmhearted",   "wary",   "watchful",   "weak",   "well-behaved",   "well-developed",   "well-intentioned",   "well-respected",   "well-rounded",   "willing",   "wonderful",   "zealous"].sort(function() { return Math.random()<0.5;}).map(function(a) { return "#"+a.replace(/\s/,"-");});

// index.js
module.exports = function() {
  var data = { profiles: [] }
  for (var i = 0; i < 1000; i++) {
    var card = faker.helpers.createCard();
    var name = card.name;
    var from = Math.random()*characters.length-20;
    var to = from + 1 + Math.random()*19;
    var tags = characters.slice(Math.min(from,to), Math.max(from,to));

    var item = {
      id: i,
      name: name,
      age: Math.random()*80 + 10,
      gender: Math.random()<0.5?"Male":"Female",
      location: card.address.city,
      image: faker.image.people(),
      tags: tags
    };

    console.log(item.tags);
    data.profiles.push(item);
  }
  return data;
}

module.exports();


