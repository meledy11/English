// ═══════════════════════════════════════════════════════════
// prefixes-data.js — ВСЕ ДАННЫЕ
// Приставки, суффиксы, корни, модальные, ловушки, близнецы,
// вводные, время, эссе, связки, вопросы + обучающие модули
// + практика (истории, диктант, эссе)
// ═══════════════════════════════════════════════════════════

// ───────────────────────────────────────────────────────────
// ПРИСТАВКИ
// ───────────────────────────────────────────────────────────
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
            { word: 'review', transcription: '[rɪˈvjuː]', trans: 'пересмотреть', ex: '<b>Re</b>view your notes.', exRu: 'Пересмотри заметки.' },
            { word: 'repeat', transcription: '[rɪˈpiːt]', trans: 'повторять', ex: '<b>Re</b>peat after me.', exRu: 'Повтори за мной.' },
            { word: 'restart', transcription: '[ˌriːˈstɑːt]', trans: 'перезапустить', ex: '<b>Re</b>start the computer.', exRu: 'Перезапусти компьютер.' }
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
            { word: 'unusual', transcription: '[ʌnˈjuːʒuəl]', trans: 'необычный', ex: 'An <b>un</b>usual day.', exRu: 'Необычный день.' },
            { word: 'unkind', transcription: '[ˌʌnˈkaɪnd]', trans: 'недобрый', ex: 'Don\'t be <b>un</b>kind.', exRu: 'Не будь недобрым.' },
            { word: 'untrue', transcription: '[ˌʌnˈtruː]', trans: 'неправдивый', ex: 'That is <b>un</b>true.', exRu: 'Это неправда.' }
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
    {
        id: 'mono', type: 'prefix', affix: 'mono- / uni-', emoji: '1️⃣',
        meaning: 'ОДИН / ЕДИНЫЙ',
        assoc: 'monologue = речь одного',
        explanation: 'mono- / uni- означают "один".',
        words: [
            { word: 'monopoly', transcription: '[məˈnɒpəli]', trans: 'монополия', ex: 'A big <b>mono</b>poly.', exRu: 'Большая монополия.' },
            { word: 'monologue', transcription: '[ˈmɒnəlɒɡ]', trans: 'монолог', ex: 'A long <b>mono</b>logue.', exRu: 'Долгий монолог.' },
            { word: 'uniform', transcription: '[ˈjuːnɪfɔːm]', trans: 'форма', ex: 'School <b>uni</b>form.', exRu: 'Школьная форма.' }
        ]
    },
    {
        id: 'poly', type: 'prefix', affix: 'poly-', emoji: '🔺',
        meaning: 'МНОГО',
        assoc: 'polygon = много углов',
        explanation: 'poly- означает "много".',
        words: [
            { word: 'polygon', transcription: '[ˈpɒlɪɡən]', trans: 'многоугольник', ex: 'Draw a <b>poly</b>gon.', exRu: 'Нарисуй многоугольник.' },
            { word: 'polyglot', transcription: '[ˈpɒliɡlɒt]', trans: 'полиглот', ex: 'A true <b>poly</b>glot.', exRu: 'Настоящий полиглот.' }
        ]
    },
    {
        id: 'omni', type: 'prefix', affix: 'omni-', emoji: '🌌',
        meaning: 'ВСЁ',
        assoc: 'omnipotent = всесильный',
        explanation: 'omni- означает "всё".',
        words: [
            { word: 'omnipotent', transcription: '[ɒmˈnɪpətənt]', trans: 'всемогущий', ex: 'An <b>omni</b>potent ruler.', exRu: 'Всемогущий правитель.' },
            { word: 'omnipresent', transcription: '[ˌɒmnɪˈpreznt]', trans: 'вездесущий', ex: '<b>Omni</b>present love.', exRu: 'Вездесущая любовь.' }
        ]
    },
    {
        id: 'para', type: 'prefix', affix: 'para-', emoji: '🛡️',
        meaning: 'РЯДОМ / ЗАЩИТА',
        assoc: 'parallel = идущий рядом',
        explanation: 'para- означает "рядом" или "защита".',
        words: [
            { word: 'parallel', transcription: '[ˈpærəlel]', trans: 'параллельный', ex: '<b>Para</b>llel lines.', exRu: 'Параллельные линии.' },
            { word: 'paramedic', transcription: '[ˌpærəˈmedɪk]', trans: 'фельдшер', ex: 'Call a <b>para</b>medic.', exRu: 'Вызови фельдшера.' },
            { word: 'paradox', transcription: '[ˈpærədɒks]', trans: 'парадокс', ex: 'A strange <b>para</b>dox.', exRu: 'Странный парадокс.' }
        ]
    },
    {
        id: 'pan', type: 'prefix', affix: 'pan-', emoji: '🌏',
        meaning: 'ВСЁ / ВСЕОБЩИЙ',
        assoc: 'pandemic = всеобщая болезнь',
        explanation: 'pan- означает "всеобщий".',
        words: [
            { word: 'pandemic', transcription: '[pænˈdemɪk]', trans: 'пандемия', ex: 'A global <b>pan</b>demic.', exRu: 'Глобальная пандемия.' },
            { word: 'panorama', transcription: '[ˌpænəˈrɑːmə]', trans: 'панорама', ex: 'A beautiful <b>pano</b>rama.', exRu: 'Красивая панорама.' }
        ]
    },
    {
        id: 'arch', type: 'prefix', affix: 'arch-', emoji: '👑',
        meaning: 'ГЛАВНЫЙ / ВЕРХОВНЫЙ',
        assoc: 'archbishop = главный епископ',
        explanation: 'arch- означает "главный".',
        words: [
            { word: 'archbishop', transcription: '[ˌɑːtʃˈbɪʃəp]', trans: 'архиепископ', ex: 'The <b>arch</b>bishop.', exRu: 'Архиепископ.' },
            { word: 'arch-enemy', transcription: '[ˌɑːtʃ ˈenəmi]', trans: 'заклятый враг', ex: 'My <b>arch</b>-enemy.', exRu: 'Мой заклятый враг.' }
        ]
    },
    {
        id: 'neo', type: 'prefix', affix: 'neo-', emoji: '🌱',
        meaning: 'НОВЫЙ',
        assoc: 'neon = новый газ',
        explanation: 'neo- означает "новый".',
        words: [
            { word: 'neon', transcription: '[ˈniːɒn]', trans: 'неон', ex: 'Bright <b>neo</b>n lights.', exRu: 'Яркие неоновые огни.' },
            { word: 'neolithic', transcription: '[ˌniːəˈlɪθɪk]', trans: 'неолитический', ex: 'The <b>neo</b>lithic era.', exRu: 'Неолитическая эра.' }
        ]
    },
    {
        id: 'ortho', type: 'prefix', affix: 'ortho-', emoji: '📐',
        meaning: 'ПРАВИЛЬНЫЙ / ПРЯМОЙ',
        assoc: 'orthodox = правильное мнение',
        explanation: 'ortho- означает "правильный".',
        words: [
            { word: 'orthodox', transcription: '[ˈɔːθədɒks]', trans: 'ортодоксальный', ex: 'An <b>ortho</b>dox view.', exRu: 'Ортодоксальный взгляд.' },
            { word: 'orthography', transcription: '[ɔːˈθɒɡrəfi]', trans: 'орфография', ex: 'Correct <b>ortho</b>graphy.', exRu: 'Правильная орфография.' }
        ]
    },
    {
        id: 'mega', type: 'prefix', affix: 'mega- / ultra-', emoji: '💥',
        meaning: 'ОГРОМНЫЙ / ЗА ПРЕДЕЛОМ',
        assoc: 'megaphone = огромный звук',
        explanation: 'mega- = огромный. ultra- = сверх.',
        words: [
            { word: 'megaphone', transcription: '[ˈmeɡəfəʊn]', trans: 'мегафон', ex: 'Speak into a <b>mega</b>phone.', exRu: 'Говори в мегафон.' },
            { word: 'ultraviolet', transcription: '[ˌʌltrəˈvaɪələt]', trans: 'ультрафиолет', ex: '<b>Ultra</b>violet rays.', exRu: 'Ультрафиолетовые лучи.' },
            { word: 'ultrasound', transcription: '[ˈʌltrəsaʊnd]', trans: 'УЗИ', ex: 'Do an <b>ultra</b>sound.', exRu: 'Сделай УЗИ.' }
        ]
    },
    {
        id: 'tele', type: 'prefix', affix: 'tele-', emoji: '📡',
        meaning: 'ДАЛЕКО',
        assoc: 'television = видеть далеко',
        explanation: 'tele- означает "далеко".',
        words: [
            { word: 'television', transcription: '[ˈtelɪvɪʒn]', trans: 'телевидение', ex: 'Watch <b>tele</b>vision.', exRu: 'Смотри телевизор.' },
            { word: 'telephone', transcription: '[ˈtelɪfəʊn]', trans: 'телефон', ex: 'Answer the <b>tele</b>phone.', exRu: 'Ответь на телефон.' },
            { word: 'telescope', transcription: '[ˈtelɪskəʊp]', trans: 'телескоп', ex: 'Look through a <b>tele</b>scope.', exRu: 'Посмотри в телескоп.' }
        ]
    },
    {
        id: 'photo', type: 'prefix', affix: 'photo-', emoji: '💡',
        meaning: 'СВЕТ',
        assoc: 'photograph = запись света',
        explanation: 'photo- означает "свет".',
        words: [
            { word: 'photograph', transcription: '[ˈfəʊtəɡrɑːf]', trans: 'фотография', ex: 'Take a <b>photo</b>graph.', exRu: 'Сделай фото.' },
            { word: 'photosynthesis', transcription: '[ˌfəʊtəʊˈsɪnθəsɪs]', trans: 'фотосинтез', ex: 'Plants use <b>photo</b>synthesis.', exRu: 'Растения используют фотосинтез.' }
        ]
    },
    {
        id: 'chrono', type: 'prefix', affix: 'chrono-', emoji: '⏳',
        meaning: 'ВРЕМЯ',
        assoc: 'chronology = наука о времени',
        explanation: 'chrono- означает "время".',
        words: [
            { word: 'chronology', transcription: '[krəˈnɒlədʒi]', trans: 'хронология', ex: 'A clear <b>chrono</b>logy.', exRu: 'Чёткая хронология.' },
            { word: 'chronic', transcription: '[ˈkrɒnɪk]', trans: 'хронический', ex: 'A <b>chron</b>ic disease.', exRu: 'Хроническая болезнь.' }
        ]
    },
    {
        id: 'psych', type: 'prefix', affix: 'psych- / psycho-', emoji: '🧠',
        meaning: 'ДУША / РАЗУМ',
        assoc: 'psychology = наука о душе',
        explanation: 'psych- означает "душа".',
        words: [
            { word: 'psychology', transcription: '[saɪˈkɒlədʒi]', trans: 'психология', ex: 'Study <b>psycho</b>logy.', exRu: 'Изучай психологию.' },
            { word: 'psychiatrist', transcription: '[saɪˈkaɪətrɪst]', trans: 'психиатр', ex: 'Visit a <b>psych</b>iatrist.', exRu: 'Посети психиатра.' }
        ]
    },
    {
        id: 'geo', type: 'prefix', affix: 'geo-', emoji: '🌍',
        meaning: 'ЗЕМЛЯ',
        assoc: 'geography = описание земли',
        explanation: 'geo- означает "земля".',
        words: [
            { word: 'geography', transcription: '[dʒiˈɒɡrəfi]', trans: 'география', ex: 'Study <b>geo</b>graphy.', exRu: 'Изучай географию.' },
            { word: 'geology', transcription: '[dʒiˈɒlədʒi]', trans: 'геология', ex: 'A <b>geo</b>logy lesson.', exRu: 'Урок геологии.' }
        ]
    },
    {
        id: 'astro', type: 'prefix', affix: 'astro-', emoji: '⭐',
        meaning: 'ЗВЕЗДА',
        assoc: 'astronaut = звёздный путешественник',
        explanation: 'astro- означает "звезда".',
        words: [
            { word: 'astronaut', transcription: '[ˈæstrənɔːt]', trans: 'космонавт', ex: 'A brave <b>astro</b>naut.', exRu: 'Смелый космонавт.' },
            { word: 'astronomy', transcription: '[əˈstrɒnəmi]', trans: 'астрономия', ex: 'Study <b>astro</b>nomy.', exRu: 'Изучай астрономию.' }
        ]
    },

    // ═══════════════════════════════════════════
    // СУФФИКСЫ
    // ═══════════════════════════════════════════
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
    },
    {
        id: 'ance', type: 'suffix', affix: '-ance / -ence', emoji: '💫',
        meaning: 'СОСТОЯНИЕ / ДЕЙСТВИЕ',
        assoc: 'importance = важность',
        explanation: '-ance / -ence образуют существительное.',
        words: [
            { word: 'importance', transcription: '[ɪmˈpɔːtns]', trans: 'важность', ex: 'The <b>import</b>ance of it.', exRu: 'Важность этого.' },
            { word: 'difference', transcription: '[ˈdɪfrəns]', trans: 'разница', ex: 'A big <b>differ</b>ence.', exRu: 'Большая разница.' },
            { word: 'experience', transcription: '[ɪkˈspɪəriəns]', trans: 'опыт', ex: 'Work <b>experi</b>ence.', exRu: 'Опыт работы.' }
        ]
    },
    {
        id: 'ism', type: 'suffix', affix: '-ism', emoji: '🎨',
        meaning: 'УЧЕНИЕ / СИСТЕМА',
        assoc: 'socialism = социализм',
        explanation: '-ism образует название учения.',
        words: [
            { word: 'socialism', transcription: '[ˈsəʊʃəlɪzəm]', trans: 'социализм', ex: 'A form of <b>social</b>ism.', exRu: 'Форма социализма.' },
            { word: 'realism', transcription: '[ˈriːəlɪzəm]', trans: 'реализм', ex: 'A style of <b>real</b>ism.', exRu: 'Стиль реализма.' },
            { word: 'optimism', transcription: '[ˈɒptɪmɪzəm]', trans: 'оптимизм', ex: 'Full of <b>optim</b>ism.', exRu: 'Полон оптимизма.' }
        ]
    },
    {
        id: 'ist', type: 'suffix', affix: '-ist', emoji: '🧑‍🎨',
        meaning: 'ТОТ, КТО ЗАНИМАЕТСЯ',
        assoc: 'artist = художник',
        explanation: '-ist образует название профессии.',
        words: [
            { word: 'artist', transcription: '[ˈɑːtɪst]', trans: 'художник', ex: 'A famous <b>art</b>ist.', exRu: 'Известный художник.' },
            { word: 'scientist', transcription: '[ˈsaɪəntɪst]', trans: 'учёный', ex: 'A great <b>scient</b>ist.', exRu: 'Великий учёный.' },
            { word: 'pianist', transcription: '[ˈpiːənɪst]', trans: 'пианист', ex: 'A young <b>pian</b>ist.', exRu: 'Молодой пианист.' }
        ]
    },
    {
        id: 'ology', type: 'suffix', affix: '-ology / -logy', emoji: '📚',
        meaning: 'НАУКА О',
        assoc: 'biology = наука о жизни',
        explanation: '-ology означает "наука о".',
        words: [
            { word: 'biology', transcription: '[baɪˈɒlədʒi]', trans: 'биология', ex: 'Study <b>bio</b>logy.', exRu: 'Изучай биологию.' },
            { word: 'psychology', transcription: '[saɪˈkɒlədʒi]', trans: 'психология', ex: 'A <b>psycho</b>logy book.', exRu: 'Книга по психологии.' },
            { word: 'technology', transcription: '[tekˈnɒlədʒi]', trans: 'технология', ex: 'Modern <b>techno</b>logy.', exRu: 'Современная технология.' }
        ]
    },
    {
        id: 'graphy', type: 'suffix', affix: '-graphy', emoji: '✍️',
        meaning: 'ОПИСАНИЕ / ЗАПИСЬ',
        assoc: 'photography = светопись',
        explanation: '-graphy означает "описание".',
        words: [
            { word: 'photography', transcription: '[fəˈtɒɡrəfi]', trans: 'фотография', ex: 'Love <b>photo</b>graphy.', exRu: 'Люблю фотографию.' },
            { word: 'geography', transcription: '[dʒiˈɒɡrəfi]', trans: 'география', ex: 'A <b>geo</b>graphy test.', exRu: 'Тест по географии.' }
        ]
    },
    {
        id: 'some', type: 'suffix', affix: '-some', emoji: '✨',
        meaning: 'СКЛОННЫЙ / ВЫЗЫВАЮЩИЙ',
        assoc: 'handsome = красивый',
        explanation: '-some означает "склонный".',
        words: [
            { word: 'handsome', transcription: '[ˈhænsəm]', trans: 'красивый', ex: 'A <b>hand</b>some man.', exRu: 'Красивый мужчина.' },
            { word: 'troublesome', transcription: '[ˈtrʌblsəm]', trans: 'хлопотный', ex: 'A <b>trouble</b>some task.', exRu: 'Хлопотная задача.' }
        ]
    },
    {
        id: 'teen', type: 'suffix', affix: '-teen / -ty', emoji: '🔢',
        meaning: 'ЧИСЛА 13-19 / ДЕСЯТКИ',
        assoc: 'thirteen = тринадцать',
        explanation: '-teen и -ty образуют числа.',
        words: [
            { word: 'thirteen', transcription: '[ˌθɜːˈtiːn]', trans: 'тринадцать', ex: 'I am <b>thirteen</b>.', exRu: 'Мне тринадцать.' },
            { word: 'twenty', transcription: '[ˈtwenti]', trans: 'двадцать', ex: 'Twenty years old.', exRu: 'Двадцать лет.' }
        ]
    },
    {
        id: 'th', type: 'suffix', affix: '-th', emoji: '📅',
        meaning: 'ПОРЯДКОВЫЕ ЧИСЛА',
        assoc: 'fourth = четвёртый',
        explanation: '-th образует порядковые числа.',
        words: [
            { word: 'fourth', transcription: '[fɔːθ]', trans: 'четвёртый', ex: 'The <b>fourth</b> time.', exRu: 'Четвёртый раз.' },
            { word: 'fifth', transcription: '[fɪfθ]', trans: 'пятый', ex: 'On the <b>fifth</b> floor.', exRu: 'На пятом этаже.' }
        ]
    }
];

