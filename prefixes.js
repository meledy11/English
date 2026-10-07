// prefixes.js — база приставок, суффиксов и корней-конструкторов английского языка

const prefixes = [
    // ===== ПРИСТАВКИ =====
    {
        id: 'pre',
        type: 'prefix',
        affix: 'pre-',
        emoji: '⏪',
        meaning: 'ДО, ПЕРЕД, ЗАРАНЕЕ',
        assoc: 'Как "пред-" в русском: preview = предпросмотр',
        explanation: 'pre- означает "до" или "заранее". Ставится ПЕРЕД корнем слова и меняет его смысл на "сделать что-то заранее или до чего-то".',
        words: [
            { word: 'preview', transcription: '[ˈpriːvjuː]', trans: 'предпросмотр', ex: 'Let me have a <b>pre</b>view of the document.', exRu: 'Дай мне предварительный просмотр документа.' },
            { word: 'prepare', transcription: '[prɪˈpeə]', trans: 'подготовить (заранее)', ex: 'I <b>pre</b>pare breakfast every morning.', exRu: 'Я готовлю завтрак каждое утро.' },
            { word: 'predict', transcription: '[prɪˈdɪkt]', trans: 'предсказать', ex: 'It is hard to <b>pre</b>dict the weather.', exRu: 'Сложно предсказать погоду.' },
            { word: 'prehistoric', transcription: '[ˌpriːhɪˈstɒrɪk]', trans: 'доисторический', ex: 'Dinosaurs lived in <b>pre</b>historic times.', exRu: 'Динозавры жили в доисторические времена.' }
        ]
    },
    {
        id: 'post',
        type: 'prefix',
        affix: 'post-',
        emoji: '⏩',
        meaning: 'ПОСЛЕ',
        assoc: 'Как "пост-" в русском: postwar = послевоенный',
        explanation: 'post- означает "после". Противоположность pre-.',
        words: [
            { word: 'postpone', transcription: '[pəˈspəʊn]', trans: 'отложить на потом', ex: 'We had to <b>post</b>pone the meeting.', exRu: 'Нам пришлось отложить встречу.' },
            { word: 'postwar', transcription: '[ˌpəʊstˈwɔː]', trans: 'послевоенный', ex: 'The <b>post</b>war years were hard.', exRu: 'Послевоенные годы были трудными.' },
            { word: 'postgraduate', transcription: '[ˌpəʊstˈɡrædʒuət]', trans: 'аспирант', ex: 'She is a <b>post</b>graduate student.', exRu: 'Она аспирантка.' }
        ]
    },
    {
        id: 'out',
        type: 'prefix',
        affix: 'out-',
        emoji: '🚪➡️',
        meaning: 'НАРУЖУ / ПРЕВОСХОДИТЬ',
        assoc: 'Выйти за пределы / сделать лучше всех',
        explanation: 'out- означает "наружу" (outdoor) или "превзойти кого-то" (outrun — обогнать).',
        words: [
            { word: 'outdoor', transcription: '[ˈaʊtdɔː]', trans: 'на улице', ex: 'We like <b>out</b>door activities.', exRu: 'Мы любим занятия на улице.' },
            { word: 'outrun', transcription: '[ˌaʊtˈrʌn]', trans: 'обогнать', ex: 'He can <b>out</b>run anyone in class.', exRu: 'Он может обогнать любого в классе.' },
            { word: 'outstanding', transcription: '[aʊtˈstændɪŋ]', trans: 'выдающийся', ex: 'She gave an <b>out</b>standing performance.', exRu: 'Она выступила выдающимся образом.' },
            { word: 'output', transcription: '[ˈaʊtpʊt]', trans: 'выпуск, вывод', ex: 'The factory increased its <b>out</b>put.', exRu: 'Завод увеличил выпуск продукции.' }
        ]
    },
    {
        id: 'dis',
        type: 'prefix',
        affix: 'dis-',
        emoji: '🚫',
        meaning: 'НЕ / ОТРИЦАНИЕ / РАЗДЕЛЕНИЕ',
        assoc: 'Как "дис-" в русском: discomfort = дискомфорт',
        explanation: 'dis- даёт отрицательное значение или означает разделение / противоположное действие.',
        words: [
            { word: 'disagree', transcription: '[ˌdɪsəˈɡriː]', trans: 'не соглашаться', ex: 'I <b>dis</b>agree with you.', exRu: 'Я с тобой не согласен.' },
            { word: 'disappear', transcription: '[ˌdɪsəˈpɪə]', trans: 'исчезнуть', ex: 'The sun <b>dis</b>appeared behind clouds.', exRu: 'Солнце исчезло за облаками.' },
            { word: 'disconnect', transcription: '[ˌdɪskəˈnekt]', trans: 'отключить', ex: '<b>Dis</b>connect the cable first.', exRu: 'Сначала отключите кабель.' },
            { word: 'dislike', transcription: '[dɪsˈlaɪk]', trans: 'не любить', ex: 'I <b>dis</b>like cold weather.', exRu: 'Я не люблю холодную погоду.' }
        ]
    },
    {
        id: 're',
        type: 'prefix',
        affix: 're-',
        emoji: '🔄',
        meaning: 'СНОВА / ОБРАТНО',
        assoc: 'Как "ре-" в русском: ремонт = сделать снова',
        explanation: 're- означает "снова" или "назад". Самый частый префикс в английском.',
        words: [
            { word: 'rewrite', transcription: '[ˌriːˈraɪt]', trans: 'переписать', ex: 'Please <b>re</b>write this sentence.', exRu: 'Перепиши это предложение.' },
            { word: 'return', transcription: '[rɪˈtɜːn]', trans: 'вернуться', ex: 'I will <b>re</b>turn tomorrow.', exRu: 'Я вернусь завтра.' },
            { word: 'rebuild', transcription: '[ˌriːˈbɪld]', trans: 'перестроить', ex: 'They <b>re</b>built the bridge.', exRu: 'Они перестроили мост.' },
            { word: 'review', transcription: '[rɪˈvjuː]', trans: 'пересмотреть', ex: 'Let\'s <b>re</b>view your notes.', exRu: 'Давай пересмотрим твои заметки.' }
        ]
    },
    {
        id: 'de',
        type: 'prefix',
        affix: 'de-',
        emoji: '⬇️🚫',
        meaning: 'ВНИЗ / УБРАТЬ / ОТМЕНИТЬ',
        assoc: 'Как "де-" в русском: демонтаж = убрать',
        explanation: 'de- означает "вниз" (descend) или "убрать, отменить" (delete).',
        words: [
            { word: 'delete', transcription: '[dɪˈliːt]', trans: 'удалить', ex: '<b>De</b>lete that file.', exRu: 'Удали этот файл.' },
            { word: 'decrease', transcription: '[dɪˈkriːs]', trans: 'уменьшить', ex: 'Sales <b>de</b>creased last month.', exRu: 'Продажи уменьшились в прошлом месяце.' },
            { word: 'deactivate', transcription: '[diːˈæktɪveɪt]', trans: 'деактивировать', ex: '<b>De</b>activate your account.', exRu: 'Деактивируйте свой аккаунт.' },
            { word: 'descend', transcription: '[dɪˈsend]', trans: 'спускаться', ex: 'The plane began to <b>de</b>scend.', exRu: 'Самолёт начал снижаться.' }
        ]
    },
    {
        id: 'un',
        type: 'prefix',
        affix: 'un-',
        emoji: '❌',
        meaning: 'НЕ / ОБРАТНОЕ ДЕЙСТВИЕ',
        assoc: 'Отрицание: happy → unhappy',
        explanation: 'un- — самый частый отрицательный префикс. Присоединяется к прилагательным и глаголам.',
        words: [
            { word: 'unhappy', transcription: '[ʌnˈhæpi]', trans: 'несчастный', ex: 'She looked <b>un</b>happy.', exRu: 'Она выглядела несчастной.' },
            { word: 'undo', transcription: '[ʌnˈduː]', trans: 'отменить', ex: 'Can you <b>un</b>do the changes?', exRu: 'Ты можешь отменить изменения?' },
            { word: 'unlock', transcription: '[ʌnˈlɒk]', trans: 'открыть', ex: '<b>Un</b>lock the door, please.', exRu: 'Открой дверь, пожалуйста.' },
            { word: 'unusual', transcription: '[ʌnˈjuːʒuəl]', trans: 'необычный', ex: 'It was an <b>un</b>usual day.', exRu: 'Это был необычный день.' }
        ]
    },
    {
        id: 'mis',
        type: 'prefix',
        affix: 'mis-',
        emoji: '⚠️',
        meaning: 'НЕПРАВИЛЬНО / ОШИБОЧНО',
        assoc: 'mistake = ошибка',
        explanation: 'mis- означает "неправильно" или "плохо".',
        words: [
            { word: 'mistake', transcription: '[mɪˈsteɪk]', trans: 'ошибка', ex: 'Everyone makes <b>mis</b>takes.', exRu: 'Все делают ошибки.' },
            { word: 'misunderstand', transcription: '[ˌmɪsʌndəˈstænd]', trans: 'неправильно понять', ex: 'You <b>mis</b>understood me.', exRu: 'Ты меня неправильно понял.' },
            { word: 'mislead', transcription: '[ˌmɪsˈliːd]', trans: 'ввести в заблуждение', ex: 'Don\'t <b>mis</b>lead people.', exRu: 'Не вводи людей в заблуждение.' },
            { word: 'misbehave', transcription: '[ˌmɪsbɪˈheɪv]', trans: 'плохо себя вести', ex: 'The kids <b>mis</b>behaved.', exRu: 'Дети плохо себя вели.' }
        ]
    },
    {
        id: 'over',
        type: 'prefix',
        affix: 'over-',
        emoji: '🔝',
        meaning: 'СВЕРХ / ЧЕРЕЗ / СЛИШКОМ',
        assoc: 'overdose = передозировка',
        explanation: 'over- означает "слишком", "сверх нормы" или "через".',
        words: [
            { word: 'overwork', transcription: '[ˌəʊvəˈwɜːk]', trans: 'перерабатывать', ex: 'Don\'t <b>over</b>work yourself.', exRu: 'Не перерабатывай.' },
            { word: 'overtake', transcription: '[ˌəʊvəˈteɪk]', trans: 'обгонять', ex: 'The car <b>over</b>took us.', exRu: 'Машина нас обогнала.' },
            { word: 'overweight', transcription: '[ˌəʊvəˈweɪt]', trans: 'с лишним весом', ex: 'He is a bit <b>over</b>weight.', exRu: 'У него немного лишний вес.' },
            { word: 'oversleep', transcription: '[ˌəʊvəˈsliːp]', trans: 'проспать', ex: 'I <b>over</b>slept this morning.', exRu: 'Я проспал сегодня утром.' }
        ]
    },
    {
        id: 'under',
        type: 'prefix',
        affix: 'under-',
        emoji: '⬇️',
        meaning: 'ПОД / НЕДОСТАТОЧНО',
        assoc: 'underground = под землёй',
        explanation: 'under- означает "под" или "недостаточно".',
        words: [
            { word: 'underground', transcription: '[ˈʌndəɡraʊnd]', trans: 'подземный / метро', ex: 'London <b>under</b>ground is huge.', exRu: 'Лондонское метро огромное.' },
            { word: 'understand', transcription: '[ˌʌndəˈstænd]', trans: 'понимать', ex: 'I <b>under</b>stand you.', exRu: 'Я тебя понимаю.' },
            { word: 'underestimate', transcription: '[ˌʌndərˈestɪmeɪt]', trans: 'недооценить', ex: 'Don\'t <b>under</b>estimate her.', exRu: 'Не недооценивай её.' },
            { word: 'undergo', transcription: '[ˌʌndəˈɡəʊ]', trans: 'проходить через', ex: 'He <b>under</b>went surgery.', exRu: 'Он перенёс операцию.' }
        ]
    },

    // ===== СУФФИКСЫ =====
    {
        id: 'ed',
        type: 'suffix',
        affix: '-ed',
        emoji: '✅⏪',
        meaning: 'ПРОШЕДШЕЕ / СДЕЛАННЫЙ',
        assoc: 'worked = работал / отработанный',
        explanation: '-ed образует: 1) Past Simple правильных глаголов; 2) причастие (V3); 3) прилагательные со значением "сделанный".',
        words: [
            { word: 'worked', transcription: '[wɜːkt]', trans: 'работал / обработанный', ex: 'I <b>work</b>ed yesterday.', exRu: 'Я работал вчера.' },
            { word: 'tired', transcription: '[ˈtaɪəd]', trans: 'уставший', ex: 'I am <b>tir</b>ed.', exRu: 'Я устал.' },
            { word: 'excited', transcription: '[ɪkˈsaɪtɪd]', trans: 'взволнованный', ex: 'She was <b>excit</b>ed.', exRu: 'Она была взволнована.' },
            { word: 'closed', transcription: '[kləʊzd]', trans: 'закрытый', ex: 'The shop is <b>clos</b>ed.', exRu: 'Магазин закрыт.' }
        ]
    },
    {
        id: 'ing',
        type: 'suffix',
        affix: '-ing',
        emoji: '🏃',
        meaning: 'ДЕЙСТВИЕ / ПРОЦЕСС',
        assoc: 'running = бег / бегущий',
        explanation: '-ing образует: 1) герундий (существительное от глагола); 2) причастие настоящего времени; 3) Present Continuous.',
        words: [
            { word: 'running', transcription: '[ˈrʌnɪŋ]', trans: 'бег / бегущий', ex: 'He is <b>run</b>ning.', exRu: 'Он бежит.' },
            { word: 'swimming', transcription: '[ˈswɪmɪŋ]', trans: 'плавание', ex: 'I like <b>swim</b>ming.', exRu: 'Я люблю плавать.' },
            { word: 'interesting', transcription: '[ˈɪntrəstɪŋ]', trans: 'интересный', ex: 'This book is <b>interest</b>ing.', exRu: 'Эта книга интересная.' },
            { word: 'boring', transcription: '[ˈbɔːrɪŋ]', trans: 'скучный', ex: 'The film was <b>bor</b>ing.', exRu: 'Фильм был скучным.' }
        ]
    },
    {
        id: 'er',
        type: 'suffix',
        affix: '-er / -or',
        emoji: '👤',
        meaning: 'ТОТ, КТО ДЕЛАЕТ',
        assoc: 'teacher = учитель (тот, кто учит)',
        explanation: '-er / -or образуют существительное — "человек или предмет, который делает действие".',
        words: [
            { word: 'teacher', transcription: '[ˈtiːtʃə]', trans: 'учитель', ex: 'My <b>teach</b>er is kind.', exRu: 'Мой учитель добрый.' },
            { word: 'worker', transcription: '[ˈwɜːkə]', trans: 'рабочий', ex: 'He is a hard <b>work</b>er.', exRu: 'Он трудолюбивый работник.' },
            { word: 'actor', transcription: '[ˈæktə]', trans: 'актёр', ex: 'He is a famous <b>act</b>or.', exRu: 'Он известный актёр.' },
            { word: 'computer', transcription: '[kəmˈpjuːtə]', trans: 'компьютер', ex: 'I use a <b>comput</b>er.', exRu: 'Я использую компьютер.' }
        ]
    },
    {
        id: 'ly',
        type: 'suffix',
        affix: '-ly',
        emoji: '⚡',
        meaning: 'ОБРАЗ ДЕЙСТВИЯ (наречие)',
        assoc: 'quickly = быстро',
        explanation: '-ly превращает прилагательное в наречие: "как?" — быстро, медленно, красиво.',
        words: [
            { word: 'quickly', transcription: '[ˈkwɪkli]', trans: 'быстро', ex: 'He runs <b>quick</b>ly.', exRu: 'Он бегает быстро.' },
            { word: 'slowly', transcription: '[ˈsləʊli]', trans: 'медленно', ex: 'Please speak <b>slow</b>ly.', exRu: 'Пожалуйста, говори медленно.' },
            { word: 'happily', transcription: '[ˈhæpɪli]', trans: 'счастливо', ex: 'They lived <b>happi</b>ly.', exRu: 'Они жили счастливо.' },
            { word: 'usually', transcription: '[ˈjuːʒuəli]', trans: 'обычно', ex: 'I <b>usual</b>ly get up at 7.', exRu: 'Я обычно встаю в 7.' }
        ]
    },
    {
        id: 'ful',
        type: 'suffix',
        affix: '-ful',
        emoji: '💯',
        meaning: 'ПОЛНЫЙ ЧЕГО-ТО',
        assoc: 'beautiful = полный красоты',
        explanation: '-ful означает "полный чего-то" (helpful = полный помощи).',
        words: [
            { word: 'beautiful', transcription: '[ˈbjuːtɪfl]', trans: 'красивый', ex: 'What a <b>beauti</b>ful day!', exRu: 'Какой красивый день!' },
            { word: 'helpful', transcription: '[ˈhelpfl]', trans: 'полезный', ex: 'Your advice was <b>help</b>ful.', exRu: 'Твой совет был полезным.' },
            { word: 'careful', transcription: '[ˈkeəfl]', trans: 'осторожный', ex: 'Be <b>care</b>ful!', exRu: 'Будь осторожен!' },
            { word: 'useful', transcription: '[ˈjuːsfl]', trans: 'полезный', ex: 'This app is <b>use</b>ful.', exRu: 'Это приложение полезное.' }
        ]
    },
    {
        id: 'less',
        type: 'suffix',
        affix: '-less',
        emoji: '🚫💯',
        meaning: 'БЕЗ ЧЕГО-ТО',
        assoc: 'hopeless = без надежды',
        explanation: '-less означает "без чего-то". Противоположность -ful.',
        words: [
            { word: 'hopeless', transcription: '[ˈhəʊpləs]', trans: 'безнадёжный', ex: 'It seems <b>hope</b>less.', exRu: 'Это кажется безнадёжным.' },
            { word: 'careless', transcription: '[ˈkeələs]', trans: 'беззаботный', ex: 'That was <b>care</b>less.', exRu: 'Это было небрежно.' },
            { word: 'useless', transcription: '[ˈjuːsləs]', trans: 'бесполезный', ex: 'This tool is <b>use</b>less.', exRu: 'Этот инструмент бесполезен.' },
            { word: 'homeless', transcription: '[ˈhəʊmləs]', trans: 'бездомный', ex: 'He helps <b>home</b>less people.', exRu: 'Он помогает бездомным.' }
        ]
    },
    {
        id: 'ness',
        type: 'suffix',
        affix: '-ness',
        emoji: '💠',
        meaning: 'СОСТОЯНИЕ / КАЧЕСТВО',
        assoc: 'happiness = счастье (состояние счастливого)',
        explanation: '-ness превращает прилагательное в существительное-состояние.',
        words: [
            { word: 'happiness', transcription: '[ˈhæpinəs]', trans: 'счастье', ex: 'Money can\'t buy <b>happi</b>ness.', exRu: 'Счастье не купишь за деньги.' },
            { word: 'darkness', transcription: '[ˈdɑːknəs]', trans: 'темнота', ex: 'We were in <b>dark</b>ness.', exRu: 'Мы были в темноте.' },
            { word: 'kindness', transcription: '[ˈkaɪndnəs]', trans: 'доброта', ex: 'Thank you for your <b>kind</b>ness.', exRu: 'Спасибо за доброту.' },
            { word: 'weakness', transcription: '[ˈwiːknəs]', trans: 'слабость', ex: 'Everyone has a <b>weak</b>ness.', exRu: 'У каждого есть слабость.' }
        ]
    }
];

