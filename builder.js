// builder.js — конструктор предложений, вопросов и ответов

const builderCategories = [
    { id: 'all',       emoji: '📚', name: 'Все' },
    { id: 'order',     emoji: '🧩', name: 'Собери предложение' },
    { id: 'question',  emoji: '❓', name: 'Построй вопрос' },
    { id: 'reply',     emoji: '💬', name: 'Выбери ответ' },
    { id: 'transform', emoji: '🔄', name: 'Переделай' },
    { id: 'dialogue',  emoji: '🎭', name: 'Диалоги' }
];

// ═══════════════════════════════════════════════════════════
// ТИП 1: СОБЕРИ ПРЕДЛОЖЕНИЕ ИЗ СЛОВ (order)
// Правильный порядок слов в предложении
// ═══════════════════════════════════════════════════════════
const builderOrder = [
    { ru: 'Я хожу в школу каждый день.', words: ['I', 'go', 'to', 'school', 'every', 'day'], hint: 'Подлежащее + глагол + куда + когда' },
    { ru: 'Она работает в офисе.', words: ['She', 'works', 'at', 'the', 'office'], hint: 'he/she/it → +s' },
    { ru: 'Мы живём в Лондоне.', words: ['We', 'live', 'in', 'London'], hint: 'in = внутри города' },
    { ru: 'Он читает книгу сейчас.', words: ['He', 'is', 'reading', 'a', 'book', 'now'], hint: 'Present Continuous: am/is/are + Ving' },
    { ru: 'Я вчера ходил в кино.', words: ['I', 'went', 'to', 'the', 'cinema', 'yesterday'], hint: 'Past Simple: went' },
    { ru: 'Она любит пить кофе.', words: ['She', 'likes', 'drinking', 'coffee'], hint: 'like + Ving' },
    { ru: 'Дай мне воды, пожалуйста.', words: ['Give', 'me', 'some', 'water', 'please'], hint: 'Императив: глагол в начале' },
    { ru: 'Я не понимаю тебя.', words: ['I', 'don\'t', 'understand', 'you'], hint: 'do not = don\'t' },
    { ru: 'Ты где живёшь?', words: ['Where', 'do', 'you', 'live'], hint: 'Вопрос: Where + do + подлежащее + глагол' },
    { ru: 'Что это значит?', words: ['What', 'does', 'it', 'mean'], hint: 'What does it mean?' },
    { ru: 'Сколько тебе лет?', words: ['How', 'old', 'are', 'you'], hint: 'How old are you?' },
    { ru: 'Который час?', words: ['What', 'time', 'is', 'it'], hint: 'What time is it?' },
    { ru: 'Я был в Лондоне дважды.', words: ['I', 'have', 'been', 'to', 'London', 'twice'], hint: 'Present Perfect: have + V3' },
    { ru: 'Она сейчас читает книгу.', words: ['She', 'is', 'reading', 'a', 'book'], hint: 'Present Continuous' },
    { ru: 'Он не работает сегодня.', words: ['He', 'isn\'t', 'working', 'today'], hint: 'isn\'t = is not' },
    { ru: 'Мы собираемся поехать в Париж.', words: ['We', 'are', 'going', 'to', 'go', 'to', 'Paris'], hint: 'be going to = собираться' },
    { ru: 'Я хочу пить.', words: ['I', 'want', 'to', 'drink'], hint: 'want to + глагол' },
    { ru: 'Это очень интересно.', words: ['It', 'is', 'very', 'interesting'], hint: 'very перед прилагательным' },
    { ru: 'Позвони мне завтра.', words: ['Call', 'me', 'tomorrow'], hint: 'Императив' },
    { ru: 'Ему нравится футбол.', words: ['He', 'likes', 'football'], hint: 'like + существительное' }
];