// ───────────────────────────────────────────────────────────
// КОРНИ-КОНСТРУКТОРЫ
// ───────────────────────────────────────────────────────────
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
    },
    { root: 'aud', topic: 'speech', emoji: '👂', meaning: 'слышать',
      note: 'Латинский audire.',
      words: [
        { word: 'audio', pre: '-io', preMean: 'связь', trans: 'аудио', ex: 'Audio file.', exRu: 'Аудиофайл.' },
        { word: 'audience', pre: '-ence', preMean: 'состояние', trans: 'публика', ex: 'A big audience.', exRu: 'Большая публика.' },
        { word: 'audition', pre: '-ition', preMean: 'действие', trans: 'прослушивание', ex: 'Attend the audition.', exRu: 'Пойди на прослушивание.' }
      ]
    },
    { root: 'ped', topic: 'motion', emoji: '🦶', meaning: 'нога',
      note: 'Латинский pes.',
      words: [
        { word: 'pedal', pre: '-al', preMean: 'прил.', trans: 'педаль', ex: 'Press the pedal.', exRu: 'Нажми педаль.' },
        { word: 'pedestrian', pre: '-ian', preMean: 'лицо', trans: 'пешеход', ex: 'A pedestrian zone.', exRu: 'Пешеходная зона.' },
        { word: 'pedicure', pre: 'cure', preMean: 'уход', trans: 'педикюр', ex: 'Get a pedicure.', exRu: 'Сделай педикюр.' }
      ]
    },
    { root: 'man', topic: 'tech', emoji: '✋', meaning: 'рука',
      note: 'Латинский manus.',
      words: [
        { word: 'manual', pre: '-al', preMean: 'прил.', trans: 'ручной', ex: 'A manual car.', exRu: 'Машина с ручной КПП.' },
        { word: 'manufacture', pre: 'fact', preMean: 'делать', trans: 'производить', ex: 'Manufacture cars.', exRu: 'Производить машины.' },
        { word: 'manuscript', pre: 'script', preMean: 'писать', trans: 'рукопись', ex: 'An old manuscript.', exRu: 'Старая рукопись.' }
      ]
    },
    { root: 'aqua', topic: 'life', emoji: '💧', meaning: 'вода',
      note: 'Латинский aqua.',
      words: [
        { word: 'aquarium', pre: '-rium', preMean: 'место', trans: 'аквариум', ex: 'Visit the aquarium.', exRu: 'Посети аквариум.' },
        { word: 'aquatic', pre: '-atic', preMean: 'прил.', trans: 'водный', ex: 'Aquatic plants.', exRu: 'Водные растения.' },
        { word: 'aqueduct', pre: 'duct', preMean: 'вести', trans: 'акведук', ex: 'An old aqueduct.', exRu: 'Старый акведук.' }
      ]
    },
    { root: 'lum', topic: 'mind', emoji: '💡', meaning: 'свет',
      note: 'Латинский lumen.',
      words: [
        { word: 'illuminate', pre: 'il-', preMean: 'в', trans: 'освещать', ex: 'Illuminate the room.', exRu: 'Освети комнату.' },
        { word: 'luminous', pre: '-ous', preMean: 'полный', trans: 'светящийся', ex: 'A luminous watch.', exRu: 'Светящиеся часы.' }
      ]
    },
    { root: 'vac', topic: 'life', emoji: '🕳️', meaning: 'пустой',
      note: 'Латинский vacare.',
      words: [
        { word: 'vacation', pre: '-ation', preMean: 'действие', trans: 'отпуск', ex: 'Take a vacation.', exRu: 'Возьми отпуск.' },
        { word: 'vacuum', pre: '-uum', preMean: 'состояние', trans: 'вакуум', ex: 'A vacuum cleaner.', exRu: 'Пылесос.' },
        { word: 'vacant', pre: '-ant', preMean: 'прил.', trans: 'свободный', ex: 'A vacant seat.', exRu: 'Свободное место.' }
      ]
    },
    { root: 'cogn', topic: 'mind', emoji: '🧠', meaning: 'знать',
      note: 'Латинский cognoscere.',
      words: [
        { word: 'recognize', pre: 're-', preMean: 'снова', trans: 'узнать', ex: 'Recognize me?', exRu: 'Узнаёшь меня?' },
        { word: 'cognitive', pre: '-itive', preMean: 'прил.', trans: 'познавательный', ex: 'Cognitive skills.', exRu: 'Познавательные навыки.' }
      ]
    },
    { root: 'grad', topic: 'motion', emoji: '📈', meaning: 'шаг, ступень',
      note: 'Латинский gradus.',
      words: [
        { word: 'graduate', pre: '-ate', preMean: 'действие', trans: 'выпускник', ex: 'A university graduate.', exRu: 'Выпускник университета.' },
        { word: 'gradual', pre: '-al', preMean: 'прил.', trans: 'постепенный', ex: 'A gradual change.', exRu: 'Постепенное изменение.' },
        { word: 'upgrade', pre: 'up-', preMean: 'вверх', trans: 'улучшить', ex: 'Upgrade your phone.', exRu: 'Обнови телефон.' }
      ]
    },
    { root: 'rupt', topic: 'motion', emoji: '💥', meaning: 'ломать',
      note: 'Латинский rumpere.',
      words: [
        { word: 'interrupt', pre: 'inter-', preMean: 'между', trans: 'прервать', ex: 'Don\'t interrupt me.', exRu: 'Не перебивай.' },
        { word: 'corrupt', pre: 'cor-', preMean: 'полностью', trans: 'коррумпированный', ex: 'A corrupt official.', exRu: 'Коррумпированный чиновник.' },
        { word: 'erupt', pre: 'e-', preMean: 'наружу', trans: 'извергаться', ex: 'The volcano erupted.', exRu: 'Вулкан извергся.' }
      ]
    },
    { root: 'sat', topic: 'mind', emoji: '😊', meaning: 'достаточно',
      note: 'Латинский satis.',
      words: [
        { word: 'satisfy', pre: '-isfy', preMean: 'делать', trans: 'удовлетворить', ex: 'Satisfy the client.', exRu: 'Удовлетвори клиента.' },
        { word: 'saturated', pre: '-ated', preMean: 'прил.', trans: 'насыщенный', ex: 'Saturated fats.', exRu: 'Насыщенные жиры.' }
      ]
    },
    { root: 'cur', topic: 'motion', emoji: '🏃‍♂️', meaning: 'бежать',
      note: 'Латинский currere.',
      words: [
        { word: 'current', pre: '-ent', preMean: 'прил.', trans: 'текущий', ex: 'The current year.', exRu: 'Текущий год.' },
        { word: 'occur', pre: 'oc-', preMean: 'к', trans: 'случиться', ex: 'It occurred yesterday.', exRu: 'Это случилось вчера.' },
        { word: 'excursion', pre: 'ex-', preMean: 'наружу', trans: 'экскурсия', ex: 'A city excursion.', exRu: 'Экскурсия по городу.' }
      ]
    },
    { root: 'fract', topic: 'motion', emoji: '🦴', meaning: 'ломать',
      note: 'Латинский frangere.',
      words: [
        { word: 'fracture', pre: '-ure', preMean: 'действие', trans: 'перелом', ex: 'A bone fracture.', exRu: 'Перелом кости.' },
        { word: 'fraction', pre: '-ion', preMean: 'состояние', trans: 'доля', ex: 'A small fraction.', exRu: 'Небольшая доля.' }
      ]
    },
    { root: 'migr', topic: 'motion', emoji: '✈️', meaning: 'перемещаться',
      note: 'Латинский migrare.',
      words: [
        { word: 'migrate', pre: '-ate', preMean: 'действие', trans: 'мигрировать', ex: 'Birds migrate south.', exRu: 'Птицы мигрируют на юг.' },
        { word: 'immigrant', pre: 'im-', preMean: 'в', trans: 'иммигрант', ex: 'An immigrant family.', exRu: 'Семья иммигрантов.' },
        { word: 'emigrate', pre: 'e-', preMean: 'наружу', trans: 'эмигрировать', ex: 'Emigrate to Canada.', exRu: 'Эмигрировать в Канаду.' }
      ]
    },
    { root: 'voc', topic: 'speech', emoji: '🗣️', meaning: 'голос, звать',
      note: 'Латинский vocare.',
      words: [
        { word: 'vocal', pre: '-al', preMean: 'прил.', trans: 'вокальный', ex: 'Vocal music.', exRu: 'Вокальная музыка.' },
        { word: 'vocabulary', pre: '-abulary', preMean: 'собрание', trans: 'словарь', ex: 'A rich vocabulary.', exRu: 'Богатый словарный запас.' },
        { word: 'advocate', pre: 'ad-', preMean: 'к', trans: 'защитник', ex: 'An advocate of peace.', exRu: 'Защитник мира.' }
      ]
    },
    { root: 'doc', topic: 'speech', emoji: '📄', meaning: 'учить',
      note: 'Латинский docere.',
      words: [
        { word: 'doctor', pre: '-or', preMean: 'тот, кто', trans: 'врач', ex: 'See a doctor.', exRu: 'Сходи к врачу.' },
        { word: 'document', pre: '-ment', preMean: 'результат', trans: 'документ', ex: 'Sign the document.', exRu: 'Подпиши документ.' },
        { word: 'doctrine', pre: '-trine', preMean: 'учение', trans: 'доктрина', ex: 'A new doctrine.', exRu: 'Новая доктрина.' }
      ]
    },
    { root: 'lab', topic: 'mind', emoji: '🔬', meaning: 'работать',
      note: 'Латинский laborare.',
      words: [
        { word: 'laboratory', pre: '-atory', preMean: 'место', trans: 'лаборатория', ex: 'Work in a laboratory.', exRu: 'Работать в лаборатории.' },
        { word: 'collaborate', pre: 'col-', preMean: 'вместе', trans: 'сотрудничать', ex: 'Collaborate with them.', exRu: 'Сотрудничай с ними.' }
      ]
    },
    { root: 'meter', topic: 'tech', emoji: '📏', meaning: 'измерять',
      note: 'Греческий metron.',
      words: [
        { word: 'thermometer', pre: 'thermo-', preMean: 'тепло', trans: 'термометр', ex: 'Use a thermometer.', exRu: 'Используй термометр.' },
        { word: 'kilometer', pre: 'kilo-', preMean: 'тысяча', trans: 'километр', ex: '5 kilometers away.', exRu: 'В 5 километрах.' },
        { word: 'diameter', pre: 'dia-', preMean: 'через', trans: 'диаметр', ex: 'The diameter of a circle.', exRu: 'Диаметр круга.' }
      ]
    }
];

