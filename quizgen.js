// quizgen.js v9 — грамматически корректный генератор
// Согласование числа, артикли, падежи, времена

// ═══════════════════════════════════════════════
// ТЕГИ СЛОВ
// ═══════════════════════════════════════════════

const ANIMALS = new Set(['cat','dog','bird','fish','horse','cow','pig','sheep',
    'mouse','lion','elephant','monkey','duck','chicken','bear','rabbit','tiger',
    'wolf','fox','snake','frog','bee','butterfly','spider','rat','goat']);

const FOOD = new Set(['apple','bread','cheese','egg','meat','soup','salad',
    'cake','chocolate','coffee','tea','milk','juice','rice','sugar','salt',
    'butter','orange','banana','tomato','potato','pizza','burger','sandwich',
    'carrot','fruit','ice cream','water','wine','beer','honey','jam','candy',
    'cookie','pie','yogurt']);

const PLACES = new Set(['city','street','road','bridge','park','shop','market',
    'school','hospital','bank','station','airport','hotel','restaurant',
    'church','castle','museum','library','office','factory','farm','village',
    'town','country','island','beach','cinema','club','theatre','zoo','garden']);

const HOUSE = new Set(['house','room','door','window','table','chair','bed',
    'kitchen','bathroom','bedroom','floor','wall','roof','lamp',
    'mirror','cup','plate','bowl','box','bag','bottle','key','phone','book',
    'pen','pencil','paper','clock','watch','knife','fork','spoon','desk',
    'sofa','shelf','drawer','carpet','pillow','blanket','towel','brush','comb',
    'soap','toy','doll','ball','kite','guitar','piano','violin','television']);

const PEOPLE = new Set(['man','woman','boy','girl','child','baby','friend',
    'family','mother','father','brother','sister','teacher','student',
    'doctor','nurse','driver','worker','artist','actor','author','dentist',
    'engineer','farmer','lawyer','manager','officer','pilot','police',
    'scientist','singer','writer','guest','hero','husband','wife','lady',
    'neighbour','parent','partner','passenger','president','professor',
    'secretary','soldier','visitor','winner','customer','son','daughter',
    'grandfather','grandmother','uncle','aunt','cousin','boss','coach']);

const NATURE = new Set(['sun','moon','star','sky','sea','river','mountain',
    'forest','tree','flower','grass','stone','sand','snow','rain','wind',
    'cloud','lake','field','hill','valley','desert','fire',
    'ice','earth','air','light','shadow','rainbow','storm','night','day']);

const TRANSPORT = new Set(['car','bus','train','plane','ship','bike','taxi',
    'boat','truck','motorcycle','helicopter','rocket','subway']);

const CLOTHES = new Set(['shirt','dress','coat','hat','shoe','boot','jacket',
    'glove','sock','tie','skirt','scarf','sweater','jeans','trousers','shorts',
    'cap','belt','button','pocket']);

const TECH = new Set(['computer','phone','camera','radio','video',
    'laptop','tablet','robot','machine','engine','motor']);

const ABSTRACT = new Set(['situation','emotion','problem','idea','reason',
    'chance','choice','action','activity','attention','attitude','amount',
    'area','case','cause','condition','contact','control','course','culture',
    'damage','danger','death','decision','degree','detail','difference',
    'direction','distance','doubt','effect','effort','energy','event',
    'example','experience','fact','fear','feeling','field','form','function',
    'future','goal','growth','habit','health','history','hope','industry',
    'influence','interest','issue','job','journey','justice','kind',
    'knowledge','language','law','level','limit','list','love','luck',
    'meaning','measure','method','mind','moment','nature','need','note',
    'order','part','past','peace','period','place','plan','point','position',
    'power','practice','present','price','pride','process','progress',
    'purpose','quality','question','respect','result','right','role','rule',
    'safety','sense','service','shape','share','side','sign','silence','size',
    'skill','society','solution','sound','space','speed','spirit','standard',
    'state','step','story','strength','stress','structure','style','success',
    'support','system','taste','team','technology','term','test','thought',
    'time','title','touch','tradition','traffic','training','trouble',
    'trust','truth','type','value','view','voice','war','way','weather',
    'weight','will','wish','word','work','world','worry','worth',
    'noon','midnight','internet','money','music','news','information',
    'advice','furniture','luggage','homework','housework','shopping']);

const COLORS = new Set(['red','blue','green','yellow','black','white','brown',
    'pink','orange','purple','grey','gray','gold','silver']);

const EMOTIONS = new Set(['happy','sad','angry','tired','hungry','thirsty',
    'afraid','glad','proud','surprised','excited','bored','nervous','calm',
    'worried','confused','interested','kind','polite','rude',
    'lonely','jealous']);