// ============================================================
// ===== СЛОВА-КОНСТРУКТОРЫ (корни + приставки) =====
// ============================================================
const wordRoots = [
    // ═══ ДВИЖЕНИЕ ═══
    { root: 'port', topic: 'motion', emoji: '📦', meaning: 'нести, перемещать',
      note: 'Латинский portare. Всё «переносное» в английском.',
      words: [
        { word: 'export', pre: 'ex-', preMean: 'наружу', trans: 'экспорт', ex: 'We export cars.', exRu: 'Мы экспортируем машины.' },
        { word: 'import', pre: 'im-', preMean: 'внутрь', trans: 'импорт', ex: 'Import goods.', exRu: 'Импортировать товары.' },
        { word: 'transport', pre: 'trans-', preMean: 'через', trans: 'транспорт', ex: 'Public transport is cheap.', exRu: 'Общественный транспорт дешёвый.' }
      ]
    },
    { root: 'ject', topic: 'motion', emoji: '🎯', meaning: 'бросать',
      note: 'Латинский jacere.',
      words: [
        { word: 'reject', pre: 're-', preMean: 'назад', trans: 'отвергнуть', ex: 'Reject the offer.', exRu: 'Отклони предложение.' },
        { word: 'inject', pre: 'in-', preMean: 'внутрь', trans: 'впрыснуть', ex: 'Inject the medicine.', exRu: 'Введи лекарство.' },
        { word: 'project', pre: 'pro-', preMean: 'вперёд', trans: 'проект', ex: 'A new project.', exRu: 'Новый проект.' }
      ]
    },
    { root: 'tract', topic: 'motion', emoji: '🧲', meaning: 'тянуть',
      note: 'Латинский trahere.',
      words: [
        { word: 'attract', pre: 'at-', preMean: 'к', trans: 'привлекать', ex: 'Attract attention.', exRu: 'Привлекай внимание.' },
        { word: 'extract', pre: 'ex-', preMean: 'наружу', trans: 'извлечь', ex: 'Extract the tooth.', exRu: 'Удалить зуб.' },
        { word: 'contract', pre: 'con-', preMean: 'вместе', trans: 'контракт', ex: 'Sign the contract.', exRu: 'Подпиши контракт.' }
      ]
    },
    { root: 'duct', topic: 'motion', emoji: '🚰', meaning: 'вести, проводить',
      note: 'Латинский ducere.',
      words: [
        { word: 'conduct', pre: 'con-', preMean: 'вместе', trans: 'проводить', ex: 'Conduct an experiment.', exRu: 'Провести эксперимент.' },
        { word: 'produce', pre: 'pro-', preMean: 'вперёд', trans: 'производить', ex: 'They produce cars.', exRu: 'Они производят машины.' },
        { word: 'reduce', pre: 're-', preMean: 'назад', trans: 'уменьшить', ex: 'Reduce the price.', exRu: 'Снизь цену.' }
      ]
    },
    { root: 'ven', topic: 'motion', emoji: '🚶', meaning: 'приходить',
      note: 'Латинский venire.',
      words: [
        { word: 'prevent', pre: 'pre-', preMean: 'заранее', trans: 'предотвратить', ex: 'Prevent accidents.', exRu: 'Предотврати аварии.' },
        { word: 'invent', pre: 'in-', preMean: 'в', trans: 'изобретать', ex: 'Invent something new.', exRu: 'Изобрети что-то новое.' },
        { word: 'convention', pre: 'con-', preMean: 'вместе', trans: 'съезд', ex: 'Attend the convention.', exRu: 'Посети съезд.' }
      ]
    },
    { root: 'mov', topic: 'motion', emoji: '🏃', meaning: 'двигать',
      note: 'Латинский movere.',
      words: [
        { word: 'move', pre: '-', preMean: '—', trans: 'двигать', ex: 'Move the table.', exRu: 'Передвинь стол.' },
        { word: 'remove', pre: 're-', preMean: 'назад', trans: 'убрать', ex: 'Remove your hat.', exRu: 'Сними шляпу.' },
        { word: 'promote', pre: 'pro-', preMean: 'вперёд', trans: 'продвигать', ex: 'Promote the product.', exRu: 'Продвигай продукт.' }
      ]
    },

    // ═══ РЕЧЬ И ЗНАНИЕ ═══
    { root: 'dict', topic: 'speech', emoji: '🗣️', meaning: 'говорить',
      note: 'Латинский dicere.',
      words: [
        { word: 'predict', pre: 'pre-', preMean: 'заранее', trans: 'предсказать', ex: 'Predict the future.', exRu: 'Предскажи будущее.' },
        { word: 'contradict', pre: 'contra-', preMean: 'против', trans: 'противоречить', ex: 'Don\'t contradict me.', exRu: 'Не противоречь мне.' },
        { word: 'dictate', pre: '-ate', preMean: 'действие', trans: 'диктовать', ex: 'Dictate the rules.', exRu: 'Диктуй правила.' }
      ]
    },
    { root: 'log', topic: 'speech', emoji: '📚', meaning: 'слово, учение',
      note: 'Греческий logos.',
      words: [
        { word: 'dialogue', pre: 'dia-', preMean: 'через', trans: 'диалог', ex: 'Have a dialogue.', exRu: 'Веди диалог.' },
        { word: 'logic', pre: '-ic', preMean: 'наука', trans: 'логика', ex: 'Use logic.', exRu: 'Используй логику.' },
        { word: 'biology', pre: 'bio-', preMean: 'жизнь', trans: 'биология', ex: 'Study biology.', exRu: 'Изучай биологию.' }
      ]
    },
    { root: 'graph', topic: 'speech', emoji: '✍️', meaning: 'писать, чертить',
      note: 'Греческий graphein.',
      words: [
        { word: 'photograph', pre: 'photo-', preMean: 'свет', trans: 'фотография', ex: 'Take a photograph.', exRu: 'Сделай фото.' },
        { word: 'paragraph', pre: 'para-', preMean: 'рядом', trans: 'абзац', ex: 'Read the paragraph.', exRu: 'Прочитай абзац.' },
        { word: 'autograph', pre: 'auto-', preMean: 'сам', trans: 'автограф', ex: 'Sign an autograph.', exRu: 'Поставь автограф.' }
      ]
    },
    { root: 'scrib', topic: 'speech', emoji: '📝', meaning: 'писать',
      note: 'Латинский scribere.',
      words: [
        { word: 'describe', pre: 'de-', preMean: 'полностью', trans: 'описывать', ex: 'Describe the scene.', exRu: 'Опиши сцену.' },
        { word: 'subscribe', pre: 'sub-', preMean: 'под', trans: 'подписаться', ex: 'Subscribe to the channel.', exRu: 'Подпишись на канал.' },
        { word: 'manuscript', pre: 'manu-', preMean: 'рука', trans: 'рукопись', ex: 'An old manuscript.', exRu: 'Старинная рукопись.' }
      ]
    },
    { root: 'phon', topic: 'speech', emoji: '🔊', meaning: 'звук, голос',
      note: 'Греческий phone.',
      words: [
        { word: 'telephone', pre: 'tele-', preMean: 'далеко', trans: 'телефон', ex: 'Answer the telephone.', exRu: 'Ответь на телефон.' },
        { word: 'microphone', pre: 'micro-', preMean: 'малый', trans: 'микрофон', ex: 'Use a microphone.', exRu: 'Используй микрофон.' },
        { word: 'symphony', pre: 'sym-', preMean: 'вместе', trans: 'симфония', ex: 'Listen to a symphony.', exRu: 'Слушай симфонию.' }
      ]
    },

    // ═══ ЖИЗНЬ И ПРИРОДА ═══
    { root: 'bio', topic: 'life', emoji: '🌱', meaning: 'жизнь',
      note: 'Греческий bios.',
      words: [
        { word: 'biology', pre: '-logy', preMean: 'наука', trans: 'биология', ex: 'Study biology.', exRu: 'Изучай биологию.' },
        { word: 'biography', pre: '-graphy', preMean: 'писание', trans: 'биография', ex: 'Read his biography.', exRu: 'Прочти его биографию.' },
        { word: 'antibiotic', pre: 'anti-', preMean: 'против', trans: 'антибиотик', ex: 'Take antibiotics.', exRu: 'Принимай антибиотики.' }
      ]
    },
    { root: 'viv', topic: 'life', emoji: '🌿', meaning: 'жить',
      note: 'Латинский vivere.',
      words: [
        { word: 'survive', pre: 'sur-', preMean: 'сверх', trans: 'выжить', ex: 'Survive the storm.', exRu: 'Выжить в шторме.' },
        { word: 'revive', pre: 're-', preMean: 'снова', trans: 'оживить', ex: 'Revive the old town.', exRu: 'Оживи старый город.' },
        { word: 'vital', pre: '-al', preMean: 'прил.', trans: 'жизненно важный', ex: 'Vital signs.', exRu: 'Жизненные показатели.' }
      ]
    },
    { root: 'mort', topic: 'life', emoji: '💀', meaning: 'смерть',
      note: 'Латинский mors.',
      words: [
        { word: 'mortal', pre: '-al', preMean: 'прил.', trans: 'смертный', ex: 'Mortal humans.', exRu: 'Смертные люди.' },
        { word: 'immortal', pre: 'im-', preMean: 'не', trans: 'бессмертный', ex: 'Immortal soul.', exRu: 'Бессмертная душа.' },
        { word: 'mortgage', pre: 'gage', preMean: 'залог', trans: 'ипотека', ex: 'Pay the mortgage.', exRu: 'Плати ипотеку.' }
      ]
    },
    { root: 'terr', topic: 'life', emoji: '🌍', meaning: 'земля',
      note: 'Латинский terra.',
      words: [
        { word: 'territory', pre: '-ory', preMean: 'место', trans: 'территория', ex: 'Defend the territory.', exRu: 'Защити территорию.' },
        { word: 'terrible', pre: '-ible', preMean: 'прил.', trans: 'ужасный', ex: 'A terrible day.', exRu: 'Ужасный день.' },
        { word: 'terrace', pre: '-ace', preMean: 'место', trans: 'терраса', ex: 'Sit on the terrace.', exRu: 'Сядь на террасу.' }
      ]
    },

    // ═══ СОЗНАНИЕ ═══
    { root: 'press', topic: 'mind', emoji: '🔽', meaning: 'давить, жать',
      note: 'Латинский premere.',
      words: [
        { word: 'express', pre: 'ex-', preMean: 'наружу', trans: 'выражать', ex: 'Express your feelings.', exRu: 'Выражай свои чувства.' },
        { word: 'impress', pre: 'im-', preMean: 'в', trans: 'впечатлить', ex: 'You impress me.', exRu: 'Ты меня впечатляешь.' },
        { word: 'compress', pre: 'com-', preMean: 'вместе', trans: 'сжать', ex: 'Compress the files.', exRu: 'Сожми файлы.' }
      ]
    },
    { root: 'spect', topic: 'mind', emoji: '👁️', meaning: 'смотреть',
      note: 'Латинский spectare.',
      words: [
        { word: 'inspect', pre: 'in-', preMean: 'внутрь', trans: 'осматривать', ex: 'Inspect the engine.', exRu: 'Осмотри двигатель.' },
        { word: 'respect', pre: 're-', preMean: 'снова', trans: 'уважать', ex: 'Respect your parents.', exRu: 'Уважай родителей.' },
        { word: 'prospect', pre: 'pro-', preMean: 'вперёд', trans: 'перспектива', ex: 'Future prospects are good.', exRu: 'Перспективы хороши.' }
      ]
    },
    { root: 'vis', topic: 'mind', emoji: '👀', meaning: 'видеть',
      note: 'Латинский videre.',
      words: [
        { word: 'visible', pre: '-ible', preMean: 'возможный', trans: 'видимый', ex: 'Stars are visible.', exRu: 'Звёзды видны.' },
        { word: 'revise', pre: 're-', preMean: 'снова', trans: 'пересмотреть', ex: 'Revise your notes.', exRu: 'Пересмотри заметки.' },
        { word: 'supervise', pre: 'super-', preMean: 'сверху', trans: 'наблюдать', ex: 'Supervise the work.', exRu: 'Наблюдай за работой.' }
      ]
    },
    { root: 'cred', topic: 'mind', emoji: '🤝', meaning: 'верить',
      note: 'Латинский credere.',
      words: [
        { word: 'credit', pre: '-it', preMean: 'сущ.', trans: 'кредит', ex: 'Give me credit.', exRu: 'Дай мне кредит доверия.' },
        { word: 'incredible', pre: 'in-', preMean: 'не', trans: 'невероятный', ex: 'Incredible story!', exRu: 'Невероятная история!' },
        { word: 'credible', pre: '-ible', preMean: 'возможный', trans: 'правдоподобный', ex: 'A credible source.', exRu: 'Надёжный источник.' }
      ]
    },
    { root: 'mem', topic: 'mind', emoji: '🧠', meaning: 'память',
      note: 'Латинский memor.',
      words: [
        { word: 'memory', pre: '-y', preMean: 'сущ.', trans: 'память', ex: 'Good memory.', exRu: 'Хорошая память.' },
        { word: 'remember', pre: 're-', preMean: 'снова', trans: 'помнить', ex: 'Remember me.', exRu: 'Помни меня.' },
        { word: 'memorial', pre: '-ial', preMean: 'прил.', trans: 'мемориал', ex: 'Visit the memorial.', exRu: 'Посети мемориал.' }
      ]
    },
    { root: 'sens', topic: 'mind', emoji: '💗', meaning: 'чувствовать',
      note: 'Латинский sentire.',
      words: [
        { word: 'sense', pre: '-', preMean: '—', trans: 'чувство', ex: 'Common sense.', exRu: 'Здравый смысл.' },
        { word: 'consent', pre: 'con-', preMean: 'вместе', trans: 'согласие', ex: 'Give consent.', exRu: 'Дай согласие.' },
        { word: 'sentiment', pre: '-ment', preMean: 'сущ.', trans: 'настроение', ex: 'Public sentiment.', exRu: 'Общественное мнение.' }
      ]
    },

    // ═══ ТЕХНИКА И НАУКА ═══
    { root: 'struct', topic: 'tech', emoji: '🏗️', meaning: 'строить',
      note: 'Латинский struere.',
      words: [
        { word: 'construct', pre: 'con-', preMean: 'вместе', trans: 'построить', ex: 'Construct a house.', exRu: 'Построй дом.' },
        { word: 'instruct', pre: 'in-', preMean: 'внутрь', trans: 'инструктировать', ex: 'Instruct the team.', exRu: 'Проинструктируй команду.' },
        { word: 'destruct', pre: 'de-', preMean: 'разрушать', trans: 'разрушать', ex: 'Self-destruct mode.', exRu: 'Режим самоуничтожения.' }
      ]
    },
    { root: 'form', topic: 'tech', emoji: '🎨', meaning: 'форма',
      note: 'Латинский forma.',
      words: [
        { word: 'reform', pre: 're-', preMean: 'снова', trans: 'реформа', ex: 'Reform the system.', exRu: 'Реформируй систему.' },
        { word: 'inform', pre: 'in-', preMean: 'внутрь', trans: 'информировать', ex: 'Inform me later.', exRu: 'Сообщи мне позже.' },
        { word: 'transform', pre: 'trans-', preMean: 'через', trans: 'трансформировать', ex: 'Transform your life.', exRu: 'Измени свою жизнь.' }
      ]
    },
    { root: 'tele', topic: 'tech', emoji: '📡', meaning: 'далеко',
      note: 'Греческий tele.',
      words: [
        { word: 'television', pre: '-vision', preMean: 'видение', trans: 'телевидение', ex: 'Watch television.', exRu: 'Смотри телевизор.' },
        { word: 'telephone', pre: '-phone', preMean: 'звук', trans: 'телефон', ex: 'Call by telephone.', exRu: 'Позвони по телефону.' },
        { word: 'telescope', pre: '-scope', preMean: 'смотреть', trans: 'телескоп', ex: 'Look through a telescope.', exRu: 'Посмотри в телескоп.' }
      ]
    },
    { root: 'mit', topic: 'tech', emoji: '📤', meaning: 'посылать',
      note: 'Латинский mittere.',
      words: [
        { word: 'submit', pre: 'sub-', preMean: 'под', trans: 'подавать', ex: 'Submit the form.', exRu: 'Отправь форму.' },
        { word: 'permit', pre: 'per-', preMean: 'через', trans: 'разрешать', ex: 'Permit me to speak.', exRu: 'Разреши мне сказать.' },
        { word: 'transmit', pre: 'trans-', preMean: 'через', trans: 'передавать', ex: 'Transmit the signal.', exRu: 'Передай сигнал.' }
      ]
    },
    { root: 'cap', topic: 'tech', emoji: '🤲', meaning: 'брать',
      note: 'Латинский capere.',
      words: [
        { word: 'accept', pre: 'ac-', preMean: 'к', trans: 'принимать', ex: 'Accept the gift.', exRu: 'Прими подарок.' },
        { word: 'receive', pre: 're-', preMean: 'назад', trans: 'получать', ex: 'Receive a letter.', exRu: 'Получи письмо.' },
        { word: 'capture', pre: '-ure', preMean: 'действие', trans: 'захватить', ex: 'Capture the moment.', exRu: 'Поймай момент.' }
      ]
    },
    { root: 'fin', topic: 'tech', emoji: '🏁', meaning: 'конец, граница',
      note: 'Латинский finis.',
      words: [
        { word: 'finish', pre: '-ish', preMean: 'глагол', trans: 'закончить', ex: 'Finish your work.', exRu: 'Закончи работу.' },
        { word: 'final', pre: '-al', preMean: 'прил.', trans: 'финальный', ex: 'The final match.', exRu: 'Финальный матч.' },
        { word: 'define', pre: 'de-', preMean: 'полностью', trans: 'определить', ex: 'Define the word.', exRu: 'Определи слово.' }
      ]
    },
    { root: 'nomin', topic: 'tech', emoji: '🏷️', meaning: 'имя',
      note: 'Латинский nomen.',
      words: [
        { word: 'name', pre: '-', preMean: '—', trans: 'имя', ex: 'What\'s your name?', exRu: 'Как тебя зовут?' },
        { word: 'nominate', pre: '-ate', preMean: 'действие', trans: 'номинировать', ex: 'Nominate her.', exRu: 'Номинируй её.' },
        { word: 'rename', pre: 're-', preMean: 'снова', trans: 'переименовать', ex: 'Rename the file.', exRu: 'Переименуй файл.' }
      ]
    },
    { root: 'popul', topic: 'tech', emoji: '👥', meaning: 'народ',
      note: 'Латинский populus.',
      words: [
        { word: 'popular', pre: '-ar', preMean: 'прил.', trans: 'популярный', ex: 'A popular song.', exRu: 'Популярная песня.' },
        { word: 'public', pre: '-ic', preMean: 'прил.', trans: 'публичный', ex: 'Public transport.', exRu: 'Публичный транспорт.' },
        { word: 'republic', pre: 're-', preMean: 'снова', trans: 'республика', ex: 'A free republic.', exRu: 'Свободная республика.' }
      ]
    }
];