const rootTopics = [
    { id: 'all',    emoji: '📚', name: 'Все' },
    { id: 'motion', emoji: '🏃', name: 'Движение' },
    { id: 'speech', emoji: '🗣️', name: 'Речь' },
    { id: 'life',   emoji: '🌱', name: 'Жизнь' },
    { id: 'mind',   emoji: '🧠', name: 'Сознание' },
    { id: 'tech',   emoji: '⚙️', name: 'Техника' }
];

// ───────────────────────────────────────────────────────────
// МОДАЛЬНЫЕ ГЛАГОЛЫ
// ───────────────────────────────────────────────────────────
const modalVerbs = [
    {
        id: 'should', word: 'should', transcription: '/ʃʊd/', emoji: '💡',
        meaning: 'СОВЕТ / РЕКОМЕНДАЦИЯ',
        color: '#6b8e23',
        rules: ['что-то хорошее сделать', 'не обязательно', 'мягкий совет'],
        hint: '💬 Should = мягкий совет, не приказ.',
        examples: [
            { en: 'You <b>should</b> get some rest.', ru: 'Тебе стоит отдохнуть.' },
            { en: 'You <b>shouldn\'t</b> worry so much.', ru: 'Тебе не стоит так переживать.' },
            { en: '<b>Should</b> I call her?', ru: 'Мне позвонить ей?' }
        ]
    },
    {
        id: 'must', word: 'must', transcription: '/mʌst/', emoji: '⛔',
        meaning: 'СТРОГАЯ НЕОБХОДИМОСТЬ',
        color: '#b93a3a',
        rules: ['сильная необходимость', 'правило', 'личная уверенность'],
        hint: '⛔ Must = очень строго, сам так решил.',
        examples: [
            { en: 'You <b>must</b> be on time.', ru: 'Ты должен быть вовремя.' },
            { en: 'You <b>mustn\'t</b> tell anyone.', ru: 'Ты не должен никому говорить.' },
            { en: '<b>Must</b> I bring anything?', ru: 'Мне нужно что-то брать?' }
        ]
    },
    {
        id: 'haveto', word: 'have to', transcription: '/hæv tuː/', emoji: '📋',
        meaning: 'НЕОБХОДИМОСТЬ ПО ОБСТОЯТЕЛЬСТВАМ',
        color: '#c49a6c',
        rules: ['вынужденная необходимость', 'внешние обстоятельства', 'правило / обязанность'],
        hint: '📋 Have to = так сложились обстоятельства.',
        examples: [
            { en: 'I <b>have to</b> work tomorrow.', ru: 'Мне нужно работать завтра.' },
            { en: 'I <b>don\'t have to</b> go.', ru: 'Мне не нужно идти.' },
            { en: 'Do I <b>have to</b> wear a uniform?', ru: 'Мне нужно носить форму?' }
        ]
    }
];

const confusingVerbs = [
    {
        id: 'make-do', emoji: '🔨✅',
        title: 'MAKE vs DO',
        rule: 'Оба переводятся как «делать», но значат разное!',
        pairs: [
            {
                word: 'make', emoji: '🔨',
                meaning: 'Это «делать» в значении «создавать, что-то сделать, изготовить, сотворять что-то».',
                examples: [
                    { en: 'We <b>make</b> a plan.', ru: 'Мы составляем план.' },
                    { en: 'She <b>made</b> a cake.', ru: 'Она испекла торт.' }
                ]
            },
            {
                word: 'do', emoji: '✅',
                meaning: 'Это «делать» в значении «выполнять действие, операцию, работу».',
                examples: [
                    { en: 'I <b>do</b> my homework.', ru: 'Я делаю домашнее задание.' },
                    { en: 'She <b>does</b> the cleaning.', ru: 'Она делает уборку.' }
                ]
            }
        ]
    },
    {
        id: 'refuse-deny', emoji: '🙅🚫',
        title: 'REFUSE vs DENY',
        rule: 'Оба про «отказ», но направление разное!',
        pairs: [
            {
                word: 'refuse', emoji: '🙅',
                meaning: 'Это «отказываться делать что-либо», потому что не хотим этого.',
                examples: [
                    { en: 'I <b>refused</b> to help.', ru: 'Я отказался помочь.' },
                    { en: 'She <b>refuses</b> to go.', ru: 'Она отказывается идти.' }
                ]
            },
            {
                word: 'deny', emoji: '🚫',
                meaning: 'Это «отказывать» в значении, когда отказываем в разрешении, не позволяем кому-либо что-либо делать или иметь.',
                examples: [
                    { en: 'They <b>denied</b> him permission.', ru: 'Они отказали ему в разрешении.' },
                    { en: 'The school <b>denied</b> the request.', ru: 'Школа отказала в просьбе.' }
                ]
            }
        ]
    },
    {
        id: 'say-tell', emoji: '💬🗣️',
        title: 'SAY vs TELL',
        rule: 'Оба про «говорить», но tell требует адресата!',
        pairs: [
            {
                word: 'say', emoji: '💬',
                meaning: 'Это «говорить» в значении, когда мы просто что-то говорим, произносим слова.',
                examples: [
                    { en: 'She <b>said</b> hello.', ru: 'Она сказала привет.' },
                    { en: 'He <b>says</b> he is busy.', ru: 'Он говорит, что он занят.' }
                ]
            },
            {
                word: 'tell', emoji: '🗣️',
                meaning: 'Это «говорить» в значении, когда мы говорим кому-то информацию.',
                examples: [
                    { en: 'She <b>told</b> me the truth.', ru: 'Она рассказала мне правду.' },
                    { en: 'He <b>told</b> us about his trip.', ru: 'Он рассказал нам о своей поездке.' }
                ]
            }
        ]
    }
];

const wordFormationRules = {
    intro: '⚙️ Как из одного слова сделать другое?',
    suffixRule: 'Суффиксы добавляются в КОНЕЦ и образуют новое слово с другим значением.',
    prefixRule: 'Префиксы добавляются в НАЧАЛО и часто меняют значение на противоположное.',
    mainRule: '🎯 Для экзаменов: всегда определяй часть речи (сущ., глагол, прил., наречие) ПЕРЕД тем, как менять слово!',
    suffixGroups: [
        {
            affix: '-ment', meaning: 'действие / результат', emoji: '📦',
            chains: [
                { from: 'develop', to: 'development', tr: 'развивать → развитие' },
                { from: 'move', to: 'movement', tr: 'двигать → движение' }
            ]
        },
        {
            affix: '-ion', meaning: 'процесс / состояние', emoji: '📜',
            chains: [
                { from: 'create', to: 'creation', tr: 'создавать → создание' },
                { from: 'decide', to: 'decision', tr: 'решать → решение' },
                { from: 'inform', to: 'information', tr: 'информировать → информация' },
                { from: 'educate', to: 'education', tr: 'воспитывать → образование' }
            ]
        },
        {
            affix: '-er / -or', meaning: 'человек / предмет', emoji: '👤',
            chains: [
                { from: 'teach', to: 'teacher', tr: 'учить → учитель' },
                { from: 'drive', to: 'driver', tr: 'водить → водитель' },
                { from: 'play', to: 'player', tr: 'играть → игрок' },
                { from: 'compete', to: 'competitor', tr: 'соревноваться → конкурент' }
            ]
        }
    ],
    prefixGroups: [
        {
            affix: 'un-', meaning: 'отрицание', emoji: '❌',
            chains: [
                { from: 'happy', to: 'unhappy', tr: 'счастливый → несчастный' },
                { from: 'do', to: 'undo', tr: 'делать → отменять' },
                { from: 'able', to: 'unable', tr: 'способный → неспособный' }
            ]
        },
        {
            affix: 'dis-', meaning: 'противоположность', emoji: '🚫',
            chains: [
                { from: 'agree', to: 'disagree', tr: 'соглашаться → не соглашаться' },
                { from: 'appear', to: 'disappear', tr: 'появляться → исчезать' },
                { from: 'connect', to: 'disconnect', tr: 'соединять → разъединять' }
            ]
        },
        {
            affix: 'mis-', meaning: 'ошибка / неправильно', emoji: '⚠️',
            chains: [
                { from: 'understand', to: 'misunderstand', tr: 'понимать → неправильно понимать' },
                { from: 'spell', to: 'misspell', tr: 'писать по буквам → ошибиться в написании' },
                { from: 'behave', to: 'misbehave', tr: 'вести себя → плохо себя вести' }
            ]
        },
        {
            affix: 're-', meaning: 'повторить действие', emoji: '🔄',
            chains: [
                { from: 'write', to: 'rewrite', tr: 'писать → переписать' },
                { from: 'do', to: 'redo', tr: 'делать → переделать' },
                { from: 'start', to: 'restart', tr: 'начать → перезапустить' }
            ]
        },
        {
            affix: 'de-', meaning: 'убрать / отменить', emoji: '⬇️',
            chains: [
                { from: 'motivate', to: 'demotivate', tr: 'мотивировать → демотивировать' },
                { from: 'activate', to: 'deactivate', tr: 'активировать → деактивировать' },
                { from: 'classify', to: 'declassify', tr: 'засекретить → рассекретить' }
            ]
        },
        {
            affix: 'out-', meaning: 'превзойти / наружу', emoji: '🚪',
            chains: [
                { from: 'run', to: 'outrun', tr: 'бежать → обогнать' },
                { from: 'stand', to: 'outstanding', tr: 'стоять → выдающийся' }
            ]
        }
    ]
};

const timeMarkers = [
    { emoji: '☀️', word: 'today', ru: 'сегодня' },
    { emoji: '📅', word: 'tomorrow', ru: 'завтра' },
    { emoji: '⏪', word: 'yesterday', ru: 'вчера' },
    { emoji: '📆', word: 'next week', ru: 'на следующей неделе' },
    { emoji: '🎉', word: 'this weekend', ru: 'в эти выходные' }
];

const trapPairs = [
    {
        id: 'can-may', emoji: '💪✅',
        title: 'CAN vs MAY',
        rule: 'Физическая возможность VS разрешение',
        left: {
            word: 'can', emoji: '💪',
            meaning: 'физическая возможность или умение',
            examples: [{ en: 'I <b>can</b> swim.', ru: 'Я умею плавать.' }]
        },
        right: {
            word: 'may', emoji: '🙏',
            meaning: 'разрешение или вероятность',
            examples: [{ en: '<b>May</b> I come in?', ru: 'Можно войти?' }]
        }
    },
    {
        id: 'say-tell', emoji: '💬🗣️',
        title: 'SAY vs TELL',
        rule: 'Сказать что-то VS сказать кому-то',
        left: {
            word: 'say', emoji: '💬',
            meaning: 'сказать что-то',
            examples: [{ en: 'She <b>said</b> hello.', ru: 'Она сказала привет.' }]
        },
        right: {
            word: 'tell', emoji: '🗣️',
            meaning: 'сказать кому-то',
            examples: [{ en: 'She <b>told</b> me the truth.', ru: 'Она сказала мне правду.' }]
        }
    },
    {
        id: 'look-see', emoji: '👀👁️',
        title: 'LOOK vs SEE',
        rule: 'Смотреть намеренно VS видеть',
        left: {
            word: 'look', emoji: '👀',
            meaning: 'смотреть намеренно',
            examples: [{ en: '<b>Look</b> at the sky!', ru: 'Посмотри на небо!' }]
        },
        right: {
            word: 'see', emoji: '👁️',
            meaning: 'видеть',
            examples: [{ en: 'I can <b>see</b> the mountains.', ru: 'Я вижу горы.' }]
        }
    },
    {
        id: 'speak-talk', emoji: '🎤💬',
        title: 'SPEAK vs TALK',
        rule: 'Формально / о языке VS общаться',
        left: {
            word: 'speak', emoji: '🎤',
            meaning: 'говорить, чаще формально или о языке',
            examples: [{ en: 'She <b>speaks</b> Italian.', ru: 'Она говорит по-итальянски.' }]
        },
        right: {
            word: 'talk', emoji: '💬',
            meaning: 'разговаривать, общаться',
            examples: [{ en: 'We <b>talked</b> for hours.', ru: 'Мы разговаривали часами.' }]
        }
    },
    {
        id: 'make-do-trap', emoji: '🔨✅',
        title: 'MAKE vs DO',
        rule: 'Создавать VS выполнять',
        left: {
            word: 'make', emoji: '🔨',
            meaning: 'создавать, производить',
            examples: [{ en: 'She <b>made</b> a cake.', ru: 'Она испекла торт.' }]
        },
        right: {
            word: 'do', emoji: '✅',
            meaning: 'выполнять действие или работу',
            examples: [{ en: 'I have to <b>do</b> my homework.', ru: 'Мне нужно сделать домашку.' }]
        }
    },
    {
        id: 'borrow-lend', emoji: '🤲🎁',
        title: 'BORROW vs LEND',
        rule: 'Брать взаймы VS давать взаймы',
        left: {
            word: 'borrow', emoji: '🤲',
            meaning: 'брать взаймы',
            examples: [{ en: 'Can I <b>borrow</b> your pen?', ru: 'Можно взять у тебя ручку?' }]
        },
        right: {
            word: 'lend', emoji: '🎁',
            meaning: 'давать взаймы',
            examples: [{ en: 'Can you <b>lend</b> me your pen?', ru: 'Можешь дать мне ручку?' }]
        }
    },
    {
        id: 'listen-hear', emoji: '🎧👂',
        title: 'LISTEN vs HEAR',
        rule: 'Слушать внимательно VS слышать',
        left: {
            word: 'listen', emoji: '🎧',
            meaning: 'слушать внимательно',
            examples: [{ en: '<b>Listen</b> to the music.', ru: 'Слушай музыку.' }]
        },
        right: {
            word: 'hear', emoji: '👂',
            meaning: 'слышать',
            examples: [{ en: 'I can <b>hear</b> the rain.', ru: 'Я слышу дождь.' }]
        }
    },
    {
        id: 'come-go', emoji: '🚶🏃',
        title: 'COME vs GO',
        rule: 'Приходить сюда VS идти туда',
        left: {
            word: 'come', emoji: '🚶',
            meaning: 'приходить сюда',
            examples: [{ en: '<b>Come</b> to me.', ru: 'Подойди ко мне.' }]
        },
        right: {
            word: 'go', emoji: '🏃',
            meaning: 'идти туда',
            examples: [{ en: 'I\'m <b>going</b> to the store.', ru: 'Я иду в магазин.' }]
        }
    }
];