const SIZES = new Set(['big','small','large','tiny','huge','giant','short',
    'tall','long','wide','narrow','thick','thin','fat','slim']);

const QUALITIES = new Set(['good','bad','new','old','young','beautiful',
    'easy','difficult','important','interesting','boring','funny','serious',
    'quiet','loud','clean','dirty','light','dark','strong','weak','rich',
    'poor','free','busy','full','empty','right','wrong','heavy','fast',
    'slow','hot','cold','warm','cool','sweet','sour','fresh','safe',
    'dangerous','famous','useful','common','rare','special','different',
    'similar','same','real','true','false','possible','impossible']);

const ACTION_VERBS = new Set(['run','walk','jump','swim','fly','sing','dance',
    'speak','read','write','work','study','play','cook','draw','paint',
    'drive','listen','look','smile','laugh','cry','shout','talk','eat',
    'drink','sleep','wake','wash','clean','sit','stand','wait','rest',
    'travel','climb','ride','skate','ski','exercise','help']);

const MOTION_VERBS = new Set(['go','come','arrive','leave','return','enter',
    'exit','climb','fall','rise','travel','visit','move','stay']);

const STATE_VERBS = new Set(['be','know','understand','believe','remember',
    'forget','want','need','like','love','hate','prefer','think','hope',
    'wish','feel','seem','appear']);

const TRANSITIVE = new Set(['put','take','make','do','get','find','buy',
    'sell','give','bring','send','show','tell','ask','have','see','hear',
    'open','close','break','fix','choose','share','lend','pay','build',
    'create','hold','keep','carry','receive','accept','reject','offer',
    'provide','prepare','produce','deliver','reach','follow','watch',
    'notice','gather','develop','improve','increase','decrease','change',
    'measure','compare','discuss','decide','promise','agree','refuse',
    'allow','forbid','invite','join','borrow','owe','earn','spend','save',
    'cost','pack','lift','push','pull','throw','catch','hit','kick',
    'touch','smell','realize','dream','plan','finish','continue','repeat',
    'translate','explain','describe','mention','report','announce','warn',
    'advise','suggest','recommend']);

// ═══════════════════════════════════════════════
// ОПРЕДЕЛЕНИЕ ТЕГОВ
// ═══════════════════════════════════════════════
function getTags(word) {
    const en = (word.eng || '').toLowerCase();
    const pos = word.pos || 'noun';
    const tags = { pos };
    
    if (ANIMALS.has(en)) tags.topic = 'animal';
    else if (FOOD.has(en)) tags.topic = 'food';
    else if (PLACES.has(en)) tags.topic = 'place';
    else if (HOUSE.has(en)) tags.topic = 'house';
    else if (PEOPLE.has(en)) tags.topic = 'person';
    else if (NATURE.has(en)) tags.topic = 'nature';
    else if (TRANSPORT.has(en)) tags.topic = 'transport';
    else if (CLOTHES.has(en)) tags.topic = 'clothes';
    else if (TECH.has(en)) tags.topic = 'tech';
    else if (ABSTRACT.has(en)) tags.topic = 'abstract';
    
    if (pos === 'adjective') {
        if (COLORS.has(en)) tags.kind = 'color';
        else if (EMOTIONS.has(en)) tags.kind = 'emotion';
        else if (SIZES.has(en)) tags.kind = 'size';
        else if (QUALITIES.has(en)) tags.kind = 'quality';
    }
    
    if (pos === 'verb') {
        if (TRANSITIVE.has(en)) tags.kind = 'transitive';
        else if (MOTION_VERBS.has(en)) tags.kind = 'motion';
        else if (STATE_VERBS.has(en)) tags.kind = 'state';
        else if (ACTION_VERBS.has(en)) tags.kind = 'action';
    }
    
    return tags;
}

function canGenerate(word) {
    const tags = getTags(word);
    if (tags.topic === 'abstract') return false;
    if (tags.kind === 'transitive') return false;
    if (tags.kind === 'state') return false;
    if (tags.pos === 'preposition') return false;
    if (tags.pos === 'conjunction') return false;
    if (tags.pos === 'article') return false;
    if (tags.pos === 'pronoun') return false;
    return true;
}

