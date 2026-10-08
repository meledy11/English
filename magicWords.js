// magicWords.js — «магические» глаголы и универсальные слова (ФИНАЛЬНАЯ МЕГА-версия)
// 22 глагола × 8-25 фраз = ~400 живых выражений

// ═══════════════════════════════════════════════
// 🎩 МАГИЧЕСКИЕ ГЛАГОЛЫ
// ═══════════════════════════════════════════════
const magicVerbs = [
    // ═══════════════════════════════════════════
    // ВОЛНА 1 — самые нужные (8 глаголов)
    // ═══════════════════════════════════════════
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
            { sense: 'ЗАСТАВЛЯТЬ', ru: 'заставлять', ex: 'I <b>got</b> him to help.', exRu: 'Я заставил его помочь.' },
            { sense: 'ЗАРАБАТЫВАТЬ', ru: 'зарабатывать', ex: 'He <b>gets</b> good money.', exRu: 'Он хорошо зарабатывает.' },
            { sense: 'ЗАБОЛЕТЬ', ru: 'подхватить', ex: 'I <b>got</b> a cold.', exRu: 'Я простудился.' }
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
            { p: 'get married', ru: 'жениться', ex: 'They <b>got married</b>.', exRu: 'Они поженились.' },
            { p: 'get ready', ru: 'готовиться', ex: '<b>Get ready</b> for school.', exRu: 'Готовься в школу.' },
            { p: 'get lost', ru: 'заблудиться', ex: 'We <b>got lost</b>.', exRu: 'Мы заблудились.' },
            { p: 'get back', ru: 'возвращаться', ex: 'I\'ll <b>get back</b> at 6.', exRu: 'Я вернусь в 6.' },
            { p: 'get through', ru: 'дозвониться / пройти', ex: 'I can\'t <b>get through</b>.', exRu: 'Я не могу дозвониться.' },
            { p: 'get rid of', ru: 'избавиться', ex: '<b>Get rid of</b> it.', exRu: 'Избавься от этого.' },
            { p: 'get used to', ru: 'привыкнуть', ex: 'I <b>got used to</b> it.', exRu: 'Я привык к этому.' },
            { p: 'get worse', ru: 'ухудшаться', ex: 'It\'s <b>getting worse</b>.', exRu: 'Становится хуже.' },
            { p: 'get better', ru: 'улучшаться / поправляться', ex: 'You\'ll <b>get better</b> soon.', exRu: 'Ты скоро поправишься.' },
            { p: 'get angry', ru: 'злиться', ex: 'Don\'t <b>get angry</b>.', exRu: 'Не злись.' },
            { p: 'get hungry', ru: 'проголодаться', ex: 'I\'m <b>getting hungry</b>.', exRu: 'Я проголодался.' },
            { p: 'get tired', ru: 'уставать', ex: 'I <b>get tired</b> easily.', exRu: 'Я быстро устаю.' },
            { p: 'get a job', ru: 'найти работу', ex: 'He <b>got a job</b>.', exRu: 'Он нашёл работу.' },
            { p: 'get a message', ru: 'получить сообщение', ex: 'I <b>got a message</b>.', exRu: 'Я получил сообщение.' },
            { p: 'get in touch', ru: 'связаться', ex: '<b>Get in touch</b> with me.', exRu: 'Свяжись со мной.' },
            { p: 'get the point', ru: 'понять суть', ex: 'I <b>get the point</b>.', exRu: 'Я понял суть.' }
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
            { sense: 'ЗАСТАВЛЯТЬ', ru: 'заставлять', ex: 'I <b>had</b> him clean the room.', exRu: 'Я заставил его убрать.' },
            { sense: 'БОЛЕТЬ', ru: 'болеть', ex: 'I <b>have</b> a headache.', exRu: 'У меня болит голова.' }
        ],
        phrases: [
            { p: 'have to', ru: 'должен', ex: 'I <b>have to</b> go.', exRu: 'Я должен идти.' },
            { p: 'have fun', ru: 'веселиться', ex: '<b>Have fun</b>!', exRu: 'Веселись!' },
            { p: 'have a look', ru: 'взглянуть', ex: '<b>Have a look</b> at this.', exRu: 'Взгляни на это.' },
            { p: 'have a rest', ru: 'отдохнуть', ex: 'Let\'s <b>have a rest</b>.', exRu: 'Давай отдохнём.' },
            { p: 'have a good time', ru: 'хорошо провести время', ex: '<b>Have a good time</b>!', exRu: 'Хорошо проведи время!' },
            { p: 'have breakfast', ru: 'завтракать', ex: 'I <b>have breakfast</b> at 8.', exRu: 'Я завтракаю в 8.' },
            { p: 'have lunch', ru: 'обедать', ex: 'Let\'s <b>have lunch</b>.', exRu: 'Давай пообедаем.' },
            { p: 'have dinner', ru: 'ужинать', ex: 'We <b>have dinner</b> at 7.', exRu: 'Мы ужинаем в 7.' },
            { p: 'have a shower', ru: 'принимать душ', ex: 'I <b>have a shower</b> every morning.', exRu: 'Я принимаю душ каждое утро.' },
            { p: 'have a bath', ru: 'принимать ванну', ex: 'She <b>has a bath</b> in the evening.', exRu: 'Она принимает ванну вечером.' },
            { p: 'have a cup of tea', ru: 'выпить чашку чая', ex: 'Let\'s <b>have a cup of tea</b>.', exRu: 'Давай выпьем чаю.' },
            { p: 'have a baby', ru: 'родить ребёнка', ex: 'She <b>had a baby</b>.', exRu: 'Она родила ребёнка.' },
            { p: 'have a dream', ru: 'мечтать', ex: 'I <b>have a dream</b>.', exRu: 'У меня есть мечта.' },
            { p: 'have a problem', ru: 'иметь проблему', ex: 'We <b>have a problem</b>.', exRu: 'У нас проблема.' },
            { p: 'have a question', ru: 'иметь вопрос', ex: 'I <b>have a question</b>.', exRu: 'У меня есть вопрос.' },
            { p: 'have a party', ru: 'устраивать вечеринку', ex: 'They <b>had a party</b>.', exRu: 'Они устроили вечеринку.' },
            { p: 'have a point', ru: 'быть правым', ex: 'You <b>have a point</b>.', exRu: 'Ты прав.' },
            { p: 'have a word', ru: 'поговорить', ex: 'Can I <b>have a word</b> with you?', exRu: 'Можно с тобой поговорить?' }
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
            { p: 'take place', ru: 'происходить', ex: 'The party <b>takes place</b> here.', exRu: 'Вечеринка проходит здесь.' },
            { p: 'take a shower', ru: 'принять душ', ex: 'I <b>take a shower</b> in the morning.', exRu: 'Я принимаю душ утром.' },
            { p: 'take a break', ru: 'сделать перерыв', ex: 'Let\'s <b>take a break</b>.', exRu: 'Давай сделаем перерыв.' },
            { p: 'take a seat', ru: 'сесть', ex: 'Please <b>take a seat</b>.', exRu: 'Присядьте, пожалуйста.' },
            { p: 'take a look', ru: 'взглянуть', ex: '<b>Take a look</b> at this.', exRu: 'Взгляни на это.' },
            { p: 'take a walk', ru: 'прогуляться', ex: 'Let\'s <b>take a walk</b>.', exRu: 'Давай прогуляемся.' },
            { p: 'take a nap', ru: 'вздремнуть', ex: 'I need to <b>take a nap</b>.', exRu: 'Мне нужно вздремнуть.' },
            { p: 'take a taxi', ru: 'взять такси', ex: 'Let\'s <b>take a taxi</b>.', exRu: 'Давай возьмём такси.' },
            { p: 'take medicine', ru: 'принимать лекарство', ex: '<b>Take</b> your medicine.', exRu: 'Прими лекарство.' },
            { p: 'take notes', ru: 'записывать', ex: 'I <b>take notes</b> in class.', exRu: 'Я записываю на уроке.' },
            { p: 'take responsibility', ru: 'нести ответственность', ex: '<b>Take responsibility</b> for it.', exRu: 'Неси за это ответственность.' },
            { p: 'take your time', ru: 'не спешить', ex: '<b>Take your time</b>.', exRu: 'Не спеши.' },
            { p: 'take it easy', ru: 'не переживай', ex: '<b>Take it easy</b>!', exRu: 'Не переживай!' },
            { p: 'take care of', ru: 'заботиться о', ex: '<b>Take care of</b> the dog.', exRu: 'Позаботься о собаке.' }
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
            { p: 'make a decision', ru: 'принять решение', ex: '<b>Make a decision</b>.', exRu: 'Прими решение.' },
            { p: 'make a mistake', ru: 'сделать ошибку', ex: 'I <b>made a mistake</b>.', exRu: 'Я сделал ошибку.' },
            { p: 'make breakfast', ru: 'приготовить завтрак', ex: 'I <b>make breakfast</b> for my family.', exRu: 'Я готовлю завтрак для семьи.' },
            { p: 'make coffee', ru: 'сделать кофе', ex: 'Can you <b>make coffee</b>?', exRu: 'Можешь сделать кофе?' },
            { p: 'make a cake', ru: 'испечь торт', ex: 'She <b>made a cake</b>.', exRu: 'Она испекла торт.' },
            { p: 'make a plan', ru: 'составить план', ex: 'Let\'s <b>make a plan</b>.', exRu: 'Давай составим план.' },
            { p: 'make money', ru: 'зарабатывать', ex: 'He <b>makes money</b> online.', exRu: 'Он зарабатывает онлайн.' },
            { p: 'make a phone call', ru: 'позвонить', ex: 'I need to <b>make a phone call</b>.', exRu: 'Мне нужно позвонить.' },
            { p: 'make a list', ru: 'составить список', ex: '<b>Make a list</b>, please.', exRu: 'Составь список, пожалуйста.' },
            { p: 'make sense', ru: 'иметь смысл', ex: 'It doesn\'t <b>make sense</b>.', exRu: 'Это не имеет смысла.' },
            { p: 'make an effort', ru: 'приложить усилие', ex: '<b>Make an effort</b>!', exRu: 'Приложи усилие!' },
            { p: 'make a choice', ru: 'сделать выбор', ex: '<b>Make a choice</b>.', exRu: 'Сделай выбор.' },
            { p: 'make a wish', ru: 'загадать желание', ex: '<b>Make a wish</b>!', exRu: 'Загадай желание!' },
            { p: 'make friends with', ru: 'подружиться с', ex: 'I <b>made friends with</b> her.', exRu: 'Я подружился с ней.' },
            { p: 'make it', ru: 'успеть / добиться', ex: 'We <b>made it</b>!', exRu: 'Мы успели!' },
            { p: 'make a difference', ru: 'изменить ситуацию', ex: 'You can <b>make a difference</b>.', exRu: 'Ты можешь изменить ситуацию.' }
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
            { p: 'do me a favour', ru: 'сделай одолжение', ex: '<b>Do me a favour</b>, please.', exRu: 'Сделай одолжение, пожалуйста.' },
            { p: 'do homework', ru: 'делать домашку', ex: 'I <b>do homework</b> every day.', exRu: 'Я делаю домашку каждый день.' },
            { p: 'do the laundry', ru: 'стирать', ex: 'I <b>do the laundry</b> on Sunday.', exRu: 'Я стираю в воскресенье.' },
            { p: 'do the cleaning', ru: 'убирать', ex: 'We <b>do the cleaning</b> together.', exRu: 'Мы убираем вместе.' },
            { p: 'do the cooking', ru: 'готовить', ex: 'My mum <b>does the cooking</b>.', exRu: 'Мама готовит.' },
            { p: 'do the ironing', ru: 'гладить', ex: 'She <b>does the ironing</b>.', exRu: 'Она гладит.' },
            { p: 'do business', ru: 'вести дела', ex: 'We <b>do business</b> together.', exRu: 'Мы ведём дела вместе.' },
            { p: 'do a job', ru: 'делать работу', ex: 'They <b>did a good job</b>.', exRu: 'Они хорошо сделали работу.' },
            { p: 'do your best', ru: 'сделать всё возможное', ex: 'Just <b>do your best</b>.', exRu: 'Просто сделай всё возможное.' },
            { p: 'do exercise', ru: 'делать упражнения', ex: 'I <b>do exercise</b> every morning.', exRu: 'Я делаю зарядку каждое утро.' },
            { p: 'do well', ru: 'преуспевать', ex: 'She <b>does well</b> at school.', exRu: 'Она хорошо учится.' },
            { p: 'do badly', ru: 'плохо справляться', ex: 'I <b>did badly</b> on the test.', exRu: 'Я плохо справился с тестом.' },
            { p: 'do good', ru: 'приносить пользу', ex: 'It <b>does good</b>.', exRu: 'Это приносит пользу.' },
            { p: 'do harm', ru: 'вредить', ex: 'It <b>does harm</b>.', exRu: 'Это вредит.' }
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
            { p: 'go shopping', ru: 'идти за покупками', ex: 'We <b>go shopping</b> on Sunday.', exRu: 'Мы ходим за покупками в воскресенье.' },
            { p: 'go to school', ru: 'ходить в школу', ex: 'I <b>go to school</b> every day.', exRu: 'Я хожу в школу каждый день.' },
            { p: 'go to work', ru: 'ходить на работу', ex: 'I <b>go to work</b> by bus.', exRu: 'Я езжу на работу на автобусе.' },
            { p: 'go home', ru: 'идти домой', ex: 'It\'s time to <b>go home</b>.', exRu: 'Пора идти домой.' },
            { p: 'go to bed', ru: 'ложиться спать', ex: 'I <b>go to bed</b> at 11.', exRu: 'Я ложусь спать в 11.' },
            { p: 'go for a walk', ru: 'пойти гулять', ex: 'Let\'s <b>go for a walk</b>.', exRu: 'Пойдём гулять.' },
            { p: 'go swimming', ru: 'пойти плавать', ex: 'We <b>go swimming</b> on Sundays.', exRu: 'Мы ходим плавать по воскресеньям.' },
            { p: 'go to the cinema', ru: 'пойти в кино', ex: 'Let\'s <b>go to the cinema</b>.', exRu: 'Пойдём в кино.' },
            { p: 'go abroad', ru: 'поехать за границу', ex: 'They <b>went abroad</b>.', exRu: 'Они уехали за границу.' },
            { p: 'go crazy', ru: 'сходить с ума', ex: 'I\'m <b>going crazy</b>.', exRu: 'Я схожу с ума.' },
            { p: 'go bad', ru: 'испортиться', ex: 'The meat <b>went bad</b>.', exRu: 'Мясо испортилось.' },
            { p: 'go well', ru: 'идти хорошо', ex: 'Everything <b>goes well</b>.', exRu: 'Всё идёт хорошо.' },
            { p: 'go wrong', ru: 'пойти не так', ex: 'Something <b>went wrong</b>.', exRu: 'Что-то пошло не так.' }
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
            { p: 'put up with', ru: 'мириться с', ex: 'I can\'t <b>put up with</b> it.', exRu: 'Я не могу с этим мириться.' },
            { p: 'put down', ru: 'положить / записать', ex: '<b>Put down</b> your phone.', exRu: 'Положи телефон.' },
            { p: 'put back', ru: 'вернуть на место', ex: '<b>Put back</b> the book.', exRu: 'Верни книгу на место.' },
            { p: 'put in', ru: 'вставить / вложить', ex: '<b>Put in</b> more effort.', exRu: 'Вложи больше усилий.' },
            { p: 'put out', ru: 'потушить / выставить', ex: '<b>Put out</b> the fire!', exRu: 'Потуши огонь!' },
            { p: 'put together', ru: 'собрать', ex: '<b>Put together</b> the puzzle.', exRu: 'Собери пазл.' },
            { p: 'put up', ru: 'повесить / построить', ex: '<b>Put up</b> the picture.', exRu: 'Повесь картину.' },
            { p: 'put on weight', ru: 'набрать вес', ex: 'I <b>put on weight</b>.', exRu: 'Я набрал вес.' }
        ]
    },
    {
        verb: 'come',
        emoji: '🚪',
        meaning: 'ПРИХОДИТЬ, ПРОИСХОДИТЬ',
        assoc: 'come = прийти к кому-то/чему-то',
        note: 'come = приходить, приезжать, происходить, появляться.',
        senses: [
            { sense: 'ПРИХОДИТЬ', ru: 'приходить', ex: '<b>Come</b> here, please.', exRu: 'Иди сюда, пожалуйста.' },
            { sense: 'ПРОИСХОДИТЬ', ru: 'происходить', ex: 'How did it <b>come</b>?', exRu: 'Как это произошло?' }
        ],
        phrases: [
            { p: 'come in', ru: 'входить', ex: '<b>Come in</b>, please.', exRu: 'Входите, пожалуйста.' },
            { p: 'come back', ru: 'возвращаться', ex: '<b>Come back</b> soon!', exRu: 'Возвращайся скорее!' },
            { p: 'come on', ru: 'давай / ну же', ex: '<b>Come on</b>, hurry up!', exRu: 'Давай, поторопись!' },
            { p: 'come from', ru: 'быть из', ex: 'I <b>come from</b> Russia.', exRu: 'Я из России.' },
            { p: 'come over', ru: 'заходить', ex: '<b>Come over</b> for dinner.', exRu: 'Заходи на ужин.' },
            { p: 'come true', ru: 'сбываться', ex: 'My dream <b>came true</b>.', exRu: 'Моя мечта сбылась.' },
            { p: 'come up', ru: 'возникать / подходить', ex: 'Something <b>came up</b>.', exRu: 'Кое-что возникло.' },
            { p: 'come down', ru: 'спускаться', ex: '<b>Come down</b> here!', exRu: 'Спускайся сюда!' },
            { p: 'come along', ru: 'присоединиться', ex: '<b>Come along</b> with us.', exRu: 'Пойдём с нами.' },
            { p: 'come out', ru: 'выходить / появляться', ex: 'The sun <b>came out</b>.', exRu: 'Солнце вышло.' },
            { p: 'come across', ru: 'наткнуться', ex: 'I <b>came across</b> a photo.', exRu: 'Я наткнулся на фото.' },
            { p: 'come up with', ru: 'придумать', ex: 'She <b>came up with</b> an idea.', exRu: 'Она придумала идею.' }
        ]
    },

    // ═══════════════════════════════════════════
    // ВОЛНА 2 — turn, look, give, keep, break, set
    // ═══════════════════════════════════════════
    {
        verb: 'turn',
        emoji: '🔄',
        meaning: 'ПОВОРАЧИВАТЬ, СТАНОВИТЬСЯ, ВЫКЛЮЧАТЬ',
        assoc: 'turn = изменить направление или состояние',
        note: 'turn заменяет: поворачивать, крутить, становиться, выключать, превращать.',
        senses: [
            { sense: 'ПОВОРАЧИВАТЬ', ru: 'поворачивать', ex: '<b>Turn</b> left at the corner.', exRu: 'Поверни налево на углу.' },
            { sense: 'СТАНОВИТЬСЯ', ru: 'становиться', ex: 'He <b>turned</b> red.', exRu: 'Он покраснел.' },
            { sense: 'ВЫКЛЮЧАТЬ', ru: 'выключать', ex: '<b>Turn</b> off the light.', exRu: 'Выключи свет.' }
        ],
        phrases: [
            { p: 'turn on', ru: 'включить', ex: '<b>Turn on</b> the TV.', exRu: 'Включи телевизор.' },
            { p: 'turn off', ru: 'выключить', ex: '<b>Turn off</b> the light.', exRu: 'Выключи свет.' },
            { p: 'turn up', ru: 'прибавить / появиться', ex: '<b>Turn up</b> the music.', exRu: 'Прибавь музыку.' },
            { p: 'turn down', ru: 'убавить / отказать', ex: '<b>Turn down</b> the volume.', exRu: 'Убавь громкость.' },
            { p: 'turn around', ru: 'обернуться', ex: '<b>Turn around</b>!', exRu: 'Обернись!' },
            { p: 'turn into', ru: 'превратиться', ex: 'It <b>turned into</b> a frog.', exRu: 'Оно превратилось в лягушку.' },
            { p: 'turn out', ru: 'оказаться', ex: 'It <b>turned out</b> well.', exRu: 'Всё оказалось хорошо.' },
            { p: 'turn left', ru: 'повернуть налево', ex: '<b>Turn left</b> here.', exRu: 'Поверни налево здесь.' },
            { p: 'turn right', ru: 'повернуть направо', ex: '<b>Turn right</b> at the lights.', exRu: 'Поверни направо на светофоре.' },
            { p: 'turn back', ru: 'вернуться', ex: 'We had to <b>turn back</b>.', exRu: 'Нам пришлось вернуться.' },
            { p: 'turn to', ru: 'обратиться к', ex: '<b>Turn to</b> me for help.', exRu: 'Обратись ко мне за помощью.' },
            { p: 'turn red', ru: 'покраснеть', ex: 'She <b>turned red</b>.', exRu: 'Она покраснела.' },
            { p: 'turn 30', ru: 'исполнилось 30', ex: 'He <b>turned</b> 30 yesterday.', exRu: 'Вчера ему исполнилось 30.' },
            { p: 'turn over', ru: 'перевернуть', ex: '<b>Turn over</b> the page.', exRu: 'Переверни страницу.' },
            { p: 'turn away', ru: 'отвернуться / отказать', ex: 'They <b>turned</b> him <b>away</b>.', exRu: 'Его не пустили.' }
        ]
    },
    {
        verb: 'look',
        emoji: '👀',
        meaning: 'СМОТРЕТЬ, ВЫГЛЯДЕТЬ, ИСКАТЬ',
        assoc: 'look = направить взгляд',
        note: 'look заменяет: смотреть, выглядеть, искать, заботиться, проверять.',
        senses: [
            { sense: 'СМОТРЕТЬ', ru: 'смотреть', ex: '<b>Look</b> at this!', exRu: 'Посмотри на это!' },
            { sense: 'ВЫГЛЯДЕТЬ', ru: 'выглядеть', ex: 'You <b>look</b> great.', exRu: 'Ты отлично выглядишь.' },
            { sense: 'ИСКАТЬ', ru: 'искать', ex: 'I\'m <b>looking for</b> my keys.', exRu: 'Я ищу свои ключи.' }
        ],
        phrases: [
            { p: 'look at', ru: 'смотреть на', ex: '<b>Look at</b> me.', exRu: 'Посмотри на меня.' },
            { p: 'look for', ru: 'искать', ex: 'I\'m <b>looking for</b> my phone.', exRu: 'Я ищу свой телефон.' },
            { p: 'look after', ru: 'заботиться', ex: '<b>Look after</b> your sister.', exRu: 'Присмотри за сестрой.' },
            { p: 'look forward to', ru: 'с нетерпением ждать', ex: 'I <b>look forward to</b> seeing you.', exRu: 'С нетерпением жду встречи.' },
            { p: 'look like', ru: 'быть похожим', ex: 'You <b>look like</b> your mum.', exRu: 'Ты похож на маму.' },
            { p: 'look up', ru: 'искать в словаре', ex: '<b>Look up</b> this word.', exRu: 'Найди это слово в словаре.' },
            { p: 'look out', ru: 'осторожно!', ex: '<b>Look out</b>!', exRu: 'Осторожно!' },
            { p: 'look through', ru: 'просмотреть', ex: '<b>Look through</b> this file.', exRu: 'Просмотри этот файл.' },
            { p: 'look into', ru: 'расследовать', ex: 'We\'ll <b>look into</b> it.', exRu: 'Мы это расследуем.' },
            { p: 'look down on', ru: 'смотреть свысока', ex: 'Don\'t <b>look down on</b> me.', exRu: 'Не смотри на меня свысока.' },
            { p: 'look around', ru: 'оглядеться', ex: '<b>Look around</b> the room.', exRu: 'Осмотри комнату.' },
            { p: 'look ahead', ru: 'смотреть вперёд', ex: '<b>Look ahead</b>.', exRu: 'Смотри вперёд.' }
        ]
    },
    {
        verb: 'give',
        emoji: '🎁',
        meaning: 'ДАВАТЬ, УСТУПАТЬ, УСТРАИВАТЬ',
        assoc: 'give = отдать что-то',
        note: 'give заменяет: давать, дарить, уступать, выдавать, устраивать.',
        senses: [
            { sense: 'ДАВАТЬ', ru: 'давать', ex: '<b>Give</b> me a minute.', exRu: 'Дай мне минуту.' },
            { sense: 'УСТУПАТЬ', ru: 'уступать', ex: 'Don\'t <b>give</b> in.', exRu: 'Не сдавайся.' },
            { sense: 'УСТРАИВАТЬ', ru: 'устраивать', ex: 'They <b>gave</b> a party.', exRu: 'Они устроили вечеринку.' }
        ],
        phrases: [
            { p: 'give up', ru: 'бросить / сдаться', ex: 'Don\'t <b>give up</b>!', exRu: 'Не сдавайся!' },
            { p: 'give in', ru: 'уступить', ex: 'I won\'t <b>give in</b>.', exRu: 'Я не уступлю.' },
            { p: 'give away', ru: 'раздать / выдать', ex: 'She <b>gave away</b> the secret.', exRu: 'Она выдала секрет.' },
            { p: 'give back', ru: 'вернуть', ex: '<b>Give back</b> my book.', exRu: 'Верни мою книгу.' },
            { p: 'give out', ru: 'раздавать', ex: 'They <b>gave out</b> free food.', exRu: 'Они раздавали еду бесплатно.' },
            { p: 'give birth', ru: 'родить', ex: 'She <b>gave birth</b> to a boy.', exRu: 'Она родила мальчика.' },
            { p: 'give a hand', ru: 'помочь', ex: 'Can you <b>give me a hand</b>?', exRu: 'Можешь мне помочь?' },
            { p: 'give a call', ru: 'позвонить', ex: '<b>Give me a call</b> later.', exRu: 'Позвони мне позже.' },
            { p: 'give a chance', ru: 'дать шанс', ex: '<b>Give</b> me a chance.', exRu: 'Дай мне шанс.' },
            { p: 'give an example', ru: 'привести пример', ex: '<b>Give</b> me an example.', exRu: 'Приведи пример.' },
            { p: 'give a talk', ru: 'выступить', ex: 'He <b>gave a talk</b>.', exRu: 'Он выступил с речью.' },
            { p: 'give it a try', ru: 'попробовать', ex: '<b>Give it a try</b>!', exRu: 'Попробуй!' }
        ]
    },
    {
        verb: 'keep',
        emoji: '🤲',
        meaning: 'ДЕРЖАТЬ, ПРОДОЛЖАТЬ, ХРАНИТЬ',
        assoc: 'keep = сохранять состояние',
        note: 'keep заменяет: держать, продолжать, хранить, содержать, оставаться.',
        senses: [
            { sense: 'ДЕРЖАТЬ', ru: 'держать', ex: '<b>Keep</b> the door open.', exRu: 'Держи дверь открытой.' },
            { sense: 'ПРОДОЛЖАТЬ', ru: 'продолжать', ex: '<b>Keep</b> reading.', exRu: 'Продолжай читать.' },
            { sense: 'ХРАНИТЬ', ru: 'хранить', ex: 'I <b>keep</b> old photos.', exRu: 'Я храню старые фото.' }
        ],
        phrases: [
            { p: 'keep on', ru: 'продолжать', ex: '<b>Keep on</b> trying.', exRu: 'Продолжай пытаться.' },
            { p: 'keep up', ru: 'не отставать', ex: '<b>Keep up</b> with me.', exRu: 'Не отставай от меня.' },
            { p: 'keep up with', ru: 'успевать за', ex: 'I can\'t <b>keep up with</b> you.', exRu: 'Я не успеваю за тобой.' },
            { p: 'keep away', ru: 'держаться подальше', ex: '<b>Keep away</b> from me!', exRu: 'Держись подальше!' },
            { p: 'keep out', ru: 'не входить', ex: '<b>Keep out</b>!', exRu: 'Не входить!' },
            { p: 'keep in touch', ru: 'поддерживать связь', ex: 'Let\'s <b>keep in touch</b>.', exRu: 'Давай поддерживать связь.' },
            { p: 'keep quiet', ru: 'молчать', ex: '<b>Keep quiet</b>, please.', exRu: 'Помолчи, пожалуйста.' },
            { p: 'keep a secret', ru: 'хранить секрет', ex: 'Can you <b>keep a secret</b>?', exRu: 'Ты умеешь хранить секреты?' },
            { p: 'keep calm', ru: 'сохранять спокойствие', ex: '<b>Keep calm</b>!', exRu: 'Сохраняй спокойствие!' },
            { p: 'keep your word', ru: 'держать слово', ex: 'He always <b>keeps his word</b>.', exRu: 'Он всегда держит слово.' },
            { p: 'keep in mind', ru: 'иметь в виду', ex: '<b>Keep</b> this <b>in mind</b>.', exRu: 'Имей это в виду.' },
            { p: 'keep a diary', ru: 'вести дневник', ex: 'I <b>keep a diary</b>.', exRu: 'Я веду дневник.' }
        ]
    },
    {
        verb: 'break',
        emoji: '💔',
        meaning: 'ЛОМАТЬ, НАРУШАТЬ, РАЗРАЗИТЬСЯ',
        assoc: 'break = нарушить целостность',
        note: 'break заменяет: ломать, разбивать, нарушать, разрывать, прекращать.',
        senses: [
            { sense: 'ЛОМАТЬ', ru: 'ломать', ex: 'Don\'t <b>break</b> the glass.', exRu: 'Не разбей стекло.' },
            { sense: 'НАРУШАТЬ', ru: 'нарушать', ex: 'Don\'t <b>break</b> the rules.', exRu: 'Не нарушай правила.' },
            { sense: 'РАССТАВАТЬСЯ', ru: 'расставаться', ex: 'They <b>broke up</b>.', exRu: 'Они расстались.' }
        ],
        phrases: [
            { p: 'break down', ru: 'сломаться / расплакаться', ex: 'My car <b>broke down</b>.', exRu: 'Моя машина сломалась.' },
            { p: 'break up', ru: 'расстаться', ex: 'They <b>broke up</b> last month.', exRu: 'Они расстались в прошлом месяце.' },
            { p: 'break in', ru: 'вломиться', ex: 'Someone <b>broke in</b>.', exRu: 'Кто-то вломился.' },
            { p: 'break into', ru: 'ворваться в', ex: 'They <b>broke into</b> the house.', exRu: 'Они ворвались в дом.' },
            { p: 'break out', ru: 'разразиться / сбежать', ex: 'War <b>broke out</b>.', exRu: 'Началась война.' },
            { p: 'break through', ru: 'прорваться', ex: 'We <b>broke through</b>.', exRu: 'Мы прорвались.' },
            { p: 'break the rules', ru: 'нарушать правила', ex: 'Don\'t <b>break the rules</b>.', exRu: 'Не нарушай правила.' },
            { p: 'break the news', ru: 'сообщить новость', ex: 'I have to <b>break the news</b>.', exRu: 'Мне нужно сообщить новость.' },
            { p: 'break a leg', ru: 'удачи!', ex: '<b>Break a leg</b>!', exRu: 'Удачи!' },
            { p: 'break even', ru: 'выйти в ноль', ex: 'We just <b>broke even</b>.', exRu: 'Мы вышли в ноль.' },
            { p: 'break a promise', ru: 'нарушить обещание', ex: 'He <b>broke</b> his <b>promise</b>.', exRu: 'Он нарушил обещание.' }
        ]
    },
    {
        verb: 'set',
        emoji: '🛠️',
        meaning: 'СТАВИТЬ, УСТАНАВЛИВАТЬ, ОРГАНИЗОВАТЬ',
        assoc: 'set = привести в нужное положение',
        note: 'set заменяет: ставить, устанавливать, организовывать, заходить (о солнце).',
        senses: [
            { sense: 'СТАВИТЬ', ru: 'ставить', ex: '<b>Set</b> it on the table.', exRu: 'Поставь на стол.' },
            { sense: 'УСТАНАВЛИВАТЬ', ru: 'устанавливать', ex: '<b>Set</b> the alarm.', exRu: 'Поставь будильник.' },
            { sense: 'ЗАХОДИТЬ', ru: 'садиться (о солнце)', ex: 'The sun <b>sets</b> at 8.', exRu: 'Солнце садится в 8.' }
        ],
        phrases: [
            { p: 'set up', ru: 'установить / организовать', ex: '<b>Set up</b> the computer.', exRu: 'Установи компьютер.' },
            { p: 'set off', ru: 'отправиться / запустить', ex: 'We <b>set off</b> at dawn.', exRu: 'Мы отправились на рассвете.' },
            { p: 'set out', ru: 'отправиться', ex: 'They <b>set out</b> early.', exRu: 'Они отправились рано.' },
            { p: 'set aside', ru: 'отложить', ex: '<b>Set aside</b> some money.', exRu: 'Отложи немного денег.' },
            { p: 'set free', ru: 'освободить', ex: 'They <b>set</b> the bird <b>free</b>.', exRu: 'Они выпустили птицу.' },
            { p: 'set fire to', ru: 'поджечь', ex: 'He <b>set fire to</b> the house.', exRu: 'Он поджёг дом.' },
            { p: 'set an example', ru: 'показать пример', ex: '<b>Set an example</b> for others.', exRu: 'Покажи пример другим.' },
            { p: 'set the table', ru: 'накрыть на стол', ex: '<b>Set the table</b>, please.', exRu: 'Накрой на стол, пожалуйста.' },
            { p: 'set a record', ru: 'установить рекорд', ex: 'She <b>set a record</b>.', exRu: 'Она установила рекорд.' },
            { p: 'set the alarm', ru: 'поставить будильник', ex: 'I <b>set the alarm</b> for 7.', exRu: 'Я поставил будильник на 7.' },
            { p: 'set a goal', ru: 'поставить цель', ex: '<b>Set a goal</b> and reach it.', exRu: 'Поставь цель и достигни её.' },
            { p: 'set in', ru: 'наступать', ex: 'Winter has <b>set in</b>.', exRu: 'Наступила зима.' }
        ]
    },

    // ═══════════════════════════════════════════
    // ВОЛНА 3 — run, work, hold, pick, cut, fall
    // ═══════════════════════════════════════════
    {
        verb: 'run',
        emoji: '🏃',
        meaning: 'БЕЖАТЬ, УПРАВЛЯТЬ, ТЕЧЬ',
        assoc: 'run = быстро двигаться или управлять',
        note: 'run заменяет: бегать, управлять, течь, работать (о транспорте), баллотироваться.',
        senses: [
            { sense: 'БЕЖАТЬ', ru: 'бежать', ex: 'I <b>run</b> every morning.', exRu: 'Я бегаю каждое утро.' },
            { sense: 'УПРАВЛЯТЬ', ru: 'управлять', ex: 'She <b>runs</b> a company.', exRu: 'Она управляет компанией.' },
            { sense: 'ТЕЧЬ', ru: 'течь', ex: 'Water <b>runs</b> from the tap.', exRu: 'Вода течёт из крана.' }
        ],
        phrases: [
            { p: 'run away', ru: 'убежать', ex: 'The cat <b>ran away</b>.', exRu: 'Кот убежал.' },
            { p: 'run out of', ru: 'закончиться', ex: 'We <b>ran out of</b> milk.', exRu: 'У нас закончилось молоко.' },
            { p: 'run into', ru: 'случайно встретить', ex: 'I <b>ran into</b> Tom yesterday.', exRu: 'Я случайно встретил Тома вчера.' },
            { p: 'run over', ru: 'переехать', ex: 'A car <b>ran over</b> the dog.', exRu: 'Машина переехала собаку.' },
            { p: 'run after', ru: 'бежать за', ex: 'He <b>ran after</b> the bus.', exRu: 'Он побежал за автобусом.' },
            { p: 'run a business', ru: 'вести бизнес', ex: 'I <b>run a small business</b>.', exRu: 'Я веду небольшой бизнес.' },
            { p: 'run a bath', ru: 'набрать ванну', ex: '<b>Run</b> me a <b>bath</b>.', exRu: 'Набери мне ванну.' },
            { p: 'run late', ru: 'опаздывать', ex: 'I\'m <b>running late</b>.', exRu: 'Я опаздываю.' },
            { p: 'run a fever', ru: 'температурить', ex: 'The child <b>runs a fever</b>.', exRu: 'У ребёнка температура.' },
            { p: 'run in the family', ru: 'быть в роду', ex: 'It <b>runs in the family</b>.', exRu: 'Это в роду.' },
            { p: 'run errands', ru: 'ходить по делам', ex: 'I need to <b>run errands</b>.', exRu: 'Мне нужно сходить по делам.' },
            { p: 'run for', ru: 'баллотироваться', ex: 'He <b>runs for</b> president.', exRu: 'Он баллотируется в президенты.' }
        ]
    },
    {
        verb: 'work',
        emoji: '🔧',
        meaning: 'РАБОТАТЬ, ФУНКЦИОНИРОВАТЬ',
        assoc: 'work = действовать / функционировать',
        note: 'work заменяет: работать, функционировать, срабатывать, тренироваться.',
        senses: [
            { sense: 'РАБОТАТЬ', ru: 'работать', ex: 'I <b>work</b> from home.', exRu: 'Я работаю из дома.' },
            { sense: 'ФУНКЦИОНИРОВАТЬ', ru: 'работать (о вещи)', ex: 'The TV doesn\'t <b>work</b>.', exRu: 'Телевизор не работает.' },
            { sense: 'СРАБОТАТЬ', ru: 'сработать', ex: 'The plan <b>worked</b>.', exRu: 'План сработал.' }
        ],
        phrases: [
            { p: 'work out', ru: 'тренироваться / получиться', ex: 'I <b>work out</b> at the gym.', exRu: 'Я тренируюсь в зале.' },
            { p: 'work on', ru: 'работать над', ex: 'I\'m <b>working on</b> a project.', exRu: 'Я работаю над проектом.' },
            { p: 'work for', ru: 'работать на', ex: 'I <b>work for</b> Google.', exRu: 'Я работаю в Google.' },
            { p: 'work with', ru: 'работать с', ex: 'I <b>work with</b> children.', exRu: 'Я работаю с детьми.' },
            { p: 'work as', ru: 'работать в роли', ex: 'She <b>works as</b> a nurse.', exRu: 'Она работает медсестрой.' },
            { p: 'work up', ru: 'разозлить', ex: 'Don\'t <b>work</b> him <b>up</b>.', exRu: 'Не зли его.' },
            { p: 'not work', ru: 'не работать', ex: 'The wifi doesn\'t <b>work</b>.', exRu: 'Вайфай не работает.' },
            { p: 'work miracles', ru: 'творить чудеса', ex: 'This medicine <b>works miracles</b>.', exRu: 'Это лекарство творит чудеса.' }
        ]
    },
    {
        verb: 'hold',
        emoji: '🤝',
        meaning: 'ДЕРЖАТЬ, ПРОВОДИТЬ, ВМЕЩАТЬ',
        assoc: 'hold = держать в руках или организовывать',
        note: 'hold заменяет: держать, содержать, проводить, вмещать, удерживать.',
        senses: [
            { sense: 'ДЕРЖАТЬ', ru: 'держать', ex: '<b>Hold</b> my hand.', exRu: 'Держи мою руку.' },
            { sense: 'ПРОВОДИТЬ', ru: 'проводить', ex: 'We <b>hold</b> meetings here.', exRu: 'Мы проводим встречи здесь.' },
            { sense: 'ВМЕЩАТЬ', ru: 'вмещать', ex: 'The hall <b>holds</b> 500 people.', exRu: 'Зал вмещает 500 человек.' }
        ],
        phrases: [
            { p: 'hold on', ru: 'подожди / держись', ex: '<b>Hold on</b> a minute.', exRu: 'Подожди минутку.' },
            { p: 'hold up', ru: 'задержать / поднять', ex: 'Sorry, I got <b>held up</b>.', exRu: 'Извини, меня задержали.' },
            { p: 'hold back', ru: 'сдерживать', ex: 'Don\'t <b>hold back</b>.', exRu: 'Не сдерживайся.' },
            { p: 'hold out', ru: 'протянуть', ex: 'He <b>held out</b> his hand.', exRu: 'Он протянул руку.' },
            { p: 'hold down', ru: 'удержать', ex: '<b>Hold down</b> the button.', exRu: 'Удерживай кнопку.' },
            { p: 'hold a meeting', ru: 'провести встречу', ex: 'We <b>hold a meeting</b> every Monday.', exRu: 'Мы проводим встречу каждый понедельник.' },
            { p: 'hold a party', ru: 'устроить вечеринку', ex: 'They <b>held a party</b>.', exRu: 'Они устроили вечеринку.' },
            { p: 'hold your breath', ru: 'затаить дыхание', ex: '<b>Hold your breath</b>.', exRu: 'Затаи дыхание.' },
            { p: 'hold true', ru: 'оставаться верным', ex: 'It still <b>holds true</b>.', exRu: 'Это всё ещё верно.' },
            { p: 'hold hands', ru: 'держаться за руки', ex: 'They <b>hold hands</b>.', exRu: 'Они держатся за руки.' }
        ]
    },
    {
        verb: 'pick',
        emoji: '🎯',
        meaning: 'ВЫБИРАТЬ, ПОДБИРАТЬ, КОВЫРЯТЬ',
        assoc: 'pick = выбрать или поднять',
        note: 'pick заменяет: выбирать, подбирать, собирать, срывать, ковырять.',
        senses: [
            { sense: 'ВЫБИРАТЬ', ru: 'выбирать', ex: '<b>Pick</b> a card.', exRu: 'Выбери карту.' },
            { sense: 'ПОДБИРАТЬ', ru: 'подбирать', ex: 'I <b>picked up</b> the coin.', exRu: 'Я подобрал монету.' },
            { sense: 'СРЫВАТЬ', ru: 'срывать', ex: 'She <b>picked</b> a flower.', exRu: 'Она сорвала цветок.' }
        ],
        phrases: [
            { p: 'pick up', ru: 'подобрать / забрать', ex: 'I\'ll <b>pick you up</b> at 6.', exRu: 'Я заберу тебя в 6.' },
            { p: 'pick out', ru: 'выбрать', ex: '<b>Pick out</b> a dress.', exRu: 'Выбери платье.' },
            { p: 'pick on', ru: 'придираться', ex: 'Stop <b>picking on</b> me.', exRu: 'Хватит ко мне придираться.' },
            { p: 'pick a fight', ru: 'затеять ссору', ex: 'Don\'t <b>pick a fight</b>.', exRu: 'Не затевай ссору.' },
            { p: 'pick your nose', ru: 'ковырять в носу', ex: 'Don\'t <b>pick your nose</b>.', exRu: 'Не ковыряй в носу.' },
            { p: 'pick up the phone', ru: 'взять трубку', ex: '<b>Pick up the phone</b>!', exRu: 'Возьми трубку!' },
            { p: 'pick a date', ru: 'выбрать дату', ex: '<b>Pick a date</b> for the party.', exRu: 'Выбери дату для вечеринки.' },
            { p: 'pick a name', ru: 'выбрать имя', ex: '<b>Pick a name</b> for the cat.', exRu: 'Выбери имя для кота.' }
        ]
    },
    {
        verb: 'cut',
        emoji: '✂️',
        meaning: 'РЕЗАТЬ, СОКРАЩАТЬ, ОТКЛЮЧАТЬ',
        assoc: 'cut = разделить или сократить',
        note: 'cut заменяет: резать, сокращать, урезать, отключать, стричь.',
        senses: [
            { sense: 'РЕЗАТЬ', ru: 'резать', ex: '<b>Cut</b> the bread.', exRu: 'Нарежь хлеб.' },
            { sense: 'СОКРАЩАТЬ', ru: 'сокращать', ex: 'We need to <b>cut</b> costs.', exRu: 'Нам нужно сократить расходы.' },
            { sense: 'ОТКЛЮЧАТЬ', ru: 'отключать', ex: 'They <b>cut off</b> the water.', exRu: 'Они отключили воду.' }
        ],
        phrases: [
            { p: 'cut off', ru: 'отрезать / отключить', ex: 'They <b>cut off</b> the electricity.', exRu: 'Они отключили электричество.' },
            { p: 'cut down', ru: 'сократить / срубить', ex: 'I need to <b>cut down</b> on sugar.', exRu: 'Мне нужно меньше есть сахара.' },
            { p: 'cut in', ru: 'перебить', ex: 'Don\'t <b>cut in</b>.', exRu: 'Не перебивай.' },
            { p: 'cut out', ru: 'вырезать', ex: '<b>Cut out</b> the picture.', exRu: 'Вырежи картинку.' },
            { p: 'cut up', ru: 'нарезать', ex: '<b>Cut up</b> the vegetables.', exRu: 'Нарежь овощи.' },
            { p: 'cut corners', ru: 'халтурить', ex: 'Don\'t <b>cut corners</b>.', exRu: 'Не халтурь.' },
            { p: 'cut a deal', ru: 'заключить сделку', ex: 'They <b>cut a deal</b>.', exRu: 'Они заключили сделку.' },
            { p: 'cut the grass', ru: 'подстричь газон', ex: 'I need to <b>cut the grass</b>.', exRu: 'Мне нужно подстричь газон.' },
            { p: 'cut costs', ru: 'сократить расходы', ex: 'We must <b>cut costs</b>.', exRu: 'Мы должны сократить расходы.' },
            { p: 'cut it out', ru: 'прекрати!', ex: '<b>Cut it out</b>!', exRu: 'Прекрати!' },
            { p: 'cut your hair', ru: 'подстричься', ex: 'I need to <b>cut my hair</b>.', exRu: 'Мне нужно подстричься.' }
        ]
    },
    {
        verb: 'fall',
        emoji: '🍂',
        meaning: 'ПАДАТЬ, ВЛЮБЛЯТЬСЯ, СЛУЧАТЬСЯ',
        assoc: 'fall = двигаться вниз или менять состояние',
        note: 'fall заменяет: падать, влюбляться, заболеть, заснуть, распадаться.',
        senses: [
            { sense: 'ПАДАТЬ', ru: 'падать', ex: 'Be careful, don\'t <b>fall</b>!', exRu: 'Осторожно, не упади!' },
            { sense: 'ВЛЮБЛЯТЬСЯ', ru: 'влюбляться', ex: 'I <b>fell in love</b>.', exRu: 'Я влюбился.' },
            { sense: 'ЗАСЫПАТЬ', ru: 'засыпать', ex: 'I <b>fell asleep</b>.', exRu: 'Я уснул.' }
        ],
        phrases: [
            { p: 'fall asleep', ru: 'заснуть', ex: 'I <b>fell asleep</b> on the sofa.', exRu: 'Я уснул на диване.' },
            { p: 'fall in love', ru: 'влюбиться', ex: 'I <b>fell in love</b> with her.', exRu: 'Я влюбился в неё.' },
            { p: 'fall out', ru: 'поссориться', ex: 'They <b>fell out</b> over money.', exRu: 'Они поссорились из-за денег.' },
            { p: 'fall down', ru: 'упасть', ex: 'He <b>fell down</b> the stairs.', exRu: 'Он упал с лестницы.' },
            { p: 'fall behind', ru: 'отстать', ex: 'I <b>fell behind</b> in class.', exRu: 'Я отстал в учёбе.' },
            { p: 'fall for', ru: 'втюриться / попасться', ex: 'Don\'t <b>fall for</b> it.', exRu: 'Не попадись на это.' },
            { p: 'fall apart', ru: 'развалиться', ex: 'My shoes <b>fell apart</b>.', exRu: 'Мои туфли развалились.' },
            { p: 'fall ill', ru: 'заболеть', ex: 'She <b>fell ill</b> last week.', exRu: 'Она заболела на прошлой неделе.' },
            { p: 'fall silent', ru: 'замолчать', ex: 'The room <b>fell silent</b>.', exRu: 'В комнате стало тихо.' },
            { p: 'fall into', ru: 'попасть в', ex: 'He <b>fell into</b> a trap.', exRu: 'Он попал в ловушку.' }
        ]
    }
];