const twinWords = [
    {
        id: 'affect-effect', emoji: '🌊🎯',
        title: 'AFFECT vs EFFECT',
        rule: 'Глагол VS существительное',
        left: {
            word: 'affect', emoji: '🌊', pos: 'глагол',
            meaning: 'влиять',
            examples: [{ en: 'The rain <b>affects</b> my mood.', ru: 'Дождь влияет на моё настроение.' }]
        },
        right: {
            word: 'effect', emoji: '🎯', pos: 'существительное',
            meaning: 'результат, следствие',
            examples: [{ en: 'The <b>effect</b> was huge.', ru: 'Эффект был огромный.' }]
        }
    },
    {
        id: 'accept-except', emoji: '✅🚫',
        title: 'ACCEPT vs EXCEPT',
        rule: 'Принимать VS кроме',
        left: {
            word: 'accept', emoji: '✅', pos: 'глагол',
            meaning: 'принимать',
            examples: [{ en: 'I <b>accept</b> your apology.', ru: 'Я принимаю твои извинения.' }]
        },
        right: {
            word: 'except', emoji: '🚫', pos: 'предлог',
            meaning: 'кроме',
            examples: [{ en: 'Everyone came <b>except</b> Tom.', ru: 'Все пришли, кроме Тома.' }]
        }
    },
    {
        id: 'raise-rise', emoji: '⬆️🌅',
        title: 'RAISE vs RISE',
        rule: 'Поднимать что-то VS подниматься самому',
        left: {
            word: 'raise', emoji: '⬆️', pos: 'с объектом',
            meaning: 'поднимать (что-то)',
            examples: [
                { en: '<b>Raise</b> your hand!', ru: 'Подними руку!' },
                { en: 'They <b>raised</b> prices.', ru: 'Они подняли цены.' }
            ]
        },
        right: {
            word: 'rise', emoji: '🌅', pos: 'без объекта',
            meaning: 'подниматься (само по себе)',
            examples: [
                { en: 'The sun <b>rises</b> at 6.', ru: 'Солнце встаёт в 6.' },
                { en: 'Prices <b>rise</b> every year.', ru: 'Цены растут каждый год.' }
            ]
        }
    },
    {
        id: 'borrow-lend-twin', emoji: '🤲🎁',
        title: 'BORROW vs LEND',
        rule: 'Брать взаймы VS давать взаймы',
        left: {
            word: 'borrow', emoji: '🤲', pos: 'взять себе',
            meaning: 'брать взаймы',
            examples: [{ en: 'Can I <b>borrow</b> your pen?', ru: 'Можно взять твою ручку?' }]
        },
        right: {
            word: 'lend', emoji: '🎁', pos: 'дать другому',
            meaning: 'давать взаймы',
            examples: [{ en: 'Can you <b>lend</b> me your pen?', ru: 'Можешь дать мне ручку?' }]
        }
    },
    {
        id: 'say-tell-twin', emoji: '💬🗣️',
        title: 'SAY vs TELL',
        rule: 'Сказать что-то VS рассказать кому-то',
        left: {
            word: 'say', emoji: '💬', pos: 'без адресата',
            meaning: 'сказать (что-то)',
            examples: [{ en: 'She <b>said</b> hello.', ru: 'Она сказала привет.' }]
        },
        right: {
            word: 'tell', emoji: '🗣️', pos: 'с адресатом',
            meaning: 'рассказывать (что-то кому-то)',
            examples: [{ en: 'She <b>told</b> me the truth.', ru: 'Она рассказала мне правду.' }]
        }
    },
    {
        id: 'lose-loose', emoji: '😢👖',
        title: 'LOSE vs LOOSE',
        rule: 'Терять VS свободный',
        left: {
            word: 'lose', emoji: '😢', pos: 'глагол / [luːz]',
            meaning: 'терять',
            examples: [{ en: 'Don\'t <b>lose</b> your keys.', ru: 'Не теряй ключи.' }]
        },
        right: {
            word: 'loose', emoji: '👖', pos: 'прил. / [luːs]',
            meaning: 'свободный, болтающийся',
            examples: [{ en: 'These pants are <b>loose</b>.', ru: 'Эти штаны свободные.' }]
        }
    },
    {
        id: 'historic-historical', emoji: '🏛️📜',
        title: 'HISTORIC vs HISTORICAL',
        rule: 'Важный для истории VS связанный с историей',
        left: {
            word: 'historic', emoji: '🏛️', pos: 'важное',
            meaning: 'исторически важный',
            examples: [
                { en: 'A <b>historic</b> moment.', ru: 'Исторический момент.' },
                { en: 'A <b>historic</b> victory.', ru: 'Историческая победа.' }
            ]
        },
        right: {
            word: 'historical', emoji: '📜', pos: 'относящееся',
            meaning: 'связанный с историей',
            examples: [
                { en: 'A <b>historical</b> novel.', ru: 'Исторический роман.' },
                { en: 'A <b>historical</b> museum.', ru: 'Исторический музей.' }
            ]
        }
    },
    {
        id: 'principal-principle', emoji: '🎓📏',
        title: 'PRINCIPAL vs PRINCIPLE',
        rule: 'Директор VS принцип',
        left: {
            word: 'principal', emoji: '🎓', pos: 'человек / главный',
            meaning: 'директор / основной',
            examples: [
                { en: 'The <b>principal</b> of the school.', ru: 'Директор школы.' },
                { en: 'The <b>principal</b> reason.', ru: 'Основная причина.' }
            ]
        },
        right: {
            word: 'principle', emoji: '📏', pos: 'правило',
            meaning: 'принцип',
            examples: [
                { en: 'A man of <b>principle</b>.', ru: 'Человек принципов.' },
                { en: 'In <b>principle</b>, I agree.', ru: 'В принципе, я согласен.' }
            ]
        }
    }
];

const discourseMarkers = [
    { id: 'fortunately', word: 'Fortunately', transcription: '[ˈfɔːtʃənətli]', ru: 'к счастью', emoji: '🍀', group: 'emotion',
      example: { en: '<b>Fortunately</b>, we arrived on time.', ru: 'К счастью, мы приехали вовремя.' } },
    { id: 'unfortunately', word: 'Unfortunately', transcription: '[ʌnˈfɔːtʃənətli]', ru: 'к сожалению', emoji: '😔', group: 'emotion',
      example: { en: '<b>Unfortunately</b>, I can\'t come.', ru: 'К сожалению, я не могу прийти.' } },
    { id: 'certainly', word: 'Certainly', transcription: '[ˈsɜːtnli]', ru: 'конечно', emoji: '💯', group: 'emotion',
      example: { en: '<b>Certainly</b>, I will help you.', ru: 'Конечно, я помогу тебе.' } },
    { id: 'ofcourse', word: 'Of course', transcription: '[əv kɔːs]', ru: 'конечно', emoji: '👌', group: 'emotion',
      example: { en: '<b>Of course</b>, you can come.', ru: 'Конечно, ты можешь прийти.' } },
    { id: 'probably', word: 'Probably', transcription: '[ˈprɒbəbli]', ru: 'вероятно', emoji: '🤔', group: 'emotion',
      example: { en: 'He will <b>probably</b> be late.', ru: 'Он, вероятно, опоздает.' } },
    { id: 'maybe', word: 'Maybe', transcription: '[ˈmeɪbi]', ru: 'может быть', emoji: '❓', group: 'emotion',
      example: { en: '<b>Maybe</b> she is right.', ru: 'Может быть, она права.' } },
    { id: 'perhaps', word: 'Perhaps', transcription: '[pəˈhæps]', ru: 'возможно', emoji: '💭', group: 'emotion',
      example: { en: '<b>Perhaps</b> we should wait.', ru: 'Возможно, нам стоит подождать.' } },
    { id: 'however', word: 'However', transcription: '[haʊˈevə]', ru: 'однако', emoji: '⚖️', group: 'logic',
      example: { en: 'It was hard. <b>However</b>, we did it.', ru: 'Было трудно. Однако мы справились.' } },
    { id: 'nevertheless', word: 'Nevertheless', transcription: '[ˌnevəðəˈles]', ru: 'тем не менее', emoji: '🔄', group: 'logic',
      example: { en: '<b>Nevertheless</b>, we must try.', ru: 'Тем не менее, мы должны попробовать.' } },
    { id: 'therefore', word: 'Therefore', transcription: '[ˈðeəfɔː]', ru: 'поэтому', emoji: '➡️', group: 'logic',
      example: { en: 'It rained. <b>Therefore</b>, we stayed home.', ru: 'Шёл дождь. Поэтому мы остались дома.' } },
    { id: 'so', word: 'So', transcription: '[səʊ]', ru: 'таким образом / итак', emoji: '🔗', group: 'logic',
      example: { en: '<b>So</b>, what do you think?', ru: 'Итак, что ты думаешь?' } },
    { id: 'anyway', word: 'Anyway', transcription: '[ˈeniweɪ]', ru: 'в любом случае', emoji: '🚶', group: 'logic',
      example: { en: '<b>Anyway</b>, let\'s go.', ru: 'В любом случае, пойдём.' } },
    { id: 'besides', word: 'Besides', transcription: '[bɪˈsaɪdz]', ru: 'кроме того', emoji: '➕', group: 'logic',
      example: { en: '<b>Besides</b>, it\'s too late.', ru: 'Кроме того, уже поздно.' } },
    { id: 'also', word: 'Also', transcription: '[ˈɔːlsəʊ]', ru: 'также', emoji: '🔗', group: 'logic',
      example: { en: 'She <b>also</b> likes tea.', ru: 'Она также любит чай.' } },
    { id: 'finally', word: 'Finally', transcription: '[ˈfaɪnəli]', ru: 'наконец', emoji: '🏁', group: 'logic',
      example: { en: '<b>Finally</b>, we arrived.', ru: 'Наконец мы приехали.' } },
    { id: 'meanwhile', word: 'Meanwhile', transcription: '[ˈmiːnwaɪl]', ru: 'тем временем', emoji: '⏳', group: 'time',
      example: { en: '<b>Meanwhile</b>, I was cooking.', ru: 'Тем временем я готовил.' } },
    { id: 'well', word: 'Well', transcription: '[wel]', ru: 'итак / ну', emoji: '💭', group: 'time',
      example: { en: '<b>Well</b>, I don\'t know.', ru: 'Ну, я не знаю.' } },
    { id: 'bytheway', word: 'By the way', transcription: '[baɪ ðə weɪ]', ru: 'кстати', emoji: '📌', group: 'style',
      example: { en: '<b>By the way</b>, I saw Tom.', ru: 'Кстати, я видел Тома.' } },
    { id: 'sotospeak', word: 'So to speak', transcription: '[səʊ tə spiːk]', ru: 'так сказать', emoji: '💬', group: 'style',
      example: { en: 'He is, <b>so to speak</b>, my boss.', ru: 'Он, так сказать, мой начальник.' } }
];

const discourseGroups = [
    { id: 'all', emoji: '📚', name: 'Все' },
    { id: 'emotion', emoji: '🎭', name: 'Эмоция' },
    { id: 'logic', emoji: '🔗', name: 'Логика' },
    { id: 'time', emoji: '⏰', name: 'Время' },
    { id: 'style', emoji: '💬', name: 'Стиль' }
];

const essayLinkers = [
    { id: 'firstandforemost', group: 'start', en: 'First and foremost', ru: 'первое и наиболее важное; во-первых',
      emoji: '🥇', trans: '[fɜːst ənd ˈfɔːməʊst]',
      usage: 'Начинает список аргументов, подчёркивает важность первого.',
      example: { en: '<b>First and foremost</b>, education is a right.', ru: 'Первое и самое важное — образование это право.' } },
    { id: 'firstreason', group: 'start', en: 'The first reason why', ru: 'первая причина, почему...',
      emoji: '1️⃣', trans: '[ðə fɜːst ˈriːzn waɪ]',
      usage: 'Вводит первую причину в структуре эссе.',
      example: { en: '<b>The first reason why</b> I think so is simple.', ru: 'Первая причина, почему я так думаю, проста.' } },
    { id: 'secondly', group: 'start', en: 'Secondly', ru: 'во-вторых',
      emoji: '2️⃣', trans: '[ˈsekəndli]',
      usage: 'Вводит второй аргумент.',
      example: { en: '<b>Secondly</b>, it saves time.', ru: 'Во-вторых, это экономит время.' } },
    { id: 'infact', group: 'develop', en: 'In fact', ru: 'собственно, в сущности',
      emoji: '💡', trans: '[ɪn fækt]',
      usage: 'Уточняет или усиливает сказанное.',
      example: { en: '<b>In fact</b>, it is easier than it seems.', ru: 'В сущности, это проще, чем кажется.' } },
    { id: 'inotherwords', group: 'develop', en: 'In other words', ru: 'другими словами',
      emoji: '🔄', trans: '[ɪn ˈʌðə wɜːdz]',
      usage: 'Переформулирует мысль проще.',
      example: { en: '<b>In other words</b>, we need to act now.', ru: 'Другими словами, надо действовать сейчас.' } },
    { id: 'whatismore', group: 'develop', en: 'What is more', ru: 'что ещё важнее',
      emoji: '⬆️', trans: '[wɒt ɪz mɔː]',
      usage: 'Добавляет более сильный аргумент.',
      example: { en: '<b>What is more</b>, it is free.', ru: 'Что ещё важнее, это бесплатно.' } },
    { id: 'furthermore', group: 'develop', en: 'Furthermore', ru: 'к тому же, более того',
      emoji: '➕', trans: '[ˌfɜːðəˈmɔː]',
      usage: 'Формальное добавление аргумента.',
      example: { en: '<b>Furthermore</b>, it helps the environment.', ru: 'Более того, это помогает экологии.' } },
    { id: 'however-essay', group: 'contrast', en: 'However', ru: 'тем не менее, однако',
      emoji: '⚖️', trans: '[haʊˈevə]',
      usage: 'Противопоставляет новую мысль предыдущей.',
      example: { en: '<b>However</b>, there are some drawbacks.', ru: 'Однако есть и недостатки.' } },
    { id: 'although', group: 'contrast', en: 'Although', ru: 'хотя',
      emoji: '🔀', trans: '[ɔːlˈðəʊ]',
      usage: 'Уступает, но вводит противоположное.',
      example: { en: '<b>Although</b> it is hard, it is worth it.', ru: 'Хотя это сложно, оно того стоит.' } },
    { id: 'notsurprisingly', group: 'contrast', en: 'Not surprisingly', ru: 'неудивительно',
      emoji: '🤷', trans: '[nɒt səˈpraɪzɪŋli]',
      usage: 'Подчёркивает логичность результата.',
      example: { en: '<b>Not surprisingly</b>, people agreed.', ru: 'Неудивительно, что люди согласились.' } },
    { id: 'actually', group: 'clarify', en: 'Actually', ru: 'вообще-то, на самом деле',
      emoji: '🎯', trans: '[ˈæktʃuəli]',
      usage: 'Поправляет или уточняет.',
      example: { en: '<b>Actually</b>, it is not that simple.', ru: 'На самом деле, всё не так просто.' } },
    { id: 'basically', group: 'clarify', en: 'Basically', ru: 'в основном, по сути',
      emoji: '📌', trans: '[ˈbeɪsɪkli]',
      usage: 'Обобщает главную мысль.',
      example: { en: '<b>Basically</b>, we have two options.', ru: 'По сути, у нас два варианта.' } },
    { id: 'understandably', group: 'clarify', en: 'Understandably', ru: 'понятно, что',
      emoji: '😌', trans: '[ˌʌndəˈstændəbli]',
      usage: 'Показывает, что реакция логична.',
      example: { en: '<b>Understandably</b>, they were upset.', ru: 'Понятно, что они расстроились.' } },
    { id: 'cometothink', group: 'clarify', en: 'Come to think of it', ru: 'если вдуматься',
      emoji: '🤔', trans: '[kʌm tə θɪŋk əv ɪt]',
      usage: 'Разговорное, добавляет размышление.',
      example: { en: '<b>Come to think of it</b>, he was right.', ru: 'Если вдуматься, он был прав.' } }
];

