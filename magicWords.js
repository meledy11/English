// magicWords.js — «магические» глаголы и универсальные слова
const magicVerbs = [
    {
        verb: 'get',
        emoji: '🎩',
        meaning: 'САМЫЙ УНИВЕРСАЛЬНЫЙ ГЛАГОЛ',
        assoc: 'Один get заменяет 50 глаголов!',
        note: 'get работает как: получать, становиться, добираться, понимать, покупать, приносить.',
        senses: [
            { sense: 'ПОЛУЧАТЬ', ru: 'получать', ex: 'I <b>got</b> a letter yesterday.', exRu: 'Я получил письмо вчера.' },
            { sense: 'СТАНОВИТЬСЯ', ru: 'становиться', ex: 'It <b>gets</b> dark at 6 pm.', exRu: 'Темнеет в 6 вечера.' },
            { sense: 'ДОБИРАТЬСЯ', ru: 'добираться', ex: 'How do I <b>get</b> to the station?', exRu: 'Как добраться до станции?' },
            { sense: 'ПОНИМАТЬ', ru: 'понимать', ex: 'I don\'t <b>get</b> it.', exRu: 'Я не понимаю этого.' },
            { sense: 'ПОКУПАТЬ', ru: 'покупать', ex: 'I <b>got</b> some bread.', exRu: 'Я купил хлеба.' },
            { sense: 'ПРИНОСИТЬ', ru: 'приносить', ex: '<b>Get</b> me some water.', exRu: 'Принеси мне воды.' },
            { sense: 'ЗАСТАВЛЯТЬ', ru: 'заставлять', ex: 'I <b>got</b> him to help.', exRu: 'Я заставил его помочь.' }
        ],
        phrases: [
            { p: 'get up', ru: 'вставать', ex: 'I <b>get up</b> at 7.', exRu: 'Я встаю в 7.' },
            { p: 'get out', ru: 'выйти', ex: '<b>Get out</b> of my room!', exRu: 'Выйди из моей комнаты!' },
            { p: 'get in', ru: 'садиться (в машину)', ex: '<b>Get in</b> the car.', exRu: 'Садись в машину.' },
            { p: 'get on', ru: 'садиться (в транспорт)', ex: '<b>Get on</b> the bus.', exRu: 'Садись в автобус.' },
            { p: 'get off', ru: 'выходить', ex: '<b>Get off</b> at the next stop.', exRu: 'Выйди на следующей остановке.' },
            { p: 'get along', ru: 'ладить', ex: 'We <b>get along</b> well.', exRu: 'Мы хорошо ладим.' },
            { p: 'get over', ru: 'преодолеть', ex: '<b>Get over</b> it!', exRu: 'Переживи это!' },
            { p: 'get by', ru: 'выживать', ex: 'We <b>get by</b> somehow.', exRu: 'Мы как-то выживаем.' },
            { p: 'get together', ru: 'собираться', ex: 'Let\'s <b>get together</b>.', exRu: 'Давай соберёмся.' },
            { p: 'get married', ru: 'жениться', ex: 'They <b>got married</b>.', exRu: 'Они поженились.' }
        ]
    },
    {
        verb: 'have',
        emoji: '🎒',
        meaning: 'ИМЕТЬ, ПРИНИМАТЬ, ЗАСТАВЛЯТЬ',
        assoc: 'have = иметь / есть / принимать',
        note: 'have заменяет: есть, пить, принимать (душ/ванну), заставлять, испытывать.',
        senses: [
            { sense: 'ИМЕТЬ', ru: 'иметь', ex: 'I <b>have</b> a car.', exRu: 'У меня есть машина.' },
            { sense: 'ЕСТЬ', ru: 'есть / пить', ex: 'I <b>have</b> breakfast at 8.', exRu: 'Я завтракаю в 8.' },
            { sense: 'ПРИНИМАТЬ', ru: 'принимать (душ)', ex: 'I <b>have</b> a shower.', exRu: 'Я принимаю душ.' },
            { sense: 'ИСПЫТЫВАТЬ', ru: 'испытывать', ex: 'I <b>had</b> a great time.', exRu: 'Я отлично провёл время.' },
            { sense: 'ЗАСТАВЛЯТЬ', ru: 'заставлять', ex: 'I <b>had</b> him clean the room.', exRu: 'Я заставил его убрать.' }
        ],
        phrases: [
            { p: 'have to', ru: 'должен', ex: 'I <b>have to</b> go.', exRu: 'Я должен идти.' },
            { p: 'have fun', ru: 'веселиться', ex: '<b>Have fun</b>!', exRu: 'Веселись!' },
            { p: 'have a look', ru: 'взглянуть', ex: '<b>Have a look</b> at this.', exRu: 'Взгляни на это.' },
            { p: 'have a rest', ru: 'отдохнуть', ex: 'Let\'s <b>have a rest</b>.', exRu: 'Давай отдохнём.' },
            { p: 'have a good time', ru: 'хорошо провести время', ex: '<b>Have a good time</b>!', exRu: 'Хорошо проведи время!' }
        ]
    },
    {
        verb: 'take',
        emoji: '✋',
        meaning: 'БРАТЬ, ЗАНИМАТЬ, ВОДИТЬ',
        assoc: 'take = взять / занять / принять',
        note: 'take заменяет: брать, занимать (время), принимать, водить, пользоваться.',
        senses: [
            { sense: 'БРАТЬ', ru: 'брать', ex: '<b>Take</b> my hand.', exRu: 'Возьми мою руку.' },
            { sense: 'ЗАНИМАТЬ ВРЕМЯ', ru: 'занимать', ex: 'It <b>takes</b> 10 minutes.', exRu: 'Это занимает 10 минут.' },
            { sense: 'ПРИНИМАТЬ', ru: 'принимать', ex: '<b>Take</b> this pill.', exRu: 'Прими эту таблетку.' },
            { sense: 'ВОДИТЬ', ru: 'водить', ex: 'I <b>take</b> my kids to school.', exRu: 'Я вожу детей в школу.' }
        ],
        phrases: [
            { p: 'take off', ru: 'снять / взлететь', ex: '<b>Take off</b> your shoes.', exRu: 'Сними обувь.' },
            { p: 'take care', ru: 'заботиться', ex: '<b>Take care</b> of yourself.', exRu: 'Позаботься о себе.' },
            { p: 'take a photo', ru: 'сфотографировать', ex: '<b>Take a photo</b>, please.', exRu: 'Сфотографируй, пожалуйста.' },
            { p: 'take part', ru: 'участвовать', ex: 'I <b>take part</b> in it.', exRu: 'Я участвую в этом.' },
            { p: 'take place', ru: 'происходить', ex: 'The party <b>takes place</b> here.', exRu: 'Вечеринка проходит здесь.' }
        ]
    },
    {
        verb: 'make',
        emoji: '🔨',
        meaning: 'ДЕЛАТЬ, ЗАСТАВЛЯТЬ, ЗАРАБАТЫВАТЬ',
        assoc: 'make = создавать что-то новое',
        note: 'make = сделать то, чего раньше не было (в отличие от do).',
        senses: [
            { sense: 'ДЕЛАТЬ / СОЗДАВАТЬ', ru: 'делать', ex: 'I <b>make</b> coffee.', exRu: 'Я делаю кофе.' },
            { sense: 'ЗАСТАВЛЯТЬ', ru: 'заставлять', ex: 'You <b>make</b> me laugh.', exRu: 'Ты заставляешь меня смеяться.' },
            { sense: 'ЗАРАБАТЫВАТЬ', ru: 'зарабатывать', ex: 'He <b>makes</b> $5000 a month.', exRu: 'Он зарабатывает $5000 в месяц.' }
        ],
        phrases: [
            { p: 'make up', ru: 'придумать / помириться', ex: 'She <b>made up</b> a story.', exRu: 'Она придумала историю.' },
            { p: 'make sure', ru: 'убедиться', ex: '<b>Make sure</b> you come.', exRu: 'Убедись, что придёшь.' },
            { p: 'make friends', ru: 'подружиться', ex: 'I <b>made friends</b> there.', exRu: 'Я подружился там.' },
            { p: 'make a decision', ru: 'принять решение', ex: '<b>Make a decision</b>.', exRu: 'Прими решение.' }
        ]
    },
    {
        verb: 'do',
        emoji: '✅',
        meaning: 'ДЕЛАТЬ (работу, задачу)',
        assoc: 'do = выполнять действие',
        note: 'do = делать то, что уже существует (работу, домашку, упражнение).',
        senses: [
            { sense: 'ДЕЛАТЬ РАБОТУ', ru: 'делать', ex: 'I <b>do</b> my homework.', exRu: 'Я делаю домашку.' },
            { sense: 'РАБОТАТЬ', ru: 'работать', ex: 'What do you <b>do</b>?', exRu: 'Чем ты занимаешься?' }
        ],
        phrases: [
            { p: 'do the dishes', ru: 'мыть посуду', ex: 'I <b>do the dishes</b>.', exRu: 'Я мою посуду.' },
            { p: 'do the shopping', ru: 'ходить за покупками', ex: 'We <b>do the shopping</b>.', exRu: 'Мы ходим за покупками.' },
            { p: 'do sports', ru: 'заниматься спортом', ex: 'I <b>do sports</b>.', exRu: 'Я занимаюсь спортом.' },
            { p: 'do me a favour', ru: 'сделай одолжение', ex: '<b>Do me a favour</b>, please.', exRu: 'Сделай одолжение, пожалуйста.' }
        ]
    },
    {
        verb: 'go',
        emoji: '🚶',
        meaning: 'ИДТИ, СТАНОВИТЬСЯ, РАБОТАТЬ',
        assoc: 'go = движение + изменения',
        note: 'go заменяет: идти, ехать, становиться (go bad), работать (go well).',
        senses: [
            { sense: 'ИДТИ', ru: 'идти', ex: 'I <b>go</b> to school.', exRu: 'Я хожу в школу.' },
            { sense: 'СТАНОВИТЬСЯ', ru: 'становиться', ex: 'The milk <b>went</b> bad.', exRu: 'Молоко испортилось.' },
            { sense: 'РАБОТАТЬ / ИДТИ', ru: 'идти (о делах)', ex: 'How did it <b>go</b>?', exRu: 'Как всё прошло?' }
        ],
        phrases: [
            { p: 'go out', ru: 'гулять / выходить', ex: 'Let\'s <b>go out</b>.', exRu: 'Пойдём погуляем.' },
            { p: 'go on', ru: 'продолжать', ex: '<b>Go on</b>, please.', exRu: 'Продолжай, пожалуйста.' },
            { p: 'go back', ru: 'возвращаться', ex: 'I must <b>go back</b>.', exRu: 'Я должен вернуться.' },
            { p: 'go shopping', ru: 'идти за покупками', ex: 'We <b>go shopping</b> on Sunday.', exRu: 'Мы ходим за покупками в воскресенье.' }
        ]
    },
    {
        verb: 'put',
        emoji: '📥',
        meaning: 'КЛАСТЬ, СТАВИТЬ, ВЫРАЖАТЬ',
        assoc: 'put = поместить куда-то',
        note: 'put заменяет: класть, ставить, надевать, выражать словами.',
        senses: [
            { sense: 'КЛАСТЬ', ru: 'класть', ex: '<b>Put</b> it on the table.', exRu: 'Положи на стол.' },
            { sense: 'НАДЕВАТЬ', ru: 'надевать', ex: '<b>Put</b> on your coat.', exRu: 'Надень пальто.' },
            { sense: 'ВЫРАЖАТЬ', ru: 'выражать', ex: 'How do I <b>put</b> this?', exRu: 'Как это сказать?' }
        ],
        phrases: [
            { p: 'put on', ru: 'надеть', ex: '<b>Put on</b> your hat.', exRu: 'Надень шапку.' },
            { p: 'put off', ru: 'отложить', ex: '<b>Put off</b> the meeting.', exRu: 'Отложи встречу.' },
            { p: 'put away', ru: 'убрать', ex: '<b>Put away</b> your toys.', exRu: 'Убери игрушки.' },
            { p: 'put up with', ru: 'мириться с', ex: 'I can\'t <b>put up with</b> it.', exRu: 'Я не могу с этим мириться.' }
        ]
    }
];

// ===== УНИВЕРСАЛЬНЫЕ СЛОВА-ЗАГЛУШКИ =====
// Спасают, когда не знаешь точного слова
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
    { word: 'time', emoji: '⏰', ru: 'время / раз',
      note: 'Может значить «раз»: three times = три раза.',
      examples: [
        { ex: 'I don\'t have <b>time</b>.', exRu: 'У меня нет времени.' },
        { ex: 'This <b>time</b> I will win.', exRu: 'На этот раз я выиграю.' },
        { ex: 'Three <b>times</b> a day.', exRu: 'Три раза в день.' }
      ]
    },
    { word: 'guy', emoji: '👤', ru: 'парень / чувак',
      note: 'Разговорное «человек». Мн. ч. guys = ребята.',
      examples: [
        { ex: 'That <b>guy</b> is funny.', exRu: 'Тот парень смешной.' },
        { ex: 'Hey <b>guys</b>!', exRu: 'Привет, ребята!' },
        { ex: 'He\'s a good <b>guy</b>.', exRu: 'Он хороший парень.' }
      ]
    }
];

// ===== ФРАЗЫ-СПАСАЛКИ (когда не знаешь, как сказать) =====
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