// ═══════════════════════════════════════════════
// МНОЖЕСТВЕННОЕ ЧИСЛО (правила)
// ═══════════════════════════════════════════════
function pluralize(en) {
    if (!en) return en;
    
    // Неправильные
    const irregular = {
        'man': 'men', 'woman': 'women', 'child': 'children', 'person': 'people',
        'foot': 'feet', 'tooth': 'teeth', 'mouse': 'mice', 'goose': 'geese',
        'sheep': 'sheep', 'fish': 'fish', 'deer': 'deer'
    };
    if (irregular[en]) return irregular[en];
    
    // Слова на -s, -sh, -ch, -x, -z
    if (/(s|sh|ch|x|z)$/.test(en)) return en + 'es';
    
    // Слова на согласную + y → -ies
    if (/[^aeiou]y$/.test(en)) return en.slice(0, -1) + 'ies';
    
    // Слова на -f, -fe → -ves (общие)
    if (/fe?$/.test(en) && ['knife','wife','life','leaf','shelf','wolf','half'].includes(en)) {
        return en.replace(/fe?$/, 'ves');
    }
    
    // По умолчанию + s
    return en + 's';
}

// ═══════════════════════════════════════════════
// ВСПОМОГАТЕЛЬНЫЕ
// ═══════════════════════════════════════════════
function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function getArticle(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(word[0].toLowerCase()) ? 'an' : 'a';
}

function capitalize(s) { return s ? s.charAt(0).toUpperCase() + s.slice(1) : ''; }

// Винительный падеж (упрощённый, но правильный для большинства)
function toAccusative(ru) {
    if (!ru) return ru;
    // Женский род -а → -у
    if (ru.endsWith('а')) return ru.slice(0, -1) + 'у';
    if (ru.endsWith('я')) return ru.slice(0, -1) + 'ю';
    // Мягкий знак — без изменений
    if (ru.endsWith('ь')) return ru;
    // Мужской род одушевлённые — нужно -а/-я, но упрощаем
    if (ru.endsWith('ый')) return ru.slice(0, -2) + 'ого';
    if (ru.endsWith('ий')) return ru.slice(0, -2) + 'его';
    if (ru.endsWith('ой')) return ru.slice(0, -2) + 'ого';
    return ru;
}

// Подстановка в шаблон
function fillTemplate(tpl, word) {
    const en = word.eng;
    const r = word.ru;
    const rCap = capitalize(r);
    const rAcc = toAccusative(r);
    const a = getArticle(en);
    const plural = pluralize(en);
    
    return {
        en: tpl.en
            .replace(/{w}/g, en)
            .replace(/{ws}/g, plural)
            .replace(/{a}/g, a),
        ru: tpl.ru
            .replace(/{r}/g, r)
            .replace(/{R}/g, rCap)
            .replace(/{r_acc}/g, rAcc)
    };
}

// ═══════════════════════════════════════════════
// ШАБЛОНЫ
// {w} — слово, {ws} — мн.ч., {a} — артикль
// {r} — перевод, {R} — с заглавной, {r_acc} — винительный
// ═══════════════════════════════════════════════