const essayLinkerGroups = [
    { id: 'all',      emoji: '📚', name: 'Все' },
    { id: 'start',    emoji: '🚀', name: 'Начало' },
    { id: 'develop',  emoji: '➕', name: 'Развитие' },
    { id: 'contrast', emoji: '⚖️', name: 'Контраст' },
    { id: 'clarify',  emoji: '🎯', name: 'Уточнение' }
];

const usefulLinkers = [
    { id: 'but', group: 'compare', en: 'But', ru: 'но', emoji: '⚡', trans: '[bʌt]',
      usage: 'Простое противопоставление.',
      example: { en: 'I like tea, <b>but</b> she prefers coffee.', ru: 'Я люблю чай, но она предпочитает кофе.' } },
    { id: 'however-useful', group: 'compare', en: 'However', ru: 'однако', emoji: '⚖️', trans: '[haʊˈevə]',
      usage: 'Формальное противопоставление (эссе, статьи).',
      example: { en: 'It is expensive. <b>However</b>, it is worth it.', ru: 'Это дорого. Однако оно того стоит.' } },
    { id: 'ontheotherhand', group: 'compare', en: 'On the other hand', ru: 'с другой стороны', emoji: '🤲', trans: '[ɒn ði ˈʌðə hænd]',
      usage: 'Показывает второй взгляд на ту же тему.',
      example: { en: '<b>On the other hand</b>, it saves time.', ru: 'С другой стороны, это экономит время.' } },
    { id: 'atthesametime', group: 'compare', en: 'At the same time', ru: 'в то же время', emoji: '⏱️', trans: '[ət ðə seɪm taɪm]',
      usage: 'Подчёркивает одновременность или совместимость.',
      example: { en: 'It is fun and, <b>at the same time</b>, useful.', ru: 'Это весело и в то же время полезно.' } },
    { id: 'whereas', group: 'compare', en: 'Whereas', ru: 'тогда как', emoji: '🔄', trans: '[ˌweərˈæz]',
      usage: 'Формальное сравнение двух разных фактов.',
      example: { en: 'He is quiet, <b>whereas</b> she is talkative.', ru: 'Он тихий, тогда как она разговорчива.' } },
    { id: 'eventhough', group: 'compare', en: 'Even though', ru: 'хотя', emoji: '💪', trans: '[ˈiːvn ðəʊ]',
      usage: 'Сильное уступающее значение.',
      example: { en: '<b>Even though</b> it was hard, we won.', ru: 'Хотя было трудно, мы победили.' } },
    { id: 'while', group: 'compare', en: 'While', ru: 'в то время как', emoji: '⏳', trans: '[waɪl]',
      usage: 'Одновременность или мягкий контраст.',
      example: { en: '<b>While</b> I was reading, he was cooking.', ru: 'В то время как я читал, он готовил.' } },
    { id: 'because', group: 'explain', en: 'Because', ru: 'потому что', emoji: '💡', trans: '[bɪˈkɒz]',
      usage: 'Самый распространённый способ объяснить причину.',
      example: { en: 'I am late <b>because</b> the bus was late.', ru: 'Я опоздал, потому что автобус задержался.' } },
    { id: 'since', group: 'explain', en: 'Since', ru: 'так как', emoji: '📌', trans: '[sɪns]',
      usage: 'Более формально, чем because.',
      example: { en: '<b>Since</b> you are here, let\'s start.', ru: 'Так как ты здесь, давайте начнём.' } },
    { id: 'asaresult', group: 'explain', en: 'As a result', ru: 'в результате', emoji: '🎯', trans: '[əz ə rɪˈzʌlt]',
      usage: 'Вводит следствие.',
      example: { en: 'It rained. <b>As a result</b>, we stayed home.', ru: 'Шёл дождь. В результате мы остались дома.' } },
    { id: 'thatswhy', group: 'explain', en: 'That\'s why', ru: 'поэтому', emoji: '➡️', trans: '[ðæts waɪ]',
      usage: 'Разговорное «поэтому».',
      example: { en: '<b>That\'s why</b> I called you.', ru: 'Поэтому я тебе и позвонил.' } },
    { id: 'therefore-useful', group: 'explain', en: 'Therefore', ru: 'следовательно', emoji: '🧮', trans: '[ˈðeəfɔː]',
      usage: 'Формальный вывод.',
      example: { en: 'He lied. <b>Therefore</b>, no one trusts him.', ru: 'Он солгал. Следовательно, ему никто не верит.' } },
    { id: 'dueto', group: 'explain', en: 'Due to', ru: 'из-за', emoji: '⚠️', trans: '[djuː tuː]',
      usage: 'Причина с нейтрально-негативным оттенком.',
      example: { en: '<b>Due to</b> the rain, the game was cancelled.', ru: 'Из-за дождя игру отменили.' } },
    { id: 'thanksto', group: 'explain', en: 'Thanks to', ru: 'благодаря', emoji: '🙏', trans: '[θæŋks tuː]',
      usage: 'Причина с положительным оттенком.',
      example: { en: '<b>Thanks to</b> you, I passed the exam.', ru: 'Благодаря тебе я сдал экзамен.' } }
];

const usefulLinkerGroups = [
    { id: 'all',     emoji: '📚', name: 'Все' },
    { id: 'compare', emoji: '⚖️', name: 'Сравнить' },
    { id: 'explain', emoji: '🎯', name: 'Объяснить' }
];

const allTimeWords = [
    { en: 'Already', ru: 'уже', emoji: '✅', trans: '[ɔːlˈredi]', group: 'past' },
    { en: 'Yesterday', ru: 'вчера', emoji: '📅', trans: '[ˈjestədeɪ]', group: 'past' },
    { en: 'Yesterday morning', ru: 'вчера утром', emoji: '🌅', trans: '[ˈjestədeɪ ˈmɔːnɪŋ]', group: 'past' },
    { en: 'Long ago', ru: 'давно', emoji: '🏛️', trans: '[lɒŋ əˈɡəʊ]', group: 'past' },
    { en: 'Not long ago', ru: 'недавно', emoji: '⏱️', trans: '[nɒt lɒŋ əˈɡəʊ]', group: 'past' },
    { en: 'Day before yesterday', ru: 'позавчера', emoji: '📆', trans: '[deɪ bɪˈfɔː ˈjestədeɪ]', group: 'past' },
    { en: 'Then', ru: 'тогда', emoji: '👉', trans: '[ðen]', group: 'past' },
    { en: 'It is early', ru: 'рано', emoji: '🐓', trans: '[ɪt ɪz ˈɜːli]', group: 'past' },
    { en: 'In time', ru: 'вовремя', emoji: '⏰', trans: '[ɪn taɪm]', group: 'past' },
    { en: 'Last week', ru: 'на прошлой неделе', emoji: '⬅️', trans: '[lɑːst wiːk]', group: 'past' },
    { en: 'Always', ru: 'всегда', emoji: '♾️', trans: '[ˈɔːlweɪz]', group: 'present' },
    { en: 'Now', ru: 'сейчас', emoji: '▶️', trans: '[naʊ]', group: 'present' },
    { en: 'Today', ru: 'сегодня', emoji: '☀️', trans: '[təˈdeɪ]', group: 'present' },
    { en: 'Sometimes', ru: 'иногда', emoji: '🎲', trans: '[ˈsʌmtaɪmz]', group: 'present' },
    { en: 'When', ru: 'когда', emoji: '❓', trans: '[wen]', group: 'present' },
    { en: 'Ever', ru: 'когда-либо, всегда', emoji: '✨', trans: '[ˈevə]', group: 'present' },
    { en: 'Right away', ru: 'немедленно', emoji: '⚡', trans: '[raɪt əˈweɪ]', group: 'present' },
    { en: 'Never', ru: 'никогда', emoji: '🚫', trans: '[ˈnevə]', group: 'present' },
    { en: 'Often', ru: 'часто', emoji: '🔁', trans: '[ˈɒfn]', group: 'present' },
    { en: 'Just', ru: 'только что', emoji: '💫', trans: '[dʒʌst]', group: 'present' },
    { en: 'Seldom', ru: 'редко', emoji: '🌘', trans: '[ˈseldəm]', group: 'present' },
    { en: 'Every day', ru: 'каждый день', emoji: '📅', trans: '[ˈevri deɪ]', group: 'present' },
    { en: 'Every year', ru: 'каждый год', emoji: '🗓️', trans: '[ˈevri jɪə]', group: 'present' },
    { en: 'This week', ru: 'на этой неделе', emoji: '📍', trans: '[ðɪs wiːk]', group: 'present' },
    { en: 'Tomorrow', ru: 'завтра', emoji: '🌤️', trans: '[təˈmɒrəʊ]', group: 'future' },
    { en: 'Tomorrow night', ru: 'завтра ночью', emoji: '🌙', trans: '[təˈmɒrəʊ naɪt]', group: 'future' },
    { en: 'It is late', ru: 'поздно', emoji: '🌌', trans: '[ɪt ɪz leɪt]', group: 'future' },
    { en: 'Day after tomorrow', ru: 'послезавтра', emoji: '📅', trans: '[deɪ ˈɑːftə təˈmɒrəʊ]', group: 'future' },
    { en: 'In two days', ru: 'через два дня', emoji: '2️⃣', trans: '[ɪn tuː deɪz]', group: 'future' },
    { en: 'In a week', ru: 'через неделю', emoji: '📆', trans: '[ɪn ə wiːk]', group: 'future' },
    { en: 'In a month', ru: 'через месяц', emoji: '🗓️', trans: '[ɪn ə mʌnθ]', group: 'future' },
    { en: 'In a year', ru: 'через год', emoji: '📅', trans: '[ɪn ə jɪə]', group: 'future' },
    { en: 'In a few years', ru: 'через несколько лет', emoji: '🔮', trans: '[ɪn ə fjuː jɪəz]', group: 'future' },
    { en: 'Next week', ru: 'на следующей неделе', emoji: '➡️', trans: '[nekst wiːk]', group: 'future' }
];

const allTimeWordGroups = [
    { id: 'all',     emoji: '📚', name: 'Все',        color: '#c49a6c' },
    { id: 'past',    emoji: '⏪', name: 'Прошлое',    color: '#8b6946' },
    { id: 'present', emoji: '⏺️', name: 'Настоящее',  color: '#6b8e23' },
    { id: 'future',  emoji: '⏩', name: 'Будущее',    color: '#b97f44' }
];

const timePrepositions = [
    { prep: 'at', emoji: '🕐', color: '#8b6946',
      usage: 'для точного времени (часы, минуты, конкретный момент)', short: 'точное время',
      example: { en: 'I\'ll see you <b>at</b> 7 o\'clock.', ru: 'Увидимся в 7 часов.' } },
    { prep: 'in', emoji: '📅', color: '#6b8e23',
      usage: 'для месяцев, лет, сезонов, частей дня, длительных периодов', short: 'месяцы, годы',
      example: { en: 'We\'ll travel <b>in</b> July.', ru: 'Мы поедем в июле.' } },
    { prep: 'by', emoji: '⏱️', color: '#b97f44',
      usage: 'означает «к определённому времени», «не позже»', short: 'к моменту',
      example: { en: 'I\'ll finish it <b>by</b> Monday.', ru: 'Я закончу это к понедельнику.' } },
    { prep: 'on', emoji: '📆', color: '#8b6946',
      usage: 'для дней недели и конкретных дат', short: 'дни и даты',
      example: { en: 'My birthday is <b>on</b> May 5th.', ru: 'Мой день рождения 5 мая.' } },
    { prep: 'till', emoji: '⏳', color: '#c49a6c',
      usage: 'означает «до (определённого момента)»', short: 'до момента',
      example: { en: 'Wait for me <b>till</b> 6 pm.', ru: 'Подожди меня до 6 вечера.' } },
    { prep: 'until', emoji: '🔚', color: '#c49a6c',
      usage: 'означает «до (определённого момента)», часто в отрицательных предложениях', short: 'до (в отрицаниях)',
      example: { en: 'I won\'t leave <b>until</b> you come back.', ru: 'Я не уйду, пока ты не вернёшься.' } },
    { prep: 'since', emoji: '📍', color: '#6b8e23',
      usage: 'указывает на начало действия в прошлом, которое продолжается сейчас', short: 'с какого момента',
      example: { en: 'I\'ve been here <b>since</b> 2020.', ru: 'Я здесь с 2020 года.' } },
    { prep: 'for', emoji: '⏰', color: '#6b8e23',
      usage: 'указывает на длительность действия', short: 'длительность',
      example: { en: 'I\'ve lived here <b>for</b> 4 years.', ru: 'Я живу здесь 4 года.' } },
    { prep: 'between', emoji: '↔️', color: '#b97f44',
      usage: 'между двумя моментами времени', short: 'между',
      example: { en: 'The meeting is <b>between</b> 2 and 4 pm.', ru: 'Встреча между 2 и 4 часами.' } },
    { prep: 'during', emoji: '🎬', color: '#8b6946',
      usage: 'во время какого-то периода, события', short: 'во время',
      example: { en: 'I read a lot <b>during</b> the holidays.', ru: 'Я много читаю во время каникул.' } },
    { prep: 'before', emoji: '⬅️', color: '#c49a6c',
      usage: 'до какого-то момента времени', short: 'до',
      example: { en: 'Please finish it <b>before</b> 5 pm.', ru: 'Пожалуйста, закончи это до 5 вечера.' } },
    { prep: 'after', emoji: '➡️', color: '#c49a6c',
      usage: 'после какого-то момента времени', short: 'после',
      example: { en: 'Let\'s meet <b>after</b> class.', ru: 'Давай встретимся после уроков.' } },
    { prep: 'through', emoji: '🌙', color: '#8b6946',
      usage: 'с начала и до конца какого-то периода', short: 'насквозь',
      example: { en: 'We worked <b>through</b> the night.', ru: 'Мы работали всю ночь напролёт.' } }
];

