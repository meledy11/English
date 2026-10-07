// prefixes.js — база приставок и суффиксов английского языка
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
            { word: 'understand', transcription: '[ˌʌndəˈstænd]', trans: 'понимать (стоять под смыслом)', ex: 'I <b>under</b>stand you.', exRu: 'Я тебя понимаю.' },
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