const TEMPLATES = [
    // ══════ ЖИВОТНЫЕ ══════
    { req: { pos: 'noun', topic: 'animal' }, en: 'I have a {a} {w}.', ru: 'У меня есть {r}.' },
    { req: { pos: 'noun', topic: 'animal' }, en: 'The {w} is big.', ru: '{R} большой.' },
    { req: { pos: 'noun', topic: 'animal' }, en: 'The {w} is small.', ru: '{R} маленький.' },
    { req: { pos: 'noun', topic: 'animal' }, en: 'The {w} is sleeping.', ru: '{R} спит.' },
    { req: { pos: 'noun', topic: 'animal' }, en: 'I see a {a} {w}.', ru: 'Я вижу {r_acc}.' },
    { req: { pos: 'noun', topic: 'animal' }, en: 'Look at the {w}!', ru: 'Посмотри на {r_acc}!' },
    { req: { pos: 'noun', topic: 'animal' }, en: 'Do you like {ws}?', ru: 'Ты любишь {r}?' },
    { req: { pos: 'noun', topic: 'animal' }, en: 'Where is the {w}?', ru: 'Где {r}?' },
    { req: { pos: 'noun', topic: 'animal' }, en: 'The {w} runs fast.', ru: '{R} бегает быстро.' },
    { req: { pos: 'noun', topic: 'animal' }, en: 'This is my {w}.', ru: 'Это мой {r}.' },
    { req: { pos: 'noun', topic: 'animal' }, en: 'The {w} is very beautiful.', ru: '{R} очень красивый.' },
    { req: { pos: 'noun', topic: 'animal' }, en: 'I like {ws}.', ru: 'Я люблю {r}.' },
    { req: { pos: 'noun', topic: 'animal' }, en: 'The {w} is here.', ru: '{R} здесь.' },
    { req: { pos: 'noun', topic: 'animal' }, en: 'I see many {ws}.', ru: 'Я вижу много {r}.' },

    // ══════ ЕДА ══════
    { req: { pos: 'noun', topic: 'food' }, en: 'I like {w}.', ru: 'Я люблю {r}.' },
    { req: { pos: 'noun', topic: 'food' }, en: 'I eat {w} every day.', ru: 'Я ем {r} каждый день.' },
    { req: { pos: 'noun', topic: 'food' }, en: 'Do you want {w}?', ru: 'Хочешь {r}?' },
    { req: { pos: 'noun', topic: 'food' }, en: 'I bought some {w}.', ru: 'Я купил {r}.' },
    { req: { pos: 'noun', topic: 'food' }, en: 'This {w} is very good.', ru: 'Это {r} очень хороший.' },
    { req: { pos: 'noun', topic: 'food' }, en: 'I have some {w}.', ru: 'У меня есть {r}.' },
    { req: { pos: 'noun', topic: 'food' }, en: 'Where is my {w}?', ru: 'Где мой {r}?' },
    { req: { pos: 'noun', topic: 'food' }, en: 'I like this {w}.', ru: 'Мне нравится этот {r}.' },
    { req: { pos: 'noun', topic: 'food' }, en: 'The {w} is on the table.', ru: '{R} на столе.' },
    { req: { pos: 'noun', topic: 'food' }, en: 'Do you like {w}?', ru: 'Ты любишь {r}?' },
    { req: { pos: 'noun', topic: 'food' }, en: 'I eat {w} for breakfast.', ru: 'Я ем {r} на завтрак.' },
    { req: { pos: 'noun', topic: 'food' }, en: 'This {w} tastes good.', ru: 'Этот {r} вкусный.' },

    // ══════ МЕСТА ══════
    { req: { pos: 'noun', topic: 'place' }, en: 'I go to the {w}.', ru: 'Я иду в {r_acc}.' },
    { req: { pos: 'noun', topic: 'place' }, en: 'The {w} is near my house.', ru: '{R} рядом с домом.' },
    { req: { pos: 'noun', topic: 'place' }, en: 'Where is the {w}?', ru: 'Где {r}?' },
    { req: { pos: 'noun', topic: 'place' }, en: 'Let\'s go to the {w}.', ru: 'Пойдём в {r_acc}.' },
    { req: { pos: 'noun', topic: 'place' }, en: 'The {w} is very big.', ru: '{R} очень большой.' },
    { req: { pos: 'noun', topic: 'place' }, en: 'Do you know the {w}?', ru: 'Ты знаешь {r_acc}?' },
    { req: { pos: 'noun', topic: 'place' }, en: 'I like this {w}.', ru: 'Мне нравится этот {r}.' },
    { req: { pos: 'noun', topic: 'place' }, en: 'The {w} is in the city centre.', ru: '{R} в центре города.' },
    { req: { pos: 'noun', topic: 'place' }, en: 'We visit the {w} every day.', ru: 'Мы посещаем {r_acc} каждый день.' },
    { req: { pos: 'noun', topic: 'place' }, en: 'The {w} is closed today.', ru: '{R} сегодня закрыт.' },
    { req: { pos: 'noun', topic: 'place' }, en: 'This {w} is very beautiful.', ru: 'Этот {r} очень красивый.' },
    { req: { pos: 'noun', topic: 'place' }, en: 'I work in the {w}.', ru: 'Я работаю в {r}.' },

    // ══════ ДОМ ══════
    { req: { pos: 'noun', topic: 'house' }, en: 'The {w} is big.', ru: '{R} большой.' },
    { req: { pos: 'noun', topic: 'house' }, en: 'Open the {w}.', ru: 'Открой {r_acc}.' },
    { req: { pos: 'noun', topic: 'house' }, en: 'Close the {w}.', ru: 'Закрой {r_acc}.' },
    { req: { pos: 'noun', topic: 'house' }, en: 'Where is the {w}?', ru: 'Где {r}?' },
    { req: { pos: 'noun', topic: 'house' }, en: 'This is a nice {w}.', ru: 'Это хороший {r}.' },
    { req: { pos: 'noun', topic: 'house' }, en: 'I have a {a} {w}.', ru: 'У меня есть {r}.' },
    { req: { pos: 'noun', topic: 'house' }, en: 'The {w} is on the table.', ru: '{R} на столе.' },
    { req: { pos: 'noun', topic: 'house' }, en: 'Look at the {w}!', ru: 'Посмотри на {r_acc}!' },
    { req: { pos: 'noun', topic: 'house' }, en: 'The {w} is very good.', ru: '{R} очень хороший.' },
    { req: { pos: 'noun', topic: 'house' }, en: 'I need a {a} {w}.', ru: 'Мне нужен {r}.' },
    { req: { pos: 'noun', topic: 'house' }, en: 'This {w} is new.', ru: 'Этот {r} новый.' },
    { req: { pos: 'noun', topic: 'house' }, en: 'I use this {w} every day.', ru: 'Я использую {r_acc} каждый день.' },

    // ══════ ЛЮДИ ══════
    { req: { pos: 'noun', topic: 'person' }, en: 'He is a {a} {w}.', ru: 'Он {r}.' },
    { req: { pos: 'noun', topic: 'person' }, en: 'She is a {a} {w}.', ru: 'Она {r}.' },
    { req: { pos: 'noun', topic: 'person' }, en: 'This is my {w}.', ru: 'Это мой {r}.' },
    { req: { pos: 'noun', topic: 'person' }, en: 'The {w} is very kind.', ru: '{R} очень добрый.' },
    { req: { pos: 'noun', topic: 'person' }, en: 'I know a {a} {w}.', ru: 'Я знаю {r_acc}.' },
    { req: { pos: 'noun', topic: 'person' }, en: 'The {w} works here.', ru: '{R} работает здесь.' },
    { req: { pos: 'noun', topic: 'person' }, en: 'Do you know this {w}?', ru: 'Ты знаешь этого {r_acc}?' },
    { req: { pos: 'noun', topic: 'person' }, en: 'I saw a {a} {w} yesterday.', ru: 'Я видел {r_acc} вчера.' },
    { req: { pos: 'noun', topic: 'person' }, en: 'My {w} is very nice.', ru: 'Мой {r} очень хороший.' },

    // ══════ ПРИРОДА ══════
    { req: { pos: 'noun', topic: 'nature' }, en: 'The {w} is beautiful.', ru: '{R} красивый.' },
    { req: { pos: 'noun', topic: 'nature' }, en: 'I like the {w}.', ru: 'Мне нравится {r}.' },
    { req: { pos: 'noun', topic: 'nature' }, en: 'Look at the {w}!', ru: 'Посмотри на {r_acc}!' },
    { req: { pos: 'noun', topic: 'nature' }, en: 'The {w} is in the sky.', ru: '{R} в небе.' },
    { req: { pos: 'noun', topic: 'nature' }, en: 'I see the {w}.', ru: 'Я вижу {r_acc}.' },
    { req: { pos: 'noun', topic: 'nature' }, en: 'The {w} is very big.', ru: '{R} очень большой.' },
    { req: { pos: 'noun', topic: 'nature' }, en: 'Where is the {w}?', ru: 'Где {r}?' },
    { req: { pos: 'noun', topic: 'nature' }, en: 'The {w} is amazing.', ru: '{R} удивительный.' },

    // ══════ ТРАНСПОРТ ══════
    { req: { pos: 'noun', topic: 'transport' }, en: 'I go by {w}.', ru: 'Я еду на {r}.' },
    { req: { pos: 'noun', topic: 'transport' }, en: 'The {w} is very fast.', ru: '{R} очень быстрый.' },
    { req: { pos: 'noun', topic: 'transport' }, en: 'I have a {a} {w}.', ru: 'У меня есть {r}.' },
    { req: { pos: 'noun', topic: 'transport' }, en: 'The {w} is red.', ru: '{R} красный.' },
    { req: { pos: 'noun', topic: 'transport' }, en: 'Where is my {w}?', ru: 'Где мой {r}?' },
    { req: { pos: 'noun', topic: 'transport' }, en: 'I like this {w}.', ru: 'Мне нравится этот {r}.' },
    { req: { pos: 'noun', topic: 'transport' }, en: 'The {w} is very expensive.', ru: '{R} очень дорогой.' },

    // ══════ ОДЕЖДА ══════
    { req: { pos: 'noun', topic: 'clothes' }, en: 'I wear a {a} {w}.', ru: 'Я ношу {r_acc}.' },
    { req: { pos: 'noun', topic: 'clothes' }, en: 'This {w} is new.', ru: 'Этот {r} новый.' },
    { req: { pos: 'noun', topic: 'clothes' }, en: 'I like this {w}.', ru: 'Мне нравится этот {r}.' },
    { req: { pos: 'noun', topic: 'clothes' }, en: 'Where is my {w}?', ru: 'Где мой {r}?' },
    { req: { pos: 'noun', topic: 'clothes' }, en: 'Put on your {w}.', ru: 'Надень {r_acc}.' },
    { req: { pos: 'noun', topic: 'clothes' }, en: 'The {w} is beautiful.', ru: '{R} красивый.' },

    // ══════ ТЕХНИКА ══════
    { req: { pos: 'noun', topic: 'tech' }, en: 'I have a {a} {w}.', ru: 'У меня есть {r}.' },
    { req: { pos: 'noun', topic: 'tech' }, en: 'This {w} is new.', ru: 'Этот {r} новый.' },
    { req: { pos: 'noun', topic: 'tech' }, en: 'I use my {w} every day.', ru: 'Я использую {r_acc} каждый день.' },
    { req: { pos: 'noun', topic: 'tech' }, en: 'Where is my {w}?', ru: 'Где мой {r}?' },
    { req: { pos: 'noun', topic: 'tech' }, en: 'This {w} is very good.', ru: 'Этот {r} очень хороший.' },

    // ══════ ЦВЕТА ══════
    { req: { pos: 'adjective', kind: 'color' }, en: 'It is {w}.', ru: 'Это {r}.' },
    { req: { pos: 'adjective', kind: 'color' }, en: 'The car is {w}.', ru: 'Машина {r}.' },
    { req: { pos: 'adjective', kind: 'color' }, en: 'My favorite color is {w}.', ru: 'Мой любимый цвет — {r}.' },
    { req: { pos: 'adjective', kind: 'color' }, en: 'She has a {w} dress.', ru: 'У неё {r} платье.' },
    { req: { pos: 'adjective', kind: 'color' }, en: 'The sky is {w} today.', ru: 'Небо сегодня {r}.' },
    { req: { pos: 'adjective', kind: 'color' }, en: 'I like {w} flowers.', ru: 'Я люблю {r} цветы.' },
    { req: { pos: 'adjective', kind: 'color' }, en: 'Do you like {w}?', ru: 'Тебе нравится {r}?' },

    // ══════ ЭМОЦИИ ══════
    { req: { pos: 'adjective', kind: 'emotion' }, en: 'I am {w}.', ru: 'Я {r}.' },
    { req: { pos: 'adjective', kind: 'emotion' }, en: 'She looks {w}.', ru: 'Она выглядит {r}.' },
    { req: { pos: 'adjective', kind: 'emotion' }, en: 'Why are you {w}?', ru: 'Почему ты {r}?' },
    { req: { pos: 'adjective', kind: 'emotion' }, en: 'He feels {w} today.', ru: 'Он чувствует себя {r} сегодня.' },
    { req: { pos: 'adjective', kind: 'emotion' }, en: 'I am not {w}.', ru: 'Я не {r}.' },
    { req: { pos: 'adjective', kind: 'emotion' }, en: 'Are you {w}?', ru: 'Ты {r}?' },

    // ══════ РАЗМЕРЫ ══════
    { req: { pos: 'adjective', kind: 'size' }, en: 'It is very {w}.', ru: 'Это очень {r}.' },
    { req: { pos: 'adjective', kind: 'size' }, en: 'The house is {w}.', ru: 'Дом {r}.' },
    { req: { pos: 'adjective', kind: 'size' }, en: 'The dog is {w}.', ru: 'Собака {r}.' },
    { req: { pos: 'adjective', kind: 'size' }, en: 'This is a {w} room.', ru: 'Это {r} комната.' },
    { req: { pos: 'adjective', kind: 'size' }, en: 'Is it {w}?', ru: 'Это {r}?' },

    // ══════ КАЧЕСТВА ══════
    { req: { pos: 'adjective', kind: 'quality' }, en: 'It is very {w}.', ru: 'Это очень {r}.' },
    { req: { pos: 'adjective', kind: 'quality' }, en: 'The house is {w}.', ru: 'Дом {r}.' },
    { req: { pos: 'adjective', kind: 'quality' }, en: 'This is a {w} day.', ru: 'Это {r} день.' },
    { req: { pos: 'adjective', kind: 'quality' }, en: 'She is very {w}.', ru: 'Она очень {r}.' },
    { req: { pos: 'adjective', kind: 'quality' }, en: 'The book is {w}.', ru: 'Книга {r}.' },
    { req: { pos: 'adjective', kind: 'quality' }, en: 'I like {w} things.', ru: 'Мне нравятся {r} вещи.' },
    { req: { pos: 'adjective', kind: 'quality' }, en: 'This is not {w}.', ru: 'Это не {r}.' },
    { req: { pos: 'adjective', kind: 'quality' }, en: 'The film was {w}.', ru: 'Фильм был {r}.' },

    // ══════ ГЛАГОЛЫ ДЕЙСТВИЯ ══════
    { req: { pos: 'verb', kind: 'action' }, en: 'I {w} every day.', ru: 'Я {r} каждый день.' },
    { req: { pos: 'verb', kind: 'action' }, en: 'She can {w} very well.', ru: 'Она умеет {r} очень хорошо.' },
    { req: { pos: 'verb', kind: 'action' }, en: 'We {w} together.', ru: 'Мы {r} вместе.' },
    { req: { pos: 'verb', kind: 'action' }, en: 'Let\'s {w}!', ru: 'Давай {r}!' },
    { req: { pos: 'verb', kind: 'action' }, en: 'I like to {w}.', ru: 'Я люблю {r}.' },
    { req: { pos: 'verb', kind: 'action' }, en: 'Do you {w}?', ru: 'Ты {r}?' },
    { req: { pos: 'verb', kind: 'action' }, en: 'They {w} in the morning.', ru: 'Они {r} утром.' },
    { req: { pos: 'verb', kind: 'action' }, en: 'Can you {w}?', ru: 'Ты умеешь {r}?' },
    { req: { pos: 'verb', kind: 'action' }, en: 'I want to {w} now.', ru: 'Я хочу {r} сейчас.' },
    { req: { pos: 'verb', kind: 'action' }, en: 'I don\'t {w} very often.', ru: 'Я не {r} очень часто.' },

    // ══════ ГЛАГОЛЫ ДВИЖЕНИЯ ══════
    { req: { pos: 'verb', kind: 'motion' }, en: 'I {w} to school.', ru: 'Я {r} в школу.' },
    { req: { pos: 'verb', kind: 'motion' }, en: 'We {w} together.', ru: 'Мы {r} вместе.' },
    { req: { pos: 'verb', kind: 'motion' }, en: 'She wants to {w}.', ru: 'Она хочет {r}.' },
    { req: { pos: 'verb', kind: 'motion' }, en: 'Let\'s {w}!', ru: 'Давай {r}!' },
    { req: { pos: 'verb', kind: 'motion' }, en: 'They {w} every day.', ru: 'Они {r} каждый день.' },
    { req: { pos: 'verb', kind: 'motion' }, en: 'I want to {w} home.', ru: 'Я хочу {r} домой.' },

    // ══════ НАРЕЧИЯ ══════
    { req: { pos: 'adverb' }, en: 'He speaks {w}.', ru: 'Он говорит {r}.' },
    { req: { pos: 'adverb' }, en: 'She works {w}.', ru: 'Она работает {r}.' },
    { req: { pos: 'adverb' }, en: 'Do it {w}!', ru: 'Сделай это {r}!' },
    { req: { pos: 'adverb' }, en: 'They came {w}.', ru: 'Они пришли {r}.' },

    // ══════ ЧИСЛИТЕЛЬНЫЕ ══════
    { req: { pos: 'numeral' }, en: 'I have {w} apples.', ru: 'У меня {r} яблок.' },
    { req: { pos: 'numeral' }, en: 'Give me {w} minutes.', ru: 'Дай мне {r} минут.' },
    { req: { pos: 'numeral' }, en: 'There are {w} books.', ru: 'Здесь {r} книг.' }
];