const timePrepositionCheatsheet = [
    { rule: 'ON — для дней и дат',              detail: 'on Monday, on June 10th',           emoji: '📆' },
    { rule: 'IN — для месяцев, лет и сезонов',  detail: 'in May, in 2024, in summer',       emoji: '📅' },
    { rule: 'AT — для точного времени',         detail: 'at 7 o\'clock, at noon, at night', emoji: '🕐' },
    { rule: 'BY — к какому-то моменту',         detail: 'by Friday, by 5 pm',                emoji: '⏱️' },
    { rule: 'TILL/UNTIL — до момента',          detail: 'till 5 pm, until the end',          emoji: '⏳' },
    { rule: 'SINCE — точка старта',             detail: 'since 2019, since morning',         emoji: '📍' },
    { rule: 'FOR — сам период',                 detail: 'for 2 hours, for a long time',      emoji: '⏰' },
    { rule: 'BETWEEN — между двумя точками',    detail: 'between 1 and 4',                   emoji: '↔️' },
    { rule: 'DURING — во время события',        detail: 'during the lesson, during the summer', emoji: '🎬' },
    { rule: 'BEFORE / AFTER — до и после',      detail: 'before lunch, after school',        emoji: '⬅️➡️' },
    { rule: 'THROUGH — сквозь период',          detail: 'through the weekend, through December', emoji: '🌙' }
];

const usefulAbbreviations = [
    { abbr: 'a.m.',  meaning: 'до полудня (до 12:00)',        emoji: '🌅' },
    { abbr: 'p.m.',  meaning: 'после полудня (после 12:00)',  emoji: '🌇' },
    { abbr: 'e.g.',  meaning: 'например',                      emoji: '💡' },
    { abbr: 'i.e.',  meaning: 'то есть',                       emoji: '🎯' },
    { abbr: 'etc.',  meaning: 'и так далее',                   emoji: '➕' }
];

const questionWords = [
    { en: 'How', ru: 'как', emoji: '🤔', group: 'basic', trans: '[haʊ]',
      example: { en: '<b>How</b> are you?', ru: 'Как ты?' } },
    { en: 'What', ru: 'что / какой', emoji: '❓', group: 'basic', trans: '[wɒt]',
      example: { en: '<b>What</b> is this?', ru: 'Что это?' } },
    { en: 'When', ru: 'когда', emoji: '⏰', group: 'basic', trans: '[wen]',
      example: { en: '<b>When</b> do you wake up?', ru: 'Когда ты просыпаешься?' } },
    { en: 'Where', ru: 'где / куда', emoji: '📍', group: 'basic', trans: '[weə]',
      example: { en: '<b>Where</b> do you live?', ru: 'Где ты живёшь?' } },
    { en: 'Which', ru: 'который / какой из', emoji: '🔀', group: 'basic', trans: '[wɪtʃ]',
      example: { en: '<b>Which</b> one do you want?', ru: 'Который ты хочешь?' } },
    { en: 'Who', ru: 'кто', emoji: '👤', group: 'basic', trans: '[huː]',
      example: { en: '<b>Who</b> is that?', ru: 'Кто это?' } },
    { en: 'Whom', ru: 'кого / кому', emoji: '👥', group: 'basic', trans: '[huːm]',
      example: { en: '<b>Whom</b> did you see?', ru: 'Кого ты видел?' } },
    { en: 'Whose', ru: 'чей', emoji: '🔑', group: 'basic', trans: '[huːz]',
      example: { en: '<b>Whose</b> bag is this?', ru: 'Чья это сумка?' } },
    { en: 'Why', ru: 'почему', emoji: '💭', group: 'basic', trans: '[waɪ]',
      example: { en: '<b>Why</b> are you late?', ru: 'Почему ты опоздал?' } },
    { en: 'How far', ru: 'как далеко', emoji: '📏', group: 'how', trans: '[haʊ fɑː]',
      example: { en: '<b>How far</b> is the station?', ru: 'Как далеко вокзал?' } },
    { en: 'How long', ru: 'как долго', emoji: '⏳', group: 'how', trans: '[haʊ lɒŋ]',
      example: { en: '<b>How long</b> does it take?', ru: 'Сколько это занимает времени?' } },
    { en: 'How old', ru: 'сколько лет', emoji: '🎂', group: 'how', trans: '[haʊ əʊld]',
      example: { en: '<b>How old</b> are you?', ru: 'Сколько тебе лет?' } },
    { en: 'How many', ru: 'сколько (исчисл.)', emoji: '🔢', group: 'how', trans: '[haʊ ˈmeni]',
      example: { en: '<b>How many</b> books do you have?', ru: 'Сколько у тебя книг?' } },
    { en: 'How much', ru: 'сколько (неисчисл.)', emoji: '💰', group: 'how', trans: '[haʊ mʌtʃ]',
      example: { en: '<b>How much</b> does it cost?', ru: 'Сколько это стоит?' } }
];

const questionWordGroups = [
    { id: 'all',   emoji: '📚', name: 'Все' },
    { id: 'basic', emoji: '❓', name: 'Основные' },
    { id: 'how',   emoji: '📏', name: 'How + ...' }
];

// ───────────────────────────────────────────────────────────
// ОБУЧАЮЩИЕ МОДУЛИ — ДАННЫЕ
// ───────────────────────────────────────────────────────────
const wordBuilderKit = [
    {
        base: 'happy', emoji: '😊', ru: 'счастливый',
        forms: [
            { word: 'unhappy',    affix: 'un-',   meaning: 'несчастный',       emoji: '😢' },
            { word: 'happiness',  affix: '-ness', meaning: 'счастье',          emoji: '💠' },
            { word: 'happily',    affix: '-ly',   meaning: 'счастливо',        emoji: '🌞' },
            { word: 'happier',    affix: '-er',   meaning: 'счастливее',       emoji: '⬆️' },
            { word: 'happiest',   affix: '-est',  meaning: 'самый счастливый', emoji: '🏆' }
        ]
    },
    {
        base: 'care', emoji: '💗', ru: 'забота',
        forms: [
            { word: 'careful',    affix: '-ful',  meaning: 'осторожный',   emoji: '🧐' },
            { word: 'careless',   affix: '-less', meaning: 'безалаберный', emoji: '🙈' },
            { word: 'carefully',  affix: '-ly',   meaning: 'осторожно',    emoji: '🐢' },
            { word: 'caring',     affix: '-ing',  meaning: 'заботливый',   emoji: '🤗' }
        ]
    },
    {
        base: 'help', emoji: '🤝', ru: 'помощь',
        forms: [
            { word: 'helpful',    affix: '-ful',  meaning: 'полезный',    emoji: '✅' },
            { word: 'helpless',   affix: '-less', meaning: 'беспомощный', emoji: '😰' },
            { word: 'helper',     affix: '-er',   meaning: 'помощник',    emoji: '🧑‍🔧' },
            { word: 'helping',    affix: '-ing',  meaning: 'помогающий',  emoji: '💪' }
        ]
    },
    {
        base: 'create', emoji: '🎨', ru: 'создавать',
        forms: [
            { word: 'creative',   affix: '-ive',  meaning: 'творческий',    emoji: '🌈' },
            { word: 'creation',   affix: '-ion',  meaning: 'создание',      emoji: '🏗️' },
            { word: 'creator',    affix: '-or',   meaning: 'создатель',     emoji: '🧑‍🎨' },
            { word: 'creativity', affix: '-ity',  meaning: 'креативность',  emoji: '💡' }
        ]
    }
];

const suffixCheatsheet = [
    { pos: 'noun', emoji: '📦', name: 'СУЩЕСТВИТЕЛЬНОЕ', color: '#6b8e23',
      suffixes: ['-tion', '-sion', '-ment', '-ness', '-ity', '-ance', '-ence', '-er', '-or', '-ist', '-ism', '-hood', '-ship', '-age'],
      hint: 'Если нужен предмет/явление — выбирай из этих.' },
    { pos: 'verb', emoji: '⚡', name: 'ГЛАГОЛ', color: '#b97f44',
      suffixes: ['-ize', '-ise', '-ify', '-en', '-ate'],
      hint: 'Если действие — используй эти суффиксы.' },
    { pos: 'adjective', emoji: '🎨', name: 'ПРИЛАГАТЕЛЬНОЕ', color: '#c49a6c',
      suffixes: ['-ful', '-less', '-ous', '-ive', '-able', '-ible', '-al', '-ic', '-y', '-ish'],
      hint: 'Если описываем предмет — это прилагательное.' },
    { pos: 'adverb', emoji: '💨', name: 'НАРЕЧИЕ', color: '#8b6946',
      suffixes: ['-ly', '-ward', '-wards', '-wise'],
      hint: 'Если описываем действие — наречие.' }
];

const wordChains = [
    { emoji: '🔗', chain: ['care', 'careful', 'carefully'],              ru: 'забота → осторожный → осторожно' },
    { emoji: '🔗', chain: ['happy', 'unhappy', 'happiness'],             ru: 'счастливый → несчастный → счастье' },
    { emoji: '🔗', chain: ['create', 'creative', 'creativity'],          ru: 'создавать → творческий → креативность' },
    { emoji: '🔗', chain: ['hope', 'hopeful', 'hopeless', 'hopelessly'], ru: 'надежда → полный надежды → безнадёжный → безнадёжно' },
    { emoji: '🔗', chain: ['use', 'useful', 'useless', 'usefully'],      ru: 'пользоваться → полезный → бесполезный → с пользой' },
    { emoji: '🔗', chain: ['music', 'musician', 'musical'],              ru: 'музыка → музыкант → музыкальный' },
    { emoji: '🔗', chain: ['real', 'really', 'reality', 'realize'],      ru: 'реальный → реально → реальность → осознать' }
];

const flipCards = [
    { front: 'un-',           back: 'НЕ / обратное действие',  emoji: '🚫', example: 'unhappy = несчастный' },
    { front: '-ful',          back: 'ПОЛНЫЙ чего-то',          emoji: '💯', example: 'careful = осторожный' },
    { front: '-less',         back: 'БЕЗ чего-то',             emoji: '🚫', example: 'careless = безалаберный' },
    { front: '-ly',           back: 'ОБРАЗ ДЕЙСТВИЯ',          emoji: '🐌', example: 'slowly = медленно' },
    { front: '-er / -or',     back: 'ТОТ, КТО ДЕЛАЕТ',         emoji: '👤', example: 'teacher = учитель' },
    { front: 're-',           back: 'СНОВА / ОБРАТНО',         emoji: '🔄', example: 'rewrite = переписать' },
    { front: '-tion',         back: 'ПРОЦЕСС / РЕЗУЛЬТАТ',     emoji: '📜', example: 'creation = создание' },
    { front: 'pre-',          back: 'ДО / ЗАРАНЕЕ',            emoji: '⏪', example: 'preview = предпросмотр' },
    { front: 'mis-',          back: 'НЕПРАВИЛЬНО',             emoji: '⚠️', example: 'mistake = ошибка' },
    { front: '-ness',         back: 'СОСТОЯНИЕ',               emoji: '💠', example: 'kindness = доброта' }
];

const ruleReminders = [
    { emoji: '📏', rule: 'После <b>-ful</b>, <b>-ous</b>, <b>-ive</b> — суффикс <b>-ly</b>.',
      example: 'careful → carefully' },
    { emoji: '📏', rule: 'Двойная согласная перед <b>-ing</b>, <b>-ed</b>, если ударение на последний слог.',
      example: 'run → running, stop → stopped' },
    { emoji: '📏', rule: '<b>-y</b> меняется на <b>-i</b> перед <b>-ly</b>, <b>-ness</b>, <b>-er</b>.',
      example: 'happy → happily, happiness' },
    { emoji: '📏', rule: 'Немая <b>e</b> исчезает перед <b>-ing</b>, <b>-able</b>.',
      example: 'create → creating, use → usable' },
    { emoji: '📏', rule: '<b>-ic</b> → <b>-ically</b> для наречий.',
      example: 'automatic → automatically' }
];

const affixTrainer = [
    { q: 'Какое слово — существительное?', options: ['create', 'creation', 'creative'], correct: 1, hint: '-ion = сущ.' },
    { q: 'Какое слово — наречие?',         options: ['quick', 'quickly', 'quickness'],  correct: 1, hint: '-ly = наречие' },
    { q: 'Что значит <b>unbelievable</b>?', options: ['верящий', 'невероятный', 'вера'], correct: 1, hint: 'un + believe + able' },
    { q: 'Из чего состоит <b>disagreement</b>?', options: ['dis+agree+ment', 'dis+agreement', 'dis+gree'], correct: 0, hint: 'dis (не) + agree (соглашаться) + ment (сущ.)' },
    { q: 'Какое слово значит "полезный"?',  options: ['use', 'useful', 'useless'],     correct: 1, hint: '-ful = полный' },
    { q: 'Какое слово значит "бесполезный"?', options: ['use', 'useful', 'useless'],   correct: 2, hint: '-less = без' },
    { q: 'Что означает приставка <b>over-</b>?', options: ['под', 'слишком', 'между'], correct: 1, hint: 'overwork = перерабатывать' },
    { q: 'Где приставка, а не суффикс?',    options: ['kindness', 'unhappy', 'slowly'], correct: 1, hint: 'un- ставится в начало' }
];