// ═══════════════════════════════════════════════
// УНИВЕРСАЛЬНЫЕ СЛОВА-ЗАГЛУШКИ
// ═══════════════════════════════════════════════
const magicWords = [
    { word: 'thing', emoji: '📦', ru: 'вещь / штука',
      note: 'Заменяет любое существительное, которое забыл.',
      examples: [
        { ex: 'Give me that <b>thing</b>.', exRu: 'Дай мне эту штуку.' },
        { ex: 'The <b>thing</b> is...', exRu: 'Дело в том, что...' },
        { ex: 'A <b>thing</b> of beauty.', exRu: 'Нечто прекрасное.' },
        { ex: 'I have a <b>thing</b> to do.', exRu: 'У меня есть одно дело.' },
        { ex: 'The best <b>thing</b> about it...', exRu: 'Лучшее в этом...' }
      ]
    },
    { word: 'stuff', emoji: '🎒', ru: 'вещи / барахло',
      note: 'Неформальное «вещи» для любого набора предметов.',
      examples: [
        { ex: 'Where is my <b>stuff</b>?', exRu: 'Где мои вещи?' },
        { ex: 'I have a lot of <b>stuff</b>.', exRu: 'У меня много вещей.' },
        { ex: 'Put your <b>stuff</b> here.', exRu: 'Положи свои вещи здесь.' },
        { ex: 'This <b>stuff</b> is amazing.', exRu: 'Эта штука потрясающая.' },
        { ex: 'Get your <b>stuff</b> together.', exRu: 'Соберись.' }
      ]
    },
    { word: 'way', emoji: '🛣️', ru: 'способ / путь',
      note: 'Заменяет «метод», «стиль», «направление».',
      examples: [
        { ex: 'Do it this <b>way</b>.', exRu: 'Сделай это так.' },
        { ex: 'Which <b>way</b> to go?', exRu: 'В какую сторону идти?' },
        { ex: 'By the <b>way</b>, ...', exRu: 'Кстати, ...' },
        { ex: 'No <b>way</b>!', exRu: 'Не может быть!' },
        { ex: 'In a <b>way</b>, you\'re right.', exRu: 'В каком-то смысле ты прав.' },
        { ex: 'On my <b>way</b> home.', exRu: 'По пути домой.' },
        { ex: 'The best <b>way</b> to learn.', exRu: 'Лучший способ учиться.' }
      ]
    },
    { word: 'place', emoji: '📍', ru: 'место',
      note: 'Любое место, заведение, точка.',
      examples: [
        { ex: 'This is a nice <b>place</b>.', exRu: 'Это хорошее место.' },
        { ex: 'Let\'s go to another <b>place</b>.', exRu: 'Пойдём в другое место.' },
        { ex: 'Put it in its <b>place</b>.', exRu: 'Положи на место.' },
        { ex: 'My <b>place</b> or yours?', exRu: 'У меня или у тебя?' },
        { ex: 'This is my favourite <b>place</b>.', exRu: 'Это моё любимое место.' }
      ]
    },
    { word: 'time', emoji: '⏰', ru: 'время / раз',
      note: 'Может значить «раз»: three times = три раза.',
      examples: [
        { ex: 'I don\'t have <b>time</b>.', exRu: 'У меня нет времени.' },
        { ex: 'This <b>time</b> I will win.', exRu: 'На этот раз я выиграю.' },
        { ex: 'Three <b>times</b> a day.', exRu: 'Три раза в день.' },
        { ex: 'What <b>time</b> is it?', exRu: 'Который час?' },
        { ex: 'It\'s <b>time</b> to go.', exRu: 'Пора идти.' },
        { ex: 'All the <b>time</b>.', exRu: 'Всё время.' },
        { ex: 'From <b>time</b> to <b>time</b>.', exRu: 'Время от времени.' }
      ]
    },
    { word: 'guy', emoji: '👤', ru: 'парень / чувак',
      note: 'Разговорное «человек». Мн. ч. guys = ребята.',
      examples: [
        { ex: 'That <b>guy</b> is funny.', exRu: 'Тот парень смешной.' },
        { ex: 'Hey <b>guys</b>!', exRu: 'Привет, ребята!' },
        { ex: 'He\'s a good <b>guy</b>.', exRu: 'Он хороший парень.' },
        { ex: 'Some <b>guy</b> called you.', exRu: 'Какой-то парень тебе звонил.' }
      ]
    },
    { word: 'kind', emoji: '🔤', ru: 'тип / вид',
      note: 'Универсальное «тип чего-то».',
      examples: [
        { ex: 'What <b>kind</b> of music?', exRu: 'Какую музыку?' },
        { ex: 'This <b>kind</b> of thing.', exRu: 'Такая вот штука.' },
        { ex: 'All <b>kinds</b> of people.', exRu: 'Всевозможные люди.' },
        { ex: 'It\'s a <b>kind</b> of fruit.', exRu: 'Это вид фрукта.' },
        { ex: 'I like this <b>kind</b>.', exRu: 'Мне нравится такой вид.' }
      ]
    },
    { word: 'sort', emoji: '🗂️', ru: 'сорт / род',
      note: 'Синоним kind — «тип чего-то».',
      examples: [
        { ex: 'What <b>sort</b> of car?', exRu: 'Какую машину?' },
        { ex: 'A <b>sort</b> of problem.', exRu: 'Своего рода проблема.' },
        { ex: 'I\'m not that <b>sort</b>.', exRu: 'Я не такой.' }
      ]
    },
    { word: 'problem', emoji: '⚠️', ru: 'проблема / задача',
      note: 'Любая проблема, задача, вопрос.',
      examples: [
        { ex: 'No <b>problem</b>!', exRu: 'Без проблем!' },
        { ex: 'What\'s the <b>problem</b>?', exRu: 'В чём проблема?' },
        { ex: 'I have a <b>problem</b>.', exRu: 'У меня проблема.' },
        { ex: 'That\'s not a <b>problem</b>.', exRu: 'Это не проблема.' },
        { ex: 'Solve the <b>problem</b>.', exRu: 'Реши задачу.' }
      ]
    },
    { word: 'trouble', emoji: '🚨', ru: 'неприятность',
      note: 'Синоним problem, но с оттенком «беда».',
      examples: [
        { ex: 'I\'m in <b>trouble</b>.', exRu: 'У меня неприятности.' },
        { ex: 'Don\'t get into <b>trouble</b>.', exRu: 'Не влипай в неприятности.' },
        { ex: 'He had <b>trouble</b> with it.', exRu: 'У него были проблемы с этим.' }
      ]
    },
    { word: 'job', emoji: '💼', ru: 'работа / дело',
      note: 'Работа или какая-то задача.',
      examples: [
        { ex: 'Good <b>job</b>!', exRu: 'Молодец!' },
        { ex: 'I have a <b>job</b> for you.', exRu: 'У меня к тебе дело.' },
        { ex: 'He does his <b>job</b> well.', exRu: 'Он хорошо делает свою работу.' },
        { ex: 'Find a new <b>job</b>.', exRu: 'Найди новую работу.' },
        { ex: 'Do the <b>job</b>.', exRu: 'Сделай работу.' }
      ]
    },
    { word: 'matter', emoji: '❓', ru: 'дело / вопрос',
      note: '«Что случилось», «в чём дело».',
      examples: [
        { ex: 'What\'s the <b>matter</b>?', exRu: 'В чём дело?' },
        { ex: 'It doesn\'t <b>matter</b>.', exRu: 'Это не важно.' },
        { ex: 'No <b>matter</b> what.', exRu: 'Что бы ни было.' }
      ]
    },
    { word: 'idea', emoji: '💡', ru: 'идея / мысль',
      note: 'Идея, мысль, догадка.',
      examples: [
        { ex: 'Good <b>idea</b>!', exRu: 'Хорошая идея!' },
        { ex: 'I have no <b>idea</b>.', exRu: 'Понятия не имею.' },
        { ex: 'That\'s a bad <b>idea</b>.', exRu: 'Это плохая идея.' },
        { ex: 'Any <b>ideas</b>?', exRu: 'Есть идеи?' }
      ]
    },
    { word: 'message', emoji: '💬', ru: 'сообщение',
      note: 'Сообщение любого вида.',
      examples: [
        { ex: 'I got your <b>message</b>.', exRu: 'Я получил твоё сообщение.' },
        { ex: 'Send me a <b>message</b>.', exRu: 'Пришли мне сообщение.' },
        { ex: 'Leave a <b>message</b>.', exRu: 'Оставь сообщение.' }
      ]
    },
    { word: 'point', emoji: '🎯', ru: 'смысл / точка',
      note: 'Смысл, суть, точка зрения.',
      examples: [
        { ex: 'What\'s the <b>point</b>?', exRu: 'В чём смысл?' },
        { ex: 'You have a <b>point</b>.', exRu: 'Ты прав.' },
        { ex: 'That\'s not the <b>point</b>.', exRu: 'Дело не в этом.' },
        { ex: 'I see your <b>point</b>.', exRu: 'Я понимаю твою точку зрения.' }
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
    { en: 'Sorry, my English is not very good.', ru: 'Извини, мой английский не очень.' },
    { en: 'Could you help me, please?', ru: 'Можешь мне помочь, пожалуйста?' },
    { en: 'What is this called?', ru: 'Как это называется?' },
    { en: 'Can you show me?', ru: 'Можешь показать?' },
    { en: 'Let me think...', ru: 'Дай подумать...' },
    { en: 'I forgot the word.', ru: 'Я забыл слово.' },
    { en: 'What do you call this?', ru: 'Как это называется?' },
    { en: 'Could you write it down?', ru: 'Можешь записать это?' },
    { en: 'One more time, please.', ru: 'Ещё раз, пожалуйста.' },
    { en: 'I don\'t know how to explain.', ru: 'Я не знаю, как объяснить.' },
    { en: 'Sorry, I didn\'t catch that.', ru: 'Извини, я не расслышал.' },
    { en: 'Could you speak up?', ru: 'Говорите громче, пожалуйста.' }
];