// ═══════════════════════════════════════════════
// СОВПАДЕНИЕ ТЕГОВ
// ═══════════════════════════════════════════════
function matches(template, tags) {
    for (const key of Object.keys(template.req)) {
        if (tags[key] !== template.req[key]) return false;
    }
    return true;
}

// ═══════════════════════════════════════════════
// ГЛАВНАЯ ФУНКЦИЯ
// ═══════════════════════════════════════════════
function pickTemplate(word) {
    if (!canGenerate(word)) return null;
    const tags = getTags(word);
    const valid = TEMPLATES.filter(tpl => matches(tpl, tags));
    if (!valid.length) return null;
    const tpl = valid[Math.floor(Math.random() * valid.length)];
    const filled = fillTemplate(tpl, word);
    return { en: filled.en, ru: filled.ru, word };
}

function generateSentence(word) {
    return pickTemplate(word);
}

function generateSentencesList(words, count = 15) {
    if (!words.length) return [];
    const valid = words.filter(w => pickTemplate(w) !== null);
    if (!valid.length) return [];
    const sample = shuffle(valid).slice(0, count * 2);
    const result = [];
    for (const w of sample) {
        const s = generateSentence(w);
        if (s) result.push(s);
        if (result.length >= count) break;
    }
    return result;
}