const commonMistakes = [
    { wrong: 'I am agree',       right: 'I agree',            why: 'agree — уже глагол, не нужен "am"' },
    { wrong: 'I have 20 years',  right: "I am 20 years old",  why: 'О возрасте — только be' },
    { wrong: 'advices',          right: 'advice (неисчисл.)', why: 'advice без -s' },
    { wrong: 'informations',     right: 'information',        why: 'information неисчисл.' },
    { wrong: 'I very like',      right: 'I like it very much', why: 'very не ставится перед глаголом' },
    { wrong: 'on the picture',   right: 'in the picture',     why: 'на картине = in the picture' },
    { wrong: 'explain me',       right: 'explain to me',      why: 'explain требует to' }
];

const speechDrill = [
    { en: 'unhappy, unhappy, unhappy', ru: 'повтори 3 раза' },
    { en: 'careful — carefully',       ru: 'различие' },
    { en: 'rewrite, reread, restart',  ru: 'серия re-' },
    { en: 'impossible, important',     ru: 'im- перед p/m' },
    { en: 'beautiful, wonderful',      ru: 'суффикс -ful' },
    { en: 'happiness, kindness',       ru: '-ness слова' }
];

const powerPrefixes = [
    { affix: 'un-',    ru: 'НЕ',           top5: ['unhappy', 'unfair', 'unknown', 'unable', 'unusual'] },
    { affix: 're-',    ru: 'СНОВА',        top5: ['rewrite', 'restart', 'reopen', 'rebuild', 'rethink'] },
    { affix: 'dis-',   ru: 'НЕ',           top5: ['disagree', 'dislike', 'disconnect', 'disappear', 'disorder'] },
    { affix: 'over-',  ru: 'СЛИШКОМ',      top5: ['overwork', 'overtake', 'overeat', 'overthink', 'overcook'] },
    { affix: 'under-', ru: 'НЕДОСТАТОЧНО', top5: ['undercook', 'underpay', 'undercount', 'underwork', 'underrate'] },
    { affix: 'mis-',   ru: 'НЕПРАВИЛЬНО',  top5: ['mistake', 'misspell', 'misread', 'misunderstand', 'misbehave'] },
    { affix: 'out-',   ru: 'ПРЕВОСХОДИТЬ', top5: ['outrun', 'outsmart', 'outlive', 'outperform', 'outnumber'] },
    { affix: 'sub-',   ru: 'ПОД',          top5: ['subway', 'submarine', 'subtitle', 'subzero', 'subset'] }
];

const affixMap = {
    negate: {
        emoji: '❌', title: 'ОТРИЦАНИЕ', color: '#b93a3a',
        desc: 'Приставки, которые говорят "НЕ".',
        affixes: [
            { a: 'un-',    hint: 'самый частый', ex: 'unhappy, unknown' },
            { a: 'in-',    hint: 'латинский',    ex: 'invisible' },
            { a: 'im-',    hint: 'перед m/p',    ex: 'impossible' },
            { a: 'il-',    hint: 'перед l',      ex: 'illegal' },
            { a: 'ir-',    hint: 'перед r',      ex: 'irregular' },
            { a: 'dis-',   hint: 'разделение',   ex: 'disagree' },
            { a: 'non-',   hint: 'книжный',      ex: 'nonsense' },
            { a: 'mis-',   hint: 'ошибочно',     ex: 'mistake' },
            { a: 'anti-',  hint: 'против',       ex: 'antivirus' },
            { a: 'counter-', hint: 'против',     ex: 'counterattack' }
        ]
    },
    repeat: {
        emoji: '🔄', title: 'ПОВТОРЕНИЕ / ВОЗВРАТ', color: '#6b8e23',
        desc: 'Действие снова или назад.',
        affixes: [
            { a: 're-',    hint: 'снова',     ex: 'rewrite' },
            { a: 'back',   hint: 'назад',     ex: 'come back' },
            { a: 'over-',  hint: 'переделать', ex: 'overdo' }
        ]
    },
    place: {
        emoji: '📍', title: 'МЕСТО И НАПРАВЛЕНИЕ', color: '#b97f44',
        desc: 'Где? Куда? Откуда?',
        affixes: [
            { a: 'in-',    hint: 'внутрь',  ex: 'import' },
            { a: 'ex-',    hint: 'наружу',  ex: 'export' },
            { a: 'sub-',   hint: 'под',     ex: 'subway' },
            { a: 'super-', hint: 'над',     ex: 'supervise' },
            { a: 'inter-', hint: 'между',   ex: 'international' },
            { a: 'trans-', hint: 'через',   ex: 'transport' },
            { a: 'circum-',hint: 'вокруг',  ex: 'circumstance' },
            { a: 'peri-',  hint: 'вокруг',  ex: 'perimeter' },
            { a: 'out-',   hint: 'наружу',  ex: 'outdoor' },
            { a: 'under-', hint: 'под',     ex: 'underground' }
        ]
    },
    time: {
        emoji: '⏰', title: 'ВРЕМЯ', color: '#8b6946',
        desc: 'До, после, во время.',
        affixes: [
            { a: 'pre-',  hint: 'до',       ex: 'preview' },
            { a: 'post-', hint: 'после',    ex: 'postpone' },
            { a: 'fore-', hint: 'заранее',  ex: 'forecast' },
            { a: 'ante-', hint: 'до',       ex: 'antechamber' },
            { a: 'neo-',  hint: 'новый',    ex: 'neon' }
        ]
    },
    number: {
        emoji: '🔢', title: 'КОЛИЧЕСТВО', color: '#c49a6c',
        desc: 'Сколько?',
        affixes: [
            { a: 'mono-',  hint: 'один',    ex: 'monopoly' },
            { a: 'uni-',   hint: 'один',    ex: 'uniform' },
            { a: 'bi-',    hint: 'два',     ex: 'bicycle' },
            { a: 'tri-',   hint: 'три',     ex: 'triangle' },
            { a: 'multi-', hint: 'много',   ex: 'multicultural' },
            { a: 'poly-',  hint: 'много',   ex: 'polygon' },
            { a: 'semi-',  hint: 'половина',ex: 'semicircle' },
            { a: 'omni-',  hint: 'всё',     ex: 'omnipotent' }
        ]
    },
    relation: {
        emoji: '🤝', title: 'ВЗАИМОДЕЙСТВИЕ', color: '#6b8e23',
        desc: 'Вместе, против, взаимно.',
        affixes: [
            { a: 'co-',    hint: 'вместе',  ex: 'cooperate' },
            { a: 'con-',   hint: 'вместе',  ex: 'connect' },
            { a: 'com-',   hint: 'вместе',  ex: 'combine' },
            { a: 'anti-',  hint: 'против',  ex: 'antisocial' },
            { a: 'pro-',   hint: 'за',      ex: 'proactive' },
            { a: 'auto-',  hint: 'сам',     ex: 'automatic' }
        ]
    }
};

const wordFamilies = [
    {
        root: 'act', emoji: '🎬', meaning: 'действовать',
        members: [
            { word: 'act',         pos: 'verb',      ru: 'действовать',   affix: '—' },
            { word: 'action',      pos: 'noun',      ru: 'действие',      affix: '-ion' },
            { word: 'active',      pos: 'adjective', ru: 'активный',      affix: '-ive' },
            { word: 'actively',    pos: 'adverb',    ru: 'активно',       affix: '-ly' },
            { word: 'activity',    pos: 'noun',      ru: 'деятельность',  affix: '-ity' },
            { word: 'actor',       pos: 'noun',      ru: 'актёр',         affix: '-or' },
            { word: 'react',       pos: 'verb',      ru: 'реагировать',   affix: 're-' },
            { word: 'reaction',    pos: 'noun',      ru: 'реакция',       affix: 're- + -ion' }
        ]
    },
    {
        root: 'beauty', emoji: '🌸', meaning: 'красота',
        members: [
            { word: 'beauty',      pos: 'noun',      ru: 'красота',       affix: '—' },
            { word: 'beautiful',   pos: 'adjective', ru: 'красивый',      affix: '-ful' },
            { word: 'beautifully', pos: 'adverb',    ru: 'красиво',       affix: '-ful + -ly' },
            { word: 'beautify',    pos: 'verb',      ru: 'украшать',      affix: '-ify' },
            { word: 'beautician',  pos: 'noun',      ru: 'косметолог',    affix: '-ician' }
        ]
    },
    {
        root: 'nation', emoji: '🌍', meaning: 'нация',
        members: [
            { word: 'nation',         pos: 'noun',      ru: 'нация',           affix: '—' },
            { word: 'national',       pos: 'adjective', ru: 'национальный',    affix: '-al' },
            { word: 'nationally',     pos: 'adverb',    ru: 'по всей стране',  affix: '-al + -ly' },
            { word: 'nationality',    pos: 'noun',      ru: 'национальность',  affix: '-ality' },
            { word: 'international',  pos: 'adjective', ru: 'международный',   affix: 'inter-' },
            { word: 'nationalize',    pos: 'verb',      ru: 'национализировать', affix: '-ize' }
        ]
    },
    {
        root: 'produce', emoji: '🏭', meaning: 'производить',
        members: [
            { word: 'produce',     pos: 'verb',      ru: 'производить',  affix: '—' },
            { word: 'product',     pos: 'noun',      ru: 'продукт',      affix: '-t' },
            { word: 'production',  pos: 'noun',      ru: 'производство', affix: '-ion' },
            { word: 'productive',  pos: 'adjective', ru: 'продуктивный', affix: '-ive' },
            { word: 'productivity',pos: 'noun',      ru: 'производительность', affix: '-ivity' },
            { word: 'producer',    pos: 'noun',      ru: 'производитель',affix: '-er' },
            { word: 'reproduce',   pos: 'verb',      ru: 'воспроизводить', affix: 're-' }
        ]
    },
    {
        root: 'move', emoji: '🏃', meaning: 'двигать',
        members: [
            { word: 'move',        pos: 'verb',      ru: 'двигать',       affix: '—' },
            { word: 'movement',    pos: 'noun',      ru: 'движение',      affix: '-ment' },
            { word: 'movable',     pos: 'adjective', ru: 'подвижный',     affix: '-able' },
            { word: 'remove',      pos: 'verb',      ru: 'убирать',       affix: 're-' },
            { word: 'removal',     pos: 'noun',      ru: 'удаление',      affix: 're- + -al' },
            { word: 'unmoved',     pos: 'adjective', ru: 'неподвижный',   affix: 'un-' },
            { word: 'immovable',   pos: 'adjective', ru: 'недвижимый',    affix: 'im- + -able' }
        ]
    }
];

const oppositeAffixes = [
    { pair: ['un-', '-'],            emoji: '⚖️', ex1: 'happy',          ex2: 'unhappy',          ru: 'счастливый → несчастный' },
    { pair: ['-ful', '-less'],       emoji: '⚖️', ex1: 'careful',        ex2: 'careless',         ru: 'осторожный → беззаботный' },
    { pair: ['in-', 'out-'],         emoji: '⚖️', ex1: 'inside',         ex2: 'outside',          ru: 'внутри → снаружи' },
    { pair: ['up-', 'down-'],        emoji: '⚖️', ex1: 'upstairs',       ex2: 'downstairs',       ru: 'наверх → вниз' },
    { pair: ['over-', 'under-'],     emoji: '⚖️', ex1: 'overcook',       ex2: 'undercook',        ru: 'переварить → недоварить' },
    { pair: ['pre-', 'post-'],       emoji: '⚖️', ex1: 'prewar',         ex2: 'postwar',          ru: 'довоенный → послевоенный' },
    { pair: ['macro-', 'micro-'],    emoji: '⚖️', ex1: 'macroeconomics', ex2: 'microeconomics',   ru: 'макроэкономика → микроэкономика' },
    { pair: ['maxi-', 'mini-'],      emoji: '⚖️', ex1: 'maxiskirt',      ex2: 'miniskirt',        ru: 'макси → мини' },
    { pair: ['hyper-', 'hypo-'],     emoji: '⚖️', ex1: 'hypertension',   ex2: 'hypotension',      ru: 'гипертония → гипотония' },
    { pair: ['super-', 'sub-'],      emoji: '⚖️', ex1: 'superstructure', ex2: 'substructure',     ru: 'надстройка → подструктура' }
];

const converterRules = [
    { from: 'noun',  to: 'verb',      suffix: '-ize',  emoji: '⚡', ex1: 'modern',   ex2: 'modernize' },
    { from: 'noun',  to: 'adjective', suffix: '-al',   emoji: '🎨', ex1: 'nation',   ex2: 'national' },
    { from: 'verb',  to: 'noun',      suffix: '-tion', emoji: '📦', ex1: 'inform',   ex2: 'information' },
    { from: 'verb',  to: 'noun',      suffix: '-ment', emoji: '📦', ex1: 'develop',  ex2: 'development' },
    { from: 'adj',   to: 'adverb',    suffix: '-ly',   emoji: '💨', ex1: 'quick',    ex2: 'quickly' },
    { from: 'adj',   to: 'noun',      suffix: '-ness', emoji: '💠', ex1: 'happy',    ex2: 'happiness' },
    { from: 'adj',   to: 'verb',      suffix: '-en',   emoji: '⚡', ex1: 'wide',     ex2: 'widen' },
    { from: 'verb',  to: 'adjective', suffix: '-ive',  emoji: '🎨', ex1: 'create',   ex2: 'creative' },
    { from: 'verb',  to: 'adjective', suffix: '-able', emoji: '🎨', ex1: 'read',     ex2: 'readable' },
    { from: 'noun',  to: 'verb',      suffix: '-ify',  emoji: '⚡', ex1: 'beauty',   ex2: 'beautify' }
];

const converterExercises = [
    { word: 'happy',   from: 'adj',  targets: [{ to: 'adverb', correct: 'happily',   wrong: ['happyly', 'happiley'] }, { to: 'noun', correct: 'happiness', wrong: ['happyness', 'happines'] }] },
    { word: 'careful', from: 'adj',  targets: [{ to: 'adverb', correct: 'carefully', wrong: ['carefuly', 'carefulley'] }] },
    { word: 'quick',   from: 'adj',  targets: [{ to: 'adverb', correct: 'quickly',   wrong: ['quickely', 'quikly'] }] },
    { word: 'nation',  from: 'noun', targets: [{ to: 'adjective', correct: 'national', wrong: ['nationable', 'nationic'] }] },
    { word: 'beauty',  from: 'noun', targets: [{ to: 'verb', correct: 'beautify', wrong: ['beautyize', 'beauten'] }] },
    { word: 'inform',  from: 'verb', targets: [{ to: 'noun', correct: 'information', wrong: ['informment', 'informion'] }] }
];