// ═══════════════════════════════════════════════════════════
// ТИП 2: ПОСТРОЙ ВОПРОС ИЗ УТВЕРЖДЕНИЯ (question)
// Дано утверждение — выбрать правильный вариант вопроса
// ═══════════════════════════════════════════════════════════
const builderQuestions = [
    { statement: 'She likes coffee.', question: 'Does she like coffee?', wrong: ['Do she likes coffee?', 'Is she like coffee?', 'She does like coffee?'], hint: 'he/she/it → does + V1 без -s', ru: 'Она любит кофе.' },
    { statement: 'They are students.', question: 'Are they students?', wrong: ['Do they are students?', 'They are students?', 'Is they students?'], hint: 'to be вперёд: Are they...?' },
    { statement: 'He went to school.', question: 'Did he go to school?', wrong: ['Did he went to school?', 'Does he went?', 'Was he go?'], hint: 'did + V1 (не V2!)' },
    { statement: 'I can swim.', question: 'Can you swim?', wrong: ['Do you can swim?', 'Can you swimming?', 'You can swim?'], hint: 'can выносим вперёд' },
    { statement: 'She has finished.', question: 'Has she finished?', wrong: ['Does she have finished?', 'Has she finish?', 'Is she finished?'], hint: 'have/has → вперёд в Present Perfect' },
    { statement: 'I am reading.', question: 'Are you reading?', wrong: ['Do you reading?', 'You are reading?', 'Am you reading?'], hint: 'am → are (при I → you)' },
    { statement: 'It will rain.', question: 'Will it rain?', wrong: ['Does it will rain?', 'It will rain?', 'Will it rains?'], hint: 'will → вперёд' },
    { statement: 'We were at home.', question: 'Were you at home?', wrong: ['Was you at home?', 'Did you be at home?', 'Were we home?'], hint: 'were → were (при we → you)' },
    { statement: 'He plays football.', question: 'Does he play football?', wrong: ['Do he play football?', 'Is he play football?', 'He does play football?'], hint: 'does + V1 без -s' },
    { statement: 'I have a car.', question: 'Do you have a car?', wrong: ['Have you a car?', 'Do you has a car?', 'Are you have a car?'], hint: 'have → do you have (в Present Simple)' },
    { statement: 'She is happy.', question: 'Is she happy?', wrong: ['Does she happy?', 'She is happy?', 'Has she happy?'], hint: 'is → вперёд' },
    { statement: 'They went home.', question: 'Did they go home?', wrong: ['Did they went home?', 'Was they go home?', 'Do they went home?'], hint: 'did + V1' },
    { statement: 'You like tea.', question: 'Do you like tea?', wrong: ['Are you like tea?', 'Does you like tea?', 'You do like tea?'], hint: 'you → do' },
    { statement: 'She can dance.', question: 'Can she dance?', wrong: ['Does she can dance?', 'Is she can dance?', 'She can dance?'], hint: 'can выносим' },
    { statement: 'I was tired.', question: 'Were you tired?', wrong: ['Did you be tired?', 'Was you tired?', 'Are you tired?'], hint: 'was → were при you' },
    { statement: 'He will come.', question: 'Will he come?', wrong: ['Does he will come?', 'He will come?', 'Is he will come?'], hint: 'will вперёд' },
    { statement: 'We have seen it.', question: 'Have you seen it?', wrong: ['Did you seen it?', 'Do you have seen it?', 'Has you seen it?'], hint: 'have → вперёд' },
    { statement: 'She knows him.', question: 'Does she know him?', wrong: ['Do she know him?', 'Does she knows him?', 'Is she know him?'], hint: 'does + V1' },
    { statement: 'It is cold.', question: 'Is it cold?', wrong: ['Does it cold?', 'It is cold?', 'Was it cold?'], hint: 'is вперёд' },
    { statement: 'They like pizza.', question: 'Do they like pizza?', wrong: ['Does they like pizza?', 'Are they like pizza?', 'They do like pizza?'], hint: 'they → do' }
];