// ═══════════════════════════════════════════════
// 7 ТИПОВ ВОПРОСОВ
// ═══════════════════════════════════════════════
function getSimilarWords(word, allWords, count = 3) {
    const samePos = allWords.filter(w => w.pos === word.pos && w.eng !== word.eng);
    return shuffle(samePos).slice(0, count);
}

function qENtoRU(w, others) {
    if (!w.ru) return null;
    return {
        type: 'en2ru', q: `Как переводится слово <b>${w.eng}</b>?`,
        correct: w.ru,
        options: shuffle([w.ru, ...others.map(o => o.ru)]).slice(0, 4),
        hint: `${w.tr || ''} · ${w.pos}`, word: w
    };
}
function qRUtoEN(w, others) {
    if (!w.ru) return null;
    return {
        type: 'ru2en', q: `Как по-английски «<b>${w.ru}</b>»?`,
        correct: w.eng,
        options: shuffle([w.eng, ...others.map(o => o.eng)]).slice(0, 4),
        hint: w.pos, word: w
    };
}
function qTranscription(w, others) {
    if (!w.tr) return null;
    const oth = others.filter(o => o.tr);
    if (oth.length < 3) return null;
    return {
        type: 'transcription', q: `Какая транскрипция у слова <b>${w.eng}</b>?`,
        correct: w.tr,
        options: shuffle([w.tr, ...oth.slice(0, 3).map(o => o.tr)]),
        hint: w.ru, word: w
    };
}
function qPartOfSpeech(w) {
    const posRu = { noun: 'существительное', verb: 'глагол', adjective: 'прилагательное', adverb: 'наречие' };
    if (!posRu[w.pos]) return null;
    return {
        type: 'pos', q: `Какая часть речи у слова <b>${w.eng}</b>?`,
        correct: posRu[w.pos],
        options: shuffle(Object.values(posRu)),
        hint: w.ru, word: w
    };
}
function qFillBlank(w, others) {
    const t = pickTemplate(w);
    if (!t) return null;
    const re = new RegExp('\\b' + w.eng.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\w*\\b', 'i');
    if (!re.test(t.en)) return null;
    return {
        type: 'fill', q: `Вставь пропущенное слово:<br><b>${t.en.replace(re, '___')}</b>`,
        correct: w.eng,
        options: shuffle([w.eng, ...others.slice(0, 3).map(o => o.eng)]),
        hint: w.ru, word: w
    };
}
function qTranslateSentence(w, others) {
    const t = pickTemplate(w);
    if (!t) return null;
    const wrong = [];
    for (const o of others.slice(0, 6)) {
        const ot = pickTemplate(o);
        if (ot && ot.ru !== t.ru) wrong.push(ot.ru);
        if (wrong.length >= 3) break;
    }
    if (wrong.length < 3) return null;
    return {
        type: 'sentence-ru', q: `Как переводится предложение?<br><b>${t.en}</b>`,
        correct: t.ru, options: shuffle([t.ru, ...wrong]),
        hint: `${w.eng} — ${w.ru}`, word: w
    };
}
function qChooseSentenceEN(w, others) {
    const t = pickTemplate(w);
    if (!t) return null;
    const wrong = [];
    for (const o of others.slice(0, 6)) {
        const ot = pickTemplate(o);
        if (ot && ot.en !== t.en) wrong.push(ot.en);
        if (wrong.length >= 3) break;
    }
    if (wrong.length < 3) return null;
    return {
        type: 'sentence-en', q: `Как сказать по-английски?<br><b>${t.ru}</b>`,
        correct: t.en, options: shuffle([t.en, ...wrong]),
        hint: `${w.eng} — ${w.ru}`, word: w
    };
}

const ALL_BUILDERS = [
    qENtoRU, qRUtoEN, qTranscription, qPartOfSpeech,
    qFillBlank, qTranslateSentence, qChooseSentenceEN
];

function generateQuiz(words, count = 10) {
    if (!words || !words.length) return [];
    const sample = shuffle(words).slice(0, count * 3);
    const questions = [];
    for (const word of sample) {
        if (questions.length >= count) break;
        const others = getSimilarWords(word, words, 5);
        const types = shuffle([...ALL_BUILDERS]);
        for (const builder of types) {
            try {
                const q = builder(word, others);
                if (q && q.options) {
                    const unique = [...new Set(q.options)];
                    if (unique.length >= 2 && unique.includes(q.correct)) {
                        q.options = shuffle(unique);
                        questions.push(q);
                        break;
                    }
                }
            } catch (e) {}
        }
    }
    return questions;
}

// ═══════════════════════════════════════════════
// ЭКСПОРТ
// ═══════════════════════════════════════════════
if (typeof window !== 'undefined') {
    window.quizgen = {
        generateSentence,
        generateQuiz,
        generateSentencesList,
        pickTemplate,
        getTags,
        canGenerate,
        pluralize
    };
    console.log('✅ quizgen.js v9 — грамматически корректный генератор');
}