// ===== ТЕМЫ ДЛЯ ФИЛЬТРА КОРНЕЙ =====
const rootTopics = [
    { id: 'all',    emoji: '📚', name: 'Все' },
    { id: 'motion', emoji: '🏃', name: 'Движение' },
    { id: 'speech', emoji: '🗣️', name: 'Речь' },
    { id: 'life',   emoji: '🌱', name: 'Жизнь' },
    { id: 'mind',   emoji: '🧠', name: 'Сознание' },
    { id: 'tech',   emoji: '⚙️', name: 'Техника' }
];

// ===== ПОДСКАЗКИ ДЛЯ ПОИСКА ПО-РУССКИ =====
const rootSearchHints = {
    'port':  ['нести', 'носить', 'перенос', 'транспорт'],
    'ject':  ['бросать', 'кидать', 'метать'],
    'tract': ['тянуть', 'тащить', 'притягивать'],
    'duct':  ['вести', 'водить', 'провод'],
    'ven':   ['приходить', 'приход', 'идти'],
    'mov':   ['двигать', 'движение', 'перемещать'],
    'dict':  ['говорить', 'речь', 'сказать'],
    'log':   ['слово', 'учение', 'наука'],
    'graph': ['писать', 'чертить', 'рисовать'],
    'scrib': ['писать', 'запись'],
    'phon':  ['звук', 'голос', 'слышать'],
    'bio':   ['жизнь', 'живой'],
    'viv':   ['жить', 'жизнь', 'живой'],
    'mort':  ['смерть', 'умирать', 'смертный'],
    'terr':  ['земля', 'территория'],
    'press': ['давить', 'жать', 'пресс'],
    'spect': ['смотреть', 'взгляд', 'зрение'],
    'vis':   ['видеть', 'зрение', 'смотреть'],
    'cred':  ['верить', 'доверие', 'вера'],
    'mem':   ['память', 'помнить', 'запоминать'],
    'sens':  ['чувство', 'чувствовать', 'ощущать'],
    'struct':['строить', 'конструкция'],
    'form':  ['форма', 'формировать'],
    'tele':  ['далеко', 'дальний'],
    'mit':   ['посылать', 'отправлять', 'миссия'],
    'cap':   ['брать', 'ловить', 'захватывать'],
    'fin':   ['конец', 'граница', 'финал'],
    'nomin': ['имя', 'название'],
    'popul': ['народ', 'люди', 'публика']
};