// ═══════════════════════════════════════════════════════════
// ТИП 3: ВЫБЕРИ ПРАВИЛЬНЫЙ ОТВЕТ НА РЕПЛИКУ (reply)
// ═══════════════════════════════════════════════════════════
const builderReplies = [
    { prompt: 'How are you?', ruPrompt: 'Как дела?', correct: 'I\'m fine, thanks. And you?', wrong: ['Yes, I am.', 'My name is Anna.', 'I am 20.'], ru: 'У меня всё хорошо, спасибо. А у тебя?', hint: 'Ответ на «как дела» — рассказать о состоянии' },
    { prompt: 'What\'s your name?', ruPrompt: 'Как тебя зовут?', correct: 'My name is Anna.', wrong: ['I\'m fine.', 'I am 20.', 'Yes, please.'], ru: 'Меня зовут Анна.', hint: 'Отвечаем именем' },
    { prompt: 'How old are you?', ruPrompt: 'Сколько тебе лет?', correct: 'I am 20.', wrong: ['I\'m fine.', 'My name is Anna.', 'Yes, I do.'], ru: 'Мне 20.', hint: 'Отвечаем числом' },
    { prompt: 'Where are you from?', ruPrompt: 'Откуда ты?', correct: 'I am from Russia.', wrong: ['I am fine.', 'I am 20.', 'Yes, I am.'], ru: 'Я из России.', hint: 'I am from + страна' },
    { prompt: 'Do you speak English?', ruPrompt: 'Ты говоришь по-английски?', correct: 'Yes, a little.', wrong: ['Yes, I am.', 'Yes, I do speak name.', 'I am from Russia.'], ru: 'Да, немного.', hint: 'Yes, I do / No, I don\'t' },
    { prompt: 'Thank you very much!', ruPrompt: 'Большое спасибо!', correct: 'You\'re welcome.', wrong: ['No, thanks.', 'Yes, please.', 'I\'m sorry.'], ru: 'Пожалуйста.', hint: 'You\'re welcome = Пожалуйста' },
    { prompt: 'Sorry, I\'m late.', ruPrompt: 'Извини, я опоздал.', correct: 'That\'s OK. Don\'t worry.', wrong: ['You\'re welcome.', 'Yes, please.', 'Not at all.'], ru: 'Всё нормально. Не переживай.', hint: 'That\'s OK = Ничего страшного' },
    { prompt: 'Would you like some tea?', ruPrompt: 'Хочешь чаю?', correct: 'Yes, please.', wrong: ['Yes, I do.', 'You\'re welcome.', 'I am fine.'], ru: 'Да, пожалуйста.', hint: 'Would you like → Yes, please / No, thanks' },
    { prompt: 'How do you spell it?', ruPrompt: 'Как это пишется?', correct: 'C-A-T.', wrong: ['Yes, I can.', 'I am fine.', 'It means cat.'], ru: 'C-A-T.', hint: 'Произносим по буквам' },
    { prompt: 'What does it mean?', ruPrompt: 'Что это значит?', correct: 'It means "happy".', wrong: ['Yes, it does.', 'C-A-T.', 'I am from Russia.'], ru: 'Это значит «счастливый».', hint: 'It means + перевод' },
    { prompt: 'Can I help you?', ruPrompt: 'Могу я помочь?', correct: 'Yes, please. I\'m looking for a book.', wrong: ['Yes, I can.', 'No, I don\'t.', 'I am fine.'], ru: 'Да, пожалуйста. Я ищу книгу.', hint: 'Yes, please / No, thanks' },
    { prompt: 'See you tomorrow!', ruPrompt: 'До завтра!', correct: 'See you!', wrong: ['You\'re welcome.', 'Thank you.', 'I\'m sorry.'], ru: 'До встречи!', hint: 'See you = До встречи' },
    { prompt: 'Have a nice day!', ruPrompt: 'Хорошего дня!', correct: 'Thanks, you too.', wrong: ['Yes, please.', 'You\'re welcome.', 'I am fine.'], ru: 'Спасибо, тебе тоже.', hint: 'Thanks, you too = Спасибо, тебе тоже' },
    { prompt: 'Nice to meet you.', ruPrompt: 'Приятно познакомиться.', correct: 'Nice to meet you too.', wrong: ['You\'re welcome.', 'Yes, I am.', 'Thank you very much.'], ru: 'Мне тоже приятно.', hint: 'Добавляем too' },
    { prompt: 'Excuse me, where is the station?', ruPrompt: 'Извините, где вокзал?', correct: 'Go straight and turn left.', wrong: ['You\'re welcome.', 'Yes, please.', 'I am 20.'], ru: 'Идите прямо и поверните налево.', hint: 'Объясняем маршрут' },
    { prompt: 'What time is it?', ruPrompt: 'Который час?', correct: 'It\'s half past three.', wrong: ['Yes, it is.', 'You\'re welcome.', 'I am fine.'], ru: 'Половина четвёртого.', hint: 'It\'s + время' },
    { prompt: 'Do you like coffee?', ruPrompt: 'Ты любишь кофе?', correct: 'Yes, I love it.', wrong: ['Yes, I am.', 'You\'re welcome.', 'It is cold.'], ru: 'Да, обожаю.', hint: 'Yes, I do → Yes, I love it' },
    { prompt: 'Why are you late?', ruPrompt: 'Почему ты опоздал?', correct: 'Because I missed the bus.', wrong: ['Yes, I am.', 'You\'re welcome.', 'It\'s 5 o\'clock.'], ru: 'Потому что я опоздал на автобус.', hint: 'Because = потому что' },
    { prompt: 'Hello! How can I help you?', ruPrompt: 'Здравствуйте! Чем помочь?', correct: 'I\'d like a coffee, please.', wrong: ['Yes, I am.', 'You\'re welcome.', 'Thank you very much.'], ru: 'Я хотел бы кофе, пожалуйста.', hint: 'I\'d like = Я хотел бы' },
    { prompt: 'What\'s the weather like?', ruPrompt: 'Какая погода?', correct: 'It\'s sunny and warm.', wrong: ['I am fine.', 'Yes, it is.', 'You\'re welcome.'], ru: 'Солнечно и тепло.', hint: 'It\'s + прилагательное о погоде' }
];

