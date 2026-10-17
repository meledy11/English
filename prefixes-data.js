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

// ═══════════════════════════════════════════════════════════
// 🆕 РАСШИРЕНИЕ БАЗЫ v2 — БОЛЬШОЕ ПОПОЛНЕНИЕ
// Просто вставьте этот блок В КОНЕЦ prefixes-data.js
// ═══════════════════════════════════════════════════════════

// ───────────────────────────────────────────────────────────
// 🆕 6 НОВЫХ ПРИСТАВОК
// ───────────────────────────────────────────────────────────
prefixes.push(
    { id: 'dia', type: 'prefix', affix: 'dia-', emoji: '↔️',
      meaning: 'ЧЕРЕЗ / СКВОЗЬ', assoc: 'dialogue = речь через',
      explanation: 'dia- означает "через" или "сквозь".',
      words: [
        { word: 'dialogue', transcription: '[ˈdaɪəlɒɡ]', trans: 'диалог', ex: 'Have a <b>dia</b>logue.', exRu: 'Веду диалог.' },
        { word: 'diameter', transcription: '[daɪˈæmɪtə]', trans: 'диаметр', ex: 'The <b>dia</b>meter of a circle.', exRu: 'Диаметр круга.' },
        { word: 'diagnosis', transcription: '[ˌdaɪəɡˈnəʊsɪs]', trans: 'диагноз', ex: 'A correct <b>dia</b>gnosis.', exRu: 'Правильный диагноз.' }
      ]
    },
    { id: 'epi', type: 'prefix', affix: 'epi-', emoji: '🔝',
      meaning: 'НА / НАД', assoc: 'epidemic = над народом',
      explanation: 'epi- означает "на" или "над".',
      words: [
        { word: 'epidemic', transcription: '[ˌepɪˈdemɪk]', trans: 'эпидемия', ex: 'A flu <b>epi</b>demic.', exRu: 'Эпидемия гриппа.' },
        { word: 'epilogue', transcription: '[ˈepɪlɒɡ]', trans: 'эпилог', ex: 'Read the <b>epi</b>logue.', exRu: 'Прочитай эпилог.' },
        { word: 'epicenter', transcription: '[ˈepɪsentə]', trans: 'эпицентр', ex: 'The <b>epi</b>center of the quake.', exRu: 'Эпицентр землетрясения.' }
      ]
    },
    { id: 'exo', type: 'prefix', affix: 'exo-', emoji: '🌌',
      meaning: 'СНАРУЖИ', assoc: 'exoskeleton = внешний скелет',
      explanation: 'exo- означает "снаружи".',
      words: [
        { word: 'exoskeleton', transcription: '[ˈeksəʊskelɪtn]', trans: 'экзоскелет', ex: 'An insect\'s <b>exo</b>skeleton.', exRu: 'Экзоскелет насекомого.' },
        { word: 'exotic', transcription: '[ɪɡˈzɒtɪk]', trans: 'экзотический', ex: 'An <b>exo</b>tic country.', exRu: 'Экзотическая страна.' }
      ]
    },
    { id: 'retro', type: 'prefix', affix: 'retro-', emoji: '⏪',
      meaning: 'НАЗАД / В ПРОШЛОЕ', assoc: 'retrospective = взгляд назад',
      explanation: 'retro- означает "назад".',
      words: [
        { word: 'retrospective', transcription: '[ˌretrəˈspektɪv]', trans: 'ретроспектива', ex: 'A <b>retro</b>spective view.', exRu: 'Ретроспективный взгляд.' },
        { word: 'retroactive', transcription: '[ˌretrəʊˈæktɪv]', trans: 'обратной силы', ex: 'A <b>retro</b>active law.', exRu: 'Закон с обратной силой.' }
      ]
    },
    { id: 'pro', type: 'prefix', affix: 'pro-', emoji: '➡️',
      meaning: 'ВПЕРЁД / ЗА', assoc: 'progress = движение вперёд',
      explanation: 'pro- означает "вперёд" или "за".',
      words: [
        { word: 'progress', transcription: '[ˈprəʊɡres]', trans: 'прогресс', ex: 'Make <b>pro</b>gress.', exRu: 'Делай прогресс.' },
        { word: 'promote', transcription: '[prəˈməʊt]', trans: 'продвигать', ex: '<b>Pro</b>mote the idea.', exRu: 'Продвигай идею.' },
        { word: 'proactive', transcription: '[ˌprəʊˈæktɪv]', trans: 'инициативный', ex: 'Be <b>pro</b>active.', exRu: 'Будь инициативным.' }
      ]
    },
    { id: 'circum', type: 'prefix', affix: 'circum-', emoji: '🔄',
      meaning: 'ВОКРУГ', assoc: 'circle = круг',
      explanation: 'circum- означает "вокруг".',
      words: [
        { word: 'circumstance', transcription: '[ˈsɜːkəmstəns]', trans: 'обстоятельство', ex: 'A difficult <b>circum</b>stance.', exRu: 'Сложное обстоятельство.' },
        { word: 'circumnavigate', transcription: '[ˌsɜːkəmˈnævɪɡeɪt]', trans: 'обогнуть', ex: '<b>Circum</b>navigate the globe.', exRu: 'Обогнуть земной шар.' }
      ]
    }
);

// ───────────────────────────────────────────────────────────
// 🆕 6 НОВЫХ СУФФИКСОВ
// ───────────────────────────────────────────────────────────
prefixes.push(
    { id: 'ate', type: 'suffix', affix: '-ate', emoji: '⚡',
      meaning: 'ДЕЛАТЬ / СТАНОВИТЬСЯ', assoc: 'activate = активировать',
      explanation: '-ate образует глаголы.',
      words: [
        { word: 'activate', transcription: '[ˈæktɪveɪt]', trans: 'активировать', ex: '<b>Activate</b> the system.', exRu: 'Активируй систему.' },
        { word: 'celebrate', transcription: '[ˈselɪbreɪt]', trans: 'праздновать', ex: 'Let\'s <b>celebrate</b>!', exRu: 'Давай праздновать!' },
        { word: 'communicate', transcription: '[kəˈmjuːnɪkeɪt]', trans: 'общаться', ex: '<b>Communicate</b> clearly.', exRu: 'Общайся ясно.' }
      ]
    },
    { id: 'cide', type: 'suffix', affix: '-cide', emoji: '💀',
      meaning: 'УБИЙСТВО', assoc: 'pesticide = убийца паразитов',
      explanation: '-cide означает "убийство".',
      words: [
        { word: 'pesticide', transcription: '[ˈpestɪsaɪd]', trans: 'пестицид', ex: 'Use <b>pest</b>icide carefully.', exRu: 'Используй пестицид осторожно.' },
        { word: 'suicide', transcription: '[ˈsuːɪsaɪd]', trans: 'самоубийство', ex: 'Prevent <b>sui</b>cide.', exRu: 'Предотврати самоубийство.' }
      ]
    },
    { id: 'phobia', type: 'suffix', affix: '-phobia', emoji: '😱',
      meaning: 'СТРАХ', assoc: 'claustrophobia = боязнь замкнутого',
      explanation: '-phobia означает "страх".',
      words: [
        { word: 'claustrophobia', transcription: '[ˌklɔːstrəˈfəʊbiə]', trans: 'клаустрофобия', ex: 'He has <b>claustro</b>phobia.', exRu: 'У него клаустрофобия.' },
        { word: 'arachnophobia', transcription: '[əˌræknəˈfəʊbiə]', trans: 'боязнь пауков', ex: 'Arachno<b>phobia</b> is common.', exRu: 'Боязнь пауков распространена.' }
      ]
    },
    { id: 'itis', type: 'suffix', affix: '-itis', emoji: '🩺',
      meaning: 'ВОСПАЛЕНИЕ', assoc: 'bronchitis = воспаление бронхов',
      explanation: '-itis означает "воспаление".',
      words: [
        { word: 'bronchitis', transcription: '[brɒŋˈkaɪtɪs]', trans: 'бронхит', ex: 'A bad case of bronchi<b>tis</b>.', exRu: 'Серьёзный бронхит.' },
        { word: 'arthritis', transcription: '[ɑːˈθraɪtɪs]', trans: 'артрит', ex: 'Arthri<b>tis</b> is painful.', exRu: 'Артрит — это больно.' }
      ]
    },
    { id: 'wise', type: 'suffix', affix: '-wise', emoji: '🧭',
      meaning: 'В ОТНОШЕНИИ / СПОСОБОМ', assoc: 'clockwise = по часовой',
      explanation: '-wise означает "в отношении".',
      words: [
        { word: 'clockwise', transcription: '[ˈklɒkwaɪz]', trans: 'по часовой', ex: 'Turn <b>clock</b>wise.', exRu: 'Поверни по часовой.' },
        { word: 'otherwise', transcription: '[ˈʌðəwaɪz]', trans: 'иначе', ex: 'Do it now, <b>other</b>wise it\'s late.', exRu: 'Сделай сейчас, иначе поздно.' },
        { word: 'likewise', transcription: '[ˈlaɪkwaɪz]', trans: 'также', ex: 'I will do <b>like</b>wise.', exRu: 'Я поступлю так же.' }
      ]
    },
    { id: 'craft', type: 'suffix', affix: '-craft', emoji: '🛠️',
      meaning: 'МАСТЕРСТВО', assoc: 'witchcraft = мастерство ведьмы',
      explanation: '-craft означает "мастерство".',
      words: [
        { word: 'witchcraft', transcription: '[ˈwɪtʃkrɑːft]', trans: 'колдовство', ex: 'Old <b>witch</b>craft.', exRu: 'Старое колдовство.' },
        { word: 'handicraft', transcription: '[ˈhændikrɑːft]', trans: 'ремесло', ex: 'A <b>handi</b>craft market.', exRu: 'Рынок ремесла.' }
      ]
    }
);

// ───────────────────────────────────────────────────────────
// 🆕 12 НОВЫХ КОРНЕЙ
// ───────────────────────────────────────────────────────────
wordRoots.push(
    { root: 'cardi', topic: 'life', emoji: '❤️', meaning: 'сердце', note: 'Греческий kardia.',
      words: [
        { word: 'cardiac', pre: '-ac', preMean: 'прил.', trans: 'сердечный', ex: 'A <b>cardi</b>ac arrest.', exRu: 'Остановка сердца.' },
        { word: 'cardiology', pre: '-ology', preMean: 'наука', trans: 'кардиология', ex: 'Study <b>cardi</b>ology.', exRu: 'Изучай кардиологию.' }
      ]
    },
    { root: 'derm', topic: 'life', emoji: '🧴', meaning: 'кожа', note: 'Греческий derma.',
      words: [
        { word: 'dermatology', pre: '-ology', preMean: 'наука', trans: 'дерматология', ex: 'Visit <b>derm</b>atology.', exRu: 'Посети дерматологию.' },
        { word: 'epidermis', pre: 'epi-', preMean: 'сверху', trans: 'эпидермис', ex: 'The <b>epi</b>dermis layer.', exRu: 'Слой эпидермиса.' }
      ]
    },
    { root: 'neuron', topic: 'mind', emoji: '🧠', meaning: 'нерв', note: 'Греческий neuron.',
      words: [
        { word: 'neuron', pre: '-', preMean: '—', trans: 'нейрон', ex: 'A single <b>neuron</b>.', exRu: 'Один нейрон.' },
        { word: 'neurology', pre: '-ology', preMean: 'наука', trans: 'неврология', ex: 'Study <b>neuro</b>logy.', exRu: 'Изучай неврологию.' },
        { word: 'neurotic', pre: '-tic', preMean: 'прил.', trans: 'невротический', ex: 'A <b>neuro</b>tic person.', exRu: 'Невротичный человек.' }
      ]
    },
    { root: 'bibl', topic: 'speech', emoji: '📖', meaning: 'книга', note: 'Греческий biblion.',
      words: [
        { word: 'bibliography', pre: '-graphy', preMean: 'описание', trans: 'библиография', ex: 'Check the <b>biblio</b>graphy.', exRu: 'Проверь библиографию.' },
        { word: 'bibliophile', pre: '-phile', preMean: 'любитель', trans: 'книголюб', ex: 'A true <b>biblio</b>phile.', exRu: 'Настоящий книголюб.' }
      ]
    },
    { root: 'phil', topic: 'mind', emoji: '❤️', meaning: 'любовь', note: 'Греческий philos.',
      words: [
        { word: 'philosophy', pre: '-sophy', preMean: 'мудрость', trans: 'философия', ex: 'Study <b>philo</b>sophy.', exRu: 'Изучай философию.' },
        { word: 'philanthropy', pre: '-anthropy', preMean: 'человек', trans: 'благотворительность', ex: 'A <b>phil</b>anthropy fund.', exRu: 'Фонд благотворительности.' }
      ]
    },
    { root: 'therm', topic: 'tech', emoji: '🌡️', meaning: 'тепло', note: 'Греческий therme.',
      words: [
        { word: 'thermal', pre: '-al', preMean: 'прил.', trans: 'термальный', ex: 'A <b>therm</b>al bath.', exRu: 'Термальная ванна.' },
        { word: 'thermometer', pre: '-meter', preMean: 'измерять', trans: 'термометр', ex: 'Use a <b>therm</b>ometer.', exRu: 'Используй термометр.' },
        { word: 'thermostat', pre: '-stat', preMean: 'держать', trans: 'термостат', ex: 'Set the <b>thermo</b>stat.', exRu: 'Установи термостат.' }
      ]
    },
    { root: 'hydr', topic: 'life', emoji: '💧', meaning: 'вода', note: 'Греческий hydor.',
      words: [
        { word: 'hydrogen', pre: '-gen', preMean: 'создающий', trans: 'водород', ex: 'A <b>hydr</b>ogen atom.', exRu: 'Атом водорода.' },
        { word: 'hydraulic', pre: '-aulic', preMean: 'трубка', trans: 'гидравлический', ex: 'A <b>hydr</b>aulic system.', exRu: 'Гидравлическая система.' }
      ]
    },
    { root: 'aer', topic: 'tech', emoji: '✈️', meaning: 'воздух', note: 'Греческий aer.',
      words: [
        { word: 'aerial', pre: '-ial', preMean: 'прил.', trans: 'воздушный', ex: 'An <b>aer</b>ial view.', exRu: 'Вид с воздуха.' },
        { word: 'aerobics', pre: '-obics', preMean: 'спорт', trans: 'аэробика', ex: 'Do <b>aer</b>obics.', exRu: 'Занимайся аэробикой.' }
      ]
    },
    { root: 'gloss', topic: 'speech', emoji: '👅', meaning: 'язык', note: 'Греческий glossa.',
      words: [
        { word: 'glossary', pre: '-ary', preMean: 'собрание', trans: 'глоссарий', ex: 'A <b>gloss</b>ary of terms.', exRu: 'Глоссарий терминов.' }
      ]
    },
    { root: 'morph', topic: 'tech', emoji: '🦋', meaning: 'форма', note: 'Греческий morphe.',
      words: [
        { word: 'morphology', pre: '-logy', preMean: 'наука', trans: 'морфология', ex: 'Study <b>morph</b>ology.', exRu: 'Изучай морфологию.' },
        { word: 'metamorphosis', pre: 'meta-', preMean: 'через', trans: 'метаморфоза', ex: 'A complete <b>meta</b>morphosis.', exRu: 'Полная метаморфоза.' }
      ]
    },
    { root: 'cosm', topic: 'tech', emoji: '🌌', meaning: 'вселенная', note: 'Греческий kosmos.',
      words: [
        { word: 'cosmos', pre: '-', preMean: '—', trans: 'космос', ex: 'The infinite <b>cosm</b>os.', exRu: 'Бесконечный космос.' },
        { word: 'cosmopolitan', pre: '-politan', preMean: 'гражданин', trans: 'космополит', ex: 'A <b>cosmo</b>politan city.', exRu: 'Город-космополит.' }
      ]
    },
    { root: 'anthrop', topic: 'life', emoji: '🧑', meaning: 'человек', note: 'Греческий anthropos.',
      words: [
        { word: 'anthropology', pre: '-logy', preMean: 'наука', trans: 'антропология', ex: 'Study <b>anthrop</b>ology.', exRu: 'Изучай антропологию.' },
        { word: 'philanthropy', pre: 'phil-', preMean: 'любовь', trans: 'благотворительность', ex: 'A <b>phil</b>anthropy fund.', exRu: 'Фонд благотворительности.' }
      ]
    }
);

// ───────────────────────────────────────────────────────────
// 🆕 3 НОВЫХ ВОЛШЕБНЫХ ГЛАГОЛА
// ───────────────────────────────────────────────────────────
magicVerbs.push(
    { verb: 'let', emoji: '🔓', meaning: 'ПОЗВОЛЯТЬ / ДАВАТЬ',
      assoc: 'let = разрешить, дать', note: 'let = разрешать, давать, позволять.',
      senses: [
        { sense: 'ПОЗВОЛЯТЬ', ru: 'позволять', ex: 'Let me help.', exRu: 'Позволь помочь.' },
        { sense: 'СДАВАТЬ', ru: 'сдавать', ex: 'Let the room.', exRu: 'Сдай комнату.' },
        { sense: 'ПУСКАТЬ', ru: 'пускать', ex: 'Let him in.', exRu: 'Впусти его.' }
      ],
      phrases: [
        { p: 'let down', ru: 'подвести', ex: 'Don\'t <b>let</b> me <b>down</b>.', exRu: 'Не подведи меня.' },
        { p: 'let in', ru: 'впустить', ex: '<b>Let</b> her <b>in</b>.', exRu: 'Впусти её.' },
        { p: 'let out', ru: 'выпустить', ex: '<b>Let</b> the dog <b>out</b>.', exRu: 'Выпусти собаку.' },
        { p: 'let go', ru: 'отпустить', ex: '<b>Let</b> it <b>go</b>.', exRu: 'Отпусти это.' }
      ]
    },
    { verb: 'hold', emoji: '🤲', meaning: 'ДЕРЖАТЬ / ПРОВОДИТЬ',
      assoc: 'hold = держать, содержать, проводить', note: 'hold = держать, содержать, проводить (собрание).',
      senses: [
        { sense: 'ДЕРЖАТЬ', ru: 'держать', ex: '<b>Hold</b> my bag.', exRu: 'Подержи сумку.' },
        { sense: 'ПРОВОДИТЬ', ru: 'проводить', ex: '<b>Hold</b> a meeting.', exRu: 'Проведи встречу.' },
        { sense: 'ВМЕЩАТЬ', ru: 'вмещать', ex: 'The hall <b>holds</b> 100.', exRu: 'Зал вмещает 100.' }
      ],
      phrases: [
        { p: 'hold on', ru: 'подождать', ex: '<b>Hold on</b>, please.', exRu: 'Подожди, пожалуйста.' },
        { p: 'hold up', ru: 'задержать', ex: 'Traffic <b>held</b> us <b>up</b>.', exRu: 'Пробка задержала нас.' },
        { p: 'hold back', ru: 'сдерживать', ex: 'Don\'t <b>hold back</b>.', exRu: 'Не сдерживайся.' }
      ]
    },
    { verb: 'stand', emoji: '🧍', meaning: 'СТОЯТЬ / ВЫДЕРЖИВАТЬ',
      assoc: 'stand = стоять, терпеть', note: 'stand = стоять, терпеть, выдерживать.',
      senses: [
        { sense: 'СТОЯТЬ', ru: 'стоять', ex: 'I <b>stand</b> here.', exRu: 'Я стою здесь.' },
        { sense: 'ТЕРПЕТЬ', ru: 'терпеть', ex: 'I can\'t <b>stand</b> it.', exRu: 'Не могу это терпеть.' }
      ],
      phrases: [
        { p: 'stand up', ru: 'встать', ex: '<b>Stand up</b>, please.', exRu: 'Встань, пожалуйста.' },
        { p: 'stand out', ru: 'выделяться', ex: 'You <b>stand out</b>.', exRu: 'Ты выделяешься.' },
        { p: 'stand by', ru: 'поддерживать', ex: 'I\'ll <b>stand by</b> you.', exRu: 'Я тебя поддержу.' },
        { p: 'stand for', ru: 'означать', ex: 'What does it <b>stand for</b>?', exRu: 'Что это значит?' }
      ]
    }
);

// ───────────────────────────────────────────────────────────
// 🆕 5 НОВЫХ СЛОВ-ЗАГЛУШЕК
// ───────────────────────────────────────────────────────────
magicWords.push(
    { word: 'one', emoji: '1️⃣', ru: 'тот / этот',
      note: 'Заменяет существительное в единственном числе.',
      examples: [
        { ex: 'The <b>one</b> on the left.', exRu: 'Тот, что слева.' },
        { ex: 'Which <b>one</b>?', exRu: 'Который?' }
      ]
    },
    { word: 'ones', emoji: '🔢', ru: 'те / эти',
      note: 'Заменяет существительное во множественном числе.',
      examples: [
        { ex: 'The red <b>ones</b>.', exRu: 'Красные.' },
        { ex: 'Big <b>ones</b>, please.', exRu: 'Большие, пожалуйста.' }
      ]
    },
    { word: 'point', emoji: '🎯', ru: 'смысл / точка',
      note: 'Точка зрения, смысл, суть.',
      examples: [
        { ex: 'What\'s the <b>point</b>?', exRu: 'В чём смысл?' },
        { ex: 'Good <b>point</b>!', exRu: 'Хорошая мысль!' }
      ]
    },
    { word: 'case', emoji: '📋', ru: 'случай / дело',
      note: 'Ситуация, обстоятельство.',
      examples: [
        { ex: 'In that <b>case</b>, let\'s go.', exRu: 'В таком случае, пойдём.' },
        { ex: 'Just in <b>case</b>.', exRu: 'На всякий случай.' }
      ]
    },
    { word: 'moment', emoji: '⏱️', ru: 'момент',
      note: 'Короткий промежуток времени.',
      examples: [
        { ex: 'Wait a <b>moment</b>.', exRu: 'Подожди момент.' },
        { ex: 'At the <b>moment</b>.', exRu: 'В данный момент.' }
      ]
    }
);

// ───────────────────────────────────────────────────────────
// 🆕 10 НОВЫХ ФРАЗ-СПАСАЛОК
// ───────────────────────────────────────────────────────────
survivalPhrases.push(
    { en: 'Could you spell that, please?', ru: 'Не могли бы вы продиктовать по буквам?' },
    { en: 'What does that mean?', ru: 'Что это значит?' },
    { en: 'How do you pronounce this?', ru: 'Как это произносится?' },
    { en: 'I\'m just learning English.', ru: 'Я только учу английский.' },
    { en: 'Could you speak louder?', ru: 'Говорите громче, пожалуйста.' },
    { en: 'Let me think for a second.', ru: 'Дай секунду подумать.' },
    { en: 'That\'s exactly what I mean!', ru: 'Именно это я и имею в виду!' },
    { en: 'I didn\'t catch that.', ru: 'Я не расслышал.' },
    { en: 'Could you put it another way?', ru: 'Можешь сказать по-другому?' },
    { en: 'In plain English, please.', ru: 'Простыми словами, пожалуйста.' }
);

// ───────────────────────────────────────────────────────────
// 🆕 8 НОВЫХ МОДАЛЬНЫХ
// ───────────────────────────────────────────────────────────
modalVerbs.push(
    { id: 'can', word: 'can', transcription: '/kæn/', emoji: '💪',
      meaning: 'УМЕНИЕ / ВОЗМОЖНОСТЬ', color: '#6b8e23',
      rules: ['физическая способность', 'разрешение (неформально)', 'просьба'],
      hint: '💪 Can = умею, могу физически.',
      examples: [
        { en: 'I <b>can</b> swim very well.', ru: 'Я хорошо умею плавать.' },
        { en: '<b>Can</b> you help me?', ru: 'Можешь мне помочь?' }
      ]
    },
    { id: 'could', word: 'could', transcription: '/kʊd/', emoji: '🙏',
      meaning: 'ВЕЖЛИВАЯ ПРОСЬБА / ВОЗМОЖНОСТЬ', color: '#b97f44',
      rules: ['вежливая просьба', 'вероятность', 'прошедшее от can'],
      hint: '🙏 Could = вежливее, чем can.',
      examples: [
        { en: '<b>Could</b> you pass the salt?', ru: 'Не могли бы вы передать соль?' },
        { en: 'It <b>could</b> rain later.', ru: 'Позже может пойти дождь.' }
      ]
    },
    { id: 'may', word: 'may', transcription: '/meɪ/', emoji: '✅',
      meaning: 'РАЗРЕШЕНИЕ / ВЕРОЯТНОСТЬ', color: '#8b6946',
      rules: ['формальное разрешение', 'вероятность', 'пожелание'],
      hint: '✅ May = формальное разрешение.',
      examples: [
        { en: '<b>May</b> I come in?', ru: 'Можно войти?' },
        { en: 'It <b>may</b> snow tomorrow.', ru: 'Завтра может пойти снег.' }
      ]
    },
    { id: 'might', word: 'might', transcription: '/maɪt/', emoji: '❓',
      meaning: 'СЛАБАЯ ВЕРОЯТНОСТЬ', color: '#c49a6c',
      rules: ['меньше вероятность, чем may', 'предположение'],
      hint: '❓ Might = может быть, но вряд ли.',
      examples: [
        { en: 'He <b>might</b> come, but I doubt it.', ru: 'Он может прийти, но вряд ли.' },
        { en: '<b>Might</b> I ask a question?', ru: 'Можно задать вопрос?' }
      ]
    },
    { id: 'will', word: 'will', transcription: '/wɪl/', emoji: '🔮',
      meaning: 'БУДУЩЕЕ / ОБЕЩАНИЕ', color: '#6b8e23',
      rules: ['будущее время', 'обещание', 'решение сейчас'],
      hint: '🔮 Will = будущее + обещание.',
      examples: [
        { en: 'I <b>will</b> call you tomorrow.', ru: 'Я позвоню тебе завтра.' },
        { en: '<b>Will</b> you come?', ru: 'Ты придёшь?' }
      ]
    },
    { id: 'would', word: 'would', transcription: '/wʊd/', emoji: '🎩',
      meaning: 'ВЕЖЛИВОСТЬ / УСЛОВИЕ', color: '#b97f44',
      rules: ['вежливость', 'условное предложение'],
      hint: '🎩 Would = вежливо + "бы".',
      examples: [
        { en: 'I <b>would</b> like some tea.', ru: 'Я бы хотел чаю.' },
        { en: '<b>Would</b> you help me?', ru: 'Не могли бы вы помочь?' }
      ]
    },
    { id: 'shall', word: 'shall', transcription: '/ʃæl/', emoji: '🤝',
      meaning: 'ПРЕДЛОЖЕНИЕ / БУДУЩЕЕ', color: '#8b6946',
      rules: ['предложение', 'формальное будущее'],
      hint: '🤝 Shall = предложение или правило.',
      examples: [
        { en: '<b>Shall</b> we dance?', ru: 'Потанцуем?' },
        { en: 'You <b>shall</b> not pass!', ru: 'Ты не пройдёшь!' }
      ]
    },
    { id: 'ought', word: 'ought to', transcription: '/ɔːt tuː/', emoji: '📌',
      meaning: 'СЛЕДУЕТ (моральный долг)', color: '#6b8e23',
      rules: ['моральная обязанность', 'рекомендация'],
      hint: '📌 Ought to = следовало бы (по совести).',
      examples: [
        { en: 'You <b>ought to</b> apologize.', ru: 'Тебе следует извиниться.' },
        { en: 'We <b>ought to</b> help them.', ru: 'Нам следует им помочь.' }
      ]
    }
);

// ───────────────────────────────────────────────────────────
// 🆕 5 НОВЫХ СЛОВ-ЛОВУШЕК
// ───────────────────────────────────────────────────────────
trapPairs.push(
    { id: 'do-make2', emoji: '📋🔨', title: 'DO vs MAKE — подробнее',
      rule: 'Работа VS создание',
      left: { word: 'do', emoji: '📋', meaning: 'работа, задача, действие',
        examples: [
          { en: '<b>Do</b> your homework.', ru: 'Сделай домашку.' },
          { en: '<b>Do</b> the dishes.', ru: 'Помой посуду.' }
        ]
      },
      right: { word: 'make', emoji: '🔨', meaning: 'создать, произвести',
        examples: [
          { en: '<b>Make</b> a cake.', ru: 'Испеки торт.' },
          { en: '<b>Make</b> money.', ru: 'Заработай денег.' }
        ]
      }
    },
    { id: 'few-little', emoji: '🔢🥛', title: 'FEW vs LITTLE',
      rule: 'Исчисляемые VS неисчисляемые',
      left: { word: 'few', emoji: '🔢', meaning: 'мало (исчисл.)',
        examples: [
          { en: '<b>Few</b> people came.', ru: 'Мало людей пришло.' },
          { en: 'A <b>few</b> books.', ru: 'Несколько книг.' }
        ]
      },
      right: { word: 'little', emoji: '🥛', meaning: 'мало (неисчисл.)',
        examples: [
          { en: '<b>Little</b> water left.', ru: 'Мало воды осталось.' },
          { en: 'A <b>little</b> sugar.', ru: 'Немного сахара.' }
        ]
      }
    },
    { id: 'some-any', emoji: '➕❓', title: 'SOME vs ANY',
      rule: 'Утверждение VS вопрос/отрицание',
      left: { word: 'some', emoji: '➕', meaning: 'в утверждениях',
        examples: [
          { en: 'I have <b>some</b> money.', ru: 'У меня есть немного денег.' },
          { en: 'Would you like <b>some</b> tea?', ru: 'Хочешь чаю?' }
        ]
      },
      right: { word: 'any', emoji: '❓', meaning: 'в вопросах и отрицаниях',
        examples: [
          { en: 'Do you have <b>any</b> money?', ru: 'У тебя есть деньги?' },
          { en: 'I don\'t have <b>any</b>.', ru: 'У меня нет.' }
        ]
      }
    },
    { id: 'much-many', emoji: '💰🔢', title: 'MUCH vs MANY',
      rule: 'Неисчисляемые VS исчисляемые',
      left: { word: 'much', emoji: '💰', meaning: 'много (неисчисл.)',
        examples: [
          { en: 'How <b>much</b> money?', ru: 'Сколько денег?' },
          { en: 'Too <b>much</b> water.', ru: 'Слишком много воды.' }
        ]
      },
      right: { word: 'many', emoji: '🔢', meaning: 'много (исчисл.)',
        examples: [
          { en: 'How <b>many</b> books?', ru: 'Сколько книг?' },
          { en: 'Too <b>many</b> people.', ru: 'Слишком много людей.' }
        ]
      }
    },
    { id: 'good-well', emoji: '🎨💨', title: 'GOOD vs WELL',
      rule: 'Прилагательное VS наречие',
      left: { word: 'good', emoji: '🎨', meaning: 'хороший (прил.)',
        examples: [
          { en: 'A <b>good</b> book.', ru: 'Хорошая книга.' },
          { en: 'I feel <b>good</b>.', ru: 'Я чувствую себя хорошо.' }
        ]
      },
      right: { word: 'well', emoji: '💨', meaning: 'хорошо (нареч.)',
        examples: [
          { en: 'He plays <b>well</b>.', ru: 'Он хорошо играет.' },
          { en: 'She sings <b>well</b>.', ru: 'Она хорошо поёт.' }
        ]
      }
    }
);

// ───────────────────────────────────────────────────────────
// 🆕 6 НОВЫХ СЛОВ-БЛИЗНЕЦОВ
// ───────────────────────────────────────────────────────────
twinWords.push(
    { id: 'weather-whether', emoji: '🌦️🤔', title: 'WEATHER vs WHETHER',
      rule: 'Погода VS ли',
      left: { word: 'weather', emoji: '🌦️', pos: 'сущ.', meaning: 'погода',
        examples: [{ en: 'Nice <b>weather</b> today.', ru: 'Хорошая погода сегодня.' }]
      },
      right: { word: 'whether', emoji: '🤔', pos: 'союз', meaning: 'ли',
        examples: [{ en: 'I don\'t know <b>whether</b> to go.', ru: 'Не знаю, идти ли.' }]
      }
    },
    { id: 'their-there', emoji: '👥📍', title: 'THEIR vs THERE',
      rule: 'Их VS там',
      left: { word: 'their', emoji: '👥', pos: 'притяж.', meaning: 'их',
        examples: [{ en: '<b>Their</b> house is big.', ru: 'Их дом большой.' }]
      },
      right: { word: 'there', emoji: '📍', pos: 'нареч.', meaning: 'там',
        examples: [{ en: 'Put it <b>there</b>.', ru: 'Положи это там.' }]
      }
    },
    { id: 'your-youre', emoji: '👤✅', title: 'YOUR vs YOU\'RE',
      rule: 'Твой VS ты есть',
      left: { word: 'your', emoji: '👤', pos: 'притяж.', meaning: 'твой',
        examples: [{ en: '<b>Your</b> book is here.', ru: 'Твоя книга здесь.' }]
      },
      right: { word: 'you\'re', emoji: '✅', pos: 'сокр.', meaning: 'ты есть',
        examples: [{ en: '<b>You\'re</b> right!', ru: 'Ты прав!' }]
      }
    },
    { id: 'then-than', emoji: '⏰🆚', title: 'THEN vs THAN',
      rule: 'Тогда VS чем',
      left: { word: 'then', emoji: '⏰', pos: 'нареч.', meaning: 'тогда',
        examples: [{ en: 'And <b>then</b> we left.', ru: 'И тогда мы ушли.' }]
      },
      right: { word: 'than', emoji: '🆚', pos: 'союз', meaning: 'чем',
        examples: [{ en: 'Better <b>than</b> before.', ru: 'Лучше, чем раньше.' }]
      }
    },
    { id: 'to-too', emoji: '➡️➕', title: 'TO vs TOO',
      rule: 'К VS тоже',
      left: { word: 'to', emoji: '➡️', pos: 'предлог', meaning: 'к / в',
        examples: [{ en: 'I go <b>to</b> work.', ru: 'Я иду на работу.' }]
      },
      right: { word: 'too', emoji: '➕', pos: 'нареч.', meaning: 'тоже / слишком',
        examples: [
          { en: 'Me <b>too</b>!', ru: 'Я тоже!' },
          { en: '<b>Too</b> much!', ru: 'Слишком много!' }
        ]
      }
    },
    { id: 'its-its', emoji: '🐾✅', title: 'ITS vs IT\'S',
      rule: 'Его/её VS это есть',
      left: { word: 'its', emoji: '🐾', pos: 'притяж.', meaning: 'его/её (для вещей)',
        examples: [{ en: 'The cat licked <b>its</b> paw.', ru: 'Кошка лизнула лапу.' }]
      },
      right: { word: 'it\'s', emoji: '✅', pos: 'сокр.', meaning: 'это есть',
        examples: [{ en: '<b>It\'s</b> cold.', ru: 'Холодно.' }]
      }
    }
);

// ───────────────────────────────────────────────────────────
// 🆕 8 НОВЫХ ЭССЕ-СВЯЗОК
// ───────────────────────────────────────────────────────────
essayLinkers.push(
    { id: 'inconclusion', group: 'end', en: 'In conclusion', ru: 'в заключение',
      emoji: '🏁', trans: '[ɪn kənˈkluːʒn]',
      usage: 'Итог эссе.',
      example: { en: '<b>In conclusion</b>, education matters.', ru: 'В заключение, образование важно.' }
    },
    { id: 'tosumup', group: 'end', en: 'To sum up', ru: 'подводя итог',
      emoji: '🏁', trans: '[tə sʌm ʌp]',
      usage: 'Финальное обобщение.',
      example: { en: '<b>To sum up</b>, we need change.', ru: 'Подводя итог, нам нужны изменения.' }
    },
    { id: 'allinall', group: 'end', en: 'All in all', ru: 'в целом',
      emoji: '🏁', trans: '[ɔːl ɪn ɔːl]',
      usage: 'Общий вывод.',
      example: { en: '<b>All in all</b>, it\'s worth it.', ru: 'В целом, оно того стоит.' }
    },
    { id: 'ontop', group: 'develop', en: 'On top of that', ru: 'вдобавок к этому',
      emoji: '➕', trans: '[ɒn tɒp əv ðæt]',
      usage: 'Добавление аргумента.',
      example: { en: '<b>On top of that</b>, it\'s cheap.', ru: 'Вдобавок, это дёшево.' }
    },
    { id: 'asfor', group: 'start', en: 'As for', ru: 'что касается',
      emoji: '📌', trans: '[əz fɔː]',
      usage: 'Смена темы.',
      example: { en: '<b>As for</b> me, I agree.', ru: 'Что касается меня, я согласен.' }
    },
    { id: 'whenit', group: 'clarify', en: 'When it comes to', ru: 'когда речь о',
      emoji: '🎯', trans: '[wen ɪt kʌmz tə]',
      usage: 'Введение темы.',
      example: { en: '<b>When it comes to</b> sport, he\'s the best.', ru: 'Когда речь о спорте, он лучший.' }
    },
    { id: 'firstofall', group: 'start', en: 'First of all', ru: 'прежде всего',
      emoji: '🥇', trans: '[fɜːst əv ɔːl]',
      usage: 'Начало списка.',
      example: { en: '<b>First of all</b>, let\'s plan.', ru: 'Прежде всего, давай спланируем.' }
    },
    { id: 'lastbutnot', group: 'end', en: 'Last but not least', ru: 'и последнее, но не менее важное',
      emoji: '🏁', trans: '[lɑːst bʌt nɒt liːst]',
      usage: 'Финальный пункт.',
      example: { en: '<b>Last but not least</b>, thank you.', ru: 'И наконец, спасибо.' }
    }
);

// ───────────────────────────────────────────────────────────
// 🆕 5 НОВЫХ СВЯЗОК (сравнить/объяснить)
// ───────────────────────────────────────────────────────────
usefulLinkers.push(
    { id: 'aslongas', group: 'explain', en: 'As long as', ru: 'пока / при условии',
      emoji: '📌', trans: '[əz lɒŋ əz]',
      usage: 'Условие.',
      example: { en: '<b>As long as</b> you try, it\'s fine.', ru: 'Пока ты пытаешься, всё хорошо.' }
    },
    { id: 'incase', group: 'explain', en: 'In case', ru: 'на случай',
      emoji: '🛡️', trans: '[ɪn keɪs]',
      usage: 'Предосторожность.',
      example: { en: 'Take an umbrella <b>in case</b>.', ru: 'Возьми зонт на случай.' }
    },
    { id: 'asif', group: 'compare', en: 'As if', ru: 'как будто',
      emoji: '🎭', trans: '[əz ɪf]',
      usage: 'Сравнение с воображаемым.',
      example: { en: 'He talks <b>as if</b> he knows.', ru: 'Он говорит, как будто знает.' }
    },
    { id: 'inorder', group: 'explain', en: 'In order to', ru: 'для того чтобы',
      emoji: '🎯', trans: '[ɪn ˈɔːdə tuː]',
      usage: 'Цель.',
      example: { en: '<b>In order to</b> win, train hard.', ru: 'Чтобы победить, тренируйся.' }
    },
    { id: 'inspite', group: 'compare', en: 'In spite of', ru: 'несмотря на',
      emoji: '💪', trans: '[ɪn spaɪt əv]',
      usage: 'Уступка.',
      example: { en: '<b>In spite of</b> rain, we went.', ru: 'Несмотря на дождь, мы пошли.' }
    }
);

// ───────────────────────────────────────────────────────────
// 🆕 5 НОВЫХ ВОПРОСИТЕЛЬНЫХ
// ───────────────────────────────────────────────────────────
questionWords.push(
    { en: 'How often', ru: 'как часто', emoji: '🔁', group: 'how', trans: '[haʊ ˈɒfn]',
      example: { en: '<b>How often</b> do you run?', ru: 'Как часто ты бегаешь?' }
    },
    { en: 'How soon', ru: 'как скоро', emoji: '⏰', group: 'how', trans: '[haʊ suːn]',
      example: { en: '<b>How soon</b> can you come?', ru: 'Как скоро ты можешь прийти?' }
    },
    { en: 'How come', ru: 'как так', emoji: '❓', group: 'how', trans: '[haʊ kʌm]',
      example: { en: '<b>How come</b> you\'re late?', ru: 'Как так ты опоздал?' }
    },
    { en: 'What kind of', ru: 'какой вид', emoji: '🎭', group: 'basic', trans: '[wɒt kaɪnd əv]',
      example: { en: '<b>What kind of</b> music?', ru: 'Какой вид музыки?' }
    },
    { en: 'What time', ru: 'во сколько', emoji: '🕐', group: 'basic', trans: '[wɒt taɪm]',
      example: { en: '<b>What time</b> is it?', ru: 'Сколько времени?' }
    }
);

// ───────────────────────────────────────────────────────────
// 🆕 6 НОВЫХ ВВОДНЫХ СЛОВ
// ───────────────────────────────────────────────────────────
discourseMarkers.push(
    { id: 'inbrief', word: 'In brief', transcription: '[ɪn briːf]', ru: 'короче говоря', emoji: '📌', group: 'style',
      example: { en: '<b>In brief</b>, we won.', ru: 'Короче, мы победили.' } },
    { id: 'inconclusion2', word: 'In conclusion', transcription: '[ɪn kənˈkluːʒn]', ru: 'в заключение', emoji: '🏁', group: 'logic',
      example: { en: '<b>In conclusion</b>, we must try.', ru: 'В заключение, мы должны попробовать.' } },
    { id: 'firstofall2', word: 'First of all', transcription: '[fɜːst əv ɔːl]', ru: 'прежде всего', emoji: '🥇', group: 'logic',
      example: { en: '<b>First of all</b>, let\'s plan.', ru: 'Прежде всего, давай спланируем.' } },
    { id: 'lastbutnot2', word: 'Last but not least', transcription: '[lɑːst bʌt nɒt liːst]', ru: 'и последнее', emoji: '🏁', group: 'logic',
      example: { en: '<b>Last but not least</b>, thank you.', ru: 'И наконец, спасибо.' } },
    { id: 'asamatter', word: 'As a matter of fact', transcription: '[əz ə ˈmætər əv fækt]', ru: 'на самом деле', emoji: '🎯', group: 'style',
      example: { en: '<b>As a matter of fact</b>, I agree.', ru: 'На самом деле, я согласен.' } },
    { id: 'frankly', word: 'Frankly speaking', transcription: '[ˈfræŋkli ˈspiːkɪŋ]', ru: 'честно говоря', emoji: '💬', group: 'emotion',
      example: { en: '<b>Frankly speaking</b>, I don\'t care.', ru: 'Честно говоря, мне всё равно.' } }
);

// ───────────────────────────────────────────────────────────
// 🆕 12 НОВЫХ СЛОВ ВРЕМЕНИ
// ───────────────────────────────────────────────────────────
allTimeWords.push(
    { en: 'In the morning', ru: 'утром', emoji: '🌅', trans: '[ɪn ðə ˈmɔːnɪŋ]', group: 'present' },
    { en: 'In the afternoon', ru: 'днём', emoji: '☀️', trans: '[ɪn ði ˌɑːftəˈnuːn]', group: 'present' },
    { en: 'In the evening', ru: 'вечером', emoji: '🌆', trans: '[ɪn ði ˈiːvnɪŋ]', group: 'present' },
    { en: 'At night', ru: 'ночью', emoji: '🌙', trans: '[ət naɪt]', group: 'present' },
    { en: 'At noon', ru: 'в полдень', emoji: '🕛', trans: '[ət nuːn]', group: 'present' },
    { en: 'At midnight', ru: 'в полночь', emoji: '🕛', trans: '[ət ˈmɪdnaɪt]', group: 'present' },
    { en: 'The other day', ru: 'на днях', emoji: '📆', trans: '[ði ˈʌðə deɪ]', group: 'past' },
    { en: 'In those days', ru: 'в те дни', emoji: '📜', trans: '[ɪn ðəʊz deɪz]', group: 'past' },
    { en: 'The week after next', ru: 'через неделю', emoji: '📆', trans: '[ðə wiːk ˈɑːftə nekst]', group: 'future' },
    { en: 'From now on', ru: 'с этого момента', emoji: '➡️', trans: '[frəm naʊ ɒn]', group: 'future' },
    { en: 'Sooner or later', ru: 'рано или поздно', emoji: '⏳', trans: '[ˈsuːnə ɔː ˈleɪtə]', group: 'future' },
    { en: 'Once in a while', ru: 'время от времени', emoji: '🔁', trans: '[wʌns ɪn ə waɪl]', group: 'present' }
);

// ───────────────────────────────────────────────────────────
// 🆕 50+ МИНИ-ДИАЛОГОВ
// ───────────────────────────────────────────────────────────
miniDialogues.push(
    { emoji: '☕', affix: 'have', title: 'В кафе', lines: [
        { who: 'A', en: 'Can I <b>have</b> a coffee?', ru: 'Можно мне кофе?' },
        { who: 'B', en: 'Sure. With milk?', ru: 'Конечно. С молоком?' },
        { who: 'A', en: 'Yes, please.', ru: 'Да, пожалуйста.' } ] },
    { emoji: '🛒', affix: 'buy', title: 'В магазине', lines: [
        { who: 'A', en: 'How much is this?', ru: 'Сколько это стоит?' },
        { who: 'B', en: 'It\'s 10 dollars.', ru: '10 долларов.' },
        { who: 'A', en: 'I\'ll <b>buy</b> it.', ru: 'Я куплю это.' } ] },
    { emoji: '📞', affix: 'call', title: 'Звонок другу', lines: [
        { who: 'A', en: 'Hey! How are you?', ru: 'Привет! Как ты?' },
        { who: 'B', en: 'I\'m fine. And you?', ru: 'Хорошо. А ты?' },
        { who: 'A', en: 'I\'ll <b>call</b> you later.', ru: 'Позвоню тебе позже.' } ] },
    { emoji: '🕐', affix: 'wait', title: 'Опоздание', lines: [
        { who: 'A', en: 'Sorry I\'m late!', ru: 'Прости, я опоздал!' },
        { who: 'B', en: 'It\'s okay. I <b>waited</b> 5 minutes.', ru: 'Ладно. Я подождал 5 минут.' },
        { who: 'A', en: 'Thanks for waiting.', ru: 'Спасибо, что подождал.' } ] },
    { emoji: '🍽️', affix: 'eat', title: 'В ресторане', lines: [
        { who: 'A', en: 'What would you like to <b>eat</b>?', ru: 'Что бы ты хотел поесть?' },
        { who: 'B', en: 'I\'d like pasta, please.', ru: 'Я хотел бы пасту, пожалуйста.' },
        { who: 'A', en: 'Good choice!', ru: 'Хороший выбор!' } ] },
    { emoji: '🚗', affix: 'drive', title: 'В машине', lines: [
        { who: 'A', en: 'Can you <b>drive</b> me home?', ru: 'Можешь меня подвезти домой?' },
        { who: 'B', en: 'Of course, hop in!', ru: 'Конечно, садись!' },
        { who: 'A', en: 'You\'re the best!', ru: 'Ты лучший!' } ] },
    { emoji: '📚', affix: 'study', title: 'Перед экзаменом', lines: [
        { who: 'A', en: 'Did you <b>study</b> for the test?', ru: 'Ты готовился к тесту?' },
        { who: 'B', en: 'Yes, all night!', ru: 'Да, всю ночь!' },
        { who: 'A', en: 'You\'ll do great!', ru: 'Ты справишься!' } ] },
    { emoji: '🏃', affix: 'run', title: 'Спорт', lines: [
        { who: 'A', en: 'Do you <b>run</b> every day?', ru: 'Ты бегаешь каждый день?' },
        { who: 'B', en: 'Yes, 5 km each morning.', ru: 'Да, 5 км каждое утро.' },
        { who: 'A', en: 'That\'s amazing!', ru: 'Это потрясающе!' } ] },
    { emoji: '🌧️', affix: 'rain', title: 'Погода', lines: [
        { who: 'A', en: 'It might <b>rain</b> today.', ru: 'Может пойти дождь сегодня.' },
        { who: 'B', en: 'I\'ll take an umbrella.', ru: 'Возьму зонт.' },
        { who: 'A', en: 'Good idea.', ru: 'Хорошая идея.' } ] },
    { emoji: '🎬', affix: 'watch', title: 'Кино', lines: [
        { who: 'A', en: 'Want to <b>watch</b> a movie?', ru: 'Хочешь посмотреть фильм?' },
        { who: 'B', en: 'Sure, what genre?', ru: 'Конечно, какой жанр?' },
        { who: 'A', en: 'Something funny.', ru: 'Что-нибудь смешное.' } ] },
    { emoji: '✈️', affix: 'travel', title: 'Отпуск', lines: [
        { who: 'A', en: 'Where do you want to <b>travel</b>?', ru: 'Куда ты хочешь поехать?' },
        { who: 'B', en: 'I\'d love to visit Japan.', ru: 'Я бы хотел посетить Японию.' },
        { who: 'A', en: 'Great choice!', ru: 'Отличный выбор!' } ] },
    { emoji: '💼', affix: 'work', title: 'Собеседование', lines: [
        { who: 'A', en: 'Where do you <b>work</b>?', ru: 'Где вы работаете?' },
        { who: 'B', en: 'I work at a bank.', ru: 'Я работаю в банке.' },
        { who: 'A', en: 'How long have you been there?', ru: 'Как долго вы там работаете?' } ] },
    { emoji: '🏠', affix: 'live', title: 'О жилье', lines: [
        { who: 'A', en: 'Where do you <b>live</b>?', ru: 'Где ты живёшь?' },
        { who: 'B', en: 'In the city centre.', ru: 'В центре города.' },
        { who: 'A', en: 'Nice area!', ru: 'Хороший район!' } ] },
    { emoji: '🎂', affix: 'celebrate', title: 'День рождения', lines: [
        { who: 'A', en: 'Let\'s <b>celebrate</b> your birthday!', ru: 'Давай отпразднуем твой день рождения!' },
        { who: 'B', en: 'Thank you so much!', ru: 'Большое спасибо!' },
        { who: 'A', en: 'When is the party?', ru: 'Когда вечеринка?' } ] },
    { emoji: '💊', affix: 'feel', title: 'В аптеке', lines: [
        { who: 'A', en: 'I don\'t <b>feel</b> well.', ru: 'Я плохо себя чувствую.' },
        { who: 'B', en: 'What\'s wrong?', ru: 'Что случилось?' },
        { who: 'A', en: 'I have a headache.', ru: 'У меня болит голова.' } ] },
    { emoji: '🚌', affix: 'take', title: 'Транспорт', lines: [
        { who: 'A', en: 'How do I get to the station?', ru: 'Как добраться до вокзала?' },
        { who: 'B', en: '<b>Take</b> bus number 5.', ru: 'Сядь на автобус 5.' },
        { who: 'A', en: 'Thanks a lot!', ru: 'Большое спасибо!' } ] },
    { emoji: '📱', affix: 'text', title: 'Переписка', lines: [
        { who: 'A', en: 'Did you get my message?', ru: 'Ты получил моё сообщение?' },
        { who: 'B', en: 'Yes, I\'ll <b>text</b> you back.', ru: 'Да, я отвечу.' },
        { who: 'A', en: 'Great, talk soon!', ru: 'Отлично, скоро свяжемся!' } ] },
    { emoji: '🍕', affix: 'order', title: 'Доставка', lines: [
        { who: 'A', en: 'Let\'s <b>order</b> pizza.', ru: 'Давай закажем пиццу.' },
        { who: 'B', en: 'Good idea!', ru: 'Хорошая идея!' },
        { who: 'A', en: 'What toppings?', ru: 'Какие начинки?' } ] },
    { emoji: '🎓', affix: 'learn', title: 'Учёба', lines: [
        { who: 'A', en: 'What do you <b>learn</b> at school?', ru: 'Что ты учишь в школе?' },
        { who: 'B', en: 'English and math.', ru: 'Английский и математику.' },
        { who: 'A', en: 'Very useful!', ru: 'Очень полезно!' } ] },
    { emoji: '🐶', affix: 'feed', title: 'О питомце', lines: [
        { who: 'A', en: 'Did you <b>feed</b> the dog?', ru: 'Ты покормил собаку?' },
        { who: 'B', en: 'Yes, this morning.', ru: 'Да, сегодня утром.' },
        { who: 'A', en: 'Thanks!', ru: 'Спасибо!' } ] },
    { emoji: '💬', affix: 'speak', title: 'О языках', lines: [
        { who: 'A', en: 'Do you <b>speak</b> English?', ru: 'Ты говоришь по-английски?' },
        { who: 'B', en: 'A little bit.', ru: 'Немного.' },
        { who: 'A', en: 'You\'re doing great!', ru: 'Ты отлично справляешься!' } ] },
    { emoji: '🌞', affix: 'get up', title: 'Утро', lines: [
        { who: 'A', en: 'What time do you <b>get up</b>?', ru: 'Во сколько ты встаёшь?' },
        { who: 'B', en: 'At 7 o\'clock.', ru: 'В 7 часов.' },
        { who: 'A', en: 'That\'s early!', ru: 'Это рано!' } ] },
    { emoji: '🌙', affix: 'go to bed', title: 'Вечер', lines: [
        { who: 'A', en: 'When do you <b>go to bed</b>?', ru: 'Когда ты ложишься спать?' },
        { who: 'B', en: 'At 11 pm.', ru: 'В 11 вечера.' },
        { who: 'A', en: 'Not too late.', ru: 'Не слишком поздно.' } ] },
    { emoji: '🎵', affix: 'listen', title: 'Музыка', lines: [
        { who: 'A', en: 'What do you <b>listen</b> to?', ru: 'Что ты слушаешь?' },
        { who: 'B', en: 'Rock and pop.', ru: 'Рок и поп.' },
        { who: 'A', en: 'Cool taste!', ru: 'Крутой вкус!' } ] },
    { emoji: '🏋️', affix: 'exercise', title: 'Фитнес', lines: [
        { who: 'A', en: 'Do you <b>exercise</b> often?', ru: 'Ты часто тренируешься?' },
        { who: 'B', en: 'Three times a week.', ru: 'Три раза в неделю.' },
        { who: 'A', en: 'Keep it up!', ru: 'Так держать!' } ] },
    { emoji: '🍳', affix: 'cook', title: 'Готовка', lines: [
        { who: 'A', en: 'Can you <b>cook</b>?', ru: 'Ты умеешь готовить?' },
        { who: 'B', en: 'Yes, I love it!', ru: 'Да, я обожаю это!' },
        { who: 'A', en: 'Teach me please!', ru: 'Научи меня!' } ] },
    { emoji: '🌍', affix: 'come from', title: 'Откуда ты', lines: [
        { who: 'A', en: 'Where do you <b>come from</b>?', ru: 'Откуда ты?' },
        { who: 'B', en: 'I\'m from Russia.', ru: 'Я из России.' },
        { who: 'A', en: 'Beautiful country!', ru: 'Красивая страна!' } ] },
    { emoji: '🎨', affix: 'draw', title: 'Хобби', lines: [
        { who: 'A', en: 'Can you <b>draw</b>?', ru: 'Ты умеешь рисовать?' },
        { who: 'B', en: 'A little bit.', ru: 'Немного.' },
        { who: 'A', en: 'Show me!', ru: 'Покажи мне!' } ] },
    { emoji: '🎮', affix: 'play', title: 'Игры', lines: [
        { who: 'A', en: 'Do you <b>play</b> video games?', ru: 'Ты играешь в видеоигры?' },
        { who: 'B', en: 'Sometimes.', ru: 'Иногда.' },
        { who: 'A', en: 'What\'s your favourite?', ru: 'Какая любимая?' } ] },
    { emoji: '📖', affix: 'read', title: 'Книги', lines: [
        { who: 'A', en: 'Do you <b>read</b> a lot?', ru: 'Ты много читаешь?' },
        { who: 'B', en: 'Yes, every day.', ru: 'Да, каждый день.' },
        { who: 'A', en: 'What\'s your favourite book?', ru: 'Какая любимая книга?' } ] },
    { emoji: '📷', affix: 'take', title: 'Фото', lines: [
        { who: 'A', en: 'Can you <b>take</b> a photo?', ru: 'Можешь сфотографировать?' },
        { who: 'B', en: 'Sure, smile!', ru: 'Конечно, улыбнись!' },
        { who: 'A', en: 'Thanks!', ru: 'Спасибо!' } ] },
    { emoji: '🎁', affix: 'give', title: 'Подарок', lines: [
        { who: 'A', en: 'What should I <b>give</b> her?', ru: 'Что мне ей подарить?' },
        { who: 'B', en: 'Maybe flowers?', ru: 'Может, цветы?' },
        { who: 'A', en: 'Great idea!', ru: 'Отличная идея!' } ] },
    { emoji: '🎉', affix: 'have fun', title: 'Вечеринка', lines: [
        { who: 'A', en: 'Did you <b>have fun</b>?', ru: 'Ты повеселился?' },
        { who: 'B', en: 'Yes, so much!', ru: 'Да, очень!' },
        { who: 'A', en: 'Let\'s do it again!', ru: 'Давай ещё раз!' } ] },
    { emoji: '💻', affix: 'use', title: 'Компьютер', lines: [
        { who: 'A', en: 'Do you <b>use</b> a laptop?', ru: 'Ты пользуешься ноутбуком?' },
        { who: 'B', en: 'Yes, for work.', ru: 'Да, для работы.' },
        { who: 'A', en: 'Me too.', ru: 'Я тоже.' } ] },
    { emoji: '📞', affix: 'answer', title: 'Телефон', lines: [
        { who: 'A', en: 'Why didn\'t you <b>answer</b>?', ru: 'Почему ты не ответил?' },
        { who: 'B', en: 'I was busy.', ru: 'Я был занят.' },
        { who: 'A', en: 'No problem.', ru: 'Без проблем.' } ] },
    { emoji: '🎓', affix: 'graduate', title: 'Выпуск', lines: [
        { who: 'A', en: 'When do you <b>graduate</b>?', ru: 'Когда ты выпускаешься?' },
        { who: 'B', en: 'Next summer.', ru: 'Следующим летом.' },
        { who: 'A', en: 'Congratulations!', ru: 'Поздравляю!' } ] },
    { emoji: '💍', affix: 'marry', title: 'Свадьба', lines: [
        { who: 'A', en: 'When will you <b>marry</b>?', ru: 'Когда ты женишься?' },
        { who: 'B', en: 'Next year.', ru: 'В следующем году.' },
        { who: 'A', en: 'So exciting!', ru: 'Как волнительно!' } ] },
    { emoji: '🏖️', affix: 'swim', title: 'Пляж', lines: [
        { who: 'A', en: 'Can you <b>swim</b>?', ru: 'Ты умеешь плавать?' },
        { who: 'B', en: 'Yes, very well.', ru: 'Да, очень хорошо.' },
        { who: 'A', en: 'Let\'s go to the beach!', ru: 'Пойдём на пляж!' } ] },
    { emoji: '🚴', affix: 'ride', title: 'Велосипед', lines: [
        { who: 'A', en: 'Can you <b>ride</b> a bike?', ru: 'Ты умеешь кататься на велосипеде?' },
        { who: 'B', en: 'Since childhood!', ru: 'С детства!' },
        { who: 'A', en: 'Amazing!', ru: 'Круто!' } ] },
    { emoji: '🍰', affix: 'taste', title: 'Дегустация', lines: [
        { who: 'A', en: 'How does it <b>taste</b>?', ru: 'Как это на вкус?' },
        { who: 'B', en: 'Delicious!', ru: 'Вкусно!' },
        { who: 'A', en: 'I want to try!', ru: 'Хочу попробовать!' } ] },
    { emoji: '🎤', affix: 'sing', title: 'Караоке', lines: [
        { who: 'A', en: 'Do you <b>sing</b>?', ru: 'Ты поёшь?' },
        { who: 'B', en: 'Only in the shower!', ru: 'Только в душе!' },
        { who: 'A', en: 'Haha, same!', ru: 'Хаха, я тоже!' } ] },
    { emoji: '🎬', affix: 'act', title: 'Актёрство', lines: [
        { who: 'A', en: 'Do you want to <b>act</b>?', ru: 'Хочешь играть в театре?' },
        { who: 'B', en: 'Maybe one day!', ru: 'Может, однажды!' },
        { who: 'A', en: 'Dream big!', ru: 'Мечтай масштабно!' } ] },
    { emoji: '🛏️', affix: 'sleep', title: 'Сон', lines: [
        { who: 'A', en: 'How many hours do you <b>sleep</b>?', ru: 'Сколько часов ты спишь?' },
        { who: 'B', en: 'About 7.', ru: 'Около 7.' },
        { who: 'A', en: 'That\'s healthy!', ru: 'Это здорово!' } ] },
    { emoji: '📝', affix: 'write', title: 'Письмо', lines: [
        { who: 'A', en: 'Did you <b>write</b> the report?', ru: 'Ты написал отчёт?' },
        { who: 'B', en: 'Almost done.', ru: 'Почти закончил.' },
        { who: 'A', en: 'Great, send it soon!', ru: 'Отлично, отправь скоро!' } ] },
    { emoji: '🎯', affix: 'try', title: 'Попытка', lines: [
        { who: 'A', en: 'Let me <b>try</b> again.', ru: 'Дай попробую снова.' },
        { who: 'B', en: 'Sure, take your time.', ru: 'Конечно, не спеши.' },
        { who: 'A', en: 'Got it!', ru: 'Получилось!' } ] },
    { emoji: '🎪', affix: 'visit', title: 'Визит', lines: [
        { who: 'A', en: 'Would you like to <b>visit</b> us?', ru: 'Хочешь нас навестить?' },
        { who: 'B', en: 'I\'d love to!', ru: 'С удовольствием!' },
        { who: 'A', en: 'See you soon.', ru: 'До скорого.' } ] },
    { emoji: '🎨', affix: 'make', title: 'Хобби-крафт', lines: [
        { who: 'A', en: 'Can you <b>make</b> a cake?', ru: 'Можешь испечь торт?' },
        { who: 'B', en: 'Yes, my grandmother taught me.', ru: 'Да, бабушка научила.' },
        { who: 'A', en: 'Lucky you!', ru: 'Везёт тебе!' } ] },
    { emoji: '🎓', affix: 'teach', title: 'Наставник', lines: [
        { who: 'A', en: 'Can you <b>teach</b> me?', ru: 'Можешь меня научить?' },
        { who: 'B', en: 'Of course!', ru: 'Конечно!' },
        { who: 'A', en: 'You\'re a great teacher!', ru: 'Ты отличный учитель!' } ] },
    { emoji: '🎉', affix: 'win', title: 'Победа', lines: [
        { who: 'A', en: 'Did you <b>win</b>?', ru: 'Ты победил?' },
        { who: 'B', en: 'Yes, first place!', ru: 'Да, первое место!' },
        { who: 'A', en: 'Congratulations!', ru: 'Поздравляю!' } ] },
    { emoji: '📖', affix: 'understand', title: 'Понимание', lines: [
        { who: 'A', en: 'Do you <b>understand</b>?', ru: 'Ты понимаешь?' },
        { who: 'B', en: 'Not really.', ru: 'Не очень.' },
        { who: 'A', en: 'Let me explain again.', ru: 'Дай объясню ещё раз.' } ] },
    { emoji: '🎈', affix: 'enjoy', title: 'Удовольствие', lines: [
        { who: 'A', en: 'Do you <b>enjoy</b> your job?', ru: 'Тебе нравится работа?' },
        { who: 'B', en: 'Yes, very much!', ru: 'Да, очень!' },
        { who: 'A', en: 'That\'s wonderful.', ru: 'Это прекрасно.' } ] }
);

// ───────────────────────────────────────────────────────────
// 🆕 50+ ДИКТАНТОВ
// ───────────────────────────────────────────────────────────
dictationBank.push(
    // ЛЁГКИЕ (по 10)
    { level: 'easy', emoji: '🌱', en: 'I like tea.', ru: 'Я люблю чай.', affix: '-' },
    { level: 'easy', emoji: '🌱', en: 'She is a doctor.', ru: 'Она врач.', affix: '-er' },
    { level: 'easy', emoji: '🌱', en: 'We play football.', ru: 'Мы играем в футбол.', affix: '-' },
    { level: 'easy', emoji: '🌱', en: 'The cat is small.', ru: 'Кошка маленькая.', affix: '-' },
    { level: 'easy', emoji: '🌱', en: 'My mother is kind.', ru: 'Моя мама добрая.', affix: 'un-/kind' },
    { level: 'easy', emoji: '🌱', en: 'It is a nice day.', ru: 'Хороший день.', affix: '-' },
    { level: 'easy', emoji: '🌱', en: 'He is unhappy today.', ru: 'Он сегодня несчастен.', affix: 'un-' },
    { level: 'easy', emoji: '🌱', en: 'Please rewrite this.', ru: 'Перепиши это, пожалуйста.', affix: 're-' },
    { level: 'easy', emoji: '🌱', en: 'She is careless.', ru: 'Она безалаберна.', affix: '-less' },
    { level: 'easy', emoji: '🌱', en: 'This is useful.', ru: 'Это полезно.', affix: '-ful' },
    // СРЕДНИЕ (по 15)
    { level: 'medium', emoji: '🌿', en: 'They misunderstand me.', ru: 'Они меня не понимают.', affix: 'mis-' },
    { level: 'medium', emoji: '🌿', en: 'He overslept again.', ru: 'Он снова проспал.', affix: 'over-' },
    { level: 'medium', emoji: '🌿', en: 'We underestimate her.', ru: 'Мы её недооцениваем.', affix: 'under-' },
    { level: 'medium', emoji: '🌿', en: 'The show was outstanding.', ru: 'Шоу было потрясающим.', affix: 'out-' },
    { level: 'medium', emoji: '🌿', en: 'They disagreed.', ru: 'Они не согласились.', affix: 'dis-' },
    { level: 'medium', emoji: '🌿', en: 'Communication is key.', ru: 'Общение — ключ.', affix: '-tion' },
    { level: 'medium', emoji: '🌿', en: 'She prepares dinner.', ru: 'Она готовит ужин.', affix: 'pre-' },
    { level: 'medium', emoji: '🌿', en: 'Postpone the meeting.', ru: 'Отложи встречу.', affix: 'post-' },
    { level: 'medium', emoji: '🌿', en: 'Do not mislead me.', ru: 'Не вводи меня в заблуждение.', affix: 'mis-' },
    { level: 'medium', emoji: '🌿', en: 'He is overweight.', ru: 'У него лишний вес.', affix: 'over-' },
    { level: 'medium', emoji: '🌿', en: 'It is impossible.', ru: 'Это невозможно.', affix: 'im-' },
    { level: 'medium', emoji: '🌿', en: 'She is a teacher.', ru: 'Она учительница.', affix: '-er' },
    { level: 'medium', emoji: '🌿', en: 'Interact with them.', ru: 'Взаимодействуй с ними.', affix: 'inter-' },
    { level: 'medium', emoji: '🌿', en: 'He is antisocial.', ru: 'Он необщительный.', affix: 'anti-' },
    { level: 'medium', emoji: '🌿', en: 'Rebuild the bridge.', ru: 'Перестрой мост.', affix: 're-' },
    // СЛОЖНЫЕ (по 20)
    { level: 'hard', emoji: '🌳', en: 'Her happiness was overwhelming.', ru: 'Её счастье было всепоглощающим.', affix: '-ness/over-' },
    { level: 'hard', emoji: '🌳', en: 'The reorganization improved productivity.', ru: 'Реорганизация улучшила производительность.', affix: 're-/-tion/-ity' },
    { level: 'hard', emoji: '🌳', en: 'Intercultural communication is indispensable.', ru: 'Межкультурное общение незаменимо.', affix: 'inter-/-able' },
    { level: 'hard', emoji: '🌳', en: 'Unbelievable but true.', ru: 'Невероятно, но правда.', affix: 'un-/-able' },
    { level: 'hard', emoji: '🌳', en: 'The supervisor decided.', ru: 'Руководитель решил.', affix: 'super-/-or' },
    { level: 'hard', emoji: '🌳', en: 'Communication was unproductive.', ru: 'Общение было непродуктивным.', affix: 'un-/-ive' },
    { level: 'hard', emoji: '🌳', en: 'The misunderstanding was resolved.', ru: 'Недоразумение было улажено.', affix: 'mis-/-ing' },
    { level: 'hard', emoji: '🌳', en: 'Irreversible decision was made.', ru: 'Было принято необратимое решение.', affix: 'ir-/-ible' },
    { level: 'hard', emoji: '🌳', en: 'Their interaction was extraordinary.', ru: 'Их взаимодействие было необыкновенным.', affix: 'inter-/-ary' },
    { level: 'hard', emoji: '🌳', en: 'The prediction was accurate.', ru: 'Предсказание было точным.', affix: 'pre-/-tion' },
    { level: 'hard', emoji: '🌳', en: 'Independence is important.', ru: 'Независимость важна.', affix: 'in-/-ence' },
    { level: 'hard', emoji: '🌳', en: 'Reproduction is essential.', ru: 'Размножение необходимо.', affix: 're-/-tion' },
    { level: 'hard', emoji: '🌳', en: 'Disconnection happened suddenly.', ru: 'Отключение произошло внезапно.', affix: 'dis-/-tion' },
    { level: 'hard', emoji: '🌳', en: 'Her unkindness surprised me.', ru: 'Её недоброта меня удивила.', affix: 'un-/-ness' },
    { level: 'hard', emoji: '🌳', en: 'Reorganization takes time.', ru: 'Реорганизация занимает время.', affix: 're-/-tion' },
    { level: 'hard', emoji: '🌳', en: 'Multicultural society grows.', ru: 'Мультикультурное общество растёт.', affix: 'multi-/-al' },
    { level: 'hard', emoji: '🌳', en: 'Underestimation is dangerous.', ru: 'Недооценка опасна.', affix: 'under-/-tion' },
    { level: 'hard', emoji: '🌳', en: 'Supernatural events exist.', ru: 'Сверхъестественные события существуют.', affix: 'super-/-al' },
    { level: 'hard', emoji: '🌳', en: 'Autobiography is interesting.', ru: 'Автобиография интересна.', affix: 'auto-/-graphy' },
    { level: 'hard', emoji: '🌳', en: 'Photography is my passion.', ru: 'Фотография — моя страсть.', affix: 'photo-/-graphy' }
);

// ───────────────────────────────────────────────────────────
// 🆕 8 НОВЫХ КВИЗОВ (пополнение miniQuizzes)
// ───────────────────────────────────────────────────────────
miniQuizzes.push(
    {
        id: 'dialogues-quiz', emoji: '💬', title: 'Диалоги: базовый',
        questions: [
            { q: 'Как ответить на <b>How are you?</b>', options: ['I\'m fine.', 'You\'re welcome.', 'See you.'], correct: 0, hint: 'Стандартный ответ' },
            { q: 'Что значит <b>See you soon</b>?', options: ['Привет', 'До скорого', 'Спасибо'], correct: 1, hint: 'Прощание' },
            { q: 'Как заказать кофе?', options: ['I want coffee.', 'Can I have a coffee?', 'Coffee me.'], correct: 1, hint: 'Вежливая форма' }
        ]
    },
    {
        id: 'time-quiz', emoji: '⏰', title: 'Время: базовый',
        questions: [
            { q: 'Как сказать <b>в 7 часов</b>?', options: ['in 7', 'at 7', 'on 7'], correct: 1, hint: 'Для точного времени' },
            { q: 'Как сказать <b>в июле</b>?', options: ['on July', 'at July', 'in July'], correct: 2, hint: 'Для месяцев' },
            { q: 'Как сказать <b>в понедельник</b>?', options: ['on Monday', 'at Monday', 'in Monday'], correct: 0, hint: 'Для дней' }
        ]
    },
    {
        id: 'prepositions-quiz', emoji: '🧭', title: 'Предлоги места',
        questions: [
            { q: 'Где книга <b>на</b> столе?', options: ['in', 'on', 'at'], correct: 1, hint: 'На поверхности' },
            { q: 'Где кот <b>в</b> коробке?', options: ['in', 'on', 'at'], correct: 0, hint: 'Внутри' },
            { q: 'Где встреча? <b>у</b> входа', options: ['in', 'on', 'at'], correct: 2, hint: 'Точка' }
        ]
    },
    {
        id: 'modals-quiz', emoji: '🎩', title: 'Модальные',
        questions: [
            { q: 'Что выбрать: <b>мягкий совет</b>?', options: ['must', 'should', 'can'], correct: 1, hint: 'Should = совет' },
            { q: 'Что выбрать: <b>строгая необходимость</b>?', options: ['must', 'may', 'might'], correct: 0, hint: 'Must = строго' },
            { q: 'Что выбрать: <b>вежливая просьба</b>?', options: ['must', 'will', 'could'], correct: 2, hint: 'Could = вежливо' }
        ]
    },
    {
        id: 'questions-quiz', emoji: '❓', title: 'Вопросительные слова',
        questions: [
            { q: 'Что выбрать для <b>возраста</b>?', options: ['How many', 'How old', 'How much'], correct: 1, hint: 'How old = возраст' },
            { q: 'Что выбрать для <b>количества денег</b>?', options: ['How many', 'How old', 'How much'], correct: 2, hint: 'How much = неисчисл.' },
            { q: 'Что выбрать для <b>количества книг</b>?', options: ['How many', 'How old', 'How much'], correct: 0, hint: 'How many = исчисл.' }
        ]
    },
    {
        id: 'essay-quiz', emoji: '✍️', title: 'Связки для эссе',
        questions: [
            { q: 'Что лучше для <b>вступления</b>?', options: ['First and foremost', 'In conclusion', 'However'], correct: 0, hint: 'Начало' },
            { q: 'Что лучше для <b>контраста</b>?', options: ['Secondly', 'However', 'Furthermore'], correct: 1, hint: 'Контраст' },
            { q: 'Что лучше для <b>заключения</b>?', options: ['In conclusion', 'First of all', 'Additionally'], correct: 0, hint: 'Итог' }
        ]
    },
    {
        id: 'tenses-quiz', emoji: '⏳', title: 'Времена: базовый',
        questions: [
            { q: 'Что выбрать для <b>регулярного действия</b>?', options: ['Present Simple', 'Present Continuous', 'Past Simple'], correct: 0, hint: 'Каждый день' },
            { q: 'Что выбрать для <b>действия сейчас</b>?', options: ['Present Simple', 'Present Continuous', 'Past Simple'], correct: 1, hint: 'Прямо сейчас' },
            { q: 'Что выбрать для <b>вчерашнего действия</b>?', options: ['Present Simple', 'Present Continuous', 'Past Simple'], correct: 2, hint: 'Вчера' }
        ]
    },
    {
        id: 'idioms-quiz', emoji: '💡', title: 'Идиомы: базовый',
        questions: [
            { q: 'Что значит <b>piece of cake</b>?', options: ['Кусок торта', 'Очень легко', 'Сладко'], correct: 1, hint: 'Идиома' },
            { q: 'Что значит <b>break a leg</b>?', options: ['Сломать ногу', 'Удачи!', 'Потанцевать'], correct: 1, hint: 'Пожелание' },
            { q: 'Что значит <b>hit the books</b>?', options: ['Ударить книгу', 'Сесть за учёбу', 'Купить книги'], correct: 1, hint: 'Идиома' }
        ]
    }
);

// ═══════════════════════════════════════════════════════════
// 🆕 РАСШИРЕНИЕ БАЗЫ v4 — БОЛЬШОЕ ПРОДОЛЖЕНИЕ
// ═══════════════════════════════════════════════════════════

// ───────────────────────────────────────────────────────────
// 🆕 15 НОВЫХ ПРИСТАВОК
// ───────────────────────────────────────────────────────────
prefixes.push(
    { id: 'infra', type: 'prefix', affix: 'infra-', emoji: '⬇️',
      meaning: 'ПОД / НИЖЕ', assoc: 'infrastructure = под конструкцией',
      explanation: 'infra- означает "под" или "ниже".',
      words: [
        { word: 'infrastructure', transcription: '[ˈɪnfrəstrʌktʃə]', trans: 'инфраструктура', ex: 'Good <b>infra</b>structure.', exRu: 'Хорошая инфраструктура.' },
        { word: 'infrared', transcription: '[ˌɪnfrəˈred]', trans: 'инфракрасный', ex: '<b>Infra</b>red light.', exRu: 'Инфракрасный свет.' }
      ]
    },
    { id: 'quad', type: 'prefix', affix: 'quad- / quadr-', emoji: '4️⃣',
      meaning: 'ЧЕТЫРЕ', assoc: 'quadrilateral = четыре стороны',
      explanation: 'quad- означает "четыре".',
      words: [
        { word: 'quadrilateral', transcription: '[ˌkwɒdrɪˈlætərəl]', trans: 'четырёхугольник', ex: 'A <b>quadri</b>lateral shape.', exRu: 'Четырёхугольная форма.' },
        { word: 'quadruple', transcription: '[kwɒˈdruːpl]', trans: 'учетверить', ex: 'Prices <b>quadru</b>pled.', exRu: 'Цены выросли вчетверо.' }
      ]
    },
    { id: 'penta', type: 'prefix', affix: 'penta-', emoji: '5️⃣',
      meaning: 'ПЯТЬ', assoc: 'pentagon = пять углов',
      explanation: 'penta- означает "пять".',
      words: [
        { word: 'pentagon', transcription: '[ˈpentəɡən]', trans: 'пятиугольник', ex: 'The <b>penta</b>gon building.', exRu: 'Здание Пентагона.' },
        { word: 'pentathlon', transcription: '[penˈtæθlən]', trans: 'пятиборье', ex: 'Modern <b>penta</b>thlon.', exRu: 'Современное пятиборье.' }
      ]
    },
    { id: 'hexa', type: 'prefix', affix: 'hexa- / hex-', emoji: '6️⃣',
      meaning: 'ШЕСТЬ', assoc: 'hexagon = шесть углов',
      explanation: 'hexa- означает "шесть".',
      words: [
        { word: 'hexagon', transcription: '[ˈheksəɡən]', trans: 'шестиугольник', ex: 'A honeycomb <b>hexa</b>gon.', exRu: 'Соты — шестиугольники.' },
        { word: 'hexadecimal', transcription: '[ˌheksəˈdesɪml]', trans: 'шестнадцатеричный', ex: 'A <b>hexa</b>decimal code.', exRu: 'Шестнадцатеричный код.' }
      ]
    },
    { id: 'octo', type: 'prefix', affix: 'octo- / oct-', emoji: '8️⃣',
      meaning: 'ВОСЕМЬ', assoc: 'octopus = восемь ног',
      explanation: 'octo- означает "восемь".',
      words: [
        { word: 'octopus', transcription: '[ˈɒktəpəs]', trans: 'осьминог', ex: 'A giant <b>octo</b>pus.', exRu: 'Гигантский осьминог.' },
        { word: 'October', transcription: '[ɒkˈtəʊbə]', trans: 'октябрь', ex: 'Cold in <b>Octo</b>ber.', exRu: 'Холодно в октябре.' },
        { word: 'octagon', transcription: '[ˈɒktəɡən]', trans: 'восьмиугольник', ex: 'An <b>octa</b>gon room.', exRu: 'Восьмиугольная комната.' }
      ]
    },
    { id: 'deca', type: 'prefix', affix: 'deca- / dec-', emoji: '🔟',
      meaning: 'ДЕСЯТЬ', assoc: 'decade = десять лет',
      explanation: 'deca- означает "десять".',
      words: [
        { word: 'decade', transcription: '[ˈdekeɪd]', trans: 'десятилетие', ex: 'A great <b>dec</b>ade.', exRu: 'Великое десятилетие.' },
        { word: 'December', transcription: '[dɪˈsembə]', trans: 'декабрь', ex: 'Snowy <b>Decem</b>ber.', exRu: 'Снежный декабрь.' },
        { word: 'decimal', transcription: '[ˈdesɪml]', trans: 'десятичный', ex: 'A <b>dec</b>imal number.', exRu: 'Десятичное число.' }
      ]
    },
    { id: 'cent', type: 'prefix', affix: 'cent- / centi-', emoji: '💯',
      meaning: 'СТО', assoc: 'century = сто лет',
      explanation: 'cent- означает "сто".',
      words: [
        { word: 'century', transcription: '[ˈsentʃəri]', trans: 'век', ex: 'A new <b>cent</b>ury.', exRu: 'Новый век.' },
        { word: 'centimeter', transcription: '[ˈsentɪmiːtə]', trans: 'сантиметр', ex: 'Ten <b>centi</b>meters.', exRu: 'Десять сантиметров.' },
        { word: 'percent', transcription: '[pəˈsent]', trans: 'процент', ex: 'Fifty <b>per cent</b>.', exRu: 'Пятьдесят процентов.' }
      ]
    },
    { id: 'milli', type: 'prefix', affix: 'milli- / mille-', emoji: '🔢',
      meaning: 'ТЫСЯЧА', assoc: 'millennium = тысяча лет',
      explanation: 'milli- означает "тысяча".',
      words: [
        { word: 'millennium', transcription: '[mɪˈleniəm]', trans: 'тысячелетие', ex: 'A new <b>mill</b>ennium.', exRu: 'Новое тысячелетие.' },
        { word: 'millimeter', transcription: '[ˈmɪlimiːtə]', trans: 'миллиметр', ex: 'One <b>milli</b>meter.', exRu: 'Один миллиметр.' },
        { word: 'million', transcription: '[ˈmɪljən]', trans: 'миллион', ex: 'A <b>mill</b>ion dollars.', exRu: 'Миллион долларов.' }
      ]
    },
    { id: 'socio', type: 'prefix', affix: 'socio-', emoji: '👥',
      meaning: 'ОБЩЕСТВО', assoc: 'sociology = наука об обществе',
      explanation: 'socio- означает "общество".',
      words: [
        { word: 'sociology', transcription: '[ˌsəʊsiˈɒlədʒi]', trans: 'социология', ex: 'Study <b>socio</b>logy.', exRu: 'Изучай социологию.' },
        { word: 'socioeconomic', transcription: '[ˌsəʊsiəʊiːkəˈnɒmɪk]', trans: 'социально-экономический', ex: 'A <b>socio</b>economic factor.', exRu: 'Социально-экономический фактор.' }
      ]
    },
    { id: 'ethno', type: 'prefix', affix: 'ethno-', emoji: '🌍',
      meaning: 'НАРОД', assoc: 'ethnography = описание народов',
      explanation: 'ethno- означает "народ".',
      words: [
        { word: 'ethnography', transcription: '[eθˈnɒɡrəfi]', trans: 'этнография', ex: 'Study <b>ethno</b>graphy.', exRu: 'Изучай этнографию.' },
        { word: 'ethnocentric', transcription: '[ˌeθnəʊˈsentrɪk]', trans: 'этноцентричный', ex: 'An <b>ethno</b>centric view.', exRu: 'Этноцентричный взгляд.' }
      ]
    },
    { id: 'astro2', type: 'prefix', affix: 'astro-', emoji: '🚀',
      meaning: 'ЗВЕЗДА / КОСМОС', assoc: 'astronaut = звёздный путешественник',
      explanation: 'astro- означает "звезда".',
      words: [
        { word: 'astrophysics', transcription: '[ˌæstrəʊˈfɪzɪks]', trans: 'астрофизика', ex: 'Study <b>astro</b>physics.', exRu: 'Изучай астрофизику.' },
        { word: 'astrology', transcription: '[əˈstrɒlədʒi]', trans: 'астрология', ex: 'Believe in <b>astro</b>logy?', exRu: 'Веришь в астрологию?' }
      ]
    },
    { id: 'biblio', type: 'prefix', affix: 'biblio-', emoji: '📚',
      meaning: 'КНИГА', assoc: 'bibliophile = любитель книг',
      explanation: 'biblio- означает "книга".',
      words: [
        { word: 'bibliography', transcription: '[ˌbɪbliˈɒɡrəfi]', trans: 'библиография', ex: 'Check the <b>biblio</b>graphy.', exRu: 'Проверь библиографию.' },
        { word: 'bibliophile', transcription: '[ˈbɪbliəfaɪl]', trans: 'книголюб', ex: 'A true <b>biblio</b>phile.', exRu: 'Настоящий книголюб.' }
      ]
    },
    { id: 'phono', type: 'prefix', affix: 'phono-', emoji: '🔊',
      meaning: 'ЗВУК', assoc: 'phonograph = записывающий звук',
      explanation: 'phono- означает "звук".',
      words: [
        { word: 'phonograph', transcription: '[ˈfəʊnəɡrɑːf]', trans: 'фонограф', ex: 'An old <b>phono</b>graph.', exRu: 'Старый фонограф.' },
        { word: 'phonetics', transcription: '[fəˈnetɪks]', trans: 'фонетика', ex: 'Study <b>phono</b>logy.', exRu: 'Изучай фонетику.' }
      ]
    },
    { id: 'euro', type: 'prefix', affix: 'euro-', emoji: '🇪🇺',
      meaning: 'ЕВРОПА', assoc: 'European',
      explanation: 'euro- означает "Европа".',
      words: [
        { word: 'Eurocentric', transcription: '[ˌjʊərəʊˈsentrɪk]', trans: 'евроцентричный', ex: 'A <b>Euro</b>centric view.', exRu: 'Евроцентричный взгляд.' },
        { word: 'Eurosceptic', transcription: '[ˈjʊərəʊskeptɪk]', trans: 'евроскептик', ex: 'A <b>Euro</b>sceptic politician.', exRu: 'Политик-евроскептик.' }
      ]
    },
    { id: 'agro', type: 'prefix', affix: 'agro- / agri-', emoji: '🌾',
      meaning: 'ПОЛЕ / СЕЛЬСКОЕ ХОЗЯЙСТВО', assoc: 'agriculture',
      explanation: 'agro- означает "поле".',
      words: [
        { word: 'agriculture', transcription: '[ˈæɡrɪkʌltʃə]', trans: 'сельское хозяйство', ex: 'Modern <b>agri</b>culture.', exRu: 'Современное сельское хозяйство.' },
        { word: 'agroindustry', transcription: '[ˌæɡrəʊˈɪndəstri]', trans: 'агропромышленность', ex: '<b>Agro</b>industry grows.', exRu: 'Агропром растёт.' }
      ]
    }
);

// ───────────────────────────────────────────────────────────
// 🆕 15 НОВЫХ СУФФИКСОВ
// ───────────────────────────────────────────────────────────
prefixes.push(
    { id: 'cy', type: 'suffix', affix: '-cy', emoji: '💠',
      meaning: 'СОСТОЯНИЕ / КАЧЕСТВО', assoc: 'accuracy = точность',
      explanation: '-cy образует существительное.',
      words: [
        { word: 'accuracy', transcription: '[ˈækjərəsi]', trans: 'точность', ex: 'Aim for <b>accur</b>acy.', exRu: 'Стремись к точности.' },
        { word: 'privacy', transcription: '[ˈprɪvəsi]', trans: 'приватность', ex: 'Protect your <b>priv</b>acy.', exRu: 'Защити приватность.' },
        { word: 'agency', transcription: '[ˈeɪdʒənsi]', trans: 'агентство', ex: 'A travel <b>ag</b>ency.', exRu: 'Турагентство.' }
      ]
    },
    { id: 'itude', type: 'suffix', affix: '-itude', emoji: '💠',
      meaning: 'СОСТОЯНИЕ', assoc: 'gratitude = благодарность',
      explanation: '-itude образует существительное.',
      words: [
        { word: 'gratitude', transcription: '[ˈɡrætɪtjuːd]', trans: 'благодарность', ex: 'Show <b>grat</b>itude.', exRu: 'Прояви благодарность.' },
        { word: 'solitude', transcription: '[ˈsɒlɪtjuːd]', trans: 'одиночество', ex: 'Enjoy <b>sol</b>itude.', exRu: 'Наслаждайся одиночеством.' },
        { word: 'attitude', transcription: '[ˈætɪtjuːd]', trans: 'отношение', ex: 'A positive <b>att</b>itude.', exRu: 'Позитивное отношение.' }
      ]
    },
    { id: 'ure', type: 'suffix', affix: '-ure', emoji: '💠',
      meaning: 'ДЕЙСТВИЕ / РЕЗУЛЬТАТ', assoc: 'pressure = давление',
      explanation: '-ure образует существительное.',
      words: [
        { word: 'pressure', transcription: '[ˈpreʃə]', trans: 'давление', ex: 'Under <b>press</b>ure.', exRu: 'Под давлением.' },
        { word: 'pleasure', transcription: '[ˈpleʒə]', trans: 'удовольствие', ex: 'A great <b>pleas</b>ure.', exRu: 'Большое удовольствие.' },
        { word: 'failure', transcription: '[ˈfeɪljə]', trans: 'неудача', ex: 'Learn from <b>fail</b>ure.', exRu: 'Учись на неудачах.' },
        { word: 'mixture', transcription: '[ˈmɪkstʃə]', trans: 'смесь', ex: 'A strange <b>mixt</b>ure.', exRu: 'Странная смесь.' }
      ]
    },
    { id: 'y2', type: 'suffix', affix: '-y / -ity', emoji: '🎨',
      meaning: 'СКЛОННЫЙ / КАЧЕСТВО', assoc: 'rainy = дождливый',
      explanation: '-y образует прилагательное.',
      words: [
        { word: 'rainy', transcription: '[ˈreɪni]', trans: 'дождливый', ex: 'A <b>rain</b>y day.', exRu: 'Дождливый день.' },
        { word: 'sunny', transcription: '[ˈsʌni]', trans: 'солнечный', ex: 'A <b>sun</b>ny morning.', exRu: 'Солнечное утро.' },
        { word: 'windy', transcription: '[ˈwɪndi]', trans: 'ветреный', ex: 'A <b>wind</b>y evening.', exRu: 'Ветреный вечер.' },
        { word: 'sleepy', transcription: '[ˈsliːpi]', trans: 'сонный', ex: 'I feel <b>sleep</b>y.', exRu: 'Я чувствую сонливость.' }
      ]
    },
    { id: 'ern', type: 'suffix', affix: '-ern', emoji: '🧭',
      meaning: 'НАПРАВЛЕНИЕ', assoc: 'northern = северный',
      explanation: '-ern образует прилагательное направления.',
      words: [
        { word: 'northern', transcription: '[ˈnɔːðən]', trans: 'северный', ex: 'A <b>north</b>ern city.', exRu: 'Северный город.' },
        { word: 'southern', transcription: '[ˈsʌðən]', trans: 'южный', ex: 'A <b>south</b>ern accent.', exRu: 'Южный акцент.' },
        { word: 'eastern', transcription: '[ˈiːstən]', trans: 'восточный', ex: 'The <b>east</b>ern coast.', exRu: 'Восточное побережье.' },
        { word: 'western', transcription: '[ˈwestən]', trans: 'западный', ex: 'A <b>west</b>ern film.', exRu: 'Вестерн.' }
      ]
    },
    { id: 'most', type: 'suffix', affix: '-most', emoji: '🎯',
      meaning: 'САМЫЙ', assoc: 'topmost = самый верхний',
      explanation: '-most означает "самый".',
      words: [
        { word: 'topmost', transcription: '[ˈtɒpməʊst]', trans: 'самый верхний', ex: 'The <b>top</b>most shelf.', exRu: 'Самая верхняя полка.' },
        { word: 'foremost', transcription: '[ˈfɔːməʊst]', trans: 'передовой', ex: 'The <b>fore</b>most expert.', exRu: 'Передовой эксперт.' },
        { word: 'utmost', transcription: '[ˈʌtməʊst]', trans: 'крайний', ex: 'Of <b>ut</b>most importance.', exRu: 'Крайне важно.' }
      ]
    },
    { id: 'ise', type: 'suffix', affix: '-ise / -ize', emoji: '⚙️',
      meaning: 'ДЕЛАТЬ', assoc: 'realise = осознавать',
      explanation: '-ise / -ize превращает в глагол.',
      words: [
        { word: 'realise', transcription: '[ˈriːəlaɪz]', trans: 'осознавать', ex: 'I <b>real</b>ise now.', exRu: 'Я осознаю теперь.' },
        { word: 'summarise', transcription: '[ˈsʌməraɪz]', trans: 'обобщать', ex: '<b>Summar</b>ise the text.', exRu: 'Обобщи текст.' },
        { word: 'criticise', transcription: '[ˈkrɪtɪsaɪz]', trans: 'критиковать', ex: 'Don\'t <b>critic</b>ise!', exRu: 'Не критикуй!' }
      ]
    },
    { id: 'ling', type: 'suffix', affix: '-ling', emoji: '👶',
      meaning: 'МАЛЕНЬКИЙ / МОЛОДОЙ', assoc: 'duckling = утёнок',
      explanation: '-ling означает "маленький".',
      words: [
        { word: 'duckling', transcription: '[ˈdʌklɪŋ]', trans: 'утёнок', ex: 'A cute <b>duck</b>ling.', exRu: 'Милый утёнок.' },
        { word: 'sibling', transcription: '[ˈsɪblɪŋ]', trans: 'брат или сестра', ex: 'My <b>sib</b>ling.', exRu: 'Мой брат/сестра.' },
        { word: 'underling', transcription: '[ˈʌndəlɪŋ]', trans: 'подчинённый', ex: 'A mere <b>under</b>ling.', exRu: 'Всего лишь подчинённый.' }
      ]
    },
    { id: 'ate2', type: 'suffix', affix: '-ate', emoji: '⚡',
      meaning: 'СДЕЛАТЬ / ПОЛНЫЙ', assoc: 'accurate = точный',
      explanation: '-ate может быть глаголом или прилагательным.',
      words: [
        { word: 'accurate', transcription: '[ˈækjərət]', trans: 'точный', ex: 'An <b>accur</b>ate answer.', exRu: 'Точный ответ.' },
        { word: 'adequate', transcription: '[ˈædɪkwət]', trans: 'адекватный', ex: 'An <b>adequ</b>ate response.', exRu: 'Адекватный ответ.' },
        { word: 'passionate', transcription: '[ˈpæʃənət]', trans: 'страстный', ex: 'A <b>passion</b>ate speech.', exRu: 'Страстная речь.' }
      ]
    },
    { id: 'ee2', type: 'suffix', affix: '-ee / -eer', emoji: '👤',
      meaning: 'ЛИЦО', assoc: 'engineer = инженер',
      explanation: '-ee / -eer образуют существительное-профессию.',
      words: [
        { word: 'engineer', transcription: '[ˌendʒɪˈnɪə]', trans: 'инженер', ex: 'A software <b>engin</b>eer.', exRu: 'Программист.' },
        { word: 'volunteer', transcription: '[ˌvɒlənˈtɪə]', trans: 'волонтёр', ex: 'A young <b>volunt</b>eer.', exRu: 'Молодой волонтёр.' },
        { word: 'pioneer', transcription: '[ˌpaɪəˈnɪə]', trans: 'пионер', ex: 'A true <b>pion</b>eer.', exRu: 'Настоящий пионер.' }
      ]
    },
    { id: 'escence', type: 'suffix', affix: '-escence', emoji: '🌱',
      meaning: 'СТАНОВЛЕНИЕ', assoc: 'adolescence = взросление',
      explanation: '-escence означает процесс становления.',
      words: [
        { word: 'adolescence', transcription: '[ˌædəˈlesns]', trans: 'юность', ex: 'Troubled <b>adolesc</b>ence.', exRu: 'Трудная юность.' },
        { word: 'convalescence', transcription: '[ˌkɒnvəˈlesns]', trans: 'выздоровление', ex: 'Long <b>convalesc</b>ence.', exRu: 'Долгое выздоровление.' }
      ]
    },
    { id: 'escent', type: 'suffix', affix: '-escent', emoji: '🌱',
      meaning: 'СТАНОВЯЩИЙСЯ', assoc: 'fluorescent',
      explanation: '-escent образует прилагательное.',
      words: [
        { word: 'fluorescent', transcription: '[ˌflʊəˈresnt]', trans: 'флуоресцентный', ex: '<b>Fluoresc</b>ent light.', exRu: 'Флуоресцентный свет.' },
        { word: 'iridescent', transcription: '[ˌɪrɪˈdesnt]', trans: 'переливающийся', ex: 'An <b>iridesc</b>ent shell.', exRu: 'Переливающаяся ракушка.' }
      ]
    },
    { id: 'aceous', type: 'suffix', affix: '-aceous', emoji: '🌿',
      meaning: 'ПОДОБНЫЙ / ИЗ СЕМЕЙСТВА', assoc: 'herbaceous',
      explanation: '-aceous означает "подобный".',
      words: [
        { word: 'herbaceous', transcription: '[hɜːˈbeɪʃəs]', trans: 'травянистый', ex: 'A <b>herb</b>aceous border.', exRu: 'Травянистая клумба.' },
        { word: 'cretaceous', transcription: '[krɪˈteɪʃəs]', trans: 'меловой', ex: 'The <b>Cret</b>aceous period.', exRu: 'Меловой период.' }
      ]
    },
    { id: 'ify2', type: 'suffix', affix: '-ify', emoji: '🔧',
      meaning: 'ДЕЛАТЬ ТАКИМ', assoc: 'magnify = увеличивать',
      explanation: '-ify превращает в глагол.',
      words: [
        { word: 'magnify', transcription: '[ˈmæɡnɪfaɪ]', trans: 'увеличивать', ex: '<b>Magni</b>fy the image.', exRu: 'Увеличь изображение.' },
        { word: 'verify', transcription: '[ˈverɪfaɪ]', trans: 'проверять', ex: '<b>Veri</b>fy the data.', exRu: 'Проверь данные.' },
        { word: 'identify', transcription: '[aɪˈdentɪfaɪ]', trans: 'идентифицировать', ex: '<b>Identi</b>fy the problem.', exRu: 'Определи проблему.' }
      ]
    },
    { id: 'ate3', type: 'suffix', affix: '-ate (глаг.)', emoji: '⚡',
      meaning: 'ВЫПОЛНЯТЬ ДЕЙСТВИЕ', assoc: 'demonstrate',
      explanation: '-ate образует глаголы.',
      words: [
        { word: 'demonstrate', transcription: '[ˈdemənstreɪt]', trans: 'демонстрировать', ex: '<b>Demon</b>strate it.', exRu: 'Продемонстрируй это.' },
        { word: 'dominate', transcription: '[ˈdɒmɪneɪt]', trans: 'доминировать', ex: '<b>Domin</b>ate the field.', exRu: 'Доминируй на поле.' },
        { word: 'regulate', transcription: '[ˈreɡjuleɪt]', trans: 'регулировать', ex: '<b>Regul</b>ate the market.', exRu: 'Регулируй рынок.' }
      ]
    }
);

// ───────────────────────────────────────────────────────────
// 🆕 20 НОВЫХ КОРНЕЙ
// ───────────────────────────────────────────────────────────
wordRoots.push(
    { root: 'chron2', topic: 'tech', emoji: '⏰', meaning: 'время', note: 'Греческий chronos.',
      words: [
        { word: 'chronometer', pre: '-meter', preMean: 'измерять', trans: 'хронометр', ex: 'A precise <b>chrono</b>meter.', exRu: 'Точный хронометр.' },
        { word: 'synchronize', pre: 'syn-', preMean: 'вместе', trans: 'синхронизировать', ex: '<b>Syn</b>chronize watches.', exRu: 'Синхронизируй часы.' }
      ]
    },
    { root: 'the', topic: 'mind', emoji: '🙏', meaning: 'бог', note: 'Греческий theos.',
      words: [
        { word: 'theology', pre: '-logy', preMean: 'наука', trans: 'теология', ex: 'Study <b>the</b>ology.', exRu: 'Изучай теологию.' },
        { word: 'atheist', pre: 'a-', preMean: 'без', trans: 'атеист', ex: 'An <b>a</b>theist.', exRu: 'Атеист.' }
      ]
    },
    { root: 'onym', topic: 'speech', emoji: '📛', meaning: 'имя', note: 'Греческий onoma.',
      words: [
        { word: 'synonym', pre: 'syn-', preMean: 'вместе', trans: 'синоним', ex: 'A perfect <b>syn</b>onym.', exRu: 'Идеальный синоним.' },
        { word: 'antonym', pre: 'ant-', preMean: 'против', trans: 'антоним', ex: 'An <b>ant</b>onym.', exRu: 'Антоним.' },
        { word: 'anonymous', pre: 'an-', preMean: 'без', trans: 'аноним', ex: 'An <b>an</b>onymous call.', exRu: 'Анонимный звонок.' }
      ]
    },
    { root: 'phony', topic: 'speech', emoji: '🎵', meaning: 'звук', note: 'Греческий phone.',
      words: [
        { word: 'symphony', pre: 'sym-', preMean: 'вместе', trans: 'симфония', ex: 'A beautiful <b>sym</b>phony.', exRu: 'Красивая симфония.' },
        { word: 'cacophony', pre: 'caco-', preMean: 'плохо', trans: 'какофония', ex: 'A terrible <b>caco</b>phony.', exRu: 'Ужасная какофония.' }
      ]
    },
    { root: 'dogma', topic: 'mind', emoji: '📜', meaning: 'учение', note: 'Греческий dogma.',
      words: [
        { word: 'dogma', pre: '-', preMean: '—', trans: 'догма', ex: 'A strict <b>dogma</b>.', exRu: 'Строгая догма.' },
        { word: 'dogmatic', pre: '-tic', preMean: 'прил.', trans: 'догматичный', ex: 'A <b>dogma</b>tic view.', exRu: 'Догматичный взгляд.' }
      ]
    },
    { root: 'mania', topic: 'mind', emoji: '🤪', meaning: 'безумие', note: 'Греческий mania.',
      words: [
        { word: 'maniac', pre: '-c', preMean: 'лицо', trans: 'маньяк', ex: 'A car <b>mania</b>c.', exRu: 'Маньяк-автомобилист.' },
        { word: 'kleptomania', pre: 'klepto-', preMean: 'воровать', trans: 'клептомания', ex: 'Suffer from <b>kleptomania</b>.', exRu: 'Страдать клептоманией.' }
      ]
    },
    { root: 'phage', topic: 'life', emoji: '🍽️', meaning: 'есть', note: 'Греческий phagein.',
      words: [
        { word: 'bacteriophage', pre: 'bacterio-', preMean: 'бактерия', trans: 'бактериофаг', ex: 'A <b>bacterio</b>phage.', exRu: 'Бактериофаг.' },
        { word: 'macrophage', pre: 'macro-', preMean: 'большой', trans: 'макрофаг', ex: 'A <b>macro</b>phage cell.', exRu: 'Клетка макрофаг.' }
      ]
    },
    { root: 'thermo2', topic: 'tech', emoji: '🌡️', meaning: 'тепло', note: 'Греческий therme.',
      words: [
        { word: 'thermodynamics', pre: '-dynamics', preMean: 'движение', trans: 'термодинамика', ex: 'Study <b>thermo</b>dynamics.', exRu: 'Изучай термодинамику.' },
        { word: 'thermonuclear', pre: '-nuclear', preMean: 'ядерный', trans: 'термоядерный', ex: 'A <b>thermo</b>nuclear bomb.', exRu: 'Термоядерная бомба.' }
      ]
    },
    { root: 'pluto', topic: 'tech', emoji: '🌌', meaning: 'богатство', note: 'Греческий ploutos.',
      words: [
        { word: 'plutocracy', pre: '-cracy', preMean: 'власть', trans: 'плутократия', ex: 'A <b>pluto</b>cracy.', exRu: 'Плутократия.' },
        { word: 'plutonium', pre: '-nium', preMean: 'элемент', trans: 'плутоний', ex: 'A <b>pluto</b>nium core.', exRu: 'Ядро плутония.' }
      ]
    },
    { root: 'scop', topic: 'tech', emoji: '🔭', meaning: 'смотреть', note: 'Греческий skopein.',
      words: [
        { word: 'telescope', pre: 'tele-', preMean: 'далеко', trans: 'телескоп', ex: 'Look through a <b>tele</b>scope.', exRu: 'Посмотри в телескоп.' },
        { word: 'microscope', pre: 'micro-', preMean: 'малый', trans: 'микроскоп', ex: 'Use a <b>micro</b>scope.', exRu: 'Используй микроскоп.' },
        { word: 'horoscope', pre: 'horo-', preMean: 'час', trans: 'гороскоп', ex: 'Read your <b>horo</b>scope.', exRu: 'Читай свой гороскоп.' }
      ]
    },
    { root: 'nom', topic: 'mind', emoji: '📏', meaning: 'правило', note: 'Греческий nomos.',
      words: [
        { word: 'economy', pre: 'eco-', preMean: 'дом', trans: 'экономика', ex: 'A strong <b>eco</b>nomy.', exRu: 'Сильная экономика.' },
        { word: 'autonomy', pre: 'auto-', preMean: 'сам', trans: 'автономия', ex: 'Full <b>auto</b>nomy.', exRu: 'Полная автономия.' },
        { word: 'astronomy', pre: 'astro-', preMean: 'звезда', trans: 'астрономия', ex: 'Study <b>astro</b>nomy.', exRu: 'Изучай астрономию.' }
      ]
    },
    { root: 'gen', topic: 'life', emoji: '🧬', meaning: 'род, рождение', note: 'Греческий genos.',
      words: [
        { word: 'generation', pre: '-eration', preMean: 'действие', trans: 'поколение', ex: 'A new <b>gen</b>eration.', exRu: 'Новое поколение.' },
        { word: 'genetic', pre: '-etic', preMean: 'прил.', trans: 'генетический', ex: 'A <b>gen</b>etic disease.', exRu: 'Генетическое заболевание.' },
        { word: 'generate', pre: '-erate', preMean: 'действие', trans: 'генерировать', ex: '<b>Gen</b>erate power.', exRu: 'Генерируй энергию.' }
      ]
    },
    { root: 'mater', topic: 'life', emoji: '👩', meaning: 'мать', note: 'Латинский mater.',
      words: [
        { word: 'maternal', pre: '-nal', preMean: 'прил.', trans: 'материнский', ex: 'A <b>mater</b>nal instinct.', exRu: 'Материнский инстинкт.' },
        { word: 'maternity', pre: '-nity', preMean: 'состояние', trans: 'материнство', ex: '<b>Mater</b>nity leave.', exRu: 'Декретный отпуск.' }
      ]
    },
    { root: 'pater', topic: 'life', emoji: '👨', meaning: 'отец', note: 'Латинский pater.',
      words: [
        { word: 'paternal', pre: '-nal', preMean: 'прил.', trans: 'отцовский', ex: 'A <b>pater</b>nal uncle.', exRu: 'Дядя по отцу.' },
        { word: 'patriot', pre: '-iot', preMean: 'лицо', trans: 'патриот', ex: 'A true <b>patri</b>ot.', exRu: 'Настоящий патриот.' }
      ]
    },
    { root: 'frater', topic: 'life', emoji: '👬', meaning: 'брат', note: 'Латинский frater.',
      words: [
        { word: 'fraternity', pre: '-nity', preMean: 'состояние', trans: 'братство', ex: 'A college <b>frater</b>nity.', exRu: 'Студенческое братство.' },
        { word: 'fraternal', pre: '-nal', preMean: 'прил.', trans: 'братский', ex: 'A <b>frater</b>nal twins.', exRu: 'Близнецы-братья.' }
      ]
    },
    { root: 'soror', topic: 'life', emoji: '👭', meaning: 'сестра', note: 'Латинский soror.',
      words: [
        { word: 'sorority', pre: '-ity', preMean: 'состояние', trans: 'сестринство', ex: 'Join a <b>soror</b>ity.', exRu: 'Вступи в сестринство.' },
        { word: 'sororal', pre: '-al', preMean: 'прил.', trans: 'сестринский', ex: 'A <b>soror</b>al bond.', exRu: 'Сестринская связь.' }
      ]
    },
    { root: 'lud', topic: 'mind', emoji: '🎲', meaning: 'игра', note: 'Латинский ludere.',
      words: [
        { word: 'prelude', pre: 'pre-', preMean: 'до', trans: 'прелюдия', ex: 'A musical <b>pre</b>lude.', exRu: 'Музыкальная прелюдия.' },
        { word: 'interlude', pre: 'inter-', preMean: 'между', trans: 'интерлюдия', ex: 'A short <b>inter</b>lude.', exRu: 'Короткая интерлюдия.' }
      ]
    },
    { root: 'grav', topic: 'motion', emoji: '⚖️', meaning: 'тяжёлый', note: 'Латинский gravis.',
      words: [
        { word: 'gravity', pre: '-ity', preMean: 'состояние', trans: 'гравитация', ex: 'Zero <b>grav</b>ity.', exRu: 'Невесомость.' },
        { word: 'grave', pre: '-e', preMean: 'прил.', trans: 'серьёзный', ex: 'A <b>grave</b> situation.', exRu: 'Серьёзная ситуация.' },
        { word: 'aggravate', pre: 'ag-', preMean: 'усилить', trans: 'усугублять', ex: 'Don\'t <b>aggrav</b>ate it.', exRu: 'Не усугубляй.' }
      ]
    },
    { root: 'lev', topic: 'motion', emoji: '⬆️', meaning: 'лёгкий, поднимать', note: 'Латинский levare.',
      words: [
        { word: 'elevate', pre: 'e-', preMean: 'наружу', trans: 'поднимать', ex: '<b>Elev</b>ate the box.', exRu: 'Подними коробку.' },
        { word: 'relieve', pre: 're-', preMean: 'снова', trans: 'облегчать', ex: '<b>Reliev</b>e the pain.', exRu: 'Облегчи боль.' },
        { word: 'lever', pre: '-er', preMean: 'инструмент', trans: 'рычаг', ex: 'Pull the <b>lev</b>er.', exRu: 'Потяни рычаг.' }
      ]
    }
);

// ───────────────────────────────────────────────────────────
// 🆕 5 НОВЫХ ВОЛШЕБНЫХ ГЛАГОЛОВ
// ───────────────────────────────────────────────────────────
magicVerbs.push(
    { verb: 'break', emoji: '💥', meaning: 'ЛОМАТЬ / ЛОМАТЬСЯ',
      assoc: 'break = ломать, пауза', note: 'break = ломать, разбивать, пауза.',
      senses: [
        { sense: 'ЛОМАТЬ', ru: 'ломать', ex: 'Don\'t <b>break</b> it.', exRu: 'Не сломай это.' },
        { sense: 'ПАУЗА', ru: 'пауза', ex: 'Take a <b>break</b>.', exRu: 'Сделай паузу.' }
      ],
      phrases: [
        { p: 'break down', ru: 'сломаться', ex: 'The car <b>broke down</b>.', exRu: 'Машина сломалась.' },
        { p: 'break up', ru: 'расстаться', ex: 'They <b>broke up</b>.', exRu: 'Они расстались.' },
        { p: 'break in', ru: 'вломиться', ex: 'Thieves <b>broke in</b>.', exRu: 'Воры вломились.' },
        { p: 'break out', ru: 'вспыхнуть', ex: 'A fire <b>broke out</b>.', exRu: 'Вспыхнул пожар.' }
      ]
    },
    { verb: 'call', emoji: '📞', meaning: 'ЗВАТЬ / ЗВОНИТЬ',
      assoc: 'call = звать, звонить', note: 'call = звонить, называть, звать.',
      senses: [
        { sense: 'ЗВОНИТЬ', ru: 'звонить', ex: '<b>Call</b> me tonight.', exRu: 'Позвони мне вечером.' },
        { sense: 'ЗВАТЬ', ru: 'звать', ex: 'They <b>called</b> him Tom.', exRu: 'Они назвали его Том.' }
      ],
      phrases: [
        { p: 'call off', ru: 'отменить', ex: '<b>Call off</b> the meeting.', exRu: 'Отмени встречу.' },
        { p: 'call back', ru: 'перезвонить', ex: 'I\'ll <b>call back</b>.', exRu: 'Я перезвоню.' },
        { p: 'call on', ru: 'навестить', ex: '<b>Call on</b> us soon.', exRu: 'Навести нас скоро.' }
      ]
    },
    { verb: 'bring', emoji: '📦', meaning: 'ПРИНОСИТЬ',
      assoc: 'bring = приносить', note: 'bring = приносить, приводить.',
      senses: [
        { sense: 'ПРИНОСИТЬ', ru: 'приносить', ex: '<b>Bring</b> me water.', exRu: 'Принеси воды.' },
        { sense: 'ПРИВОДИТЬ', ru: 'приводить', ex: '<b>Bring</b> a friend.', exRu: 'Приведи друга.' }
      ],
      phrases: [
        { p: 'bring up', ru: 'воспитывать', ex: 'She <b>brought up</b> 3 kids.', exRu: 'Она воспитала 3 детей.' },
        { p: 'bring back', ru: 'вернуть', ex: '<b>Bring back</b> my book.', exRu: 'Верни книгу.' },
        { p: 'bring about', ru: 'вызвать', ex: 'It <b>brought about</b> change.', exRu: 'Это вызвало перемены.' }
      ]
    },
    { verb: 'buy', emoji: '💰', meaning: 'ПОКУПАТЬ',
      assoc: 'buy = покупать', note: 'buy = покупать, приобретать.',
      senses: [
        { sense: 'ПОКУПАТЬ', ru: 'покупать', ex: 'I\'ll <b>buy</b> it.', exRu: 'Я это куплю.' },
        { sense: 'ВЕРИТЬ', ru: 'верить (разг.)', ex: 'I don\'t <b>buy</b> it.', exRu: 'Я этому не верю.' }
      ],
      phrases: [
        { p: 'buy out', ru: 'выкупить', ex: 'They <b>bought out</b> the company.', exRu: 'Они выкупили компанию.' },
        { p: 'buy in', ru: 'закупиться', ex: '<b>Buy in</b> bulk.', exRu: 'Закупись оптом.' }
      ]
    },
    { verb: 'send', emoji: '📤', meaning: 'ОТПРАВЛЯТЬ',
      assoc: 'send = отправлять', note: 'send = отправлять, посылать.',
      senses: [
        { sense: 'ОТПРАВЛЯТЬ', ru: 'отправлять', ex: '<b>Send</b> an email.', exRu: 'Отправь письмо.' },
        { sense: 'ПОСЫЛАТЬ', ru: 'посылать', ex: 'They <b>sent</b> flowers.', exRu: 'Они послали цветы.' }
      ],
      phrases: [
        { p: 'send off', ru: 'отправить', ex: '<b>Send off</b> the package.', exRu: 'Отправь посылку.' },
        { p: 'send back', ru: 'вернуть', ex: '<b>Send it back</b>.', exRu: 'Верни это.' }
      ]
    }
);

// ───────────────────────────────────────────────────────────
// 🆕 5 НОВЫХ СЛОВ-ЗАГЛУШЕК
// ───────────────────────────────────────────────────────────
magicWords.push(
    { word: 'issue', emoji: '⚠️', ru: 'проблема / вопрос',
      note: 'Issue = проблема или тема.',
      examples: [
        { ex: 'We have an <b>issue</b>.', exRu: 'У нас проблема.' },
        { ex: 'What\'s the <b>issue</b>?', exRu: 'В чём проблема?' }
      ]
    },
    { word: 'business', emoji: '💼', ru: 'дело / бизнес',
      note: 'Business = дело, бизнес.',
      examples: [
        { ex: 'It\'s not your <b>business</b>.', exRu: 'Не твоё дело.' },
        { ex: 'Mind your own <b>business</b>.', exRu: 'Займись своим делом.' }
      ]
    },
    { word: 'sense', emoji: '💡', ru: 'смысл / чувство',
      note: 'Sense = смысл, чувство.',
      examples: [
        { ex: 'It makes <b>sense</b>.', exRu: 'Это логично.' },
        { ex: 'Common <b>sense</b>.', exRu: 'Здравый смысл.' }
      ]
    },
    { word: 'order', emoji: '📋', ru: 'порядок / заказ',
      note: 'Order = порядок, заказ, приказ.',
      examples: [
        { ex: 'In <b>order</b>.', exRu: 'В порядке.' },
        { ex: 'Place an <b>order</b>.', exRu: 'Сделай заказ.' }
      ]
    },
    { word: 'mind', emoji: '🧠', ru: 'разум / возражать',
      note: 'Mind = разум, возражать.',
      examples: [
        { ex: 'Never <b>mind</b>.', exRu: 'Не важно.' },
        { ex: 'Do you <b>mind</b>?', exRu: 'Ты не против?' }
      ]
    }
);

// ───────────────────────────────────────────────────────────
// 🆕 10 НОВЫХ ФРАЗ-СПАСАЛОК
// ───────────────────────────────────────────────────────────
survivalPhrases.push(
    { en: 'Long time no see!', ru: 'Давно не виделись!' },
    { en: 'What\'s up?', ru: 'Что нового?' },
    { en: 'How\'s it going?', ru: 'Как дела?' },
    { en: 'Have a nice day!', ru: 'Хорошего дня!' },
    { en: 'You\'re welcome.', ru: 'Пожалуйста.' },
    { en: 'Excuse me, please.', ru: 'Извините, пожалуйста.' },
    { en: 'I\'m sorry to hear that.', ru: 'Мне жаль это слышать.' },
    { en: 'Congratulations!', ru: 'Поздравляю!' },
    { en: 'Good luck!', ru: 'Удачи!' },
    { en: 'See you later.', ru: 'До скорого.' }
);

// ───────────────────────────────────────────────────────────
// 🆕 10 НОВЫХ МОДАЛЬНЫХ
// ───────────────────────────────────────────────────────────
modalVerbs.push(
    { id: 'mustnt', word: 'mustn\'t', transcription: '/ˈmʌsnt/', emoji: '🚫',
      meaning: 'НЕЛЬЗЯ (запрет)', color: '#b93a3a',
      rules: ['строгий запрет', 'нельзя'],
      hint: '🚫 Mustn\'t = категорически нельзя.',
      examples: [
        { en: 'You <b>mustn\'t</b> smoke here.', ru: 'Здесь нельзя курить.' },
        { en: 'We <b>mustn\'t</b> be late.', ru: 'Нам нельзя опаздывать.' }
      ]
    },
    { id: 'neednt', word: 'needn\'t', transcription: '/ˈniːdnt/', emoji: '🎯',
      meaning: 'НЕ НУЖНО', color: '#6b8e23',
      rules: ['нет необходимости'],
      hint: '🎯 Needn\'t = не обязательно.',
      examples: [
        { en: 'You <b>needn\'t</b> come.', ru: 'Тебе не нужно приходить.' },
        { en: 'We <b>needn\'t</b> hurry.', ru: 'Нам не нужно спешить.' }
      ]
    },
    { id: 'maynot', word: 'may not', transcription: '/meɪ nɒt/', emoji: '🚫',
      meaning: 'НЕ РАЗРЕШЕНО', color: '#b97f44',
      rules: ['формальный запрет'],
      hint: '🚫 May not = не разрешается.',
      examples: [
        { en: 'You <b>may not</b> enter.', ru: 'Вам нельзя входить.' },
        { en: 'Visitors <b>may not</b> touch.', ru: 'Посетителям нельзя трогать.' }
      ]
    },
    { id: 'cannot', word: 'cannot', transcription: '/ˈkænɒt/', emoji: '❌',
      meaning: 'НЕ МОГУ (физически)', color: '#b93a3a',
      rules: ['физическая невозможность'],
      hint: '❌ Cannot = физически не могу.',
      examples: [
        { en: 'I <b>cannot</b> swim.', ru: 'Я не умею плавать.' },
        { en: 'She <b>cannot</b> come.', ru: 'Она не может прийти.' }
      ]
    },
    { id: 'willnot', word: 'will not', transcription: '/wɪl nɒt/', emoji: '🙅',
      meaning: 'НЕ БУДУ (отказ)', color: '#b97f44',
      rules: ['отказ', 'нежелание'],
      hint: '🙅 Will not = не буду (отказ).',
      examples: [
        { en: 'I <b>will not</b> do it.', ru: 'Я не буду это делать.' },
        { en: 'He <b>won\'t</b> listen.', ru: 'Он не будет слушать.' }
      ]
    },
    { id: 'mightnot', word: 'might not', transcription: '/maɪt nɒt/', emoji: '❓',
      meaning: 'МОЖЕТ И НЕ', color: '#8b6946',
      rules: ['маловероятно'],
      hint: '❓ Might not = возможно, но вряд ли.',
      examples: [
        { en: 'I <b>might not</b> come.', ru: 'Может, не приду.' },
        { en: 'It <b>might not</b> work.', ru: 'Может не сработать.' }
      ]
    },
    { id: 'shallwe', word: 'shall we', transcription: '/ʃæl wiː/', emoji: '🤝',
      meaning: 'ДАВАЙ? (предложение)', color: '#6b8e23',
      rules: ['предложение действия'],
      hint: '🤝 Shall we = давай вместе?',
      examples: [
        { en: '<b>Shall we</b> go?', ru: 'Пойдём?' },
        { en: '<b>Shall we</b> dance?', ru: 'Потанцуем?' }
      ]
    },
    { id: 'wont', word: 'won\'t', transcription: '/wəʊnt/', emoji: '🙅',
      meaning: 'НЕ БУДЕТ', color: '#b93a3a',
      rules: ['сокращение от will not'],
      hint: '🙅 Won\'t = не буду.',
      examples: [
        { en: 'I <b>won\'t</b> forget.', ru: 'Я не забуду.' },
        { en: 'It <b>won\'t</b> hurt.', ru: 'Это не будет больно.' }
      ]
    },
    { id: 'cant', word: 'can\'t', transcription: '/kɑːnt/', emoji: '❌',
      meaning: 'НЕ МОГУ', color: '#b93a3a',
      rules: ['невозможность'],
      hint: '❌ Can\'t = не могу.',
      examples: [
        { en: 'I <b>can\'t</b> today.', ru: 'Сегодня не могу.' },
        { en: 'She <b>can\'t</b> swim.', ru: 'Она не умеет плавать.' }
      ]
    },
    { id: 'lets', word: 'let\'s', transcription: '/lets/', emoji: '🎯',
      meaning: 'ДАВАЙ!', color: '#6b8e23',
      rules: ['предложение'],
      hint: '🎯 Let\'s = давай!',
      examples: [
        { en: '<b>Let\'s</b> go!', ru: 'Пойдём!' },
        { en: '<b>Let\'s</b> try.', ru: 'Давай попробуем.' }
      ]
    }
);

// ───────────────────────────────────────────────────────────
// 🆕 10 НОВЫХ СЛОВ-ЛОВУШЕК
// ───────────────────────────────────────────────────────────
trapPairs.push(
    { id: 'come-go2', emoji: '🚶🏃', title: 'COME vs GO — детали',
      rule: 'Сюда VS Туда',
      left: { word: 'come', emoji: '🚶', meaning: 'приходить (сюда)',
        examples: [
          { en: '<b>Come</b> here!', ru: 'Иди сюда!' },
          { en: '<b>Come</b> to my party.', ru: 'Приходи на вечеринку.' }
        ]
      },
      right: { word: 'go', emoji: '🏃', meaning: 'идти (туда)',
        examples: [
          { en: '<b>Go</b> there!', ru: 'Иди туда!' },
          { en: 'I <b>go</b> to work.', ru: 'Я иду на работу.' }
        ]
      }
    },
    { id: 'used-to-be', emoji: '📜✨', title: 'USED TO vs BE USED TO',
      rule: 'Раньше делал VS привык',
      left: { word: 'used to', emoji: '📜', meaning: 'раньше делал (но не сейчас)',
        examples: [
          { en: 'I <b>used to</b> play tennis.', ru: 'Я раньше играл в теннис.' },
          { en: 'She <b>used to</b> smoke.', ru: 'Она раньше курила.' }
        ]
      },
      right: { word: 'be used to', emoji: '✨', meaning: 'привык',
        examples: [
          { en: 'I am <b>used to</b> it.', ru: 'Я привык к этому.' },
          { en: 'She is <b>used to</b> waking early.', ru: 'Она привыкла рано вставать.' }
        ]
      }
    },
    { id: 'do-make-collo', emoji: '📋🔨', title: 'DO vs MAKE — 30+ коллокаций',
      rule: 'Действия с do VS создание с make',
      left: { word: 'do', emoji: '📋', meaning: 'выполнять работу',
        examples: [
          { en: '<b>Do</b> the dishes.', ru: 'Помой посуду.' },
          { en: '<b>Do</b> a favour.', ru: 'Сделай одолжение.' },
          { en: '<b>Do</b> exercise.', ru: 'Делай упражнения.' }
        ]
      },
      right: { word: 'make', emoji: '🔨', meaning: 'создавать',
        examples: [
          { en: '<b>Make</b> a decision.', ru: 'Прими решение.' },
          { en: '<b>Make</b> an offer.', ru: 'Сделай предложение.' },
          { en: '<b>Make</b> a mistake.', ru: 'Сделай ошибку.' }
        ]
      }
    },
    { id: 'prevent-stop', emoji: '🛡️✋', title: 'PREVENT vs STOP',
      rule: 'Предотвратить VS остановить',
      left: { word: 'prevent', emoji: '🛡️', meaning: 'предотвратить',
        examples: [
          { en: '<b>Prevent</b> the fire.', ru: 'Предотврати пожар.' },
          { en: '<b>Prevent</b> the disease.', ru: 'Предотврати болезнь.' }
        ]
      },
      right: { word: 'stop', emoji: '✋', meaning: 'остановить',
        examples: [
          { en: '<b>Stop</b> the car.', ru: 'Останови машину.' },
          { en: '<b>Stop</b> talking.', ru: 'Прекрати говорить.' }
        ]
      }
    },
    { id: 'look-after', emoji: '👀🛡️', title: 'LOOK AFTER vs LOOK FOR',
      rule: 'Заботиться VS искать',
      left: { word: 'look after', emoji: '🛡️', meaning: 'заботиться',
        examples: [
          { en: '<b>Look after</b> the baby.', ru: 'Присмотри за ребёнком.' },
          { en: '<b>Look after</b> your health.', ru: 'Следи за здоровьем.' }
        ]
      },
      right: { word: 'look for', emoji: '👀', meaning: 'искать',
        examples: [
          { en: '<b>Look for</b> the keys.', ru: 'Поищи ключи.' },
          { en: '<b>Look for</b> a job.', ru: 'Ищи работу.' }
        ]
      }
    },
    { id: 'hear-listen3', emoji: '👂🎧', title: 'HEAR vs LISTEN — практика',
      rule: 'Пассивно VS активно',
      left: { word: 'hear', emoji: '👂', meaning: 'слышать (пассивно)',
        examples: [
          { en: 'I <b>hear</b> a noise.', ru: 'Я слышу шум.' },
          { en: 'I <b>heard</b> the news.', ru: 'Я услышал новость.' }
        ]
      },
      right: { word: 'listen', emoji: '🎧', meaning: 'слушать (активно)',
        examples: [
          { en: '<b>Listen</b> carefully.', ru: 'Слушай внимательно.' },
          { en: '<b>Listen</b> to the radio.', ru: 'Слушай радио.' }
        ]
      }
    },
    { id: 'since-for', emoji: '📍⏰', title: 'SINCE vs FOR',
      rule: 'С какого момента VS как долго',
      left: { word: 'since', emoji: '📍', meaning: 'с какого-то момента',
        examples: [
          { en: 'I\'ve lived here <b>since</b> 2020.', ru: 'Я здесь с 2020 года.' },
          { en: '<b>Since</b> yesterday.', ru: 'Со вчера.' }
        ]
      },
      right: { word: 'for', emoji: '⏰', meaning: 'как долго',
        examples: [
          { en: 'I\'ve lived here <b>for</b> 3 years.', ru: 'Я здесь 3 года.' },
          { en: 'Wait <b>for</b> 2 hours.', ru: 'Подожди 2 часа.' }
        ]
      }
    },
    { id: 'sometime-sometimes', emoji: '📅🔁', title: 'SOMETIME vs SOMETIMES',
      rule: 'Как-то раз VS иногда',
      left: { word: 'sometime', emoji: '📅', meaning: 'как-то раз (в будущем)',
        examples: [
          { en: 'Let\'s meet <b>sometime</b>.', ru: 'Давай встретимся как-нибудь.' },
          { en: '<b>Sometime</b> next week.', ru: 'Как-нибудь на следующей неделе.' }
        ]
      },
      right: { word: 'sometimes', emoji: '🔁', meaning: 'иногда',
        examples: [
          { en: '<b>Sometimes</b> I run.', ru: 'Иногда я бегаю.' },
          { en: 'She <b>sometimes</b> sings.', ru: 'Она иногда поёт.' }
        ]
      }
    },
    { id: 'remind-remember2', emoji: '🧠📢', title: 'REMIND vs REMEMBER — практика',
      rule: 'Напоминать кому-то VS помнить самому',
      left: { word: 'remind', emoji: '📢', meaning: 'напоминать (кому-то)',
        examples: [
          { en: '<b>Remind</b> me to call.', ru: 'Напомни мне позвонить.' },
          { en: 'You <b>remind</b> me of him.', ru: 'Ты напоминаешь мне его.' }
        ]
      },
      right: { word: 'remember', emoji: '🧠', meaning: 'помнить (сам)',
        examples: [
          { en: 'I <b>remember</b> you.', ru: 'Я тебя помню.' },
          { en: '<b>Remember</b> to smile.', ru: 'Помни улыбаться.' }
        ]
      }
    },
    { id: 'make-do2', emoji: '🔨✅', title: 'MAKE vs DO — повседневные выражения',
      rule: 'Идиомы с make и do',
      left: { word: 'make', emoji: '🔨', meaning: 'типичные коллокации',
        examples: [
          { en: '<b>Make</b> friends.', ru: 'Найди друзей.' },
          { en: '<b>Make</b> sure.', ru: 'Убедись.' },
          { en: '<b>Make</b> progress.', ru: 'Прогрессируй.' }
        ]
      },
      right: { word: 'do', emoji: '✅', meaning: 'типичные коллокации',
        examples: [
          { en: '<b>Do</b> your best.', ru: 'Сделай всё возможное.' },
          { en: '<b>Do</b> harm.', ru: 'Навреди.' },
          { en: '<b>Do</b> business.', ru: 'Веди бизнес.' }
        ]
      }
    }
);

// ───────────────────────────────────────────────────────────
// 🆕 10 НОВЫХ СЛОВ-БЛИЗНЕЦОВ
// ───────────────────────────────────────────────────────────
twinWords.push(
    { id: 'cite-site-sight', emoji: '📖📍👁️', title: 'CITE / SITE / SIGHT',
      rule: 'Цитировать / Место / Зрение',
      left: { word: 'cite', emoji: '📖', pos: 'глаг.', meaning: 'цитировать',
        examples: [{ en: '<b>Cite</b> the author.', ru: 'Процитируй автора.' }]
      },
      right: { word: 'site', emoji: '📍', pos: 'сущ.', meaning: 'сайт / место',
        examples: [{ en: 'A construction <b>site</b>.', ru: 'Стройплощадка.' }]
      }
    },
    { id: 'flour-flower', emoji: '🌾🌸', title: 'FLOUR vs FLOWER',
      rule: 'Мука VS цветок',
      left: { word: 'flour', emoji: '🌾', pos: 'сущ.', meaning: 'мука',
        examples: [{ en: 'Add <b>flour</b>.', ru: 'Добавь муки.' }]
      },
      right: { word: 'flower', emoji: '🌸', pos: 'сущ.', meaning: 'цветок',
        examples: [{ en: 'A beautiful <b>flower</b>.', ru: 'Красивый цветок.' }]
      }
    },
    { id: 'aloud-allowed', emoji: '🔊✅', title: 'ALOUD vs ALLOWED',
      rule: 'Вслух VS разрешено',
      left: { word: 'aloud', emoji: '🔊', pos: 'нареч.', meaning: 'вслух',
        examples: [{ en: 'Read <b>aloud</b>.', ru: 'Читай вслух.' }]
      },
      right: { word: 'allowed', emoji: '✅', pos: 'глаг.', meaning: 'разрешено',
        examples: [{ en: 'Smoking is not <b>allowed</b>.', ru: 'Курение запрещено.' }]
      }
    },
    { id: 'brake-break', emoji: '🛑💥', title: 'BRAKE vs BREAK',
      rule: 'Тормоз VS ломать',
      left: { word: 'brake', emoji: '🛑', pos: 'сущ.', meaning: 'тормоз',
        examples: [{ en: 'Press the <b>brake</b>.', ru: 'Нажми на тормоз.' }]
      },
      right: { word: 'break', emoji: '💥', pos: 'глаг.', meaning: 'ломать',
        examples: [{ en: 'Don\'t <b>break</b> it.', ru: 'Не сломай это.' }]
      }
    },
    { id: 'weather-whether2', emoji: '🌦️🤔', title: 'WEATHER / WHETHER — примеры',
      rule: 'Погода VS ли',
      left: { word: 'weather', emoji: '🌦️', pos: 'сущ.', meaning: 'погода',
        examples: [
          { en: 'Nice <b>weather</b>.', ru: 'Хорошая погода.' },
          { en: 'Bad <b>weather</b> today.', ru: 'Плохая погода сегодня.' }
        ]
      },
      right: { word: 'whether', emoji: '🤔', pos: 'союз', meaning: 'ли',
        examples: [
          { en: 'I wonder <b>whether</b> he\'ll come.', ru: 'Интересно, придёт ли он.' },
          { en: 'Not sure <b>whether</b> to go.', ru: 'Не уверен, идти ли.' }
        ]
      }
    },
    { id: 'principal-principle2', emoji: '🎓📏', title: 'PRINCIPAL / PRINCIPLE — примеры',
      rule: 'Директор/главный VS принцип',
      left: { word: 'principal', emoji: '🎓', pos: 'сущ./прил.', meaning: 'директор / главный',
        examples: [
          { en: 'The school <b>principal</b>.', ru: 'Директор школы.' },
          { en: 'The <b>principal</b> goal.', ru: 'Главная цель.' }
        ]
      },
      right: { word: 'principle', emoji: '📏', pos: 'сущ.', meaning: 'принцип',
        examples: [
          { en: 'A man of <b>principle</b>.', ru: 'Человек принципов.' },
          { en: 'In <b>principle</b>.', ru: 'В принципе.' }
        ]
      }
    },
    { id: 'lose-loose2', emoji: '😢👖', title: 'LOSE / LOOSE / LOSS',
      rule: 'Терять / Свободный / Потеря',
      left: { word: 'lose', emoji: '😢', pos: 'глаг. / [luːz]', meaning: 'терять',
        examples: [{ en: 'Don\'t <b>lose</b> it.', ru: 'Не теряй это.' }]
      },
      right: { word: 'loose', emoji: '👖', pos: 'прил. / [luːs]', meaning: 'свободный',
        examples: [{ en: 'A <b>loose</b> shirt.', ru: 'Свободная рубашка.' }]
      }
    },
    { id: 'advice-advise2', emoji: '💬✅', title: 'ADVICE / ADVISE — практика',
      rule: 'Совет VS советовать',
      left: { word: 'advice', emoji: '💬', pos: 'сущ.', meaning: 'совет',
        examples: [
          { en: 'A good piece of <b>advice</b>.', ru: 'Хороший совет.' },
          { en: 'Take my <b>advice</b>.', ru: 'Прими мой совет.' }
        ]
      },
      right: { word: 'advise', emoji: '✅', pos: 'глаг.', meaning: 'советовать',
        examples: [
          { en: 'I <b>advise</b> you to go.', ru: 'Советую тебе идти.' },
          { en: 'He <b>advised</b> me.', ru: 'Он дал мне совет.' }
        ]
      }
    },
    { id: 'already-all-ready', emoji: '✅🆗', title: 'ALREADY vs ALL READY',
      rule: 'Уже VS полностью готов',
      left: { word: 'already', emoji: '✅', pos: 'нареч.', meaning: 'уже',
        examples: [{ en: 'I\'ve <b>already</b> eaten.', ru: 'Я уже поел.' }]
      },
      right: { word: 'all ready', emoji: '🆗', pos: 'фраза', meaning: 'все готовы',
        examples: [{ en: 'We are <b>all ready</b>.', ru: 'Мы все готовы.' }]
      }
    },
    { id: 'maybe-may-be', emoji: '❓🤔', title: 'MAYBE vs MAY BE',
      rule: 'Может быть VS может являться',
      left: { word: 'maybe', emoji: '❓', pos: 'нареч.', meaning: 'может быть',
        examples: [{ en: '<b>Maybe</b> yes.', ru: 'Может быть.' }]
      },
      right: { word: 'may be', emoji: '🤔', pos: 'глаг.', meaning: 'может являться',
        examples: [{ en: 'He <b>may be</b> late.', ru: 'Он может опоздать.' }]
      }
    }
);

// ───────────────────────────────────────────────────────────
// 🆕 15 НОВЫХ ЭССЕ-СВЯЗОК
// ───────────────────────────────────────────────────────────
essayLinkers.push(
    { id: 'firstly', group: 'start', en: 'Firstly', ru: 'во-первых',
      emoji: '1️⃣', trans: '[ˈfɜːstli]',
      usage: 'Начало списка.',
      example: { en: '<b>Firstly</b>, we need a plan.', ru: 'Во-первых, нужен план.' }
    },
    { id: 'secondly2', group: 'start', en: 'Secondly', ru: 'во-вторых',
      emoji: '2️⃣', trans: '[ˈsekəndli]',
      usage: 'Второй аргумент.',
      example: { en: '<b>Secondly</b>, it saves time.', ru: 'Во-вторых, экономит время.' }
    },
    { id: 'thirdly', group: 'start', en: 'Thirdly', ru: 'в-третьих',
      emoji: '3️⃣', trans: '[ˈθɜːdli]',
      usage: 'Третий аргумент.',
      example: { en: '<b>Thirdly</b>, we can save money.', ru: 'В-третьих, можем сэкономить.' }
    },
    { id: 'finally2', group: 'end', en: 'Finally', ru: 'наконец',
      emoji: '🏁', trans: '[ˈfaɪnəli]',
      usage: 'Последний пункт.',
      example: { en: '<b>Finally</b>, let\'s discuss it.', ru: 'Наконец, обсудим это.' }
    },
    { id: 'inaddition3', group: 'develop', en: 'In addition to this', ru: 'в дополнение к этому',
      emoji: '➕', trans: '[ɪn əˈdɪʃn tə ðɪs]',
      usage: 'Дополнительный аргумент.',
      example: { en: '<b>In addition to this</b>, it\'s cheap.', ru: 'В дополнение к этому, это дёшево.' }
    },
    { id: 'similarly3', group: 'develop', en: 'Similarly', ru: 'аналогично',
      emoji: '🔄', trans: '[ˈsɪmələli]',
      usage: 'Похожий аргумент.',
      example: { en: '<b>Similarly</b>, sport helps.', ru: 'Аналогично, спорт помогает.' }
    },
    { id: 'equally', group: 'develop', en: 'Equally important', ru: 'столь же важно',
      emoji: '⚖️', trans: '[ˈiːkwəli ɪmˈpɔːtnt]',
      usage: 'Равный аргумент.',
      example: { en: '<b>Equally important</b>, health matters.', ru: 'Столь же важно здоровье.' }
    },
    { id: 'unlike', group: 'contrast', en: 'Unlike', ru: 'в отличие от',
      emoji: '⚖️', trans: '[ʌnˈlaɪk]',
      usage: 'Контраст.',
      example: { en: '<b>Unlike</b> him, I tried.', ru: 'В отличие от него, я попробовал.' }
    },
    { id: 'despite', group: 'contrast', en: 'Despite', ru: 'несмотря на',
      emoji: '💪', trans: '[dɪˈspaɪt]',
      usage: 'Уступка.',
      example: { en: '<b>Despite</b> the rain, we went.', ru: 'Несмотря на дождь, мы пошли.' }
    },
    { id: 'inspite2', group: 'contrast', en: 'In spite of the fact', ru: 'несмотря на факт',
      emoji: '💪', trans: '[ɪn spaɪt əv ðə fækt]',
      usage: 'Уступка.',
      example: { en: '<b>In spite of the fact</b> he\'s young...', ru: 'Несмотря на то, что он молод...' }
    },
    { id: 'whereas2', group: 'contrast', en: 'Whereas', ru: 'тогда как',
      emoji: '🔄', trans: '[ˌweərˈæz]',
      usage: 'Контраст.',
      example: { en: '<b>Whereas</b> I agree, he doesn\'t.', ru: 'Тогда как я согласен, он нет.' }
    },
    { id: 'tothatend', group: 'clarify', en: 'To that end', ru: 'с этой целью',
      emoji: '🎯', trans: '[tə ðæt end]',
      usage: 'Цель.',
      example: { en: '<b>To that end</b>, we must act.', ru: 'С этой целью надо действовать.' }
    },
    { id: 'inthisregard', group: 'clarify', en: 'In this regard', ru: 'в этом отношении',
      emoji: '🎯', trans: '[ɪn ðɪs rɪˈɡɑːd]',
      usage: 'Уточнение.',
      example: { en: '<b>In this regard</b>, we agree.', ru: 'В этом отношении мы согласны.' }
    },
    { id: 'asaresult2', group: 'clarify', en: 'As a consequence', ru: 'как следствие',
      emoji: '➡️', trans: '[əz ə ˈkɒnsɪkwəns]',
      usage: 'Следствие.',
      example: { en: '<b>As a consequence</b>, we lost.', ru: 'Как следствие, мы проиграли.' }
    },
    { id: 'inotherwords2', group: 'clarify', en: 'That is to say', ru: 'то есть',
      emoji: '🔄', trans: '[ðæt ɪz tə seɪ]',
      usage: 'Уточнение.',
      example: { en: '<b>That is to say</b>, we won.', ru: 'То есть, мы победили.' }
    }
);

// ───────────────────────────────────────────────────────────
// 🆕 10 НОВЫХ СВЯЗОК (сравнить/объяснить)
// ───────────────────────────────────────────────────────────
usefulLinkers.push(
    { id: 'inotherwords3', group: 'clarify', en: 'In other words', ru: 'другими словами',
      emoji: '🔄', trans: '[ɪn ˈʌðə wɜːdz]',
      usage: 'Переформулировка.',
      example: { en: '<b>In other words</b>, we failed.', ru: 'Другими словами, мы провалились.' }
    },
    { id: 'namely', group: 'clarify', en: 'Namely', ru: 'а именно',
      emoji: '🎯', trans: '[ˈneɪmli]',
      usage: 'Уточнение.',
      example: { en: 'Two people, <b>namely</b> Tom and Ann.', ru: 'Двое, а именно Том и Энн.' }
    },
    { id: 'thatis', group: 'clarify', en: 'That is', ru: 'то есть',
      emoji: '🎯', trans: '[ðæt ɪz]',
      usage: 'Пояснение.',
      example: { en: 'Tomorrow, <b>that is</b> Monday.', ru: 'Завтра, то есть понедельник.' }
    },
    { id: 'aboveall', group: 'explain', en: 'Above all', ru: 'прежде всего',
      emoji: '🥇', trans: '[əˈbʌv ɔːl]',
      usage: 'Важное.',
      example: { en: '<b>Above all</b>, stay calm.', ru: 'Прежде всего, сохраняй спокойствие.' }
    },
    { id: 'inparticular', group: 'explain', en: 'In particular', ru: 'в частности',
      emoji: '📌', trans: '[ɪn pəˈtɪkjələ]',
      usage: 'Уточнение.',
      example: { en: '<b>In particular</b>, this case.', ru: 'В частности, этот случай.' }
    },
    { id: 'especially', group: 'explain', en: 'Especially', ru: 'особенно',
      emoji: '⭐', trans: '[ɪˈspeʃəli]',
      usage: 'Подчёркивание.',
      example: { en: 'I love fruit, <b>especially</b> apples.', ru: 'Люблю фрукты, особенно яблоки.' }
    },
    { id: 'notonly', group: 'develop', en: 'Not only... but also', ru: 'не только... но и',
      emoji: '➕', trans: '[nɒt ˈəʊnli bʌt ˈɔːlsəʊ]',
      usage: 'Двойное добавление.',
      example: { en: '<b>Not only</b> fast <b>but also</b> cheap.', ru: 'Не только быстро, но и дёшево.' }
    },
    { id: 'onthewhole', group: 'clarify', en: 'On the whole', ru: 'в целом',
      emoji: '📊', trans: '[ɒn ðə həʊl]',
      usage: 'Обобщение.',
      example: { en: '<b>On the whole</b>, it\'s good.', ru: 'В целом, это хорошо.' }
    },
    { id: 'byandlarge', group: 'clarify', en: 'By and large', ru: 'в основном',
      emoji: '📊', trans: '[baɪ ənd lɑːdʒ]',
      usage: 'Обобщение.',
      example: { en: '<b>By and large</b>, it works.', ru: 'В основном, это работает.' }
    },
    { id: 'generally', group: 'clarify', en: 'Generally speaking', ru: 'вообще говоря',
      emoji: '📊', trans: '[ˈdʒenərəli ˈspiːkɪŋ]',
      usage: 'Обобщение.',
      example: { en: '<b>Generally speaking</b>, we agree.', ru: 'Вообще говоря, мы согласны.' }
    }
);

// ───────────────────────────────────────────────────────────
// 🆕 15 НОВЫХ ВОПРОСИТЕЛЬНЫХ
// ───────────────────────────────────────────────────────────
questionWords.push(
    { en: 'How much longer', ru: 'сколько ещё', emoji: '⏳', group: 'how', trans: '[haʊ mʌtʃ ˈlɒŋɡə]',
      example: { en: '<b>How much longer</b> will it take?', ru: 'Сколько ещё это займёт?' }
    },
    { en: 'How many more', ru: 'сколько ещё', emoji: '🔢', group: 'how', trans: '[haʊ ˈmeni mɔː]',
      example: { en: '<b>How many more</b> do we need?', ru: 'Сколько ещё нам нужно?' }
    },
    { en: 'What sort of', ru: 'какого рода', emoji: '🎭', group: 'basic', trans: '[wɒt sɔːt əv]',
      example: { en: '<b>What sort of</b> job?', ru: 'Какого рода работа?' }
    },
    { en: 'What colour', ru: 'какого цвета', emoji: '🎨', group: 'basic', trans: '[wɒt ˈkʌlə]',
      example: { en: '<b>What colour</b> is it?', ru: 'Какого это цвета?' }
    },
    { en: 'What size', ru: 'какого размера', emoji: '📏', group: 'basic', trans: '[wɒt saɪz]',
      example: { en: '<b>What size</b> shoes?', ru: 'Какого размера обувь?' }
    },
    { en: 'How heavy', ru: 'сколько весит', emoji: '⚖️', group: 'how', trans: '[haʊ ˈhevi]',
      example: { en: '<b>How heavy</b> is it?', ru: 'Сколько оно весит?' }
    },
    { en: 'How tall', ru: 'какого роста', emoji: '📏', group: 'how', trans: '[haʊ tɔːl]',
      example: { en: '<b>How tall</b> is he?', ru: 'Какого он роста?' }
    },
    { en: 'How deep', ru: 'как глубоко', emoji: '🌊', group: 'how', trans: '[haʊ diːp]',
      example: { en: '<b>How deep</b> is the pool?', ru: 'Какой глубины бассейн?' }
    },
    { en: 'How wide', ru: 'как широко', emoji: '📐', group: 'how', trans: '[haʊ waɪd]',
      example: { en: '<b>How wide</b> is the road?', ru: 'Какой ширины дорога?' }
    },
    { en: 'How much money', ru: 'сколько денег', emoji: '💰', group: 'how', trans: '[haʊ mʌtʃ ˈmʌni]',
      example: { en: '<b>How much money</b> do you have?', ru: 'Сколько у тебя денег?' }
    },
    { en: 'Where exactly', ru: 'где именно', emoji: '📍', group: 'basic', trans: '[weər ɪɡˈzæktli]',
      example: { en: '<b>Where exactly</b> do you live?', ru: 'Где именно ты живёшь?' }
    },
    { en: 'When exactly', ru: 'когда именно', emoji: '⏰', group: 'basic', trans: '[wen ɪɡˈzæktli]',
      example: { en: '<b>When exactly</b> did it happen?', ru: 'Когда именно это случилось?' }
    },
    { en: 'Which one', ru: 'который из', emoji: '🔀', group: 'basic', trans: '[wɪtʃ wʌn]',
      example: { en: '<b>Which one</b> do you prefer?', ru: 'Который ты предпочитаешь?' }
    },
    { en: 'Whose turn', ru: 'чей ход', emoji: '🎲', group: 'basic', trans: '[huːz tɜːn]',
      example: { en: '<b>Whose turn</b> is it?', ru: 'Чей сейчас ход?' }
    },
    { en: 'What time is', ru: 'во сколько', emoji: '🕐', group: 'basic', trans: '[wɒt taɪm ɪz]',
      example: { en: '<b>What time is</b> the meeting?', ru: 'Во сколько встреча?' }
    }
);

// ───────────────────────────────────────────────────────────
// 🆕 10 НОВЫХ ВВОДНЫХ
// ───────────────────────────────────────────────────────────
discourseMarkers.push(
    { id: 'wellactually', word: 'Well, actually', transcription: '[wel ˈæktʃuəli]', ru: 'ну, вообще-то', emoji: '💭', group: 'style',
      example: { en: '<b>Well, actually</b>, I disagree.', ru: 'Ну, вообще-то, я не согласен.' } },
    { id: 'youknow', word: 'You know', transcription: '[juː nəʊ]', ru: 'знаешь', emoji: '💬', group: 'style',
      example: { en: '<b>You know</b>, it\'s difficult.', ru: 'Знаешь, это сложно.' } },
    { id: 'yousee', word: 'You see', transcription: '[juː siː]', ru: 'видишь ли', emoji: '💬', group: 'style',
      example: { en: '<b>You see</b>, I was busy.', ru: 'Видишь ли, я был занят.' } },
    { id: 'actually2', word: 'Actually', transcription: '[ˈæktʃuəli]', ru: 'на самом деле', emoji: '🎯', group: 'style',
      example: { en: '<b>Actually</b>, I don\'t know.', ru: 'На самом деле, я не знаю.' } },
    { id: 'inyourcase', word: 'In my opinion', transcription: '[ɪn maɪ əˈpɪnjən]', ru: 'по моему мнению', emoji: '💭', group: 'style',
      example: { en: '<b>In my opinion</b>, it\'s right.', ru: 'По моему мнению, это верно.' } },
    { id: 'personally', word: 'Personally', transcription: '[ˈpɜːsənəli]', ru: 'лично я', emoji: '👤', group: 'style',
      example: { en: '<b>Personally</b>, I don\'t mind.', ru: 'Лично я не против.' } },
    { id: 'interestingly', word: 'Interestingly', transcription: '[ˈɪntrəstɪŋli]', ru: 'интересно', emoji: '💡', group: 'emotion',
      example: { en: '<b>Interestingly</b>, he agreed.', ru: 'Интересно, он согласился.' } },
    { id: 'surprisingly', word: 'Surprisingly', transcription: '[səˈpraɪzɪŋli]', ru: 'удивительно', emoji: '😲', group: 'emotion',
      example: { en: '<b>Surprisingly</b>, it worked.', ru: 'Удивительно, но сработало.' } },
    { id: 'sadly', word: 'Sadly', transcription: '[ˈsædli]', ru: 'к сожалению', emoji: '😔', group: 'emotion',
      example: { en: '<b>Sadly</b>, he left.', ru: 'К сожалению, он ушёл.' } },
    { id: 'luckily', word: 'Luckily', transcription: '[ˈlʌkɪli]', ru: 'к счастью', emoji: '🍀', group: 'emotion',
      example: { en: '<b>Luckily</b>, we won.', ru: 'К счастью, мы победили.' } }
);

// ───────────────────────────────────────────────────────────
// 🆕 20 НОВЫХ СЛОВ ВРЕМЕНИ
// ───────────────────────────────────────────────────────────
allTimeWords.push(
    { en: 'In a second', ru: 'через секунду', emoji: '⚡', trans: '[ɪn ə ˈsekənd]', group: 'future' },
    { en: 'In a minute', ru: 'через минуту', emoji: '⏱️', trans: '[ɪn ə ˈmɪnɪt]', group: 'future' },
    { en: 'In an hour', ru: 'через час', emoji: '⏰', trans: '[ɪn ən ˈaʊə]', group: 'future' },
    { en: 'In a moment', ru: 'через мгновение', emoji: '⚡', trans: '[ɪn ə ˈməʊmənt]', group: 'future' },
    { en: 'Very soon', ru: 'очень скоро', emoji: '🚀', trans: '[ˈveri suːn]', group: 'future' },
    { en: 'Later on', ru: 'позже', emoji: '➡️', trans: '[ˈleɪtər ɒn]', group: 'future' },
    { en: 'Eventually', ru: 'в конечном итоге', emoji: '🏁', trans: '[ɪˈventʃuəli]', group: 'future' },
    { en: 'At some point', ru: 'в какой-то момент', emoji: '🎯', trans: '[ət sʌm pɔɪnt]', group: 'future' },
    { en: 'At once', ru: 'сразу', emoji: '⚡', trans: '[ət wʌns]', group: 'present' },
    { en: 'For the time being', ru: 'пока что', emoji: '⏳', trans: '[fə ðə taɪm ˈbiːɪŋ]', group: 'present' },
    { en: 'Currently', ru: 'в настоящее время', emoji: '▶️', trans: '[ˈkʌrəntli]', group: 'present' },
    { en: 'Recently', ru: 'недавно', emoji: '⏱️', trans: '[ˈriːsntli]', group: 'past' },
    { en: 'Lately', ru: 'в последнее время', emoji: '📅', trans: '[ˈleɪtli]', group: 'past' },
    { en: 'Long since', ru: 'давно', emoji: '📜', trans: '[lɒŋ sɪns]', group: 'past' },
    { en: 'Ages ago', ru: 'очень давно', emoji: '🏛️', trans: '[ˈeɪdʒɪz əˈɡəʊ]', group: 'past' },
    { en: 'The other day', ru: 'на днях', emoji: '📅', trans: '[ði ˈʌðə deɪ]', group: 'past' },
    { en: 'Not long ago', ru: 'не так давно', emoji: '🕐', trans: '[nɒt lɒŋ əˈɡəʊ]', group: 'past' },
    { en: 'In the meantime', ru: 'тем временем', emoji: '⏳', trans: '[ɪn ðə ˈmiːntaɪm]', group: 'present' },
    { en: 'As we speak', ru: 'прямо сейчас', emoji: '⚡', trans: '[əz wiː spiːk]', group: 'present' },
    { en: 'From time to time', ru: 'время от времени', emoji: '🔁', trans: '[frəm taɪm tə taɪm]', group: 'present' }
);

// ───────────────────────────────────────────────────────────
// 🆕 30 НОВЫХ МИНИ-ДИАЛОГОВ (часть 3)
// ───────────────────────────────────────────────────────────
miniDialogues.push(
    { emoji: '🎓', affix: 'learn', title: 'Изучение языка', lines: [
        { who: 'A', en: 'How long have you been learning English?', ru: 'Как долго ты учишь английский?' },
        { who: 'B', en: 'For two years.', ru: 'Два года.' },
        { who: 'A', en: 'Your progress is amazing!', ru: 'Твой прогресс впечатляет!' } ] },
    { emoji: '📚', affix: 'understand', title: 'Понимание текста', lines: [
        { who: 'A', en: 'Did you <b>understand</b> the text?', ru: 'Ты понял текст?' },
        { who: 'B', en: 'Mostly, but some words were new.', ru: 'В основном, но некоторые слова новые.' },
        { who: 'A', en: 'Let me help.', ru: 'Дай помогу.' } ] },
    { emoji: '🗣️', affix: 'pronounce', title: 'Произношение', lines: [
        { who: 'A', en: 'How do you <b>pronounce</b> this word?', ru: 'Как произносится это слово?' },
        { who: 'B', en: 'It\'s "comfortable".', ru: 'Это "comfortable".' },
        { who: 'A', en: 'Thanks, tricky one!', ru: 'Спасибо, сложное!' } ] },
    { emoji: '✍️', affix: 'write', title: 'Письмо', lines: [
        { who: 'A', en: 'Could you <b>write</b> it down?', ru: 'Можешь записать?' },
        { who: 'B', en: 'Sure, here you go.', ru: 'Конечно, держи.' },
        { who: 'A', en: 'Much clearer now.', ru: 'Теперь понятнее.' } ] },
    { emoji: '📖', affix: 'read', title: 'Чтение вслух', lines: [
        { who: 'A', en: 'Can you <b>read</b> this aloud?', ru: 'Можешь прочитать это вслух?' },
        { who: 'B', en: 'Sure, listen.', ru: 'Конечно, слушай.' },
        { who: 'A', en: 'Perfect pronunciation!', ru: 'Идеальное произношение!' } ] },
    { emoji: '🎯', affix: 'practice', title: 'Практика', lines: [
        { who: 'A', en: 'How often do you <b>practice</b>?', ru: 'Как часто ты практикуешься?' },
        { who: 'B', en: 'Every day for 30 minutes.', ru: 'Каждый день по 30 минут.' },
        { who: 'A', en: 'That\'s the key!', ru: 'Вот в чём секрет!' } ] },
    { emoji: '💡', affix: 'improve', title: 'Улучшение', lines: [
        { who: 'A', en: 'How can I <b>improve</b> faster?', ru: 'Как улучшаться быстрее?' },
        { who: 'B', en: 'Read and listen daily.', ru: 'Читай и слушай каждый день.' },
        { who: 'A', en: 'Got it, thanks!', ru: 'Понял, спасибо!' } ] },
    { emoji: '🎬', affix: 'watch', title: 'Сериалы на английском', lines: [
        { who: 'A', en: 'Should I <b>watch</b> shows in English?', ru: 'Стоит смотреть сериалы на английском?' },
        { who: 'B', en: 'Definitely, with subtitles.', ru: 'Обязательно, с субтитрами.' },
        { who: 'A', en: 'Great advice!', ru: 'Отличный совет!' } ] },
    { emoji: '🎵', affix: 'listen', title: 'Песни', lines: [
        { who: 'A', en: 'Do you <b>listen</b> to English songs?', ru: 'Ты слушаешь английские песни?' },
        { who: 'B', en: 'All the time.', ru: 'Всё время.' },
        { who: 'A', en: 'That helps a lot.', ru: 'Это очень помогает.' } ] },
    { emoji: '🤔', affix: 'think', title: 'Размышление', lines: [
        { who: 'A', en: 'Do you <b>think</b> in English?', ru: 'Ты думаешь на английском?' },
        { who: 'B', en: 'Sometimes.', ru: 'Иногда.' },
        { who: 'A', en: 'That\'s advanced!', ru: 'Это продвинутый уровень!' } ] },
    { emoji: '📝', affix: 'translate', title: 'Перевод', lines: [
        { who: 'A', en: 'Can you <b>translate</b> this?', ru: 'Можешь это перевести?' },
        { who: 'B', en: 'Sure, it means "hello".', ru: 'Конечно, значит "привет".' },
        { who: 'A', en: 'Thanks!', ru: 'Спасибо!' } ] },
    { emoji: '📞', affix: 'call', title: 'Звонок на английском', lines: [
        { who: 'A', en: 'I need to <b>call</b> the office.', ru: 'Мне нужно позвонить в офис.' },
        { who: 'B', en: 'In English?', ru: 'На английском?' },
        { who: 'A', en: 'Yes, I\'m ready!', ru: 'Да, я готова!' } ] },
    { emoji: '💼', affix: 'interview', title: 'Собеседование', lines: [
        { who: 'A', en: 'Tell me about yourself.', ru: 'Расскажите о себе.' },
        { who: 'B', en: 'I\'m a software engineer.', ru: 'Я программист.' },
        { who: 'A', en: 'Impressive.', ru: 'Впечатляет.' } ] },
    { emoji: '💻', affix: 'email', title: 'Письмо по работе', lines: [
        { who: 'A', en: 'Did you send the <b>email</b>?', ru: 'Ты отправил письмо?' },
        { who: 'B', en: 'Yes, with attachments.', ru: 'Да, с вложениями.' },
        { who: 'A', en: 'Perfect.', ru: 'Отлично.' } ] },
    { emoji: '📊', affix: 'report', title: 'Отчёт', lines: [
        { who: 'A', en: 'The <b>report</b> is ready.', ru: 'Отчёт готов.' },
        { who: 'B', en: 'Let me check.', ru: 'Дай проверю.' },
        { who: 'A', en: 'Take your time.', ru: 'Не спеши.' } ] },
    { emoji: '🎤', affix: 'present', title: 'Презентация', lines: [
        { who: 'A', en: 'Are you ready to <b>present</b>?', ru: 'Готов презентовать?' },
        { who: 'B', en: 'A bit nervous.', ru: 'Немного нервничаю.' },
        { who: 'A', en: 'You\'ll do great!', ru: 'Ты справишься!' } ] },
    { emoji: '🤝', affix: 'meet', title: 'Встреча', lines: [
        { who: 'A', en: 'Nice to <b>meet</b> you.', ru: 'Приятно познакомиться.' },
        { who: 'B', en: 'Nice to meet you too.', ru: 'Мне тоже приятно.' },
        { who: 'A', en: 'Let\'s exchange contacts.', ru: 'Обменяемся контактами.' } ] },
    { emoji: '🙋', affix: 'introduce', title: 'Знакомство', lines: [
        { who: 'A', en: 'Let me <b>introduce</b> my friend.', ru: 'Позвольте представить друга.' },
        { who: 'B', en: 'Hello! Nice to meet you.', ru: 'Привет! Приятно познакомиться.' },
        { who: 'A', en: 'He\'s from Canada.', ru: 'Он из Канады.' } ] },
    { emoji: '🌍', affix: 'travel', title: 'Поездка за границу', lines: [
        { who: 'A', en: 'Have you ever <b>traveled</b> abroad?', ru: 'Ты бывал за границей?' },
        { who: 'B', en: 'Yes, to Europe.', ru: 'Да, в Европе.' },
        { who: 'A', en: 'Amazing!', ru: 'Здорово!' } ] },
    { emoji: '🎫', affix: 'book', title: 'Бронирование', lines: [
        { who: 'A', en: 'Did you <b>book</b> the tickets?', ru: 'Ты забронировал билеты?' },
        { who: 'B', en: 'Yes, for two people.', ru: 'Да, на двоих.' },
        { who: 'A', en: 'Great!', ru: 'Отлично!' } ] },
    { emoji: '🏖️', affix: 'stay', title: 'Проживание', lines: [
        { who: 'A', en: 'Where will we <b>stay</b>?', ru: 'Где мы будем жить?' },
        { who: 'B', en: 'A nice hotel.', ru: 'В хорошем отеле.' },
        { who: 'A', en: 'Sounds great!', ru: 'Звучит отлично!' } ] },
    { emoji: '🗺️', affix: 'lost', title: 'Заблудились', lines: [
        { who: 'A', en: 'I think we\'re <b>lost</b>.', ru: 'Кажется, мы заблудились.' },
        { who: 'B', en: 'Let\'s ask someone.', ru: 'Давай спросим.' },
        { who: 'A', en: 'Good idea.', ru: 'Хорошая идея.' } ] },
    { emoji: '📸', affix: 'photo', title: 'Фото на память', lines: [
        { who: 'A', en: 'Let\'s take a <b>photo</b>.', ru: 'Давай сделаем фото.' },
        { who: 'B', en: 'Sure, smile!', ru: 'Конечно, улыбайся!' },
        { who: 'A', en: 'Perfect shot!', ru: 'Отличный кадр!' } ] },
    { emoji: '🍽️', affix: 'order', title: 'Заказ в ресторане', lines: [
        { who: 'A', en: 'Are you ready to <b>order</b>?', ru: 'Готовы заказать?' },
        { who: 'B', en: 'Yes, pasta please.', ru: 'Да, пасту, пожалуйста.' },
        { who: 'A', en: 'Anything to drink?', ru: 'Что-нибудь выпить?' } ] },
    { emoji: '☕', affix: 'brew', title: 'Приготовление кофе', lines: [
        { who: 'A', en: 'How do you <b>brew</b> coffee?', ru: 'Как ты варишь кофе?' },
        { who: 'B', en: 'In a French press.', ru: 'Во френч-прессе.' },
        { who: 'A', en: 'I\'ll try that.', ru: 'Попробую.' } ] },
    { emoji: '🍕', affix: 'share', title: 'Ужин с друзьями', lines: [
        { who: 'A', en: 'Shall we <b>share</b> pizza?', ru: 'Давай разделим пиццу?' },
        { who: 'B', en: 'Sure, half and half.', ru: 'Конечно, пополам.' },
        { who: 'A', en: 'Deal!', ru: 'Договорились!' } ] },
    { emoji: '🎉', affix: 'invite', title: 'Приглашение', lines: [
        { who: 'A', en: 'I want to <b>invite</b> you.', ru: 'Хочу тебя пригласить.' },
        { who: 'B', en: 'To what?', ru: 'Куда?' },
        { who: 'A', en: 'To my birthday!', ru: 'На мой день рождения!' } ] },
    { emoji: '🙏', affix: 'thank', title: 'Благодарность', lines: [
        { who: 'A', en: 'Thank you so much!', ru: 'Большое спасибо!' },
        { who: 'B', en: 'You\'re welcome.', ru: 'Пожалуйста.' },
        { who: 'A', en: 'You\'re the best.', ru: 'Ты лучший.' } ] },
    { emoji: '😔', affix: 'apologize', title: 'Извинение', lines: [
        { who: 'A', en: 'I <b>apologize</b> for the delay.', ru: 'Извиняюсь за задержку.' },
        { who: 'B', en: 'It\'s okay.', ru: 'Всё в порядке.' },
        { who: 'A', en: 'Thanks for understanding.', ru: 'Спасибо за понимание.' } ] },
    { emoji: '🤗', affix: 'care', title: 'Забота', lines: [
        { who: 'A', en: 'Do you <b>care</b> about your health?', ru: 'Ты заботишься о здоровье?' },
        { who: 'B', en: 'Absolutely.', ru: 'Абсолютно.' },
        { who: 'A', en: 'That\'s important.', ru: 'Это важно.' } ] }
);

// ───────────────────────────────────────────────────────────
// 🆕 30 НОВЫХ ДИКТАНТОВ (часть 3)
// ───────────────────────────────────────────────────────────
dictationBank.push(
    { level: 'easy', emoji: '🌱', en: 'She is my best friend.', ru: 'Она моя лучшая подруга.', affix: '-est' },
    { level: 'easy', emoji: '🌱', en: 'We go to school together.', ru: 'Мы ходим в школу вместе.', affix: 'to/together' },
    { level: 'easy', emoji: '🌱', en: 'The weather is nice today.', ru: 'Погода хорошая сегодня.', affix: '-er' },
    { level: 'easy', emoji: '🌱', en: 'I need to study more.', ru: 'Мне нужно больше учиться.', affix: 'need to' },
    { level: 'easy', emoji: '🌱', en: 'He speaks English well.', ru: 'Он хорошо говорит по-английски.', affix: '-ly' },
    { level: 'easy', emoji: '🌱', en: 'They arrived at noon.', ru: 'Они прибыли в полдень.', affix: 'at' },
    { level: 'easy', emoji: '🌱', en: 'Please be careful.', ru: 'Пожалуйста, будь осторожен.', affix: '-ful' },
    { level: 'easy', emoji: '🌱', en: 'The book is interesting.', ru: 'Книга интересна.', affix: '-ing' },
    { level: 'easy', emoji: '🌱', en: 'She is happier now.', ru: 'Она счастливее сейчас.', affix: '-ier' },
    { level: 'easy', emoji: '🌱', en: 'My parents are kind.', ru: 'Мои родители добрые.', affix: '-' },
    { level: 'medium', emoji: '🌿', en: 'He is a successful businessman.', ru: 'Он успешный бизнесмен.', affix: '-ful/-man' },
    { level: 'medium', emoji: '🌿', en: 'They reorganized the department.', ru: 'Они реорганизовали отдел.', affix: 're-/-ment' },
    { level: 'medium', emoji: '🌿', en: 'The misunderstanding was unfortunate.', ru: 'Недоразумение было досадным.', affix: 'mis-/-un' },
    { level: 'medium', emoji: '🌿', en: 'She was overjoyed by the news.', ru: 'Она была вне себя от радости.', affix: 'over-' },
    { level: 'medium', emoji: '🌿', en: 'We underestimated his abilities.', ru: 'Мы недооценили его способности.', affix: 'under-' },
    { level: 'medium', emoji: '🌿', en: 'Their outstanding performance won.', ru: 'Их выдающееся выступление победило.', affix: 'out-' },
    { level: 'medium', emoji: '🌿', en: 'He disagreed with the proposal.', ru: 'Он не согласился с предложением.', affix: 'dis-' },
    { level: 'medium', emoji: '🌿', en: 'It is impossible to predict.', ru: 'Невозможно предсказать.', affix: 'im-/-able' },
    { level: 'medium', emoji: '🌿', en: 'Please preorder the tickets.', ru: 'Пожалуйста, забронируйте заранее.', affix: 'pre-' },
    { level: 'medium', emoji: '🌿', en: 'The book was published posthumously.', ru: 'Книга была опубликована посмертно.', affix: 'post-/-ly' },
    { level: 'medium', emoji: '🌿', en: 'She studied international relations.', ru: 'Она изучала международные отношения.', affix: 'inter-/-al' },
    { level: 'medium', emoji: '🌿', en: 'They are rebuilding the city.', ru: 'Они перестраивают город.', affix: 're-/-ing' },
    { level: 'hard', emoji: '🌳', en: 'The unpredictability shocked everyone.', ru: 'Непредсказуемость всех шокировала.', affix: 'un-/pre-/-ability' },
    { level: 'hard', emoji: '🌳', en: 'Interconnected systems work better.', ru: 'Связанные системы работают лучше.', affix: 'inter-/-ed' },
    { level: 'hard', emoji: '🌳', en: 'The reorganization improved productivity.', ru: 'Реорганизация улучшила производительность.', affix: 're-/-tion/-ivity' },
    { level: 'hard', emoji: '🌳', en: 'Her unhappiness was overwhelming.', ru: 'Её несчастье было всепоглощающим.', affix: 'un-/-ness/over-' },
    { level: 'hard', emoji: '🌳', en: 'The autobiography is unforgettable.', ru: 'Автобиография незабываема.', affix: 'auto-/-able/-un' },
    { level: 'hard', emoji: '🌳', en: 'Reproduction of the species continues.', ru: 'Размножение вида продолжается.', affix: 're-/-tion' },
    { level: 'hard', emoji: '🌳', en: 'The disconnection was irreversible.', ru: 'Разрыв был необратим.', affix: 'dis-/-ir/-ible' },
    { level: 'hard', emoji: '🌳', en: 'Multicultural society needs understanding.', ru: 'Мультикультурному обществу нужно понимание.', affix: 'multi-/-al/-ing' }
);

// ───────────────────────────────────────────────────────────
// 🆕 15 НОВЫХ МИНИ-ИСТОРИЙ
// ───────────────────────────────────────────────────────────
miniStories.push(
    { id: 'startup', emoji: '🚀', title: 'Запуск стартапа', affixes: ['re-', 'un-', 'pre-'],
      lines: [
        { en: 'Mike <b>pre</b>pared a business plan.', ru: 'Майк подготовил бизнес-план.' },
        { en: 'The investors were <b>un</b>sure at first.', ru: 'Инвесторы сначала были неуверенны.' },
        { en: 'But Mike was <b>un</b>stoppable.', ru: 'Но Майка было не остановить.' },
        { en: 'He <b>re</b>fined the product twice.', ru: 'Он дважды доработал продукт.' },
        { en: 'The company became <b>out</b>standing.', ru: 'Компания стала выдающейся.' }
      ]
    },
    { id: 'reunion', emoji: '👨‍👩‍👧', title: 'Воссоединение семьи', affixes: ['re-', 'un-', 'dis-'],
      lines: [
        { en: 'They had been <b>dis</b>connected for years.', ru: 'Они были в разлуке годы.' },
        { en: 'The mother was <b>un</b>happy.', ru: 'Мать была несчастна.' },
        { en: 'She <b>re</b>searched for her son.', ru: 'Она разыскивала сына.' },
        { en: 'The moment of <b>re</b>union was emotional.', ru: 'Момент воссоединения был эмоциональным.' },
        { en: 'It was <b>un</b>forgettable!', ru: 'Это было незабываемо!' }
      ]
    },
    { id: 'recovery', emoji: '💪', title: 'Выздоровление', affixes: ['re-', 'over-', 'un-'],
      lines: [
        { en: 'Lisa <b>over</b>came a serious illness.', ru: 'Лиза победила серьёзную болезнь.' },
        { en: 'The recovery was <b>un</b>believably slow.', ru: 'Восстановление было невероятно медленным.' },
        { en: 'She <b>re</b>gained her strength.', ru: 'Она вернула силы.' },
        { en: 'Her family was <b>over</b>joyed.', ru: 'Её семья была вне себя от радости.' },
        { en: 'Life was <b>re</b>stored.', ru: 'Жизнь была восстановлена.' }
      ]
    },
    { id: 'discovery', emoji: '🔬', title: 'Научное открытие', affixes: ['dis-', 're-', 'un-'],
      lines: [
        { en: 'The scientist <b>dis</b>covered a new element.', ru: 'Учёный открыл новый элемент.' },
        { en: 'It was <b>un</b>known before.', ru: 'Он был неизвестен ранее.' },
        { en: 'The team <b>re</b>peated the experiment.', ru: 'Команда повторила эксперимент.' },
        { en: 'The results were <b>re</b>markable.', ru: 'Результаты были удивительны.' },
        { en: 'It was a <b>dis</b>covery of the century.', ru: 'Это было открытие века.' }
      ]
    },
    { id: 'rescue2', emoji: '⛑️', title: 'Спасение на море', affixes: ['re-', 'un-', 'dis-'],
      lines: [
        { en: 'The ship <b>dis</b>appeared in the storm.', ru: 'Корабль исчез в шторме.' },
        { en: 'The crew was <b>un</b>reachable.', ru: 'Экипаж был недоступен.' },
        { en: 'Rescuers <b>re</b>searched the area.', ru: 'Спасатели обыскали район.' },
        { en: 'They <b>re</b>covered the survivors.', ru: 'Они нашли выживших.' },
        { en: 'The story was <b>un</b>believable!', ru: 'История была невероятной!' }
      ]
    },
    { id: 'election', emoji: '🗳️', title: 'Выборы', affixes: ['re-', 'un-', 'pre-'],
      lines: [
        { en: 'The candidates <b>pre</b>pared for debates.', ru: 'Кандидаты готовились к дебатам.' },
        { en: 'The results were <b>un</b>expected.', ru: 'Результаты были неожиданными.' },
        { en: 'One candidate <b>re</b>quested a recount.', ru: 'Один кандидат запросил пересчёт.' },
        { en: 'The votes were <b>re</b>counted.', ru: 'Голоса пересчитали.' },
        { en: 'Democracy was <b>re</b>stored.', ru: 'Демократия была восстановлена.' }
      ]
    },
    { id: 'friendship', emoji: '👬', title: 'Друзья навсегда', affixes: ['re-', 'un-', 'dis-'],
      lines: [
        { en: 'They met at <b>un</b>iversity.', ru: 'Они познакомились в университете.' },
        { en: 'They <b>dis</b>agreed often.', ru: 'Они часто не соглашались.' },
        { en: 'But they always <b>re</b>conciled.', ru: 'Но всегда мирились.' },
        { en: 'Their friendship was <b>un</b>breakable.', ru: 'Их дружба была нерушимой.' },
        { en: 'They <b>re</b>main friends for life.', ru: 'Они остаются друзьями на всю жизнь.' }
      ]
    },
    { id: 'promotion', emoji: '📈', title: 'Повышение', affixes: ['pre-', 'un-', 're-'],
      lines: [
        { en: 'Anna <b>pre</b>pared for months.', ru: 'Анна готовилась месяцами.' },
        { en: 'She was <b>un</b>certain of success.', ru: 'Она была неуверена в успехе.' },
        { en: 'The manager <b>re</b>viewed her work.', ru: 'Менеджер оценил её работу.' },
        { en: 'She <b>re</b>ceived a promotion.', ru: 'Она получила повышение.' },
        { en: 'It was <b>un</b>expected!', ru: 'Это было неожиданно!' }
      ]
    },
    { id: 'festival', emoji: '🎪', title: 'Фестиваль', affixes: ['re-', 'over-', 'un-'],
      lines: [
        { en: 'The city <b>over</b>flowed with visitors.', ru: 'Город был полон посетителей.' },
        { en: 'The music was <b>over</b>whelmingly loud.', ru: 'Музыка была оглушительно громкой.' },
        { en: 'But people were <b>un</b>bothered.', ru: 'Но людей это не смущало.' },
        { en: 'The festival was <b>re</b>peated next year.', ru: 'Фестиваль повторился в следующем году.' },
        { en: 'It became an <b>un</b>forgettable tradition.', ru: 'Это стало незабываемой традицией.' }
      ]
    },
    { id: 'rescue3', emoji: '🐘', title: 'Слон и человек', affixes: ['re-', 'un-', 'dis-'],
      lines: [
        { en: 'A baby elephant was <b>dis</b>covered alone.', ru: 'Одинокого слонёнка нашли.' },
        { en: 'The villagers were <b>un</b>sure what to do.', ru: 'Жители не знали, что делать.' },
        { en: 'A vet <b>re</b>habilitated the elephant.', ru: 'Ветеринар выхаживал слонёнка.' },
        { en: 'They became <b>in</b>separable friends.', ru: 'Они стали неразлучными друзьями.' },
        { en: 'It was an <b>un</b>usual story.', ru: 'Это была необычная история.' }
      ]
    },
    { id: 'competition', emoji: '🏆', title: 'Соревнование', affixes: ['out-', 'over-', 'un-'],
      lines: [
        { en: 'Two teams tried to <b>out</b>perform each other.', ru: 'Две команды пытались превзойти друг друга.' },
        { en: 'Both <b>over</b>came many obstacles.', ru: 'Обе преодолели много препятствий.' },
        { en: 'The crowd was <b>un</b>believably loud.', ru: 'Толпа была невероятно громкой.' },
        { en: 'The winner was <b>un</b>expected.', ru: 'Победитель был неожиданным.' },
        { en: 'Everyone was <b>out</b>standing.', ru: 'Все были на высоте.' }
      ]
    },
    { id: 'letter', emoji: '✉️', title: 'Старое письмо', affixes: ['un-', 're-', 'dis-'],
      lines: [
        { en: 'She <b>dis</b>covered an old letter.', ru: 'Она нашла старое письмо.' },
        { en: 'The handwriting was <b>un</b>familiar.', ru: 'Почерк был незнакомым.' },
        { en: 'She <b>re</b>ad it carefully.', ru: 'Она прочла его внимательно.' },
        { en: 'It was from her <b>un</b>known grandmother.', ru: 'Оно было от неизвестной бабушки.' },
        { en: 'The story was <b>re</b>vealed.', ru: 'История раскрылась.' }
      ]
    },
    { id: 'hike', emoji: '🥾', title: 'Поход в горы', affixes: ['over-', 'un-', 're-'],
      lines: [
        { en: 'They <b>over</b>estimated their energy.', ru: 'Они переоценили свои силы.' },
        { en: 'The weather was <b>un</b>predictable.', ru: 'Погода была непредсказуемой.' },
        { en: 'But nobody <b>re</b>treated.', ru: 'Но никто не отступил.' },
        { en: 'They <b>re</b>ached the summit.', ru: 'Они достигли вершины.' },
        { en: 'An <b>un</b>forgettable view!', ru: 'Незабываемый вид!' }
      ]
    },
    { id: 'invention', emoji: '💡', title: 'Изобретение', affixes: ['re-', 'un-', 'pre-'],
      lines: [
        { en: 'The engineer <b>pre</b>dicted the future.', ru: 'Инженер предсказал будущее.' },
        { en: 'His invention was <b>un</b>heard of.', ru: 'Его изобретение было неслыханным.' },
        { en: 'He <b>re</b>fined the prototype.', ru: 'Он доработал прототип.' },
        { en: 'The world was <b>re</b>volutionized.', ru: 'Мир был революционизирован.' },
        { en: 'His name became <b>un</b>forgettable.', ru: 'Его имя стало незабываемым.' }
      ]
    },
    { id: 'kindness', emoji: '🤝', title: 'Сила доброты', affixes: ['un-', 're-', 'over-'],
      lines: [
        { en: 'A stranger showed <b>un</b>expected kindness.', ru: 'Незнакомец проявил неожиданную доброту.' },
        { en: 'She was <b>over</b>whelmed by emotion.', ru: 'Она была переполнена эмоциями.' },
        { en: 'She <b>re</b>paid him with help.', ru: 'Она отплатила ему помощью.' },
        { en: 'Their story spread <b>un</b>believably fast.', ru: 'Их история распространилась невероятно быстро.' },
        { en: 'Kindness is <b>un</b>breakable.', ru: 'Доброта нерушима.' }
      ]
    }
);

// ───────────────────────────────────────────────────────────
// 🆕 15 НОВЫХ КВИЗОВ
// ───────────────────────────────────────────────────────────
miniQuizzes.push(
    { id: 'colors-quiz', emoji: '🎨', title: 'Цвета',
      questions: [
        { q: 'Как переводится <b>purple</b>?', options: ['Фиолетовый', 'Оранжевый', 'Розовый'], correct: 0, hint: 'Цвет' },
        { q: 'Как переводится <b>turquoise</b>?', options: ['Бирюзовый', 'Золотой', 'Коричневый'], correct: 0, hint: 'Цвет' },
        { q: 'Как переводится <b>crimson</b>?', options: ['Малиновый', 'Синий', 'Зелёный'], correct: 0, hint: 'Оттенок красного' }
      ]
    },
    { id: 'animals-quiz', emoji: '🐘', title: 'Животные',
      questions: [
        { q: 'Что означает <b>elephant</b>?', options: ['Слон', 'Тигр', 'Жираф'], correct: 0, hint: 'Большое' },
        { q: 'Что означает <b>squirrel</b>?', options: ['Белка', 'Хомяк', 'Крыса'], correct: 0, hint: 'Пушистая' },
        { q: 'Что означает <b>butterfly</b>?', options: ['Бабочка', 'Пчела', 'Муравей'], correct: 0, hint: 'Насекомое' }
      ]
    },
    { id: 'food-quiz', emoji: '🍕', title: 'Еда',
      questions: [
        { q: 'Что означает <b>bread</b>?', options: ['Хлеб', 'Масло', 'Сыр'], correct: 0, hint: 'Основной продукт' },
        { q: 'Что означает <b>cheese</b>?', options: ['Сыр', 'Молоко', 'Мясо'], correct: 0, hint: 'Из молока' },
        { q: 'Что означает <b>strawberry</b>?', options: ['Клубника', 'Черешня', 'Малина'], correct: 0, hint: 'Красная ягода' }
      ]
    },
    { id: 'clothes-quiz', emoji: '👕', title: 'Одежда',
      questions: [
        { q: 'Что означает <b>jacket</b>?', options: ['Куртка', 'Рубашка', 'Штаны'], correct: 0, hint: 'Верхняя одежда' },
        { q: 'Что означает <b>trousers</b>?', options: ['Штаны', 'Платье', 'Юбка'], correct: 0, hint: 'Пара' },
        { q: 'Что означает <b>scarf</b>?', options: ['Шарф', 'Шапка', 'Перчатки'], correct: 0, hint: 'На шею' }
      ]
    },
    { id: 'body-quiz', emoji: '🦴', title: 'Части тела',
      questions: [
        { q: 'Что означает <b>shoulder</b>?', options: ['Плечо', 'Локоть', 'Колено'], correct: 0, hint: 'Часть тела' },
        { q: 'Что означает <b>ankle</b>?', options: ['Лодыжка', 'Стопа', 'Колено'], correct: 0, hint: 'Часть ноги' },
        { q: 'Что означает <b>wrist</b>?', options: ['Запястье', 'Палец', 'Локоть'], correct: 0, hint: 'Часть руки' }
      ]
    },
    { id: 'family-quiz', emoji: '👨‍👩‍👧', title: 'Семья',
      questions: [
        { q: 'Что означает <b>cousin</b>?', options: ['Двоюродный брат/сестра', 'Племянник', 'Дядя'], correct: 0, hint: 'Родственник' },
        { q: 'Что означает <b>niece</b>?', options: ['Племянница', 'Тётя', 'Бабуля'], correct: 0, hint: 'Родственник' },
        { q: 'Что означает <b>nephew</b>?', options: ['Племянник', 'Дядя', 'Брат'], correct: 0, hint: 'Родственник' }
      ]
    },
    { id: 'home-quiz', emoji: '🏠', title: 'Дом',
      questions: [
        { q: 'Что означает <b>ceiling</b>?', options: ['Потолок', 'Пол', 'Стена'], correct: 0, hint: 'Сверху' },
        { q: 'Что означает <b>drawer</b>?', options: ['Ящик', 'Шкаф', 'Полка'], correct: 0, hint: 'В столе' },
        { q: 'Что означает <b>fence</b>?', options: ['Забор', 'Крыша', 'Крыльцо'], correct: 0, hint: 'Снаружи' }
      ]
    },
    { id: 'nature-quiz', emoji: '🌳', title: 'Природа',
      questions: [
        { q: 'Что означает <b>forest</b>?', options: ['Лес', 'Поле', 'Гора'], correct: 0, hint: 'Много деревьев' },
        { q: 'Что означает <b>meadow</b>?', options: ['Луг', 'Болото', 'Пляж'], correct: 0, hint: 'С травой' },
        { q: 'Что означает <b>cliff</b>?', options: ['Скала', 'Пещера', 'Пляж'], correct: 0, hint: 'Крутая' }
      ]
    },
    { id: 'weather-quiz', emoji: '🌦️', title: 'Погода',
      questions: [
        { q: 'Что означает <b>fog</b>?', options: ['Туман', 'Дождь', 'Снег'], correct: 0, hint: 'Видимость' },
        { q: 'Что означает <b>thunder</b>?', options: ['Гром', 'Молния', 'Ветер'], correct: 0, hint: 'Звук' },
        { q: 'Что означает <b>drizzle</b>?', options: ['Морось', 'Ливень', 'Град'], correct: 0, hint: 'Мелкий дождь' }
      ]
    },
    { id: 'feelings-quiz', emoji: '😊', title: 'Эмоции',
      questions: [
        { q: 'Что означает <b>jealous</b>?', options: ['Ревнивый', 'Радостный', 'Уставший'], correct: 0, hint: 'Эмоция' },
        { q: 'Что означает <b>anxious</b>?', options: ['Тревожный', 'Спокойный', 'Смешной'], correct: 0, hint: 'Эмоция' },
        { q: 'Что означает <b>grateful</b>?', options: ['Благодарный', 'Злой', 'Голодный'], correct: 0, hint: 'Эмоция' }
      ]
    },
    { id: 'jobs-quiz', emoji: '💼', title: 'Профессии',
      questions: [
        { q: 'Что означает <b>lawyer</b>?', options: ['Юрист', 'Врач', 'Учитель'], correct: 0, hint: 'Профессия' },
        { q: 'Что означает <b>carpenter</b>?', options: ['Плотник', 'Повар', 'Водитель'], correct: 0, hint: 'Работа с деревом' },
        { q: 'Что означает <b>plumber</b>?', options: ['Сантехник', 'Электрик', 'Строитель'], correct: 0, hint: 'Трубы' }
      ]
    },
    { id: 'transport-quiz', emoji: '🚂', title: 'Транспорт',
      questions: [
        { q: 'Что означает <b>tram</b>?', options: ['Трамвай', 'Автобус', 'Поезд'], correct: 0, hint: 'Городской' },
        { q: 'Что означает <b>ferry</b>?', options: ['Паром', 'Лодка', 'Корабль'], correct: 0, hint: 'Через воду' },
        { q: 'Что означает <b>subway</b>?', options: ['Метро', 'Тоннель', 'Переход'], correct: 0, hint: 'Под землёй' }
      ]
    },
    { id: 'hobby-quiz', emoji: '🎨', title: 'Хобби',
      questions: [
        { q: 'Что означает <b>knitting</b>?', options: ['Вязание', 'Шитьё', 'Вышивка'], correct: 0, hint: 'С пряжей' },
        { q: 'Что означает <b>photography</b>?', options: ['Фотография', 'Рисование', 'Скульптура'], correct: 0, hint: 'Камера' },
        { q: 'Что означает <b>gardening</b>?', options: ['Садоводство', 'Готовка', 'Рыбалка'], correct: 0, hint: 'Растения' }
      ]
    },
    { id: 'sport-quiz', emoji: '⚽', title: 'Спорт',
      questions: [
        { q: 'Что означает <b>swimming</b>?', options: ['Плавание', 'Бег', 'Прыжки'], correct: 0, hint: 'В воде' },
        { q: 'Что означает <b>wrestling</b>?', options: ['Борьба', 'Бокс', 'Дзюдо'], correct: 0, hint: 'Борьба' },
        { q: 'Что означает <b>gymnastics</b>?', options: ['Гимнастика', 'Танцы', 'Акробатика'], correct: 0, hint: 'Гибкость' }
      ]
    },
    { id: 'technology-quiz', emoji: '💻', title: 'Технологии',
      questions: [
        { q: 'Что означает <b>keyboard</b>?', options: ['Клавиатура', 'Мышь', 'Монитор'], correct: 0, hint: 'Для набора' },
        { q: 'Что означает <b>charger</b>?', options: ['Зарядное', 'Кабель', 'Адаптер'], correct: 0, hint: 'Для зарядки' },
        { q: 'Что означает <b>software</b>?', options: ['ПО', 'Железо', 'Сеть'], correct: 0, hint: 'Программы' }
      ]
    }
);

// ───────────────────────────────────────────────────────────
// 🆕 20 НОВЫХ ТЕМ ДЛЯ ЭССЕ
// ───────────────────────────────────────────────────────────
essayTopics.push(
    { emoji: '💻', topic: 'artificial intelligence',    ru: 'искусственный интеллект' },
    { emoji: '🚀', topic: 'space exploration',          ru: 'исследование космоса' },
    { emoji: '🏥', topic: 'public healthcare',          ru: 'государственное здравоохранение' },
    { emoji: '📱', topic: 'smartphone for kids',        ru: 'смартфоны для детей' },
    { emoji: '🎨', topic: 'art in schools',             ru: 'искусство в школах' },
    { emoji: '🍔', topic: 'junk food advertising',      ru: 'реклама фастфуда' },
    { emoji: '🌳', topic: 'planting trees',             ru: 'посадка деревьев' },
    { emoji: '🚗', topic: 'self-driving cars',          ru: 'беспилотные машины' },
    { emoji: '📚', topic: 'e-books vs paper books',     ru: 'электронные vs бумажные книги' },
    { emoji: '🎬', topic: 'movies based on books',      ru: 'фильмы по книгам' },
    { emoji: '💍', topic: 'early marriage',             ru: 'ранний брак' },
    { emoji: '🧠', topic: 'learning languages',         ru: 'изучение языков' },
    { emoji: '🏆', topic: 'competition in sports',      ru: 'соревнования в спорте' },
    { emoji: '🌐', topic: 'social networks',            ru: 'социальные сети' },
    { emoji: '⏰', topic: 'early rising',               ru: 'ранний подъём' },
    { emoji: '🎓', topic: 'studying abroad',            ru: 'учёба за границей' },
    { emoji: '🐕', topic: 'animal rights',              ru: 'права животных' },
    { emoji: '🏖️', topic: 'summer holidays',            ru: 'летние каникулы' },
    { emoji: '💼', topic: 'part-time jobs for students', ru: 'подработка для студентов' },
    { emoji: '🎵', topic: 'music while studying',       ru: 'музыка во время учёбы' }
);

// ═══════════════════════════════════════════════════════════
// 🆕 РАСШИРЕНИЕ БАЗЫ v5 — ЛОВУШКИ, ПУТАНИЦА, АНТОНИМЫ,
//    СЕМЬИ СЛОВ, КОНВЕРТЕР, МНЕМО
// ═══════════════════════════════════════════════════════════

// ───────────────────────────────────────────────────────────
// 🆕 30 НОВЫХ СЛОВ-ЛОВУШЕК (trapPairs)
// ───────────────────────────────────────────────────────────
trapPairs.push(
    { id: 'do-make-exp', emoji: '📋🔨', title: 'DO vs MAKE — 25 идиом',
      rule: 'Идиомы с do и make',
      left: { word: 'do', emoji: '📋', meaning: 'работа, действие',
        examples: [
          { en: '<b>Do</b> the dishes.', ru: 'Помой посуду.' },
          { en: '<b>Do</b> the laundry.', ru: 'Постирай белье.' },
          { en: '<b>Do</b> your best.', ru: 'Сделай всё возможное.' },
          { en: '<b>Do</b> a favour.', ru: 'Сделай одолжение.' },
          { en: '<b>Do</b> business.', ru: 'Веди бизнес.' },
          { en: '<b>Do</b> exercise.', ru: 'Делай зарядку.' }
        ]
      },
      right: { word: 'make', emoji: '🔨', meaning: 'создавать',
        examples: [
          { en: '<b>Make</b> a decision.', ru: 'Прими решение.' },
          { en: '<b>Make</b> an offer.', ru: 'Сделай предложение.' },
          { en: '<b>Make</b> a mistake.', ru: 'Сделай ошибку.' },
          { en: '<b>Make</b> an excuse.', ru: 'Придумай оправдание.' },
          { en: '<b>Make</b> progress.', ru: 'Двигайся вперёд.' },
          { en: '<b>Make</b> money.', ru: 'Зарабатывай деньги.' }
        ]
      }
    },
    { id: 'say-tell-25', emoji: '💬🗣️', title: 'SAY vs TELL — 20 фраз',
      rule: 'Что сказать vs кому сказать',
      left: { word: 'say', emoji: '💬', meaning: 'сказать (что-то)',
        examples: [
          { en: '<b>Say</b> hello.', ru: 'Поздоровайся.' },
          { en: '<b>Say</b> yes.', ru: 'Скажи да.' },
          { en: '<b>Say</b> a prayer.', ru: 'Прочитай молитву.' },
          { en: '<b>Say</b> the truth.', ru: 'Скажи правду.' }
        ]
      },
      right: { word: 'tell', emoji: '🗣️', meaning: 'рассказать (кому-то)',
        examples: [
          { en: '<b>Tell</b> me a story.', ru: 'Расскажи историю.' },
          { en: '<b>Tell</b> the time.', ru: 'Скажи время.' },
          { en: '<b>Tell</b> a lie.', ru: 'Соври.' },
          { en: '<b>Tell</b> the difference.', ru: 'Отличи.' }
        ]
      }
    },
    { id: 'bring-take-3', emoji: '📦🎁', title: 'BRING vs TAKE vs FETCH',
      rule: 'Сюда / Туда / Сходить и принести',
      left: { word: 'bring', emoji: '📦', meaning: 'принести (сюда)',
        examples: [
          { en: '<b>Bring</b> me tea.', ru: 'Принеси мне чай.' },
          { en: '<b>Bring</b> it here.', ru: 'Принеси сюда.' }
        ]
      },
      right: { word: 'take', emoji: '🎁', meaning: 'отнести (туда)',
        examples: [
          { en: '<b>Take</b> it away.', ru: 'Унеси это.' },
          { en: '<b>Take</b> this to him.', ru: 'Отнеси это ему.' }
        ]
      }
    },
    { id: 'borrow-lend-3', emoji: '🤲🎁', title: 'BORROW vs LEND vs LOAN',
      rule: 'Брать / Давать / Ссуда',
      left: { word: 'borrow', emoji: '🤲', meaning: 'брать взаймы',
        examples: [
          { en: 'Can I <b>borrow</b> a pen?', ru: 'Можно взять ручку?' },
          { en: 'He <b>borrowed</b> my car.', ru: 'Он взял мою машину.' }
        ]
      },
      right: { word: 'lend', emoji: '🎁', meaning: 'давать взаймы',
        examples: [
          { en: 'Can you <b>lend</b> me a pen?', ru: 'Можешь дать ручку?' },
          { en: 'She <b>lends</b> books.', ru: 'Она даёт книги.' }
        ]
      }
    },
    { id: 'make-do-life', emoji: '🎯🎨', title: 'MAKE vs DO — творчество',
      rule: 'Творчество vs рутина',
      left: { word: 'make', emoji: '🎨', meaning: 'создавать новое',
        examples: [
          { en: '<b>Make</b> a cake.', ru: 'Испеки торт.' },
          { en: '<b>Make</b> a painting.', ru: 'Нарисуй картину.' }
        ]
      },
      right: { word: 'do', emoji: '🎯', meaning: 'выполнять работу',
        examples: [
          { en: '<b>Do</b> the washing.', ru: 'Помой вещи.' },
          { en: '<b>Do</b> homework.', ru: 'Сделай домашку.' }
        ]
      }
    },
    { id: 'look-watch-see', emoji: '👀📺👁️', title: 'LOOK / WATCH / SEE',
      rule: 'Смотреть на / Смотреть долго / Видеть',
      left: { word: 'look', emoji: '👀', meaning: 'смотреть на (кратко)',
        examples: [
          { en: '<b>Look</b> at this.', ru: 'Посмотри на это.' },
          { en: '<b>Look</b> there!', ru: 'Смотри туда!' }
        ]
      },
      right: { word: 'watch', emoji: '📺', meaning: 'смотреть (долго)',
        examples: [
          { en: '<b>Watch</b> TV.', ru: 'Смотри ТВ.' },
          { en: '<b>Watch</b> a movie.', ru: 'Посмотри фильм.' }
        ]
      }
    },
    { id: 'hear-listen-3', emoji: '👂🎧', title: 'HEAR / LISTEN — 15 примеров',
      rule: 'Слышать (пассивно) / Слушать (активно)',
      left: { word: 'hear', emoji: '👂', meaning: 'слышать',
        examples: [
          { en: 'I <b>hear</b> you.', ru: 'Я тебя слышу.' },
          { en: 'Did you <b>hear</b>?', ru: 'Ты слышал?' },
          { en: 'I <b>heard</b> a noise.', ru: 'Я услышал шум.' }
        ]
      },
      right: { word: 'listen', emoji: '🎧', meaning: 'слушать',
        examples: [
          { en: '<b>Listen</b> carefully.', ru: 'Слушай внимательно.' },
          { en: '<b>Listen</b> to music.', ru: 'Слушай музыку.' },
          { en: '<b>Listen</b> to me!', ru: 'Слушай меня!' }
        ]
      }
    },
    { id: 'speak-talk-3', emoji: '🎤💬', title: 'SPEAK / TALK — 15 примеров',
      rule: 'Формально/язык / Неформально',
      left: { word: 'speak', emoji: '🎤', meaning: 'говорить формально',
        examples: [
          { en: '<b>Speak</b> English.', ru: 'Говори по-английски.' },
          { en: '<b>Speak</b> louder.', ru: 'Говори громче.' },
          { en: 'May I <b>speak</b>?', ru: 'Можно сказать?' }
        ]
      },
      right: { word: 'talk', emoji: '💬', meaning: 'общаться',
        examples: [
          { en: '<b>Talk</b> to me.', ru: 'Поговори со мной.' },
          { en: 'We <b>talk</b> daily.', ru: 'Мы говорим ежедневно.' },
          { en: 'Let\'s <b>talk</b>.', ru: 'Поговорим.' }
        ]
      }
    },
    { id: 'arrive-reach', emoji: '🎯🏁', title: 'ARRIVE / REACH / GET',
      rule: 'Прибыть (куда-то)',
      left: { word: 'arrive', emoji: '🎯', meaning: 'прибыть (arrive at/in)',
        examples: [
          { en: '<b>Arrive</b> at the station.', ru: 'Прибудь на станцию.' },
          { en: '<b>Arrive</b> in London.', ru: 'Прибудь в Лондон.' }
        ]
      },
      right: { word: 'reach', emoji: '🏁', meaning: 'достичь (без предлога)',
        examples: [
          { en: '<b>Reach</b> the top.', ru: 'Достигни вершины.' },
          { en: '<b>Reach</b> home safely.', ru: 'Доберись до дома.' }
        ]
      }
    },
    { id: 'put-place', emoji: '📥📍', title: 'PUT vs PLACE',
      rule: 'Класть / Размещать',
      left: { word: 'put', emoji: '📥', meaning: 'класть',
        examples: [
          { en: '<b>Put</b> it here.', ru: 'Положи здесь.' },
          { en: '<b>Put</b> away toys.', ru: 'Убери игрушки.' }
        ]
      },
      right: { word: 'place', emoji: '📍', meaning: 'разместить (аккуратно)',
        examples: [
          { en: '<b>Place</b> it carefully.', ru: 'Размести аккуратно.' },
          { en: '<b>Place</b> the order.', ru: 'Размести заказ.' }
        ]
      }
    },
    { id: 'rise-raise-2', emoji: '🌅⬆️', title: 'RISE / RAISE — детали',
      rule: 'Подниматься самому / Поднимать что-то',
      left: { word: 'rise', emoji: '🌅', meaning: 'подниматься (сам)',
        examples: [
          { en: 'The sun <b>rises</b>.', ru: 'Солнце встаёт.' },
          { en: 'Prices <b>rise</b>.', ru: 'Цены растут.' }
        ]
      },
      right: { word: 'raise', emoji: '⬆️', meaning: 'поднимать (что-то)',
        examples: [
          { en: '<b>Raise</b> your hand.', ru: 'Подними руку.' },
          { en: '<b>Raise</b> the price.', ru: 'Подними цену.' }
        ]
      }
    },
    { id: 'rob-steal', emoji: '🔫💰', title: 'ROB vs STEAL',
      rule: 'Ограбить человека / Украсть вещь',
      left: { word: 'rob', emoji: '🔫', meaning: 'ограбить (кого-то)',
        examples: [
          { en: 'They <b>robbed</b> a bank.', ru: 'Они ограбили банк.' },
          { en: 'He was <b>robbed</b>.', ru: 'Его ограбили.' }
        ]
      },
      right: { word: 'steal', emoji: '💰', meaning: 'украсть (что-то)',
        examples: [
          { en: 'Someone <b>stole</b> my bike.', ru: 'Кто-то украл мой велосипед.' },
          { en: 'Don\'t <b>steal</b>.', ru: 'Не воруй.' }
        ]
      }
    },
    { id: 'advise-warn', emoji: '✅⚠️', title: 'ADVISE vs WARN',
      rule: 'Советовать / Предупреждать',
      left: { word: 'advise', emoji: '✅', meaning: 'советовать',
        examples: [
          { en: 'I <b>advise</b> rest.', ru: 'Советую отдохнуть.' },
          { en: 'He <b>advised</b> caution.', ru: 'Он советовал быть осторожным.' }
        ]
      },
      right: { word: 'warn', emoji: '⚠️', meaning: 'предупреждать',
        examples: [
          { en: 'I <b>warn</b> you!', ru: 'Я тебя предупреждаю!' },
          { en: 'They <b>warned</b> us.', ru: 'Они нас предупредили.' }
        ]
      }
    },
    { id: 'allow-let', emoji: '✅🔓', title: 'ALLOW vs LET',
      rule: 'Разрешать (формально) / Пускать',
      left: { word: 'allow', emoji: '✅', meaning: 'разрешать (формально)',
        examples: [
          { en: 'Smoking is not <b>allowed</b>.', ru: 'Курение не разрешено.' },
          { en: 'They <b>allow</b> dogs.', ru: 'Они разрешают собак.' }
        ]
      },
      right: { word: 'let', emoji: '🔓', meaning: 'позволять (неформально)',
        examples: [
          { en: '<b>Let</b> me go.', ru: 'Позволь мне уйти.' },
          { en: '<b>Let</b> him speak.', ru: 'Дай ему сказать.' }
        ]
      }
    },
    { id: 'hope-wish', emoji: '🌟💫', title: 'HOPE vs WISH',
      rule: 'Надежда (реально) / Желание (нереально)',
      left: { word: 'hope', emoji: '🌟', meaning: 'надеяться (реально)',
        examples: [
          { en: 'I <b>hope</b> you come.', ru: 'Надеюсь, ты придёшь.' },
          { en: '<b>Hope</b> for the best.', ru: 'Надейся на лучшее.' }
        ]
      },
      right: { word: 'wish', emoji: '💫', meaning: 'желать (нереально)',
        examples: [
          { en: 'I <b>wish</b> I could fly.', ru: 'Хотел бы я летать.' },
          { en: 'I <b>wish</b> you were here.', ru: 'Жаль, что тебя нет.' }
        ]
      }
    },
    { id: 'marry-divorce', emoji: '💍💔', title: 'MARRY / DIVORCE / GET',
      rule: 'Жениться / Развестись',
      left: { word: 'marry', emoji: '💍', meaning: 'жениться (на ком)',
        examples: [
          { en: 'He <b>married</b> her.', ru: 'Он женился на ней.' },
          { en: 'She got <b>married</b>.', ru: 'Она вышла замуж.' }
        ]
      },
      right: { word: 'divorce', emoji: '💔', meaning: 'развестись',
        examples: [
          { en: 'They <b>divorced</b>.', ru: 'Они развелись.' },
          { en: 'She got <b>divorced</b>.', ru: 'Она развелась.' }
        ]
      }
    },
    { id: 'spend-waste', emoji: '💰🗑️', title: 'SPEND vs WASTE',
      rule: 'Тратить (полезно) / Тратить впустую',
      left: { word: 'spend', emoji: '💰', meaning: 'тратить (с пользой)',
        examples: [
          { en: '<b>Spend</b> time wisely.', ru: 'Трать время с умом.' },
          { en: '<b>Spend</b> money on books.', ru: 'Трать деньги на книги.' }
        ]
      },
      right: { word: 'waste', emoji: '🗑️', meaning: 'тратить впустую',
        examples: [
          { en: 'Don\'t <b>waste</b> time.', ru: 'Не трать время зря.' },
          { en: '<b>Waste</b> of money.', ru: 'Пустая трата.' }
        ]
      }
    },
    { id: 'look-like-as', emoji: '👀🔷', title: 'LOOK LIKE vs AS',
      rule: 'Похож на / Как',
      left: { word: 'look like', emoji: '👀', meaning: 'быть похожим на',
        examples: [
          { en: 'She <b>looks like</b> a model.', ru: 'Она похожа на модель.' },
          { en: 'You <b>look like</b> your dad.', ru: 'Ты похож на отца.' }
        ]
      },
      right: { word: 'as', emoji: '🔷', meaning: 'в роли',
        examples: [
          { en: 'He works <b>as</b> a doctor.', ru: 'Он работает врачом.' },
          { en: '<b>As</b> I said.', ru: 'Как я и говорил.' }
        ]
      }
    },
    { id: 'convenient-comfortable', emoji: '🎯🛋️', title: 'CONVENIENT vs COMFORTABLE',
      rule: 'Удобный (по ситуации) / Комфортный (физически)',
      left: { word: 'convenient', emoji: '🎯', meaning: 'удобный (по времени/месту)',
        examples: [
          { en: 'A <b>convenient</b> time.', ru: 'Удобное время.' },
          { en: 'A <b>convenient</b> shop.', ru: 'Удобный магазин.' }
        ]
      },
      right: { word: 'comfortable', emoji: '🛋️', meaning: 'комфортный (физически)',
        examples: [
          { en: 'A <b>comfortable</b> chair.', ru: 'Удобное кресло.' },
          { en: '<b>Comfortable</b> shoes.', ru: 'Удобная обувь.' }
        ]
      }
    },
    { id: 'beside-besides', emoji: '↔️➕', title: 'BESIDE vs BESIDES',
      rule: 'Рядом / Кроме того',
      left: { word: 'beside', emoji: '↔️', meaning: 'рядом',
        examples: [
          { en: 'Sit <b>beside</b> me.', ru: 'Сядь рядом.' },
          { en: '<b>Beside</b> the door.', ru: 'Рядом с дверью.' }
        ]
      },
      right: { word: 'besides', emoji: '➕', meaning: 'кроме того',
        examples: [
          { en: '<b>Besides</b>, it\'s cheap.', ru: 'Кроме того, это дёшево.' },
          { en: '<b>Besides</b> that, I\'m tired.', ru: 'Кроме того, я устал.' }
        ]
      }
    },
    { id: 'between-among', emoji: '↔️👥', title: 'BETWEEN vs AMONG',
      rule: 'Между (двумя) / Среди (многих)',
      left: { word: 'between', emoji: '↔️', meaning: 'между двумя',
        examples: [
          { en: '<b>Between</b> you and me.', ru: 'Между нами.' },
          { en: '<b>Between</b> 2 and 4.', ru: 'Между 2 и 4.' }
        ]
      },
      right: { word: 'among', emoji: '👥', meaning: 'среди',
        examples: [
          { en: '<b>Among</b> friends.', ru: 'Среди друзей.' },
          { en: '<b>Among</b> the crowd.', ru: 'Среди толпы.' }
        ]
      }
    },
    { id: 'below-under', emoji: '⬇️🛏️', title: 'BELOW vs UNDER',
      rule: 'Ниже уровня / Под (укрытие)',
      left: { word: 'below', emoji: '⬇️', meaning: 'ниже',
        examples: [
          { en: '<b>Below</b> zero.', ru: 'Ниже нуля.' },
          { en: '<b>Below</b> the surface.', ru: 'Под поверхностью.' }
        ]
      },
      right: { word: 'under', emoji: '🛏️', meaning: 'под',
        examples: [
          { en: '<b>Under</b> the bed.', ru: 'Под кроватью.' },
          { en: '<b>Under</b> the table.', ru: 'Под столом.' }
        ]
      }
    },
    { id: 'during-for', emoji: '⏱️📅', title: 'DURING vs FOR',
      rule: 'В течение (когда) / На протяжении (как долго)',
      left: { word: 'during', emoji: '⏱️', meaning: 'во время',
        examples: [
          { en: '<b>During</b> the lesson.', ru: 'Во время урока.' },
          { en: '<b>During</b> summer.', ru: 'В течение лета.' }
        ]
      },
      right: { word: 'for', emoji: '📅', meaning: 'на протяжении',
        examples: [
          { en: '<b>For</b> 2 hours.', ru: 'В течение 2 часов.' },
          { en: '<b>For</b> a long time.', ru: 'Долго.' }
        ]
      }
    },
    { id: 'still-yet', emoji: '⏳✅', title: 'STILL vs YET',
      rule: 'Всё ещё / Уже',
      left: { word: 'still', emoji: '⏳', meaning: 'всё ещё (в утверждениях)',
        examples: [
          { en: 'He is <b>still</b> sleeping.', ru: 'Он всё ещё спит.' },
          { en: 'I <b>still</b> love you.', ru: 'Я всё ещё тебя люблю.' }
        ]
      },
      right: { word: 'yet', emoji: '✅', meaning: 'уже (в вопросах/отрицаниях)',
        examples: [
          { en: 'Not <b>yet</b>.', ru: 'Ещё нет.' },
          { en: 'Have you finished <b>yet</b>?', ru: 'Ты уже закончил?' }
        ]
      }
    },
    { id: 'trip-travel', emoji: '🎒✈️', title: 'TRIP / TRAVEL / JOURNEY',
      rule: 'Поездка / Путешествие / Дорога',
      left: { word: 'trip', emoji: '🎒', meaning: 'поездка (короткая)',
        examples: [
          { en: 'A business <b>trip</b>.', ru: 'Деловая поездка.' },
          { en: 'A short <b>trip</b>.', ru: 'Короткая поездка.' }
        ]
      },
      right: { word: 'travel', emoji: '✈️', meaning: 'путешествие (общее)',
        examples: [
          { en: 'I love <b>travel</b>.', ru: 'Я люблю путешествия.' },
          { en: 'Air <b>travel</b>.', ru: 'Авиапутешествия.' }
        ]
      }
    },
    { id: 'job-work', emoji: '💼🔧', title: 'JOB vs WORK',
      rule: 'Работа (место) / Работа (процесс)',
      left: { word: 'job', emoji: '💼', meaning: 'работа (исчисл.)',
        examples: [
          { en: 'A good <b>job</b>.', ru: 'Хорошая работа.' },
          { en: 'Find a <b>job</b>.', ru: 'Найди работу.' }
        ]
      },
      right: { word: 'work', emoji: '🔧', meaning: 'работа (неисчисл.)',
        examples: [
          { en: 'I have <b>work</b>.', ru: 'У меня работа.' },
          { en: 'Go to <b>work</b>.', ru: 'Идти на работу.' }
        ]
      }
    },
    { id: 'home-house', emoji: '🏠🏡', title: 'HOME vs HOUSE',
      rule: 'Дом (родной) / Дом (здание)',
      left: { word: 'home', emoji: '🏠', meaning: 'дом (место семьи)',
        examples: [
          { en: 'Go <b>home</b>.', ru: 'Иди домой.' },
          { en: 'I\'m at <b>home</b>.', ru: 'Я дома.' }
        ]
      },
      right: { word: 'house', emoji: '🏡', meaning: 'дом (здание)',
        examples: [
          { en: 'A big <b>house</b>.', ru: 'Большой дом.' },
          { en: 'Buy a <b>house</b>.', ru: 'Купи дом.' }
        ]
      }
    },
    { id: 'all-every', emoji: '🔢🌍', title: 'ALL vs EVERY',
      rule: 'Все (вместе) / Каждый',
      left: { word: 'all', emoji: '🔢', meaning: 'все (целое)',
        examples: [
          { en: '<b>All</b> people.', ru: 'Все люди.' },
          { en: '<b>All</b> day.', ru: 'Весь день.' }
        ]
      },
      right: { word: 'every', emoji: '🌍', meaning: 'каждый (по одному)',
        examples: [
          { en: '<b>Every</b> day.', ru: 'Каждый день.' },
          { en: '<b>Every</b> person.', ru: 'Каждый человек.' }
        ]
      }
    },
    { id: 'both-either', emoji: '2️⃣1️⃣', title: 'BOTH / EITHER / NEITHER',
      rule: 'Оба / Один из / Ни один',
      left: { word: 'both', emoji: '2️⃣', meaning: 'оба',
        examples: [
          { en: '<b>Both</b> are good.', ru: 'Оба хороши.' },
          { en: '<b>Both</b> of them.', ru: 'Оба из них.' }
        ]
      },
      right: { word: 'either', emoji: '1️⃣', meaning: 'любой из двух',
        examples: [
          { en: '<b>Either</b> one.', ru: 'Любой.' },
          { en: '<b>Either</b> is fine.', ru: 'Любой подойдёт.' }
        ]
      }
    },
    { id: 'say-tell-more', emoji: '💬🗣️', title: 'SAY vs TELL — продвинутый',
      rule: 'Идиомы с say и tell',
      left: { word: 'say', emoji: '💬', meaning: 'фразы с say',
        examples: [
          { en: '<b>Say</b> cheese!', ru: 'Скажи «сыр»!' },
          { en: '<b>Say</b> what you mean.', ru: 'Говори, что думаешь.' },
          { en: '<b>Say</b> for yourself.', ru: 'Говори за себя.' }
        ]
      },
      right: { word: 'tell', emoji: '🗣️', meaning: 'фразы с tell',
        examples: [
          { en: '<b>Tell</b> me more.', ru: 'Расскажи больше.' },
          { en: '<b>Tell</b> on someone.', ru: 'Донеси на кого-то.' },
          { en: 'Time will <b>tell</b>.', ru: 'Время покажет.' }
        ]
      }
    }
);

// ───────────────────────────────────────────────────────────
// 🆕 20 НОВЫХ СЛОВ-БЛИЗНЕЦОВ (twinWords)
// ───────────────────────────────────────────────────────────
twinWords.push(
    { id: 'affect-effect-3', emoji: '🌊🎯', title: 'AFFECT / EFFECT / EFFECTIVE',
      rule: 'Влиять / Эффект / Эффективный',
      left: { word: 'affect', emoji: '🌊', pos: 'глаг.', meaning: 'влиять',
        examples: [
          { en: 'It <b>affects</b> health.', ru: 'Это влияет на здоровье.' },
          { en: 'How does it <b>affect</b> us?', ru: 'Как это на нас влияет?' }
        ]
      },
      right: { word: 'effect', emoji: '🎯', pos: 'сущ.', meaning: 'эффект',
        examples: [
          { en: 'A side <b>effect</b>.', ru: 'Побочный эффект.' },
          { en: 'Take <b>effect</b>.', ru: 'Даёт эффект.' }
        ]
      }
    },
    { id: 'advice-advise-3', emoji: '💬✅', title: 'ADVICE / ADVISE / ADVICE-GIVER',
      rule: 'Совет / Советовать / Советчик',
      left: { word: 'advice', emoji: '💬', pos: 'сущ. (неисч.)', meaning: 'совет',
        examples: [
          { en: 'Some <b>advice</b>.', ru: 'Несколько советов.' },
          { en: 'Good <b>advice</b>.', ru: 'Хороший совет.' }
        ]
      },
      right: { word: 'advise', emoji: '✅', pos: 'глаг.', meaning: 'советовать',
        examples: [
          { en: 'I <b>advise</b> rest.', ru: 'Советую отдых.' },
          { en: 'He <b>advises</b> caution.', ru: 'Он советует осторожность.' }
        ]
      }
    },
    { id: 'personal-personnel-3', emoji: '👤👥', title: 'PERSONAL / PERSONNEL / PERSONALITY',
      rule: 'Личный / Персонал / Личность',
      left: { word: 'personal', emoji: '👤', pos: 'прил.', meaning: 'личный',
        examples: [
          { en: '<b>Personal</b> data.', ru: 'Личные данные.' },
          { en: '<b>Personal</b> life.', ru: 'Личная жизнь.' }
        ]
      },
      right: { word: 'personnel', emoji: '👥', pos: 'сущ.', meaning: 'персонал',
        examples: [
          { en: 'Company <b>personnel</b>.', ru: 'Персонал компании.' },
          { en: 'HR (Human Resources) <b>personnel</b>.', ru: 'Кадровый персонал.' }
        ]
      }
    },
    { id: 'some-time', emoji: '📅🔁', title: 'SOME TIME / SOMETIME / SOMETIMES',
      rule: 'Некоторое время / Как-то / Иногда',
      left: { word: 'some time', emoji: '📅', pos: 'фраза', meaning: 'некоторое время',
        examples: [
          { en: 'I need <b>some time</b>.', ru: 'Мне нужно время.' },
          { en: 'For <b>some time</b>.', ru: 'На некоторое время.' }
        ]
      },
      right: { word: 'sometime', emoji: '🔁', pos: 'нареч.', meaning: 'как-то раз',
        examples: [
          { en: 'Let\'s meet <b>sometime</b>.', ru: 'Встретимся как-нибудь.' },
          { en: '<b>Sometime</b> next week.', ru: 'Как-нибудь на след. неделе.' }
        ]
      }
    },
    { id: 'every-day', emoji: '📅🔁', title: 'EVERY DAY / EVERYDAY',
      rule: 'Каждый день (2 слова) / Ежедневный (1 слово)',
      left: { word: 'every day', emoji: '📅', pos: 'фраза', meaning: 'каждый день',
        examples: [
          { en: 'I run <b>every day</b>.', ru: 'Я бегаю каждый день.' },
          { en: '<b>Every day</b> is new.', ru: 'Каждый день нов.' }
        ]
      },
      right: { word: 'everyday', emoji: '🔁', pos: 'прил.', meaning: 'повседневный',
        examples: [
          { en: '<b>Everyday</b> clothes.', ru: 'Повседневная одежда.' },
          { en: '<b>Everyday</b> life.', ru: 'Повседневная жизнь.' }
        ]
      }
    },
    { id: 'any-way', emoji: '🛣️➡️', title: 'ANY WAY / ANYWAY / ANY WAYS',
      rule: 'Любой путь / В любом случае',
      left: { word: 'any way', emoji: '🛣️', pos: 'фраза', meaning: 'любой способ',
        examples: [
          { en: 'Is there <b>any way</b>?', ru: 'Есть способ?' },
          { en: 'Any way you like.', ru: 'Любым способом.' }
        ]
      },
      right: { word: 'anyway', emoji: '➡️', pos: 'нареч.', meaning: 'в любом случае',
        examples: [
          { en: '<b>Anyway</b>, let\'s go.', ru: 'В любом случае, пойдём.' },
          { en: 'Thanks <b>anyway</b>.', ru: 'Всё равно спасибо.' }
        ]
      }
    },
    { id: 'altogether', emoji: '🌍✅', title: 'ALL TOGETHER / ALTOGETHER',
      rule: 'Все вместе / В целом',
      left: { word: 'all together', emoji: '🌍', pos: 'фраза', meaning: 'все вместе',
        examples: [
          { en: 'We sang <b>all together</b>.', ru: 'Мы пели все вместе.' },
          { en: '<b>All together</b> now!', ru: 'Все вместе!' }
        ]
      },
      right: { word: 'altogether', emoji: '✅', pos: 'нареч.', meaning: 'в целом',
        examples: [
          { en: '<b>Altogether</b>, it\'s fine.', ru: 'В целом, хорошо.' },
          { en: 'Not <b>altogether</b> bad.', ru: 'Не так уж плохо.' }
        ]
      }
    },
    { id: 'complement', emoji: '➕🎨', title: 'COMPLIMENT / COMPLEMENT',
      rule: 'Комплимент / Дополнение',
      left: { word: 'compliment', emoji: '➕', pos: 'сущ./глаг.', meaning: 'комплимент',
        examples: [
          { en: 'Give a <b>compliment</b>.', ru: 'Сделай комплимент.' },
          { en: 'She <b>complimented</b> him.', ru: 'Она его похвалила.' }
        ]
      },
      right: { word: 'complement', emoji: '🎨', pos: 'сущ./глаг.', meaning: 'дополнение',
        examples: [
          { en: 'Perfect <b>complement</b>.', ru: 'Идеальное дополнение.' },
          { en: 'They <b>complement</b> each other.', ru: 'Они дополняют друг друга.' }
        ]
      }
    },
    { id: 'rise-raise-further', emoji: '🌅⬆️', title: 'RISE / RAISE / ARISE',
      rule: 'Встать / Поднять / Возникнуть',
      left: { word: 'rise', emoji: '🌅', pos: 'глаг.', meaning: 'вставать (сам)',
        examples: [
          { en: 'Sun <b>rises</b>.', ru: 'Солнце встаёт.' },
          { en: 'Prices <b>rise</b>.', ru: 'Цены растут.' }
        ]
      },
      right: { word: 'raise', emoji: '⬆️', pos: 'глаг.', meaning: 'поднимать',
        examples: [
          { en: '<b>Raise</b> hand.', ru: 'Подними руку.' },
          { en: '<b>Raise</b> money.', ru: 'Собери деньги.' }
        ]
      }
    },
    { id: 'cite-site-sight2', emoji: '📖📍👁️', title: 'CITE / SITE / SIGHT — примеры',
      rule: 'Цитировать / Место / Зрение',
      left: { word: 'cite', emoji: '📖', pos: 'глаг.', meaning: 'цитировать',
        examples: [
          { en: '<b>Cite</b> sources.', ru: 'Цитируй источники.' },
          { en: 'He <b>cited</b> a book.', ru: 'Он сослался на книгу.' }
        ]
      },
      right: { word: 'site', emoji: '📍', pos: 'сущ.', meaning: 'место, сайт',
        examples: [
          { en: 'A construction <b>site</b>.', ru: 'Стройплощадка.' },
          { en: 'Web <b>site</b>.', ru: 'Веб-сайт.' }
        ]
      }
    },
    { id: 'lay-lie-3', emoji: '🛏️🧍', title: 'LAY / LIE / LAID / LIED',
      rule: 'Класть / Лежать / Лгал',
      left: { word: 'lay', emoji: '🛏️', pos: 'глаг.', meaning: 'класть (laidy-laid)',
        examples: [
          { en: '<b>Lay</b> the book down.', ru: 'Положи книгу.' },
          { en: 'He <b>laid</b> it there.', ru: 'Он положил это там.' }
        ]
      },
      right: { word: 'lie', emoji: '🧍', pos: 'глаг.', meaning: 'лежать (lay-lain)',
        examples: [
          { en: '<b>Lie</b> on the bed.', ru: 'Ляг на кровать.' },
          { en: 'It <b>lay</b> on the floor.', ru: 'Оно лежало на полу.' }
        ]
      }
    },
    { id: 'weather-whether-3', emoji: '🌦️🤔', title: 'WEATHER / WHETHER / WETHER',
      rule: 'Погода / Ли / Баран',
      left: { word: 'weather', emoji: '🌦️', pos: 'сущ.', meaning: 'погода',
        examples: [
          { en: 'Nice <b>weather</b>.', ru: 'Хорошая погода.' },
          { en: 'Weather <b>forecast</b>.', ru: 'Прогноз погоды.' }
        ]
      },
      right: { word: 'whether', emoji: '🤔', pos: 'союз', meaning: 'ли',
        examples: [
          { en: 'Ask <b>whether</b> he\'s coming.', ru: 'Спроси, придёт ли он.' },
          { en: 'Whether or not.', ru: 'Так или иначе.' }
        ]
      }
    },
    { id: 'lightning', emoji: '⚡💡', title: 'LIGHTNING / LIGHTING / LIGHTENING',
      rule: 'Молния / Освещение / Облегчение',
      left: { word: 'lightning', emoji: '⚡', pos: 'сущ.', meaning: 'молния',
        examples: [
          { en: '<b>Lightning</b> struck.', ru: 'Ударила молния.' },
          { en: '<b>Lightning</b> speed.', ru: 'Со скоростью молнии.' }
        ]
      },
      right: { word: 'lighting', emoji: '💡', pos: 'сущ.', meaning: 'освещение',
        examples: [
          { en: 'Good <b>lighting</b>.', ru: 'Хорошее освещение.' },
          { en: 'Street <b>lighting</b>.', ru: 'Уличное освещение.' }
        ]
      }
    },
    { id: 'passed-past', emoji: '✅⏪', title: 'PASSED / PAST',
      rule: 'Прошёл / Прошлое',
      left: { word: 'passed', emoji: '✅', pos: 'глаг.', meaning: 'прошёл (глагол)',
        examples: [
          { en: 'He <b>passed</b> the exam.', ru: 'Он сдал экзамен.' },
          { en: 'Time <b>passed</b>.', ru: 'Время прошло.' }
        ]
      },
      right: { word: 'past', emoji: '⏪', pos: 'сущ./предлог', meaning: 'прошлое',
        examples: [
          { en: 'In the <b>past</b>.', ru: 'В прошлом.' },
          { en: 'Walk <b>past</b> it.', ru: 'Пройди мимо.' }
        ]
      }
    },
    { id: 'precede', emoji: '⬅️➡️', title: 'PRECEDE / PROCEED / SUPERSEDE',
      rule: 'Предшествовать / Продолжать',
      left: { word: 'precede', emoji: '⬅️', pos: 'глаг.', meaning: 'предшествовать',
        examples: [
          { en: 'A precedes B.', ru: 'А перед Б.' },
          { en: 'Preceded by music.', ru: 'С музыкой до этого.' }
        ]
      },
      right: { word: 'proceed', emoji: '➡️', pos: 'глаг.', meaning: 'продолжать',
        examples: [
          { en: '<b>Proceed</b> with care.', ru: 'Продолжай с осторожностью.' },
          { en: '<b>Proceed</b> to gate 5.', ru: 'Пройдите к выходу 5.' }
        ]
      }
    },
    { id: 'instinct', emoji: '🧠✅', title: 'INSTINCT / INTUITION',
      rule: 'Инстинкт / Интуиция',
      left: { word: 'instinct', emoji: '🧠', pos: 'сущ.', meaning: 'инстинкт (природный)',
        examples: [
          { en: 'Animal <b>instinct</b>.', ru: 'Животный инстинкт.' },
          { en: 'Trust your <b>instinct</b>.', ru: 'Доверься инстинкту.' }
        ]
      },
      right: { word: 'intuition', emoji: '✅', pos: 'сущ.', meaning: 'интуиция (внутреннее)',
        examples: [
          { en: 'Female <b>intuition</b>.', ru: 'Женская интуиция.' },
          { en: 'Follow your <b>intuition</b>.', ru: 'Следуй интуиции.' }
        ]
      }
    },
    { id: 'efficient', emoji: '⚙️✅', title: 'EFFICIENT / EFFECTIVE',
      rule: 'Эффективный (без затрат) / Действенный',
      left: { word: 'efficient', emoji: '⚙️', pos: 'прил.', meaning: 'эффективный (по ресурсам)',
        examples: [
          { en: 'An <b>efficient</b> system.', ru: 'Эффективная система.' },
          { en: '<b>Efficient</b> worker.', ru: 'Эффективный работник.' }
        ]
      },
      right: { word: 'effective', emoji: '✅', pos: 'прил.', meaning: 'действенный',
        examples: [
          { en: 'An <b>effective</b> solution.', ru: 'Действенное решение.' },
          { en: '<b>Effective</b> method.', ru: 'Действенный метод.' }
        ]
      }
    },
    { id: 'historic-3', emoji: '🏛️📜', title: 'HISTORIC / HISTORICAL / HISTORICAL',
      rule: 'Важный / Связанный с историей',
      left: { word: 'historic', emoji: '🏛️', pos: 'прил.', meaning: 'исторически важный',
        examples: [
          { en: 'A <b>historic</b> day.', ru: 'Исторический день.' },
          { en: 'A <b>historic</b> event.', ru: 'Историческое событие.' }
        ]
      },
      right: { word: 'historical', emoji: '📜', pos: 'прил.', meaning: 'исторический (по теме)',
        examples: [
          { en: 'A <b>historical</b> novel.', ru: 'Исторический роман.' },
          { en: '<b>Historical</b> data.', ru: 'Исторические данные.' }
        ]
      }
    },
    { id: 'careful-careless', emoji: '🧐🙈', title: 'CAREFUL / CARELESS / CARING',
      rule: 'Осторожный / Безалаберный / Заботливый',
      left: { word: 'careful', emoji: '🧐', pos: 'прил.', meaning: 'осторожный',
        examples: [
          { en: 'Be <b>careful</b>!', ru: 'Будь осторожен!' },
          { en: 'A <b>careful</b> driver.', ru: 'Осторожный водитель.' }
        ]
      },
      right: { word: 'careless', emoji: '🙈', pos: 'прил.', meaning: 'беспечный',
        examples: [
          { en: 'A <b>careless</b> mistake.', ru: 'Небрежная ошибка.' },
          { en: '<b>Careless</b> driver.', ru: 'Беспечный водитель.' }
        ]
      }
    },
    { id: 'imaginary', emoji: '🌈👻', title: 'IMAGINARY / IMAGINATIVE / IMAGINABLE',
      rule: 'Вымышленный / Творческий / Вообразимый',
      left: { word: 'imaginary', emoji: '🌈', pos: 'прил.', meaning: 'вымышленный',
        examples: [
          { en: 'An <b>imaginary</b> friend.', ru: 'Воображаемый друг.' },
          { en: '<b>Imaginary</b> world.', ru: 'Вымышленный мир.' }
        ]
      },
      right: { word: 'imaginative', emoji: '👻', pos: 'прил.', meaning: 'творческий',
        examples: [
          { en: 'An <b>imaginative</b> child.', ru: 'Творческий ребёнок.' },
          { en: '<b>Imaginative</b> story.', ru: 'Творческая история.' }
        ]
      }
    },
    { id: 'sensible', emoji: '🧠❤️', title: 'SENSIBLE / SENSITIVE',
      rule: 'Разумный / Чувствительный',
      left: { word: 'sensible', emoji: '🧠', pos: 'прил.', meaning: 'разумный',
        examples: [
          { en: 'A <b>sensible</b> decision.', ru: 'Разумное решение.' },
          { en: '<b>Sensible</b> advice.', ru: 'Разумный совет.' }
        ]
      },
      right: { word: 'sensitive', emoji: '❤️', pos: 'прил.', meaning: 'чувствительный',
        examples: [
          { en: 'A <b>sensitive</b> topic.', ru: 'Чувствительная тема.' },
          { en: '<b>Sensitive</b> skin.', ru: 'Чувствительная кожа.' }
        ]
      }
    },
    { id: 'economic', emoji: '💼💰', title: 'ECONOMIC / ECONOMICAL',
      rule: 'Экономический / Экономный',
      left: { word: 'economic', emoji: '💼', pos: 'прил.', meaning: 'экономический',
        examples: [
          { en: '<b>Economic</b> growth.', ru: 'Экономический рост.' },
          { en: '<b>Economic</b> crisis.', ru: 'Экономический кризис.' }
        ]
      },
      right: { word: 'economical', emoji: '💰', pos: 'прил.', meaning: 'экономный',
        examples: [
          { en: 'An <b>economical</b> car.', ru: 'Экономная машина.' },
          { en: '<b>Economical</b> use.', ru: 'Экономное использование.' }
        ]
      }
    }
);

// ───────────────────────────────────────────────────────────
// 🆕 30 НОВЫХ АНТОНИМОВ (oppositeAffixes)
// ───────────────────────────────────────────────────────────
oppositeAffixes.push(
    { pair: ['over-', 'under-'], emoji: '⚖️', ex1: 'overestimate', ex2: 'underestimate', ru: 'переоценить → недооценить' },
    { pair: ['over-', 'under-'], emoji: '⚖️', ex1: 'overcook', ex2: 'undercook', ru: 'переварить → недоварить' },
    { pair: ['over-', 'under-'], emoji: '⚖️', ex1: 'overpay', ex2: 'underpay', ru: 'переплатить → недоплатить' },
    { pair: ['over-', 'under-'], emoji: '⚖️', ex1: 'overwork', ex2: 'underwork', ru: 'переработать → недоработать' },
    { pair: ['over-', 'under-'], emoji: '⚖️', ex1: 'overweight', ex2: 'underweight', ru: 'перевес → недовес' },
    { pair: ['macro-', 'micro-'], emoji: '⚖️', ex1: 'macroeconomics', ex2: 'microeconomics', ru: 'макроэкономика → микроэкономика' },
    { pair: ['macro-', 'micro-'], emoji: '⚖️', ex1: 'macroscopic', ex2: 'microscopic', ru: 'макроскопический → микроскопический' },
    { pair: ['maxi-', 'mini-'], emoji: '⚖️', ex1: 'maxiskirt', ex2: 'miniskirt', ru: 'макси-юбка → мини-юбка' },
    { pair: ['maxi-', 'mini-'], emoji: '⚖️', ex1: 'maximize', ex2: 'minimize', ru: 'максимизировать → минимизировать' },
    { pair: ['hyper-', 'hypo-'], emoji: '⚖️', ex1: 'hypertension', ex2: 'hypotension', ru: 'гипертония → гипотония' },
    { pair: ['hyper-', 'hypo-'], emoji: '⚖️', ex1: 'hyperactive', ex2: 'hypoactive', ru: 'гиперактивный → малоактивный' },
    { pair: ['super-', 'sub-'], emoji: '⚖️', ex1: 'superstructure', ex2: 'substructure', ru: 'надстройка → подструктура' },
    { pair: ['super-', 'sub-'], emoji: '⚖️', ex1: 'superscript', ex2: 'subscript', ru: 'верхний индекс → нижний индекс' },
    { pair: ['pre-', 'post-'], emoji: '⚖️', ex1: 'prewar', ex2: 'postwar', ru: 'довоенный → послевоенный' },
    { pair: ['pre-', 'post-'], emoji: '⚖️', ex1: 'preoperative', ex2: 'postoperative', ru: 'до операции → после операции' },
    { pair: ['pro-', 'anti-'], emoji: '⚖️', ex1: 'proactive', ex2: 'antiactive', ru: 'инициативный → противодействующий' },
    { pair: ['pro-', 'anti-'], emoji: '⚖️', ex1: 'progovernment', ex2: 'antigovernment', ru: 'провластный → антиправительственный' },
    { pair: ['in-', 'out-'], emoji: '⚖️', ex1: 'inbound', ex2: 'outbound', ru: 'входящий → исходящий' },
    { pair: ['in-', 'out-'], emoji: '⚖️', ex1: 'indoor', ex2: 'outdoor', ru: 'внутри → на улице' },
    { pair: ['up-', 'down-'], emoji: '⚖️', ex1: 'upgrade', ex2: 'downgrade', ru: 'улучшить → ухудшить' },
    { pair: ['up-', 'down-'], emoji: '⚖️', ex1: 'upstairs', ex2: 'downstairs', ru: 'наверх → вниз' },
    { pair: ['up-', 'down-'], emoji: '⚖️', ex1: 'upside', ex2: 'downside', ru: 'плюс → минус' },
    { pair: ['fore-', 'back-'], emoji: '⚖️', ex1: 'foreground', ex2: 'background', ru: 'передний план → задний план' },
    { pair: ['fore-', 'back-'], emoji: '⚖️', ex1: 'foresee', ex2: 'backsee', ru: 'предвидеть → оглянуться' },
    { pair: ['-ful', '-less'], emoji: '⚖️', ex1: 'meaningful', ex2: 'meaningless', ru: 'значимый → бессмысленный' },
    { pair: ['-ful', '-less'], emoji: '⚖️', ex1: 'powerful', ex2: 'powerless', ru: 'мощный → бессильный' },
    { pair: ['-ful', '-less'], emoji: '⚖️', ex1: 'fearful', ex2: 'fearless', ru: 'боязливый → бесстрашный' },
    { pair: ['un-', '-'], emoji: '⚖️', ex1: 'lock', ex2: 'unlock', ru: 'запереть → открыть' },
    { pair: ['un-', '-'], emoji: '⚖️', ex1: 'pack', ex2: 'unpack', ru: 'упаковать → распаковать' },
    { pair: ['un-', '-'], emoji: '⚖️', ex1: 'cover', ex2: 'uncover', ru: 'покрыть → раскрыть' }
);

// ───────────────────────────────────────────────────────────
// 🆕 30 НОВЫХ СЕМЕЙ СЛОВ (wordFamilies)
// ───────────────────────────────────────────────────────────
wordFamilies.push(
    { root: 'use', emoji: '🔧', meaning: 'использовать',
      members: [
        { word: 'use', pos: 'verb', ru: 'использовать', affix: '—' },
        { word: 'user', pos: 'noun', ru: 'пользователь', affix: '-er' },
        { word: 'usage', pos: 'noun', ru: 'использование', affix: '-age' },
        { word: 'useful', pos: 'adjective', ru: 'полезный', affix: '-ful' },
        { word: 'useless', pos: 'adjective', ru: 'бесполезный', affix: '-less' },
        { word: 'usefully', pos: 'adverb', ru: 'полезно', affix: '-ly' },
        { word: 'reuse', pos: 'verb', ru: 'переиспользовать', affix: 're-' },
        { word: 'misuse', pos: 'verb', ru: 'злоупотреблять', affix: 'mis-' }
      ]
    },
    { root: 'help', emoji: '🤝', meaning: 'помогать',
      members: [
        { word: 'help', pos: 'verb', ru: 'помогать', affix: '—' },
        { word: 'helper', pos: 'noun', ru: 'помощник', affix: '-er' },
        { word: 'helpful', pos: 'adjective', ru: 'полезный', affix: '-ful' },
        { word: 'helpless', pos: 'adjective', ru: 'беспомощный', affix: '-less' },
        { word: 'helpfully', pos: 'adverb', ru: 'услужливо', affix: '-ly' },
        { word: 'unhelpful', pos: 'adjective', ru: 'бесполезный', affix: 'un-' }
      ]
    },
    { root: 'hope', emoji: '🌟', meaning: 'надеяться',
      members: [
        { word: 'hope', pos: 'verb/noun', ru: 'надежда', affix: '—' },
        { word: 'hopeful', pos: 'adjective', ru: 'полный надежды', affix: '-ful' },
        { word: 'hopeless', pos: 'adjective', ru: 'безнадёжный', affix: '-less' },
        { word: 'hopefully', pos: 'adverb', ru: 'надеюсь', affix: '-ly' },
        { word: 'hopelessly', pos: 'adverb', ru: 'безнадёжно', affix: '-lessly' }
      ]
    },
    { root: 'fear', emoji: '😨', meaning: 'страх',
      members: [
        { word: 'fear', pos: 'noun/verb', ru: 'страх', affix: '—' },
        { word: 'fearful', pos: 'adjective', ru: 'боязливый', affix: '-ful' },
        { word: 'fearless', pos: 'adjective', ru: 'бесстрашный', affix: '-less' },
        { word: 'fearfully', pos: 'adverb', ru: 'боязно', affix: '-ly' },
        { word: 'fearsome', pos: 'adjective', ru: 'страшный', affix: '-some' }
      ]
    },
    { root: 'power', emoji: '⚡', meaning: 'сила, власть',
      members: [
        { word: 'power', pos: 'noun', ru: 'сила', affix: '—' },
        { word: 'powerful', pos: 'adjective', ru: 'мощный', affix: '-ful' },
        { word: 'powerless', pos: 'adjective', ru: 'бессильный', affix: '-less' },
        { word: 'empower', pos: 'verb', ru: 'усилить', affix: 'em-' },
        { word: 'superpower', pos: 'noun', ru: 'суперсила', affix: 'super-' }
      ]
    },
    { root: 'meaning', emoji: '💭', meaning: 'значение',
      members: [
        { word: 'mean', pos: 'verb', ru: 'значить', affix: '—' },
        { word: 'meaning', pos: 'noun', ru: 'значение', affix: '-ing' },
        { word: 'meaningful', pos: 'adjective', ru: 'значимый', affix: '-ful' },
        { word: 'meaningless', pos: 'adjective', ru: 'бессмысленный', affix: '-less' },
        { word: 'meaningfully', pos: 'adverb', ru: 'многозначительно', affix: '-ly' }
      ]
    },
    { root: 'thought', emoji: '🧠', meaning: 'мысль',
      members: [
        { word: 'think', pos: 'verb', ru: 'думать', affix: '—' },
        { word: 'thought', pos: 'noun', ru: 'мысль', affix: '—' },
        { word: 'thoughtful', pos: 'adjective', ru: 'задумчивый', affix: '-ful' },
        { word: 'thoughtless', pos: 'adjective', ru: 'бездумный', affix: '-less' },
        { word: 'thoughtfully', pos: 'adverb', ru: 'задумчиво', affix: '-ly' }
      ]
    },
    { root: 'color', emoji: '🎨', meaning: 'цвет',
      members: [
        { word: 'color', pos: 'noun', ru: 'цвет', affix: '—' },
        { word: 'colorful', pos: 'adjective', ru: 'красочный', affix: '-ful' },
        { word: 'colorless', pos: 'adjective', ru: 'бесцветный', affix: '-less' },
        { word: 'colored', pos: 'adjective', ru: 'цветной', affix: '-ed' },
        { word: 'multicolored', pos: 'adjective', ru: 'многоцветный', affix: 'multi-' }
      ]
    },
    { root: 'paint', emoji: '🖌️', meaning: 'рисовать красками',
      members: [
        { word: 'paint', pos: 'verb/noun', ru: 'краска', affix: '—' },
        { word: 'painter', pos: 'noun', ru: 'художник', affix: '-er' },
        { word: 'painting', pos: 'noun', ru: 'картина', affix: '-ing' },
        { word: 'repaint', pos: 'verb', ru: 'перекрасить', affix: 're-' }
      ]
    },
    { root: 'read', emoji: '📖', meaning: 'читать',
      members: [
        { word: 'read', pos: 'verb', ru: 'читать', affix: '—' },
        { word: 'reader', pos: 'noun', ru: 'читатель', affix: '-er' },
        { word: 'reading', pos: 'noun', ru: 'чтение', affix: '-ing' },
        { word: 'readable', pos: 'adjective', ru: 'читаемый', affix: '-able' },
        { word: 'unreadable', pos: 'adjective', ru: 'нечитаемый', affix: 'un-' },
        { word: 'reread', pos: 'verb', ru: 'перечитать', affix: 're-' }
      ]
    },
    { root: 'write', emoji: '✍️', meaning: 'писать',
      members: [
        { word: 'write', pos: 'verb', ru: 'писать', affix: '—' },
        { word: 'writer', pos: 'noun', ru: 'писатель', affix: '-er' },
        { word: 'writing', pos: 'noun', ru: 'письмо', affix: '-ing' },
        { word: 'written', pos: 'adjective', ru: 'письменный', affix: '-en' },
        { word: 'rewrite', pos: 'verb', ru: 'переписать', affix: 're-' },
        { word: 'miswrite', pos: 'verb', ru: 'ошибиться в написании', affix: 'mis-' }
      ]
    },
    { root: 'speak', emoji: '🗣️', meaning: 'говорить',
      members: [
        { word: 'speak', pos: 'verb', ru: 'говорить', affix: '—' },
        { word: 'speaker', pos: 'noun', ru: 'оратор, спикер', affix: '-er' },
        { word: 'speech', pos: 'noun', ru: 'речь', affix: '—' },
        { word: 'speaking', pos: 'noun', ru: 'говорение', affix: '-ing' },
        { word: 'unspeakable', pos: 'adjective', ru: 'невыразимый', affix: 'un-/-able' }
      ]
    },
    { root: 'create', emoji: '🎨', meaning: 'создавать',
      members: [
        { word: 'create', pos: 'verb', ru: 'создавать', affix: '—' },
        { word: 'creator', pos: 'noun', ru: 'создатель', affix: '-or' },
        { word: 'creation', pos: 'noun', ru: 'создание', affix: '-ion' },
        { word: 'creative', pos: 'adjective', ru: 'творческий', affix: '-ive' },
        { word: 'creativity', pos: 'noun', ru: 'креативность', affix: '-ivity' },
        { word: 'recreate', pos: 'verb', ru: 'воссоздать', affix: 're-' }
      ]
    },
    { root: 'destroy', emoji: '💥', meaning: 'разрушать',
      members: [
        { word: 'destroy', pos: 'verb', ru: 'разрушать', affix: '—' },
        { word: 'destroyer', pos: 'noun', ru: 'разрушитель', affix: '-er' },
        { word: 'destruction', pos: 'noun', ru: 'разрушение', affix: '-tion' },
        { word: 'destructive', pos: 'adjective', ru: 'разрушительный', affix: '-ive' },
        { word: 'indestructible', pos: 'adjective', ru: 'неразрушимый', affix: 'in-/-ible' }
      ]
    },
    { root: 'produce', emoji: '🏭', meaning: 'производить',
      members: [
        { word: 'produce', pos: 'verb', ru: 'производить', affix: '—' },
        { word: 'producer', pos: 'noun', ru: 'производитель', affix: '-er' },
        { word: 'product', pos: 'noun', ru: 'продукт', affix: '-t' },
        { word: 'production', pos: 'noun', ru: 'производство', affix: '-ion' },
        { word: 'productive', pos: 'adjective', ru: 'продуктивный', affix: '-ive' },
        { word: 'unproductive', pos: 'adjective', ru: 'непродуктивный', affix: 'un-' },
        { word: 'reproduce', pos: 'verb', ru: 'воспроизводить', affix: 're-' }
      ]
    },
    { root: 'move', emoji: '🏃', meaning: 'двигать',
      members: [
        { word: 'move', pos: 'verb', ru: 'двигать', affix: '—' },
        { word: 'movement', pos: 'noun', ru: 'движение', affix: '-ment' },
        { word: 'moving', pos: 'adjective', ru: 'трогательный', affix: '-ing' },
        { word: 'movable', pos: 'adjective', ru: 'подвижный', affix: '-able' },
        { word: 'remove', pos: 'verb', ru: 'убрать', affix: 're-' },
        { word: 'removal', pos: 'noun', ru: 'удаление', affix: 're-/-al' }
      ]
    },
    { root: 'build', emoji: '🏗️', meaning: 'строить',
      members: [
        { word: 'build', pos: 'verb', ru: 'строить', affix: '—' },
        { word: 'builder', pos: 'noun', ru: 'строитель', affix: '-er' },
        { word: 'building', pos: 'noun', ru: 'здание', affix: '-ing' },
        { word: 'rebuild', pos: 'verb', ru: 'перестроить', affix: 're-' },
        { word: 'unbuilt', pos: 'adjective', ru: 'непостроенный', affix: 'un-' }
      ]
    },
    { root: 'break', emoji: '💔', meaning: 'ломать',
      members: [
        { word: 'break', pos: 'verb/noun', ru: 'ломать', affix: '—' },
        { word: 'breaker', pos: 'noun', ru: 'нарушитель', affix: '-er' },
        { word: 'breakage', pos: 'noun', ru: 'поломка', affix: '-age' },
        { word: 'broken', pos: 'adjective', ru: 'сломанный', affix: '-en' },
        { word: 'unbreakable', pos: 'adjective', ru: 'нерушимый', affix: 'un-/-able' }
      ]
    },
    { root: 'correct', emoji: '✅', meaning: 'исправлять',
      members: [
        { word: 'correct', pos: 'verb/adjective', ru: 'правильный', affix: '—' },
        { word: 'correction', pos: 'noun', ru: 'исправление', affix: '-ion' },
        { word: 'correctly', pos: 'adverb', ru: 'правильно', affix: '-ly' },
        { word: 'incorrect', pos: 'adjective', ru: 'неправильный', affix: 'in-' },
        { word: 'correctness', pos: 'noun', ru: 'правильность', affix: '-ness' }
      ]
    },
    { root: 'judge', emoji: '⚖️', meaning: 'судить',
      members: [
        { word: 'judge', pos: 'verb/noun', ru: 'судья', affix: '—' },
        { word: 'judgement', pos: 'noun', ru: 'суждение', affix: '-ment' },
        { word: 'judging', pos: 'noun', ru: 'оценивание', affix: '-ing' },
        { word: 'prejudge', pos: 'verb', ru: 'предвзято судить', affix: 'pre-' },
        { word: 'misjudge', pos: 'verb', ru: 'ошибиться в суждении', affix: 'mis-' }
      ]
    },
    { root: 'trust', emoji: '🤝', meaning: 'доверять',
      members: [
        { word: 'trust', pos: 'verb/noun', ru: 'доверие', affix: '—' },
        { word: 'trusting', pos: 'adjective', ru: 'доверчивый', affix: '-ing' },
        { word: 'trustworthy', pos: 'adjective', ru: 'надёжный', affix: '-worthy' },
        { word: 'untrustworthy', pos: 'adjective', ru: 'ненадёжный', affix: 'un-' },
        { word: 'distrust', pos: 'verb/noun', ru: 'недоверие', affix: 'dis-' },
        { word: 'mistrust', pos: 'verb/noun', ru: 'недоверие', affix: 'mis-' }
      ]
    },
    { root: 'care', emoji: '💗', meaning: 'заботиться',
      members: [
        { word: 'care', pos: 'verb/noun', ru: 'забота', affix: '—' },
        { word: 'carer', pos: 'noun', ru: 'опекун', affix: '-er' },
        { word: 'caring', pos: 'adjective', ru: 'заботливый', affix: '-ing' },
        { word: 'careful', pos: 'adjective', ru: 'осторожный', affix: '-ful' },
        { word: 'careless', pos: 'adjective', ru: 'безалаберный', affix: '-less' },
        { word: 'carefree', pos: 'adjective', ru: 'беззаботный', affix: '-free' }
      ]
    },
    { root: 'act', emoji: '🎬', meaning: 'действовать',
      members: [
        { word: 'act', pos: 'verb/noun', ru: 'действовать', affix: '—' },
        { word: 'action', pos: 'noun', ru: 'действие', affix: '-ion' },
        { word: 'actor', pos: 'noun', ru: 'актёр', affix: '-or' },
        { word: 'active', pos: 'adjective', ru: 'активный', affix: '-ive' },
        { word: 'actively', pos: 'adverb', ru: 'активно', affix: '-ly' },
        { word: 'activity', pos: 'noun', ru: 'деятельность', affix: '-ity' },
        { word: 'react', pos: 'verb', ru: 'реагировать', affix: 're-' },
        { word: 'interact', pos: 'verb', ru: 'взаимодействовать', affix: 'inter-' }
      ]
    },
    { root: 'enjoy', emoji: '😊', meaning: 'наслаждаться',
      members: [
        { word: 'enjoy', pos: 'verb', ru: 'наслаждаться', affix: '—' },
        { word: 'enjoyable', pos: 'adjective', ru: 'приятный', affix: '-able' },
        { word: 'enjoyment', pos: 'noun', ru: 'удовольствие', affix: '-ment' },
        { word: 'unenjoyable', pos: 'adjective', ru: 'неприятный', affix: 'un-' }
      ]
    },
    { root: 'achieve', emoji: '🏆', meaning: 'достигать',
      members: [
        { word: 'achieve', pos: 'verb', ru: 'достигать', affix: '—' },
        { word: 'achievement', pos: 'noun', ru: 'достижение', affix: '-ment' },
        { word: 'achievable', pos: 'adjective', ru: 'достижимый', affix: '-able' },
        { word: 'unachievable', pos: 'adjective', ru: 'недостижимый', affix: 'un-' },
        { word: 'overachieve', pos: 'verb', ru: 'перевыполнить', affix: 'over-' }
      ]
    },
    { root: 'cook', emoji: '🍳', meaning: 'готовить',
      members: [
        { word: 'cook', pos: 'verb/noun', ru: 'готовить', affix: '—' },
        { word: 'cooker', pos: 'noun', ru: 'плита', affix: '-er' },
        { word: 'cooking', pos: 'noun', ru: 'готовка', affix: '-ing' },
        { word: 'cookbook', pos: 'noun', ru: 'книга рецептов', affix: '-book' },
        { word: 'overcook', pos: 'verb', ru: 'переварить', affix: 'over-' },
        { word: 'undercook', pos: 'verb', ru: 'недоварить', affix: 'under-' }
      ]
    },
    { root: 'play', emoji: '🎮', meaning: 'играть',
      members: [
        { word: 'play', pos: 'verb/noun', ru: 'играть', affix: '—' },
        { word: 'player', pos: 'noun', ru: 'игрок', affix: '-er' },
        { word: 'playful', pos: 'adjective', ru: 'игривый', affix: '-ful' },
        { word: 'playground', pos: 'noun', ru: 'площадка', affix: '-ground' },
        { word: 'replay', pos: 'verb/noun', ru: 'переиграть', affix: 're-' }
      ]
    },
    { root: 'win', emoji: '🏅', meaning: 'побеждать',
      members: [
        { word: 'win', pos: 'verb', ru: 'побеждать', affix: '—' },
        { word: 'winner', pos: 'noun', ru: 'победитель', affix: '-er' },
        { word: 'winning', pos: 'adjective', ru: 'победный', affix: '-ing' },
        { word: 'winnable', pos: 'adjective', ru: 'выигрышный', affix: '-able' },
        { word: 'unwinnable', pos: 'adjective', ru: 'невыигрышный', affix: 'un-' }
      ]
    },
    { root: 'lose', emoji: '😢', meaning: 'терять',
      members: [
        { word: 'lose', pos: 'verb', ru: 'терять', affix: '—' },
        { word: 'loser', pos: 'noun', ru: 'проигравший', affix: '-er' },
        { word: 'losing', pos: 'adjective', ru: 'проигрышный', affix: '-ing' },
        { word: 'loss', pos: 'noun', ru: 'потеря', affix: '—' },
        { word: 'lost', pos: 'adjective', ru: 'потерянный', affix: '-t' }
      ]
    },
    { root: 'invent', emoji: '💡', meaning: 'изобретать',
      members: [
        { word: 'invent', pos: 'verb', ru: 'изобретать', affix: '—' },
        { word: 'inventor', pos: 'noun', ru: 'изобретатель', affix: '-or' },
        { word: 'invention', pos: 'noun', ru: 'изобретение', affix: '-ion' },
        { word: 'inventive', pos: 'adjective', ru: 'изобретательный', affix: '-ive' },
        { word: 'reinvent', pos: 'verb', ru: 'переизобрести', affix: 're-' }
      ]
    },
    { root: 'succeed', emoji: '🌟', meaning: 'добиваться успеха',
      members: [
        { word: 'succeed', pos: 'verb', ru: 'преуспеть', affix: '—' },
        { word: 'success', pos: 'noun', ru: 'успех', affix: '—' },
        { word: 'successful', pos: 'adjective', ru: 'успешный', affix: '-ful' },
        { word: 'successfully', pos: 'adverb', ru: 'успешно', affix: '-ly' },
        { word: 'unsuccessful', pos: 'adjective', ru: 'неуспешный', affix: 'un-' }
      ]
    }
);

// ───────────────────────────────────────────────────────────
// 🆕 20 НОВЫХ ПРАВИЛ КОНВЕРТАЦИИ (converterRules)
// ───────────────────────────────────────────────────────────
converterRules.push(
    { from: 'verb', to: 'noun', suffix: '-age', emoji: '📦', ex1: 'break', ex2: 'breakage' },
    { from: 'verb', to: 'noun', suffix: '-al', emoji: '📦', ex1: 'arrive', ex2: 'arrival' },
    { from: 'verb', to: 'noun', suffix: '-ance', emoji: '📦', ex1: 'appear', ex2: 'appearance' },
    { from: 'verb', to: 'noun', suffix: '-ence', emoji: '📦', ex1: 'differ', ex2: 'difference' },
    { from: 'verb', to: 'noun', suffix: '-er/-or', emoji: '👤', ex1: 'teach', ex2: 'teacher' },
    { from: 'verb', to: 'noun', suffix: '-ing', emoji: '📦', ex1: 'run', ex2: 'running' },
    { from: 'verb', to: 'noun', suffix: '-ure', emoji: '📦', ex1: 'press', ex2: 'pressure' },
    { from: 'adj', to: 'noun', suffix: '-cy', emoji: '💠', ex1: 'accurate', ex2: 'accuracy' },
    { from: 'adj', to: 'noun', suffix: '-ence', emoji: '💠', ex1: 'silent', ex2: 'silence' },
    { from: 'adj', to: 'noun', suffix: '-ity', emoji: '💠', ex1: 'active', ex2: 'activity' },
    { from: 'adj', to: 'adverb', suffix: '-ly', emoji: '💨', ex1: 'happy', ex2: 'happily' },
    { from: 'adj', to: 'adverb', suffix: '-ly (y→i)', emoji: '💨', ex1: 'easy', ex2: 'easily' },
    { from: 'noun', to: 'adj', suffix: '-al', emoji: '🎨', ex1: 'culture', ex2: 'cultural' },
    { from: 'noun', to: 'adj', suffix: '-ic', emoji: '🎨', ex1: 'history', ex2: 'historic' },
    { from: 'noun', to: 'adj', suffix: '-ous', emoji: '🎨', ex1: 'danger', ex2: 'dangerous' },
    { from: 'noun', to: 'adj', suffix: '-ful', emoji: '🎨', ex1: 'beauty', ex2: 'beautiful' },
    { from: 'noun', to: 'adj', suffix: '-less', emoji: '🎨', ex1: 'home', ex2: 'homeless' },
    { from: 'noun', to: 'adj', suffix: '-ly', emoji: '🎨', ex1: 'friend', ex2: 'friendly' },
    { from: 'noun', to: 'verb', suffix: '-ify', emoji: '⚡', ex1: 'beauty', ex2: 'beautify' },
    { from: 'noun', to: 'verb', suffix: '-ise/-ize', emoji: '⚡', ex1: 'real', ex2: 'realise' }
);

// ───────────────────────────────────────────────────────────
// 🆕 20 НОВЫХ УПРАЖНЕНИЙ (converterExercises)
// ───────────────────────────────────────────────────────────
converterExercises.push(
    { word: 'active', from: 'adj', targets: [{ to: 'noun', correct: 'activity', wrong: ['activeness', 'activation'] }] },
    { word: 'create', from: 'verb', targets: [{ to: 'adjective', correct: 'creative', wrong: ['creation', 'creationable'] }] },
    { word: 'beauty', from: 'noun', targets: [{ to: 'adverb', correct: 'beautifully', wrong: ['beautifully', 'beautily'] }] },
    { word: 'danger', from: 'noun', targets: [{ to: 'adjective', correct: 'dangerous', wrong: ['dangerful', 'dangeric'] }] },
    { word: 'care', from: 'noun', targets: [{ to: 'adverb', correct: 'carefully', wrong: ['carely', 'carefully'] }] },
    { word: 'hope', from: 'verb', targets: [{ to: 'adjective', correct: 'hopeless', wrong: ['hoply', 'hopable'] }] },
    { word: 'talk', from: 'verb', targets: [{ to: 'adjective', correct: 'talkative', wrong: ['talkful', 'talkly'] }] },
    { word: 'friend', from: 'noun', targets: [{ to: 'adjective', correct: 'friendly', wrong: ['friendful', 'friendish'] }] },
    { word: 'success', from: 'noun', targets: [{ to: 'adjective', correct: 'successful', wrong: ['successive', 'successly'] }] },
    { word: 'love', from: 'verb', targets: [{ to: 'adjective', correct: 'lovely', wrong: ['lovable', 'loving'] }] },
    { word: 'sun', from: 'noun', targets: [{ to: 'adjective', correct: 'sunny', wrong: ['sunful', 'sunless'] }] },
    { word: 'cloud', from: 'noun', targets: [{ to: 'adjective', correct: 'cloudy', wrong: ['cloudless', 'cloudful'] }] },
    { word: 'break', from: 'verb', targets: [{ to: 'adjective', correct: 'breakable', wrong: ['breakly', 'breakful'] }] },
    { word: 'help', from: 'verb', targets: [{ to: 'adjective', correct: 'helpful', wrong: ['helply', 'helpable'] }] },
    { word: 'understood', from: 'adj', targets: [{ to: 'noun', correct: 'understanding', wrong: ['understandment', 'understoodness'] }] },
    { word: 'read', from: 'verb', targets: [{ to: 'noun', correct: 'reader', wrong: ['readable', 'readful'] }] },
    { word: 'care', from: 'noun', targets: [{ to: 'adjective', correct: 'caring', wrong: ['carely', 'careable'] }] },
    { word: 'produce', from: 'verb', targets: [{ to: 'adjective', correct: 'productive', wrong: ['production', 'producer'] }] },
    { word: 'strong', from: 'adj', targets: [{ to: 'noun', correct: 'strength', wrong: ['strongness', 'strongity'] }] },
    { word: 'wide', from: 'adj', targets: [{ to: 'verb', correct: 'widen', wrong: ['widefy', 'widise'] }] }
);

// ───────────────────────────────────────────────────────────
// 🆕 30 НОВЫХ МНЕМО-ПРАВИЛ (memoryHooks)
// ───────────────────────────────────────────────────────────
memoryHooks.push(
    { affix: 'dia-', emoji: '🔀', hint: 'как диаметр пересекает круг насквозь' },
    { affix: 'epi-', emoji: '🏔️', hint: 'эпицентр — на поверхности земли' },
    { affix: 'exo-', emoji: '🚀', hint: 'экзотические страны — снаружи' },
    { affix: 'retro-', emoji: '📼', hint: 'ретро-кассета — назад в прошлое' },
    { affix: 'pro-', emoji: '⏩', hint: 'прогресс — движение вперёд' },
    { affix: 'circum-', emoji: '🔄', hint: 'циркуль чертит круг' },
    { affix: 'infra-', emoji: '🏗️', hint: 'инфраструктура — под землёй' },
    { affix: 'quad-', emoji: '🚴', hint: 'квадроцикл — 4 колеса' },
    { affix: 'octo-', emoji: '🐙', hint: 'осьминог — 8 ног' },
    { affix: 'cent-', emoji: '💯', hint: 'цент — 1/100 доллара' },
    { affix: 'milli-', emoji: '🔢', hint: 'миллиметр — 1/1000 метра' },
    { affix: '-cy', emoji: '🎯', hint: 'accuracy — точность (с -cy)' },
    { affix: '-itude', emoji: '🙏', hint: 'gratitude — благодарность' },
    { affix: '-ure', emoji: '🌡️', hint: 'pressure — давление' },
    { affix: '-ern', emoji: '🧭', hint: 'northern — северный (от north)' },
    { affix: '-most', emoji: '🏔️', hint: 'topmost — самый верхний' },
    { affix: '-ling', emoji: '🐥', hint: 'duckling — маленькая утка' },
    { affix: 'cardi-', emoji: '❤️', hint: 'кардиолог — врач сердца' },
    { affix: 'derm-', emoji: '🧴', hint: 'дерматолог — врач кожи' },
    { affix: 'neuron-', emoji: '🧠', hint: 'нейрон — клетка мозга' },
    { affix: 'therm-', emoji: '🌡️', hint: 'термометр — измеряет тепло' },
    { affix: 'hydr-', emoji: '💧', hint: 'гидрант — вода' },
    { affix: 'aer-', emoji: '✈️', hint: 'аэропорт — воздух' },
    { affix: 'morph-', emoji: '🦋', hint: 'морф — бабочка меняет форму' },
    { affix: 'cosm-', emoji: '🌌', hint: 'космос — вселенная' },
    { affix: 'anthrop-', emoji: '🧑', hint: 'антропология — о человеке' },
    { affix: 'gen-', emoji: '🧬', hint: 'гены — передают поколения' },
    { affix: 'leg-', emoji: '⚖️', hint: 'легально — по закону' },
    { affix: 'crit-', emoji: '⚖️', hint: 'критика — оценка' },
    { affix: 'chron-', emoji: '⏰', hint: 'хронология — порядок по времени' }
);

// ───────────────────────────────────────────────────────────
// 🆕 25 НОВЫХ БЫСТРЫХ ПРАВИЛ (quickTips)
// ───────────────────────────────────────────────────────────
quickTips.push(
    { emoji: '💡', tip: '<b>re-</b> — снова: rewrite, redo, restart.' },
    { emoji: '💡', tip: '<b>-phobia</b> = страх: claustrophobia, arachnophobia.' },
    { emoji: '💡', tip: '<b>-itis</b> = воспаление: bronchitis, arthritis.' },
    { emoji: '💡', tip: '<b>-cide</b> = убийство: pesticide, suicide.' },
    { emoji: '💡', tip: '<b>quad-</b> = 4: quadruple, quadrilateral.' },
    { emoji: '💡', tip: '<b>octo-</b> = 8: octopus, October.' },
    { emoji: '💡', tip: '<b>deca-</b> = 10: decade, December.' },
    { emoji: '💡', tip: '<b>cent-</b> = 100: century, percent.' },
    { emoji: '💡', tip: '<b>milli-</b> = 1000: million, millennium.' },
    { emoji: '💡', tip: '<b>-ous</b> — прилагательное: dangerous, famous.' },
    { emoji: '💡', tip: '<b>-tion/-sion</b> — существительное: education, decision.' },
    { emoji: '💡', tip: '<b>-ly</b> — наречие: quickly, slowly.' },
    { emoji: '💡', tip: '<b>-ment</b> — процесс: movement, agreement.' },
    { emoji: '💡', tip: '<b>-er/-or</b> — тот, кто делает: teacher, actor.' },
    { emoji: '💡', tip: '<b>make</b> — создать (make a cake), <b>do</b> — выполнить (do work).' },
    { emoji: '💡', tip: '<b>say</b> — что сказать, <b>tell</b> — кому сказать.' },
    { emoji: '💡', tip: '<b>bring</b> — сюда, <b>take</b> — туда.' },
    { emoji: '💡', tip: '<b>borrow</b> — взять, <b>lend</b> — дать.' },
    { emoji: '💡', tip: '<b>rise</b> — сам поднимается, <b>raise</b> — поднимаю.' },
    { emoji: '💡', tip: '<b>hear</b> — слышу (не специально), <b>listen</b> — слушаю (специально).' },
    { emoji: '💡', tip: '<b>look</b> — посмотреть, <b>watch</b> — смотреть долго, <b>see</b> — видеть.' },
    { emoji: '💡', tip: '<b>over-</b> = слишком, <b>under-</b> = недостаточно.' },
    { emoji: '💡', tip: '<b>un-</b> перед прилагательными: unhappy, unfair.' },
    { emoji: '💡', tip: '<b>im-</b> перед p/m: impossible, immoral.' },
    { emoji: '💡', tip: '<b>-ful</b> = полный, <b>-less</b> = без.' }
);

// ───────────────────────────────────────────────────────────
// 🆕 15 НОВЫХ СЛОВ ДНЯ (wordOfTheDay)
// ───────────────────────────────────────────────────────────
wordOfTheDay.push(
    { word: 'straightforward', emoji: '🎯', affix: 'straight+forward', why: 'Топ для деловых встреч', tip: 'Прямо + вперёд = простой' },
    { word: 'underachiever', emoji: '📉', affix: 'under-', why: 'Описывает людей', tip: 'Under + achieve + er = недостигающий' },
    { word: 'misconception', emoji: '💭', affix: 'mis-', why: 'Часто в дебатах', tip: 'Mis + conception = ошибочное мнение' },
    { word: 'breathtaking', emoji: '😮', affix: '-taking', why: 'Эмоциональное', tip: 'Breath + taking = захватывающий дыхание' },
    { word: 'mindfulness', emoji: '🧘', affix: '-ness', why: 'Популярно', tip: 'Mind + ful + ness = осознанность' },
    { word: 'overthinking', emoji: '🤯', affix: 'over-', why: 'Современное', tip: 'Over + thinking = переосмысление' },
    { word: 'like-minded', emoji: '🤝', affix: 'like+ed', why: 'Для команды', tip: 'Like + mind = единомышленник' },
    { word: 'groundbreaking', emoji: '🚀', affix: '-breaking', why: 'Топ-1000', tip: 'Ground + breaking = революционный' },
    { word: 'self-awareness', emoji: '🧠', affix: 'self-', why: 'Психология', tip: 'Self + awareness = самоосознание' },
    { word: 'decision-making', emoji: '🧮', affix: '-making', why: 'Бизнес', tip: 'Decision + making = принятие решений' },
    { word: 'thought-provoking', emoji: '💡', affix: '-provoking', why: 'Для рецензий', tip: 'Thought + provoking = провокационный' },
    { word: 'cutting-edge', emoji: '🔪', affix: '-edge', why: 'Технологии', tip: 'Cutting + edge = передовой' },
    { word: 'far-reaching', emoji: '🌍', affix: '-reaching', why: 'Политика', tip: 'Far + reaching = далеко идущий' },
    { word: 'well-being', emoji: '💚', affix: '-being', why: 'Здоровье', tip: 'Well + being = благополучие' },
    { word: 'easygoing', emoji: '😎', affix: '-going', why: 'О характере', tip: 'Easy + going = лёгкий на подъём' }
);

// ───────────────────────────────────────────────────────────
// 🆕 15 НОВЫХ ШАГОВ МАРШРУТА (learningPath)
// ───────────────────────────────────────────────────────────
learningPath.push(
    { step: 6, emoji: '🎯', title: 'Не путай! Продвинутый', ids: ['do-make-exp','say-tell-25','bring-take-3','borrow-lend-3'] },
    { step: 7, emoji: '🔤', title: 'Ловушки и близнецы', ids: ['do-make-exp','affect-effect-3','advice-advise-3'] },
    { step: 8, emoji: '⚖️', title: 'Антонимы через аффиксы', ids: ['over-under','macro-micro','pre-post'] },
    { step: 9, emoji: '👨‍👩‍👧', title: 'Семьи слов', ids: ['use','help','act','create'] },
    { step: 10, emoji: '🔀', title: 'Конвертер частей речи', ids: ['convert-verb-noun','convert-adj-adverb'] },
    { step: 11, emoji: '📖', title: 'Мини-истории 2', ids: ['startup','reunion','recovery'] },
    { step: 12, emoji: '✍️', title: 'Эссе: продвинутый уровень', ids: ['firstly','secondly2','inconclusion','tosumup'] },
    { step: 13, emoji: '🎩', title: 'Модальные продвинутые', ids: ['hadbetter','usedto','would-rather','need'] },
    { step: 14, emoji: '💬', title: 'Фразы для беседы', ids: ['long-time','whats-up','how-going'] },
    { step: 15, emoji: '🧠', title: 'Мнемо-правила', ids: ['re-','un-','-ful','-less'] },
    { step: 16, emoji: '🔊', title: 'Озвучка продвинутая', ids: ['unhappy','careful-carefully','rewrite-reread-restart'] },
    { step: 17, emoji: '🎯', title: 'Топ-100 приставок', ids: ['un-','re-','dis-','over-','under-'] },
    { step: 18, emoji: '📝', title: 'Диктант продвинутый', ids: ['easy-adv','medium-adv','hard-adv'] },
    { step: 19, emoji: '🧩', title: 'Квизы финальные', ids: ['vocab-adv','prefix-adv','suffix-adv'] },
    { step: 20, emoji: '🏆', title: 'Финальный маршрут', ids: ['all','root','prefix','suffix'] }
);

// ═══════════════════════════════════════════════════════════
// 🆕 РАСШИРЕНИЕ v7 — МОДАЛЬНЫЕ + ЛОВУШКИ + БЛИЗНЕЦЫ + АНТОНИМЫ
// ═══════════════════════════════════════════════════════════

// ───────────────────────────────────────────────────────────
// 🎩 30 НОВЫХ МОДАЛЬНЫХ (modalVerbs)
// ───────────────────────────────────────────────────────────
modalVerbs.push(
    { id: 'be-able-to', word: 'be able to', transcription: '/biː ˈeɪbl tuː/', emoji: '💪',
      meaning: 'БЫТЬ СПОСОБНЫМ (замена can в будущем/прошлом)',
      color: '#6b8e23',
      rules: ['способность', 'можно во всех временах', 'формально'],
      hint: '💪 Be able to = альтернатива can.',
      examples: [
        { en: 'I will <b>be able to</b> come.', ru: 'Я смогу прийти.' },
        { en: 'He was <b>able to</b> swim.', ru: 'Он умел плавать.' },
        { en: 'She has <b>been able to</b> help.', ru: 'Она смогла помочь.' }
      ]
    },
    { id: 'be-going-to', word: 'be going to', transcription: '/biː ˈɡəʊɪŋ tuː/', emoji: '🔮',
      meaning: 'СОБИРАТЬСЯ (план)',
      color: '#b97f44',
      rules: ['план', 'намерение', 'ближайшее будущее'],
      hint: '🔮 Be going to = план на будущее.',
      examples: [
        { en: 'I\'m <b>going to</b> travel.', ru: 'Я собираюсь путешествовать.' },
        { en: 'It\'s <b>going to</b> rain.', ru: 'Собирается дождь.' },
        { en: 'We\'re <b>going to</b> win.', ru: 'Мы победим.' }
      ]
    },
    { id: 'be-about-to', word: 'be about to', transcription: '/biː əˈbaʊt tuː/', emoji: '⚡',
      meaning: 'СОБИРАТЬСЯ ВОТ-ВОТ',
      color: '#b93a3a',
      rules: ['очень скоро', 'ближайший момент'],
      hint: '⚡ Be about to = вот-вот.',
      examples: [
        { en: 'I\'m <b>about to</b> leave.', ru: 'Я вот-вот уйду.' },
        { en: 'The film is <b>about to</b> start.', ru: 'Фильм вот-вот начнётся.' }
      ]
    },
    { id: 'be-to', word: 'be to', transcription: '/biː tuː/', emoji: '📋',
      meaning: 'ДОЛЖЕН (по плану/правилу)',
      color: '#8b6946',
      rules: ['формальный план', 'приказ', 'судьба'],
      hint: '📋 Be to = по расписанию или приказу.',
      examples: [
        { en: 'You are <b>to</b> leave now.', ru: 'Вы должны уйти сейчас.' },
        { en: 'We were <b>to</b> meet at 5.', ru: 'Мы должны были встретиться в 5.' }
      ]
    },
    { id: 'be-supposed-to', word: 'be supposed to', transcription: '/biː səˈpəʊzd tuː/', emoji: '📌',
      meaning: 'ПРЕДПОЛАГАТЬСЯ (ожидание)',
      color: '#c49a6c',
      rules: ['ожидание', 'норма', 'что-то ожидается'],
      hint: '📌 Be supposed to = должен по идее.',
      examples: [
        { en: 'You\'re <b>supposed to</b> be here.', ru: 'Ты должен быть здесь.' },
        { en: 'It\'s <b>supposed to</b> be sunny.', ru: 'Ожидается солнце.' },
        { en: 'He wasn\'t <b>supposed to</b> know.', ru: 'Он не должен был знать.' }
      ]
    },
    { id: 'might-have', word: 'might have', transcription: '/maɪt hæv/', emoji: '🤔',
      meaning: 'ВОЗМОЖНО, ЧТО БЫЛО',
      color: '#8b6946',
      rules: ['вероятность в прошлом', 'предположение'],
      hint: '🤔 Might have = может быть (о прошлом).',
      examples: [
        { en: 'He <b>might have</b> forgotten.', ru: 'Он, может, забыл.' },
        { en: 'She <b>might have</b> missed the bus.', ru: 'Возможно, она опоздала на автобус.' }
      ]
    },
    { id: 'must-have', word: 'must have', transcription: '/mʌst hæv/', emoji: '✅',
      meaning: 'ТОЧНО БЫЛО (уверенность)',
      color: '#6b8e23',
      rules: ['уверенность в прошлом', 'вывод'],
      hint: '✅ Must have = наверняка было.',
      examples: [
        { en: 'He <b>must have</b> missed the train.', ru: 'Он точно опоздал на поезд.' },
        { en: 'She <b>must have</b> forgotten.', ru: 'Она точно забыла.' }
      ]
    },
    { id: 'could-have', word: 'could have', transcription: '/kʊd hæv/', emoji: '😔',
      meaning: 'МОГ БЫ (но не сделал)',
      color: '#b93a3a',
      rules: ['упущенная возможность', 'сожаление'],
      hint: '😔 Could have = мог бы, но не сделал.',
      examples: [
        { en: 'I <b>could have</b> won.', ru: 'Я мог бы победить.' },
        { en: 'You <b>could have</b> told me!', ru: 'Ты мог бы мне сказать!' }
      ]
    },
    { id: 'should-have', word: 'should have', transcription: '/ʃʊd hæv/', emoji: '😞',
      meaning: 'СЛЕДОВАЛО БЫ (но не сделал)',
      color: '#b97f44',
      rules: ['сожаление', 'упрек'],
      hint: '😞 Should have = должен был, но не сделал.',
      examples: [
        { en: 'I <b>should have</b> studied.', ru: 'Мне надо было учиться.' },
        { en: 'You <b>shouldn\'t have</b> said that.', ru: 'Не надо было это говорить.' }
      ]
    },
    { id: 'would-have', word: 'would have', transcription: '/wʊd hæv/', emoji: '💭',
      meaning: 'СДЕЛАЛ БЫ (в прошлом)',
      color: '#6b8e23',
      rules: ['условное в прошлом', 'гипотеза'],
      hint: '💭 Would have = сделал бы, если бы...',
      examples: [
        { en: 'I <b>would have</b> helped.', ru: 'Я бы помог.' },
        { en: 'She <b>would have</b> come.', ru: 'Она бы пришла.' }
      ]
    },
    { id: 'neednt-have', word: 'needn\'t have', transcription: '/ˈniːdnt hæv/', emoji: '🎯',
      meaning: 'ЗРЯ СДЕЛАЛ',
      color: '#c49a6c',
      rules: ['сделал, но было не нужно'],
      hint: '🎯 Needn\'t have = зря потратил силы.',
      examples: [
        { en: 'You <b>needn\'t have</b> come.', ru: 'Зря ты пришёл.' },
        { en: 'I <b>needn\'t have</b> worried.', ru: 'Зря я волновался.' }
      ]
    },
    { id: 'can-could-ability', word: 'can / could', transcription: '/kæn kʊd/', emoji: '💪',
      meaning: 'СПОСОБНОСТЬ (наст. / прош.)',
      color: '#6b8e23',
      rules: ['физическая способность', 'умение'],
      hint: '💪 Can (сейчас) / Could (раньше).',
      examples: [
        { en: 'I <b>can</b> swim.', ru: 'Я умею плавать.' },
        { en: 'I <b>could</b> swim at 5.', ru: 'В 5 лет я умел плавать.' }
      ]
    },
    { id: 'may-might', word: 'may / might', transcription: '/meɪ maɪt/', emoji: '❓',
      meaning: 'ВЕРОЯТНОСТЬ (разная)',
      color: '#8b6946',
      rules: ['may — больше вероятности', 'might — меньше'],
      hint: '❓ May сильнее, might слабее.',
      examples: [
        { en: 'It <b>may</b> rain (50%).', ru: 'Может пойти дождь.' },
        { en: 'It <b>might</b> rain (20%).', ru: 'Возможно, дождь.' }
      ]
    },
    { id: 'will-would-2', word: 'will / would', transcription: '/wɪl wʊd/', emoji: '🔮',
      meaning: 'НАСТОЯЩЕЕ / ВЕЖЛИВОЕ',
      color: '#b97f44',
      rules: ['will — настоящее будущее', 'would — вежливое или условное'],
      hint: '🔮 Will прямо, would вежливо.',
      examples: [
        { en: 'I <b>will</b> help.', ru: 'Я помогу.' },
        { en: 'I <b>would</b> help if I could.', ru: 'Помог бы, если бы мог.' }
      ]
    },
    { id: 'shall-2', word: 'shall', transcription: '/ʃæl/', emoji: '🤝',
      meaning: 'ПРЕДЛОЖЕНИЕ / БУДУЩЕЕ',
      color: '#6b8e23',
      rules: ['предложение с I/we', 'формальное будущее'],
      hint: '🤝 Shall = предложение.',
      examples: [
        { en: '<b>Shall</b> we go?', ru: 'Пойдём?' },
        { en: 'I <b>shall</b> return.', ru: 'Я вернусь.' }
      ]
    },
    { id: 'ought-to', word: 'ought to', transcription: '/ɔːt tuː/', emoji: '📌',
      meaning: 'СЛЕДУЕТ (моральный долг)',
      color: '#6b8e23',
      rules: ['моральная обязанность'],
      hint: '📌 Ought to = то же, что should, но книжнее.',
      examples: [
        { en: 'You <b>ought to</b> apologize.', ru: 'Тебе следует извиниться.' },
        { en: 'We <b>ought to</b> help.', ru: 'Нам следует помочь.' }
      ]
    },
    { id: 'had-better', word: 'had better', transcription: '/hæd ˈbetə/', emoji: '⚠️',
      meaning: 'ЛУЧШЕ БЫ (иначе плохо)',
      color: '#b93a3a',
      rules: ['сильное предупреждение'],
      hint: '⚠️ Had better = лучше сделай!',
      examples: [
        { en: 'You <b>had better</b> hurry.', ru: 'Тебе лучше поторопиться.' },
        { en: 'We <b>had better</b> not be late.', ru: 'Нам лучше не опаздывать.' }
      ]
    },
    { id: 'dare-2', word: 'dare', transcription: '/deə/', emoji: '😤',
      meaning: 'СМЕТЬ',
      color: '#b93a3a',
      rules: ['смелость', 'вызов'],
      hint: '😤 Dare = сметь.',
      examples: [
        { en: 'I <b>dare</b> you!', ru: 'Слабо тебе!' },
        { en: 'He didn\'t <b>dare</b> speak.', ru: 'Он не осмелился.' }
      ]
    },
    { id: 'used-to-3', word: 'used to', transcription: '/juːst tuː/', emoji: '📜',
      meaning: 'РАНЬШЕ (но не сейчас)',
      color: '#8b6946',
      rules: ['прошлая привычка'],
      hint: '📜 Used to = раньше делал, а сейчас нет.',
      examples: [
        { en: 'I <b>used to</b> smoke.', ru: 'Я раньше курил.' },
        { en: 'She <b>used to</b> live here.', ru: 'Она раньше здесь жила.' }
      ]
    },
    { id: 'would-rather-2', word: 'would rather', transcription: '/wʊd ˈrɑːðə/', emoji: '🎩',
      meaning: 'ПРЕДПОЧЁЛ БЫ',
      color: '#b97f44',
      rules: ['предпочтение'],
      hint: '🎩 Would rather = предпочёл бы.',
      examples: [
        { en: 'I <b>would rather</b> stay home.', ru: 'Я бы предпочёл остаться.' },
        { en: '<b>Would</b> you <b>rather</b> tea?', ru: 'Ты предпочтёшь чай?' }
      ]
    },
    { id: 'need-not', word: 'need not / needn\'t', transcription: '/niːd nɒt/', emoji: '🎯',
      meaning: 'НЕ НУЖНО',
      color: '#c49a6c',
      rules: ['нет необходимости'],
      hint: '🎯 Needn\'t = не обязательно.',
      examples: [
        { en: 'You <b>needn\'t</b> come.', ru: 'Тебе не нужно приходить.' },
        { en: 'We <b>needn\'t</b> hurry.', ru: 'Нам не нужно спешить.' }
      ]
    },
    { id: 'cannot-3', word: 'cannot / can\'t', transcription: '/ˈkænɒt/', emoji: '❌',
      meaning: 'НЕ МОГУ',
      color: '#b93a3a',
      rules: ['невозможность', 'запрет'],
      hint: '❌ Cannot = физически не могу / строго нельзя.',
      examples: [
        { en: 'I <b>can\'t</b> help you.', ru: 'Я не могу помочь.' },
        { en: 'You <b>cannot</b> park here.', ru: 'Здесь нельзя парковаться.' }
      ]
    },
    { id: 'must-mustnt-2', word: 'must / mustn\'t', transcription: '/mʌst/', emoji: '⛔',
      meaning: 'ОБЯЗАН / НЕЛЬЗЯ',
      color: '#b93a3a',
      rules: ['must — надо', 'mustn\'t — запрещено'],
      hint: '⛔ Must = надо, mustn\'t = нельзя.',
      examples: [
        { en: 'You <b>must</b> wear a helmet.', ru: 'Ты должен надеть шлем.' },
        { en: 'You <b>mustn\'t</b> smoke.', ru: 'Тебе нельзя курить.' }
      ]
    },
    { id: 'have-to-2', word: 'have to / don\'t have to', transcription: '/hæv tuː/', emoji: '📋',
      meaning: 'ВЫНУЖДЕН / НЕ ОБЯЗАН',
      color: '#c49a6c',
      rules: ['have to — обстоятельства', 'don\'t have to — не обязательно'],
      hint: '📋 Have to = вынужден, don\'t = не обязан.',
      examples: [
        { en: 'I <b>have to</b> work.', ru: 'Мне нужно работать.' },
        { en: 'I <b>don\'t have to</b> go.', ru: 'Мне не нужно идти.' }
      ]
    },
    { id: 'could-you-2', word: 'could you / would you', transcription: '/kʊd juː/', emoji: '🙏',
      meaning: 'ВЕЖЛИВАЯ ПРОСЬБА',
      color: '#b97f44',
      rules: ['вежливая просьба', 'could — нейтрально', 'would — очень вежливо'],
      hint: '🙏 Could you / Would you = просьба.',
      examples: [
        { en: '<b>Could you</b> help me?', ru: 'Не могли бы вы помочь?' },
        { en: '<b>Would you</b> mind?', ru: 'Не возражаете?' }
      ]
    },
    { id: 'may-i', word: 'May I?', transcription: '/meɪ aɪ/', emoji: '✅',
      meaning: 'МОЖНО? (формально)',
      color: '#6b8e23',
      rules: ['формальное разрешение'],
      hint: '✅ May I = формальное разрешение.',
      examples: [
        { en: '<b>May I</b> come in?', ru: 'Можно войти?' },
        { en: '<b>May I</b> ask?', ru: 'Можно спросить?' }
      ]
    },
    { id: 'can-i', word: 'Can I?', transcription: '/kæn aɪ/', emoji: '🙋',
      meaning: 'МОЖНО? (неформально)',
      color: '#6b8e23',
      rules: ['неформальное разрешение'],
      hint: '🙋 Can I = неформальное разрешение.',
      examples: [
        { en: '<b>Can I</b> go?', ru: 'Можно я пойду?' },
        { en: '<b>Can I</b> help?', ru: 'Можно помочь?' }
      ]
    },
    { id: 'do-you-mind', word: 'Do you mind?', transcription: '/duː juː maɪnd/', emoji: '🙏',
      meaning: 'НЕ ВОЗРАЖАЕТЕ?',
      color: '#b97f44',
      rules: ['просьба или вопрос'],
      hint: '🙏 Do you mind = не против?',
      examples: [
        { en: '<b>Do you mind</b> if I open?', ru: 'Не против, если открою?' },
        { en: '<b>Do you mind</b> waiting?', ru: 'Не могли бы подождать?' }
      ]
    },
    { id: 'as-soon-as', word: 'as soon as', transcription: '/əz suːn əz/', emoji: '⚡',
      meaning: 'КАК ТОЛЬКО',
      color: '#6b8e23',
      rules: ['время'],
      hint: '⚡ As soon as = как только.',
      examples: [
        { en: '<b>As soon as</b> I arrive, I\'ll call.', ru: 'Как только приеду, позвоню.' }
      ]
    },
    { id: 'in-case-2', word: 'in case', transcription: '/ɪn keɪs/', emoji: '🛡️',
      meaning: 'НА СЛУЧАЙ',
      color: '#b97f44',
      rules: ['предосторожность'],
      hint: '🛡️ In case = на случай, если.',
      examples: [
        { en: 'Take an umbrella <b>in case</b>.', ru: 'Возьми зонт на случай.' },
        { en: '<b>In case</b> of fire, call 911.', ru: 'В случае пожара звони 911.' }
      ]
    },
    { id: 'be-able-neg', word: 'not be able to', transcription: '/nɒt biː ˈeɪbl/', emoji: '🚫',
      meaning: 'НЕ СМОЧЬ',
      color: '#b93a3a',
      rules: ['неспособность'],
      hint: '🚫 Not be able to = не смогу.',
      examples: [
        { en: 'I <b>won\'t be able to</b> come.', ru: 'Я не смогу прийти.' },
        { en: 'He <b>wasn\'t able to</b> finish.', ru: 'Он не смог закончить.' }
      ]
    },
    { id: 'be-keen', word: 'be keen on', transcription: '/biː kiːn ɒn/', emoji: '❤️',
      meaning: 'УВЛЕКАТЬСЯ',
      color: '#b93a3a',
      rules: ['интерес', 'желание'],
      hint: '❤️ Be keen on = увлекаться.',
      examples: [
        { en: 'I\'m <b>keen on</b> sports.', ru: 'Я увлекаюсь спортом.' }
      ]
    }
);

// ───────────────────────────────────────────────────────────
// 🪤 30 НОВЫХ ЛОВУШЕК (trapPairs)
// ───────────────────────────────────────────────────────────
trapPairs.push(
    { id: 'do-make-full', emoji: '📋🔨', title: 'DO vs MAKE — 30 коллокаций',
      rule: 'Идиомы с do (работа) и make (создание)',
      left: { word: 'do', emoji: '📋', meaning: 'работа, действие',
        examples: [
          { en: '<b>Do</b> the dishes.', ru: 'Помой посуду.' },
          { en: '<b>Do</b> the laundry.', ru: 'Постирай.' },
          { en: '<b>Do</b> homework.', ru: 'Сделай домашку.' },
          { en: '<b>Do</b> a favour.', ru: 'Сделай одолжение.' },
          { en: '<b>Do</b> business.', ru: 'Веди бизнес.' },
          { en: '<b>Do</b> exercise.', ru: 'Делай зарядку.' }
        ]
      },
      right: { word: 'make', emoji: '🔨', meaning: 'создавать',
        examples: [
          { en: '<b>Make</b> a decision.', ru: 'Прими решение.' },
          { en: '<b>Make</b> money.', ru: 'Зарабатывай.' },
          { en: '<b>Make</b> friends.', ru: 'Найди друзей.' },
          { en: '<b>Make</b> progress.', ru: 'Двигайся вперёд.' },
          { en: '<b>Make</b> a mistake.', ru: 'Сделай ошибку.' },
          { en: '<b>Make</b> sure.', ru: 'Убедись.' }
        ]
      }
    },
    { id: 'say-tell-full', emoji: '💬🗣️', title: 'SAY vs TELL — 20 идиом',
      rule: 'SAY (что) vs TELL (кому)',
      left: { word: 'say', emoji: '💬', meaning: 'сказать (что-то)',
        examples: [
          { en: '<b>Say</b> hello.', ru: 'Поздоровайся.' },
          { en: '<b>Say</b> cheese.', ru: 'Скажи «сыр».' },
          { en: '<b>Say</b> a prayer.', ru: 'Прочитай молитву.' },
          { en: '<b>Say</b> the truth.', ru: 'Скажи правду.' }
        ]
      },
      right: { word: 'tell', emoji: '🗣️', meaning: 'сказать (кому-то)',
        examples: [
          { en: '<b>Tell</b> the time.', ru: 'Скажи время.' },
          { en: '<b>Tell</b> a lie.', ru: 'Соври.' },
          { en: '<b>Tell</b> a story.', ru: 'Расскажи историю.' },
          { en: '<b>Tell</b> the difference.', ru: 'Отличи.' }
        ]
      }
    },
    { id: 'bring-take-full', emoji: '📦🎁', title: 'BRING vs TAKE vs FETCH',
      rule: 'Сюда / Туда / Сходить',
      left: { word: 'bring', emoji: '📦', meaning: 'принести сюда',
        examples: [
          { en: '<b>Bring</b> me water.', ru: 'Принеси воды.' },
          { en: '<b>Bring</b> it here.', ru: 'Принеси сюда.' }
        ]
      },
      right: { word: 'take', emoji: '🎁', meaning: 'отнести туда',
        examples: [
          { en: '<b>Take</b> it away.', ru: 'Унеси.' },
          { en: '<b>Take</b> this to him.', ru: 'Отнеси ему.' }
        ]
      }
    },
    { id: 'borrow-lend-loan', emoji: '🤲🎁💵', title: 'BORROW / LEND / LOAN',
      rule: 'Взять / Дать / Дать с процентами',
      left: { word: 'borrow', emoji: '🤲', meaning: 'брать взаймы',
        examples: [
          { en: 'Can I <b>borrow</b> a pen?', ru: 'Можно взять ручку?' },
          { en: 'He <b>borrowed</b> my car.', ru: 'Он взял машину.' }
        ]
      },
      right: { word: 'lend', emoji: '🎁', meaning: 'давать взаймы',
        examples: [
          { en: 'Can you <b>lend</b> me a pen?', ru: 'Дай ручку?' },
          { en: 'She <b>lends</b> books.', ru: 'Она даёт книги.' }
        ]
      }
    },
    { id: 'arrive-reach-3', emoji: '🎯🏁', title: 'ARRIVE / REACH / GET',
      rule: 'Прибыть / Достичь / Попасть',
      left: { word: 'arrive', emoji: '🎯', meaning: 'прибыть (arrive at/in)',
        examples: [
          { en: '<b>Arrive</b> at the station.', ru: 'Прибудь на станцию.' },
          { en: '<b>Arrive</b> in London.', ru: 'Прибудь в Лондон.' }
        ]
      },
      right: { word: 'reach', emoji: '🏁', meaning: 'достичь (без предлога)',
        examples: [
          { en: '<b>Reach</b> the top.', ru: 'Достигни вершины.' },
          { en: '<b>Reach</b> home safely.', ru: 'Доберись безопасно.' }
        ]
      }
    },
    { id: 'listen-hear-4', emoji: '🎧👂', title: 'LISTEN / HEAR — практика',
      rule: 'Слушать активно / Слышать пассивно',
      left: { word: 'listen', emoji: '🎧', meaning: 'слушать (специально)',
        examples: [
          { en: '<b>Listen</b> to me!', ru: 'Слушай меня!' },
          { en: '<b>Listen</b> carefully.', ru: 'Слушай внимательно.' }
        ]
      },
      right: { word: 'hear', emoji: '👂', meaning: 'слышать (случайно)',
        examples: [
          { en: 'I <b>hear</b> a noise.', ru: 'Я слышу шум.' },
          { en: 'I <b>heard</b> the news.', ru: 'Я услышал новость.' }
        ]
      }
    },
    { id: 'look-see-watch', emoji: '👀👁️📺', title: 'LOOK / SEE / WATCH',
      rule: 'Смотреть (кратко) / Видеть / Смотреть (долго)',
      left: { word: 'look', emoji: '👀', meaning: 'смотреть (кратко, специально)',
        examples: [
          { en: '<b>Look</b> at this.', ru: 'Посмотри на это.' },
          { en: '<b>Look</b> there!', ru: 'Смотри туда!' }
        ]
      },
      right: { word: 'watch', emoji: '📺', meaning: 'смотреть (долго, следить)',
        examples: [
          { en: '<b>Watch</b> TV.', ru: 'Смотри ТВ.' },
          { en: '<b>Watch</b> the match.', ru: 'Смотри матч.' }
        ]
      }
    },
    { id: 'good-well-2', emoji: '🎨💨', title: 'GOOD / WELL / BAD / BADLY',
      rule: 'Прилагательное / Наречие',
      left: { word: 'good', emoji: '🎨', meaning: 'хороший (прил.)',
        examples: [
          { en: 'A <b>good</b> book.', ru: 'Хорошая книга.' },
          { en: '<b>Good</b> job!', ru: 'Хорошая работа!' }
        ]
      },
      right: { word: 'well', emoji: '💨', meaning: 'хорошо (нареч.)',
        examples: [
          { en: 'He plays <b>well</b>.', ru: 'Он хорошо играет.' },
          { en: 'She sings <b>well</b>.', ru: 'Она хорошо поёт.' }
        ]
      }
    },
    { id: 'few-little-2', emoji: '🔢🥛', title: 'FEW / LITTLE / A FEW / A LITTLE',
      rule: 'Мало исчисл. / Мало неисчисл. / Немного',
      left: { word: 'few', emoji: '🔢', meaning: 'мало (исчисл., плохо)',
        examples: [
          { en: '<b>Few</b> people came.', ru: 'Мало людей пришло.' },
          { en: 'A <b>few</b> books.', ru: 'Несколько книг.' }
        ]
      },
      right: { word: 'little', emoji: '🥛', meaning: 'мало (неисчисл., плохо)',
        examples: [
          { en: '<b>Little</b> water left.', ru: 'Мало воды.' },
          { en: 'A <b>little</b> sugar.', ru: 'Немного сахара.' }
        ]
      }
    },
    { id: 'some-any-2', emoji: '➕❓', title: 'SOME / ANY / NO',
      rule: 'Утверждение / Вопрос-отрицание / Совсем нет',
      left: { word: 'some', emoji: '➕', meaning: 'в утверждениях',
        examples: [
          { en: 'I have <b>some</b> money.', ru: 'У меня есть деньги.' },
          { en: 'Would you like <b>some</b> tea?', ru: 'Хочешь чаю?' }
        ]
      },
      right: { word: 'any', emoji: '❓', meaning: 'в вопросах и отрицаниях',
        examples: [
          { en: 'Do you have <b>any</b>?', ru: 'У тебя есть?' },
          { en: 'I don\'t have <b>any</b>.', ru: 'У меня нет.' }
        ]
      }
    },
    { id: 'much-many-2', emoji: '💰🔢', title: 'MUCH / MANY / A LOT OF',
      rule: 'Неисчисл. / Исчисл. / Универсальное',
      left: { word: 'much', emoji: '💰', meaning: 'много (неисчисл.)',
        examples: [
          { en: 'How <b>much</b> money?', ru: 'Сколько денег?' },
          { en: 'Too <b>much</b> water.', ru: 'Слишком много воды.' }
        ]
      },
      right: { word: 'many', emoji: '🔢', meaning: 'много (исчисл.)',
        examples: [
          { en: 'How <b>many</b> books?', ru: 'Сколько книг?' },
          { en: 'Too <b>many</b> people.', ru: 'Слишком много людей.' }
        ]
      }
    },
    { id: 'still-yet-2', emoji: '⏳✅', title: 'STILL / YET / ALREADY / JUST',
      rule: 'Всё ещё / Уже (вопр.) / Уже (утв.) / Только что',
      left: { word: 'still', emoji: '⏳', meaning: 'всё ещё',
        examples: [
          { en: 'He is <b>still</b> sleeping.', ru: 'Он всё ещё спит.' },
          { en: 'I <b>still</b> love you.', ru: 'Я всё ещё люблю.' }
        ]
      },
      right: { word: 'yet', emoji: '✅', meaning: 'уже (в вопросах)',
        examples: [
          { en: 'Have you finished <b>yet</b>?', ru: 'Ты уже закончил?' },
          { en: 'Not <b>yet</b>.', ru: 'Ещё нет.' }
        ]
      }
    },
    { id: 'during-for-2', emoji: '⏱️📅', title: 'DURING / FOR / WHILE',
      rule: 'В течение (когда) / На протяжении / Пока',
      left: { word: 'during', emoji: '⏱️', meaning: 'во время',
        examples: [
          { en: '<b>During</b> the lesson.', ru: 'Во время урока.' },
          { en: '<b>During</b> summer.', ru: 'В течение лета.' }
        ]
      },
      right: { word: 'for', emoji: '📅', meaning: 'на протяжении',
        examples: [
          { en: '<b>For</b> 2 hours.', ru: 'В течение 2 часов.' },
          { en: '<b>For</b> a long time.', ru: 'Долго.' }
        ]
      }
    },
    { id: 'between-among-2', emoji: '↔️👥', title: 'BETWEEN / AMONG / AMONGST',
      rule: 'Между двумя / Среди многих',
      left: { word: 'between', emoji: '↔️', meaning: 'между двумя',
        examples: [
          { en: '<b>Between</b> you and me.', ru: 'Между нами.' },
          { en: '<b>Between</b> 2 and 4.', ru: 'Между 2 и 4.' }
        ]
      },
      right: { word: 'among', emoji: '👥', meaning: 'среди',
        examples: [
          { en: '<b>Among</b> friends.', ru: 'Среди друзей.' },
          { en: '<b>Among</b> the crowd.', ru: 'Среди толпы.' }
        ]
      }
    },
    { id: 'beside-besides-2', emoji: '↔️➕', title: 'BESIDE / BESIDES / BESIDES THAT',
      rule: 'Рядом / Кроме / Кроме того',
      left: { word: 'beside', emoji: '↔️', meaning: 'рядом',
        examples: [
          { en: 'Sit <b>beside</b> me.', ru: 'Сядь рядом.' },
          { en: '<b>Beside</b> the door.', ru: 'Рядом с дверью.' }
        ]
      },
      right: { word: 'besides', emoji: '➕', meaning: 'кроме того',
        examples: [
          { en: '<b>Besides</b>, it\'s cheap.', ru: 'Кроме того, дёшево.' },
          { en: '<b>Besides</b> that, I\'m tired.', ru: 'Кроме того, я устал.' }
        ]
      }
    },
    { id: 'lay-lie-4', emoji: '🛏️🧍', title: 'LAY / LIE / LIE (лгать)',
      rule: 'Класть / Лежать / Лгать',
      left: { word: 'lay', emoji: '🛏️', meaning: 'класть (laid, laid)',
        examples: [
          { en: '<b>Lay</b> the book down.', ru: 'Положи книгу.' },
          { en: 'He <b>laid</b> it there.', ru: 'Он положил это там.' }
        ]
      },
      right: { word: 'lie', emoji: '🧍', meaning: 'лежать (lay, lain)',
        examples: [
          { en: '<b>Lie</b> on the bed.', ru: 'Ляг на кровать.' },
          { en: 'It <b>lay</b> there.', ru: 'Оно лежало там.' }
        ]
      }
    },
    { id: 'rise-raise-3', emoji: '🌅⬆️', title: 'RISE / RAISE / ARISE',
      rule: 'Встать / Поднять / Возникнуть',
      left: { word: 'rise', emoji: '🌅', meaning: 'подниматься (сам)',
        examples: [
          { en: 'Sun <b>rises</b>.', ru: 'Солнце встаёт.' },
          { en: 'Prices <b>rise</b>.', ru: 'Цены растут.' }
        ]
      },
      right: { word: 'raise', emoji: '⬆️', meaning: 'поднимать (что-то)',
        examples: [
          { en: '<b>Raise</b> your hand.', ru: 'Подними руку.' },
          { en: '<b>Raise</b> money.', ru: 'Собери деньги.' }
        ]
      }
    },
    { id: 'rob-steal-2', emoji: '🔫💰', title: 'ROB / STEAL / BURGLE',
      rule: 'Ограбить человека / Украсть вещь / Вломиться',
      left: { word: 'rob', emoji: '🔫', meaning: 'ограбить (кого-то)',
        examples: [
          { en: 'They <b>robbed</b> a bank.', ru: 'Ограбили банк.' },
          { en: 'He was <b>robbed</b>.', ru: 'Его ограбили.' }
        ]
      },
      right: { word: 'steal', emoji: '💰', meaning: 'украсть (вещь)',
        examples: [
          { en: '<b>Stole</b> my bike.', ru: 'Украли велосипед.' },
          { en: 'Don\'t <b>steal</b>.', ru: 'Не воруй.' }
        ]
      }
    },
    { id: 'advise-warn-2', emoji: '✅⚠️', title: 'ADVISE / WARN / REMIND',
      rule: 'Советовать / Предупреждать / Напоминать',
      left: { word: 'advise', emoji: '✅', meaning: 'советовать',
        examples: [
          { en: 'I <b>advise</b> rest.', ru: 'Советую отдых.' },
          { en: 'He <b>advised</b> caution.', ru: 'Он советовал осторожность.' }
        ]
      },
      right: { word: 'warn', emoji: '⚠️', meaning: 'предупреждать',
        examples: [
          { en: 'I <b>warn</b> you!', ru: 'Предупреждаю!' },
          { en: 'They <b>warned</b> us.', ru: 'Они предупредили.' }
        ]
      }
    },
    { id: 'allow-let-2', emoji: '✅🔓', title: 'ALLOW / LET / PERMIT',
      rule: 'Разрешать (формально) / Пускать / Разрешать (официально)',
      left: { word: 'allow', emoji: '✅', meaning: 'разрешать',
        examples: [
          { en: 'Smoking is not <b>allowed</b>.', ru: 'Не разрешено.' },
          { en: 'They <b>allow</b> dogs.', ru: 'Разрешают собак.' }
        ]
      },
      right: { word: 'let', emoji: '🔓', meaning: 'позволять (неформально)',
        examples: [
          { en: '<b>Let</b> me go.', ru: 'Позволь уйти.' },
          { en: '<b>Let</b> him speak.', ru: 'Дай сказать.' }
        ]
      }
    },
    { id: 'hope-wish-2', emoji: '🌟💫', title: 'HOPE / WISH / EXPECT',
      rule: 'Надеяться / Желать (нереально) / Ожидать',
      left: { word: 'hope', emoji: '🌟', meaning: 'надеяться (реально)',
        examples: [
          { en: 'I <b>hope</b> you come.', ru: 'Надеюсь, придёшь.' },
          { en: '<b>Hope</b> for the best.', ru: 'Надейся на лучшее.' }
        ]
      },
      right: { word: 'wish', emoji: '💫', meaning: 'желать (нереально)',
        examples: [
          { en: 'I <b>wish</b> I could fly.', ru: 'Хотел бы летать.' },
          { en: 'I <b>wish</b> you were here.', ru: 'Жаль, что тебя нет.' }
        ]
      }
    },
    { id: 'spend-waste-2', emoji: '💰🗑️', title: 'SPEND / WASTE / PAY',
      rule: 'Тратить (полезно) / Впустую / Платить',
      left: { word: 'spend', emoji: '💰', meaning: 'тратить (полезно)',
        examples: [
          { en: '<b>Spend</b> time wisely.', ru: 'Трать время с умом.' },
          { en: '<b>Spend</b> money on books.', ru: 'Трать на книги.' }
        ]
      },
      right: { word: 'waste', emoji: '🗑️', meaning: 'тратить впустую',
        examples: [
          { en: 'Don\'t <b>waste</b> time.', ru: 'Не трать зря.' },
          { en: '<b>Waste</b> of money.', ru: 'Пустая трата.' }
        ]
      }
    },
    { id: 'make-do-collo', emoji: '🎨🔧', title: 'MAKE / DO — идиомы',
      rule: 'Устойчивые сочетания',
      left: { word: 'make', emoji: '🎨', meaning: 'make + идиомы',
        examples: [
          { en: '<b>Make</b> up your mind.', ru: 'Решись.' },
          { en: '<b>Make</b> a difference.', ru: 'Измени ситуацию.' },
          { en: '<b>Make</b> ends meet.', ru: 'Свести концы с концами.' }
        ]
      },
      right: { word: 'do', emoji: '🔧', meaning: 'do + идиомы',
        examples: [
          { en: '<b>Do</b> your best.', ru: 'Сделай всё возможное.' },
          { en: '<b>Do</b> damage.', ru: 'Навреди.' },
          { en: '<b>Do</b> justice.', ru: 'Оцени по заслугам.' }
        ]
      }
    },
    { id: 'weather-whether-4', emoji: '🌦️🤔', title: 'WEATHER / WHETHER — примеры',
      rule: 'Погода / Ли',
      left: { word: 'weather', emoji: '🌦️', meaning: 'погода (сущ.)',
        examples: [
          { en: 'Nice <b>weather</b>.', ru: 'Хорошая погода.' },
          { en: '<b>Weather</b> forecast.', ru: 'Прогноз погоды.' }
        ]
      },
      right: { word: 'whether', emoji: '🤔', meaning: 'ли (союз)',
        examples: [
          { en: 'Ask <b>whether</b> he\'s coming.', ru: 'Спроси, придёт ли он.' },
          { en: '<b>Whether</b> or not.', ru: 'Так или иначе.' }
        ]
      }
    },
    { id: 'than-then-2', emoji: '🆚⏰', title: 'THAN / THEN — примеры',
      rule: 'Чем / Тогда',
      left: { word: 'than', emoji: '🆚', meaning: 'чем (сравнение)',
        examples: [
          { en: 'Better <b>than</b> before.', ru: 'Лучше, чем раньше.' },
          { en: 'Taller <b>than</b> me.', ru: 'Выше меня.' }
        ]
      },
      right: { word: 'then', emoji: '⏰', meaning: 'тогда / потом',
        examples: [
          { en: 'And <b>then</b> we left.', ru: 'А потом мы ушли.' },
          { en: 'See you <b>then</b>.', ru: 'До встречи.' }
        ]
      }
    },
    { id: 'your-youre-2', emoji: '👤✅', title: 'YOUR / YOU\'RE — примеры',
      rule: 'Твой / Ты есть',
      left: { word: 'your', emoji: '👤', meaning: 'твой (притяж.)',
        examples: [
          { en: '<b>Your</b> book is here.', ru: 'Твоя книга здесь.' },
          { en: '<b>Your</b> turn.', ru: 'Твой ход.' }
        ]
      },
      right: { word: 'you\'re', emoji: '✅', meaning: 'ты есть (сокр.)',
        examples: [
          { en: '<b>You\'re</b> right.', ru: 'Ты прав.' },
          { en: '<b>You\'re</b> welcome.', ru: 'Пожалуйста.' }
        ]
      }
    },
    { id: 'its-its-2', emoji: '🐾✅', title: 'ITS / IT\'S — примеры',
      rule: 'Его/её / Это есть',
      left: { word: 'its', emoji: '🐾', meaning: 'его/её (притяж. для вещей)',
        examples: [
          { en: 'The cat licked <b>its</b> paw.', ru: 'Кошка лизала лапу.' },
          { en: '<b>Its</b> colour is red.', ru: 'Его цвет — красный.' }
        ]
      },
      right: { word: 'it\'s', emoji: '✅', meaning: 'это есть (сокр.)',
        examples: [
          { en: '<b>It\'s</b> cold.', ru: 'Холодно.' },
          { en: '<b>It\'s</b> my book.', ru: 'Это моя книга.' }
        ]
      }
    },
    { id: 'affect-effect-4', emoji: '🌊🎯', title: 'AFFECT / EFFECT — примеры',
      rule: 'Влиять / Эффект',
      left: { word: 'affect', emoji: '🌊', meaning: 'влиять (глаг.)',
        examples: [
          { en: 'It <b>affects</b> health.', ru: 'Это влияет на здоровье.' },
          { en: 'How does it <b>affect</b>?', ru: 'Как влияет?' }
        ]
      },
      right: { word: 'effect', emoji: '🎯', meaning: 'эффект (сущ.)',
        examples: [
          { en: 'A side <b>effect</b>.', ru: 'Побочный эффект.' },
          { en: 'Take <b>effect</b>.', ru: 'Даёт эффект.' }
        ]
      }
    },
    { id: 'advice-advise-4', emoji: '💬✅', title: 'ADVICE / ADVISE — примеры',
      rule: 'Совет (сущ.) / Советовать (глаг.)',
      left: { word: 'advice', emoji: '💬', meaning: 'совет (неисч.)',
        examples: [
          { en: 'Some <b>advice</b>.', ru: 'Несколько советов.' },
          { en: 'Good <b>advice</b>.', ru: 'Хороший совет.' }
        ]
      },
      right: { word: 'advise', emoji: '✅', meaning: 'советовать',
        examples: [
          { en: 'I <b>advise</b> rest.', ru: 'Советую отдых.' },
          { en: 'He <b>advises</b> caution.', ru: 'Он советует осторожность.' }
        ]
      }
    },
    { id: 'principal-principle-3', emoji: '🎓📏', title: 'PRINCIPAL / PRINCIPLE — примеры',
      rule: 'Директор / Принцип',
      left: { word: 'principal', emoji: '🎓', meaning: 'директор / главный',
        examples: [
          { en: 'The school <b>principal</b>.', ru: 'Директор школы.' },
          { en: 'The <b>principal</b> reason.', ru: 'Главная причина.' }
        ]
      },
      right: { word: 'principle', emoji: '📏', meaning: 'принцип',
        examples: [
          { en: 'A man of <b>principle</b>.', ru: 'Человек принципов.' },
          { en: 'In <b>principle</b>.', ru: 'В принципе.' }
        ]
      }
    },
    { id: 'lose-loose-2', emoji: '😢👖', title: 'LOSE / LOOSE / LOSS',
      rule: 'Терять / Свободный / Потеря',
      left: { word: 'lose', emoji: '😢', meaning: 'терять (luːz)',
        examples: [
          { en: 'Don\'t <b>lose</b> it.', ru: 'Не теряй.' },
          { en: 'I <b>lost</b> my keys.', ru: 'Я потерял ключи.' }
        ]
      },
      right: { word: 'loose', emoji: '👖', meaning: 'свободный (luːs)',
        examples: [
          { en: 'A <b>loose</b> shirt.', ru: 'Свободная рубашка.' },
          { en: 'The screw is <b>loose</b>.', ru: 'Винт ослаб.' }
        ]
      }
    }
);

// ───────────────────────────────────────────────────────────
// 👯 25 НОВЫХ СЛОВ-БЛИЗНЕЦОВ (twinWords)
// ───────────────────────────────────────────────────────────
twinWords.push(
    { id: 'cite-site-sight-3', emoji: '📖📍👁️', title: 'CITE / SITE / SIGHT',
      rule: 'Цитировать / Место / Зрение',
      left: { word: 'cite', emoji: '📖', pos: 'глаг.', meaning: 'цитировать',
        examples: [
          { en: '<b>Cite</b> the source.', ru: 'Процитируй источник.' },
          { en: 'He <b>cited</b> a book.', ru: 'Он сослался на книгу.' }
        ]
      },
      right: { word: 'site', emoji: '📍', pos: 'сущ.', meaning: 'место, сайт',
        examples: [
          { en: 'A construction <b>site</b>.', ru: 'Стройплощадка.' },
          { en: 'Web <b>site</b>.', ru: 'Веб-сайт.' }
        ]
      }
    },
    { id: 'flour-flower-2', emoji: '🌾🌸', title: 'FLOUR / FLOWER',
      rule: 'Мука / Цветок',
      left: { word: 'flour', emoji: '🌾', pos: 'сущ.', meaning: 'мука',
        examples: [
          { en: 'Add <b>flour</b>.', ru: 'Добавь муки.' },
          { en: 'Wheat <b>flour</b>.', ru: 'Пшеничная мука.' }
        ]
      },
      right: { word: 'flower', emoji: '🌸', pos: 'сущ.', meaning: 'цветок',
        examples: [
          { en: 'A beautiful <b>flower</b>.', ru: 'Красивый цветок.' },
          { en: 'Spring <b>flowers</b>.', ru: 'Весенние цветы.' }
        ]
      }
    },
    { id: 'aloud-allowed-2', emoji: '🔊✅', title: 'ALOUD / ALLOWED',
      rule: 'Вслух / Разрешено',
      left: { word: 'aloud', emoji: '🔊', pos: 'нареч.', meaning: 'вслух',
        examples: [
          { en: 'Read <b>aloud</b>.', ru: 'Читай вслух.' },
          { en: 'Think <b>aloud</b>.', ru: 'Думай вслух.' }
        ]
      },
      right: { word: 'allowed', emoji: '✅', pos: 'глаг.', meaning: 'разрешено',
        examples: [
          { en: 'Smoking is not <b>allowed</b>.', ru: 'Курение запрещено.' },
          { en: 'Am I <b>allowed</b>?', ru: 'Мне разрешено?' }
        ]
      }
    },
    { id: 'brake-break-2', emoji: '🛑💥', title: 'BRAKE / BREAK',
      rule: 'Тормоз / Ломать',
      left: { word: 'brake', emoji: '🛑', pos: 'сущ.', meaning: 'тормоз',
        examples: [
          { en: 'Press the <b>brake</b>.', ru: 'Нажми тормоз.' },
          { en: 'Hand <b>brake</b>.', ru: 'Ручник.' }
        ]
      },
      right: { word: 'break', emoji: '💥', pos: 'глаг.', meaning: 'ломать',
        examples: [
          { en: 'Don\'t <b>break</b> it.', ru: 'Не сломай.' },
          { en: 'Take a <b>break</b>.', ru: 'Сделай паузу.' }
        ]
      }
    },
    { id: 'weather-wether', emoji: '🌦️🐑', title: 'WEATHER / WHETHER / WETHER',
      rule: 'Погода / Ли / Баран',
      left: { word: 'weather', emoji: '🌦️', pos: 'сущ.', meaning: 'погода',
        examples: [
          { en: 'Bad <b>weather</b>.', ru: 'Плохая погода.' },
          { en: '<b>Weather</b> report.', ru: 'Прогноз погоды.' }
        ]
      },
      right: { word: 'whether', emoji: '🤔', pos: 'союз', meaning: 'ли',
        examples: [
          { en: 'I don\'t know <b>whether</b>.', ru: 'Не знаю, ли...' },
          { en: '<b>Whether</b> to go.', ru: 'Идти ли.' }
        ]
      }
    },
    { id: 'stationary-2', emoji: '🧍📝', title: 'STATIONARY / STATIONERY / STATIONARY',
      rule: 'Неподвижный / Канцтовары',
      left: { word: 'stationary', emoji: '🧍', pos: 'прил.', meaning: 'неподвижный',
        examples: [
          { en: 'A <b>stationary</b> car.', ru: 'Стоящая машина.' },
          { en: 'Remain <b>stationary</b>.', ru: 'Оставайся на месте.' }
        ]
      },
      right: { word: 'stationery', emoji: '📝', pos: 'сущ.', meaning: 'канцтовары',
        examples: [
          { en: 'Buy <b>stationery</b>.', ru: 'Купи канцтовары.' },
          { en: '<b>Stationery</b> shop.', ru: 'Магазин канцтоваров.' }
        ]
      }
    },
    { id: 'quiet-quite-2', emoji: '🤫✅', title: 'QUIET / QUITE / QUIT',
      rule: 'Тихий / Довольно / Бросить',
      left: { word: 'quiet', emoji: '🤫', pos: 'прил.', meaning: 'тихий',
        examples: [
          { en: 'Be <b>quiet</b>!', ru: 'Тихо!' },
          { en: 'A <b>quiet</b> room.', ru: 'Тихая комната.' }
        ]
      },
      right: { word: 'quite', emoji: '✅', pos: 'нареч.', meaning: 'довольно',
        examples: [
          { en: '<b>Quite</b> good!', ru: 'Довольно хорошо!' },
          { en: '<b>Quite</b> a lot.', ru: 'Довольно много.' }
        ]
      }
    },
    { id: 'desert-dessert-2', emoji: '🏜️🍰', title: 'DESERT / DESSERT / DESERT (verb)',
      rule: 'Пустыня / Десерт / Покидать',
      left: { word: 'desert', emoji: '🏜️', pos: 'сущ. / ˈdezət', meaning: 'пустыня',
        examples: [
          { en: 'A hot <b>desert</b>.', ru: 'Жаркая пустыня.' },
          { en: 'Sahara <b>desert</b>.', ru: 'Пустыня Сахара.' }
        ]
      },
      right: { word: 'dessert', emoji: '🍰', pos: 'сущ. / dɪˈzɜːt', meaning: 'десерт',
        examples: [
          { en: 'Sweet <b>dessert</b>.', ru: 'Сладкий десерт.' },
          { en: 'What\'s for <b>dessert</b>?', ru: 'Что на десерт?' }
        ]
      }
    },
    { id: 'personal-personnel-4', emoji: '👤👥', title: 'PERSONAL / PERSONNEL / PERSONALITY',
      rule: 'Личный / Персонал / Личность',
      left: { word: 'personal', emoji: '👤', pos: 'прил.', meaning: 'личный',
        examples: [
          { en: '<b>Personal</b> data.', ru: 'Личные данные.' },
          { en: '<b>Personal</b> life.', ru: 'Личная жизнь.' }
        ]
      },
      right: { word: 'personnel', emoji: '👥', pos: 'сущ.', meaning: 'персонал',
        examples: [
          { en: 'Company <b>personnel</b>.', ru: 'Персонал компании.' },
          { en: 'HR <b>personnel</b>.', ru: 'Кадровый персонал.' }
        ]
      }
    },
    { id: 'every-day-2', emoji: '📅🔁', title: 'EVERY DAY / EVERYDAY',
      rule: 'Каждый день (2 слова) / Ежедневный (1 слово)',
      left: { word: 'every day', emoji: '📅', pos: 'фраза', meaning: 'каждый день',
        examples: [
          { en: 'I run <b>every day</b>.', ru: 'Я бегаю каждый день.' },
          { en: 'See you <b>every day</b>.', ru: 'Видимся ежедневно.' }
        ]
      },
      right: { word: 'everyday', emoji: '🔁', pos: 'прил.', meaning: 'повседневный',
        examples: [
          { en: '<b>Everyday</b> clothes.', ru: 'Повседневная одежда.' },
          { en: '<b>Everyday</b> life.', ru: 'Повседневная жизнь.' }
        ]
      }
    },
    { id: 'some-time-2', emoji: '📅🔁', title: 'SOME TIME / SOMETIME / SOMETIMES',
      rule: 'Некоторое время / Как-то / Иногда',
      left: { word: 'some time', emoji: '📅', pos: 'фраза', meaning: 'некоторое время',
        examples: [
          { en: 'I need <b>some time</b>.', ru: 'Мне нужно время.' },
          { en: 'For <b>some time</b>.', ru: 'На какое-то время.' }
        ]
      },
      right: { word: 'sometimes', emoji: '🔁', pos: 'нареч.', meaning: 'иногда',
        examples: [
          { en: '<b>Sometimes</b> I run.', ru: 'Иногда я бегаю.' },
          { en: 'She <b>sometimes</b> sings.', ru: 'Она иногда поёт.' }
        ]
      }
    },
    { id: 'any-way-2', emoji: '🛣️➡️', title: 'ANY WAY / ANYWAY',
      rule: 'Любой способ / В любом случае',
      left: { word: 'any way', emoji: '🛣️', pos: 'фраза', meaning: 'любой способ',
        examples: [
          { en: 'Is there <b>any way</b>?', ru: 'Есть способ?' },
          { en: '<b>Any way</b> you like.', ru: 'Любым способом.' }
        ]
      },
      right: { word: 'anyway', emoji: '➡️', pos: 'нареч.', meaning: 'в любом случае',
        examples: [
          { en: '<b>Anyway</b>, let\'s go.', ru: 'В любом случае, пойдём.' },
          { en: 'Thanks <b>anyway</b>.', ru: 'Всё равно спасибо.' }
        ]
      }
    },
    { id: 'altogether-2', emoji: '🌍✅', title: 'ALL TOGETHER / ALTOGETHER',
      rule: 'Все вместе / В целом',
      left: { word: 'all together', emoji: '🌍', pos: 'фраза', meaning: 'все вместе',
        examples: [
          { en: 'We sang <b>all together</b>.', ru: 'Мы пели все вместе.' },
          { en: '<b>All together</b> now!', ru: 'Все вместе!' }
        ]
      },
      right: { word: 'altogether', emoji: '✅', pos: 'нареч.', meaning: 'в целом',
        examples: [
          { en: '<b>Altogether</b>, fine.', ru: 'В целом, хорошо.' },
          { en: 'Not <b>altogether</b> bad.', ru: 'Не так плохо.' }
        ]
      }
    },
    { id: 'complement-2', emoji: '➕🎨', title: 'COMPLIMENT / COMPLEMENT',
      rule: 'Комплимент / Дополнение',
      left: { word: 'compliment', emoji: '➕', pos: 'сущ./глаг.', meaning: 'комплимент',
        examples: [
          { en: 'Give a <b>compliment</b>.', ru: 'Сделай комплимент.' },
          { en: 'She <b>complimented</b> him.', ru: 'Она похвалила.' }
        ]
      },
      right: { word: 'complement', emoji: '🎨', pos: 'сущ./глаг.', meaning: 'дополнение',
        examples: [
          { en: 'Perfect <b>complement</b>.', ru: 'Идеальное дополнение.' },
          { en: 'They <b>complement</b> each other.', ru: 'Они дополняют друг друга.' }
        ]
      }
    },
    { id: 'passed-past-2', emoji: '✅⏪', title: 'PASSED / PAST',
      rule: 'Прошёл / Прошлое',
      left: { word: 'passed', emoji: '✅', pos: 'глаг.', meaning: 'прошёл (глаг.)',
        examples: [
          { en: 'He <b>passed</b> the exam.', ru: 'Он сдал экзамен.' },
          { en: 'Time <b>passed</b>.', ru: 'Время прошло.' }
        ]
      },
      right: { word: 'past', emoji: '⏪', pos: 'сущ./предлог', meaning: 'прошлое',
        examples: [
          { en: 'In the <b>past</b>.', ru: 'В прошлом.' },
          { en: 'Walk <b>past</b> it.', ru: 'Пройди мимо.' }
        ]
      }
    },
    { id: 'precede-proceed-2', emoji: '⬅️➡️', title: 'PRECEDE / PROCEED / SUCCEED',
      rule: 'Предшествовать / Продолжать / Преуспеть',
      left: { word: 'precede', emoji: '⬅️', pos: 'глаг.', meaning: 'предшествовать',
        examples: [
          { en: 'A <b>precedes</b> B.', ru: 'А перед Б.' },
          { en: 'Music <b>preceded</b> speech.', ru: 'Музыка предшествовала речи.' }
        ]
      },
      right: { word: 'proceed', emoji: '➡️', pos: 'глаг.', meaning: 'продолжать',
        examples: [
          { en: '<b>Proceed</b> with care.', ru: 'Продолжай с осторожностью.' },
          { en: 'Please <b>proceed</b>.', ru: 'Продолжайте, пожалуйста.' }
        ]
      }
    },
    { id: 'instinct-intuition', emoji: '🧠✅', title: 'INSTINCT / INTUITION',
      rule: 'Инстинкт / Интуиция',
      left: { word: 'instinct', emoji: '🧠', pos: 'сущ.', meaning: 'инстинкт (природный)',
        examples: [
          { en: 'Animal <b>instinct</b>.', ru: 'Животный инстинкт.' },
          { en: 'Trust your <b>instinct</b>.', ru: 'Доверься инстинкту.' }
        ]
      },
      right: { word: 'intuition', emoji: '✅', pos: 'сущ.', meaning: 'интуиция',
        examples: [
          { en: 'Female <b>intuition</b>.', ru: 'Женская интуиция.' },
          { en: 'Follow your <b>intuition</b>.', ru: 'Следуй интуиции.' }
        ]
      }
    },
    { id: 'efficient-effective', emoji: '⚙️✅', title: 'EFFICIENT / EFFECTIVE',
      rule: 'Эффективный (по ресурсам) / Действенный',
      left: { word: 'efficient', emoji: '⚙️', pos: 'прил.', meaning: 'эффективный',
        examples: [
          { en: 'An <b>efficient</b> system.', ru: 'Эффективная система.' },
          { en: '<b>Efficient</b> worker.', ru: 'Эффективный работник.' }
        ]
      },
      right: { word: 'effective', emoji: '✅', pos: 'прил.', meaning: 'действенный',
        examples: [
          { en: 'An <b>effective</b> solution.', ru: 'Действенное решение.' },
          { en: '<b>Effective</b> method.', ru: 'Действенный метод.' }
        ]
      }
    },
    { id: 'imagine-imagination', emoji: '🌈🎨', title: 'IMAGINARY / IMAGINATIVE / IMAGINABLE',
      rule: 'Вымышленный / Творческий / Вообразимый',
      left: { word: 'imaginary', emoji: '🌈', pos: 'прил.', meaning: 'вымышленный',
        examples: [
          { en: 'An <b>imaginary</b> friend.', ru: 'Воображаемый друг.' },
          { en: '<b>Imaginary</b> world.', ru: 'Вымышленный мир.' }
        ]
      },
      right: { word: 'imaginative', emoji: '🎨', pos: 'прил.', meaning: 'творческий',
        examples: [
          { en: 'An <b>imaginative</b> child.', ru: 'Творческий ребёнок.' },
          { en: '<b>Imaginative</b> story.', ru: 'Творческая история.' }
        ]
      }
    },
    { id: 'sensible-sensitive', emoji: '🧠❤️', title: 'SENSIBLE / SENSITIVE',
      rule: 'Разумный / Чувствительный',
      left: { word: 'sensible', emoji: '🧠', pos: 'прил.', meaning: 'разумный',
        examples: [
          { en: 'A <b>sensible</b> decision.', ru: 'Разумное решение.' },
          { en: '<b>Sensible</b> advice.', ru: 'Разумный совет.' }
        ]
      },
      right: { word: 'sensitive', emoji: '❤️', pos: 'прил.', meaning: 'чувствительный',
        examples: [
          { en: 'A <b>sensitive</b> topic.', ru: 'Чувствительная тема.' },
          { en: '<b>Sensitive</b> skin.', ru: 'Чувствительная кожа.' }
        ]
      }
    },
    { id: 'economic-economical', emoji: '💼💰', title: 'ECONOMIC / ECONOMICAL',
      rule: 'Экономический / Экономный',
      left: { word: 'economic', emoji: '💼', pos: 'прил.', meaning: 'экономический',
        examples: [
          { en: '<b>Economic</b> growth.', ru: 'Экономический рост.' },
          { en: '<b>Economic</b> crisis.', ru: 'Экономический кризис.' }
        ]
      },
      right: { word: 'economical', emoji: '💰', pos: 'прил.', meaning: 'экономный',
        examples: [
          { en: 'An <b>economical</b> car.', ru: 'Экономная машина.' },
          { en: '<b>Economical</b> use.', ru: 'Экономное использование.' }
        ]
      }
    },
    { id: 'historic-historical-3', emoji: '🏛️📜', title: 'HISTORIC / HISTORICAL',
      rule: 'Исторически важный / Исторический (по теме)',
      left: { word: 'historic', emoji: '🏛️', pos: 'прил.', meaning: 'важный для истории',
        examples: [
          { en: 'A <b>historic</b> day.', ru: 'Исторический день.' },
          { en: 'A <b>historic</b> event.', ru: 'Историческое событие.' }
        ]
      },
      right: { word: 'historical', emoji: '📜', pos: 'прил.', meaning: 'по теме истории',
        examples: [
          { en: 'A <b>historical</b> novel.', ru: 'Исторический роман.' },
          { en: '<b>Historical</b> data.', ru: 'Исторические данные.' }
        ]
      }
    },
    { id: 'careful-careless-2', emoji: '🧐🙈', title: 'CAREFUL / CARELESS / CARING',
      rule: 'Осторожный / Беспечный / Заботливый',
      left: { word: 'careful', emoji: '🧐', pos: 'прил.', meaning: 'осторожный',
        examples: [
          { en: 'Be <b>careful</b>!', ru: 'Будь осторожен!' },
          { en: 'A <b>careful</b> driver.', ru: 'Осторожный водитель.' }
        ]
      },
      right: { word: 'careless', emoji: '🙈', pos: 'прил.', meaning: 'беспечный',
        examples: [
          { en: 'A <b>careless</b> mistake.', ru: 'Небрежная ошибка.' },
          { en: '<b>Careless</b> driver.', ru: 'Беспечный водитель.' }
        ]
      }
    },
    { id: 'lightning-2', emoji: '⚡💡', title: 'LIGHTNING / LIGHTING / LIGHTENING',
      rule: 'Молния / Освещение / Облегчение',
      left: { word: 'lightning', emoji: '⚡', pos: 'сущ.', meaning: 'молния',
        examples: [
          { en: '<b>Lightning</b> struck.', ru: 'Ударила молния.' },
          { en: '<b>Lightning</b> speed.', ru: 'Со скоростью молнии.' }
        ]
      },
      right: { word: 'lighting', emoji: '💡', pos: 'сущ.', meaning: 'освещение',
        examples: [
          { en: 'Good <b>lighting</b>.', ru: 'Хорошее освещение.' },
          { en: 'Street <b>lighting</b>.', ru: 'Уличное освещение.' }
        ]
      }
    },
    { id: 'personal-3', emoji: '👤✅', title: 'PERSONAL / PERSONABLE',
      rule: 'Личный / Приятный в общении',
      left: { word: 'personal', emoji: '👤', pos: 'прил.', meaning: 'личный',
        examples: [
          { en: '<b>Personal</b> matter.', ru: 'Личное дело.' },
          { en: '<b>Personal</b> opinion.', ru: 'Личное мнение.' }
        ]
      },
      right: { word: 'personable', emoji: '✅', pos: 'прил.', meaning: 'обаятельный',
        examples: [
          { en: 'A <b>personable</b> leader.', ru: 'Обаятельный лидер.' },
          { en: '<b>Personable</b> employee.', ru: 'Приятный сотрудник.' }
        ]
      }
    },
    { id: 'invaluable', emoji: '💎💰', title: 'VALUABLE / INVALUABLE / VALUELESS',
      rule: 'Ценный / Бесценный / Ничего не стоящий',
      left: { word: 'valuable', emoji: '💎', pos: 'прил.', meaning: 'ценный',
        examples: [
          { en: '<b>Valuable</b> advice.', ru: 'Ценный совет.' },
          { en: '<b>Valuable</b> things.', ru: 'Ценные вещи.' }
        ]
      },
      right: { word: 'invaluable', emoji: '💰', pos: 'прил.', meaning: 'бесценный (очень важный)',
        examples: [
          { en: '<b>Invaluable</b> help.', ru: 'Бесценная помощь.' },
          { en: '<b>Invaluable</b> experience.', ru: 'Бесценный опыт.' }
        ]
      }
    },
    { id: 'continual-continuous', emoji: '🔁⏱️', title: 'CONTINUAL / CONTINUOUS',
      rule: 'Периодически повторяющийся / Непрерывный',
      left: { word: 'continual', emoji: '🔁', pos: 'прил.', meaning: 'с перерывами',
        examples: [
          { en: '<b>Continual</b> interruptions.', ru: 'Постоянные перерывы.' },
          { en: '<b>Continual</b> rain.', ru: 'Дождь с перерывами.' }
        ]
      },
      right: { word: 'continuous', emoji: '⏱️', pos: 'прил.', meaning: 'непрерывный',
        examples: [
          { en: '<b>Continuous</b> line.', ru: 'Непрерывная линия.' },
          { en: '<b>Continuous</b> work.', ru: 'Непрерывная работа.' }
        ]
      }
    },
    { id: 'assure-ensure', emoji: '✅🛡️', title: 'ASSURE / ENSURE / INSURE',
      rule: 'Заверять / Обеспечивать / Страховать',
      left: { word: 'assure', emoji: '✅', pos: 'глаг.', meaning: 'заверять',
        examples: [
          { en: 'I <b>assure</b> you.', ru: 'Я вас уверяю.' },
          { en: 'He <b>assured</b> me.', ru: 'Он меня заверил.' }
        ]
      },
      right: { word: 'ensure', emoji: '🛡️', pos: 'глаг.', meaning: 'обеспечивать',
        examples: [
          { en: '<b>Ensure</b> success.', ru: 'Обеспечь успех.' },
          { en: '<b>Ensure</b> safety.', ru: 'Обеспечь безопасность.' }
        ]
      }
    }
);

// ───────────────────────────────────────────────────────────
// ⚖️ 30 НОВЫХ АНТОНИМОВ (oppositeAffixes)
// ───────────────────────────────────────────────────────────
oppositeAffixes.push(
    { pair: ['in-', '-'], emoji: '⚖️', ex1: 'formal', ex2: 'informal', ru: 'формальный → неформальный' },
    { pair: ['in-', '-'], emoji: '⚖️', ex1: 'direct', ex2: 'indirect', ru: 'прямой → косвенный' },
    { pair: ['in-', '-'], emoji: '⚖️', ex1: 'adequate', ex2: 'inadequate', ru: 'адекватный → неадекватный' },
    { pair: ['in-', '-'], emoji: '⚖️', ex1: 'expensive', ex2: 'inexpensive', ru: 'дорогой → недорогой' },
    { pair: ['in-', '-'], emoji: '⚖️', ex1: 'convenient', ex2: 'inconvenient', ru: 'удобный → неудобный' },
    { pair: ['im-', '-'], emoji: '⚖️', ex1: 'polite', ex2: 'impolite', ru: 'вежливый → невежливый' },
    { pair: ['im-', '-'], emoji: '⚖️', ex1: 'personal', ex2: 'impersonal', ru: 'личный → безличный' },
    { pair: ['im-', '-'], emoji: '⚖️', ex1: 'mature', ex2: 'immature', ru: 'зрелый → незрелый' },
    { pair: ['im-', '-'], emoji: '⚖️', ex1: 'perfect', ex2: 'imperfect', ru: 'идеальный → несовершенный' },
    { pair: ['ir-', '-'], emoji: '⚖️', ex1: 'regular', ex2: 'irregular', ru: 'регулярный → нерегулярный' },
    { pair: ['ir-', '-'], emoji: '⚖️', ex1: 'rational', ex2: 'irrational', ru: 'разумный → иррациональный' },
    { pair: ['ir-', '-'], emoji: '⚖️', ex1: 'responsible', ex2: 'irresponsible', ru: 'ответственный → безответственный' },
    { pair: ['ir-', '-'], emoji: '⚖️', ex1: 'replaceable', ex2: 'irreplaceable', ru: 'заменимый → незаменимый' },
    { pair: ['il-', '-'], emoji: '⚖️', ex1: 'legal', ex2: 'illegal', ru: 'законный → незаконный' },
    { pair: ['il-', '-'], emoji: '⚖️', ex1: 'legible', ex2: 'illegible', ru: 'читаемый → нечитаемый' },
    { pair: ['il-', '-'], emoji: '⚖️', ex1: 'literate', ex2: 'illiterate', ru: 'грамотный → безграмотный' },
    { pair: ['dis-', '-'], emoji: '⚖️', ex1: 'order', ex2: 'disorder', ru: 'порядок → беспорядок' },
    { pair: ['dis-', '-'], emoji: '⚖️', ex1: 'pleased', ex2: 'displeased', ru: 'довольный → недовольный' },
    { pair: ['dis-', '-'], emoji: '⚖️', ex1: 'advantage', ex2: 'disadvantage', ru: 'преимущество → недостаток' },
    { pair: ['dis-', '-'], emoji: '⚖️', ex1: 'honest', ex2: 'dishonest', ru: 'честный → нечестный' },
    { pair: ['un-', '-'], emoji: '⚖️', ex1: 'certain', ex2: 'uncertain', ru: 'уверенный → неуверенный' },
    { pair: ['un-', '-'], emoji: '⚖️', ex1: 'real', ex2: 'unreal', ru: 'реальный → нереальный' },
    { pair: ['un-', '-'], emoji: '⚖️', ex1: 'safe', ex2: 'unsafe', ru: 'безопасный → небезопасный' },
    { pair: ['un-', '-'], emoji: '⚖️', ex1: 'attractive', ex2: 'unattractive', ru: 'привлекательный → непривлекательный' },
    { pair: ['un-', '-'], emoji: '⚖️', ex1: 'able', ex2: 'unable', ru: 'способный → неспособный' },
    { pair: ['-', '-less'], emoji: '⚖️', ex1: 'doubt', ex2: 'doubtless', ru: 'сомнение → несомненный' },
    { pair: ['-', '-less'], emoji: '⚖️', ex1: 'count', ex2: 'countless', ru: 'считать → бесчисленный' },
    { pair: ['-', '-less'], emoji: '⚖️', ex1: 'end', ex2: 'endless', ru: 'конец → бесконечный' },
    { pair: ['-', '-less'], emoji: '⚖️', ex1: 'weight', ex2: 'weightless', ru: 'вес → невесомый' },
    { pair: ['over-', 'under-'], emoji: '⚖️', ex1: 'overcharge', ex2: 'undercharge', ru: 'переплатить → недоплатить' }
);

// ═══════════════════════════════════════════════════════════
// 🆕 МЕГА-БЛОК v13 — ВСЁ ЗА СЕГОДНЯ
// Коллокации + Предлоги + GET + SAY/TELL/SPEAK/TALK +
// 30 наречий + Диалоги 6×5 + Never Confuse + Very good +
// Good night + 9 типов прилагательных + Схемы быть/делать/иметь
// ═══════════════════════════════════════════════════════════

// ───────────────────────────────────────────────────────────
// 1️⃣ 9 ВОЛШЕБНЫХ ГЛАГОЛОВ — КОЛЛОКАЦИИ
// ───────────────────────────────────────────────────────────
magicVerbs.push(
    { verb: 'have', emoji: '🥂', meaning: 'ИМЕТЬ / ПРИНИМАТЬ',
      assoc: 'have + существительное = действие', note: 'have = есть, пить, принимать, отдыхать',
      senses: [
        { sense: 'ПИТЬ', ru: 'пить', ex: 'Let\'s <b>have</b> a drink.', exRu: 'Давай выпьем.' },
        { sense: 'ВАННА', ru: 'принимать ванну', ex: 'I want to <b>have</b> a bath.', exRu: 'Я хочу принять ванну.' },
        { sense: 'ЗАВТРАК', ru: 'завтракать', ex: 'I <b>have</b> breakfast at 8.', exRu: 'Я завтракаю в 8.' },
        { sense: 'ОТДЫХ', ru: 'отдыхать', ex: 'Let\'s <b>have</b> a rest.', exRu: 'Давай отдохнём.' },
        { sense: 'ОБЕД', ru: 'обедать', ex: 'We <b>have</b> lunch at noon.', exRu: 'Мы обедаем в полдень.' },
        { sense: 'ДУШ', ru: 'принимать душ', ex: 'I <b>have</b> a shower every morning.', exRu: 'Я принимаю душ каждое утро.' }
      ],
      phrases: [
        { p: 'have a drink', ru: 'выпить', ex: 'Let\'s <b>have a drink</b>.', exRu: 'Давай выпьем.' },
        { p: 'have a bath', ru: 'принять ванну', ex: 'I\'ll <b>have a bath</b>.', exRu: 'Я приму ванну.' },
        { p: 'have breakfast', ru: 'завтракать', ex: '<b>Have breakfast</b> first.', exRu: 'Сначала позавтракай.' },
        { p: 'have a rest', ru: 'отдохнуть', ex: 'You need to <b>have a rest</b>.', exRu: 'Тебе нужно отдохнуть.' },
        { p: 'have lunch', ru: 'обедать', ex: 'We <b>have lunch</b> together.', exRu: 'Мы обедаем вместе.' },
        { p: 'have a shower', ru: 'принять душ', ex: '<b>Have a shower</b> before bed.', exRu: 'Прими душ перед сном.' }
      ]
    },
    { verb: 'take', emoji: '✋', meaning: 'БРАТЬ / ДЕЛАТЬ',
      assoc: 'take + существительное = действие', note: 'take = брать, сдавать, делать перерыв',
      senses: [
        { sense: 'ПЕРЕРЫВ', ru: 'перерыв', ex: 'Let\'s <b>take</b> a break.', exRu: 'Давай сделаем перерыв.' },
        { sense: 'ВЗГЛЯНУТЬ', ru: 'взглянуть', ex: '<b>Take</b> a look at this.', exRu: 'Взгляни на это.' },
        { sense: 'ЭКЗАМЕН', ru: 'сдавать экзамен', ex: 'I <b>take</b> an exam tomorrow.', exRu: 'Я сдаю экзамен завтра.' },
        { sense: 'СЕСТЬ', ru: 'сесть', ex: 'Please <b>take</b> a seat.', exRu: 'Присядьте.' },
        { sense: 'РИСКНУТЬ', ru: 'рискнуть', ex: '<b>Take</b> a chance!', exRu: 'Рискни!' },
        { sense: 'ФОТО', ru: 'сфотографировать', ex: 'Can you <b>take</b> a photo?', exRu: 'Можешь сфотографировать?' }
      ],
      phrases: [
        { p: 'take a break', ru: 'сделать перерыв', ex: '<b>Take a break</b> now.', exRu: 'Сделай перерыв.' },
        { p: 'take a look', ru: 'взглянуть', ex: '<b>Take a look</b> at it.', exRu: 'Взгляни.' },
        { p: 'take an exam', ru: 'сдавать экзамен', ex: 'She <b>takes an exam</b> today.', exRu: 'Она сдаёт экзамен.' },
        { p: 'take a seat', ru: 'присесть', ex: '<b>Take a seat</b>, please.', exRu: 'Присядьте.' },
        { p: 'take a chance', ru: 'рискнуть', ex: '<b>Take a chance</b>!', exRu: 'Рискни!' },
        { p: 'take a photo', ru: 'сфотографировать', ex: '<b>Take a photo</b> here.', exRu: 'Сфотографируй.' }
      ]
    },
    { verb: 'do', emoji: '✅', meaning: 'ДЕЛАТЬ / ВЫПОЛНЯТЬ',
      assoc: 'do + работа / рутина', note: 'do = делать работу, посуду, волосы, одолжение',
      senses: [
        { sense: 'РАБОТА', ru: 'работа', ex: 'I <b>do</b> my work.', exRu: 'Я делаю работу.' },
        { sense: 'НИЧЕГО', ru: 'ничего', ex: 'I <b>do</b> nothing all day.', exRu: 'Я ничего не делаю.' },
        { sense: 'ПОСУДА', ru: 'посуда', ex: 'I <b>do</b> the dishes.', exRu: 'Я мою посуду.' },
        { sense: 'ВОЛОСЫ', ru: 'волосы', ex: 'She <b>does</b> her hair.', exRu: 'Она укладывает волосы.' },
        { sense: 'ОДОЛЖЕНИЕ', ru: 'одолжение', ex: 'Can you <b>do</b> me a favour?', exRu: 'Сделай одолжение?' }
      ],
      phrases: [
        { p: 'do your work', ru: 'делать работу', ex: '<b>Do your work</b> now.', exRu: 'Делай работу.' },
        { p: 'do nothing', ru: 'ничего не делать', ex: 'I <b>do nothing</b> on Sundays.', exRu: 'По воскресеньям ничего не делаю.' },
        { p: 'do the dishes', ru: 'мыть посуду', ex: '<b>Do the dishes</b>, please.', exRu: 'Помой посуду.' },
        { p: 'do your hair', ru: 'причёсываться', ex: 'She <b>does her hair</b>.', exRu: 'Она укладывает волосы.' },
        { p: 'do a favour', ru: 'сделать одолжение', ex: 'Can you <b>do</b> me a favour?', exRu: 'Сделай одолжение?' }
      ]
    },
    { verb: 'make', emoji: '🔨', meaning: 'СОЗДАВАТЬ / ПРОИЗВОДИТЬ',
      assoc: 'make = создавать новое', note: 'make = создать, решить, убрать, заработать',
      senses: [
        { sense: 'БЕСПОРЯДОК', ru: 'беспорядок', ex: 'Don\'t <b>make</b> a mess.', exRu: 'Не устраивай беспорядок.' },
        { sense: 'РАЗНИЦА', ru: 'разница', ex: 'You can <b>make</b> a difference.', exRu: 'Ты можешь изменить ситуацию.' },
        { sense: 'УСИЛИЕ', ru: 'усилие', ex: '<b>Make</b> an effort!', exRu: 'Приложи усилие!' },
        { sense: 'ДЕНЬГИ', ru: 'деньги', ex: 'I <b>make</b> money online.', exRu: 'Я зарабатываю в интернете.' },
        { sense: 'РЕШЕНИЕ', ru: 'решение', ex: '<b>Make</b> a decision.', exRu: 'Прими решение.' },
        { sense: 'КРОВАТЬ', ru: 'кровать', ex: 'I <b>make</b> the bed.', exRu: 'Я заправляю кровать.' }
      ],
      phrases: [
        { p: 'make a mess', ru: 'устроить беспорядок', ex: 'The kids <b>made a mess</b>.', exRu: 'Дети устроили беспорядок.' },
        { p: 'make a difference', ru: 'изменить ситуацию', ex: 'You can <b>make a difference</b>.', exRu: 'Ты можешь изменить ситуацию.' },
        { p: 'make an effort', ru: 'приложить усилие', ex: '<b>Make an effort</b>!', exRu: 'Приложи усилие!' },
        { p: 'make money', ru: 'зарабатывать', ex: 'I need to <b>make money</b>.', exRu: 'Мне нужно зарабатывать.' },
        { p: 'make a decision', ru: 'принять решение', ex: '<b>Make a decision</b> now.', exRu: 'Прими решение.' },
        { p: 'make the bed', ru: 'заправить кровать', ex: 'I <b>make the bed</b> daily.', exRu: 'Я заправляю кровать.' }
      ]
    },
    { verb: 'go', emoji: '🚶', meaning: 'ИДТИ / ЕХАТЬ',
      assoc: 'go + направление / состояние', note: 'go = идти, ехать, сходить с ума, обанкротиться',
      senses: [
        { sense: 'ДОМОЙ', ru: 'домой', ex: 'I\'m <b>going</b> home.', exRu: 'Я иду домой.' },
        { sense: 'ШОПИНГ', ru: 'шопинг', ex: 'Let\'s <b>go</b> shopping.', exRu: 'Пойдём за покупками.' },
        { sense: 'С УМА', ru: 'сходить с ума', ex: 'Are you <b>going</b> crazy?', exRu: 'Ты сходишь с ума?' },
        { sense: 'ЗА ГРАНИЦУ', ru: 'за границу', ex: 'They <b>went</b> abroad.', exRu: 'Они уехали за границу.' },
        { sense: 'БАНКРОТ', ru: 'обанкротиться', ex: 'The company <b>went</b> bankrupt.', exRu: 'Компания обанкротилась.' },
        { sense: 'ПРОГУЛКА', ru: 'на прогулку', ex: 'Let\'s <b>go</b> for a walk.', exRu: 'Пойдём гулять.' }
      ],
      phrases: [
        { p: 'go home', ru: 'идти домой', ex: 'I want to <b>go home</b>.', exRu: 'Я хочу домой.' },
        { p: 'go shopping', ru: 'идти за покупками', ex: 'Shall we <b>go shopping</b>?', exRu: 'Пойдём за покупками?' },
        { p: 'go crazy', ru: 'сходить с ума', ex: 'Don\'t <b>go crazy</b>.', exRu: 'Не сходи с ума.' },
        { p: 'go abroad', ru: 'уехать за границу', ex: 'She <b>went abroad</b>.', exRu: 'Она уехала за границу.' },
        { p: 'go bankrupt', ru: 'обанкротиться', ex: 'The firm <b>went bankrupt</b>.', exRu: 'Фирма обанкротилась.' },
        { p: 'go for a walk', ru: 'пойти погулять', ex: 'Let\'s <b>go for a walk</b>.', exRu: 'Пойдём гулять.' }
      ]
    },
    { verb: 'come', emoji: '🏠', meaning: 'ПРИХОДИТЬ',
      assoc: 'come + состояние / результат', note: 'come = приходить, приближаться, заканчиваться',
      senses: [
        { sense: 'БЛИЗКО', ru: 'близко', ex: '<b>Come</b> close.', exRu: 'Подойди ближе.' },
        { sense: 'К КОНЦУ', ru: 'к концу', ex: 'The year is coming to an end.', exRu: 'Год подходит к концу.' },
        { sense: 'РАНО', ru: 'рано', ex: '<b>Come</b> early tomorrow.', exRu: 'Приходи рано.' },
        { sense: 'ПЕРВЫЙ', ru: 'первый', ex: 'She <b>came</b> first.', exRu: 'Она пришла первой.' },
        { sense: 'ПОСЛЕДНИЙ', ru: 'последний', ex: 'He <b>came</b> last.', exRu: 'Он пришёл последним.' },
        { sense: 'ВОВРЕМЯ', ru: 'вовремя', ex: '<b>Come</b> on time.', exRu: 'Приходи вовремя.' }
      ],
      phrases: [
        { p: 'come close', ru: 'подойти близко', ex: '<b>Come close</b> to me.', exRu: 'Подойди ближе.' },
        { p: 'come to an end', ru: 'подойти к концу', ex: 'The movie <b>came to an end</b>.', exRu: 'Фильм закончился.' },
        { p: 'come early', ru: 'прийти рано', ex: 'Please <b>come early</b>.', exRu: 'Приди пораньше.' },
        { p: 'come first', ru: 'прийти первым', ex: 'She <b>came first</b>.', exRu: 'Она пришла первой.' },
        { p: 'come last', ru: 'прийти последним', ex: 'He always <b>comes last</b>.', exRu: 'Он всегда последний.' },
        { p: 'come on time', ru: 'прийти вовремя', ex: '<b>Come on time</b>, please.', exRu: 'Приди вовремя.' }
      ]
    },
    { verb: 'get', emoji: '🎁', meaning: 'ПОЛУЧАТЬ / СТАНОВИТЬСЯ',
      assoc: 'get + состояние / результат', note: 'get = получить, стать, заблудиться',
      senses: [
        { sense: 'БЕРЕМЕННА', ru: 'беременна', ex: 'She <b>got</b> pregnant.', exRu: 'Она забеременела.' },
        { sense: 'ЗАБЛУДИЛСЯ', ru: 'заблудился', ex: 'I <b>got</b> lost.', exRu: 'Я заблудился.' },
        { sense: 'ГОТОВ', ru: 'готов', ex: 'Get <b>ready</b>!', exRu: 'Приготовься!' },
        { sense: 'НАЧАТЬ', ru: 'начать', ex: 'Let\'s <b>get</b> started.', exRu: 'Давай начнём.' },
        { sense: 'РАБОТА', ru: 'работа', ex: 'She <b>got</b> a job.', exRu: 'Она нашла работу.' },
        { sense: 'ЖЕНАТ', ru: 'женат', ex: 'They <b>got</b> married.', exRu: 'Они поженились.' }
      ],
      phrases: [
        { p: 'get pregnant', ru: 'забеременеть', ex: 'She <b>got pregnant</b> last year.', exRu: 'Она забеременела.' },
        { p: 'get lost', ru: 'заблудиться', ex: 'I <b>got lost</b>.', exRu: 'Я заблудился.' },
        { p: 'get ready', ru: 'приготовиться', ex: '<b>Get ready</b> for school.', exRu: 'Приготовься.' },
        { p: 'get started', ru: 'начать', ex: 'Let\'s <b>get started</b>.', exRu: 'Давай начнём.' },
        { p: 'get a job', ru: 'найти работу', ex: 'I need to <b>get a job</b>.', exRu: 'Мне нужна работа.' },
        { p: 'get married', ru: 'пожениться', ex: 'They <b>got married</b> in May.', exRu: 'Они поженились в мае.' }
      ]
    },
    { verb: 'let me', emoji: '🙋', meaning: 'ДАЙ МНЕ / ПОЗВОЛЬ МНЕ',
      assoc: 'let me + глагол', note: 'let me = позволь мне, дай мне',
      senses: [
        { sense: 'ЗНАТЬ', ru: 'знать', ex: 'Let me <b>know</b>.', exRu: 'Дай знать.' },
        { sense: 'ПОДУМАТЬ', ru: 'подумать', ex: 'Let me <b>think</b>.', exRu: 'Дай подумать.' },
        { sense: 'ПОМОЧЬ', ru: 'помочь', ex: 'Let me <b>help you</b>.', exRu: 'Позволь помочь.' },
        { sense: 'УВИДЕТЬ', ru: 'увидеть', ex: 'Let me <b>see</b>.', exRu: 'Дай посмотреть.' },
        { sense: 'ОБЪЯСНИТЬ', ru: 'объяснить', ex: 'Let me <b>explain</b>.', exRu: 'Позволь объяснить.' }
      ],
      phrases: [
        { p: 'let me know', ru: 'дай знать', ex: '<b>Let me know</b> if you come.', exRu: 'Дай знать.' },
        { p: 'let me think', ru: 'дай подумать', ex: '<b>Let me think</b> for a moment.', exRu: 'Дай подумать.' },
        { p: 'let me help you', ru: 'позволь помочь', ex: '<b>Let me help you</b> with that.', exRu: 'Позволь помочь.' },
        { p: 'let me see', ru: 'дай посмотреть', ex: '<b>Let me see</b> your phone.', exRu: 'Дай телефон.' },
        { p: 'let me explain', ru: 'позволь объяснить', ex: '<b>Let me explain</b> what happened.', exRu: 'Позволь объяснить.' }
      ]
    },
    { verb: 'put', emoji: '📥', meaning: 'КЛАСТЬ / СТАВИТЬ',
      assoc: 'put + предлог = новое значение', note: 'put = класть, надевать, включать/выключать',
      senses: [
        { sense: 'ВЕС', ru: 'набрать вес', ex: 'He <b>put on</b> weight.', exRu: 'Он набрал вес.' },
        { sense: 'НАДЕТЬ', ru: 'надеть', ex: '<b>Put on</b> a jacket.', exRu: 'Надень куртку.' },
        { sense: 'МАКИЯЖ', ru: 'макияж', ex: 'She <b>puts on</b> makeup.', exRu: 'Она наносит макияж.' },
        { sense: 'СВЕТ', ru: 'выключить свет', ex: '<b>Put off</b> the lights.', exRu: 'Выключи свет.' },
        { sense: 'ВСТРЕЧА', ru: 'отложить встречу', ex: '<b>Put off</b> the meeting.', exRu: 'Отложи встречу.' }
      ],
      phrases: [
        { p: 'put on weight', ru: 'набрать вес', ex: 'Don\'t <b>put on weight</b>.', exRu: 'Не набирай вес.' },
        { p: 'put on a jacket', ru: 'надеть куртку', ex: '<b>Put on a jacket</b>.', exRu: 'Надень куртку.' },
        { p: 'put on makeup', ru: 'нанести макияж', ex: 'She <b>puts on makeup</b> daily.', exRu: 'Она наносит макияж.' },
        { p: 'put off the lights', ru: 'выключить свет', ex: '<b>Put off the lights</b>.', exRu: 'Выключи свет.' },
        { p: 'put off a meeting', ru: 'отложить встречу', ex: 'Let\'s <b>put off the meeting</b>.', exRu: 'Давай отложим встречу.' }
      ]
    }
);

// ───────────────────────────────────────────────────────────
// 2️⃣ 15 ПРЕДЛОГОВ МЕСТА
// ───────────────────────────────────────────────────────────
prefixes.push(
    { id: 'place-in', type: 'topic', affix: 'IN', emoji: '1️⃣',
      meaning: 'ПРЕДЛОГ МЕСТА', assoc: 'ВНУТРИ', explanation: 'Предмет находится внутри чего-то.',
      words: [
        { word: 'in the box', transcription: '[ɪn ðə bɒks]', trans: 'в коробке', ex: 'The cat is <b>in</b> the box.', exRu: 'Кошка в коробке.' }
      ]
    },
    { id: 'place-on', type: 'topic', affix: 'ON', emoji: '2️⃣',
      meaning: 'ПРЕДЛОГ МЕСТА', assoc: 'НА ПОВЕРХНОСТИ', explanation: 'Предмет на поверхности.',
      words: [
        { word: 'on the table', transcription: '[ɒn ðə ˈteɪbl]', trans: 'на столе', ex: 'The book is <b>on</b> the table.', exRu: 'Книга на столе.' }
      ]
    },
    { id: 'place-under', type: 'topic', affix: 'UNDER', emoji: '3️⃣',
      meaning: 'ПРЕДЛОГ МЕСТА', assoc: 'ПОД', explanation: 'Предмет ниже другого.',
      words: [
        { word: 'under the bed', transcription: '[ˈʌndə ðə bed]', trans: 'под кроватью', ex: 'The ball is <b>under</b> the bed.', exRu: 'Мяч под кроватью.' }
      ]
    },
    { id: 'place-nextto', type: 'topic', affix: 'NEXT TO', emoji: '4️⃣',
      meaning: 'ПРЕДЛОГ МЕСТА', assoc: 'РЯДОМ С', explanation: 'Предмет около другого.',
      words: [
        { word: 'next to me', transcription: '[nekst tə miː]', trans: 'рядом со мной', ex: 'Sit <b>next to me</b>.', exRu: 'Сядь рядом.' }
      ]
    },
    { id: 'place-behind', type: 'topic', affix: 'BEHIND', emoji: '5️⃣',
      meaning: 'ПРЕДЛОГ МЕСТА', assoc: 'ЗА (сзади)', explanation: 'Предмет позади другого.',
      words: [
        { word: 'behind the door', transcription: '[bɪˈhaɪnd ðə dɔː]', trans: 'за дверью', ex: 'The cat is <b>behind</b> the door.', exRu: 'Кошка за дверью.' }
      ]
    },
    { id: 'place-infof', type: 'topic', affix: 'IN FRONT OF', emoji: '6️⃣',
      meaning: 'ПРЕДЛОГ МЕСТА', assoc: 'ПЕРЕД', explanation: 'Предмет перед другим.',
      words: [
        { word: 'in front of the house', transcription: '[ɪn frʌnt əv ðə haʊs]', trans: 'перед домом', ex: 'A car is <b>in front of</b> the house.', exRu: 'Машина перед домом.' }
      ]
    },
    { id: 'place-between', type: 'topic', affix: 'BETWEEN', emoji: '7️⃣',
      meaning: 'ПРЕДЛОГ МЕСТА', assoc: 'МЕЖДУ', explanation: 'Предмет между двумя другими.',
      words: [
        { word: 'between two chairs', transcription: '[bɪˈtwiːn tuː tʃeəz]', trans: 'между двумя стульями', ex: 'The ball is <b>between</b> the chairs.', exRu: 'Мяч между стульями.' }
      ]
    },
    { id: 'place-near', type: 'topic', affix: 'NEAR', emoji: '8️⃣',
      meaning: 'ПРЕДЛОГ МЕСТА', assoc: 'БЛИЗКО', explanation: 'Предмет недалеко.',
      words: [
        { word: 'near the park', transcription: '[nɪə ðə pɑːk]', trans: 'около парка', ex: 'I live <b>near</b> the park.', exRu: 'Я живу около парка.' }
      ]
    },
    { id: 'place-above', type: 'topic', affix: 'ABOVE', emoji: '9️⃣',
      meaning: 'ПРЕДЛОГ МЕСТА', assoc: 'НАД (без касания)', explanation: 'Предмет выше другого.',
      words: [
        { word: 'above the clouds', transcription: '[əˈbʌv ðə klaʊdz]', trans: 'над облаками', ex: 'The plane is <b>above</b> the clouds.', exRu: 'Самолёт над облаками.' }
      ]
    },
    { id: 'place-below', type: 'topic', affix: 'BELOW', emoji: '🔟',
      meaning: 'ПРЕДЛОГ МЕСТА', assoc: 'НИЖЕ', explanation: 'Предмет ниже другого.',
      words: [
        { word: 'below zero', transcription: '[bɪˈləʊ ˈzɪərəʊ]', trans: 'ниже нуля', ex: 'It\'s <b>below</b> zero.', exRu: 'Ниже нуля.' }
      ]
    },
    { id: 'place-beside', type: 'topic', affix: 'BESIDE', emoji: '1️⃣1️⃣',
      meaning: 'ПРЕДЛОГ МЕСТА', assoc: 'РЯДОМ / ВОЗЛЕ', explanation: 'Предмет рядом.',
      words: [
        { word: 'beside me', transcription: '[bɪˈsaɪd miː]', trans: 'рядом со мной', ex: 'Walk <b>beside</b> me.', exRu: 'Иди рядом.' }
      ]
    },
    { id: 'place-inside', type: 'topic', affix: 'INSIDE', emoji: '1️⃣2️⃣',
      meaning: 'ПРЕДЛОГ МЕСТА', assoc: 'ВНУТРИ', explanation: 'Внутри здания.',
      words: [
        { word: 'inside the house', transcription: '[ɪnˈsaɪd ðə haʊs]', trans: 'внутри дома', ex: 'Wait <b>inside</b> the house.', exRu: 'Подожди в доме.' }
      ]
    },
    { id: 'place-outside', type: 'topic', affix: 'OUTSIDE', emoji: '1️⃣3️⃣',
      meaning: 'ПРЕДЛОГ МЕСТА', assoc: 'СНАРУЖИ', explanation: 'Снаружи здания.',
      words: [
        { word: 'outside the house', transcription: '[ˌaʊtˈsaɪd ðə haʊs]', trans: 'снаружи дома', ex: 'Wait <b>outside</b>.', exRu: 'Подожди снаружи.' }
      ]
    },
    { id: 'place-opposite', type: 'topic', affix: 'OPPOSITE', emoji: '1️⃣4️⃣',
      meaning: 'ПРЕДЛОГ МЕСТА', assoc: 'НАПРОТИВ', explanation: 'Прямо напротив.',
      words: [
        { word: 'opposite the bank', transcription: '[ˈɒpəzɪt ðə bæŋk]', trans: 'напротив банка', ex: 'The café is <b>opposite</b> the bank.', exRu: 'Кафе напротив банка.' }
      ]
    },
    { id: 'place-among', type: 'topic', affix: 'AMONG', emoji: '1️⃣5️⃣',
      meaning: 'ПРЕДЛОГ МЕСТА', assoc: 'СРЕДИ', explanation: 'Среди нескольких.',
      words: [
        { word: 'among friends', transcription: '[əˈmʌŋ frendz]', trans: 'среди друзей', ex: 'I\'m happy <b>among</b> friends.', exRu: 'Я счастлив среди друзей.' }
      ]
    }
);

// ───────────────────────────────────────────────────────────
// 3️⃣ GET — НА ОДНОМ ЛИСТЕ
// ───────────────────────────────────────────────────────────
magicVerbs.push(
    { verb: 'GET', emoji: '🎯', meaning: 'ЗАМЕНЯЕТ СОТНИ СЛОВ',
      assoc: 'ГЛАГОЛ GET — заменяет сотни слов!',
      note: '🎯 Одна короткая форма — десятки значений в речи.',
      senses: [
        { sense: 'ПОЛУЧАТЬ', ru: 'получать', ex: 'I <b>got</b> a letter.', exRu: 'Я получил письмо.' },
        { sense: 'СТАНОВИТЬСЯ', ru: 'становиться', ex: 'It <b>gets</b> dark at six.', exRu: 'Темнеет в шесть.' },
        { sense: 'ПОНИМАТЬ', ru: 'понимать', ex: 'I <b>get</b> it!', exRu: 'Я понимаю!' },
        { sense: 'ДОБИРАТЬСЯ', ru: 'добираться', ex: 'How do I <b>get</b> there?', exRu: 'Как добраться?' }
      ],
      phrases: [
        { p: 'get married', ru: 'жениться', ex: 'They <b>got married</b> in May.', exRu: 'Они поженились.' },
        { p: 'get ready', ru: 'готовиться', ex: '<b>Get ready</b> for school.', exRu: 'Приготовься.' },
        { p: 'get lost', ru: 'исчезни / потеряйся', ex: '<b>Get lost</b>!', exRu: 'Исчезни!' },
        { p: 'get used to', ru: 'привыкнуть', ex: 'I <b>got used to</b> it.', exRu: 'Я привык.' }
      ]
    }
);

memoryHooks.push(
    { affix: 'GET', emoji: '🎩', hint: '«I got you» = я тебя прикрою / поймал.' }
);

quickTips.push(
    { emoji: '❌', tip: '<b>I got to home</b> — неправильно. Правильно: <b>I got home</b>.' },
    { emoji: '🔄', tip: '«I\'m getting...» = процесс прямо сейчас.' },
    { emoji: '📜', tip: 'GET — неправильный глагол: <b>get – got – got</b>.' },
    { emoji: '🎯', tip: '<b>GET = ключ к беглой речи.</b>' }
);

flipCards.push(
    { front: 'GET', back: 'получать / становиться / понимать / добираться', emoji: '🎩', example: 'get – got – got' }
);

miniQuizzes.push({
    id: 'get-quiz', emoji: '🎩', title: 'GET — на одном листе',
    questions: [
        { q: 'Как правильно «Я добрался домой»?', options: ['I got to home', 'I got home', 'I get to home'], correct: 1, hint: 'Без "to" перед home!' },
        { q: 'Что значит «I got you»?', options: ['Я тебя получил', 'Я тебя прикрою / поймал', 'Я тебя люблю'], correct: 1, hint: 'Секретный смысл' },
        { q: 'Формы GET?', options: ['get – getted', 'get – got – got', 'get – gat – gut'], correct: 1, hint: 'Неправильный' },
        { q: '«Привыкнуть» — это...', options: ['get used to', 'get ready', 'get lost'], correct: 0, hint: 'used to = привычка' }
    ]
});

// ───────────────────────────────────────────────────────────
// 4️⃣ SAY / TELL / SPEAK / TALK
// ───────────────────────────────────────────────────────────
trapPairs.push(
    { id: 'say-tell-speak-talk', emoji: '🗣️', title: 'SAY / TELL / SPEAK / TALK',
      rule: 'SAY — что, TELL — кому, SPEAK — язык/формально, TALK — диалог',
      left: { word: 'SAY', emoji: '💬', meaning: 'сказать / произнести — акцент на самих словах',
        examples: [
          { en: '<b>Say</b> hello!', ru: 'Скажи привет!' },
          { en: '<b>Say to me</b> (если добавить человека — нужен TO).', ru: 'Скажи мне (с TO).' }
        ]
      },
      right: { word: 'TELL', emoji: '🗣️', meaning: 'рассказывать / сообщать — акцент на передаче информации',
        examples: [
          { en: '<b>Tell</b> me the truth.', ru: 'Скажи правду.' },
          { en: '<b>Tell + person</b> — всегда «кому».', ru: 'Tell + человек.' }
        ]
      }
    },
    { id: 'speak-talk-compare', emoji: '🎤💬', title: 'SPEAK vs TALK',
      rule: 'SPEAK — язык/официально. TALK — неформальный диалог',
      left: { word: 'SPEAK', emoji: '🎤', meaning: 'говорить на языке / официально',
        examples: [
          { en: 'I <b>speak</b> English.', ru: 'Я говорю по-английски.' },
          { en: '<b>Speak with</b> the manager.', ru: 'Поговорить с менеджером.' }
        ]
      },
      right: { word: 'TALK', emoji: '💬', meaning: 'болтать / общаться — неформально',
        examples: [
          { en: 'Let\'s <b>talk</b> about it.', ru: 'Давай обсудим.' },
          { en: '<b>Talk to</b> a friend.', ru: 'Поговорить с другом.' }
        ]
      }
    }
);

miniDialogues.push(
    { emoji: '💬', affix: 'say', title: 'SAY — сказать слова', lines: [
        { who: 'A', en: '<b>Say</b> cheese!', ru: 'Скажи «сыр»!' },
        { who: 'B', en: 'Cheese!', ru: 'Сыр!' },
        { who: 'A', en: 'You didn\'t <b>say</b> it loudly.', ru: 'Ты сказал это не громко.' }
      ]
    },
    { emoji: '🗣️', affix: 'tell', title: 'TELL — рассказать кому-то', lines: [
        { who: 'A', en: '<b>Tell</b> me a story.', ru: 'Расскажи историю.' },
        { who: 'B', en: 'OK, once upon a time...', ru: 'Хорошо, жили-были...' },
        { who: 'A', en: 'Thanks for <b>telling</b> me.', ru: 'Спасибо, что рассказал.' }
      ]
    },
    { emoji: '🎤', affix: 'speak', title: 'SPEAK — говорить на языке', lines: [
        { who: 'A', en: 'Do you <b>speak</b> English?', ru: 'Ты говоришь по-английски?' },
        { who: 'B', en: 'Yes, a little.', ru: 'Да, немного.' },
        { who: 'A', en: 'Can I <b>speak with</b> the manager?', ru: 'Можно поговорить с менеджером?' }
      ]
    },
    { emoji: '💬', affix: 'talk', title: 'TALK — неформально поговорить', lines: [
        { who: 'A', en: 'Can we <b>talk</b>?', ru: 'Можем поговорить?' },
        { who: 'B', en: 'Sure, let\'s <b>talk</b> about it.', ru: 'Конечно, обсудим.' },
        { who: 'A', en: 'I like <b>talking to</b> you.', ru: 'Мне нравится с тобой говорить.' }
      ]
    }
);

miniQuizzes.push({
    id: 'say-tell-speak-talk-quiz', emoji: '🗣️', title: 'SAY / TELL / SPEAK / TALK',
    questions: [
        { q: '«<b>___ me the truth</b>»', options: ['Say', 'Tell', 'Speak', 'Talk'], correct: 1, hint: 'tell + человек' },
        { q: '«<b>___ hello!</b>»', options: ['Say', 'Tell', 'Speak', 'Talk'], correct: 0, hint: 'say + что' },
        { q: '«I <b>___</b> English»', options: ['say', 'tell', 'speak', 'talk'], correct: 2, hint: 'speak + язык' },
        { q: '«Let\'s <b>___</b> about it»', options: ['say', 'tell', 'speak', 'talk'], correct: 3, hint: 'talk — диалог' },
        { q: 'Как правильно?', options: ['Say to me', 'Tell to me', 'Say me', 'Tell me'], correct: 3, hint: 'tell me — без to' },
        { q: 'Как правильно?', options: ['I speak with English', 'I speak English', 'I talk English', 'I tell English'], correct: 1, hint: 'speak English' }
    ]
});

quickTips.push(
    { emoji: '💬', tip: '<b>SAY</b> — что говорим: say hello.' },
    { emoji: '🗣️', tip: '<b>TELL</b> — кому говорим: tell me. Без <b>to</b>!' },
    { emoji: '🎤', tip: '<b>SPEAK</b> — язык: speak English.' },
    { emoji: '💬', tip: '<b>TALK</b> — неформальный диалог: talk to a friend.' },
    { emoji: '⚠️', tip: 'С <b>say</b> человек через <b>to</b>. С <b>tell</b> — без <b>to</b>.' }
);

flipCards.push(
    { front: 'SAY',   back: 'сказать (слова)',           emoji: '💬', example: 'Say hello!' },
    { front: 'TELL',  back: 'рассказать (кому-то)',      emoji: '🗣️', example: 'Tell me the truth.' },
    { front: 'SPEAK', back: 'говорить на языке',         emoji: '🎤', example: 'I speak English.' },
    { front: 'TALK',  back: 'общаться (диалог)',         emoji: '💬', example: 'Let\'s talk about it.' }
);

commonMistakes.push(
    { wrong: 'Tell to me', right: 'Tell me', why: 'После tell — БЕЗ to' },
    { wrong: 'Say me',     right: 'Say to me', why: 'После say — через to' },
    { wrong: 'I speak with English', right: 'I speak English', why: 'speak + язык без предлога' },
    { wrong: 'I talk English', right: 'I speak English', why: 'Про язык — speak' },
    { wrong: 'He say me',  right: 'He tells me', why: 'tell + человек' }
);

// ───────────────────────────────────────────────────────────
// 5️⃣ 30 НАРЕЧИЙ ВЫЖИВАНИЯ
// ───────────────────────────────────────────────────────────
prefixes.push(
    { id: 'adverbs-survival', type: 'topic', affix: '30 ADVERBS', emoji: '🌍',
      meaning: 'НАРЕЧИЯ, ЧТОБЫ ВЫЖИТЬ ЗА ГРАНИЦЕЙ',
      assoc: 'Inter Glossa: small words — big results!',
      explanation: 'Самые нужные наречия.',
      words: [
        { word: 'quickly',      transcription: '[ˈkwɪkli]',       trans: 'быстро',                ex: 'Come <b>quickly</b>!',              exRu: 'Приходи быстро!' },
        { word: 'slowly',       transcription: '[ˈsləʊli]',        trans: 'медленно',              ex: 'Speak <b>slowly</b>.',             exRu: 'Говори медленно.' },
        { word: 'carefully',    transcription: '[ˈkeəfəli]',       trans: 'осторожно',             ex: 'Drive <b>carefully</b>.',         exRu: 'Веди осторожно.' },
        { word: 'easily',       transcription: '[ˈiːzəli]',        trans: 'легко',                 ex: 'You can do it <b>easily</b>.',     exRu: 'Можешь сделать легко.' },
        { word: 'hard',         transcription: '[hɑːd]',           trans: 'усердно / сильно',      ex: 'Work <b>hard</b>.',                exRu: 'Работай усердно.' },
        { word: 'well',         transcription: '[wel]',            trans: 'хорошо',                ex: 'He sings <b>well</b>.',            exRu: 'Он хорошо поёт.' },
        { word: 'badly',        transcription: '[ˈbædli]',         trans: 'плохо',                 ex: 'She slept <b>badly</b>.',          exRu: 'Она плохо спала.' },
        { word: 'usually',      transcription: '[ˈjuːʒuəli]',      trans: 'обычно',                ex: 'I <b>usually</b> get up at 7.',    exRu: 'Я обычно встаю в 7.' },
        { word: 'always',       transcription: '[ˈɔːlweɪz]',       trans: 'всегда',                ex: 'He is <b>always</b> late.',        exRu: 'Он всегда опаздывает.' },
        { word: 'never',        transcription: '[ˈnevə]',          trans: 'никогда',               ex: 'I <b>never</b> smoke.',            exRu: 'Я никогда не курю.' },
        { word: 'sometimes',    transcription: '[ˈsʌmtaɪmz]',      trans: 'иногда',                ex: 'I <b>sometimes</b> read.',         exRu: 'Я иногда читаю.' },
        { word: 'often',        transcription: '[ˈɒfn]',           trans: 'часто',                 ex: 'We <b>often</b> meet.',            exRu: 'Мы часто встречаемся.' },
        { word: 'rarely',       transcription: '[ˈreəli]',         trans: 'редко',                 ex: 'He <b>rarely</b> calls.',          exRu: 'Он редко звонит.' },
        { word: 'soon',         transcription: '[suːn]',           trans: 'скоро',                 ex: 'See you <b>soon</b>.',             exRu: 'До скорого.' },
        { word: 'now',          transcription: '[naʊ]',            trans: 'сейчас',                ex: 'I need it <b>now</b>.',            exRu: 'Нужно сейчас.' },
        { word: 'yesterday',    transcription: '[ˈjestədeɪ]',      trans: 'вчера',                 ex: 'I saw him <b>yesterday</b>.',      exRu: 'Видел его вчера.' },
        { word: 'tomorrow',     transcription: '[təˈmɒrəʊ]',       trans: 'завтра',                ex: 'I\'ll call <b>tomorrow</b>.',      exRu: 'Позвоню завтра.' },
        { word: 'here',         transcription: '[hɪə]',            trans: 'здесь',                 ex: 'Stay <b>here</b>.',                exRu: 'Оставайся здесь.' },
        { word: 'there',        transcription: '[ðeə]',            trans: 'там',                   ex: 'Look <b>there</b>!',               exRu: 'Посмотри туда!' },
        { word: 'outside',      transcription: '[ˌaʊtˈsaɪd]',      trans: 'на улице',              ex: 'Wait <b>outside</b>.',             exRu: 'Подожди на улице.' },
        { word: 'inside',       transcription: '[ɪnˈsaɪd]',        trans: 'внутри',                ex: 'Go <b>inside</b>.',                exRu: 'Зайди внутрь.' },
        { word: 'nearby',       transcription: '[ˌnɪəˈbaɪ]',       trans: 'поблизости',            ex: 'A shop <b>nearby</b>?',            exRu: 'Магазин поблизости?' },
        { word: 'far',          transcription: '[fɑː]',            trans: 'далеко',                ex: 'Too <b>far</b>.',                  exRu: 'Слишком далеко.' },
        { word: 'clearly',      transcription: '[ˈklɪəli]',        trans: 'ясно / чётко',          ex: 'Speak <b>clearly</b>.',            exRu: 'Говори чётко.' },
        { word: 'quietly',      transcription: '[ˈkwaɪətli]',      trans: 'тихо',                  ex: 'Walk <b>quietly</b>.',             exRu: 'Иди тихо.' },
        { word: 'loudly',       transcription: '[ˈlaʊdli]',        trans: 'громко',                ex: 'Don\'t talk <b>loudly</b>.',       exRu: 'Не говори громко.' },
        { word: 'probably',     transcription: '[ˈprɒbəbli]',      trans: 'вероятно',              ex: 'He\'ll <b>probably</b> come.',     exRu: 'Он вероятно придёт.' },
        { word: 'definitely',   transcription: '[ˈdefɪnətli]',     trans: 'определённо',           ex: 'I\'ll <b>definitely</b> come.',    exRu: 'Я точно приду.' },
        { word: 'almost',       transcription: '[ˈɔːlməʊst]',      trans: 'почти',                 ex: 'I\'m <b>almost</b> ready.',        exRu: 'Я почти готов.' },
        { word: 'outside',      transcription: '[ˌaʊtˈsaɪd]',      trans: 'на улице',              ex: 'Cold <b>outside</b>.',             exRu: 'Холодно на улице.' }
      ]
    }
);

miniQuizzes.push({
    id: 'adverbs-survival-quiz', emoji: '🌍', title: '30 наречий за границей',
    questions: [
        { q: 'Как сказать «быстро»?', options: ['slowly', 'quickly', 'carefully'], correct: 1, hint: 'quick → quickly' },
        { q: '«yesterday» — это...', options: ['завтра', 'вчера', 'сейчас'], correct: 1, hint: 'Прошлое' },
        { q: '«поблизости» — это...', options: ['far', 'nearby', 'there'], correct: 1, hint: 'near + by' },
        { q: '«rarely» — это...', options: ['часто', 'редко', 'никогда'], correct: 1, hint: 'Противоположно often' },
        { q: '«осторожно» — это...', options: ['clearly', 'carefully', 'easily'], correct: 1, hint: 'care → carefully' },
        { q: '«almost» — это...', options: ['почти', 'совсем', 'точно'], correct: 0, hint: 'Очень близко' },
        { q: '«усердно работать» — это...', options: ['work well', 'work hard', 'work badly'], correct: 1, hint: 'hard = усердно' },
        { q: '«inside» — это...', options: ['снаружи', 'внутри', 'далеко'], correct: 1, hint: 'Противоположно outside' }
    ]
});

flipCards.push(
    { front: 'quickly',    back: 'быстро',              emoji: '⚡', example: 'Come quickly!' },
    { front: 'slowly',     back: 'медленно',            emoji: '🐢', example: 'Speak slowly.' },
    { front: 'carefully',  back: 'осторожно',           emoji: '🧐', example: 'Drive carefully.' },
    { front: 'easily',     back: 'легко',               emoji: '🪶', example: 'Do it easily.' },
    { front: 'hard',       back: 'усердно / сильно',    emoji: '💪', example: 'Work hard.' },
    { front: 'well',       back: 'хорошо',              emoji: '👍', example: 'He sings well.' },
    { front: 'badly',      back: 'плохо',               emoji: '👎', example: 'She slept badly.' },
    { front: 'usually',    back: 'обычно',              emoji: '🔁', example: 'I usually get up at 7.' },
    { front: 'always',     back: 'всегда',              emoji: '♾️', example: 'He is always late.' },
    { front: 'never',      back: 'никогда',             emoji: '🚫', example: 'I never smoke.' },
    { front: 'sometimes',  back: 'иногда',              emoji: '🎲', example: 'I sometimes read.' },
    { front: 'often',      back: 'часто',               emoji: '📈', example: 'We often meet.' },
    { front: 'rarely',     back: 'редко',               emoji: '🌘', example: 'He rarely calls.' },
    { front: 'soon',       back: 'скоро',               emoji: '⏩', example: 'See you soon.' },
    { front: 'now',        back: 'сейчас',              emoji: '▶️', example: 'I need it now.' },
    { front: 'yesterday',  back: 'вчера',               emoji: '⏪', example: 'I saw him yesterday.' },
    { front: 'tomorrow',   back: 'завтра',              emoji: '🌤️', example: 'I will call tomorrow.' },
    { front: 'here',       back: 'здесь',               emoji: '📍', example: 'Stay here.' },
    { front: 'there',      back: 'там',                 emoji: '📌', example: 'Look there!' },
    { front: 'outside',    back: 'на улице',            emoji: '🌳', example: 'Wait outside.' },
    { front: 'inside',     back: 'внутри',              emoji: '🏠', example: 'Go inside.' },
    { front: 'nearby',     back: 'поблизости',          emoji: '🏘️', example: 'A shop nearby?' },
    { front: 'far',        back: 'далеко',              emoji: '🛣️', example: 'It is too far.' },
    { front: 'clearly',    back: 'ясно / чётко',        emoji: '🔊', example: 'Speak clearly.' },
    { front: 'quietly',    back: 'тихо',                emoji: '🤫', example: 'Walk quietly.' },
    { front: 'loudly',     back: 'громко',              emoji: '📣', example: 'Don\'t talk loudly.' },
    { front: 'probably',   back: 'вероятно',            emoji: '🤔', example: 'He will probably come.' },
    { front: 'definitely', back: 'определённо',         emoji: '✅', example: 'I will definitely come.' },
    { front: 'almost',     back: 'почти',               emoji: '🔜', example: 'I am almost ready.' }
);

quickTips.push(
    { emoji: '📌', tip: '<b>WORK HARD</b> = работать усердно. НЕ «тяжело»!' },
    { emoji: '📌', tip: '<b>GOOD vs WELL:</b> good — прилагательное, well — наречие.' },
    { emoji: '📌', tip: '<b>ALWAYS / NEVER</b> — 100%. <b>OFTEN</b> — часто. <b>RARELY</b> — редко.' },
    { emoji: '📌', tip: '<b>HERE</b> — здесь. <b>THERE</b> — там.' },
    { emoji: '📌', tip: '<b>INSIDE / OUTSIDE</b> — внутри/снаружи. <b>NEARBY</b> — поблизости. <b>FAR</b> — далеко.' }
);

// ───────────────────────────────────────────────────────────
// 6️⃣ ДИАЛОГИ 6×5 — HOW ARE YOU / WHAT ARE YOU DOING / WHERE /
//    BUSY / DID TODAY / DO YOU DO
// ───────────────────────────────────────────────────────────
miniDialogues.push(
    // How are you? — 5 ответов
    { emoji: '😊', affix: 'How are you?', title: 'Как ты? — ответ 1', lines: [
        { who: 'A', en: 'How are you?', ru: 'Как ты?' },
        { who: 'B', en: 'I\'m <b>fine</b>, thank you.', ru: 'Я в порядке, спасибо.' }
      ]
    },
    { emoji: '😊', affix: 'How are you?', title: 'Как ты? — ответ 2', lines: [
        { who: 'A', en: 'How are you?', ru: 'Как ты?' },
        { who: 'B', en: 'I\'m doing <b>great</b>!', ru: 'У меня всё отлично!' }
      ]
    },
    { emoji: '😊', affix: 'How are you?', title: 'Как ты? — ответ 3', lines: [
        { who: 'A', en: 'How are you?', ru: 'Как ты?' },
        { who: 'B', en: 'I\'m <b>pretty good</b>, thanks.', ru: 'Довольно хорошо.' }
      ]
    },
    { emoji: '😊', affix: 'How are you?', title: 'Как ты? — ответ 4', lines: [
        { who: 'A', en: 'How are you?', ru: 'Как ты?' },
        { who: 'B', en: 'I\'m doing <b>well</b>.', ru: 'Всё хорошо.' }
      ]
    },
    { emoji: '😊', affix: 'How are you?', title: 'Как ты? — ответ 5', lines: [
        { who: 'A', en: 'How are you?', ru: 'Как ты?' },
        { who: 'B', en: 'I\'m feeling <b>fantastic</b> today.', ru: 'Чувствую себя фантастически.' }
      ]
    },
    // What are you doing? — 5 ответов
    { emoji: '🎬', affix: 'What are you doing?', title: 'Что делаешь? — ответ 1', lines: [
        { who: 'A', en: 'What are you doing?', ru: 'Что делаешь?' },
        { who: 'B', en: 'I\'m <b>working</b> right now.', ru: 'Я сейчас работаю.' }
      ]
    },
    { emoji: '🎬', affix: 'What are you doing?', title: 'Что делаешь? — ответ 2', lines: [
        { who: 'A', en: 'What are you doing?', ru: 'Что делаешь?' },
        { who: 'B', en: 'I\'m <b>studying</b>.', ru: 'Я учусь.' }
      ]
    },
    { emoji: '🎬', affix: 'What are you doing?', title: 'Что делаешь? — ответ 3', lines: [
        { who: 'A', en: 'What are you doing?', ru: 'Что делаешь?' },
        { who: 'B', en: 'I\'m just <b>relaxing</b>.', ru: 'Просто отдыхаю.' }
      ]
    },
    { emoji: '🎬', affix: 'What are you doing?', title: 'Что делаешь? — ответ 4', lines: [
        { who: 'A', en: 'What are you doing?', ru: 'Что делаешь?' },
        { who: 'B', en: 'I\'m <b>watching a movie</b>.', ru: 'Смотрю фильм.' }
      ]
    },
    { emoji: '🎬', affix: 'What are you doing?', title: 'Что делаешь? — ответ 5', lines: [
        { who: 'A', en: 'What are you doing?', ru: 'Что делаешь?' },
        { who: 'B', en: 'I\'m <b>getting ready to go out</b>.', ru: 'Собираюсь выйти.' }
      ]
    },
    // Where are you going? — 5 ответов
    { emoji: '🚶', affix: 'Where are you going?', title: 'Куда идёшь? — ответ 1', lines: [
        { who: 'A', en: 'Where are you going?', ru: 'Куда идёшь?' },
        { who: 'B', en: 'I\'m <b>going home</b>.', ru: 'Иду домой.' }
      ]
    },
    { emoji: '🚶', affix: 'Where are you going?', title: 'Куда идёшь? — ответ 2', lines: [
        { who: 'A', en: 'Where are you going?', ru: 'Куда идёшь?' },
        { who: 'B', en: 'I\'m <b>heading to work</b>.', ru: 'Направляюсь на работу.' }
      ]
    },
    { emoji: '🚶', affix: 'Where are you going?', title: 'Куда идёшь? — ответ 3', lines: [
        { who: 'A', en: 'Where are you going?', ru: 'Куда идёшь?' },
        { who: 'B', en: 'I\'m going to the <b>market</b>.', ru: 'Иду на рынок.' }
      ]
    },
    { emoji: '🚶', affix: 'Where are you going?', title: 'Куда идёшь? — ответ 4', lines: [
        { who: 'A', en: 'Where are you going?', ru: 'Куда идёшь?' },
        { who: 'B', en: 'I\'m off to <b>meet a friend</b>.', ru: 'Иду встречать друга.' }
      ]
    },
    { emoji: '🚶', affix: 'Where are you going?', title: 'Куда идёшь? — ответ 5', lines: [
        { who: 'A', en: 'Where are you going?', ru: 'Куда идёшь?' },
        { who: 'B', en: 'I\'m on my way to the <b>gym</b>.', ru: 'Иду в спортзал.' }
      ]
    },
    // Are you busy? — 5 ответов
    { emoji: '📋', affix: 'Are you busy?', title: 'Ты занят? — ответ 1', lines: [
        { who: 'A', en: 'Are you busy?', ru: 'Ты занят?' },
        { who: 'B', en: 'Yes, I\'m <b>quite busy</b>.', ru: 'Да, довольно занят.' }
      ]
    },
    { emoji: '📋', affix: 'Are you busy?', title: 'Ты занят? — ответ 2', lines: [
        { who: 'A', en: 'Are you busy?', ru: 'Ты занят?' },
        { who: 'B', en: '<b>Not really</b>.', ru: 'Не особо.' }
      ]
    },
    { emoji: '📋', affix: 'Are you busy?', title: 'Ты занят? — ответ 3', lines: [
        { who: 'A', en: 'Are you busy?', ru: 'Ты занят?' },
        { who: 'B', en: 'I\'m a <b>little busy</b> right now.', ru: 'Немного занят.' }
      ]
    },
    { emoji: '📋', affix: 'Are you busy?', title: 'Ты занят? — ответ 4', lines: [
        { who: 'A', en: 'Are you busy?', ru: 'Ты занят?' },
        { who: 'B', en: 'I have a <b>few things</b> to finish.', ru: 'Пара дел осталось.' }
      ]
    },
    { emoji: '📋', affix: 'Are you busy?', title: 'Ты занят? — ответ 5', lines: [
        { who: 'A', en: 'Are you busy?', ru: 'Ты занят?' },
        { who: 'B', en: 'I\'m <b>free at the moment</b>.', ru: 'Свободен сейчас.' }
      ]
    },
    // What did you do today? — 5 ответов
    { emoji: '🌅', affix: 'What did you do today?', title: 'Что делал? — ответ 1', lines: [
        { who: 'A', en: 'What did you do today?', ru: 'Что делал сегодня?' },
        { who: 'B', en: 'I <b>went to work</b>.', ru: 'Ходил на работу.' }
      ]
    },
    { emoji: '🌅', affix: 'What did you do today?', title: 'Что делал? — ответ 2', lines: [
        { who: 'A', en: 'What did you do today?', ru: 'Что делал сегодня?' },
        { who: 'B', en: 'I <b>studied</b> for a few hours.', ru: 'Учился пару часов.' }
      ]
    },
    { emoji: '🌅', affix: 'What did you do today?', title: 'Что делал? — ответ 3', lines: [
        { who: 'A', en: 'What did you do today?', ru: 'Что делал сегодня?' },
        { who: 'B', en: 'I <b>stayed home</b> and relaxed.', ru: 'Остался дома и расслабился.' }
      ]
    },
    { emoji: '🌅', affix: 'What did you do today?', title: 'Что делал? — ответ 4', lines: [
        { who: 'A', en: 'What did you do today?', ru: 'Что делал сегодня?' },
        { who: 'B', en: 'I <b>met some friends</b>.', ru: 'Встретился с друзьями.' }
      ]
    },
    { emoji: '🌅', affix: 'What did you do today?', title: 'Что делал? — ответ 5', lines: [
        { who: 'A', en: 'What did you do today?', ru: 'Что делал сегодня?' },
        { who: 'B', en: 'I <b>finished</b> a lot of work.', ru: 'Закончил много работы.' }
      ]
    },
    // What do you do? — 5 ответов
    { emoji: '💼', affix: 'What do you do?', title: 'Кем работаешь? — ответ 1', lines: [
        { who: 'A', en: 'What do you do?', ru: 'Кем работаешь?' },
        { who: 'B', en: 'I\'m a <b>teacher</b>.', ru: 'Я учитель.' }
      ]
    },
    { emoji: '💼', affix: 'What do you do?', title: 'Кем работаешь? — ответ 2', lines: [
        { who: 'A', en: 'What do you do?', ru: 'Кем работаешь?' },
        { who: 'B', en: 'I work in a <b>bank</b>.', ru: 'Я работаю в банке.' }
      ]
    },
    { emoji: '💼', affix: 'What do you do?', title: 'Кем работаешь? — ответ 3', lines: [
        { who: 'A', en: 'What do you do?', ru: 'Кем работаешь?' },
        { who: 'B', en: 'I\'m a <b>student</b>.', ru: 'Я студент.' }
      ]
    },
    { emoji: '💼', affix: 'What do you do?', title: 'Кем работаешь? — ответ 4', lines: [
        { who: 'A', en: 'What do you do?', ru: 'Кем работаешь?' },
        { who: 'B', en: 'I run my <b>own business</b>.', ru: 'У меня свой бизнес.' }
      ]
    },
    { emoji: '💼', affix: 'What do you do?', title: 'Кем работаешь? — ответ 5', lines: [
        { who: 'A', en: 'What do you do?', ru: 'Кем работаешь?' },
        { who: 'B', en: 'I work as a <b>software dev</b>.', ru: 'Работаю разработчиком ПО.' }
      ]
    }
);

// ───────────────────────────────────────────────────────────
// 7️⃣ 10 ПАР «NEVER CONFUSE»
// ───────────────────────────────────────────────────────────
twinWords.push(
    { id: 'affect-effect-never', emoji: '🌊🎯', title: 'AFFECT vs EFFECT', rule: 'Влиять (глагол) / Результат (сущ.)',
      left: { word: 'AFFECT', emoji: '🌊', pos: 'verb', meaning: 'To influence or have an effect on something.',
        examples: [{ en: 'Stress can <b>affect</b> your sleep.', ru: 'Стресс влияет на сон.' }] },
      right: { word: 'EFFECT', emoji: '🎯', pos: 'noun', meaning: 'A result or outcome.',
        examples: [{ en: 'The medicine had a positive <b>effect</b>.', ru: 'Лекарство дало положительный эффект.' }] }
    },
    { id: 'advice-advise-never', emoji: '💬✅', title: 'ADVICE vs ADVISE', rule: 'Совет (сущ.) / Советовать (глаг.)',
      left: { word: 'ADVICE', emoji: '💬', pos: 'noun', meaning: 'A suggestion or an opinion.',
        examples: [{ en: 'She gave me useful <b>advice</b>.', ru: 'Она дала мне полезный совет.' }] },
      right: { word: 'ADVISE', emoji: '✅', pos: 'verb', meaning: 'To give advice or suggest.',
        examples: [{ en: 'I <b>advise</b> you to practice daily.', ru: 'Советую практиковаться.' }] }
    },
    { id: 'accept-except-never', emoji: '✅🚫', title: 'ACCEPT vs EXCEPT', rule: 'Принимать / Кроме',
      left: { word: 'ACCEPT', emoji: '✅', pos: 'verb', meaning: 'To receive or agree to something.',
        examples: [{ en: 'He <b>accepted</b> the offer.', ru: 'Он принял предложение.' }] },
      right: { word: 'EXCEPT', emoji: '🚫', pos: 'preposition', meaning: 'Leaving out or not including.',
        examples: [{ en: 'Everyone came <b>except</b> John.', ru: 'Все пришли, кроме Джона.' }] }
    },
    { id: 'than-then-never', emoji: '🆚⏰', title: 'THAN vs THEN', rule: 'Чем / Тогда',
      left: { word: 'THAN', emoji: '🆚', pos: 'conjunction', meaning: 'Used for comparison.',
        examples: [{ en: 'She is taller <b>than</b> me.', ru: 'Она выше меня.' }] },
      right: { word: 'THEN', emoji: '⏰', pos: 'adverb', meaning: 'At that time or next.',
        examples: [{ en: 'Finish, <b>then</b> relax.', ru: 'Закончи, потом отдохни.' }] }
    },
    { id: 'lose-loose-never', emoji: '😢👖', title: 'LOSE vs LOOSE', rule: 'Терять / Свободный',
      left: { word: 'LOSE', emoji: '😢', pos: 'verb', meaning: 'Misplace or not win.',
        examples: [{ en: 'Don\'t <b>lose</b> your keys.', ru: 'Не теряй ключи.' }] },
      right: { word: 'LOOSE', emoji: '👖', pos: 'adjective', meaning: 'Not tight.',
        examples: [{ en: 'The shirt is too <b>loose</b>.', ru: 'Рубашка слишком свободная.' }] }
    },
    { id: 'quiet-quite-never', emoji: '🤫✅', title: 'QUIET vs QUITE', rule: 'Тихий / Довольно',
      left: { word: 'QUIET', emoji: '🤫', pos: 'adjective', meaning: 'Making little or no noise.',
        examples: [{ en: 'Please keep <b>quiet</b>.', ru: 'Соблюдай тишину.' }] },
      right: { word: 'QUITE', emoji: '✅', pos: 'adverb', meaning: 'Fairly, very, or to some extent.',
        examples: [{ en: 'The movie was <b>quite</b> interesting.', ru: 'Фильм был довольно интересным.' }] }
    },
    { id: 'your-youre-never', emoji: '👤✅', title: 'YOUR vs YOU\'RE', rule: 'Твой / Ты есть',
      left: { word: 'YOUR', emoji: '👤', pos: 'possessive', meaning: 'Belonging to you.',
        examples: [{ en: '<b>Your</b> book is here.', ru: 'Твоя книга здесь.' }] },
      right: { word: 'YOU\'RE', emoji: '✅', pos: 'contraction', meaning: 'You are.',
        examples: [{ en: '<b>You\'re</b> right!', ru: 'Ты прав!' }] }
    },
    { id: 'its-its-never', emoji: '🐾✅', title: 'ITS vs IT\'S', rule: 'Его/её / Это есть',
      left: { word: 'ITS', emoji: '🐾', pos: 'possessive', meaning: 'Belonging to it.',
        examples: [{ en: 'The cat licked <b>its</b> paw.', ru: 'Кошка лизала лапу.' }] },
      right: { word: 'IT\'S', emoji: '✅', pos: 'contraction', meaning: 'It is.',
        examples: [{ en: '<b>It\'s</b> cold outside.', ru: 'На улице холодно.' }] }
    },
    { id: 'lend-borrow-never', emoji: '🎁🤲', title: 'LEND vs BORROW', rule: 'Дать / Взять взаймы',
      left: { word: 'LEND', emoji: '🎁', pos: 'verb', meaning: 'To give something temporarily.',
        examples: [{ en: 'Can you <b>lend</b> me a pen?', ru: 'Можешь дать ручку?' }] },
      right: { word: 'BORROW', emoji: '🤲', pos: 'verb', meaning: 'To take something temporarily.',
        examples: [{ en: 'Can I <b>borrow</b> your pen?', ru: 'Можно взять ручку?' }] }
    },
    { id: 'lay-lie-never', emoji: '🛏️🧍', title: 'LAY vs LIE', rule: 'Класть (с объектом) / Лежать (сам)',
      left: { word: 'LAY', emoji: '🛏️', pos: 'verb', meaning: 'To put something down.',
        examples: [{ en: '<b>Lay</b> the book on the table.', ru: 'Положи книгу на стол.' }] },
      right: { word: 'LIE', emoji: '🧍', pos: 'verb', meaning: 'To rest flat.',
        examples: [{ en: '<b>Lie</b> on the bed.', ru: 'Ляг на кровать.' }] }
    }
);

// ───────────────────────────────────────────────────────────
// 8️⃣ 5 СПОСОБОВ СКАЗАТЬ «VERY GOOD»
// ───────────────────────────────────────────────────────────
magicWords.push(
    { word: 'Excellent!', emoji: '🌟', ru: 'Отлично!',
      note: 'Вместо "very good" — "excellent".',
      examples: [{ ex: 'Your work is <b>excellent</b>!', exRu: 'Твоя работа отличная!' }] },
    { word: 'Outstanding!', emoji: '🏆', ru: 'Выдающе!',
      note: 'Вместо "very good" — "outstanding".',
      examples: [{ ex: 'You did an <b>outstanding</b> job!', exRu: 'Ты проделал выдающуюся работу!' }] },
    { word: 'Fantastic!', emoji: '🎉', ru: 'Фантастически!',
      note: 'Вместо "very good" — "fantastic".',
      examples: [{ ex: 'That\'s a <b>fantastic</b> idea!', exRu: 'Фантастическая идея!' }] },
    { word: 'Impressive!', emoji: '👏', ru: 'Впечатляюще!',
      note: 'Вместо "very good" — "impressive".',
      examples: [{ ex: 'Your progress is <b>impressive</b>!', exRu: 'Твой прогресс впечатляет!' }] },
    { word: 'Amazing!', emoji: '🤩', ru: 'Изумительно!',
      note: 'Вместо "very good" — "amazing".',
      examples: [{ ex: 'You are doing <b>amazing</b>!', exRu: 'Ты изумительно справляешься!' }] }
);

// ───────────────────────────────────────────────────────────
// 9️⃣ 10 СПОСОБОВ СКАЗАТЬ «GOOD NIGHT»
// ───────────────────────────────────────────────────────────
survivalPhrases.push(
    { en: 'Sleep well!', ru: 'Спи хорошо!' },
    { en: 'Sweet dreams!', ru: 'Сладких снов!' },
    { en: 'Have a good night!', ru: 'Спокойной ночи!' },
    { en: 'Rest well!', ru: 'Отдохни хорошо!' },
    { en: 'Take care!', ru: 'Береги себя!' },
    { en: 'Night, night!', ru: 'Спокойной ночи! (неформально)' },
    { en: 'Get a good night\'s sleep!', ru: 'Хорошо выспись!' },
    { en: 'Have a restful night!', ru: 'Спокойной ночи и мирного утра!' },
    { en: 'Sleep tight!', ru: 'Спи крепко!' },
    { en: 'See you tomorrow! Good night!', ru: 'До завтра! Спокойной ночи!' }
);

// ───────────────────────────────────────────────────────────
// 🔟 9 ТИПОВ ПРИЛАГАТЕЛЬНЫХ
// ───────────────────────────────────────────────────────────
prefixes.push(
    { id: 'adj-quality', type: 'topic', affix: 'Adjectives of Quality', emoji: '💎', meaning: 'ПРИЛАГАТЕЛЬНЫЕ КАЧЕСТВА',
      assoc: 'Describe the quality or character of a noun', explanation: 'Описывают качество или характер.',
      words: [
        { word: 'beautiful', transcription: '[ˈbjuːtɪfl]', trans: 'красивый', ex: 'A <b>beautiful</b> flower.', exRu: 'Красивый цветок.' },
        { word: 'honest', transcription: '[ˈɒnɪst]', trans: 'честный', ex: 'An <b>honest</b> answer.', exRu: 'Честный ответ.' },
        { word: 'clever', transcription: '[ˈklevə]', trans: 'умный', ex: 'A <b>clever</b> child.', exRu: 'Умный ребёнок.' },
        { word: 'brave', transcription: '[breɪv]', trans: 'смелый', ex: 'A <b>brave</b> soldier.', exRu: 'Смелый солдат.' },
        { word: 'kind', transcription: '[kaɪnd]', trans: 'добрый', ex: 'A <b>kind</b> person.', exRu: 'Добрый человек.' }
      ]
    },
    { id: 'adj-quantity', type: 'topic', affix: 'Adjectives of Quantity', emoji: '⚖️', meaning: 'ПРИЛАГАТЕЛЬНЫЕ КОЛИЧЕСТВА',
      assoc: 'Show how much or how many', explanation: 'Показывают, сколько.',
      words: [
        { word: 'some', transcription: '[sʌm]', trans: 'немного', ex: '<b>Some</b> water.', exRu: 'Немного воды.' },
        { word: 'much', transcription: '[mʌtʃ]', trans: 'много (неисч.)', ex: '<b>Much</b> time.', exRu: 'Много времени.' },
        { word: 'little', transcription: '[ˈlɪtl]', trans: 'мало', ex: '<b>Little</b> money.', exRu: 'Мало денег.' },
        { word: 'enough', transcription: '[ɪˈnʌf]', trans: 'достаточно', ex: '<b>Enough</b> food.', exRu: 'Достаточно еды.' },
        { word: 'sufficient', transcription: '[səˈfɪʃnt]', trans: 'достаточный', ex: '<b>Sufficient</b> evidence.', exRu: 'Достаточно доказательств.' }
      ]
    },
    { id: 'adj-number', type: 'topic', affix: 'Adjectives of Number', emoji: '🔢', meaning: 'ПРИЛАГАТЕЛЬНЫЕ ЧИСЛА',
      assoc: 'Tell the number or order', explanation: 'Указывают число или порядок.',
      words: [
        { word: 'one', transcription: '[wʌn]', trans: 'один', ex: '<b>One</b> book.', exRu: 'Одна книга.' },
        { word: 'two', transcription: '[tuː]', trans: 'два', ex: '<b>Two</b> dogs.', exRu: 'Две собаки.' },
        { word: 'first', transcription: '[fɜːst]', trans: 'первый', ex: '<b>First</b> place.', exRu: 'Первое место.' },
        { word: 'second', transcription: '[ˈsekənd]', trans: 'второй', ex: '<b>Second</b> attempt.', exRu: 'Вторая попытка.' },
        { word: 'several', transcription: '[ˈsevrəl]', trans: 'несколько', ex: '<b>Several</b> times.', exRu: 'Несколько раз.' }
      ]
    },
    { id: 'adj-demonstrative', type: 'topic', affix: 'Demonstrative Adjectives', emoji: '👉', meaning: 'УКАЗАТЕЛЬНЫЕ',
      assoc: 'Point out a specific noun', explanation: 'Указывают на конкретный предмет.',
      words: [
        { word: 'this', transcription: '[ðɪs]', trans: 'этот', ex: '<b>This</b> book.', exRu: 'Эта книга.' },
        { word: 'that', transcription: '[ðæt]', trans: 'тот', ex: '<b>That</b> house.', exRu: 'Тот дом.' },
        { word: 'these', transcription: '[ðiːz]', trans: 'эти', ex: '<b>These</b> shoes.', exRu: 'Эти туфли.' },
        { word: 'those', transcription: '[ðəʊz]', trans: 'те', ex: '<b>Those</b> people.', exRu: 'Те люди.' },
        { word: 'such', transcription: '[sʌtʃ]', trans: 'такой', ex: '<b>Such</b> a day.', exRu: 'Такой день.' }
      ]
    },
    { id: 'adj-possessive', type: 'topic', affix: 'Possessive Adjectives', emoji: '🤲', meaning: 'ПРИТЯЖАТЕЛЬНЫЕ',
      assoc: 'Show ownership or possession', explanation: 'Показывают принадлежность.',
      words: [
        { word: 'my', transcription: '[maɪ]', trans: 'мой', ex: '<b>My</b> book.', exRu: 'Моя книга.' },
        { word: 'your', transcription: '[jɔː]', trans: 'твой', ex: '<b>Your</b> car.', exRu: 'Твоя машина.' },
        { word: 'his', transcription: '[hɪz]', trans: 'его', ex: '<b>His</b> phone.', exRu: 'Его телефон.' },
        { word: 'her', transcription: '[hɜː]', trans: 'её', ex: '<b>Her</b> bag.', exRu: 'Её сумка.' },
        { word: 'their', transcription: '[ðeə]', trans: 'их', ex: '<b>Their</b> house.', exRu: 'Их дом.' }
      ]
    },
    { id: 'adj-distributive', type: 'topic', affix: 'Distributive Adjectives', emoji: '👥', meaning: 'РАСПРЕДЕЛИТЕЛЬНЫЕ',
      assoc: 'Refer to members of a group one by one', explanation: 'Относятся к членам группы по одному.',
      words: [
        { word: 'each', transcription: '[iːtʃ]', trans: 'каждый', ex: '<b>Each</b> student.', exRu: 'Каждый ученик.' },
        { word: 'every', transcription: '[ˈevri]', trans: 'каждый', ex: '<b>Every</b> day.', exRu: 'Каждый день.' },
        { word: 'either', transcription: '[ˈaɪðə]', trans: 'любой из двух', ex: '<b>Either</b> one.', exRu: 'Любой из двух.' },
        { word: 'neither', transcription: '[ˈnaɪðə]', trans: 'ни один из двух', ex: '<b>Neither</b> answer.', exRu: 'Ни один ответ.' },
        { word: 'any', transcription: '[ˈeni]', trans: 'любой', ex: '<b>Any</b> book.', exRu: 'Любая книга.' }
      ]
    },
    { id: 'adj-interrogative', type: 'topic', affix: 'Interrogative Adjectives', emoji: '❓', meaning: 'ВОПРОСИТЕЛЬНЫЕ',
      assoc: 'Used to ask questions about a noun', explanation: 'Используются в вопросах.',
      words: [
        { word: 'which', transcription: '[wɪtʃ]', trans: 'который', ex: '<b>Which</b> car?', exRu: 'Которая машина?' },
        { word: 'what', transcription: '[wɒt]', trans: 'какой', ex: '<b>What</b> time?', exRu: 'Какое время?' },
        { word: 'whose', transcription: '[huːz]', trans: 'чей', ex: '<b>Whose</b> bag?', exRu: 'Чья сумка?' },
        { word: 'whichsoever', transcription: '[ˌwɪtʃsəʊˈevə]', trans: 'какой бы ни', ex: '<b>Whichsoever</b> path.', exRu: 'Какой бы ни путь.' },
        { word: 'whatever', transcription: '[wɒtˈevə]', trans: 'какой бы ни', ex: '<b>Whatever</b> reason.', exRu: 'Какая бы ни причина.' }
      ]
    },
    { id: 'adj-proper', type: 'topic', affix: 'Proper Adjectives', emoji: '🏛️', meaning: 'ОТ-ИМЁННЫЕ',
      assoc: 'Formed from proper nouns', explanation: 'Образованы от имён собственных.',
      words: [
        { word: 'Indian', transcription: '[ˈɪndiən]', trans: 'индийский', ex: '<b>Indian</b> food.', exRu: 'Индийская еда.' },
        { word: 'American', transcription: '[əˈmerɪkən]', trans: 'американский', ex: '<b>American</b> dream.', exRu: 'Американская мечта.' },
        { word: 'French', transcription: '[frentʃ]', trans: 'французский', ex: '<b>French</b> wine.', exRu: 'Французское вино.' },
        { word: 'Chinese', transcription: '[ˌtʃaɪˈniːz]', trans: 'китайский', ex: '<b>Chinese</b> tea.', exRu: 'Китайский чай.' },
        { word: 'British', transcription: '[ˈbrɪtɪʃ]', trans: 'британский', ex: '<b>British</b> accent.', exRu: 'Британский акцент.' }
      ]
    },
    { id: 'adj-comparative', type: 'topic', affix: 'Comparative / Superlative', emoji: '📊', meaning: 'СРАВНИТЕЛЬНЫЕ И ПРЕВОСХОДНЫЕ',
      assoc: 'Used to compare nouns', explanation: 'Сравнивают предметы.',
      words: [
        { word: 'better', transcription: '[ˈbetə]', trans: 'лучше', ex: 'This is <b>better</b>.', exRu: 'Это лучше.' },
        { word: 'worse', transcription: '[wɜːs]', trans: 'хуже', ex: 'That is <b>worse</b>.', exRu: 'То хуже.' },
        { word: 'best', transcription: '[best]', trans: 'лучший', ex: 'The <b>best</b> day.', exRu: 'Лучший день.' },
        { word: 'worst', transcription: '[wɜːst]', trans: 'худший', ex: 'The <b>worst</b> idea.', exRu: 'Худшая идея.' },
        { word: 'greatest', transcription: '[ˈɡreɪtɪst]', trans: 'величайший', ex: 'The <b>greatest</b> gift.', exRu: 'Величайший дар.' }
      ]
    }
);

// ───────────────────────────────────────────────────────────
// 1️⃣1️⃣ СХЕМЫ AM/IS/ARE, DO/DOES/DID, HAVE/HAS/HAD, WAS/WERE
// ───────────────────────────────────────────────────────────
prefixes.push(
    { id: 'verb-be-am', type: 'topic', affix: 'AM', emoji: '🅰️', meaning: 'ГЛАГОЛ BE — НАСТОЯЩЕЕ',
      assoc: 'Только для "я"', explanation: 'Только для I.',
      words: [
        { word: 'I am', transcription: '[aɪ æm]', trans: 'я есть', ex: '<b>I am</b> happy.', exRu: 'Я счастлив.' },
        { word: 'I am', transcription: '[aɪ æm]', trans: 'я есть', ex: '<b>I am</b> a student.', exRu: 'Я студент.' }
      ]
    },
    { id: 'verb-be-are', type: 'topic', affix: 'ARE', emoji: '🅱️', meaning: 'ГЛАГОЛ BE — НАСТОЯЩЕЕ',
      assoc: 'You / We / They are', explanation: 'Для you, we, they.',
      words: [
        { word: 'you are', transcription: '[juː ɑː]', trans: 'ты есть', ex: '<b>You are</b> right.', exRu: 'Ты прав.' },
        { word: 'we are', transcription: '[wiː ɑː]', trans: 'мы есть', ex: '<b>We are</b> here.', exRu: 'Мы здесь.' },
        { word: 'they are', transcription: '[ðeɪ ɑː]', trans: 'они есть', ex: '<b>They are</b> friends.', exRu: 'Они друзья.' }
      ]
    },
    { id: 'verb-be-is', type: 'topic', affix: 'IS', emoji: '🅾️', meaning: 'ГЛАГОЛ BE — НАСТОЯЩЕЕ',
      assoc: 'He / She / It is', explanation: 'Для he, she, it.',
      words: [
        { word: 'he is', transcription: '[hiː ɪz]', trans: 'он есть', ex: '<b>He is</b> tall.', exRu: 'Он высокий.' },
        { word: 'she is', transcription: '[ʃiː ɪz]', trans: 'она есть', ex: '<b>She is</b> kind.', exRu: 'Она добрая.' },
        { word: 'it is', transcription: '[ɪt ɪz]', trans: 'оно есть', ex: '<b>It is</b> cold.', exRu: 'Холодно.' }
      ]
    },
    { id: 'verb-do-do', type: 'topic', affix: 'DO', emoji: '💪', meaning: 'ГЛАГОЛ DO (ДЕЛАТЬ)',
      assoc: 'I / You / We / They do', explanation: 'Для I, you, we, they.',
      words: [
        { word: 'I do', transcription: '[aɪ duː]', trans: 'я делаю', ex: '<b>I do</b> my work.', exRu: 'Я делаю работу.' },
        { word: 'you do', transcription: '[juː duː]', trans: 'ты делаешь', ex: '<b>You do</b> it well.', exRu: 'Ты делаешь хорошо.' },
        { word: 'we do', transcription: '[wiː duː]', trans: 'мы делаем', ex: '<b>We do</b> it together.', exRu: 'Мы делаем вместе.' },
        { word: 'they do', transcription: '[ðeɪ duː]', trans: 'они делают', ex: '<b>They do</b> their best.', exRu: 'Они стараются.' }
      ]
    },
    { id: 'verb-do-does', type: 'topic', affix: 'DOES', emoji: '💪', meaning: 'ГЛАГОЛ DO — 3 ЛИЦО',
      assoc: 'He / She / It does', explanation: 'Для he, she, it.',
      words: [
        { word: 'he does', transcription: '[hiː dʌz]', trans: 'он делает', ex: '<b>He does</b> his job.', exRu: 'Он делает работу.' },
        { word: 'she does', transcription: '[ʃiː dʌz]', trans: 'она делает', ex: '<b>She does</b> yoga.', exRu: 'Она занимается йогой.' },
        { word: 'it does', transcription: '[ɪt dʌz]', trans: 'оно делает', ex: '<b>It does</b> work!', exRu: 'Это работает!' }
      ]
    },
    { id: 'verb-do-did', type: 'topic', affix: 'DID', emoji: '⏪', meaning: 'ГЛАГОЛ DO — ПРОШЕДШЕЕ',
      assoc: 'Все лица → did', explanation: 'Все лица → did.',
      words: [
        { word: 'I did', transcription: '[aɪ dɪd]', trans: 'я сделал', ex: '<b>I did</b> my work yesterday!', exRu: 'Я сделал работу вчера!' },
        { word: 'you did', transcription: '[juː dɪd]', trans: 'ты сделал', ex: '<b>You did</b> it.', exRu: 'Ты это сделал.' },
        { word: 'we did', transcription: '[wiː dɪd]', trans: 'мы сделали', ex: '<b>We did</b> it.', exRu: 'Мы это сделали.' },
        { word: 'they did', transcription: '[ðeɪ dɪd]', trans: 'они сделали', ex: '<b>They did</b> it.', exRu: 'Они это сделали.' }
      ]
    },
    { id: 'verb-have-have', type: 'topic', affix: 'HAVE', emoji: '🎒', meaning: 'ГЛАГОЛ HAVE (ИМЕТЬ)',
      assoc: 'I / You / We / They have', explanation: 'Для I, you, we, they.',
      words: [
        { word: 'I have', transcription: '[aɪ hæv]', trans: 'я имею', ex: '<b>I have</b> a plan!', exRu: 'У меня есть план!' },
        { word: 'you have', transcription: '[juː hæv]', trans: 'ты имеешь', ex: '<b>You have</b> time.', exRu: 'У тебя есть время.' },
        { word: 'we have', transcription: '[wiː hæv]', trans: 'мы имеем', ex: '<b>We have</b> a plan!', exRu: 'У нас есть план!' },
        { word: 'they have', transcription: '[ðeɪ hæv]', trans: 'они имеют', ex: '<b>They have</b> money.', exRu: 'У них есть деньги.' }
      ]
    },
    { id: 'verb-have-has', type: 'topic', affix: 'HAS', emoji: '🎒', meaning: 'ГЛАГОЛ HAVE — 3 ЛИЦО',
      assoc: 'He / She / It has', explanation: 'Для he, she, it.',
      words: [
        { word: 'he has', transcription: '[hiː hæz]', trans: 'он имеет', ex: '<b>He has</b> a cat.', exRu: 'У него есть кот.' },
        { word: 'she has', transcription: '[ʃiː hæz]', trans: 'она имеет', ex: '<b>She has</b> a car.', exRu: 'У неё есть машина.' },
        { word: 'it has', transcription: '[ɪt hæz]', trans: 'оно имеет', ex: '<b>It has</b> two doors.', exRu: 'У него две двери.' }
      ]
    },
    { id: 'verb-have-had', type: 'topic', affix: 'HAD', emoji: '⏪', meaning: 'ГЛАГОЛ HAVE — ПРОШЕДШЕЕ',
      assoc: 'Все лица → had', explanation: 'Все лица → had.',
      words: [
        { word: 'I had', transcription: '[aɪ hæd]', trans: 'я имел', ex: '<b>I had</b> a great day!', exRu: 'У меня был отличный день!' },
        { word: 'you had', transcription: '[juː hæd]', trans: 'ты имел', ex: '<b>You had</b> fun.', exRu: 'Ты веселился.' },
        { word: 'she had', transcription: '[ʃiː hæd]', trans: 'она имела', ex: '<b>She had</b> a cute cat.', exRu: 'У неё была милая кошка.' },
        { word: 'they had', transcription: '[ðeɪ hæd]', trans: 'они имели', ex: '<b>They had</b> a good time.', exRu: 'Они хорошо провели время.' }
      ]
    },
    { id: 'verb-be-was', type: 'topic', affix: 'WAS', emoji: '⏪', meaning: 'ГЛАГОЛ BE — ПРОШЕДШЕЕ',
      assoc: 'I / He / She / It was', explanation: 'Для I, he, she, it.',
      words: [
        { word: 'I was', transcription: '[aɪ wɒz]', trans: 'я был', ex: '<b>I was</b> at home.', exRu: 'Я был дома.' },
        { word: 'he was', transcription: '[hiː wɒz]', trans: 'он был', ex: '<b>He was</b> late.', exRu: 'Он опоздал.' },
        { word: 'she was', transcription: '[ʃiː wɒz]', trans: 'она была', ex: '<b>She was</b> tired.', exRu: 'Она устала.' },
        { word: 'it was', transcription: '[ɪt wɒz]', trans: 'оно было', ex: '<b>It was</b> cold.', exRu: 'Было холодно.' }
      ]
    },
    { id: 'verb-be-were', type: 'topic', affix: 'WERE', emoji: '⏪', meaning: 'ГЛАГОЛ BE — ПРОШЕДШЕЕ',
      assoc: 'You / We / They were', explanation: 'Для you, we, they.',
      words: [
        { word: 'you were', transcription: '[juː wɜː]', trans: 'ты был', ex: '<b>You were</b> right.', exRu: 'Ты был прав.' },
        { word: 'we were', transcription: '[wiː wɜː]', trans: 'мы были', ex: '<b>We were</b> friends.', exRu: 'Мы были друзьями.' },
        { word: 'they were', transcription: '[ðeɪ wɜː]', trans: 'они были', ex: '<b>They were</b> happy.', exRu: 'Они были счастливы.' }
      ]
    }
);
