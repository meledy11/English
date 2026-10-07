// prefixes.js — база приставок, суффиксов, корней-конструкторов,
// волшебных глаголов, слов направления и супер-слов английского языка

// ═══════════════════════════════════════════════
// ПРИСТАВКИ (базовые)
// ═══════════════════════════════════════════════
const prefixes = [
    {
        id: 'pre', type: 'prefix', affix: 'pre-', emoji: '⏪',
        meaning: 'ДО, ПЕРЕД, ЗАРАНЕЕ',
        assoc: 'preview = предпросмотр',
        explanation: 'pre- означает "до" или "заранее".',
        words: [
            { word: 'preview', transcription: '[ˈpriːvjuː]', trans: 'предпросмотр', ex: 'Let me have a <b>pre</b>view.', exRu: 'Дай мне предпросмотр.' },
            { word: 'prepare', transcription: '[prɪˈpeə]', trans: 'подготовить', ex: 'I <b>pre</b>pare breakfast.', exRu: 'Я готовлю завтрак.' },
            { word: 'predict', transcription: '[prɪˈdɪkt]', trans: 'предсказать', ex: 'Hard to <b>pre</b>dict.', exRu: 'Сложно предсказать.' },
            { word: 'prefer', transcription: '[prɪˈfɜː]', trans: 'предпочитать', ex: 'I <b>pre</b>fer tea.', exRu: 'Я предпочитаю чай.' }
        ]
    },
    {
        id: 'post', type: 'prefix', affix: 'post-', emoji: '⏩',
        meaning: 'ПОСЛЕ',
        assoc: 'postwar = послевоенный',
        explanation: 'post- означает "после".',
        words: [
            { word: 'postpone', transcription: '[pəˈspəʊn]', trans: 'отложить', ex: '<b>Post</b>pone the meeting.', exRu: 'Отложи встречу.' },
            { word: 'postwar', transcription: '[ˌpəʊstˈwɔː]', trans: 'послевоенный', ex: 'The <b>post</b>war years.', exRu: 'Послевоенные годы.' },
            { word: 'postgraduate', transcription: '[ˌpəʊstˈɡrædʒuət]', trans: 'аспирант', ex: 'A <b>post</b>graduate student.', exRu: 'Аспирант.' }
        ]
    },
    {
        id: 'out', type: 'prefix', affix: 'out-', emoji: '🚪➡️',
        meaning: 'НАРУЖУ / ПРЕВОСХОДИТЬ',
        assoc: 'outdoor = на улице',
        explanation: 'out- означает "наружу" или "превзойти".',
        words: [
            { word: 'outdoor', transcription: '[ˈaʊtdɔː]', trans: 'на улице', ex: '<b>Out</b>door activities.', exRu: 'Занятия на улице.' },
            { word: 'outrun', transcription: '[ˌaʊtˈrʌn]', trans: 'обогнать', ex: 'He can <b>out</b>run anyone.', exRu: 'Он обгонит любого.' },
            { word: 'outstanding', transcription: '[aʊtˈstændɪŋ]', trans: 'выдающийся', ex: 'An <b>out</b>standing performance.', exRu: 'Выдающееся выступление.' },
            { word: 'output', transcription: '[ˈaʊtpʊt]', trans: 'выпуск', ex: 'Increase the <b>out</b>put.', exRu: 'Увеличь выпуск.' }
        ]
    },
    {
        id: 'dis', type: 'prefix', affix: 'dis-', emoji: '🚫',
        meaning: 'НЕ / ОТРИЦАНИЕ',
        assoc: 'discomfort = дискомфорт',
        explanation: 'dis- даёт отрицание или разделение.',
        words: [
            { word: 'disagree', transcription: '[ˌdɪsəˈɡriː]', trans: 'не соглашаться', ex: 'I <b>dis</b>agree.', exRu: 'Я не согласен.' },
            { word: 'disappear', transcription: '[ˌdɪsəˈpɪə]', trans: 'исчезнуть', ex: 'The sun <b>dis</b>appeared.', exRu: 'Солнце исчезло.' },
            { word: 'disconnect', transcription: '[ˌdɪskəˈnekt]', trans: 'отключить', ex: '<b>Dis</b>connect the cable.', exRu: 'Отключи кабель.' },
            { word: 'dislike', transcription: '[dɪsˈlaɪk]', trans: 'не любить', ex: 'I <b>dis</b>like cold.', exRu: 'Не люблю холод.' }
        ]
    },
    {
        id: 're', type: 'prefix', affix: 're-', emoji: '🔄',
        meaning: 'СНОВА / ОБРАТНО',
        assoc: 'rewrite = переписать',
        explanation: 're- означает "снова" или "назад".',
        words: [
            { word: 'rewrite', transcription: '[ˌriːˈraɪt]', trans: 'переписать', ex: '<b>Re</b>write this.', exRu: 'Перепиши это.' },
            { word: 'return', transcription: '[rɪˈtɜːn]', trans: 'вернуться', ex: 'I will <b>re</b>turn.', exRu: 'Я вернусь.' },
            { word: 'rebuild', transcription: '[ˌriːˈbɪld]', trans: 'перестроить', ex: '<b>Re</b>build the bridge.', exRu: 'Перестрой мост.' },
            { word: 'review', transcription: '[rɪˈvjuː]', trans: 'пересмотреть', ex: '<b>Re</b>view your notes.', exRu: 'Пересмотри заметки.' }
        ]
    },
    {
        id: 'de', type: 'prefix', affix: 'de-', emoji: '⬇️🚫',
        meaning: 'ВНИЗ / УБРАТЬ',
        assoc: 'delete = удалить',
        explanation: 'de- означает "вниз" или "убрать".',
        words: [
            { word: 'delete', transcription: '[dɪˈliːt]', trans: 'удалить', ex: '<b>De</b>lete that file.', exRu: 'Удали файл.' },
            { word: 'decrease', transcription: '[dɪˈkriːs]', trans: 'уменьшить', ex: 'Sales <b>de</b>creased.', exRu: 'Продажи упали.' },
            { word: 'deactivate', transcription: '[diːˈæktɪveɪt]', trans: 'деактивировать', ex: '<b>De</b>activate your account.', exRu: 'Деактивируй аккаунт.' },
            { word: 'descend', transcription: '[dɪˈsend]', trans: 'спускаться', ex: 'The plane <b>de</b>scends.', exRu: 'Самолёт снижается.' }
        ]
    },
    {
        id: 'un', type: 'prefix', affix: 'un-', emoji: '❌',
        meaning: 'НЕ / ОБРАТНОЕ ДЕЙСТВИЕ',
        assoc: 'happy → unhappy',
        explanation: 'un- — самый частый отрицательный префикс.',
        words: [
            { word: 'unhappy', transcription: '[ʌnˈhæpi]', trans: 'несчастный', ex: 'She is <b>un</b>happy.', exRu: 'Она несчастна.' },
            { word: 'undo', transcription: '[ʌnˈduː]', trans: 'отменить', ex: '<b>Un</b>do the changes.', exRu: 'Отмени изменения.' },
            { word: 'unlock', transcription: '[ʌnˈlɒk]', trans: 'открыть', ex: '<b>Un</b>lock the door.', exRu: 'Открой дверь.' },
            { word: 'unusual', transcription: '[ʌnˈjuːʒuəl]', trans: 'необычный', ex: 'An <b>un</b>usual day.', exRu: 'Необычный день.' }
        ]
    },
    {
        id: 'mis', type: 'prefix', affix: 'mis-', emoji: '⚠️',
        meaning: 'НЕПРАВИЛЬНО',
        assoc: 'mistake = ошибка',
        explanation: 'mis- означает "неправильно".',
        words: [
            { word: 'mistake', transcription: '[mɪˈsteɪk]', trans: 'ошибка', ex: 'Everyone makes <b>mis</b>takes.', exRu: 'Все ошибаются.' },
            { word: 'misunderstand', transcription: '[ˌmɪsʌndəˈstænd]', trans: 'не понять', ex: 'You <b>mis</b>understood.', exRu: 'Ты не понял.' },
            { word: 'mislead', transcription: '[ˌmɪsˈliːd]', trans: 'ввести в заблуждение', ex: 'Don\'t <b>mis</b>lead.', exRu: 'Не вводи в заблуждение.' },
            { word: 'misbehave', transcription: '[ˌmɪsbɪˈheɪv]', trans: 'плохо себя вести', ex: 'The kids <b>mis</b>behave.', exRu: 'Дети плохо себя ведут.' }
        ]
    },
    {
        id: 'over', type: 'prefix', affix: 'over-', emoji: '🔝',
        meaning: 'СВЕРХ / СЛИШКОМ',
        assoc: 'overdose = передозировка',
        explanation: 'over- означает "слишком" или "сверх".',
        words: [
            { word: 'overwork', transcription: '[ˌəʊvəˈwɜːk]', trans: 'перерабатывать', ex: 'Don\'t <b>over</b>work.', exRu: 'Не перерабатывай.' },
            { word: 'overtake', transcription: '[ˌəʊvəˈteɪk]', trans: 'обгонять', ex: 'The car <b>over</b>took us.', exRu: 'Машина нас обогнала.' },
            { word: 'overweight', transcription: '[ˌəʊvəˈweɪt]', trans: 'с лишним весом', ex: 'He is <b>over</b>weight.', exRu: 'У него лишний вес.' },
            { word: 'oversleep', transcription: '[ˌəʊvəˈsliːp]', trans: 'проспать', ex: 'I <b>over</b>slept.', exRu: 'Я проспал.' }
        ]
    },
    {
        id: 'under', type: 'prefix', affix: 'under-', emoji: '⬇️',
        meaning: 'ПОД / НЕДОСТАТОЧНО',
        assoc: 'underground = под землёй',
        explanation: 'under- означает "под" или "недостаточно".',
        words: [
            { word: 'underground', transcription: '[ˈʌndəɡraʊnd]', trans: 'подземный', ex: 'London <b>under</b>ground.', exRu: 'Лондонское метро.' },
            { word: 'understand', transcription: '[ˌʌndəˈstænd]', trans: 'понимать', ex: 'I <b>under</b>stand.', exRu: 'Я понимаю.' },
            { word: 'underestimate', transcription: '[ˌʌndərˈestɪmeɪt]', trans: 'недооценить', ex: 'Don\'t <b>under</b>estimate her.', exRu: 'Не недооценивай её.' },
            { word: 'undergo', transcription: '[ˌʌndəˈɡəʊ]', trans: 'проходить через', ex: 'He <b>under</b>went surgery.', exRu: 'Он перенёс операцию.' }
        ]
    },
    {
        id: 'in-im', type: 'prefix', affix: 'in- / im- / il- / ir-', emoji: '❌',
        meaning: 'НЕ / ОТРИЦАНИЕ',
        assoc: 'in- перед согласной, im- перед m/p',
        explanation: 'Латинизированный аналог un-.',
        words: [
            { word: 'invisible', transcription: '[ɪnˈvɪzəbl]', trans: 'невидимый', ex: 'Air is <b>in</b>visible.', exRu: 'Воздух невидим.' },
            { word: 'impossible', transcription: '[ɪmˈpɒsəbl]', trans: 'невозможный', ex: 'Nothing is <b>im</b>possible.', exRu: 'Нет ничего невозможного.' },
            { word: 'illegal', transcription: '[ɪˈliːɡl]', trans: 'незаконный', ex: 'It is <b>il</b>legal.', exRu: 'Это незаконно.' },
            { word: 'irregular', transcription: '[ɪˈreɡjələ]', trans: 'неправильный', ex: '<b>Ir</b>regular verbs.', exRu: 'Неправильные глаголы.' }
        ]
    },
    {
        id: 'non', type: 'prefix', affix: 'non-', emoji: '🚫',
        meaning: 'НЕ / БЕЗ',
        assoc: 'nonstop = без остановки',
        explanation: 'non- означает "не" или "без".',
        words: [
            { word: 'nonstop', transcription: '[ˌnɒnˈstɒp]', trans: 'без остановки', ex: 'We talked <b>non</b>stop.', exRu: 'Мы говорили без остановки.' },
            { word: 'nonsense', transcription: '[ˈnɒnsns]', trans: 'бессмыслица', ex: 'That is <b>non</b>sense.', exRu: 'Это бессмыслица.' },
            { word: 'nonfiction', transcription: '[ˌnɒnˈfɪkʃn]', trans: 'нон-фикшн', ex: '<b>Non</b>fiction books.', exRu: 'Книги нон-фикшн.' }
        ]
    },
    {
        id: 'anti', type: 'prefix', affix: 'anti-', emoji: '⚔️',
        meaning: 'ПРОТИВ',
        assoc: 'антибиотик = против жизни',
        explanation: 'anti- означает "против".',
        words: [
            { word: 'antibiotic', transcription: '[ˌæntibaɪˈɒtɪk]', trans: 'антибиотик', ex: 'Take <b>anti</b>biotics.', exRu: 'Принимай антибиотики.' },
            { word: 'antivirus', transcription: '[ˌæntiˈvaɪrəs]', trans: 'антивирус', ex: 'Install <b>anti</b>virus.', exRu: 'Установи антивирус.' },
            { word: 'antisocial', transcription: '[ˌæntiˈsəʊʃl]', trans: 'необщительный', ex: 'He is <b>anti</b>social.', exRu: 'Он необщительный.' }
        ]
    },
    {
        id: 'co', type: 'prefix', affix: 'co- / com- / con-', emoji: '🤝',
        meaning: 'ВМЕСТЕ',
        assoc: 'cooperate = сотрудничать',
        explanation: 'co-, com-, con- означают "вместе".',
        words: [
            { word: 'cooperate', transcription: '[kəʊˈɒpəreɪt]', trans: 'сотрудничать', ex: '<b>Co</b>operate with us.', exRu: 'Сотрудничай с нами.' },
            { word: 'connect', transcription: '[kəˈnekt]', trans: 'соединять', ex: '<b>Con</b>nect the cable.', exRu: 'Соедини кабель.' },
            { word: 'combine', transcription: '[kəmˈbaɪn]', trans: 'комбинировать', ex: '<b>Com</b>bine ingredients.', exRu: 'Смешай ингредиенты.' }
        ]
    },
    {
        id: 'sub', type: 'prefix', affix: 'sub-', emoji: '⬇️',
        meaning: 'ПОД / ВНИЗУ',
        assoc: 'submarine = под водой',
        explanation: 'sub- означает "под".',
        words: [
            { word: 'submarine', transcription: '[ˌsʌbməˈriːn]', trans: 'подлодка', ex: 'The <b>sub</b>marine dived.', exRu: 'Подлодка нырнула.' },
            { word: 'subway', transcription: '[ˈsʌbweɪ]', trans: 'метро', ex: 'Take the <b>sub</b>way.', exRu: 'Поезжай на метро.' },
            { word: 'subtract', transcription: '[səbˈtrækt]', trans: 'вычитать', ex: '<b>Sub</b>tract five.', exRu: 'Вычти пять.' }
        ]
    },
    {
        id: 'super', type: 'prefix', affix: 'super- / sur-', emoji: '🦸',
        meaning: 'СВЕРХ / НАД',
        assoc: 'superman = сверхчеловек',
        explanation: 'super- означает "сверх".',
        words: [
            { word: 'supermarket', transcription: '[ˈsuːpəmɑːkɪt]', trans: 'супермаркет', ex: 'Buy food at the <b>super</b>market.', exRu: 'Купи еду в супермаркете.' },
            { word: 'supernatural', transcription: '[ˌsuːpəˈnætʃrəl]', trans: 'сверхъестественный', ex: 'A <b>super</b>natural event.', exRu: 'Сверхъестественное событие.' },
            { word: 'surface', transcription: '[ˈsɜːfɪs]', trans: 'поверхность', ex: 'On the <b>sur</b>face.', exRu: 'На поверхности.' }
        ]
    },
    {
        id: 'trans', type: 'prefix', affix: 'trans-', emoji: '🚚',
        meaning: 'ЧЕРЕЗ / МЕЖДУ',
        assoc: 'transport = переносить через',
        explanation: 'trans- означает "через".',
        words: [
            { word: 'transport', transcription: '[ˈtrænspɔːt]', trans: 'транспорт', ex: 'Public <b>trans</b>port.', exRu: 'Общественный транспорт.' },
            { word: 'translate', transcription: '[trænzˈleɪt]', trans: 'переводить', ex: '<b>Trans</b>late this text.', exRu: 'Переведи текст.' },
            { word: 'transfer', transcription: '[trænsˈfɜː]', trans: 'перевести', ex: '<b>Trans</b>fer money.', exRu: 'Переведи деньги.' }
        ]
    },
    {
        id: 'bi', type: 'prefix', affix: 'bi- / tri- / multi-', emoji: '🔢',
        meaning: 'ДВА / ТРИ / МНОГО',
        assoc: 'bicycle = два колеса',
        explanation: 'bi- (2), tri- (3), multi- (много).',
        words: [
            { word: 'bicycle', transcription: '[ˈbaɪsɪkl]', trans: 'велосипед', ex: 'Ride a <b>bi</b>cycle.', exRu: 'Кати на велосипеде.' },
            { word: 'triangle', transcription: '[ˈtraɪæŋɡl]', trans: 'треугольник', ex: 'Draw a <b>tri</b>angle.', exRu: 'Нарисуй треугольник.' },
            { word: 'multicultural', transcription: '[ˌmʌltiˈkʌltʃərəl]', trans: 'многокультурный', ex: 'A <b>multi</b>cultural city.', exRu: 'Многокультурный город.' }
        ]
    },
    {
        id: 'auto', type: 'prefix', affix: 'auto-', emoji: '🤖',
        meaning: 'САМ / АВТОМАТИЧЕСКИ',
        assoc: 'automatic = само по себе',
        explanation: 'auto- означает "сам".',
        words: [
            { word: 'automatic', transcription: '[ˌɔːtəˈmætɪk]', trans: 'автоматический', ex: 'An <b>auto</b>matic door.', exRu: 'Автоматическая дверь.' },
            { word: 'autograph', transcription: '[ˈɔːtəɡrɑːf]', trans: 'автограф', ex: 'Sign an <b>auto</b>graph.', exRu: 'Поставь автограф.' },
            { word: 'autobiography', transcription: '[ˌɔːtəbaɪˈɒɡrəfi]', trans: 'автобиография', ex: 'Her <b>auto</b>biography.', exRu: 'Её автобиография.' }
        ]
    },
    {
        id: 'ex', type: 'prefix', affix: 'ex- / extra-', emoji: '🚪',
        meaning: 'НАРУЖУ / БЫВШИЙ / СВЕРХ',
        assoc: 'export = выносить',
        explanation: 'ex- = наружу. extra- = сверх.',
        words: [
            { word: 'export', transcription: '[ˈekspɔːt]', trans: 'экспорт', ex: 'We <b>ex</b>port cars.', exRu: 'Мы экспортируем машины.' },
            { word: 'exit', transcription: '[ˈeksɪt]', trans: 'выход', ex: 'Where is the <b>ex</b>it?', exRu: 'Где выход?' },
            { word: 'extraordinary', transcription: '[ɪkˈstrɔːdnri]', trans: 'необыкновенный', ex: 'An <b>extra</b>ordinary day.', exRu: 'Необыкновенный день.' }
        ]
    },
    {
        id: 'semi', type: 'prefix', affix: 'semi-', emoji: '🌗',
        meaning: 'ПОЛУ / НАПОЛОВИНУ',
        assoc: 'semicircle = полукруг',
        explanation: 'semi- означает "половина".',
        words: [
            { word: 'semicircle', transcription: '[ˈsemisɜːkl]', trans: 'полукруг', ex: 'Draw a <b>semi</b>circle.', exRu: 'Нарисуй полукруг.' },
            { word: 'semifinal', transcription: '[ˌsemiˈfaɪnl]', trans: 'полуфинал', ex: 'The <b>semi</b>final.', exRu: 'Полуфинал.' },
            { word: 'semiconscious', transcription: '[ˌsemiˈkɒnʃəs]', trans: 'в полусознании', ex: 'He was <b>semi</b>conscious.', exRu: 'Он был в полусознании.' }
        ]
    },
    {
        id: 'fore', type: 'prefix', affix: 'fore-', emoji: '👁️',
        meaning: 'ПЕРЕД / ЗАРАНЕЕ',
        assoc: 'forecast = прогноз',
        explanation: 'fore- означает "перед".',
        words: [
            { word: 'forecast', transcription: '[ˈfɔːkɑːst]', trans: 'прогноз', ex: 'Weather <b>fore</b>cast.', exRu: 'Прогноз погоды.' },
            { word: 'foresee', transcription: '[fɔːˈsiː]', trans: 'предвидеть', ex: 'I <b>fore</b>see problems.', exRu: 'Предвижу проблемы.' },
            { word: 'forehead', transcription: '[ˈfɔːhed]', trans: 'лоб', ex: 'Touch your <b>fore</b>head.', exRu: 'Потрогай лоб.' }
        ]
    },
    {
        id: 'en', type: 'prefix', affix: 'en- / em-', emoji: '⚡',
        meaning: 'СДЕЛАТЬ / ВНУТРЬ',
        assoc: 'enable = сделать способным',
        explanation: 'en- превращает в глагол.',
        words: [
            { word: 'enable', transcription: '[ɪˈneɪbl]', trans: 'включить', ex: '<b>En</b>able notifications.', exRu: 'Включи уведомления.' },
            { word: 'enlarge', transcription: '[ɪnˈlɑːdʒ]', trans: 'увеличить', ex: '<b>En</b>large the photo.', exRu: 'Увеличь фото.' },
            { word: 'empower', transcription: '[ɪmˈpaʊə]', trans: 'дать силу', ex: '<b>Em</b>power people.', exRu: 'Дай людям силу.' }
        ]
    },
    {
        id: 'a', type: 'prefix', affix: 'a-', emoji: '🌟',
        meaning: 'В СОСТОЯНИИ / БЕЗ',
        assoc: 'awake = бодрствующий',
        explanation: 'a- означает "в состоянии".',
        words: [
            { word: 'awake', transcription: '[əˈweɪk]', trans: 'бодрствующий', ex: 'I am <b>a</b>wake.', exRu: 'Я не сплю.' },
            { word: 'alive', transcription: '[əˈlaɪv]', trans: 'живой', ex: 'She is <b>a</b>live.', exRu: 'Она жива.' },
            { word: 'asleep', transcription: '[əˈsliːp]', trans: 'спящий', ex: 'The baby is <b>a</b>sleep.', exRu: 'Ребёнок спит.' },
            { word: 'apart', transcription: '[əˈpɑːt]', trans: 'отдельно', ex: 'They live <b>a</b>part.', exRu: 'Они живут отдельно.' }
        ]
    },
    {
        id: 'be', type: 'prefix', affix: 'be-', emoji: '🔄',
        meaning: 'СДЕЛАТЬ / ВОКРУГ',
        assoc: 'become = стать',
        explanation: 'be- означает "сделать".',
        words: [
            { word: 'become', transcription: '[bɪˈkʌm]', trans: 'становиться', ex: 'She <b>be</b>came a doctor.', exRu: 'Она стала врачом.' },
            { word: 'belong', transcription: '[bɪˈlɒŋ]', trans: 'принадлежать', ex: 'It <b>be</b>longs to me.', exRu: 'Это принадлежит мне.' },
            { word: 'behave', transcription: '[bɪˈheɪv]', trans: 'вести себя', ex: '<b>Be</b>have well.', exRu: 'Веди себя хорошо.' },
            { word: 'believe', transcription: '[bɪˈliːv]', trans: 'верить', ex: 'I <b>be</b>lieve you.', exRu: 'Я тебе верю.' }
        ]
    },
    {
        id: 'counter', type: 'prefix', affix: 'counter-', emoji: '⚔️',
        meaning: 'ПРОТИВ',
        assoc: 'counterattack = контратака',
        explanation: 'counter- означает "против".',
        words: [
            { word: 'counterattack', transcription: '[ˈkaʊntərətæk]', trans: 'контратака', ex: 'A <b>counter</b>attack.', exRu: 'Контратака.' },
            { word: 'counterpart', transcription: '[ˈkaʊntəpɑːt]', trans: 'коллега', ex: 'My <b>counter</b>part.', exRu: 'Мой коллега.' }
        ]
    },
    {
        id: 'hyper', type: 'prefix', affix: 'hyper- / hypo-', emoji: '🔥',
        meaning: 'СВЕРХ / ПОД НОРМОЙ',
        assoc: 'hyperactive = гиперактивный',
        explanation: 'hyper- = сверх. hypo- = ниже.',
        words: [
            { word: 'hyperactive', transcription: '[ˌhaɪpərˈæktɪv]', trans: 'гиперактивный', ex: 'A <b>hyper</b>active child.', exRu: 'Гиперактивный ребёнок.' },
            { word: 'hypothesis', transcription: '[haɪˈpɒθəsɪs]', trans: 'гипотеза', ex: 'Test the <b>hypo</b>thesis.', exRu: 'Проверь гипотезу.' },
            { word: 'hypocrite', transcription: '[ˈhɪpəkrɪt]', trans: 'лицемер', ex: 'A <b>hypo</b>crite.', exRu: 'Лицемер.' }
        ]
    },
    {
        id: 'macro', type: 'prefix', affix: 'macro- / micro-', emoji: '🔬',
        meaning: 'БОЛЬШОЙ / МАЛЫЙ',
        assoc: 'microphone = маленький звук',
        explanation: 'macro- = большой. micro- = маленький.',
        words: [
            { word: 'microphone', transcription: '[ˈmaɪkrəfəʊn]', trans: 'микрофон', ex: 'Speak into the <b>micro</b>phone.', exRu: 'Говори в микрофон.' },
            { word: 'microwave', transcription: '[ˈmaɪkrəweɪv]', trans: 'микроволновка', ex: 'Use the <b>micro</b>wave.', exRu: 'Используй микроволновку.' },
            { word: 'macrocosm', transcription: '[ˈmækrəʊkɒzəm]', trans: 'макрокосм', ex: 'A <b>macro</b>cosm.', exRu: 'Макрокосм.' }
        ]
    },
    {
        id: 'proto', type: 'prefix', affix: 'proto- / pseudo-', emoji: '🎭',
        meaning: 'ПЕРВЫЙ / ЛОЖНЫЙ',
        assoc: 'prototype = первый тип',
        explanation: 'proto- = первый. pseudo- = ложный.',
        words: [
            { word: 'prototype', transcription: '[ˈprəʊtətaɪp]', trans: 'прототип', ex: 'A <b>proto</b>type.', exRu: 'Прототип.' },
            { word: 'pseudonym', transcription: '[ˈsjuːdənɪm]', trans: 'псевдоним', ex: 'A <b>pseudo</b>nym.', exRu: 'Псевдоним.' }
        ]
    },
    {
        id: 'vice', type: 'prefix', affix: 'vice-', emoji: '👔',
        meaning: 'ЗАМЕСТИТЕЛЬ',
        assoc: 'vice-president',
        explanation: 'vice- означает "заместитель".',
        words: [
            { word: 'vice-president', transcription: '[ˌvaɪs ˈprezɪdənt]', trans: 'вице-президент', ex: 'The <b>vice</b>-president spoke.', exRu: 'Вице-президент выступил.' },
            { word: 'viceroy', transcription: '[ˈvaɪsrɔɪ]', trans: 'вице-король', ex: 'The <b>vice</b>roy ruled.', exRu: 'Вице-король правил.' }
        ]
    },
    {
        id: 'inter', type: 'prefix', affix: 'inter-', emoji: '🌐',
        meaning: 'МЕЖДУ / ВЗАИМНО',
        assoc: 'international = между народами',
        explanation: 'inter- означает "между".',
        words: [
            { word: 'international', transcription: '[ˌɪntəˈnæʃnəl]', trans: 'международный', ex: 'An <b>inter</b>national company.', exRu: 'Международная компания.' },
            { word: 'internet', transcription: '[ˈɪntənet]', trans: 'интернет', ex: 'Use the <b>inter</b>net.', exRu: 'Пользуйся интернетом.' },
            { word: 'interact', transcription: '[ˌɪntərˈækt]', trans: 'взаимодействовать', ex: 'They <b>inter</b>act well.', exRu: 'Они хорошо взаимодействуют.' }
        ]
    },

    // ═══════════════════════════════════════════════
    // СУФФИКСЫ
    // ═══════════════════════════════════════════════
    {
        id: 'ed', type: 'suffix', affix: '-ed', emoji: '✅⏪',
        meaning: 'ПРОШЕДШЕЕ / СДЕЛАННЫЙ',
        assoc: 'worked = работал',
        explanation: '-ed образует прошедшее время и прилагательные.',
        words: [
            { word: 'worked', transcription: '[wɜːkt]', trans: 'работал', ex: 'I <b>work</b>ed yesterday.', exRu: 'Я работал вчера.' },
            { word: 'tired', transcription: '[ˈtaɪəd]', trans: 'уставший', ex: 'I am <b>tir</b>ed.', exRu: 'Я устал.' },
            { word: 'excited', transcription: '[ɪkˈsaɪtɪd]', trans: 'взволнованный', ex: 'She was <b>excit</b>ed.', exRu: 'Она была взволнована.' },
            { word: 'closed', transcription: '[kləʊzd]', trans: 'закрытый', ex: 'The shop is <b>clos</b>ed.', exRu: 'Магазин закрыт.' }
        ]
    },
    {
        id: 'ing', type: 'suffix', affix: '-ing', emoji: '🏃',
        meaning: 'ДЕЙСТВИЕ / ПРОЦЕСС',
        assoc: 'running = бег',
        explanation: '-ing образует герундий и причастие.',
        words: [
            { word: 'running', transcription: '[ˈrʌnɪŋ]', trans: 'бег', ex: 'He is <b>run</b>ning.', exRu: 'Он бежит.' },
            { word: 'swimming', transcription: '[ˈswɪmɪŋ]', trans: 'плавание', ex: 'I like <b>swim</b>ming.', exRu: 'Я люблю плавать.' },
            { word: 'interesting', transcription: '[ˈɪntrəstɪŋ]', trans: 'интересный', ex: 'An <b>interest</b>ing book.', exRu: 'Интересная книга.' },
            { word: 'boring', transcription: '[ˈbɔːrɪŋ]', trans: 'скучный', ex: 'A <b>bor</b>ing film.', exRu: 'Скучный фильм.' }
        ]
    },
    {
        id: 'er', type: 'suffix', affix: '-er / -or', emoji: '👤',
        meaning: 'ТОТ, КТО ДЕЛАЕТ',
        assoc: 'teacher = учитель',
        explanation: '-er / -or образуют существительное.',
        words: [
            { word: 'teacher', transcription: '[ˈtiːtʃə]', trans: 'учитель', ex: 'My <b>teach</b>er is kind.', exRu: 'Мой учитель добрый.' },
            { word: 'worker', transcription: '[ˈwɜːkə]', trans: 'рабочий', ex: 'A hard <b>work</b>er.', exRu: 'Трудолюбивый работник.' },
            { word: 'actor', transcription: '[ˈæktə]', trans: 'актёр', ex: 'A famous <b>act</b>or.', exRu: 'Известный актёр.' },
            { word: 'computer', transcription: '[kəmˈpjuːtə]', trans: 'компьютер', ex: 'I use a <b>comput</b>er.', exRu: 'Я использую компьютер.' }
        ]
    },
    {
        id: 'ly', type: 'suffix', affix: '-ly', emoji: '⚡',
        meaning: 'ОБРАЗ ДЕЙСТВИЯ',
        assoc: 'quickly = быстро',
        explanation: '-ly превращает в наречие.',
        words: [
            { word: 'quickly', transcription: '[ˈkwɪkli]', trans: 'быстро', ex: 'He runs <b>quick</b>ly.', exRu: 'Он бегает быстро.' },
            { word: 'slowly', transcription: '[ˈsləʊli]', trans: 'медленно', ex: 'Speak <b>slow</b>ly.', exRu: 'Говори медленно.' },
            { word: 'happily', transcription: '[ˈhæpɪli]', trans: 'счастливо', ex: 'They lived <b>happi</b>ly.', exRu: 'Они жили счастливо.' },
            { word: 'usually', transcription: '[ˈjuːʒuəli]', trans: 'обычно', ex: 'I <b>usual</b>ly get up at 7.', exRu: 'Я обычно встаю в 7.' }
        ]
    },
    {
        id: 'ful', type: 'suffix', affix: '-ful', emoji: '💯',
        meaning: 'ПОЛНЫЙ ЧЕГО-ТО',
        assoc: 'beautiful = полный красоты',
        explanation: '-ful означает "полный".',
        words: [
            { word: 'beautiful', transcription: '[ˈbjuːtɪfl]', trans: 'красивый', ex: 'A <b>beauti</b>ful day.', exRu: 'Красивый день.' },
            { word: 'helpful', transcription: '[ˈhelpfl]', trans: 'полезный', ex: 'A <b>help</b>ful tip.', exRu: 'Полезный совет.' },
            { word: 'careful', transcription: '[ˈkeəfl]', trans: 'осторожный', ex: 'Be <b>care</b>ful!', exRu: 'Будь осторожен!' },
            { word: 'useful', transcription: '[ˈjuːsfl]', trans: 'полезный', ex: 'A <b>use</b>ful app.', exRu: 'Полезное приложение.' }
        ]
    },
    {
        id: 'less', type: 'suffix', affix: '-less', emoji: '🚫💯',
        meaning: 'БЕЗ ЧЕГО-ТО',
        assoc: 'hopeless = без надежды',
        explanation: '-less означает "без".',
        words: [
            { word: 'hopeless', transcription: '[ˈhəʊpləs]', trans: 'безнадёжный', ex: 'It seems <b>hope</b>less.', exRu: 'Кажется безнадёжным.' },
            { word: 'careless', transcription: '[ˈkeələs]', trans: 'беззаботный', ex: 'A <b>care</b>less mistake.', exRu: 'Небрежная ошибка.' },
            { word: 'useless', transcription: '[ˈjuːsləs]', trans: 'бесполезный', ex: 'This is <b>use</b>less.', exRu: 'Это бесполезно.' },
            { word: 'homeless', transcription: '[ˈhəʊmləs]', trans: 'бездомный', ex: 'A <b>home</b>less man.', exRu: 'Бездомный человек.' }
        ]
    },
    {
        id: 'ness', type: 'suffix', affix: '-ness', emoji: '💠',
        meaning: 'СОСТОЯНИЕ / КАЧЕСТВО',
        assoc: 'happiness = счастье',
        explanation: '-ness образует существительное.',
        words: [
            { word: 'happiness', transcription: '[ˈhæpinəs]', trans: 'счастье', ex: 'True <b>happi</b>ness.', exRu: 'Настоящее счастье.' },
            { word: 'darkness', transcription: '[ˈdɑːknəs]', trans: 'темнота', ex: 'In the <b>dark</b>ness.', exRu: 'В темноте.' },
            { word: 'kindness', transcription: '[ˈkaɪndnəs]', trans: 'доброта', ex: 'Thank you for your <b>kind</b>ness.', exRu: 'Спасибо за доброту.' },
            { word: 'weakness', transcription: '[ˈwiːknəs]', trans: 'слабость', ex: 'A <b>weak</b>ness.', exRu: 'Слабость.' }
        ]
    },
    {
        id: 'able', type: 'suffix', affix: '-able / -ible', emoji: '✅',
        meaning: 'СПОСОБНЫЙ / ВОЗМОЖНЫЙ',
        assoc: 'readable = можно прочитать',
        explanation: '-able означает "можно сделать".',
        words: [
            { word: 'readable', transcription: '[ˈriːdəbl]', trans: 'читаемый', ex: 'A <b>read</b>able text.', exRu: 'Читаемый текст.' },
            { word: 'comfortable', transcription: '[ˈkʌmftəbl]', trans: 'удобный', ex: 'A <b>comfort</b>able bed.', exRu: 'Удобная кровать.' },
            { word: 'possible', transcription: '[ˈpɒsəbl]', trans: 'возможный', ex: 'It is <b>poss</b>ible.', exRu: 'Это возможно.' },
            { word: 'flexible', transcription: '[ˈfleksəbl]', trans: 'гибкий', ex: 'A <b>flex</b>ible plan.', exRu: 'Гибкий план.' }
        ]
    },
    {
        id: 'ment', type: 'suffix', affix: '-ment', emoji: '💭',
        meaning: 'РЕЗУЛЬТАТ ДЕЙСТВИЯ',
        assoc: 'movement = движение',
        explanation: '-ment образует существительное.',
        words: [
            { word: 'movement', transcription: '[ˈmuːvmənt]', trans: 'движение', ex: 'A slow <b>move</b>ment.', exRu: 'Медленное движение.' },
            { word: 'government', transcription: '[ˈɡʌvənmənt]', trans: 'правительство', ex: 'The <b>govern</b>ment decided.', exRu: 'Правительство решило.' },
            { word: 'agreement', transcription: '[əˈɡriːmənt]', trans: 'соглашение', ex: 'Sign the <b>agree</b>ment.', exRu: 'Подпиши соглашение.' },
            { word: 'development', transcription: '[dɪˈveləpmənt]', trans: 'развитие', ex: 'Rapid <b>develop</b>ment.', exRu: 'Быстрое развитие.' }
        ]
    },
    {
        id: 'tion', type: 'suffix', affix: '-tion / -sion', emoji: '📜',
        meaning: 'ПРОЦЕСС / СОСТОЯНИЕ',
        assoc: 'education = образование',
        explanation: '-tion образует существительное.',
        words: [
            { word: 'education', transcription: '[ˌedʒuˈkeɪʃn]', trans: 'образование', ex: 'Good <b>educa</b>tion.', exRu: 'Хорошее образование.' },
            { word: 'information', transcription: '[ˌɪnfəˈmeɪʃn]', trans: 'информация', ex: 'Useful <b>informa</b>tion.', exRu: 'Полезная информация.' },
            { word: 'decision', transcription: '[dɪˈsɪʒn]', trans: 'решение', ex: 'Make a <b>deci</b>sion.', exRu: 'Прими решение.' },
            { word: 'discussion', transcription: '[dɪˈskʌʃn]', trans: 'обсуждение', ex: 'A long <b>discus</b>sion.', exRu: 'Долгое обсуждение.' }
        ]
    },
    {
        id: 'ity', type: 'suffix', affix: '-ity / -ty', emoji: '💠',
        meaning: 'КАЧЕСТВО / СОСТОЯНИЕ',
        assoc: 'activity = активность',
        explanation: '-ity образует существительное.',
        words: [
            { word: 'activity', transcription: '[ækˈtɪvəti]', trans: 'деятельность', ex: 'My favourite <b>activ</b>ity.', exRu: 'Моё любимое занятие.' },
            { word: 'reality', transcription: '[riˈæləti]', trans: 'реальность', ex: 'Face <b>real</b>ity.', exRu: 'Взгляни в лицо реальности.' },
            { word: 'quality', transcription: '[ˈkwɒləti]', trans: 'качество', ex: 'High <b>qual</b>ity.', exRu: 'Высокое качество.' },
            { word: 'curiosity', transcription: '[ˌkjʊəriˈɒsəti]', trans: 'любопытство', ex: 'Her <b>curios</b>ity.', exRu: 'Её любопытство.' }
        ]
    },
    {
        id: 'ous', type: 'suffix', affix: '-ous / -ious', emoji: '🎭',
        meaning: 'ПОЛНЫЙ / ОБЛАДАЮЩИЙ',
        assoc: 'famous = известный',
        explanation: '-ous означает "обладающий".',
        words: [
            { word: 'famous', transcription: '[ˈfeɪməs]', trans: 'известный', ex: 'A <b>fam</b>ous singer.', exRu: 'Известный певец.' },
            { word: 'dangerous', transcription: '[ˈdeɪndʒərəs]', trans: 'опасный', ex: 'A <b>danger</b>ous road.', exRu: 'Опасная дорога.' },
            { word: 'delicious', transcription: '[dɪˈlɪʃəs]', trans: 'вкусный', ex: '<b>Delici</b>ous food.', exRu: 'Вкусная еда.' },
            { word: 'serious', transcription: '[ˈsɪəriəs]', trans: 'серьёзный', ex: 'A <b>seri</b>ous problem.', exRu: 'Серьёзная проблема.' }
        ]
    },
    {
        id: 'ward', type: 'suffix', affix: '-ward / -wards', emoji: '➡️',
        meaning: 'В НАПРАВЛЕНИИ',
        assoc: 'forward = вперёд',
        explanation: '-ward означает "в направлении".',
        words: [
            { word: 'forward', transcription: '[ˈfɔːwəd]', trans: 'вперёд', ex: 'Move <b>for</b>ward.', exRu: 'Двигайся вперёд.' },
            { word: 'backward', transcription: '[ˈbækwəd]', trans: 'назад', ex: 'Step <b>back</b>ward.', exRu: 'Шагни назад.' },
            { word: 'homeward', transcription: '[ˈhəʊmwəd]', trans: 'домой', ex: 'The <b>home</b>ward journey.', exRu: 'Дорога домой.' },
            { word: 'onward', transcription: '[ˈɒnwəd]', trans: 'далее', ex: 'From today <b>on</b>ward.', exRu: 'С сегодняшнего дня и далее.' }
        ]
    },
    {
        id: 'ee', type: 'suffix', affix: '-ee', emoji: '🙋',
        meaning: 'ТОТ, НА КОГО НАПРАВЛЕНО',
        assoc: 'employee = сотрудник',
        explanation: '-ee означает получателя действия.',
        words: [
            { word: 'employee', transcription: '[ɪmˈplɔɪiː]', trans: 'сотрудник', ex: 'A new <b>employ</b>ee.', exRu: 'Новый сотрудник.' },
            { word: 'trainee', transcription: '[ˌtreɪˈniː]', trans: 'стажёр', ex: 'A young <b>train</b>ee.', exRu: 'Молодой стажёр.' },
            { word: 'interviewee', transcription: '[ˌɪntəvjuːˈiː]', trans: 'собеседуемый', ex: 'The <b>interview</b>ee arrived.', exRu: 'Собеседуемый пришёл.' }
        ]
    },
    {
        id: 'hood', type: 'suffix', affix: '-hood / -ship', emoji: '👥',
        meaning: 'СОСТОЯНИЕ / ОТНОШЕНИЯ',
        assoc: 'childhood = детство',
        explanation: '-hood / -ship — состояние или отношения.',
        words: [
            { word: 'childhood', transcription: '[ˈtʃaɪldhʊd]', trans: 'детство', ex: 'A happy <b>child</b>hood.', exRu: 'Счастливое детство.' },
            { word: 'friendship', transcription: '[ˈfrendʃɪp]', trans: 'дружба', ex: 'True <b>friend</b>ship.', exRu: 'Настоящая дружба.' },
            { word: 'neighbourhood', transcription: '[ˈneɪbəhʊd]', trans: 'район', ex: 'A quiet <b>neighbour</b>hood.', exRu: 'Тихий район.' },
            { word: 'leadership', transcription: '[ˈliːdəʃɪp]', trans: 'лидерство', ex: 'Strong <b>leader</b>ship.', exRu: 'Сильное лидерство.' }
        ]
    },
    {
        id: 'ish', type: 'suffix', affix: '-ish', emoji: '🌗',
        meaning: 'ПРИМЕРНО / СЛЕГКА',
        assoc: 'reddish = красноватый',
        explanation: '-ish означает "немного".',
        words: [
            { word: 'reddish', transcription: '[ˈredɪʃ]', trans: 'красноватый', ex: 'A <b>red</b>dish sky.', exRu: 'Красноватое небо.' },
            { word: 'British', transcription: '[ˈbrɪtɪʃ]', trans: 'британский', ex: 'A <b>Brit</b>ish accent.', exRu: 'Британский акцент.' },
            { word: 'childish', transcription: '[ˈtʃaɪldɪʃ]', trans: 'ребяческий', ex: 'A <b>child</b>ish joke.', exRu: 'Ребяческая шутка.' }
        ]
    },
    {
        id: 'al', type: 'suffix', affix: '-al / -ial', emoji: '🔷',
        meaning: 'ОТНОСЯЩИЙСЯ К',
        assoc: 'natural = относящийся к природе',
        explanation: '-al образует прилагательное.',
        words: [
            { word: 'natural', transcription: '[ˈnætʃrəl]', trans: 'естественный', ex: '<b>Natur</b>al beauty.', exRu: 'Естественная красота.' },
            { word: 'personal', transcription: '[ˈpɜːsənl]', trans: 'личный', ex: 'A <b>person</b>al question.', exRu: 'Личный вопрос.' },
            { word: 'cultural', transcription: '[ˈkʌltʃərəl]', trans: 'культурный', ex: 'A <b>cultur</b>al event.', exRu: 'Культурное событие.' },
            { word: 'traditional', transcription: '[trəˈdɪʃənl]', trans: 'традиционный', ex: '<b>Tradition</b>al food.', exRu: 'Традиционная еда.' }
        ]
    },
    {
        id: 'ize', type: 'suffix', affix: '-ize / -ise', emoji: '⚙️',
        meaning: 'ДЕЛАТЬ / ПРЕВРАЩАТЬ',
        assoc: 'modernize = модернизировать',
        explanation: '-ize превращает в глагол.',
        words: [
            { word: 'modernize', transcription: '[ˈmɒdənaɪz]', trans: 'модернизировать', ex: '<b>Modern</b>ize the factory.', exRu: 'Модернизируй завод.' },
            { word: 'organize', transcription: '[ˈɔːɡənaɪz]', trans: 'организовать', ex: '<b>Organ</b>ize a party.', exRu: 'Организуй вечеринку.' },
            { word: 'realize', transcription: '[ˈriːəlaɪz]', trans: 'осознать', ex: 'I <b>real</b>ize my mistake.', exRu: 'Я осознаю ошибку.' }
        ]
    },
    {
        id: 'ify', type: 'suffix', affix: '-ify / -fy', emoji: '🔧',
        meaning: 'ДЕЛАТЬ ТАКИМ',
        assoc: 'simplify = упрощать',
        explanation: '-ify означает "делать таким".',
        words: [
            { word: 'simplify', transcription: '[ˈsɪmplɪfaɪ]', trans: 'упрощать', ex: '<b>Simpli</b>fy the task.', exRu: 'Упрости задачу.' },
            { word: 'clarify', transcription: '[ˈklærəfaɪ]', trans: 'уточнять', ex: 'Could you <b>clari</b>fy?', exRu: 'Можешь уточнить?' },
            { word: 'beautify', transcription: '[ˈbjuːtɪfaɪ]', trans: 'украшать', ex: '<b>Beauti</b>fy the city.', exRu: 'Укрась город.' }
        ]
    },
    {
        id: 'age', type: 'suffix', affix: '-age', emoji: '📦',
        meaning: 'СОБИРАТЕЛЬНОЕ / ДЕЙСТВИЕ',
        assoc: 'package = посылка',
        explanation: '-age образует существительное.',
        words: [
            { word: 'package', transcription: '[ˈpækɪdʒ]', trans: 'посылка', ex: 'A <b>pack</b>age.', exRu: 'Посылка.' },
            { word: 'message', transcription: '[ˈmesɪdʒ]', trans: 'сообщение', ex: 'Send a <b>mess</b>age.', exRu: 'Отправь сообщение.' },
            { word: 'language', transcription: '[ˈlæŋɡwɪdʒ]', trans: 'язык', ex: 'A foreign <b>langu</b>age.', exRu: 'Иностранный язык.' }
        ]
    }
];