// ═══════════════════════════════════════════════════════════
// ТИП 4: ПЕРЕДЕЛАЙ (transform) — вопрос/отрицание/время
// ═══════════════════════════════════════════════════════════
const builderTransform = [
    { task: 'Сделай отрицание', given: 'I like coffee.', answer: 'I don\'t like coffee.', wrong: ['I not like coffee.', 'I no like coffee.', 'I am not like coffee.'], hint: 'Present Simple: don\'t + V1', ru: 'Я не люблю кофе.' },
    { task: 'Сделай вопрос', given: 'She likes tea.', answer: 'Does she like tea?', wrong: ['Do she like tea?', 'Does she likes tea?', 'Is she like tea?'], hint: 'does + V1', ru: 'Она любит чай?' },
    { task: 'Сделай отрицание', given: 'He is working.', answer: 'He isn\'t working.', wrong: ['He don\'t working.', 'He not working.', 'He doesn\'t working.'], hint: 'isn\'t = is not', ru: 'Он не работает.' },
    { task: 'Поставь в Past Simple', given: 'I go to school.', answer: 'I went to school.', wrong: ['I goed to school.', 'I go to school yesterday.', 'I was go to school.'], hint: 'go → went', ru: 'Я ходил в школу.' },
    { task: 'Поставь в Future Simple', given: 'I will call you.', answer: 'I will call you.', wrong: ['I call you tomorrow.', 'I am call you.', 'I call will you.'], hint: 'will + V1', ru: 'Я позвоню тебе.' },
    { task: 'Сделай отрицание', given: 'They have finished.', answer: 'They haven\'t finished.', wrong: ['They don\'t finished.', 'They not finished.', 'They didn\'t finished.'], hint: 'haven\'t = have not', ru: 'Они не закончили.' },
    { task: 'Сделай вопрос', given: 'You are happy.', answer: 'Are you happy?', wrong: ['Do you happy?', 'Are you is happy?', 'You are happy?'], hint: 'Are → вперёд', ru: 'Ты счастлив?' },
    { task: 'Сделай Past Simple', given: 'She writes a letter.', answer: 'She wrote a letter.', wrong: ['She writed a letter.', 'She write a letter.', 'She was write a letter.'], hint: 'write → wrote', ru: 'Она написала письмо.' },
    { task: 'Сделай Present Continuous', given: 'I read a book.', answer: 'I am reading a book.', wrong: ['I reading a book.', 'I am read a book.', 'I do reading a book.'], hint: 'am + Ving', ru: 'Я читаю книгу (сейчас).' },
    { task: 'Сделай Present Perfect', given: 'I see this film.', answer: 'I have seen this film.', wrong: ['I have saw this film.', 'I has seen this film.', 'I seen this film.'], hint: 'have + V3', ru: 'Я видел этот фильм.' },
    { task: 'Сделай отрицание', given: 'She can swim.', answer: 'She can\'t swim.', wrong: ['She doesn\'t can swim.', 'She not can swim.', 'She cannot swims.'], hint: 'can\'t = cannot', ru: 'Она не умеет плавать.' },
    { task: 'Сделай вопрос', given: 'He has a car.', answer: 'Does he have a car?', wrong: ['Has he a car?', 'Does he has a car?', 'Is he have a car?'], hint: 'does + have (V1)', ru: 'У него есть машина?' },
    { task: 'Past Simple (отрицание)', given: 'I went to Paris.', answer: 'I didn\'t go to Paris.', wrong: ['I don\'t went to Paris.', 'I didn\'t went to Paris.', 'I not go to Paris.'], hint: 'didn\'t + V1 (не V2!)', ru: 'Я не ездил в Париж.' },
    { task: 'Сделай вопрос', given: 'They were at home.', answer: 'Were they at home?', wrong: ['Did they be at home?', 'Was they at home?', 'Do they were at home?'], hint: 'were → вперёд', ru: 'Они были дома?' },
    { task: 'Сделай отрицание', given: 'I will go.', answer: 'I won\'t go.', wrong: ['I don\'t will go.', 'I not will go.', 'I will not going.'], hint: 'won\'t = will not', ru: 'Я не пойду.' },
    { task: 'Сделай Present Continuous', given: 'They play football.', answer: 'They are playing football.', wrong: ['They playing football.', 'They are play football.', 'They is playing football.'], hint: 'are + Ving', ru: 'Они играют в футбол (сейчас).' },
    { task: 'Present Perfect (вопрос)', given: 'You have been to London.', answer: 'Have you been to London?', wrong: ['Did you been to London?', 'Do you have been to London?', 'Have you be to London?'], hint: 'Have → вперёд', ru: 'Ты был в Лондоне?' },
    { task: 'Сделай вопрос', given: 'She is reading.', answer: 'Is she reading?', wrong: ['Does she reading?', 'Is she read?', 'She is reading?'], hint: 'is → вперёд', ru: 'Она читает?' },
    { task: 'Past Simple', given: 'He eats breakfast.', answer: 'He ate breakfast.', wrong: ['He eated breakfast.', 'He eat breakfast yesterday.', 'He was eat breakfast.'], hint: 'eat → ate', ru: 'Он позавтракал.' },
    { task: 'Сделай отрицание', given: 'We like ice-cream.', answer: 'We don\'t like ice-cream.', wrong: ['We not like ice-cream.', 'We no like ice-cream.', 'We aren\'t like ice-cream.'], hint: 'don\'t + V1', ru: 'Мы не любим мороженое.' }
];