const miniQuizzes = [
    {
        id: 'prefixes-basic', emoji: '🧩', title: 'Приставки: базовый',
        questions: [
            { q: 'Что означает <b>re-</b>?', options: ['снова', 'против', 'под'], correct: 0, hint: 'rewrite = переписать' },
            { q: 'Что означает <b>mis-</b>?', options: ['много', 'неправильно', 'между'], correct: 1, hint: 'mistake = ошибка' },
            { q: 'Что означает <b>un-</b>?', options: ['очень', 'не / обратное действие', 'до'], correct: 1, hint: 'unhappy' }
        ]
    },
    {
        id: 'suffixes-basic', emoji: '🧩', title: 'Суффиксы: базовый',
        questions: [
            { q: 'Суффикс <b>-er</b> создаёт...', options: ['наречие', 'того, кто делает', 'прилагательное'], correct: 1, hint: 'teacher, worker' },
            { q: 'Суффикс <b>-ly</b> создаёт...', options: ['наречие', 'существительное', 'глагол'], correct: 0, hint: 'quickly' },
            { q: 'Суффикс <b>-ful</b> означает...', options: ['без', 'полный', 'много'], correct: 1, hint: 'beautiful, useful' }
        ]
    }
];

const miniDialogues = [
    {
        emoji: '⏪', affix: 'pre-', title: 'Планируем заранее',
        lines: [
            { who: 'A', en: "Let's <b>pre</b>pare dinner!", ru: 'Давай приготовим ужин!' },
            { who: 'B', en: 'OK, I <b>pre</b>fer pasta.', ru: 'Ок, я предпочитаю пасту.' },
            { who: 'A', en: 'Can you <b>pre</b>dict the time?', ru: 'Можешь предсказать время?' }
        ]
    },
    {
        emoji: '🔄', affix: 're-', title: 'Повторить ещё раз',
        lines: [
            { who: 'A', en: 'Please <b>re</b>peat after me.', ru: 'Повтори за мной.' },
            { who: 'B', en: 'OK. And then?', ru: 'Ок. А потом?' },
            { who: 'A', en: '<b>Re</b>write the sentence.', ru: 'Перепиши предложение.' }
        ]
    }
];

const memoryHooks = [
    { affix: 're-',   emoji: '🔁', hint: 'кнопка "replay" ▶️🔁 на плеере' },
    { affix: 'un-',   emoji: '🚫', hint: 'знак "запрещено" на двери' },
    { affix: 'dis-',  emoji: '💔', hint: 'разбитое сердце = dis' },
    { affix: 'pre-',  emoji: '📅', hint: 'дата "до" в календаре' },
    { affix: '-er',   emoji: '🧑‍🏫', hint: 'человек с профессией' },
    { affix: '-ly',   emoji: '🐌', hint: 'slowly = медленно, как улитка' },
    { affix: '-ful',  emoji: '🍷', hint: 'полный бокал = -ful' },
    { affix: '-less', emoji: '🥛', hint: 'пустой стакан = -less' }
];

const quickTips = [
    { emoji: '💡', tip: '<b>un-</b> ставим перед прилагательными: unhappy, unknown, unfair.' },
    { emoji: '💡', tip: '<b>im-</b> — только перед m, p: impossible, immoral.' },
    { emoji: '💡', tip: '<b>-er</b> — человек, <b>-ing</b> — процесс, <b>-tion</b> — результат.' },
    { emoji: '💡', tip: 'make = создать новое; do = выполнить работу.' },
    { emoji: '💡', tip: 'Если действие повторяется — <b>re-</b>.' },
    { emoji: '💡', tip: '-ly = "как?" → наречие. quick → quickly.' }
];

const wordOfTheDay = [
    { word: 'outstanding', emoji: '⭐', affix: 'out-', why: 'Топ-1000 для IELTS', tip: 'Out + standing = стоит выше всех.' },
    { word: 'supervisor', emoji: '👔', affix: 'super-', why: 'Часто в резюме', tip: 'Super + visor = тот, кто смотрит сверху.' },
    { word: 'unbelievable', emoji: '🤯', affix: 'un-', why: 'Эмоциональное восклицание', tip: 'Un + believe + able.' }
];

const learningPath = [
    { step: 1, emoji: '🌱', title: 'Основные приставки', ids: ['un','re','dis','pre','mis'] },
    { step: 2, emoji: '⚙️', title: 'Основные суффиксы', ids: ['er','ing','ly','ed','ful','less'] },
    { step: 3, emoji: '🎩', title: 'Волшебные глаголы', ids: ['get','have','take','make','go','come','look'] },
    { step: 4, emoji: '🌳', title: 'Корни-конструкторы', ids: ['port','ject','dict','spect','vis'] },
    { step: 5, emoji: '🧠', title: 'Не путай!', ids: ['make-do','say-tell'] }
];

// ───────────────────────────────────────────────────────────
// ПРАКТИКА — ДАННЫЕ
// ───────────────────────────────────────────────────────────
const miniStories = [
    {
        id: 'morning', emoji: '🌅', title: 'Утро программиста',
        affixes: ['re-', 'un-', 'pre-'],
        lines: [
            { en: 'Tom <b>un</b>locked his laptop.', ru: 'Том разблокировал ноутбук.' },
            { en: 'He <b>re</b>started the system.', ru: 'Он перезапустил систему.' },
            { en: 'He <b>pre</b>pared coffee first.', ru: 'Сначала он приготовил кофе.' },
            { en: 'The task seemed <b>im</b>possible.', ru: 'Задача казалась невозможной.' },
            { en: 'But Tom was <b>un</b>stoppable.', ru: 'Но Тома было не остановить.' },
            { en: 'He <b>re</b>wrote the code twice.', ru: 'Он переписал код дважды.' },
            { en: 'Finally — success! So <b>un</b>believable!', ru: 'Наконец — успех! Невероятно!' }
        ]
    },
    {
        id: 'weekend', emoji: '🏖️', title: 'Выходные на пляже',
        affixes: ['over-', 'under-', 'dis-'],
        lines: [
            { en: 'We decided to <b>over</b>sleep on Saturday.', ru: 'Мы решили поспать подольше в субботу.' },
            { en: 'The sun was <b>over</b>whelmingly bright.', ru: 'Солнце было ослепительно ярким.' },
            { en: 'Anna <b>dis</b>covered a quiet beach.', ru: 'Анна обнаружила тихий пляж.' },
            { en: 'We <b>under</b>estimated the walk.', ru: 'Мы недооценили прогулку.' },
            { en: 'But we didn\'t <b>dis</b>agree.', ru: 'Но мы не поссорились.' },
            { en: 'It was <b>out</b>standing!', ru: 'Это было потрясающе!' }
        ]
    },
    {
        id: 'exam', emoji: '📝', title: 'Экзамен',
        affixes: ['mis-', 'pre-', 're-'],
        lines: [
            { en: 'I <b>mis</b>read the first question.', ru: 'Я неправильно прочитал первый вопрос.' },
            { en: 'It was <b>un</b>fair — so tricky!', ru: 'Это было несправедливо — так сложно!' },
            { en: 'I <b>re</b>read it slowly.', ru: 'Я перечитал его медленно.' },
            { en: 'Then I <b>re</b>alized my <b>mis</b>take.', ru: 'Тогда я осознал свою ошибку.' },
            { en: 'I <b>re</b>wrote my answer.', ru: 'Я переписал ответ.' },
            { en: 'The result was <b>in</b>credible!', ru: 'Результат был невероятным!' }
        ]
    },
    {
        id: 'sport', emoji: '🏃', title: 'Марафон',
        affixes: ['out-', 'over-', 'under-'],
        lines: [
            { en: 'Ken wanted to <b>out</b>run everyone.', ru: 'Кен хотел обогнать всех.' },
            { en: 'He <b>over</b>trained the week before.', ru: 'Он перетренировался за неделю до.' },
            { en: 'His body was <b>under</b> pressure.', ru: 'Его тело было под нагрузкой.' },
            { en: 'But he didn\'t <b>give up</b>.', ru: 'Но он не сдался.' },
            { en: 'He finished with an <b>out</b>standing time.', ru: 'Он финишировал с выдающимся временем.' },
            { en: 'What an <b>un</b>forgettable day!', ru: 'Какой незабываемый день!' }
        ]
    },
    {
        id: 'cooking', emoji: '🍳', title: 'Ужин для друзей',
        affixes: ['over-', 'under-', 're-'],
        lines: [
            { en: 'Lisa decided to <b>re</b>create a family recipe.', ru: 'Лиза решила воссоздать семейный рецепт.' },
            { en: 'She <b>over</b>cooked the pasta a bit.', ru: 'Она немного переварила пасту.' },
            { en: 'The sauce was <b>under</b>salted.', ru: 'Соус был недосолен.' },
            { en: 'She <b>re</b>heated everything.', ru: 'Она всё подогрела.' },
            { en: 'Her guests were <b>un</b>believably kind.', ru: 'Её гости были невероятно добры.' },
            { en: 'It was a <b>dis</b>aster — but a fun one!', ru: 'Это была катастрофа — но весёлая!' }
        ]
    }
];

const dictationBank = [
    { level: 'easy',   emoji: '🌱', en: 'I am happy.',                                    ru: 'Я счастлив.',                  affix: '-y' },
    { level: 'easy',   emoji: '🌱', en: 'She is unhappy.',                                ru: 'Она несчастна.',               affix: 'un-' },
    { level: 'easy',   emoji: '🌱', en: 'We rewrite the text.',                           ru: 'Мы переписываем текст.',       affix: 're-' },
    { level: 'easy',   emoji: '🌱', en: 'The boy is careless.',                           ru: 'Мальчик беспечен.',            affix: '-less' },
    { level: 'easy',   emoji: '🌱', en: 'It is impossible.',                              ru: 'Это невозможно.',              affix: 'im-' },
    { level: 'easy',   emoji: '🌱', en: 'She is a teacher.',                              ru: 'Она учительница.',             affix: '-er' },
    { level: 'medium', emoji: '🌿', en: 'They misunderstood the question.',               ru: 'Они неправильно поняли вопрос.', affix: 'mis-' },
    { level: 'medium', emoji: '🌿', en: 'He overslept and missed the train.',             ru: 'Он проспал и опоздал на поезд.', affix: 'over-' },
    { level: 'medium', emoji: '🌿', en: 'We underestimated the difficulty.',              ru: 'Мы недооценили сложность.',     affix: 'under-' },
    { level: 'medium', emoji: '🌿', en: 'The performance was outstanding.',               ru: 'Выступление было выдающимся.',  affix: 'out-' },
    { level: 'medium', emoji: '🌿', en: 'They disagreed with the proposal.',              ru: 'Они не согласились с предложением.', affix: 'dis-' },
    { level: 'medium', emoji: '🌿', en: 'Communication is important.',                    ru: 'Общение важно.',                affix: '-tion' },
    { level: 'hard',   emoji: '🌳', en: 'Unbelievable but the announcement was postponed.', ru: 'Невероятно, но объявление было отложено.', affix: 'un-/post-' },
    { level: 'hard',   emoji: '🌳', en: 'Her happiness was overwhelming.',                ru: 'Её счастье было всепоглощающим.', affix: '-ness/over-' },
    { level: 'hard',   emoji: '🌳', en: 'The reorganization improved productivity.',      ru: 'Реорганизация улучшила производительность.', affix: 're-/-tion/-ity' },
    { level: 'hard',   emoji: '🌳', en: 'Intercultural communication is indispensable.',  ru: 'Межкультурное общение незаменимо.', affix: 'inter-/-able' },
    { level: 'hard',   emoji: '🌳', en: 'The supervisor\'s decision was irreversible.',   ru: 'Решение руководителя было необратимым.', affix: 'super-/-ible' }
];

const essayTemplates = {
    intro: {
        emoji: '🎬', title: 'Вступление', color: '#6b8e23',
        patterns: [
            { tpl: 'Nowadays, {topic} is a widely discussed issue.',           ru: 'В наши дни {topic} — широко обсуждаемая тема.' },
            { tpl: 'It is often argued that {topic}.',                         ru: 'Часто утверждают, что {topic}.' },
            { tpl: 'There is no doubt that {topic} plays an important role.',   ru: 'Несомненно, {topic} играет важную роль.' },
            { tpl: 'The problem of {topic} has become urgent today.',          ru: 'Проблема {topic} стала актуальной сегодня.' }
        ]
    },
    body1: {
        emoji: '📌', title: 'Аргумент 1', color: '#b97f44',
        patterns: [
            { tpl: 'First and foremost, {arg}.',                    ru: 'Прежде всего, {arg}.' },
            { tpl: 'The first reason why is simple: {arg}.',        ru: 'Первая причина проста: {arg}.' },
            { tpl: 'To begin with, it is worth saying that {arg}.', ru: 'Для начала стоит сказать, что {arg}.' }
        ]
    },
    body2: {
        emoji: '📌', title: 'Аргумент 2', color: '#c49a6c',
        patterns: [
            { tpl: 'Secondly, {arg}.',                              ru: 'Во-вторых, {arg}.' },
            { tpl: 'What is more, {arg}.',                          ru: 'Более того, {arg}.' },
            { tpl: 'Furthermore, {arg}.',                           ru: 'К тому же, {arg}.' }
        ]
    },
    contrast: {
        emoji: '⚖️', title: 'Контраргумент', color: '#b93a3a',
        patterns: [
            { tpl: 'However, some people believe that {arg}.',      ru: 'Однако некоторые считают, что {arg}.' },
            { tpl: 'On the other hand, {arg}.',                     ru: 'С другой стороны, {arg}.' },
            { tpl: 'Nevertheless, {arg}.',                          ru: 'Тем не менее, {arg}.' }
        ]
    },
    conclusion: {
        emoji: '🏁', title: 'Заключение', color: '#8b6946',
        patterns: [
            { tpl: 'In conclusion, I would say that {arg}.',        ru: 'В заключение я бы сказал, что {arg}.' },
            { tpl: 'To sum up, {arg}.',                             ru: 'Подводя итог, {arg}.' },
            { tpl: 'All in all, {arg}.',                            ru: 'В целом, {arg}.' }
        ]
    }
};

const essayTopics = [
    { emoji: '📱', topic: 'social media',         ru: 'социальные сети' },
    { emoji: '🚴', topic: 'sport and health',     ru: 'спорт и здоровье' },
    { emoji: '📚', topic: 'online education',     ru: 'онлайн-образование' },
    { emoji: '🌍', topic: 'climate change',       ru: 'изменение климата' },
    { emoji: '🎮', topic: 'video games',          ru: 'видеоигры' },
    { emoji: '💼', topic: 'remote work',          ru: 'удалённая работа' }
];