// ═══════════════════════════════════════════════
// КОРНИ-КОНСТРУКТОРЫ
// ═══════════════════════════════════════════════
const wordRoots = [
    { root: 'port', topic: 'motion', emoji: '📦', meaning: 'нести, перемещать',
      note: 'Латинский portare.',
      words: [
        { word: 'export', pre: 'ex-', preMean: 'наружу', trans: 'экспорт', ex: 'We export cars.', exRu: 'Мы экспортируем машины.' },
        { word: 'import', pre: 'im-', preMean: 'внутрь', trans: 'импорт', ex: 'Import goods.', exRu: 'Импортировать товары.' },
        { word: 'transport', pre: 'trans-', preMean: 'через', trans: 'транспорт', ex: 'Public transport.', exRu: 'Общественный транспорт.' }
      ]
    },
    { root: 'ject', topic: 'motion', emoji: '🎯', meaning: 'бросать',
      note: 'Латинский jacere.',
      words: [
        { word: 'reject', pre: 're-', preMean: 'назад', trans: 'отвергнуть', ex: 'Reject the offer.', exRu: 'Отклони предложение.' },
        { word: 'inject', pre: 'in-', preMean: 'внутрь', trans: 'впрыснуть', ex: 'Inject medicine.', exRu: 'Введи лекарство.' },
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
    { root: 'duct', topic: 'motion', emoji: '🚰', meaning: 'вести',
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
        { word: 'invent', pre: 'in-', preMean: 'в', trans: 'изобретать', ex: 'Invent something new.', exRu: 'Изобрети новое.' },
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
    { root: 'dict', topic: 'speech', emoji: '🗣️', meaning: 'говорить',
      note: 'Латинский dicere.',
      words: [
        { word: 'predict', pre: 'pre-', preMean: 'заранее', trans: 'предсказать', ex: 'Predict the future.', exRu: 'Предскажи будущее.' },
        { word: 'contradict', pre: 'contra-', preMean: 'против', trans: 'противоречить', ex: 'Don\'t contradict me.', exRu: 'Не противоречь.' },
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
    { root: 'graph', topic: 'speech', emoji: '✍️', meaning: 'писать',
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
        { word: 'subscribe', pre: 'sub-', preMean: 'под', trans: 'подписаться', ex: 'Subscribe to channel.', exRu: 'Подпишись на канал.' },
        { word: 'manuscript', pre: 'manu-', preMean: 'рука', trans: 'рукопись', ex: 'An old manuscript.', exRu: 'Старая рукопись.' }
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
    { root: 'bio', topic: 'life', emoji: '🌱', meaning: 'жизнь',
      note: 'Греческий bios.',
      words: [
        { word: 'biology', pre: '-logy', preMean: 'наука', trans: 'биология', ex: 'Study biology.', exRu: 'Изучай биологию.' },
        { word: 'biography', pre: '-graphy', preMean: 'писание', trans: 'биография', ex: 'Read his biography.', exRu: 'Прочти биографию.' },
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
    { root: 'press', topic: 'mind', emoji: '🔽', meaning: 'давить',
      note: 'Латинский premere.',
      words: [
        { word: 'express', pre: 'ex-', preMean: 'наружу', trans: 'выражать', ex: 'Express feelings.', exRu: 'Выражай чувства.' },
        { word: 'impress', pre: 'im-', preMean: 'в', trans: 'впечатлить', ex: 'You impress me.', exRu: 'Ты впечатляешь.' },
        { word: 'compress', pre: 'com-', preMean: 'вместе', trans: 'сжать', ex: 'Compress the files.', exRu: 'Сожми файлы.' }
      ]
    },
    { root: 'spect', topic: 'mind', emoji: '👁️', meaning: 'смотреть',
      note: 'Латинский spectare.',
      words: [
        { word: 'inspect', pre: 'in-', preMean: 'внутрь', trans: 'осматривать', ex: 'Inspect the engine.', exRu: 'Осмотри двигатель.' },
        { word: 'respect', pre: 're-', preMean: 'снова', trans: 'уважать', ex: 'Respect parents.', exRu: 'Уважай родителей.' },
        { word: 'prospect', pre: 'pro-', preMean: 'вперёд', trans: 'перспектива', ex: 'Good prospects.', exRu: 'Хорошие перспективы.' }
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
        { word: 'credit', pre: '-it', preMean: 'сущ.', trans: 'кредит', ex: 'Give me credit.', exRu: 'Дай кредит доверия.' },
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
    { root: 'struct', topic: 'tech', emoji: '🏗️', meaning: 'строить',
      note: 'Латинский struere.',
      words: [
        { word: 'construct', pre: 'con-', preMean: 'вместе', trans: 'построить', ex: 'Construct a house.', exRu: 'Построй дом.' },
        { word: 'instruct', pre: 'in-', preMean: 'внутрь', trans: 'инструктировать', ex: 'Instruct the team.', exRu: 'Проинструктируй.' },
        { word: 'destruct', pre: 'de-', preMean: 'разрушать', trans: 'разрушать', ex: 'Self-destruct mode.', exRu: 'Режим самоуничтожения.' }
      ]
    },
    { root: 'form', topic: 'tech', emoji: '🎨', meaning: 'форма',
      note: 'Латинский forma.',
      words: [
        { word: 'reform', pre: 're-', preMean: 'снова', trans: 'реформа', ex: 'Reform the system.', exRu: 'Реформируй систему.' },
        { word: 'inform', pre: 'in-', preMean: 'внутрь', trans: 'информировать', ex: 'Inform me later.', exRu: 'Сообщи позже.' },
        { word: 'transform', pre: 'trans-', preMean: 'через', trans: 'трансформировать', ex: 'Transform your life.', exRu: 'Измени жизнь.' }
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
        { word: 'permit', pre: 'per-', preMean: 'через', trans: 'разрешать', ex: 'Permit me to speak.', exRu: 'Разреши сказать.' },
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
    { root: 'fin', topic: 'tech', emoji: '🏁', meaning: 'конец',
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

// ═══════════════════════════════════════════════
// ТЕМЫ ДЛЯ ФИЛЬТРА
// ═══════════════════════════════════════════════
const rootTopics = [
    { id: 'all',    emoji: '📚', name: 'Все' },
    { id: 'motion', emoji: '🏃', name: 'Движение' },
    { id: 'speech', emoji: '🗣️', name: 'Речь' },
    { id: 'life',   emoji: '🌱', name: 'Жизнь' },
    { id: 'mind',   emoji: '🧠', name: 'Сознание' },
    { id: 'tech',   emoji: '⚙️', name: 'Техника' }
];

// ═══════════════════════════════════════════════
// ПОДСКАЗКИ ДЛЯ ПОИСКА ПО-РУССКИ
// ═══════════════════════════════════════════════
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

// ═══════════════════════════════════════════════
// ВОЛШЕБНЫЕ ГЛАГОЛЫ (заменяют десятки)
// ═══════════════════════════════════════════════
const magicVerbs = [
    {
        verb: 'get', emoji: '🎩',
        meaning: 'САМЫЙ УНИВЕРСАЛЬНЫЙ',
        assoc: 'Один get заменяет 50 глаголов!',
        note: 'get = получать, становиться, добираться, понимать.',
        senses: [
            { sense: 'ПОЛУЧАТЬ', ru: 'получать', ex: 'I <b>got</b> a letter.', exRu: 'Я получил письмо.' },
            { sense: 'СТАНОВИТЬСЯ', ru: 'становиться', ex: 'It <b>gets</b> dark at six.', exRu: 'Темнеет в шесть.' },
            { sense: 'ПОНИМАТЬ', ru: 'понимать', ex: 'I don\'t <b>get</b> it.', exRu: 'Я не понимаю.' },
            { sense: 'ДОБИРАТЬСЯ', ru: 'добираться', ex: 'How do I <b>get</b> there?', exRu: 'Как туда добраться?' }
        ],
        phrases: [
            { p: 'get up', ru: 'вставать', ex: 'I <b>get up</b> at 7.', exRu: 'Я встаю в 7.' },
            { p: 'get on', ru: 'садиться в транспорт', ex: '<b>Get on</b> the bus.', exRu: 'Садись в автобус.' },
            { p: 'get off', ru: 'выходить', ex: '<b>Get off</b> here.', exRu: 'Выйди здесь.' },
            { p: 'get over', ru: 'преодолеть', ex: '<b>Get over</b> it!', exRu: 'Переживи это!' },
            { p: 'get along', ru: 'ладить', ex: 'We <b>get along</b>.', exRu: 'Мы ладим.' },
            { p: 'get together', ru: 'собираться', ex: 'Let\'s <b>get together</b>.', exRu: 'Давай соберёмся.' }
        ]
    },
    {
        verb: 'have', emoji: '🎒',
        meaning: 'ИМЕТЬ / ПРИНИМАТЬ',
        assoc: 'have + существительное = действие',
        note: 'have = иметь, есть, принимать.',
        senses: [
            { sense: 'ИМЕТЬ', ru: 'иметь', ex: 'I <b>have</b> a car.', exRu: 'У меня есть машина.' },
            { sense: 'ЕСТЬ', ru: 'есть', ex: 'I <b>have</b> breakfast at 8.', exRu: 'Я завтракаю в 8.' },
            { sense: 'ПРИНИМАТЬ', ru: 'принимать', ex: 'I <b>have</b> a shower.', exRu: 'Я принимаю душ.' }
        ],
        phrases: [
            { p: 'have to', ru: 'должен', ex: 'I <b>have to</b> go.', exRu: 'Я должен идти.' },
            { p: 'have fun', ru: 'веселиться', ex: '<b>Have fun</b>!', exRu: 'Веселись!' },
            { p: 'have a look', ru: 'взглянуть', ex: '<b>Have a look</b>.', exRu: 'Взгляни.' },
            { p: 'have a rest', ru: 'отдохнуть', ex: 'Let\'s <b>have a rest</b>.', exRu: 'Давай отдохнём.' }
        ]
    },
    {
        verb: 'take', emoji: '✋',
        meaning: 'БРАТЬ / ЗАНИМАТЬ',
        assoc: 'take = взять / занять время / принять',
        note: 'take = брать, занимать (время), принимать.',
        senses: [
            { sense: 'БРАТЬ', ru: 'брать', ex: '<b>Take</b> this book.', exRu: 'Возьми книгу.' },
            { sense: 'ЗАНИМАТЬ ВРЕМЯ', ru: 'занимать', ex: 'It <b>takes</b> an hour.', exRu: 'Занимает час.' },
            { sense: 'ПРИНИМАТЬ', ru: 'принимать', ex: '<b>Take</b> medicine.', exRu: 'Прими лекарство.' }
        ],
        phrases: [
            { p: 'take off', ru: 'снять / взлететь', ex: '<b>Take off</b> shoes.', exRu: 'Сними обувь.' },
            { p: 'take on', ru: 'взять на себя', ex: 'I\'ll <b>take on</b> the task.', exRu: 'Возьму задачу на себя.' },
            { p: 'take care of', ru: 'заботиться', ex: '<b>Take care of</b> yourself.', exRu: 'Заботься о себе.' },
            { p: 'take a photo', ru: 'фотографировать', ex: '<b>Take a photo</b>.', exRu: 'Сфотографируй.' },
            { p: 'take part', ru: 'участвовать', ex: 'I <b>take part</b> in it.', exRu: 'Я участвую в этом.' },
            { p: 'take place', ru: 'происходить', ex: 'The concert <b>takes place</b> today.', exRu: 'Концерт проходит сегодня.' }
        ]
    },
    {
        verb: 'make', emoji: '🔨',
        meaning: 'ДЕЛАТЬ / СОЗДАВАТЬ',
        assoc: 'make = создавать что-то новое',
        note: 'make = создавать, заставлять, зарабатывать.',
        senses: [
            { sense: 'СОЗДАВАТЬ', ru: 'делать', ex: 'I <b>make</b> coffee.', exRu: 'Я делаю кофе.' },
            { sense: 'ЗАСТАВЛЯТЬ', ru: 'заставлять', ex: 'You <b>make</b> me laugh.', exRu: 'Заставляешь смеяться.' }
        ],
        phrases: [
            { p: 'make up', ru: 'придумать / помириться', ex: 'She <b>made up</b> a story.', exRu: 'Она придумала историю.' },
            { p: 'make sure', ru: 'убедиться', ex: '<b>Make sure</b> you come.', exRu: 'Убедись, что придёшь.' },
            { p: 'make friends', ru: 'подружиться', ex: 'I <b>made friends</b>.', exRu: 'Я подружился.' },
            { p: 'make a decision', ru: 'принять решение', ex: '<b>Make a decision</b>.', exRu: 'Прими решение.' }
        ]
    },
    {
        verb: 'do', emoji: '✅',
        meaning: 'ДЕЛАТЬ (работу)',
        assoc: 'do = выполнять действие',
        note: 'do = делать работу, домашку, упражнение.',
        senses: [
            { sense: 'ДЕЛАТЬ', ru: 'делать', ex: 'I <b>do</b> my homework.', exRu: 'Я делаю домашку.' },
            { sense: 'РАБОТАТЬ', ru: 'работать', ex: 'What do you <b>do</b>?', exRu: 'Чем занимаешься?' }
        ],
        phrases: [
            { p: 'do the dishes', ru: 'мыть посуду', ex: 'I <b>do the dishes</b>.', exRu: 'Я мою посуду.' },
            { p: 'do the shopping', ru: 'ходить за покупками', ex: 'We <b>do the shopping</b>.', exRu: 'Мы ходим за покупками.' },
            { p: 'do sports', ru: 'заниматься спортом', ex: 'I <b>do sports</b>.', exRu: 'Я занимаюсь спортом.' }
        ]
    },
    {
        verb: 'go', emoji: '🚶',
        meaning: 'ИДТИ / ЕХАТЬ / СТАНОВИТЬСЯ',
        assoc: 'go заменяет 30+ глаголов',
        note: 'go = идти, становиться (go bad), работать.',
        senses: [
            { sense: 'ИДТИ', ru: 'идти', ex: 'I <b>go</b> to work.', exRu: 'Я иду на работу.' },
            { sense: 'СТАНОВИТЬСЯ', ru: 'становиться', ex: 'The milk <b>went</b> bad.', exRu: 'Молоко испортилось.' },
            { sense: 'ЕХАТЬ', ru: 'ехать', ex: 'We <b>go</b> to Paris.', exRu: 'Мы едем в Париж.' }
        ],
        phrases: [
            { p: 'go on', ru: 'продолжать', ex: '<b>Go on</b>, I listen.', exRu: 'Продолжай, слушаю.' },
            { p: 'go out', ru: 'гулять', ex: 'Let\'s <b>go out</b>.', exRu: 'Давай погуляем.' },
            { p: 'go back', ru: 'возвращаться', ex: 'I must <b>go back</b>.', exRu: 'Должен вернуться.' },
            { p: 'go up', ru: 'подниматься', ex: 'Prices <b>go up</b>.', exRu: 'Цены растут.' },
            { p: 'go down', ru: 'опускаться', ex: 'Sun <b>goes down</b> at 6.', exRu: 'Солнце садится в 6.' },
            { p: 'go through', ru: 'проходить через', ex: 'We <b>went through</b> the park.', exRu: 'Прошли через парк.' },
            { p: 'go ahead', ru: 'иди вперёд', ex: '<b>Go ahead</b>.', exRu: 'Давай.' },
            { p: 'go away', ru: 'уходить', ex: '<b>Go away</b>!', exRu: 'Уйди!' }
        ]
    },
    {
        verb: 'come', emoji: '🏠',
        meaning: 'ПРИХОДИТЬ / ПРИБЫВАТЬ',
        assoc: 'Антоним go',
        note: 'come = приходить, приближаться.',
        senses: [
            { sense: 'ПРИХОДИТЬ', ru: 'приходить', ex: '<b>Come</b> here.', exRu: 'Иди сюда.' },
            { sense: 'ПРИБЫВАТЬ', ru: 'прибывать', ex: 'Train <b>comes</b> at 6.', exRu: 'Поезд прибывает в 6.' }
        ],
        phrases: [
            { p: 'come in', ru: 'входить', ex: '<b>Come in</b>.', exRu: 'Заходи.' },
            { p: 'come back', ru: 'возвращаться', ex: '<b>Come back</b> soon!', exRu: 'Возвращайся скорее!' },
            { p: 'come on', ru: 'давай', ex: '<b>Come on</b>, hurry!', exRu: 'Давай, поторопись!' },
            { p: 'come from', ru: 'быть родом из', ex: 'I <b>come from</b> Russia.', exRu: 'Я родом из России.' },
            { p: 'come up', ru: 'возникать', ex: 'A problem <b>came up</b>.', exRu: 'Возникла проблема.' },
            { p: 'come true', ru: 'сбываться', ex: 'Dreams <b>come true</b>.', exRu: 'Мечты сбываются.' }
        ]
    },
    {
        verb: 'look', emoji: '👀',
        meaning: 'СМОТРЕТЬ / ВЫГЛЯДЕТЬ',
        assoc: 'look + предлог = 15 значений',
        note: 'look = смотреть, выглядеть, искать.',
        senses: [
            { sense: 'СМОТРЕТЬ', ru: 'смотреть', ex: '<b>Look</b> at this.', exRu: 'Посмотри на это.' },
            { sense: 'ВЫГЛЯДЕТЬ', ru: 'выглядеть', ex: 'You <b>look</b> tired.', exRu: 'Ты выглядишь уставшим.' },
            { sense: 'ИСКАТЬ', ru: 'искать', ex: 'I\'m <b>looking</b> for keys.', exRu: 'Я ищу ключи.' }
        ],
        phrases: [
            { p: 'look at', ru: 'смотреть на', ex: '<b>Look at</b> the sky!', exRu: 'Посмотри на небо!' },
            { p: 'look for', ru: 'искать', ex: 'I\'m <b>looking for</b> my phone.', exRu: 'Я ищу телефон.' },
            { p: 'look after', ru: 'заботиться', ex: 'She <b>looks after</b> sister.', exRu: 'Она заботится о сестре.' },
            { p: 'look forward to', ru: 'с нетерпением ждать', ex: 'I <b>look forward to</b> reply.', exRu: 'Жду ответа.' },
            { p: 'look up', ru: 'искать в словаре', ex: '<b>Look up</b> this word.', exRu: 'Найди это слово.' },
            { p: 'look out', ru: 'осторожно', ex: '<b>Look out</b>, a car!', exRu: 'Осторожно, машина!' },
            { p: 'look like', ru: 'быть похожим', ex: 'You <b>look like</b> mum.', exRu: 'Ты похож на маму.' }
        ]
    },
    {
        verb: 'put', emoji: '📥',
        meaning: 'КЛАСТЬ / СТАВИТЬ',
        assoc: 'put + предлог = новое значение',
        note: 'put = класть, ставить, надевать.',
        senses: [
            { sense: 'КЛАСТЬ', ru: 'класть', ex: '<b>Put</b> it on the table.', exRu: 'Положи на стол.' },
            { sense: 'НАДЕВАТЬ', ru: 'надевать', ex: '<b>Put</b> on your coat.', exRu: 'Надень пальто.' }
        ],
        phrases: [
            { p: 'put on', ru: 'надеть', ex: '<b>Put on</b> shoes.', exRu: 'Надень обувь.' },
            { p: 'put off', ru: 'отложить', ex: '<b>Put off</b> the meeting.', exRu: 'Отложи встречу.' },
            { p: 'put away', ru: 'убрать', ex: '<b>Put away</b> toys.', exRu: 'Убери игрушки.' },
            { p: 'put up with', ru: 'мириться с', ex: 'I can\'t <b>put up with</b> it.', exRu: 'Не могу мириться.' },
            { p: 'put down', ru: 'положить', ex: '<b>Put down</b> your bag.', exRu: 'Положи сумку.' }
        ]
    },
    {
        verb: 'turn', emoji: '🔄',
        meaning: 'ПОВОРАЧИВАТЬ / СТАНОВИТЬСЯ',
        assoc: 'turn + предлог = много значений',
        note: 'turn = поворачивать, выключать/включать.',
        senses: [
            { sense: 'ПОВОРАЧИВАТЬ', ru: 'поворачивать', ex: '<b>Turn</b> left.', exRu: 'Поверни налево.' },
            { sense: 'СТАНОВИТЬСЯ', ru: 'становиться', ex: 'Weather <b>turned</b> cold.', exRu: 'Погода стала холодной.' }
        ],
        phrases: [
            { p: 'turn on', ru: 'включить', ex: '<b>Turn on</b> the TV.', exRu: 'Включи телевизор.' },
            { p: 'turn off', ru: 'выключить', ex: '<b>Turn off</b> the light.', exRu: 'Выключи свет.' },
            { p: 'turn up', ru: 'громче / появиться', ex: '<b>Turn up</b> the volume.', exRu: 'Сделай громче.' },
            { p: 'turn down', ru: 'тише / отказать', ex: '<b>Turn down</b> the music.', exRu: 'Сделай тише.' },
            { p: 'turn around', ru: 'обернуться', ex: '<b>Turn around</b>.', exRu: 'Обернись.' },
            { p: 'turn into', ru: 'превратиться', ex: 'Caterpillars <b>turn into</b> butterflies.', exRu: 'Гусеницы превращаются в бабочек.' }
        ]
    },
    {
        verb: 'run', emoji: '🏃',
        meaning: 'БЕЖАТЬ / УПРАВЛЯТЬ',
        assoc: 'run = бежать, работать, управлять',
        note: 'run = бегать, управлять (run a business).',
        senses: [
            { sense: 'БЕЖАТЬ', ru: 'бежать', ex: 'I <b>run</b> every morning.', exRu: 'Я бегаю каждое утро.' },
            { sense: 'УПРАВЛЯТЬ', ru: 'управлять', ex: 'She <b>runs</b> a company.', exRu: 'Она управляет компанией.' }
        ],
        phrases: [
            { p: 'run out of', ru: 'закончиться', ex: 'We <b>ran out of</b> milk.', exRu: 'У нас закончилось молоко.' },
            { p: 'run into', ru: 'случайно встретить', ex: 'I <b>ran into</b> Anna.', exRu: 'Случайно встретил Анну.' },
            { p: 'run away', ru: 'убегать', ex: 'The dog <b>ran away</b>.', exRu: 'Собака убежала.' },
            { p: 'run over', ru: 'переехать', ex: 'The car almost <b>ran over</b> the cat.', exRu: 'Машина чуть не переехала кошку.' }
        ]
    },
    {
        verb: 'work', emoji: '💼',
        meaning: 'РАБОТАТЬ',
        assoc: 'work = работать, функционировать',
        note: 'work = работать, функционировать.',
        senses: [
            { sense: 'РАБОТАТЬ', ru: 'работать', ex: 'I <b>work</b> from home.', exRu: 'Я работаю из дома.' },
            { sense: 'ФУНКЦИОНИРОВАТЬ', ru: 'работать', ex: 'The app doesn\'t <b>work</b>.', exRu: 'Приложение не работает.' }
        ],
        phrases: [
            { p: 'work out', ru: 'тренироваться', ex: 'I <b>work out</b> at the gym.', exRu: 'Я тренируюсь в зале.' },
            { p: 'work on', ru: 'работать над', ex: 'I\'m <b>working on</b> a project.', exRu: 'Я работаю над проектом.' },
            { p: 'work with', ru: 'работать с', ex: 'I <b>work with</b> children.', exRu: 'Я работаю с детьми.' }
        ]
    },
    {
        verb: 'play', emoji: '🎮',
        meaning: 'ИГРАТЬ',
        assoc: 'play = играть, играть на инструменте',
        note: 'play = играть, играть на инструменте, включить.',
        senses: [
            { sense: 'ИГРАТЬ', ru: 'играть', ex: 'Kids <b>play</b> outside.', exRu: 'Дети играют на улице.' },
            { sense: 'ИГРАТЬ НА', ru: 'играть на', ex: 'She <b>plays</b> the piano.', exRu: 'Она играет на пианино.' }
        ],
        phrases: [
            { p: 'play with', ru: 'играть с', ex: '<b>Play with</b> me!', exRu: 'Поиграй со мной!' },
            { p: 'play a role', ru: 'играть роль', ex: 'He <b>played a role</b>.', exRu: 'Он сыграл роль.' }
        ]
    },
    {
        verb: 'keep', emoji: '🔒',
        meaning: 'ДЕРЖАТЬ / ПРОДОЛЖАТЬ',
        assoc: 'keep = держать, продолжать',
        note: 'keep = держать, хранить, продолжать (keep doing).',
        senses: [
            { sense: 'ДЕРЖАТЬ', ru: 'держать', ex: '<b>Keep</b> the change.', exRu: 'Сдачу оставь себе.' },
            { sense: 'ПРОДОЛЖАТЬ', ru: 'продолжать', ex: '<b>Keep</b> going!', exRu: 'Продолжай идти!' }
        ],
        phrases: [
            { p: 'keep on', ru: 'продолжать', ex: '<b>Keep on</b> trying.', exRu: 'Продолжай пытаться.' },
            { p: 'keep up', ru: 'успевать', ex: 'I can\'t <b>keep up</b>.', exRu: 'Я не успеваю.' },
            { p: 'keep away', ru: 'держаться подальше', ex: '<b>Keep away</b> from fire.', exRu: 'Держись подальше от огня.' },
            { p: 'keep in touch', ru: 'поддерживать связь', ex: 'Let\'s <b>keep in touch</b>.', exRu: 'Давай поддерживать связь.' }
        ]
    },
    {
        verb: 'give', emoji: '🎁',
        meaning: 'ДАВАТЬ',
        assoc: 'give + предлог = новое значение',
        note: 'give = давать, предоставлять.',
        senses: [
            { sense: 'ДАВАТЬ', ru: 'давать', ex: '<b>Give</b> me a pen.', exRu: 'Дай мне ручку.' },
            { sense: 'ПРЕДОСТАВЛЯТЬ', ru: 'предоставлять', ex: '<b>Give</b> me a chance.', exRu: 'Дай мне шанс.' }
        ],
        phrases: [
            { p: 'give up', ru: 'сдаться', ex: 'Never <b>give up</b>!', exRu: 'Никогда не сдавайся!' },
            { p: 'give back', ru: 'вернуть', ex: '<b>Give back</b> my book.', exRu: 'Верни книгу.' },
            { p: 'give away', ru: 'раздать', ex: 'He <b>gave away</b> his things.', exRu: 'Он раздал вещи.' },
            { p: 'give in', ru: 'уступить', ex: 'Don\'t <b>give in</b>.', exRu: 'Не уступай.' }
        ]
    }
];

// ═══════════════════════════════════════════════
// СЛОВА-ЗАГЛУШКИ (спасают в любой ситуации)
// ═══════════════════════════════════════════════
const magicWords = [
    { word: 'thing', emoji: '📦', ru: 'вещь / штука',
      note: 'Заменяет любое существительное, которое забыл.',
      examples: [
        { ex: 'Give me that <b>thing</b>.', exRu: 'Дай мне эту штуку.' },
        { ex: 'The <b>thing</b> is...', exRu: 'Дело в том, что...' },
        { ex: 'A <b>thing</b> of beauty.', exRu: 'Нечто прекрасное.' }
      ]
    },
    { word: 'stuff', emoji: '🎒', ru: 'вещи / барахло',
      note: 'Неформальное «вещи» для любого набора предметов.',
      examples: [
        { ex: 'Where is my <b>stuff</b>?', exRu: 'Где мои вещи?' },
        { ex: 'I have a lot of <b>stuff</b>.', exRu: 'У меня много вещей.' },
        { ex: 'Put your <b>stuff</b> here.', exRu: 'Положи свои вещи здесь.' }
      ]
    },
    { word: 'way', emoji: '🛣️', ru: 'способ / путь',
      note: 'Заменяет «метод», «стиль», «направление».',
      examples: [
        { ex: 'Do it this <b>way</b>.', exRu: 'Сделай это так.' },
        { ex: 'Which <b>way</b> to go?', exRu: 'В какую сторону идти?' },
        { ex: 'By the <b>way</b>, ...', exRu: 'Кстати, ...' }
      ]
    },
    { word: 'place', emoji: '📍', ru: 'место',
      note: 'Любое место, заведение, точка.',
      examples: [
        { ex: 'This is a nice <b>place</b>.', exRu: 'Это хорошее место.' },
        { ex: 'Let\'s go to another <b>place</b>.', exRu: 'Пойдём в другое место.' },
        { ex: 'Put it in its <b>place</b>.', exRu: 'Положи на место.' }
      ]
    },
    { word: 'guy', emoji: '👤', ru: 'парень / чувак',
      note: 'Разговорное «человек». Мн. ч. guys = ребята.',
      examples: [
        { ex: 'That <b>guy</b> is funny.', exRu: 'Тот парень смешной.' },
        { ex: 'Hey <b>guys</b>!', exRu: 'Привет, ребята!' },
        { ex: 'He is a good <b>guy</b>.', exRu: 'Он хороший парень.' }
      ]
    },
    { word: 'bit', emoji: '🤏', ru: 'немного',
      note: 'Означает «немного» или «кусочек».',
      examples: [
        { ex: 'A <b>bit</b> of sugar.', exRu: 'Немного сахара.' },
        { ex: 'I am a <b>bit</b> tired.', exRu: 'Я немного устал.' },
        { ex: 'Wait a <b>bit</b>.', exRu: 'Подожди немного.' }
      ]
    },
    { word: 'lot', emoji: '📈', ru: 'много',
      note: 'A lot = много. Заменяет many/much.',
      examples: [
        { ex: 'A <b>lot</b> of people.', exRu: 'Много людей.' },
        { ex: 'Thanks a <b>lot</b>.', exRu: 'Большое спасибо.' },
        { ex: 'I have a <b>lot</b> to do.', exRu: 'У меня много дел.' }
      ]
    },
    { word: 'kind', emoji: '🎭', ru: 'вид / тип',
      note: 'Kind of = вид, тип. Also kind = добрый.',
      examples: [
        { ex: 'What <b>kind</b> of music?', exRu: 'Какой вид музыки?' },
        { ex: 'It\'s a new <b>kind</b>.', exRu: 'Это новый вид.' },
        { ex: 'She is very <b>kind</b>.', exRu: 'Она очень добрая.' }
      ]
    },
    { word: 'sort', emoji: '🔀', ru: 'род / вид',
      note: 'Sort of = разновидность. Also sort = сортировать.',
      examples: [
        { ex: 'What <b>sort</b> of car?', exRu: 'Какой род машины?' },
        { ex: 'It\'s <b>sort</b> of difficult.', exRu: 'Это вроде сложно.' }
      ]
    },
    { word: 'matter', emoji: '❓', ru: 'дело / важно',
      note: 'What is the matter? = Что случилось?',
      examples: [
        { ex: 'What is the <b>matter</b>?', exRu: 'Что случилось?' },
        { ex: 'It does not <b>matter</b>.', exRu: 'Это не важно.' }
      ]
    },
    { word: 'idea', emoji: '💡', ru: 'идея',
      note: 'I have no idea = Понятия не имею.',
      examples: [
        { ex: 'Good <b>idea</b>!', exRu: 'Хорошая идея!' },
        { ex: 'I have no <b>idea</b>.', exRu: 'Понятия не имею.' }
      ]
    },
    { word: 'time', emoji: '⏰', ru: 'время / раз',
      note: 'Time = время или раз (three times).',
      examples: [
        { ex: 'I have no <b>time</b>.', exRu: 'У меня нет времени.' },
        { ex: 'This <b>time</b> I will win.', exRu: 'На этот раз я выиграю.' },
        { ex: 'Three <b>times</b> a day.', exRu: 'Три раза в день.' }
      ]
    }
];

// ═══════════════════════════════════════════════
// ФРАЗЫ-СПАСАЛКИ
// ═══════════════════════════════════════════════
const survivalPhrases = [
    { en: 'How do you say ... in English?', ru: 'Как сказать ... по-английски?' },
    { en: 'What does it mean?', ru: 'Что это значит?' },
    { en: 'I don\'t understand.', ru: 'Я не понимаю.' },
    { en: 'Can you repeat, please?', ru: 'Можешь повторить?' },
    { en: 'Speak slowly, please.', ru: 'Говори медленнее, пожалуйста.' },
    { en: 'How do I spell it?', ru: 'Как это пишется?' },
    { en: 'I\'m not sure how to say it.', ru: 'Я не уверен, как это сказать.' },
    { en: 'It\'s like ... you know?', ru: 'Это типа ... ну, понимаешь?' },
    { en: 'Sorry, my English is not very good.', ru: 'Извини, мой английский не очень.' }
];

// ═══════════════════════════════════════════════
// СЛОВА НАПРАВЛЕНИЯ (forward / back / up / down)
// ═══════════════════════════════════════════════
const directionWords = [
    {
        word: 'forward', emoji: '➡️', trans: 'вперёд',
        note: 'Направление движения вперёд.',
        senses: [
            { sense: 'ДВИЖЕНИЕ', ru: 'вперёд', ex: 'Move <b>forward</b>.', exRu: 'Продвинься вперёд.' },
            { sense: 'ПРОГРЕСС', ru: 'прогресс', ex: 'A step <b>forward</b>.', exRu: 'Шаг вперёд.' },
            { sense: 'ПЕРЕСЛАТЬ', ru: 'переслать', ex: '<b>Forward</b> this email.', exRu: 'Перешли письмо.' }
        ]
    },
    {
        word: 'backward', emoji: '⬅️', trans: 'назад',
        note: 'Направление движения назад.',
        senses: [
            { sense: 'НАЗАД', ru: 'назад', ex: 'Step <b>backward</b>.', exRu: 'Шагни назад.' },
            { sense: 'ОТСТАЛЫЙ', ru: 'отсталый', ex: 'A <b>backward</b> country.', exRu: 'Отсталая страна.' }
        ]
    },
    {
        word: 'up', emoji: '⬆️', trans: 'вверх',
        note: 'Вверх или полностью (eat up = съесть всё).',
        senses: [
            { sense: 'ВВЕРХ', ru: 'вверх', ex: 'Look <b>up</b>.', exRu: 'Посмотри вверх.' },
            { sense: 'ПОЛНОСТЬЮ', ru: 'полностью', ex: 'Eat <b>up</b> your soup.', exRu: 'Съешь весь суп.' },
            { sense: 'ПРОСНУТЬСЯ', ru: 'проснуться', ex: 'Wake <b>up</b>!', exRu: 'Проснись!' }
        ]
    },
    {
        word: 'down', emoji: '⬇️', trans: 'вниз',
        note: 'Вниз или уменьшение.',
        senses: [
            { sense: 'ВНИЗ', ru: 'вниз', ex: 'Sit <b>down</b>.', exRu: 'Сядь.' },
            { sense: 'УМЕНЬШЕНИЕ', ru: 'уменьшение', ex: 'Turn the music <b>down</b>.', exRu: 'Сделай музыку тише.' },
            { sense: 'СЛОМАТЬ', ru: 'сломаться', ex: 'My car broke <b>down</b>.', exRu: 'Машина сломалась.' }
        ]
    },
    {
        word: 'in', emoji: '🔽📦', trans: 'внутрь',
        note: 'Движение внутрь или нахождение внутри.',
        senses: [
            { sense: 'ВНУТРЬ', ru: 'внутрь', ex: 'Come <b>in</b>.', exRu: 'Заходи.' },
            { sense: 'ВНУТРИ', ru: 'внутри', ex: 'Keys are <b>in</b> my bag.', exRu: 'Ключи в сумке.' }
        ]
    },
    {
        word: 'out', emoji: '📤🚪', trans: 'наружу',
        note: 'Движение наружу или окончание.',
        senses: [
            { sense: 'НАРУЖУ', ru: 'наружу', ex: 'Get <b>out</b>!', exRu: 'Выйди!' },
            { sense: 'ВЫЯСНИТЬ', ru: 'выяснить', ex: 'Find <b>out</b> the truth.', exRu: 'Выясни правду.' },
            { sense: 'ВЫЙТИ', ru: 'выйти', ex: 'Let\'s go <b>out</b>.', exRu: 'Давай выйдем.' }
        ]
    },
    {
        word: 'off', emoji: '🔌', trans: 'прочь / выключить',
        note: 'Отделение, выключение.',
        senses: [
            { sense: 'ВЫКЛЮЧИТЬ', ru: 'выключить', ex: 'Turn <b>off</b> the light.', exRu: 'Выключи свет.' },
            { sense: 'СНЯТЬ', ru: 'снять', ex: 'Take <b>off</b> your hat.', exRu: 'Сними шляпу.' },
            { sense: 'ВЗЛЕТЕТЬ', ru: 'взлететь', ex: 'The plane took <b>off</b>.', exRu: 'Самолёт взлетел.' }
        ]
    },
    {
        word: 'on', emoji: '🔛', trans: 'включён / продолжать',
        note: 'Включение, продолжение.',
        senses: [
            { sense: 'ВКЛЮЧИТЬ', ru: 'включить', ex: 'Turn <b>on</b> the TV.', exRu: 'Включи ТВ.' },
            { sense: 'ПРОДОЛЖАТЬ', ru: 'продолжать', ex: 'Go <b>on</b>, I listen.', exRu: 'Продолжай, слушаю.' }
        ]
    },
    {
        word: 'over', emoji: '🔄', trans: 'через / снова',
        note: 'Через, поверх, повторно.',
        senses: [
            { sense: 'ЧЕРЕЗ', ru: 'через', ex: 'Jump <b>over</b> the fence.', exRu: 'Перепрыгни через забор.' },
            { sense: 'ПОВТОРНО', ru: 'снова', ex: 'Start <b>over</b>.', exRu: 'Начни заново.' },
            { sense: 'ЗАКОНЧИТЬСЯ', ru: 'закончиться', ex: 'The film is <b>over</b>.', exRu: 'Фильм закончился.' }
        ]
    },
    {
        word: 'away', emoji: '🏃‍♂️', trans: 'прочь / далеко',
        note: 'Прочь от чего-то.',
        senses: [
            { sense: 'ПРОЧЬ', ru: 'прочь', ex: 'Go <b>away</b>!', exRu: 'Уходи!' },
            { sense: 'ДАЛЕКО', ru: 'далеко', ex: '5 km <b>away</b>.', exRu: 'В 5 км отсюда.' }
        ]
    },
    {
        word: 'along', emoji: '🛣️', trans: 'вдоль / вместе',
        note: 'Вдоль чего-то.',
        senses: [
            { sense: 'ВДОЛЬ', ru: 'вдоль', ex: 'Walk <b>along</b> the street.', exRu: 'Иди вдоль улицы.' },
            { sense: 'ВМЕСТЕ', ru: 'вместе', ex: 'Come <b>along</b>!', exRu: 'Пойдём вместе!' }
        ]
    },
    {
        word: 'across', emoji: '🚶', trans: 'через',
        note: 'Через что-то.',
        senses: [
            { sense: 'ЧЕРЕЗ', ru: 'через', ex: 'Walk <b>across</b> the bridge.', exRu: 'Перейди через мост.' },
            { sense: 'НА ТОЙ СТОРОНЕ', ru: 'на той стороне', ex: 'The shop is <b>across</b>.', exRu: 'Магазин через дорогу.' }
        ]
    },
    {
        word: 'through', emoji: '🕳️', trans: 'сквозь',
        note: 'Сквозь что-то.',
        senses: [
            { sense: 'СКВОЗЬ', ru: 'сквозь', ex: 'Look <b>through</b> the window.', exRu: 'Посмотри в окно.' },
            { sense: 'ЧЕРЕЗ', ru: 'через', ex: 'We walked <b>through</b> the forest.', exRu: 'Мы прошли через лес.' }
        ]
    },
    {
        word: 'towards', emoji: '🎯', trans: 'по направлению к',
        note: 'В сторону чего-то.',
        senses: [
            { sense: 'К', ru: 'к', ex: 'Walk <b>towards</b> the door.', exRu: 'Иди к двери.' },
            { sense: 'ПО ОТНОШЕНИЮ', ru: 'по отношению', ex: 'Kind <b>towards</b> others.', exRu: 'Добр к другим.' }
        ]
    },
    {
        word: 'beyond', emoji: '🌌', trans: 'за / вне',
        note: 'За пределами.',
        senses: [
            { sense: 'ЗА', ru: 'за', ex: '<b>Beyond</b> the mountains.', exRu: 'За горами.' },
            { sense: 'ВНЕ', ru: 'вне', ex: '<b>Beyond</b> my control.', exRu: 'Вне моего контроля.' }
        ]
    },
    {
        word: 'apart', emoji: '↔️', trans: 'отдельно',
        note: 'На расстоянии друг от друга.',
        senses: [
            { sense: 'ВРОЗЬ', ru: 'врозь', ex: 'They live <b>apart</b>.', exRu: 'Они живут врозь.' },
            { sense: 'РАЗЛИЧИТЬ', ru: 'различить', ex: 'Can\'t tell them <b>apart</b>.', exRu: 'Не могу их различить.' }
        ]
    }
];
