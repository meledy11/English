// ═══════════════════════════════════════════════════════════
// prefixes-data.js — ПОЛНЫЙ ФАЙЛ ДАННЫХ
// Приставки, суффиксы, корни, модальные, ловушки, близнецы,
// антонимы, эссе, диалоги, диктанты, истории, квизы
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
// КОРНИ
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
    { root: 'dict', topic: 'speech', emoji: '🗣️', meaning: 'говорить',
      note: 'Латинский dicere.',
      words: [
        { word: 'predict', pre: 'pre-', preMean: 'заранее', trans: 'предсказать', ex: 'Predict the future.', exRu: 'Предскажи будущее.' },
        { word: 'contradict', pre: 'contra-', preMean: 'против', trans: 'противоречить', ex: 'Don\'t contradict me.', exRu: 'Не противоречь.' },
        { word: 'dictate', pre: '-ate', preMean: 'действие', trans: 'диктовать', ex: 'Dictate the rules.', exRu: 'Диктуй правила.' }
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
    { root: 'bio', topic: 'life', emoji: '🌱', meaning: 'жизнь',
      note: 'Греческий bios.',
      words: [
        { word: 'biology', pre: '-logy', preMean: 'наука', trans: 'биология', ex: 'Study biology.', exRu: 'Изучай биологию.' },
        { word: 'biography', pre: '-graphy', preMean: 'писание', trans: 'биография', ex: 'Read his biography.', exRu: 'Прочти биографию.' },
        { word: 'antibiotic', pre: 'anti-', preMean: 'против', trans: 'антибиотик', ex: 'Take antibiotics.', exRu: 'Принимай антибиотики.' }
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
    { id: 'should', word: 'should', transcription: '/ʃʊd/', emoji: '💡',
      meaning: 'СОВЕТ / РЕКОМЕНДАЦИЯ', color: '#6b8e23',
      rules: ['что-то хорошее сделать', 'не обязательно', 'мягкий совет'],
      hint: '💬 Should = мягкий совет, не приказ.',
      examples: [
        { en: 'You <b>should</b> get some rest.', ru: 'Тебе стоит отдохнуть.' },
        { en: 'You <b>shouldn\'t</b> worry so much.', ru: 'Тебе не стоит так переживать.' },
        { en: '<b>Should</b> I call her?', ru: 'Мне позвонить ей?' }
      ]
    },
    { id: 'must', word: 'must', transcription: '/mʌst/', emoji: '⛔',
      meaning: 'СТРОГАЯ НЕОБХОДИМОСТЬ', color: '#b93a3a',
      rules: ['сильная необходимость', 'правило', 'личная уверенность'],
      hint: '⛔ Must = очень строго, сам так решил.',
      examples: [
        { en: 'You <b>must</b> be on time.', ru: 'Ты должен быть вовремя.' },
        { en: 'You <b>mustn\'t</b> tell anyone.', ru: 'Ты не должен никому говорить.' },
        { en: '<b>Must</b> I bring anything?', ru: 'Мне нужно что-то брать?' }
      ]
    },
    { id: 'haveto', word: 'have to', transcription: '/hæv tuː/', emoji: '📋',
      meaning: 'НЕОБХОДИМОСТЬ ПО ОБСТОЯТЕЛЬСТВАМ', color: '#c49a6c',
      rules: ['вынужденная необходимость', 'внешние обстоятельства', 'правило / обязанность'],
      hint: '📋 Have to = так сложились обстоятельства.',
      examples: [
        { en: 'I <b>have to</b> work tomorrow.', ru: 'Мне нужно работать завтра.' },
        { en: 'I <b>don\'t have to</b> go.', ru: 'Мне не нужно идти.' },
        { en: 'Do I <b>have to</b> wear a uniform?', ru: 'Мне нужно носить форму?' }
      ]
    },
    { id: 'can', word: 'can', transcription: '/kæn/', emoji: '💪',
      meaning: 'УМЕНИЕ / ВОЗМОЖНОСТЬ', color: '#6b8e23',
      rules: ['физическая способность', 'разрешение (неформально)', 'просьба'],
      hint: '💪 Can = умею, могу физически.',
      examples: [
        { en: 'I <b>can</b> swim very well.', ru: 'Я хорошо умею плавать.' },
        { en: '<b>Can</b> you help me?', ru: 'Можешь мне помочь?' },
        { en: 'She <b>cannot</b> come today.', ru: 'Она не может прийти сегодня.' }
      ]
    },
    { id: 'could', word: 'could', transcription: '/kʊd/', emoji: '🙏',
      meaning: 'ВЕЖЛИВАЯ ПРОСЬБА / ВОЗМОЖНОСТЬ', color: '#b97f44',
      rules: ['вежливая просьба', 'вероятность', 'прошедшее от can'],
      hint: '🙏 Could = вежливее, чем can.',
      examples: [
        { en: '<b>Could</b> you pass the salt?', ru: 'Не могли бы вы передать соль?' },
        { en: 'It <b>could</b> rain later.', ru: 'Позже может пойти дождь.' },
        { en: 'I <b>could</b> swim at 5.', ru: 'Я умел плавать в 5 лет.' }
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
];

// ───────────────────────────────────────────────────────────
// ПУТАНИЦА
// ───────────────────────────────────────────────────────────
const confusingVerbs = [
    { id: 'make-do', emoji: '🔨✅', title: 'MAKE vs DO',
      rule: 'Оба переводятся как «делать», но значат разное!',
      pairs: [
        { word: 'make', emoji: '🔨',
          meaning: 'Это «делать» в значении «создавать, что-то сделать, изготовить, сотворить».',
          examples: [
            { en: 'We <b>make</b> a plan.', ru: 'Мы составляем план.' },
            { en: 'She <b>made</b> a cake.', ru: 'Она испекла торт.' }
          ]
        },
        { word: 'do', emoji: '✅',
          meaning: 'Это «делать» в значении «выполнять действие, операцию, работу».',
          examples: [
            { en: 'I <b>do</b> my homework.', ru: 'Я делаю домашнее задание.' },
            { en: 'She <b>does</b> the cleaning.', ru: 'Она делает уборку.' }
          ]
        }
      ]
    },
    { id: 'say-tell', emoji: '💬🗣️', title: 'SAY vs TELL',
      rule: 'Оба про «говорить», но tell требует адресата!',
      pairs: [
        { word: 'say', emoji: '💬',
          meaning: 'Это «говорить» в значении, когда мы просто что-то говорим, произносим слова.',
          examples: [
            { en: 'She <b>said</b> hello.', ru: 'Она сказала привет.' },
            { en: 'He <b>says</b> he is busy.', ru: 'Он говорит, что занят.' }
          ]
        },
        { word: 'tell', emoji: '🗣️',
          meaning: 'Это «говорить» в значении, когда мы говорим кому-то информацию.',
          examples: [
            { en: 'She <b>told</b> me the truth.', ru: 'Она рассказала мне правду.' },
            { en: 'He <b>told</b> us about his trip.', ru: 'Он рассказал нам о поездке.' }
          ]
        }
      ]
    }
];

// ───────────────────────────────────────────────────────────
// ЛОВУШКИ
// ───────────────────────────────────────────────────────────
const trapPairs = [
    { id: 'can-may', emoji: '💪✅', title: 'CAN vs MAY',
      rule: 'Физическая возможность VS разрешение',
      left: { word: 'can', emoji: '💪', meaning: 'физическая возможность или умение',
        examples: [{ en: 'I <b>can</b> swim.', ru: 'Я умею плавать.' }]
      },
      right: { word: 'may', emoji: '🙏', meaning: 'разрешение или вероятность',
        examples: [{ en: '<b>May</b> I come in?', ru: 'Можно войти?' }]
      }
    },
    { id: 'say-tell-trap', emoji: '💬🗣️', title: 'SAY vs TELL',
      rule: 'Сказать что-то VS сказать кому-то',
      left: { word: 'say', emoji: '💬', meaning: 'сказать что-то',
        examples: [{ en: 'She <b>said</b> hello.', ru: 'Она сказала привет.' }]
      },
      right: { word: 'tell', emoji: '🗣️', meaning: 'сказать кому-то',
        examples: [{ en: 'She <b>told</b> me the truth.', ru: 'Она сказала мне правду.' }]
      }
    },
    { id: 'look-see', emoji: '👀👁️', title: 'LOOK vs SEE',
      rule: 'Смотреть намеренно VS видеть',
      left: { word: 'look', emoji: '👀', meaning: 'смотреть намеренно',
        examples: [{ en: '<b>Look</b> at the sky!', ru: 'Посмотри на небо!' }]
      },
      right: { word: 'see', emoji: '👁️', meaning: 'видеть',
        examples: [{ en: 'I can <b>see</b> the mountains.', ru: 'Я вижу горы.' }]
      }
    },
    { id: 'speak-talk', emoji: '🎤💬', title: 'SPEAK vs TALK',
      rule: 'Формально / о языке VS общаться',
      left: { word: 'speak', emoji: '🎤', meaning: 'говорить, чаще формально или о языке',
        examples: [{ en: 'She <b>speaks</b> Italian.', ru: 'Она говорит по-итальянски.' }]
      },
      right: { word: 'talk', emoji: '💬', meaning: 'разговаривать, общаться',
        examples: [{ en: 'We <b>talked</b> for hours.', ru: 'Мы разговаривали часами.' }]
      }
    },
    { id: 'make-do-trap', emoji: '🔨✅', title: 'MAKE vs DO',
      rule: 'Создавать VS выполнять',
      left: { word: 'make', emoji: '🔨', meaning: 'создавать, производить',
        examples: [{ en: 'She <b>made</b> a cake.', ru: 'Она испекла торт.' }]
      },
      right: { word: 'do', emoji: '✅', meaning: 'выполнять действие или работу',
        examples: [{ en: 'I have to <b>do</b> my homework.', ru: 'Мне нужно сделать домашку.' }]
      }
    },
    { id: 'borrow-lend', emoji: '🤲🎁', title: 'BORROW vs LEND',
      rule: 'Брать взаймы VS давать взаймы',
      left: { word: 'borrow', emoji: '🤲', meaning: 'брать взаймы',
        examples: [{ en: 'Can I <b>borrow</b> your pen?', ru: 'Можно взять у тебя ручку?' }]
      },
      right: { word: 'lend', emoji: '🎁', meaning: 'давать взаймы',
        examples: [{ en: 'Can you <b>lend</b> me your pen?', ru: 'Можешь дать мне ручку?' }]
      }
    },
    { id: 'listen-hear', emoji: '🎧👂', title: 'LISTEN vs HEAR',
      rule: 'Слушать внимательно VS слышать',
      left: { word: 'listen', emoji: '🎧', meaning: 'слушать внимательно',
        examples: [{ en: '<b>Listen</b> to the music.', ru: 'Слушай музыку.' }]
      },
      right: { word: 'hear', emoji: '👂', meaning: 'слышать',
        examples: [{ en: 'I can <b>hear</b> the rain.', ru: 'Я слышу дождь.' }]
      }
    },
    { id: 'come-go', emoji: '🚶🏃', title: 'COME vs GO',
      rule: 'Приходить сюда VS идти туда',
      left: { word: 'come', emoji: '🚶', meaning: 'приходить сюда',
        examples: [{ en: '<b>Come</b> to me.', ru: 'Подойди ко мне.' }]
      },
      right: { word: 'go', emoji: '🏃', meaning: 'идти туда',
        examples: [{ en: 'I\'m <b>going</b> to the store.', ru: 'Я иду в магазин.' }]
      }
    },
    { id: 'do-make-full', emoji: '📋🔨', title: 'DO vs MAKE — коллокации',
      rule: 'Идиомы с do и make',
      left: { word: 'do', emoji: '📋', meaning: 'работа, действие',
        examples: [
          { en: '<b>Do</b> the dishes.', ru: 'Помой посуду.' },
          { en: '<b>Do</b> the laundry.', ru: 'Постирай.' },
          { en: '<b>Do</b> homework.', ru: 'Сделай домашку.' },
          { en: '<b>Do</b> a favour.', ru: 'Сделай одолжение.' }
        ]
      },
      right: { word: 'make', emoji: '🔨', meaning: 'создавать',
        examples: [
          { en: '<b>Make</b> a decision.', ru: 'Прими решение.' },
          { en: '<b>Make</b> money.', ru: 'Зарабатывай.' },
          { en: '<b>Make</b> friends.', ru: 'Найди друзей.' },
          { en: '<b>Make</b> a mistake.', ru: 'Сделай ошибку.' }
        ]
      }
    },
    { id: 'bring-take', emoji: '📦🎁', title: 'BRING vs TAKE',
      rule: 'Сюда VS Туда',
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
    { id: 'do-make-life', emoji: '🎨🎯', title: 'MAKE vs DO — творчество',
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
      left: { word: 'look', emoji: '👀', meaning: 'смотреть (кратко)',
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
    { id: 'hear-listen-3', emoji: '👂🎧', title: 'HEAR / LISTEN — практика',
      rule: 'Слышать (пассивно) / Слушать (активно)',
      left: { word: 'hear', emoji: '👂', meaning: 'слышать',
        examples: [
          { en: 'I <b>hear</b> you.', ru: 'Я тебя слышу.' },
          { en: 'Did you <b>hear</b>?', ru: 'Ты слышал?' }
        ]
      },
      right: { word: 'listen', emoji: '🎧', meaning: 'слушать',
        examples: [
          { en: '<b>Listen</b> carefully.', ru: 'Слушай внимательно.' },
          { en: '<b>Listen</b> to me!', ru: 'Слушай меня!' }
        ]
      }
    },
    { id: 'speak-talk-3', emoji: '🎤💬', title: 'SPEAK / TALK',
      rule: 'Формально / Неформально',
      left: { word: 'speak', emoji: '🎤', meaning: 'формально',
        examples: [
          { en: '<b>Speak</b> English.', ru: 'Говори по-английски.' },
          { en: '<b>Speak</b> louder.', ru: 'Говори громче.' }
        ]
      },
      right: { word: 'talk', emoji: '💬', meaning: 'общаться',
        examples: [
          { en: '<b>Talk</b> to me.', ru: 'Поговори со мной.' },
          { en: 'We <b>talk</b> daily.', ru: 'Мы говорим ежедневно.' }
        ]
      }
    },
    { id: 'arrive-reach', emoji: '🎯🏁', title: 'ARRIVE / REACH',
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
          { en: '<b>Reach</b> home safely.', ru: 'Доберись безопасно.' }
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
      right: { word: 'place', emoji: '📍', meaning: 'разместить',
        examples: [
          { en: '<b>Place</b> it carefully.', ru: 'Размести аккуратно.' },
          { en: '<b>Place</b> the order.', ru: 'Размести заказ.' }
        ]
      }
    },
    { id: 'rise-raise-2', emoji: '🌅⬆️', title: 'RISE / RAISE',
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
          { en: 'Someone <b>stole</b> my bike.', ru: 'Кто-то украл велосипед.' },
          { en: 'Don\'t <b>steal</b>.', ru: 'Не воруй.' }
        ]
      }
    },
    { id: 'advise-warn', emoji: '✅⚠️', title: 'ADVISE vs WARN',
      rule: 'Советовать / Предупреждать',
      left: { word: 'advise', emoji: '✅', meaning: 'советовать',
        examples: [
          { en: 'I <b>advise</b> rest.', ru: 'Советую отдохнуть.' },
          { en: 'He <b>advised</b> caution.', ru: 'Он советовал осторожность.' }
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
      rule: 'Удобный (по ситуации) / Комфортный',
      left: { word: 'convenient', emoji: '🎯', meaning: 'удобный (по ситуации)',
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
      rule: 'Во время (когда) / На протяжении',
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
    { id: 'say-tell-more', emoji: '💬🗣️', title: 'SAY vs TELL — идиомы',
      rule: 'Идиомы с say и tell',
      left: { word: 'say', emoji: '💬', meaning: 'фразы с say',
        examples: [
          { en: '<b>Say</b> cheese!', ru: 'Скажи «сыр»!' },
          { en: '<b>Say</b> what you mean.', ru: 'Говори, что думаешь.' }
        ]
      },
      right: { word: 'tell', emoji: '🗣️', meaning: 'фразы с tell',
        examples: [
          { en: '<b>Tell</b> me more.', ru: 'Расскажи больше.' },
          { en: 'Time will <b>tell</b>.', ru: 'Время покажет.' }
        ]
      }
    }
];

// ───────────────────────────────────────────────────────────
// БЛИЗНЕЦЫ
// ───────────────────────────────────────────────────────────
const twinWords = [
    { id: 'affect-effect', emoji: '🌊🎯', title: 'AFFECT vs EFFECT',
      rule: 'Глагол VS существительное',
      left: { word: 'affect', emoji: '🌊', pos: 'глагол', meaning: 'влиять',
        examples: [{ en: 'The rain <b>affects</b> my mood.', ru: 'Дождь влияет на настроение.' }]
      },
      right: { word: 'effect', emoji: '🎯', pos: 'существительное', meaning: 'результат, следствие',
        examples: [{ en: 'The <b>effect</b> was huge.', ru: 'Эффект был огромный.' }]
      }
    },
    { id: 'accept-except', emoji: '✅🚫', title: 'ACCEPT vs EXCEPT',
      rule: 'Принимать VS кроме',
      left: { word: 'accept', emoji: '✅', pos: 'глагол', meaning: 'принимать',
        examples: [{ en: 'I <b>accept</b> your apology.', ru: 'Я принимаю извинения.' }]
      },
      right: { word: 'except', emoji: '🚫', pos: 'предлог', meaning: 'кроме',
        examples: [{ en: 'Everyone came <b>except</b> Tom.', ru: 'Все пришли, кроме Тома.' }]
      }
    },
    { id: 'raise-rise', emoji: '⬆️🌅', title: 'RAISE vs RISE',
      rule: 'Поднимать что-то VS подниматься самому',
      left: { word: 'raise', emoji: '⬆️', pos: 'с объектом', meaning: 'поднимать (что-то)',
        examples: [
          { en: '<b>Raise</b> your hand!', ru: 'Подними руку!' },
          { en: 'They <b>raised</b> prices.', ru: 'Они подняли цены.' }
        ]
      },
      right: { word: 'rise', emoji: '🌅', pos: 'без объекта', meaning: 'подниматься (само)',
        examples: [
          { en: 'The sun <b>rises</b> at 6.', ru: 'Солнце встаёт в 6.' },
          { en: 'Prices <b>rise</b> every year.', ru: 'Цены растут ежегодно.' }
        ]
      }
    },
    { id: 'borrow-lend-twin', emoji: '🤲🎁', title: 'BORROW vs LEND',
      rule: 'Брать взаймы VS давать взаймы',
      left: { word: 'borrow', emoji: '🤲', pos: 'взять себе', meaning: 'брать взаймы',
        examples: [{ en: 'Can I <b>borrow</b> your pen?', ru: 'Можно взять ручку?' }]
      },
      right: { word: 'lend', emoji: '🎁', pos: 'дать другому', meaning: 'давать взаймы',
        examples: [{ en: 'Can you <b>lend</b> me your pen?', ru: 'Можешь дать ручку?' }]
      }
    },
    { id: 'say-tell-twin', emoji: '💬🗣️', title: 'SAY vs TELL',
      rule: 'Сказать что-то VS рассказать кому-то',
      left: { word: 'say', emoji: '💬', pos: 'без адресата', meaning: 'сказать (что-то)',
        examples: [{ en: 'She <b>said</b> hello.', ru: 'Она сказала привет.' }]
      },
      right: { word: 'tell', emoji: '🗣️', pos: 'с адресатом', meaning: 'рассказывать (что-то кому-то)',
        examples: [{ en: 'She <b>told</b> me the truth.', ru: 'Она рассказала правду.' }]
      }
    },
    { id: 'lose-loose', emoji: '😢👖', title: 'LOSE vs LOOSE',
      rule: 'Терять VS свободный',
      left: { word: 'lose', emoji: '😢', pos: 'глагол / [luːz]', meaning: 'терять',
        examples: [{ en: 'Don\'t <b>lose</b> your keys.', ru: 'Не теряй ключи.' }]
      },
      right: { word: 'loose', emoji: '👖', pos: 'прил. / [luːs]', meaning: 'свободный',
        examples: [{ en: 'These pants are <b>loose</b>.', ru: 'Эти штаны свободные.' }]
      }
    },
    { id: 'historic-historical', emoji: '🏛️📜', title: 'HISTORIC vs HISTORICAL',
      rule: 'Важный для истории VS связанный с историей',
      left: { word: 'historic', emoji: '🏛️', pos: 'важное', meaning: 'исторически важный',
        examples: [
          { en: 'A <b>historic</b> moment.', ru: 'Исторический момент.' },
          { en: 'A <b>historic</b> victory.', ru: 'Историческая победа.' }
        ]
      },
      right: { word: 'historical', emoji: '📜', pos: 'относящееся', meaning: 'связанный с историей',
        examples: [
          { en: 'A <b>historical</b> novel.', ru: 'Исторический роман.' },
          { en: 'A <b>historical</b> museum.', ru: 'Исторический музей.' }
        ]
      }
    },
    { id: 'principal-principle', emoji: '🎓📏', title: 'PRINCIPAL vs PRINCIPLE',
      rule: 'Директор VS принцип',
      left: { word: 'principal', emoji: '🎓', pos: 'человек / главный', meaning: 'директор / основной',
        examples: [
          { en: 'The <b>principal</b> of the school.', ru: 'Директор школы.' },
          { en: 'The <b>principal</b> reason.', ru: 'Основная причина.' }
        ]
      },
      right: { word: 'principle', emoji: '📏', pos: 'правило', meaning: 'принцип',
        examples: [
          { en: 'A man of <b>principle</b>.', ru: 'Человек принципов.' },
          { en: 'In <b>principle</b>, I agree.', ru: 'В принципе, я согласен.' }
        ]
      }
    },
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
        examples: [{ en: 'Press the <b>brake</b>.', ru: 'Нажми тормоз.' }]
      },
      right: { word: 'break', emoji: '💥', pos: 'глаг.', meaning: 'ломать',
        examples: [{ en: 'Don\'t <b>break</b> it.', ru: 'Не сломай.' }]
      }
    },
    { id: 'weather-whether', emoji: '🌦️🤔', title: 'WEATHER vs WHETHER',
      rule: 'Погода VS ли',
      left: { word: 'weather', emoji: '🌦️', pos: 'сущ.', meaning: 'погода',
        examples: [{ en: 'Nice <b>weather</b> today.', ru: 'Хорошая погода.' }]
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
        examples: [{ en: 'The cat licked <b>its</b> paw.', ru: 'Кошка лизала лапу.' }]
      },
      right: { word: 'it\'s', emoji: '✅', pos: 'сокр.', meaning: 'это есть',
        examples: [{ en: '<b>It\'s</b> cold.', ru: 'Холодно.' }]
      }
    },
    { id: 'personal-personnel', emoji: '👤👥', title: 'PERSONAL vs PERSONNEL',
      rule: 'Личный VS персонал',
      left: { word: 'personal', emoji: '👤', pos: 'прил.', meaning: 'личный',
        examples: [{ en: '<b>Personal</b> data.', ru: 'Личные данные.' }]
      },
      right: { word: 'personnel', emoji: '👥', pos: 'сущ.', meaning: 'персонал',
        examples: [{ en: 'Company <b>personnel</b>.', ru: 'Персонал компании.' }]
      }
    },
    { id: 'quiet-quite', emoji: '🤫✅', title: 'QUIET vs QUITE',
      rule: 'Тихий VS довольно',
      left: { word: 'quiet', emoji: '🤫', pos: 'прил.', meaning: 'тихий',
        examples: [{ en: 'A <b>quiet</b> room.', ru: 'Тихая комната.' }]
      },
      right: { word: 'quite', emoji: '✅', pos: 'нареч.', meaning: 'довольно / совсем',
        examples: [{ en: '<b>Quite</b> good!', ru: 'Довольно хорошо!' }]
      }
    },
    { id: 'desert-dessert', emoji: '🏜️🍰', title: 'DESERT vs DESSERT',
      rule: 'Пустыня VS десерт',
      left: { word: 'desert', emoji: '🏜️', pos: 'сущ. / [ˈdezət]', meaning: 'пустыня',
        examples: [{ en: 'A hot <b>desert</b>.', ru: 'Жаркая пустыня.' }]
      },
      right: { word: 'dessert', emoji: '🍰', pos: 'сущ. / [dɪˈzɜːt]', meaning: 'десерт',
        examples: [{ en: 'Sweet <b>dessert</b>.', ru: 'Сладкий десерт.' }]
      }
    },
    { id: 'stationary-stationery', emoji: '🧍📝', title: 'STATIONARY vs STATIONERY',
      rule: 'Неподвижный VS канцелярия',
      left: { word: 'stationary', emoji: '🧍', pos: 'прил.', meaning: 'неподвижный',
        examples: [{ en: 'A <b>stationary</b> car.', ru: 'Стоящая машина.' }]
      },
      right: { word: 'stationery', emoji: '📝', pos: 'сущ.', meaning: 'канцтовары',
        examples: [{ en: 'Buy <b>stationery</b>.', ru: 'Купи канцтовары.' }]
      }
    },
    { id: 'advice-advise', emoji: '💬✅', title: 'ADVICE vs ADVISE',
      rule: 'Совет (сущ.) VS советовать (глаг.)',
      left: { word: 'advice', emoji: '💬', pos: 'сущ. / [ədˈvaɪs]', meaning: 'совет',
        examples: [{ en: 'A good <b>advice</b>.', ru: 'Хороший совет.' }]
      },
      right: { word: 'advise', emoji: '✅', pos: 'глаг. / [ədˈvaɪz]', meaning: 'советовать',
        examples: [{ en: 'I <b>advise</b> you to rest.', ru: 'Советую тебе отдохнуть.' }]
      }
    },
    { id: 'practice-practise', emoji: '🏃✅', title: 'PRACTICE vs PRACTISE',
      rule: 'Практика VS практиковать',
      left: { word: 'practice', emoji: '🏃', pos: 'сущ.', meaning: 'практика',
        examples: [{ en: 'A lot of <b>practice</b>.', ru: 'Много практики.' }]
      },
      right: { word: 'practise', emoji: '✅', pos: 'глаг.', meaning: 'практиковать',
        examples: [{ en: '<b>Practise</b> daily.', ru: 'Практикуйся ежедневно.' }]
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
];

// ───────────────────────────────────────────────────────────
// АНТОНИМЫ
// ───────────────────────────────────────────────────────────
const oppositeAffixes = [
    { pair: ['un-', '-'], emoji: '⚖️', ex1: 'happy', ex2: 'unhappy', ru: 'счастливый → несчастный' },
    { pair: ['-ful', '-less'], emoji: '⚖️', ex1: 'careful', ex2: 'careless', ru: 'осторожный → беззаботный' },
    { pair: ['in-', 'out-'], emoji: '⚖️', ex1: 'inside', ex2: 'outside', ru: 'внутри → снаружи' },
    { pair: ['up-', 'down-'], emoji: '⚖️', ex1: 'upstairs', ex2: 'downstairs', ru: 'наверх → вниз' },
    { pair: ['over-', 'under-'], emoji: '⚖️', ex1: 'overcook', ex2: 'undercook', ru: 'переварить → недоварить' },
    { pair: ['pre-', 'post-'], emoji: '⚖️', ex1: 'prewar', ex2: 'postwar', ru: 'довоенный → послевоенный' },
    { pair: ['macro-', 'micro-'], emoji: '⚖️', ex1: 'macroeconomics', ex2: 'microeconomics', ru: 'макроэкономика → микроэкономика' },
    { pair: ['maxi-', 'mini-'], emoji: '⚖️', ex1: 'maxiskirt', ex2: 'miniskirt', ru: 'макси → мини' },
    { pair: ['hyper-', 'hypo-'], emoji: '⚖️', ex1: 'hypertension', ex2: 'hypotension', ru: 'гипертония → гипотония' },
    { pair: ['super-', 'sub-'], emoji: '⚖️', ex1: 'superstructure', ex2: 'substructure', ru: 'надстройка → подструктура' },
    { pair: ['in-', '-'], emoji: '⚖️', ex1: 'formal', ex2: 'informal', ru: 'формальный → неформальный' },
    { pair: ['in-', '-'], emoji: '⚖️', ex1: 'direct', ex2: 'indirect', ru: 'прямой → косвенный' },
    { pair: ['im-', '-'], emoji: '⚖️', ex1: 'polite', ex2: 'impolite', ru: 'вежливый → невежливый' },
    { pair: ['im-', '-'], emoji: '⚖️', ex1: 'mature', ex2: 'immature', ru: 'зрелый → незрелый' },
    { pair: ['ir-', '-'], emoji: '⚖️', ex1: 'regular', ex2: 'irregular', ru: 'регулярный → нерегулярный' },
    { pair: ['ir-', '-'], emoji: '⚖️', ex1: 'responsible', ex2: 'irresponsible', ru: 'ответственный → безответственный' },
    { pair: ['il-', '-'], emoji: '⚖️', ex1: 'legal', ex2: 'illegal', ru: 'законный → незаконный' },
    { pair: ['il-', '-'], emoji: '⚖️', ex1: 'legible', ex2: 'illegible', ru: 'читаемый → нечитаемый' },
    { pair: ['dis-', '-'], emoji: '⚖️', ex1: 'order', ex2: 'disorder', ru: 'порядок → беспорядок' },
    { pair: ['dis-', '-'], emoji: '⚖️', ex1: 'honest', ex2: 'dishonest', ru: 'честный → нечестный' },
    { pair: ['un-', '-'], emoji: '⚖️', ex1: 'certain', ex2: 'uncertain', ru: 'уверенный → неуверенный' },
    { pair: ['un-', '-'], emoji: '⚖️', ex1: 'real', ex2: 'unreal', ru: 'реальный → нереальный' },
    { pair: ['un-', '-'], emoji: '⚖️', ex1: 'safe', ex2: 'unsafe', ru: 'безопасный → небезопасный' },
    { pair: ['-', '-less'], emoji: '⚖️', ex1: 'doubt', ex2: 'doubtless', ru: 'сомнение → несомненный' },
    { pair: ['-', '-less'], emoji: '⚖️', ex1: 'end', ex2: 'endless', ru: 'конец → бесконечный' },
    { pair: ['over-', 'under-'], emoji: '⚖️', ex1: 'overcharge', ex2: 'undercharge', ru: 'переплатить → недоплатить' },
    { pair: ['over-', 'under-'], emoji: '⚖️', ex1: 'overestimate', ex2: 'underestimate', ru: 'переоценить → недооценить' },
    { pair: ['over-', 'under-'], emoji: '⚖️', ex1: 'overpay', ex2: 'underpay', ru: 'переплатить → недоплатить' },
    { pair: ['over-', 'under-'], emoji: '⚖️', ex1: 'overwork', ex2: 'underwork', ru: 'переработать → недоработать' },
    { pair: ['up-', 'down-'], emoji: '⚖️', ex1: 'upgrade', ex2: 'downgrade', ru: 'улучшить → ухудшить' }
];

// ───────────────────────────────────────────────────────────
// ВВОДНЫЕ СЛОВА
// ───────────────────────────────────────────────────────────
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
      example: { en: '<b>By the way</b>, I saw Tom.', ru: 'Кстати, я видел Тома.' } }
];

const discourseGroups = [
    { id: 'all', emoji: '📚', name: 'Все' },
    { id: 'emotion', emoji: '🎭', name: 'Эмоция' },
    { id: 'logic', emoji: '🔗', name: 'Логика' },
    { id: 'time', emoji: '⏰', name: 'Время' },
    { id: 'style', emoji: '💬', name: 'Стиль' }
];

// ───────────────────────────────────────────────────────────
// ЭССЕ-СВЯЗКИ
// ───────────────────────────────────────────────────────────
const essayLinkers = [
    { id: 'firstandforemost', group: 'start', en: 'First and foremost', ru: 'первое и наиболее важное',
      emoji: '🥇', trans: '[fɜːst ənd ˈfɔːməʊst]',
      usage: 'Начинает список аргументов.',
      example: { en: '<b>First and foremost</b>, education is a right.', ru: 'Первое и важное — образование это право.' } },
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
    { id: 'actually', group: 'clarify', en: 'Actually', ru: 'вообще-то, на самом деле',
      emoji: '🎯', trans: '[ˈæktʃuəli]',
      usage: 'Поправляет или уточняет.',
      example: { en: '<b>Actually</b>, it is not that simple.', ru: 'На самом деле, всё не так просто.' } },
    { id: 'basically', group: 'clarify', en: 'Basically', ru: 'в основном, по сути',
      emoji: '📌', trans: '[ˈbeɪsɪkli]',
      usage: 'Обобщает главную мысль.',
      example: { en: '<b>Basically</b>, we have two options.', ru: 'По сути, у нас два варианта.' } },
    { id: 'inconclusion', group: 'end', en: 'In conclusion', ru: 'в заключение',
      emoji: '🏁', trans: '[ɪn kənˈkluːʒn]',
      usage: 'Итог эссе.',
      example: { en: '<b>In conclusion</b>, education matters.', ru: 'В заключение, образование важно.' } },
    { id: 'tosumup', group: 'end', en: 'To sum up', ru: 'подводя итог',
      emoji: '🏁', trans: '[tə sʌm ʌp]',
      usage: 'Финальное обобщение.',
      example: { en: '<b>To sum up</b>, we need change.', ru: 'Подводя итог, нам нужны изменения.' } },
    { id: 'allinall', group: 'end', en: 'All in all', ru: 'в целом',
      emoji: '🏁', trans: '[ɔːl ɪn ɔːl]',
      usage: 'Общий вывод.',
      example: { en: '<b>All in all</b>, it\'s worth it.', ru: 'В целом, оно того стоит.' } },
    { id: 'firstofall', group: 'start', en: 'First of all', ru: 'прежде всего',
      emoji: '🥇', trans: '[fɜːst əv ɔːl]',
      usage: 'Начало списка.',
      example: { en: '<b>First of all</b>, let\'s plan.', ru: 'Прежде всего, давай спланируем.' } },
    { id: 'lastbutnot', group: 'end', en: 'Last but not least', ru: 'и последнее, но не менее важное',
      emoji: '🏁', trans: '[lɑːst bʌt nɒt liːst]',
      usage: 'Финальный пункт.',
      example: { en: '<b>Last but not least</b>, thank you.', ru: 'И наконец, спасибо.' } }
];

const essayLinkerGroups = [
    { id: 'all',      emoji: '📚', name: 'Все' },
    { id: 'start',    emoji: '🚀', name: 'Начало' },
    { id: 'develop',  emoji: '➕', name: 'Развитие' },
    { id: 'contrast', emoji: '⚖️', name: 'Контраст' },
    { id: 'clarify',  emoji: '🎯', name: 'Уточнение' },
    { id: 'end',      emoji: '🏁', name: 'Заключение' }
];

// ───────────────────────────────────────────────────────────
// ПОЛЕЗНЫЕ СВЯЗКИ
// ───────────────────────────────────────────────────────────
const usefulLinkers = [
    { id: 'but', group: 'compare', en: 'But', ru: 'но', emoji: '⚡', trans: '[bʌt]',
      usage: 'Простое противопоставление.',
      example: { en: 'I like tea, <b>but</b> she prefers coffee.', ru: 'Я люблю чай, но она кофе.' } },
    { id: 'however-useful', group: 'compare', en: 'However', ru: 'однако', emoji: '⚖️', trans: '[haʊˈevə]',
      usage: 'Формальное противопоставление.',
      example: { en: 'It is expensive. <b>However</b>, it is worth it.', ru: 'Это дорого. Однако стоит.' } },
    { id: 'ontheotherhand', group: 'compare', en: 'On the other hand', ru: 'с другой стороны', emoji: '🤲', trans: '[ɒn ði ˈʌðə hænd]',
      usage: 'Показывает второй взгляд.',
      example: { en: '<b>On the other hand</b>, it saves time.', ru: 'С другой стороны, это экономит время.' } },
    { id: 'whereas', group: 'compare', en: 'Whereas', ru: 'тогда как', emoji: '🔄', trans: '[ˌweərˈæz]',
      usage: 'Формальное сравнение.',
      example: { en: 'He is quiet, <b>whereas</b> she is talkative.', ru: 'Он тихий, тогда как она разговорчива.' } },
    { id: 'because', group: 'explain', en: 'Because', ru: 'потому что', emoji: '💡', trans: '[bɪˈkɒz]',
      usage: 'Самый распространённый способ объяснить причину.',
      example: { en: 'I am late <b>because</b> the bus was late.', ru: 'Я опоздал, потому что автобус задержался.' } },
    { id: 'since', group: 'explain', en: 'Since', ru: 'так как', emoji: '📌', trans: '[sɪns]',
      usage: 'Более формально, чем because.',
      example: { en: '<b>Since</b> you are here, let\'s start.', ru: 'Так как ты здесь, давайте начнём.' } },
    { id: 'asaresult', group: 'explain', en: 'As a result', ru: 'в результате', emoji: '🎯', trans: '[əz ə rɪˈzʌlt]',
      usage: 'Вводит следствие.',
      example: { en: 'It rained. <b>As a result</b>, we stayed home.', ru: 'Шёл дождь. В результате остались дома.' } },
    { id: 'therefore-useful', group: 'explain', en: 'Therefore', ru: 'следовательно', emoji: '🧮', trans: '[ˈðeəfɔː]',
      usage: 'Формальный вывод.',
      example: { en: 'He lied. <b>Therefore</b>, no one trusts him.', ru: 'Он солгал. Следовательно, ему не верят.' } },
    { id: 'dueto', group: 'explain', en: 'Due to', ru: 'из-за', emoji: '⚠️', trans: '[djuː tuː]',
      usage: 'Причина с нейтральным оттенком.',
      example: { en: '<b>Due to</b> the rain, the game was cancelled.', ru: 'Из-за дождя игру отменили.' } },
    { id: 'thanksto', group: 'explain', en: 'Thanks to', ru: 'благодаря', emoji: '🙏', trans: '[θæŋks tuː]',
      usage: 'Причина с положительным оттенком.',
      example: { en: '<b>Thanks to</b> you, I passed the exam.', ru: 'Благодаря тебе я сдал экзамен.' } },
    { id: 'aslongas', group: 'explain', en: 'As long as', ru: 'пока / при условии',
      emoji: '📌', trans: '[əz lɒŋ əz]',
      usage: 'Условие.',
      example: { en: '<b>As long as</b> you try, it\'s fine.', ru: 'Пока ты пытаешься, всё хорошо.' } },
    { id: 'incase', group: 'explain', en: 'In case', ru: 'на случай',
      emoji: '🛡️', trans: '[ɪn keɪs]',
      usage: 'Предосторожность.',
      example: { en: 'Take an umbrella <b>in case</b>.', ru: 'Возьми зонт на случай.' } }
];

const usefulLinkerGroups = [
    { id: 'all',     emoji: '📚', name: 'Все' },
    { id: 'compare', emoji: '⚖️', name: 'Сравнить' },
    { id: 'explain', emoji: '🎯', name: 'Объяснить' }
];

// ───────────────────────────────────────────────────────────
// СЛОВА ВРЕМЕНИ
// ───────────────────────────────────────────────────────────
const allTimeWords = [
    { en: 'Already', ru: 'уже', emoji: '✅', trans: '[ɔːlˈredi]', group: 'past' },
    { en: 'Yesterday', ru: 'вчера', emoji: '📅', trans: '[ˈjestədeɪ]', group: 'past' },
    { en: 'Yesterday morning', ru: 'вчера утром', emoji: '🌅', trans: '[ˈjestədeɪ ˈmɔːnɪŋ]', group: 'past' },
    { en: 'Long ago', ru: 'давно', emoji: '🏛️', trans: '[lɒŋ əˈɡəʊ]', group: 'past' },
    { en: 'Not long ago', ru: 'недавно', emoji: '⏱️', trans: '[nɒt lɒŋ əˈɡəʊ]', group: 'past' },
    { en: 'Day before yesterday', ru: 'позавчера', emoji: '📆', trans: '[deɪ bɪˈfɔː ˈjestədeɪ]', group: 'past' },
    { en: 'Then', ru: 'тогда', emoji: '👉', trans: '[ðen]', group: 'past' },
    { en: 'In time', ru: 'вовремя', emoji: '⏰', trans: '[ɪn taɪm]', group: 'past' },
    { en: 'Last week', ru: 'на прошлой неделе', emoji: '⬅️', trans: '[lɑːst wiːk]', group: 'past' },
    { en: 'Always', ru: 'всегда', emoji: '♾️', trans: '[ˈɔːlweɪz]', group: 'present' },
    { en: 'Now', ru: 'сейчас', emoji: '▶️', trans: '[naʊ]', group: 'present' },
    { en: 'Today', ru: 'сегодня', emoji: '☀️', trans: '[təˈdeɪ]', group: 'present' },
    { en: 'Sometimes', ru: 'иногда', emoji: '🎲', trans: '[ˈsʌmtaɪmz]', group: 'present' },
    { en: 'When', ru: 'когда', emoji: '❓', trans: '[wen]', group: 'present' },
    { en: 'Ever', ru: 'когда-либо', emoji: '✨', trans: '[ˈevə]', group: 'present' },
    { en: 'Right away', ru: 'немедленно', emoji: '⚡', trans: '[raɪt əˈweɪ]', group: 'present' },
    { en: 'Never', ru: 'никогда', emoji: '🚫', trans: '[ˈnevə]', group: 'present' },
    { en: 'Often', ru: 'часто', emoji: '🔁', trans: '[ˈɒfn]', group: 'present' },
    { en: 'Just', ru: 'только что', emoji: '💫', trans: '[dʒʌst]', group: 'present' },
    { en: 'Seldom', ru: 'редко', emoji: '🌘', trans: '[ˈseldəm]', group: 'present' },
    { en: 'Every day', ru: 'каждый день', emoji: '📅', trans: '[ˈevri deɪ]', group: 'present' },
    { en: 'Every year', ru: 'каждый год', emoji: '🗓️', trans: '[ˈevri jɪə]', group: 'present' },
    { en: 'This week', ru: 'на этой неделе', emoji: '📍', trans: '[ðɪs wiːk]', group: 'present' },
    { en: 'In the morning', ru: 'утром', emoji: '🌅', trans: '[ɪn ðə ˈmɔːnɪŋ]', group: 'present' },
    { en: 'In the evening', ru: 'вечером', emoji: '🌆', trans: '[ɪn ði ˈiːvnɪŋ]', group: 'present' },
    { en: 'At night', ru: 'ночью', emoji: '🌙', trans: '[ət naɪt]', group: 'present' },
    { en: 'At noon', ru: 'в полдень', emoji: '🕛', trans: '[ət nuːn]', group: 'present' },
    { en: 'At midnight', ru: 'в полночь', emoji: '🌌', trans: '[ət ˈmɪdnaɪt]', group: 'present' },
    { en: 'Tomorrow', ru: 'завтра', emoji: '🌤️', trans: '[təˈmɒrəʊ]', group: 'future' },
    { en: 'Tomorrow night', ru: 'завтра ночью', emoji: '🌙', trans: '[təˈmɒrəʊ naɪt]', group: 'future' },
    { en: 'It is late', ru: 'поздно', emoji: '🌌', trans: '[ɪt ɪz leɪt]', group: 'future' },
    { en: 'Day after tomorrow', ru: 'послезавтра', emoji: '📅', trans: '[deɪ ˈɑːftə təˈmɒrəʊ]', group: 'future' },
    { en: 'In two days', ru: 'через два дня', emoji: '2️⃣', trans: '[ɪn tuː deɪz]', group: 'future' },
    { en: 'In a week', ru: 'через неделю', emoji: '📆', trans: '[ɪn ə wiːk]', group: 'future' },
    { en: 'In a month', ru: 'через месяц', emoji: '🗓️', trans: '[ɪn ə mʌnθ]', group: 'future' },
    { en: 'In a year', ru: 'через год', emoji: '📅', trans: '[ɪn ə jɪə]', group: 'future' },
    { en: 'In a few years', ru: 'через несколько лет', emoji: '🔮', trans: '[ɪn ə fjuː jɪəz]', group: 'future' },
    { en: 'Next week', ru: 'на следующей неделе', emoji: '➡️', trans: '[nekst wiːk]', group: 'future' },
    { en: 'In a second', ru: 'через секунду', emoji: '⚡', trans: '[ɪn ə ˈsekənd]', group: 'future' },
    { en: 'Very soon', ru: 'очень скоро', emoji: '🚀', trans: '[ˈveri suːn]', group: 'future' },
    { en: 'Later on', ru: 'позже', emoji: '➡️', trans: '[ˈleɪtər ɒn]', group: 'future' },
    { en: 'Eventually', ru: 'в конечном итоге', emoji: '🏁', trans: '[ɪˈventʃuəli]', group: 'future' }
];

const allTimeWordGroups = [
    { id: 'all',     emoji: '📚', name: 'Все',        color: '#c49a6c' },
    { id: 'past',    emoji: '⏪', name: 'Прошлое',    color: '#8b6946' },
    { id: 'present', emoji: '⏺️', name: 'Настоящее',  color: '#6b8e23' },
    { id: 'future',  emoji: '⏩', name: 'Будущее',    color: '#b97f44' }
];

// ───────────────────────────────────────────────────────────
// ПРЕДЛОГИ ВРЕМЕНИ
// ───────────────────────────────────────────────────────────
const timePrepositions = [
    { prep: 'at', emoji: '🕐', color: '#8b6946', usage: 'для точного времени', short: 'точное время',
      example: { en: 'I\'ll see you <b>at</b> 7 o\'clock.', ru: 'Увидимся в 7 часов.' } },
    { prep: 'in', emoji: '📅', color: '#6b8e23', usage: 'для месяцев, лет, сезонов', short: 'месяцы, годы',
      example: { en: 'We\'ll travel <b>in</b> July.', ru: 'Мы поедем в июле.' } },
    { prep: 'by', emoji: '⏱️', color: '#b97f44', usage: 'к определённому времени', short: 'к моменту',
      example: { en: 'I\'ll finish it <b>by</b> Monday.', ru: 'Я закончу к понедельнику.' } },
    { prep: 'on', emoji: '📆', color: '#8b6946', usage: 'для дней недели и дат', short: 'дни и даты',
      example: { en: 'My birthday is <b>on</b> May 5th.', ru: 'Мой день рождения 5 мая.' } },
    { prep: 'till', emoji: '⏳', color: '#c49a6c', usage: 'до определённого момента', short: 'до момента',
      example: { en: 'Wait for me <b>till</b> 6 pm.', ru: 'Подожди меня до 6 вечера.' } },
    { prep: 'until', emoji: '🔚', color: '#c49a6c', usage: 'до момента (отрицания)', short: 'до (отриц.)',
      example: { en: 'I won\'t leave <b>until</b> you come back.', ru: 'Я не уйду, пока ты не вернёшься.' } },
    { prep: 'since', emoji: '📍', color: '#6b8e23', usage: 'с какого-то момента', short: 'с какого момента',
      example: { en: 'I\'ve been here <b>since</b> 2020.', ru: 'Я здесь с 2020 года.' } },
    { prep: 'for', emoji: '⏰', color: '#6b8e23', usage: 'длительность действия', short: 'длительность',
      example: { en: 'I\'ve lived here <b>for</b> 4 years.', ru: 'Я живу здесь 4 года.' } },
    { prep: 'between', emoji: '↔️', color: '#b97f44', usage: 'между двумя моментами', short: 'между',
      example: { en: 'The meeting is <b>between</b> 2 and 4 pm.', ru: 'Встреча между 2 и 4.' } },
    { prep: 'during', emoji: '🎬', color: '#8b6946', usage: 'во время периода', short: 'во время',
      example: { en: 'I read a lot <b>during</b> the holidays.', ru: 'Я много читаю на каникулах.' } },
    { prep: 'before', emoji: '⬅️', color: '#c49a6c', usage: 'до какого-то момента', short: 'до',
      example: { en: 'Please finish it <b>before</b> 5 pm.', ru: 'Закончи это до 5 вечера.' } },
    { prep: 'after', emoji: '➡️', color: '#c49a6c', usage: 'после какого-то момента', short: 'после',
      example: { en: 'Let\'s meet <b>after</b> class.', ru: 'Давай встретимся после уроков.' } },
    { prep: 'through', emoji: '🌙', color: '#8b6946', usage: 'с начала до конца периода', short: 'насквозь',
      example: { en: 'We worked <b>through</b> the night.', ru: 'Мы работали всю ночь.' } }
];

const timePrepositionCheatsheet = [
    { rule: 'ON — для дней и дат',              detail: 'on Monday, on June 10th',           emoji: '📆' },
    { rule: 'IN — для месяцев, лет и сезонов',  detail: 'in May, in 2024, in summer',       emoji: '📅' },
    { rule: 'AT — для точного времени',         detail: 'at 7 o\'clock, at noon, at night', emoji: '🕐' },
    { rule: 'BY — к какому-то моменту',         detail: 'by Friday, by 5 pm',                emoji: '⏱️' },
    { rule: 'TILL/UNTIL — до момента',          detail: 'till 5 pm, until the end',          emoji: '⏳' },
    { rule: 'SINCE — точка старта',             detail: 'since 2019, since morning',         emoji: '📍' },
    { rule: 'FOR — сам период',                 detail: 'for 2 hours, for a long time',      emoji: '⏰' },
    { rule: 'BETWEEN — между точками',          detail: 'between 1 and 4',                   emoji: '↔️' },
    { rule: 'DURING — во время события',        detail: 'during the lesson',                 emoji: '🎬' },
    { rule: 'BEFORE / AFTER — до и после',      detail: 'before lunch, after school',        emoji: '⬅️➡️' }
];

const usefulAbbreviations = [
    { abbr: 'a.m.',  meaning: 'до полудня',        emoji: '🌅' },
    { abbr: 'p.m.',  meaning: 'после полудня',     emoji: '🌇' },
    { abbr: 'e.g.',  meaning: 'например',          emoji: '💡' },
    { abbr: 'i.e.',  meaning: 'то есть',           emoji: '🎯' },
    { abbr: 'etc.',  meaning: 'и так далее',       emoji: '➕' }
];

// ───────────────────────────────────────────────────────────
// ВОПРОСИТЕЛЬНЫЕ СЛОВА
// ───────────────────────────────────────────────────────────
const questionWords = [
    { en: 'How', ru: 'как', emoji: '🤔', group: 'basic', trans: '[haʊ]',
      example: { en: '<b>How</b> are you?', ru: 'Как ты?' } },
    { en: 'What', ru: 'что / какой', emoji: '❓', group: 'basic', trans: '[wɒt]',
      example: { en: '<b>What</b> is this?', ru: 'Что это?' } },
    { en: 'When', ru: 'когда', emoji: '⏰', group: 'basic', trans: '[wen]',
      example: { en: '<b>When</b> do you wake up?', ru: 'Когда ты просыпаешься?' } },
    { en: 'Where', ru: 'где / куда', emoji: '📍', group: 'basic', trans: '[weə]',
      example: { en: '<b>Where</b> do you live?', ru: 'Где ты живёшь?' } },
    { en: 'Which', ru: 'который', emoji: '🔀', group: 'basic', trans: '[wɪtʃ]',
      example: { en: '<b>Which</b> one?', ru: 'Который?' } },
    { en: 'Who', ru: 'кто', emoji: '👤', group: 'basic', trans: '[huː]',
      example: { en: '<b>Who</b> is that?', ru: 'Кто это?' } },
    { en: 'Whose', ru: 'чей', emoji: '🔑', group: 'basic', trans: '[huːz]',
      example: { en: '<b>Whose</b> bag is this?', ru: 'Чья это сумка?' } },
    { en: 'Why', ru: 'почему', emoji: '💭', group: 'basic', trans: '[waɪ]',
      example: { en: '<b>Why</b> are you late?', ru: 'Почему ты опоздал?' } },
    { en: 'How far', ru: 'как далеко', emoji: '📏', group: 'how', trans: '[haʊ fɑː]',
      example: { en: '<b>How far</b> is the station?', ru: 'Как далеко вокзал?' } },
    { en: 'How long', ru: 'как долго', emoji: '⏳', group: 'how', trans: '[haʊ lɒŋ]',
      example: { en: '<b>How long</b> does it take?', ru: 'Сколько времени занимает?' } },
    { en: 'How old', ru: 'сколько лет', emoji: '🎂', group: 'how', trans: '[haʊ əʊld]',
      example: { en: '<b>How old</b> are you?', ru: 'Сколько тебе лет?' } },
    { en: 'How many', ru: 'сколько (исчисл.)', emoji: '🔢', group: 'how', trans: '[haʊ ˈmeni]',
      example: { en: '<b>How many</b> books?', ru: 'Сколько книг?' } },
    { en: 'How much', ru: 'сколько (неисчисл.)', emoji: '💰', group: 'how', trans: '[haʊ mʌtʃ]',
      example: { en: '<b>How much</b> does it cost?', ru: 'Сколько это стоит?' } },
    { en: 'How often', ru: 'как часто', emoji: '🔁', group: 'how', trans: '[haʊ ˈɒfn]',
      example: { en: '<b>How often</b> do you run?', ru: 'Как часто ты бегаешь?' } },
    { en: 'What time', ru: 'во сколько', emoji: '🕐', group: 'basic', trans: '[wɒt taɪm]',
      example: { en: '<b>What time</b> is it?', ru: 'Сколько времени?' } }
];

const questionWordGroups = [
    { id: 'all',   emoji: '📚', name: 'Все' },
    { id: 'basic', emoji: '❓', name: 'Основные' },
    { id: 'how',   emoji: '📏', name: 'How + ...' }
];

// ───────────────────────────────────────────────────────────
// ВОЛШЕБНЫЕ ГЛАГОЛЫ
// ───────────────────────────────────────────────────────────
const magicVerbs = [
    { verb: 'get', emoji: '🎩', meaning: 'САМЫЙ УНИВЕРСАЛЬНЫЙ',
      assoc: 'Один get заменяет 50 глаголов!', note: 'get = получать, становиться, добираться, понимать.',
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
    { verb: 'have', emoji: '🎒', meaning: 'ИМЕТЬ / ПРИНИМАТЬ',
      assoc: 'have + существительное = действие', note: 'have = иметь, есть, принимать.',
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
    { verb: 'take', emoji: '✋', meaning: 'БРАТЬ / ЗАНИМАТЬ',
      assoc: 'take = взять / занять время / принять', note: 'take = брать, занимать, принимать.',
      senses: [
        { sense: 'БРАТЬ', ru: 'брать', ex: '<b>Take</b> this book.', exRu: 'Возьми книгу.' },
        { sense: 'ЗАНИМАТЬ ВРЕМЯ', ru: 'занимать', ex: 'It <b>takes</b> an hour.', exRu: 'Занимает час.' },
        { sense: 'ПРИНИМАТЬ', ru: 'принимать', ex: '<b>Take</b> medicine.', exRu: 'Прими лекарство.' }
      ],
      phrases: [
        { p: 'take off', ru: 'снять / взлететь', ex: '<b>Take off</b> shoes.', exRu: 'Сними обувь.' },
        { p: 'take care of', ru: 'заботиться', ex: '<b>Take care of</b> yourself.', exRu: 'Заботься о себе.' },
        { p: 'take a photo', ru: 'фотографировать', ex: '<b>Take a photo</b>.', exRu: 'Сфотографируй.' },
        { p: 'take part', ru: 'участвовать', ex: 'I <b>take part</b> in it.', exRu: 'Я участвую.' }
      ]
    },
    { verb: 'make', emoji: '🔨', meaning: 'ДЕЛАТЬ / СОЗДАВАТЬ',
      assoc: 'make = создавать что-то новое', note: 'make = создавать, заставлять.',
      senses: [
        { sense: 'СОЗДАВАТЬ', ru: 'делать', ex: 'I <b>make</b> coffee.', exRu: 'Я делаю кофе.' },
        { sense: 'ЗАСТАВЛЯТЬ', ru: 'заставлять', ex: 'You <b>make</b> me laugh.', exRu: 'Заставляешь смеяться.' }
      ],
      phrases: [
        { p: 'make up', ru: 'придумать', ex: 'She <b>made up</b> a story.', exRu: 'Она придумала историю.' },
        { p: 'make sure', ru: 'убедиться', ex: '<b>Make sure</b> you come.', exRu: 'Убедись, что придёшь.' },
        { p: 'make friends', ru: 'подружиться', ex: 'I <b>made friends</b>.', exRu: 'Я подружился.' },
        { p: 'make a decision', ru: 'принять решение', ex: '<b>Make a decision</b>.', exRu: 'Прими решение.' }
      ]
    },
    { verb: 'do', emoji: '✅', meaning: 'ДЕЛАТЬ (работу)',
      assoc: 'do = выполнять действие', note: 'do = делать работу, домашку, упражнение.',
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
    { verb: 'go', emoji: '🚶', meaning: 'ИДТИ / ЕХАТЬ',
      assoc: 'go заменяет 30+ глаголов', note: 'go = идти, становиться, работать.',
      senses: [
        { sense: 'ИДТИ', ru: 'идти', ex: 'I <b>go</b> to work.', exRu: 'Я иду на работу.' },
        { sense: 'СТАНОВИТЬСЯ', ru: 'становиться', ex: 'The milk <b>went</b> bad.', exRu: 'Молоко испортилось.' },
        { sense: 'ЕХАТЬ', ru: 'ехать', ex: 'We <b>go</b> to Paris.', exRu: 'Мы едем в Париж.' }
      ],
      phrases: [
        { p: 'go on', ru: 'продолжать', ex: '<b>Go on</b>, I listen.', exRu: 'Продолжай, слушаю.' },
        { p: 'go out', ru: 'гулять', ex: 'Let\'s <b>go out</b>.', exRu: 'Давай погуляем.' },
        { p: 'go back', ru: 'возвращаться', ex: 'I must <b>go back</b>.', exRu: 'Должен вернуться.' },
        { p: 'go up', ru: 'подниматься', ex: 'Prices <b>go up</b>.', exRu: 'Цены растут.' }
      ]
    },
    { verb: 'come', emoji: '🏠', meaning: 'ПРИХОДИТЬ',
      assoc: 'Антоним go', note: 'come = приходить, приближаться.',
      senses: [
        { sense: 'ПРИХОДИТЬ', ru: 'приходить', ex: '<b>Come</b> here.', exRu: 'Иди сюда.' },
        { sense: 'ПРИБЫВАТЬ', ru: 'прибывать', ex: 'Train <b>comes</b> at 6.', exRu: 'Поезд прибывает в 6.' }
      ],
      phrases: [
        { p: 'come in', ru: 'входить', ex: '<b>Come in</b>.', exRu: 'Заходи.' },
        { p: 'come back', ru: 'возвращаться', ex: '<b>Come back</b> soon!', exRu: 'Возвращайся скорее!' },
        { p: 'come on', ru: 'давай', ex: '<b>Come on</b>, hurry!', exRu: 'Давай, поторопись!' },
        { p: 'come from', ru: 'быть родом из', ex: 'I <b>come from</b> Russia.', exRu: 'Я родом из России.' }
      ]
    },
    { verb: 'look', emoji: '👀', meaning: 'СМОТРЕТЬ / ВЫГЛЯДЕТЬ',
      assoc: 'look + предлог = 15 значений', note: 'look = смотреть, выглядеть, искать.',
      senses: [
        { sense: 'СМОТРЕТЬ', ru: 'смотреть', ex: '<b>Look</b> at this.', exRu: 'Посмотри на это.' },
        { sense: 'ВЫГЛЯДЕТЬ', ru: 'выглядеть', ex: 'You <b>look</b> tired.', exRu: 'Ты выглядишь уставшим.' },
        { sense: 'ИСКАТЬ', ru: 'искать', ex: 'I\'m <b>looking</b> for keys.', exRu: 'Я ищу ключи.' }
      ],
      phrases: [
        { p: 'look at', ru: 'смотреть на', ex: '<b>Look at</b> the sky!', exRu: 'Посмотри на небо!' },
        { p: 'look for', ru: 'искать', ex: 'I\'m <b>looking for</b> my phone.', exRu: 'Я ищу телефон.' },
        { p: 'look after', ru: 'заботиться', ex: 'She <b>looks after</b> sister.', exRu: 'Она заботится о сестре.' },
        { p: 'look forward to', ru: 'с нетерпением ждать', ex: 'I <b>look forward to</b> reply.', exRu: 'Жду ответа.' }
      ]
    }
];

// ───────────────────────────────────────────────────────────
// СЛОВА-ЗАГЛУШКИ
// ───────────────────────────────────────────────────────────
const magicWords = [
    { word: 'thing', emoji: '📦', ru: 'вещь / штука',
      note: 'Заменяет любое существительное, которое забыл.',
      examples: [
        { ex: 'Give me that <b>thing</b>.', exRu: 'Дай мне эту штуку.' },
        { ex: 'The <b>thing</b> is...', exRu: 'Дело в том, что...' }
      ]
    },
    { word: 'stuff', emoji: '🎒', ru: 'вещи / барахло',
      note: 'Неформальное «вещи» для любого набора предметов.',
      examples: [
        { ex: 'Where is my <b>stuff</b>?', exRu: 'Где мои вещи?' },
        { ex: 'I have a lot of <b>stuff</b>.', exRu: 'У меня много вещей.' }
      ]
    },
    { word: 'way', emoji: '🛣️', ru: 'способ / путь',
      note: 'Заменяет «метод», «стиль», «направление».',
      examples: [
        { ex: 'Do it this <b>way</b>.', exRu: 'Сделай это так.' },
        { ex: 'By the <b>way</b>, ...', exRu: 'Кстати, ...' }
      ]
    },
    { word: 'place', emoji: '📍', ru: 'место',
      note: 'Любое место, заведение, точка.',
      examples: [
        { ex: 'This is a nice <b>place</b>.', exRu: 'Это хорошее место.' },
        { ex: 'Let\'s go to another <b>place</b>.', exRu: 'Пойдём в другое место.' }
      ]
    },
    { word: 'guy', emoji: '👤', ru: 'парень / чувак',
      note: 'Разговорное «человек». Мн. ч. guys = ребята.',
      examples: [
        { ex: 'That <b>guy</b> is funny.', exRu: 'Тот парень смешной.' },
        { ex: 'Hey <b>guys</b>!', exRu: 'Привет, ребята!' }
      ]
    },
    { word: 'bit', emoji: '🤏', ru: 'немного',
      note: 'Означает «немного» или «кусочек».',
      examples: [
        { ex: 'A <b>bit</b> of sugar.', exRu: 'Немного сахара.' },
        { ex: 'I am a <b>bit</b> tired.', exRu: 'Я немного устал.' }
      ]
    },
    { word: 'lot', emoji: '📈', ru: 'много',
      note: 'A lot = много. Заменяет many/much.',
      examples: [
        { ex: 'A <b>lot</b> of people.', exRu: 'Много людей.' },
        { ex: 'Thanks a <b>lot</b>.', exRu: 'Большое спасибо.' }
      ]
    },
    { word: 'kind', emoji: '🎭', ru: 'вид / тип',
      note: 'Kind of = вид, тип. Also kind = добрый.',
      examples: [
        { ex: 'What <b>kind</b> of music?', exRu: 'Какой вид музыки?' },
        { ex: 'It\'s a new <b>kind</b>.', exRu: 'Это новый вид.' }
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
        { ex: 'This <b>time</b> I will win.', exRu: 'На этот раз я выиграю.' }
      ]
    },
    { word: 'issue', emoji: '⚠️', ru: 'проблема / вопрос',
      note: 'Issue = проблема или тема.',
      examples: [
        { ex: 'We have an <b>issue</b>.', exRu: 'У нас проблема.' },
        { ex: 'What\'s the <b>issue</b>?', exRu: 'В чём проблема?' }
      ]
    },
    { word: 'sense', emoji: '💡', ru: 'смысл / чувство',
      note: 'Sense = смысл, чувство.',
      examples: [
        { ex: 'It makes <b>sense</b>.', exRu: 'Это логично.' },
        { ex: 'Common <b>sense</b>.', exRu: 'Здравый смысл.' }
      ]
    }
];

// ───────────────────────────────────────────────────────────
// ФРАЗЫ-СПАСАЛКИ
// ───────────────────────────────────────────────────────────
const survivalPhrases = [
    { en: 'How do you say ... in English?', ru: 'Как сказать ... по-английски?' },
    { en: 'What does it mean?', ru: 'Что это значит?' },
    { en: 'I don\'t understand.', ru: 'Я не понимаю.' },
    { en: 'Can you repeat, please?', ru: 'Можешь повторить?' },
    { en: 'Speak slowly, please.', ru: 'Говори медленнее, пожалуйста.' },
    { en: 'How do I spell it?', ru: 'Как это пишется?' },
    { en: 'I\'m not sure how to say it.', ru: 'Я не уверен, как это сказать.' },
    { en: 'Sorry, my English is not very good.', ru: 'Извини, мой английский не очень.' },
    { en: 'Long time no see!', ru: 'Давно не виделись!' },
    { en: 'What\'s up?', ru: 'Что нового?' },
    { en: 'How\'s it going?', ru: 'Как дела?' },
    { en: 'Have a nice day!', ru: 'Хорошего дня!' },
    { en: 'You\'re welcome.', ru: 'Пожалуйста.' },
    { en: 'Excuse me, please.', ru: 'Извините, пожалуйста.' },
    { en: 'I\'m sorry to hear that.', ru: 'Мне жаль это слышать.' },
    { en: 'Congratulations!', ru: 'Поздравляю!' },
    { en: 'Good luck!', ru: 'Удачи!' },
    { en: 'See you later.', ru: 'До скорого.' },
    { en: 'Could you spell that, please?', ru: 'Не могли бы вы продиктовать по буквам?' },
    { en: 'How do you pronounce this?', ru: 'Как это произносится?' }
];

// ───────────────────────────────────────────────────────────
// ОБУЧАЮЩИЕ МОДУЛИ — ДАННЫЕ
// ───────────────────────────────────────────────────────────
const wordBuilderKit = [
    { base: 'happy', emoji: '😊', ru: 'счастливый',
      forms: [
        { word: 'unhappy',    affix: 'un-',   meaning: 'несчастный',       emoji: '😢' },
        { word: 'happiness',  affix: '-ness', meaning: 'счастье',          emoji: '💠' },
        { word: 'happily',    affix: '-ly',   meaning: 'счастливо',        emoji: '🌞' },
        { word: 'happier',    affix: '-er',   meaning: 'счастливее',       emoji: '⬆️' }
      ]
    },
    { base: 'care', emoji: '💗', ru: 'забота',
      forms: [
        { word: 'careful',    affix: '-ful',  meaning: 'осторожный',   emoji: '🧐' },
        { word: 'careless',   affix: '-less', meaning: 'безалаберный', emoji: '🙈' },
        { word: 'carefully',  affix: '-ly',   meaning: 'осторожно',    emoji: '🐢' },
        { word: 'caring',     affix: '-ing',  meaning: 'заботливый',   emoji: '🤗' }
      ]
    },
    { base: 'help', emoji: '🤝', ru: 'помощь',
      forms: [
        { word: 'helpful',    affix: '-ful',  meaning: 'полезный',    emoji: '✅' },
        { word: 'helpless',   affix: '-less', meaning: 'беспомощный', emoji: '😰' },
        { word: 'helper',     affix: '-er',   meaning: 'помощник',    emoji: '🧑‍🔧' }
      ]
    },
    { base: 'create', emoji: '🎨', ru: 'создавать',
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
    { emoji: '🔗', chain: ['use', 'useful', 'useless', 'usefully'],      ru: 'пользоваться → полезный → бесполезный → с пользой' }
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
    { q: 'Из чего состоит <b>disagreement</b>?', options: ['dis+agree+ment', 'dis+agreement', 'dis+gree'], correct: 0, hint: 'dis + agree + ment' },
    { q: 'Какое слово значит "полезный"?',  options: ['use', 'useful', 'useless'],     correct: 1, hint: '-ful = полный' },
    { q: 'Что означает приставка <b>over-</b>?', options: ['под', 'слишком', 'между'], correct: 1, hint: 'overwork = перерабатывать' }
];

const commonMistakes = [
    { wrong: 'I am agree',       right: 'I agree',            why: 'agree — уже глагол, не нужен "am"' },
    { wrong: 'I have 20 years',  right: 'I am 20 years old',  why: 'О возрасте — только be' },
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
    { affix: 'out-',   ru: 'ПРЕВОСХОДИТЬ', top5: ['outrun', 'outsmart', 'outlive', 'outperform', 'outnumber'] }
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
            { a: 'mis-',   hint: 'ошибочно',     ex: 'mistake' },
            { a: 'anti-',  hint: 'против',       ex: 'antivirus' }
        ]
    },
    repeat: {
        emoji: '🔄', title: 'ПОВТОРЕНИЕ', color: '#6b8e23',
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
            { a: 'fore-', hint: 'заранее',  ex: 'forecast' }
        ]
    },
    number: {
        emoji: '🔢', title: 'КОЛИЧЕСТВО', color: '#c49a6c',
        desc: 'Сколько?',
        affixes: [
            { a: 'mono-',  hint: 'один',    ex: 'monopoly' },
            { a: 'bi-',    hint: 'два',     ex: 'bicycle' },
            { a: 'tri-',   hint: 'три',     ex: 'triangle' },
            { a: 'multi-', hint: 'много',   ex: 'multicultural' },
            { a: 'semi-',  hint: 'половина',ex: 'semicircle' }
        ]
    },
    relation: {
        emoji: '🤝', title: 'ВЗАИМОДЕЙСТВИЕ', color: '#6b8e23',
        desc: 'Вместе, против, взаимно.',
        affixes: [
            { a: 'co-',    hint: 'вместе',  ex: 'cooperate' },
            { a: 'con-',   hint: 'вместе',  ex: 'connect' },
            { a: 'anti-',  hint: 'против',  ex: 'antisocial' },
            { a: 'auto-',  hint: 'сам',     ex: 'automatic' }
        ]
    }
};

const wordFamilies = [
    { root: 'act', emoji: '🎬', meaning: 'действовать',
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
    { root: 'use', emoji: '🔧', meaning: 'использовать',
      members: [
        { word: 'use', pos: 'verb', ru: 'использовать', affix: '—' },
        { word: 'user', pos: 'noun', ru: 'пользователь', affix: '-er' },
        { word: 'usage', pos: 'noun', ru: 'использование', affix: '-age' },
        { word: 'useful', pos: 'adjective', ru: 'полезный', affix: '-ful' },
        { word: 'useless', pos: 'adjective', ru: 'бесполезный', affix: '-less' },
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
        { word: 'unhelpful', pos: 'adjective', ru: 'бесполезный', affix: 'un-' }
      ]
    },
    { root: 'beauty', emoji: '🌸', meaning: 'красота',
      members: [
        { word: 'beauty',      pos: 'noun',      ru: 'красота',       affix: '—' },
        { word: 'beautiful',   pos: 'adjective', ru: 'красивый',      affix: '-ful' },
        { word: 'beautifully', pos: 'adverb',    ru: 'красиво',       affix: '-ful + -ly' },
        { word: 'beautify',    pos: 'verb',      ru: 'украшать',      affix: '-ify' }
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
    }
];

const converterRules = [
    { from: 'verb', to: 'noun', suffix: '-tion', emoji: '📦', ex1: 'inform',   ex2: 'information' },
    { from: 'verb', to: 'noun', suffix: '-ment', emoji: '📦', ex1: 'develop',  ex2: 'development' },
    { from: 'verb', to: 'noun', suffix: '-er/-or', emoji: '👤', ex1: 'teach', ex2: 'teacher' },
    { from: 'adj',  to: 'adverb', suffix: '-ly', emoji: '💨', ex1: 'quick', ex2: 'quickly' },
    { from: 'adj',  to: 'noun', suffix: '-ness', emoji: '💠', ex1: 'happy', ex2: 'happiness' },
    { from: 'noun', to: 'adj', suffix: '-al', emoji: '🎨', ex1: 'nation', ex2: 'national' },
    { from: 'noun', to: 'adj', suffix: '-ful', emoji: '🎨', ex1: 'beauty', ex2: 'beautiful' },
    { from: 'noun', to: 'adj', suffix: '-less', emoji: '🎨', ex1: 'home', ex2: 'homeless' },
    { from: 'noun', to: 'verb', suffix: '-ize', emoji: '⚡', ex1: 'modern', ex2: 'modernize' },
    { from: 'noun', to: 'verb', suffix: '-ify', emoji: '⚡', ex1: 'beauty', ex2: 'beautify' }
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
    { id: 'prefixes-basic', emoji: '🧩', title: 'Приставки: базовый',
      questions: [
        { q: 'Что означает <b>re-</b>?', options: ['снова', 'против', 'под'], correct: 0, hint: 'rewrite = переписать' },
        { q: 'Что означает <b>mis-</b>?', options: ['много', 'неправильно', 'между'], correct: 1, hint: 'mistake = ошибка' },
        { q: 'Что означает <b>un-</b>?', options: ['очень', 'не / обратное действие', 'до'], correct: 1, hint: 'unhappy' }
      ]
    },
    { id: 'suffixes-basic', emoji: '🧩', title: 'Суффиксы: базовый',
      questions: [
        { q: 'Суффикс <b>-er</b> создаёт...', options: ['наречие', 'того, кто делает', 'прилагательное'], correct: 1, hint: 'teacher, worker' },
        { q: 'Суффикс <b>-ly</b> создаёт...', options: ['наречие', 'существительное', 'глагол'], correct: 0, hint: 'quickly' },
        { q: 'Суффикс <b>-ful</b> означает...', options: ['без', 'полный', 'много'], correct: 1, hint: 'beautiful, useful' }
      ]
    }
];

const miniDialogues = [
    { emoji: '☕', affix: 'have', title: 'В кафе',
      lines: [
        { who: 'A', en: 'Can I <b>have</b> a coffee?', ru: 'Можно мне кофе?' },
        { who: 'B', en: 'Sure. With milk?', ru: 'Конечно. С молоком?' },
        { who: 'A', en: 'Yes, please.', ru: 'Да, пожалуйста.' }
      ]
    },
    { emoji: '📞', affix: 'call', title: 'Звонок другу',
      lines: [
        { who: 'A', en: 'Hey! How are you?', ru: 'Привет! Как ты?' },
        { who: 'B', en: 'I\'m fine. And you?', ru: 'Хорошо. А ты?' },
        { who: 'A', en: 'I\'ll <b>call</b> you later.', ru: 'Позвоню тебе позже.' }
      ]
    },
    { emoji: '🛒', affix: 'buy', title: 'В магазине',
      lines: [
        { who: 'A', en: 'How much is this?', ru: 'Сколько это стоит?' },
        { who: 'B', en: 'It\'s 10 dollars.', ru: '10 долларов.' },
        { who: 'A', en: 'I\'ll <b>buy</b> it.', ru: 'Я куплю это.' }
      ]
    },
    { emoji: '🍽️', affix: 'eat', title: 'В ресторане',
      lines: [
        { who: 'A', en: 'What would you like to <b>eat</b>?', ru: 'Что бы ты хотел поесть?' },
        { who: 'B', en: 'I\'d like pasta, please.', ru: 'Я хотел бы пасту.' },
        { who: 'A', en: 'Good choice!', ru: 'Хороший выбор!' }
      ]
    },
    { emoji: '📚', affix: 'study', title: 'Перед экзаменом',
      lines: [
        { who: 'A', en: 'Did you <b>study</b> for the test?', ru: 'Ты готовился к тесту?' },
        { who: 'B', en: 'Yes, all night!', ru: 'Да, всю ночь!' },
        { who: 'A', en: 'You\'ll do great!', ru: 'Ты справишься!' }
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
// ПРАКТИКА — ИСТОРИИ, ДИКТАНТ, ЭССЕ
// ───────────────────────────────────────────────────────────
const miniStories = [
    { id: 'morning', emoji: '🌅', title: 'Утро программиста',
      affixes: ['re-', 'un-', 'pre-'],
      lines: [
        { en: 'Tom <b>un</b>locked his laptop.', ru: 'Том разблокировал ноутбук.' },
        { en: 'He <b>re</b>started the system.', ru: 'Он перезапустил систему.' },
        { en: 'He <b>pre</b>pared coffee first.', ru: 'Сначала он приготовил кофе.' },
        { en: 'The task seemed <b>im</b>possible.', ru: 'Задача казалась невозможной.' },
        { en: 'But Tom was <b>un</b>stoppable.', ru: 'Но Тома было не остановить.' }
      ]
    },
    { id: 'weekend', emoji: '🏖️', title: 'Выходные на пляже',
      affixes: ['over-', 'under-', 'dis-'],
      lines: [
        { en: 'We decided to <b>over</b>sleep on Saturday.', ru: 'Мы решили поспать подольше.' },
        { en: 'The sun was <b>over</b>whelmingly bright.', ru: 'Солнце было ослепительно ярким.' },
        { en: 'Anna <b>dis</b>covered a quiet beach.', ru: 'Анна обнаружила тихий пляж.' },
        { en: 'We <b>under</b>estimated the walk.', ru: 'Мы недооценили прогулку.' },
        { en: 'It was <b>out</b>standing!', ru: 'Это было потрясающе!' }
      ]
    },
    { id: 'exam', emoji: '📝', title: 'Экзамен',
      affixes: ['mis-', 'pre-', 're-'],
      lines: [
        { en: 'I <b>mis</b>read the first question.', ru: 'Я неправильно прочитал первый вопрос.' },
        { en: 'It was <b>un</b>fair — so tricky!', ru: 'Это было несправедливо — так сложно!' },
        { en: 'I <b>re</b>read it slowly.', ru: 'Я перечитал его медленно.' },
        { en: 'Then I <b>re</b>alized my <b>mis</b>take.', ru: 'Тогда я осознал свою ошибку.' },
        { en: 'The result was <b>in</b>credible!', ru: 'Результат был невероятным!' }
      ]
    }
];

const dictationBank = [
    { level: 'easy', emoji: '🌱', en: 'I am happy.',         ru: 'Я счастлив.',                affix: '-y' },
    { level: 'easy', emoji: '🌱', en: 'She is unhappy.',     ru: 'Она несчастна.',             affix: 'un-' },
    { level: 'easy', emoji: '🌱', en: 'We rewrite the text.', ru: 'Мы переписываем текст.',    affix: 're-' },
    { level: 'easy', emoji: '🌱', en: 'The boy is careless.', ru: 'Мальчик беспечен.',        affix: '-less' },
    { level: 'easy', emoji: '🌱', en: 'It is impossible.',   ru: 'Это невозможно.',            affix: 'im-' },
    { level: 'easy', emoji: '🌱', en: 'She is a teacher.',   ru: 'Она учительница.',           affix: '-er' },
    { level: 'medium', emoji: '🌿', en: 'They misunderstood the question.', ru/: 'Они не поняли вопрос.', affix: 'mis-' },
    { level: 'medium', emoji: '🌿', en: 'He overslept and missed the train.', ru: 'Он проспал поезд.', affix: 'over-' },
    { level: 'medium', emoji: '🌿', en: 'We underestimated the difficulty.', ru: 'Мы недооценили сложность.', affix: 'under-' },
    { level: 'medium', emoji: '🌿', en: 'The performance was outstanding.', ru: 'Выступление было выдающимся.', affix: 'out-' },
    { level: 'medium', emoji: '🌿', en: 'They disagreed with the proposal.', ru: 'Они не согласились.', affix: 'dis-' },
    { level: 'medium', emoji: '🌿', en: 'Communication is important.', ru: 'Общение важно.', affix: '-tion' },
    { level: 'hard', emoji: '🌳', en: 'Unbelievable but the announcement was postponed.', ru: 'Невероятно, но объявление отложено.', affix: 'un-/post-' },
    { level: 'hard', emoji: '🌳', en: 'Her happiness was overwhelming.', ru: 'Её счастье было всепоглощающим.', affix: '-nessover-' },
    { level: 'hard', emoji: '🌳', en: 'The reorganization improved productivity.', ru: 'Реорганизация улучшила производительность.', affix: 're-/-tion/-ity' },
    { level: 'hard', emoji: '🌳', en: 'Intercultural communication is indispensable.', ru: 'Межкультурное общение незаменимо.', affix: 'inter-/-able' },
    { level: 'hard', emoji: '🌳', en: 'The supervisor\'s decision was irreversible.', ru: 'Решение руководителя необратимо.', affix: 'super-/-ible' }
];

const essayTemplates = {
    intro: {
        emoji: '🎬', title: 'Вступление', color: '#6b8e23',
        patterns: [
            { tpl: 'Nowadays, {topic} is a widely discussed issue.',           ru: 'В наши дни {topic} — широко обсуждаемая тема.' },
            { tpl: 'It is often argued that {topic}.',                         ru: 'Часто утверждают, что {topic}.' },
            { tpl: 'There is no doubt that {topic} plays an important role.',   ru: 'Несомненно, {topic} играет важную роль.' }
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
    { emoji: '💼', topic: 'remote work',          ru: 'удалённая работа' },
    { emoji: '💻', topic: 'artificial intelligence', ru: 'искусственный интеллект' },
    { emoji: '🚀', topic: 'space exploration',    ru: 'исследование космоса' },
    { emoji: '🏥', topic: 'public healthcare',    ru: 'государственное здравоохранение' },
    { emoji: '🎨', topic: 'art in schools',       ru: 'искусство в школах' },
    { emoji: '🚗', topic: 'self-driving cars',    ru: 'беспилотные машины' },
    { emoji: '🎓', topic: 'studying abroad',      ru: 'учёба за границей' }
];