// ═══════════════════════════════════════════════════════════
// ТИП 5: ДИАЛОГИ (dialogue) — шаг за шагом
// ═══════════════════════════════════════════════════════════
const builderDialogues = [
    {
        title: 'В кафе',
        emoji: '☕',
        steps: [
            { speaker: 'Barista', en: 'Hello! What can I get you?', ru: 'Здравствуйте! Что вам принести?', options: ['I\'d like a coffee, please.', 'Yes, I am fine.', 'My name is Tom.'], correct: 0 },
            { speaker: 'You', en: 'I\'d like a coffee, please.', ru: 'Я хотел бы кофе, пожалуйста.', options: ['Small or large?', 'Thank you very much!', 'I am from Russia.'], correct: 0, speakerNote: 'Barista' },
            { speaker: 'You', en: 'Large, please.', ru: 'Большой, пожалуйста.', options: ['That will be $3.', 'You\'re welcome.', 'Nice to meet you.'], correct: 0, speakerNote: 'Barista' },
            { speaker: 'You', en: 'Here you are.', ru: 'Вот, пожалуйста.', options: ['Thank you!', 'Yes, please.', 'I am fine.'], correct: 0, speakerNote: 'Barista' }
        ]
    },
    {
        title: 'Знакомство',
        emoji: '🤝',
        steps: [
            { speaker: 'Anna', en: 'Hi! I\'m Anna. What\'s your name?', ru: 'Привет! Я Анна. Как тебя зовут?', options: ['My name is Tom.', 'I\'m fine, thanks.', 'I\'m 20.'], correct: 0 },
            { speaker: 'You', en: 'My name is Tom. Nice to meet you.', ru: 'Меня зовут Том. Приятно познакомиться.', options: ['Nice to meet you too.', 'You\'re welcome.', 'Thank you very much.'], correct: 0, speakerNote: 'Anna' },
            { speaker: 'You', en: 'Nice to meet you too.', ru: 'Мне тоже приятно.', options: ['Where are you from?', 'Yes, I do.', 'I am sorry.'], correct: 0, speakerNote: 'Anna' },
            { speaker: 'You', en: 'I\'m from Russia.', ru: 'Я из России.', options: ['That\'s cool!', 'You\'re welcome.', 'See you tomorrow.'], correct: 0, speakerNote: 'Anna' }
        ]
    },
    {
        title: 'В отеле',
        emoji: '🏨',
        steps: [
            { speaker: 'Receptionist', en: 'Good evening! Do you have a reservation?', ru: 'Добрый вечер! У вас есть бронь?', options: ['Yes, under the name Ivanov.', 'I am fine, thank you.', 'My name is Ivanov.'], correct: 0 },
            { speaker: 'You', en: 'Yes, under the name Ivanov.', ru: 'Да, на имя Иванов.', options: ['Let me check. Yes, room 305.', 'You\'re welcome.', 'I am 20.'], correct: 0, speakerNote: 'Receptionist' },
            { speaker: 'You', en: 'Thank you.', ru: 'Спасибо.', options: ['Here is your key.', 'Yes, please.', 'I am sorry.'], correct: 0, speakerNote: 'Receptionist' },
            { speaker: 'You', en: 'Thank you very much!', ru: 'Большое спасибо!', options: ['Enjoy your stay!', 'You\'re welcome.', 'See you!'], correct: 0, speakerNote: 'Receptionist' }
        ]
    },
    {
        title: 'На улице',
        emoji: '🗺️',
        steps: [
            { speaker: 'You', en: 'Excuse me, where is the station?', ru: 'Извините, где вокзал?', options: ['Yes, of course.', 'I am fine.', 'My name is Anna.'], correct: 0, speakerNote: 'Passerby' },
            { speaker: 'Passerby', en: 'Go straight and turn left.', ru: 'Идите прямо и поверните налево.', options: ['Thank you very much!', 'You\'re welcome.', 'I am sorry.'], correct: 0 },
            { speaker: 'You', en: 'Is it far?', ru: 'Это далеко?', options: ['No, about 5 minutes.', 'Yes, I am.', 'I don\'t know.'], correct: 0, speakerNote: 'Passerby' },
            { speaker: 'You', en: 'Great, thanks!', ru: 'Отлично, спасибо!', options: ['You\'re welcome.', 'Yes, please.', 'I am fine.'], correct: 0, speakerNote: 'Passerby' }
        ]
    },
    {
        title: 'Телефонный звонок',
        emoji: '📞',
        steps: [
            { speaker: 'You', en: 'Hello?', ru: 'Алло?', options: ['Hi, this is Anna.', 'Yes, I am fine.', 'Goodbye!'], correct: 0, speakerNote: 'Caller' },
            { speaker: 'Caller', en: 'Hi, this is Anna. Can you talk?', ru: 'Привет, это Анна. Можешь говорить?', options: ['Yes, sure.', 'You\'re welcome.', 'I am 20.'], correct: 0 },
            { speaker: 'You', en: 'Yes, sure.', ru: 'Да, конечно.', options: ['Great! Let\'s meet at 6.', 'I am sorry.', 'Thank you.'], correct: 0, speakerNote: 'Caller' },
            { speaker: 'You', en: 'OK, see you at 6.', ru: 'Хорошо, увидимся в 6.', options: ['See you!', 'You\'re welcome.', 'I am fine.'], correct: 0, speakerNote: 'Caller' }
        ]
    }
];

// ===== Вспомогательные =====
function shuffleWords(words) {
    const a = [...words];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function shuffleArrayBuilder(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
