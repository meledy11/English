// builder.js — конструктор предложений, вопросов и ответов (МЕГА-расширенная версия)

const builderCategories = [
    { id: 'all',       emoji: '📚', name: 'Все' },
    { id: 'order',     emoji: '🧩', name: 'Собери предложение' },
    { id: 'question',  emoji: '❓', name: 'Построй вопрос' },
    { id: 'reply',     emoji: '💬', name: 'Выбери ответ' },
    { id: 'transform', emoji: '🔄', name: 'Переделай' },
    { id: 'dialogue',  emoji: '🎭', name: 'Диалоги' }
];

// ═══════════════════════════════════════════════════════════
// ТИП 1: СОБЕРИ ПРЕДЛОЖЕНИЕ ИЗ СЛОВ (order) — 120 заданий
// ═══════════════════════════════════════════════════════════
const builderOrder = [
    // ─── Present Simple: привычки и факты ───
    { ru: 'Я хожу в школу каждый день.', words: ['I', 'go', 'to', 'school', 'every', 'day'], hint: 'Подлежащее + глагол + куда + когда' },
    { ru: 'Она работает в офисе.', words: ['She', 'works', 'at', 'the', 'office'], hint: 'he/she/it → +s' },
    { ru: 'Мы живём в Лондоне.', words: ['We', 'live', 'in', 'London'], hint: 'in = внутри города' },
    { ru: 'Она любит пить кофе.', words: ['She', 'likes', 'drinking', 'coffee'], hint: 'like + Ving' },
    { ru: 'Я не понимаю тебя.', words: ['I', 'don\'t', 'understand', 'you'], hint: 'do not = don\'t' },
    { ru: 'Ему нравится футбол.', words: ['He', 'likes', 'football'], hint: 'like + существительное' },
    { ru: 'Он играет в теннис по субботам.', words: ['He', 'plays', 'tennis', 'on', 'Saturdays'], hint: 'on + дни недели' },
    { ru: 'Мои родители живут в деревне.', words: ['My', 'parents', 'live', 'in', 'the', 'country'], hint: 'they → live (без -s)' },
    { ru: 'Мы обычно ужинаем в семь.', words: ['We', 'usually', 'have', 'dinner', 'at', 'seven'], hint: 'Наречие частоты перед глаголом' },
    { ru: 'Она никогда не опаздывает.', words: ['She', 'is', 'never', 'late'], hint: 'never перед прилагательным' },
    { ru: 'Я часто читаю перед сном.', words: ['I', 'often', 'read', 'before', 'bed'], hint: 'often перед глаголом' },
    { ru: 'Он всегда пьёт кофе утром.', words: ['He', 'always', 'drinks', 'coffee', 'in', 'the', 'morning'], hint: 'always + V(s)' },
    { ru: 'Иногда мы ходим в кино.', words: ['Sometimes', 'we', 'go', 'to', 'the', 'cinema'], hint: 'Sometimes в начале' },
    { ru: 'Мой брат любит играть в шахматы.', words: ['My', 'brother', 'likes', 'playing', 'chess'], hint: 'like + Ving' },
    { ru: 'Она говорит по-французски очень хорошо.', words: ['She', 'speaks', 'French', 'very', 'well'], hint: 'speak + язык' },

    // ─── Present Continuous: сейчас ───
    { ru: 'Он читает книгу сейчас.', words: ['He', 'is', 'reading', 'a', 'book', 'now'], hint: 'Present Continuous: am/is/are + Ving' },
    { ru: 'Она сейчас читает книгу.', words: ['She', 'is', 'reading', 'a', 'book'], hint: 'Present Continuous' },
    { ru: 'Он не работает сегодня.', words: ['He', 'isn\'t', 'working', 'today'], hint: 'isn\'t = is not' },
    { ru: 'Дети играют в саду.', words: ['The', 'children', 'are', 'playing', 'in', 'the', 'garden'], hint: 'they → are + Ving' },
    { ru: 'Что ты делаешь сейчас?', words: ['What', 'are', 'you', 'doing', 'now'], hint: 'Вопрос: What + are + you + Ving' },
    { ru: 'Я сейчас пишу письмо.', words: ['I', 'am', 'writing', 'a', 'letter'], hint: 'I → am + Ving' },
    { ru: 'Она готовит ужин на кухне.', words: ['She', 'is', 'cooking', 'dinner', 'in', 'the', 'kitchen'], hint: 'is + Ving' },
    { ru: 'Мы смотрим фильм сейчас.', words: ['We', 'are', 'watching', 'a', 'film', 'now'], hint: 'we → are + Ving' },
    { ru: 'Идёт дождь.', words: ['It', 'is', 'raining'], hint: 'It is raining — безличное' },
    { ru: 'Они не слушают меня.', words: ['They', 'aren\'t', 'listening', 'to', 'me'], hint: 'aren\'t = are not' },
    { ru: 'Почему ты плачешь?', words: ['Why', 'are', 'you', 'crying'], hint: 'Why + are + you + Ving' },
    { ru: 'Он сейчас разговаривает по телефону.', words: ['He', 'is', 'talking', 'on', 'the', 'phone'], hint: 'on the phone = по телефону' },

    // ─── Past Simple: вчера ───
    { ru: 'Я вчера ходил в кино.', words: ['I', 'went', 'to', 'the', 'cinema', 'yesterday'], hint: 'Past Simple: went' },
    { ru: 'Она вчера была дома.', words: ['She', 'was', 'at', 'home', 'yesterday'], hint: 'was для she/he/it' },
    { ru: 'Они вчера не пришли.', words: ['They', 'didn\'t', 'come', 'yesterday'], hint: 'didn\'t + V1' },
    { ru: 'Мы ели пиццу вчера вечером.', words: ['We', 'ate', 'pizza', 'last', 'night'], hint: 'eat → ate' },
    { ru: 'Где ты был вчера?', words: ['Where', 'were', 'you', 'yesterday'], hint: 'were для you/we/they' },
    { ru: 'Я купил новую машину в прошлом году.', words: ['I', 'bought', 'a', 'new', 'car', 'last', 'year'], hint: 'buy → bought' },
    { ru: 'Он работал здесь два года назад.', words: ['He', 'worked', 'here', 'two', 'years', 'ago'], hint: 'ago = тому назад' },
    { ru: 'Она не позвонила мне вчера.', words: ['She', 'didn\'t', 'call', 'me', 'yesterday'], hint: 'didn\'t + V1' },
    { ru: 'Мы видели красивый закат.', words: ['We', 'saw', 'a', 'beautiful', 'sunset'], hint: 'see → saw' },
    { ru: 'Ты смотрел вчера футбол?', words: ['Did', 'you', 'watch', 'football', 'yesterday'], hint: 'Did + you + V1' },
    { ru: 'Я забыл свой зонт дома.', words: ['I', 'left', 'my', 'umbrella', 'at', 'home'], hint: 'leave → left' },
    { ru: 'Она приготовила вкусный ужин.', words: ['She', 'cooked', 'a', 'delicious', 'dinner'], hint: 'Правильный глагол: cook + ed' },

    // ─── Present Perfect: результат ───
    { ru: 'Я был в Лондоне дважды.', words: ['I', 'have', 'been', 'to', 'London', 'twice'], hint: 'Present Perfect: have + V3' },
    { ru: 'Она уже сделала домашнюю работу.', words: ['She', 'has', 'already', 'done', 'her', 'homework'], hint: 'has для he/she/it' },
    { ru: 'Мы никогда не были в Японии.', words: ['We', 'have', 'never', 'been', 'to', 'Japan'], hint: 'never между have и V3' },
    { ru: 'Ты когда-нибудь пробовал суши?', words: ['Have', 'you', 'ever', 'tried', 'sushi'], hint: 'Have + you + ever + V3' },
    { ru: 'Я только что закончил работу.', words: ['I', 'have', 'just', 'finished', 'work'], hint: 'just = только что' },
    { ru: 'Он ещё не пришёл.', words: ['He', 'hasn\'t', 'come', 'yet'], hint: 'yet в конце' },
    { ru: 'Мы живём здесь уже пять лет.', words: ['We', 'have', 'lived', 'here', 'for', 'five', 'years'], hint: 'for + период' },
    { ru: 'Она только что ушла.', words: ['She', 'has', 'just', 'left'], hint: 'has + just + V3' },

    // ─── Future ───
    { ru: 'Я позвоню тебе завтра.', words: ['I', 'will', 'call', 'you', 'tomorrow'], hint: 'will + V1' },
    { ru: 'Мы собираемся поехать в Париж.', words: ['We', 'are', 'going', 'to', 'go', 'to', 'Paris'], hint: 'be going to = собираться' },
    { ru: 'Она не придёт завтра.', words: ['She', 'won\'t', 'come', 'tomorrow'], hint: 'won\'t = will not' },
    { ru: 'Я думаю, будет дождь.', words: ['I', 'think', 'it', 'will', 'rain'], hint: 'will rain = будет дождь' },
    { ru: 'Мы увидимся в понедельник.', words: ['We', 'will', 'meet', 'on', 'Monday'], hint: 'on + день недели' },
    { ru: 'Я собираюсь учить английский.', words: ['I', 'am', 'going', 'to', 'learn', 'English'], hint: 'am going to + V1' },
    { ru: 'Он собирается купить машину.', words: ['He', 'is', 'going', 'to', 'buy', 'a', 'car'], hint: 'is going to + V1' },
    { ru: 'Завтра я буду работать.', words: ['I', 'will', 'work', 'tomorrow'], hint: 'will + V1' },

    // ─── Вопросы ───
    { ru: 'Ты где живёшь?', words: ['Where', 'do', 'you', 'live'], hint: 'Where + do + подлежащее + глагол' },
    { ru: 'Что это значит?', words: ['What', 'does', 'it', 'mean'], hint: 'What does it mean?' },
    { ru: 'Сколько тебе лет?', words: ['How', 'old', 'are', 'you'], hint: 'How old are you?' },
    { ru: 'Который час?', words: ['What', 'time', 'is', 'it'], hint: 'What time is it?' },
    { ru: 'Как тебя зовут?', words: ['What', 'is', 'your', 'name'], hint: 'What is your name?' },
    { ru: 'Откуда ты?', words: ['Where', 'are', 'you', 'from'], hint: 'Where are you from?' },
    { ru: 'Почему ты опаздываешь?', words: ['Why', 'are', 'you', 'late'], hint: 'Why + are + you' },
    { ru: 'Сколько это стоит?', words: ['How', 'much', 'does', 'it', 'cost'], hint: 'How much does it cost?' },
    { ru: 'Ты говоришь по-английски?', words: ['Do', 'you', 'speak', 'English'], hint: 'Do + you + V1' },
    { ru: 'Он живёт в Москве?', words: ['Does', 'he', 'live', 'in', 'Moscow'], hint: 'Does + he + V1 (без -s)' },
    { ru: 'Где находится ближайший банк?', words: ['Where', 'is', 'the', 'nearest', 'bank'], hint: 'Where is + существительное' },
    { ru: 'Когда ты обычно встаёшь?', words: ['When', 'do', 'you', 'usually', 'wake', 'up'], hint: 'When + do + V1' },
    { ru: 'Что ты любишь есть на завтрак?', words: ['What', 'do', 'you', 'like', 'to', 'eat', 'for', 'breakfast'], hint: 'for breakfast = на завтрак' },
    { ru: 'Кто это сделал?', words: ['Who', 'did', 'this'], hint: 'Who + did + this' },
    { ru: 'Сколько стоит билет?', words: ['How', 'much', 'is', 'the', 'ticket'], hint: 'How much is...?' },

    // ─── Императивы ───
    { ru: 'Дай мне воды, пожалуйста.', words: ['Give', 'me', 'some', 'water', 'please'], hint: 'Императив: глагол в начале' },
    { ru: 'Позвони мне завтра.', words: ['Call', 'me', 'tomorrow'], hint: 'Императив' },
    { ru: 'Закрой, пожалуйста, дверь.', words: ['Close', 'the', 'door', 'please'], hint: 'Императив' },
    { ru: 'Не забудь позвонить мне.', words: ['Don\'t', 'forget', 'to', 'call', 'me'], hint: 'Отрицательный императив: Don\'t + V1' },
    { ru: 'Садись и расслабься.', words: ['Sit', 'down', 'and', 'relax'], hint: 'Sit down = садись' },
    { ru: 'Открой окно, пожалуйста.', words: ['Open', 'the', 'window', 'please'], hint: 'Императив' },
    { ru: 'Не трогай мои вещи.', words: ['Don\'t', 'touch', 'my', 'things'], hint: 'Don\'t + V1' },
    { ru: 'Послушай меня внимательно.', words: ['Listen', 'to', 'me', 'carefully'], hint: 'Listen to = слушать' },
    { ru: 'Подожди минуту, пожалуйста.', words: ['Wait', 'a', 'minute', 'please'], hint: 'Wait + время' },
    { ru: 'Помоги мне, пожалуйста.', words: ['Help', 'me', 'please'], hint: 'Императив' },

    // ─── Модальные глаголы ───
    { ru: 'Я умею плавать.', words: ['I', 'can', 'swim'], hint: 'can + V1' },
    { ru: 'Он должен работать.', words: ['He', 'must', 'work'], hint: 'must + V1' },
    { ru: 'Можно мне войти?', words: ['May', 'I', 'come', 'in'], hint: 'May I...? — вежливая просьба' },
    { ru: 'Ты должен больше спать.', words: ['You', 'should', 'sleep', 'more'], hint: 'should = следует' },
    { ru: 'Я могу тебе помочь.', words: ['I', 'can', 'help', 'you'], hint: 'can + V1' },
    { ru: 'Ей следует больше отдыхать.', words: ['She', 'should', 'rest', 'more'], hint: 'should + V1' },
    { ru: 'Можно мне стакан воды?', words: ['Can', 'I', 'have', 'a', 'glass', 'of', 'water'], hint: 'Can I have...?' },
    { ru: 'Тебе не следует так много работать.', words: ['You', 'shouldn\'t', 'work', 'so', 'much'], hint: 'shouldn\'t = не следует' },

    // ─── Конструкции с "to" ───
    { ru: 'Я хочу пить.', words: ['I', 'want', 'to', 'drink'], hint: 'want to + глагол' },
    { ru: 'Это очень интересно.', words: ['It', 'is', 'very', 'interesting'], hint: 'very перед прилагательным' },
    { ru: 'Мне нравится читать книги.', words: ['I', 'like', 'reading', 'books'], hint: 'like + Ving' },
    { ru: 'Я хочу научиться водить машину.', words: ['I', 'want', 'to', 'learn', 'to', 'drive', 'a', 'car'], hint: 'want to + learn to + V1' },
    { ru: 'Я решил остаться дома.', words: ['I', 'decided', 'to', 'stay', 'at', 'home'], hint: 'decide to + V1' },
    { ru: 'Нам нужно купить хлеб.', words: ['We', 'need', 'to', 'buy', 'some', 'bread'], hint: 'need to + V1' },
    { ru: 'Я забыл закрыть дверь.', words: ['I', 'forgot', 'to', 'close', 'the', 'door'], hint: 'forget to + V1' },
    { ru: 'Она начала изучать английский.', words: ['She', 'started', 'to', 'learn', 'English'], hint: 'start to + V1' },

    // ─── Предлоги места ───
    { ru: 'Я еду на работу на автобусе.', words: ['I', 'go', 'to', 'work', 'by', 'bus'], hint: 'by bus = на автобусе' },
    { ru: 'Книга на столе.', words: ['The', 'book', 'is', 'on', 'the', 'table'], hint: 'on = на поверхности' },
    { ru: 'Ключи в моей сумке.', words: ['The', 'keys', 'are', 'in', 'my', 'bag'], hint: 'in = внутри' },
    { ru: 'Она ждёт на автобусной остановке.', words: ['She', 'is', 'waiting', 'at', 'the', 'bus', 'stop'], hint: 'at = точное место' },
    { ru: 'Я хожу в спортзал с другом.', words: ['I', 'go', 'to', 'the', 'gym', 'with', 'my', 'friend'], hint: 'with = вместе с' },
    { ru: 'Кошка под столом.', words: ['The', 'cat', 'is', 'under', 'the', 'table'], hint: 'under = под' },
    { ru: 'Банк между магазином и кафе.', words: ['The', 'bank', 'is', 'between', 'the', 'shop', 'and', 'the', 'café'], hint: 'between = между' },
    { ru: 'Самолёт над облаками.', words: ['The', 'plane', 'is', 'above', 'the', 'clouds'], hint: 'above = над' },
    { ru: 'Я иду в кино без тебя.', words: ['I', 'am', 'going', 'to', 'the', 'cinema', 'without', 'you'], hint: 'without = без' },
    { ru: 'Он сидит рядом со мной.', words: ['He', 'is', 'sitting', 'next', 'to', 'me'], hint: 'next to = рядом с' },

    // ─── Составные предложения ───
    { ru: 'Я устал, потому что плохо спал.', words: ['I', 'am', 'tired', 'because', 'I', 'didn\'t', 'sleep', 'well'], hint: 'because = потому что' },
    { ru: 'Если будет дождь, мы останемся дома.', words: ['If', 'it', 'rains', 'we', 'will', 'stay', 'at', 'home'], hint: 'If + Present, will + V1' },
    { ru: 'Я думаю, что он прав.', words: ['I', 'think', 'that', 'he', 'is', 'right'], hint: 'I think that...' },
    { ru: 'Она сказала, что опоздает.', words: ['She', 'said', 'that', 'she', 'would', 'be', 'late'], hint: 'would = будущее в прошлом' },
    { ru: 'Я не знаю, где он живёт.', words: ['I', 'don\'t', 'know', 'where', 'he', 'lives'], hint: 'Косвенный вопрос' }
];

// ═══════════════════════════════════════════════════════════
// ТИП 2: ПОСТРОЙ ВОПРОС (question) — 70 заданий
// ═══════════════════════════════════════════════════════════
const builderQuestions = [
    // ─── Present Simple ───
    { statement: 'She likes coffee.', question: 'Does she like coffee?', wrong: ['Do she likes coffee?', 'Is she like coffee?', 'She does like coffee?'], hint: 'he/she/it → does + V1 без -s', ru: 'Она любит кофе.' },
    { statement: 'He plays football.', question: 'Does he play football?', wrong: ['Do he play football?', 'Is he play football?', 'He does play football?'], hint: 'does + V1 без -s' },
    { statement: 'They are students.', question: 'Are they students?', wrong: ['Do they are students?', 'They are students?', 'Is they students?'], hint: 'to be вперёд: Are they...?' },
    { statement: 'She knows him.', question: 'Does she know him?', wrong: ['Do she know him?', 'Does she knows him?', 'Is she know him?'], hint: 'does + V1' },
    { statement: 'You like tea.', question: 'Do you like tea?', wrong: ['Are you like tea?', 'Does you like tea?', 'You do like tea?'], hint: 'you → do' },
    { statement: 'They like pizza.', question: 'Do they like pizza?', wrong: ['Does they like pizza?', 'Are they like pizza?', 'They do like pizza?'], hint: 'they → do' },
    { statement: 'We work here.', question: 'Do you work here?', wrong: ['Does we work here?', 'Are we work here?', 'We do work here?'], hint: 'we → you → do' },
    { statement: 'The cat sleeps.', question: 'Does the cat sleep?', wrong: ['Do the cat sleep?', 'Is the cat sleeps?', 'The cat sleeps?'], hint: 'does + V1' },
    { statement: 'He wants a new phone.', question: 'Does he want a new phone?', wrong: ['Do he want a new phone?', 'Does he wants a new phone?', 'Is he want a new phone?'], hint: 'does + V1' },

    // ─── Past Simple ───
    { statement: 'He went to school.', question: 'Did he go to school?', wrong: ['Did he went to school?', 'Does he went?', 'Was he go?'], hint: 'did + V1 (не V2!)' },
    { statement: 'They went home.', question: 'Did they go home?', wrong: ['Did they went home?', 'Was they go home?', 'Do they went home?'], hint: 'did + V1' },
    { statement: 'You saw him.', question: 'Did you see him?', wrong: ['Did you saw him?', 'Have you see him?', 'Do you saw him?'], hint: 'did + V1' },
    { statement: 'She read the book.', question: 'Did she read the book?', wrong: ['Did she readed the book?', 'Does she read the book?', 'Was she read the book?'], hint: 'did + V1' },
    { statement: 'I bought a car.', question: 'Did you buy a car?', wrong: ['Did you bought a car?', 'Do you buy a car?', 'Was you buy a car?'], hint: 'did + V1' },

    // ─── Present Continuous ───
    { statement: 'I am reading.', question: 'Are you reading?', wrong: ['Do you reading?', 'You are reading?', 'Am you reading?'], hint: 'am → are (при I → you)' },
    { statement: 'She is reading.', question: 'Is she reading?', wrong: ['Does she reading?', 'Is she read?', 'She is reading?'], hint: 'is → вперёд' },
    { statement: 'They are playing.', question: 'Are they playing?', wrong: ['Do they playing?', 'Is they playing?', 'They are playing?'], hint: 'are → вперёд' },
    { statement: 'He is cooking.', question: 'Is he cooking?', wrong: ['Does he cooking?', 'Is he cook?', 'He is cooking?'], hint: 'is → вперёд' },

    // ─── Present Perfect ───
    { statement: 'She has finished.', question: 'Has she finished?', wrong: ['Does she have finished?', 'Has she finish?', 'Is she finished?'], hint: 'have/has → вперёд в Present Perfect' },
    { statement: 'We have seen it.', question: 'Have you seen it?', wrong: ['Did you seen it?', 'Do you have seen it?', 'Has you seen it?'], hint: 'have → вперёд' },
    { statement: 'He has eaten.', question: 'Has he eaten?', wrong: ['Does he has eaten?', 'Has he eat?', 'Is he eaten?'], hint: 'has → вперёд' },
    { statement: 'I have been to Paris.', question: 'Have you been to Paris?', wrong: ['Did you been to Paris?', 'Do you have been to Paris?', 'Are you been to Paris?'], hint: 'have → вперёд' },

    // ─── Future ───
    { statement: 'It will rain.', question: 'Will it rain?', wrong: ['Does it will rain?', 'It will rain?', 'Will it rains?'], hint: 'will → вперёд' },
    { statement: 'He will come.', question: 'Will he come?', wrong: ['Does he will come?', 'He will come?', 'Is he will come?'], hint: 'will вперёд' },
    { statement: 'They will help.', question: 'Will they help?', wrong: ['Do they will help?', 'Are they will help?', 'They will help?'], hint: 'will → вперёд' },

    // ─── Модальные ───
    { statement: 'I can swim.', question: 'Can you swim?', wrong: ['Do you can swim?', 'Can you swimming?', 'You can swim?'], hint: 'can выносим вперёд' },
    { statement: 'She can dance.', question: 'Can she dance?', wrong: ['Does she can dance?', 'Is she can dance?', 'She can dance?'], hint: 'can выносим' },
    { statement: 'I must go.', question: 'Must I go?', wrong: ['Do I must go?', 'Am I must go?', 'I must go?'], hint: 'must → вперёд' },
    { statement: 'You should rest.', question: 'Should I rest?', wrong: ['Do I should rest?', 'Am I should rest?', 'You should rest?'], hint: 'should → вперёд' },
    { statement: 'He can drive.', question: 'Can he drive?', wrong: ['Does he can drive?', 'Is he can drive?', 'He can drive?'], hint: 'can → вперёд' },

    // ─── to be ───
    { statement: 'I am happy.', question: 'Are you happy?', wrong: ['Do you happy?', 'Am you happy?', 'You are happy?'], hint: 'am → are' },
    { statement: 'She is happy.', question: 'Is she happy?', wrong: ['Does she happy?', 'She is happy?', 'Has she happy?'], hint: 'is → вперёд' },
    { statement: 'It is cold.', question: 'Is it cold?', wrong: ['Does it cold?', 'It is cold?', 'Was it cold?'], hint: 'is вперёд' },
    { statement: 'We were at home.', question: 'Were you at home?', wrong: ['Was you at home?', 'Did you be at home?', 'Were we home?'], hint: 'were → were (при we → you)' },
    { statement: 'I was tired.', question: 'Were you tired?', wrong: ['Did you be tired?', 'Was you tired?', 'Are you tired?'], hint: 'was → were при you' },
    { statement: 'They were happy.', question: 'Were they happy?', wrong: ['Was they happy?', 'Did they be happy?', 'Are they happy?'], hint: 'were → вперёд' },
    { statement: 'He is a doctor.', question: 'Is he a doctor?', wrong: ['Does he a doctor?', 'He is a doctor?', 'Has he a doctor?'], hint: 'is → вперёд' },

    // ─── have got ───
    { statement: 'I have a car.', question: 'Do you have a car?', wrong: ['Have you a car?', 'Do you has a car?', 'Are you have a car?'], hint: 'have → do you have (в Present Simple)' },
    { statement: 'He has a bike.', question: 'Does he have a bike?', wrong: ['Has he a bike?', 'Does he has a bike?', 'Is he have a bike?'], hint: 'does + have' },
    { statement: 'She has a cat.', question: 'Does she have a cat?', wrong: ['Has she a cat?', 'Does she has a cat?', 'Is she have a cat?'], hint: 'does + have' },

    // ─── Специальные вопросы ───
    { statement: 'She lives in London.', question: 'Where does she live?', wrong: ['Where she lives?', 'Where does she lives?', 'Where is she live?'], hint: 'Where + does + V1' },
    { statement: 'He went to Paris.', question: 'Where did he go?', wrong: ['Where he went?', 'Where did he went?', 'Where was he go?'], hint: 'Where + did + V1' },
    { statement: 'I wake up at 7.', question: 'When do you wake up?', wrong: ['When you wake up?', 'When do you waking up?', 'When are you wake up?'], hint: 'When + do + V1' },
    { statement: 'She likes coffee.', question: 'What does she like?', wrong: ['What she likes?', 'What does she likes?', 'What is she like?'], hint: 'What + does + V1' },
    { statement: 'He works in a bank.', question: 'Where does he work?', wrong: ['Where he works?', 'Where does he works?', 'Where is he work?'], hint: 'Where + does + V1' },
    { statement: 'They arrived at 5.', question: 'When did they arrive?', wrong: ['When they arrived?', 'When did they arrived?', 'When they arrive?'], hint: 'When + did + V1' },
    { statement: 'I go to school by bus.', question: 'How do you get to school?', wrong: ['How you get to school?', 'How do you getting to school?', 'How are you get to school?'], hint: 'How + do + V1' },
    { statement: 'She is 25.', question: 'How old is she?', wrong: ['How old she is?', 'How old does she?', 'What old is she?'], hint: 'How old + is + she' },
    { statement: 'This costs $10.', question: 'How much does this cost?', wrong: ['How much this costs?', 'How much does this costs?', 'How much is this cost?'], hint: 'How much + does + V1' },
    { statement: 'He is reading a book.', question: 'What is he reading?', wrong: ['What he is reading?', 'What does he reading?', 'What is he read?'], hint: 'What + is + Ving' },

    // ─── Вопросы с предлогами ───
    { statement: 'She is from Russia.', question: 'Where is she from?', wrong: ['Where she is from?', 'Where does she from?', 'From where she is?'], hint: 'Where + is + ... + from' },
    { statement: 'I am looking for my keys.', question: 'What are you looking for?', wrong: ['What you are looking for?', 'What are you looking?', 'For what are you looking?'], hint: 'Предлог в конце' },
    { statement: 'He is waiting for Anna.', question: 'Who is he waiting for?', wrong: ['Who he is waiting for?', 'Who is he waiting?', 'For who is he waiting?'], hint: 'Who + is + ... + for' },
    { statement: 'This book is about love.', question: 'What is this book about?', wrong: ['What this book is about?', 'What is this book?', 'About what is this book?'], hint: 'Предлог в конце' },

    // ─── Present Continuous в вопросах ───
    { statement: 'She is cooking dinner.', question: 'What is she cooking?', wrong: ['What she is cooking?', 'What does she cooking?', 'What she cooks?'], hint: 'What + is + Ving' },
    { statement: 'They are going home.', question: 'Where are they going?', wrong: ['Where they are going?', 'Where do they going?', 'Where are they go?'], hint: 'Where + are + Ving' },
    { statement: 'He is talking to Tom.', question: 'Who is he talking to?', wrong: ['Who he is talking to?', 'Who is he talking?', 'To who is he talking?'], hint: 'Предлог в конце' },

    // ─── Past Continuous ───
    { statement: 'I was reading.', question: 'Were you reading?', wrong: ['Did you reading?', 'Was you reading?', 'Do you reading?'], hint: 'was → were при you' },
    { statement: 'She was cooking.', question: 'Was she cooking?', wrong: ['Did she cooking?', 'Is she cooking?', 'Does she cook?'], hint: 'was → вперёд' },

    // ─── Present Perfect Continuous ───
    { statement: 'I have been waiting.', question: 'Have you been waiting?', wrong: ['Did you been waiting?', 'Are you been waiting?', 'Do you have waiting?'], hint: 'have → вперёд' }
];

// ═══════════════════════════════════════════════════════════
// ТИП 3: ВЫБЕРИ ПРАВИЛЬНЫЙ ОТВЕТ (reply) — 70 заданий
// ═══════════════════════════════════════════════════════════
const builderReplies = [
    // ─── Приветствие / знакомство ───
    { prompt: 'How are you?', ruPrompt: 'Как дела?', correct: 'I\'m fine, thanks. And you?', wrong: ['Yes, I am.', 'My name is Anna.', 'I am 20.'], ru: 'У меня всё хорошо, спасибо. А у тебя?', hint: 'Ответ на «как дела» — рассказать о состоянии' },
    { prompt: 'What\'s your name?', ruPrompt: 'Как тебя зовут?', correct: 'My name is Anna.', wrong: ['I\'m fine.', 'I am 20.', 'Yes, please.'], ru: 'Меня зовут Анна.', hint: 'Отвечаем именем' },
    { prompt: 'How old are you?', ruPrompt: 'Сколько тебе лет?', correct: 'I am 20.', wrong: ['I\'m fine.', 'My name is Anna.', 'Yes, I do.'], ru: 'Мне 20.', hint: 'Отвечаем числом' },
    { prompt: 'Where are you from?', ruPrompt: 'Откуда ты?', correct: 'I am from Russia.', wrong: ['I am fine.', 'I am 20.', 'Yes, I am.'], ru: 'Я из России.', hint: 'I am from + страна' },
    { prompt: 'Nice to meet you.', ruPrompt: 'Приятно познакомиться.', correct: 'Nice to meet you too.', wrong: ['You\'re welcome.', 'Yes, I am.', 'Thank you very much.'], ru: 'Мне тоже приятно.', hint: 'Добавляем too' },
    { prompt: 'How do you spell it?', ruPrompt: 'Как это пишется?', correct: 'C-A-T.', wrong: ['Yes, I can.', 'I am fine.', 'It means cat.'], ru: 'C-A-T.', hint: 'Произносим по буквам' },
    { prompt: 'What does it mean?', ruPrompt: 'Что это значит?', correct: 'It means "happy".', wrong: ['Yes, it does.', 'C-A-T.', 'I am from Russia.'], ru: 'Это значит «счастливый».', hint: 'It means + перевод' },
    { prompt: 'Where do you live?', ruPrompt: 'Где ты живёшь?', correct: 'I live in Moscow.', wrong: ['I am fine.', 'I am 20.', 'Yes, I do.'], ru: 'Я живу в Москве.', hint: 'I live in + город' },
    { prompt: 'What do you do?', ruPrompt: 'Чем ты занимаешься?', correct: 'I\'m a teacher.', wrong: ['I am fine.', 'Yes, I do.', 'I am from Russia.'], ru: 'Я учитель.', hint: 'I am a + профессия' },
    { prompt: 'Do you have any brothers or sisters?', ruPrompt: 'У тебя есть братья или сёстры?', correct: 'Yes, I have one sister.', wrong: ['Yes, I am.', 'I am 20.', 'I am from Russia.'], ru: 'Да, у меня есть сестра.', hint: 'I have + родственник' },

    // ─── Вежливость ───
    { prompt: 'Thank you very much!', ruPrompt: 'Большое спасибо!', correct: 'You\'re welcome.', wrong: ['No, thanks.', 'Yes, please.', 'I\'m sorry.'], ru: 'Пожалуйста.', hint: 'You\'re welcome = Пожалуйста' },
    { prompt: 'Sorry, I\'m late.', ruPrompt: 'Извини, я опоздал.', correct: 'That\'s OK. Don\'t worry.', wrong: ['You\'re welcome.', 'Yes, please.', 'Not at all.'], ru: 'Всё нормально. Не переживай.', hint: 'That\'s OK = Ничего страшного' },
    { prompt: 'Would you like some tea?', ruPrompt: 'Хочешь чаю?', correct: 'Yes, please.', wrong: ['Yes, I do.', 'You\'re welcome.', 'I am fine.'], ru: 'Да, пожалуйста.', hint: 'Would you like → Yes, please / No, thanks' },
    { prompt: 'Can I help you?', ruPrompt: 'Могу я помочь?', correct: 'Yes, please. I\'m looking for a book.', wrong: ['Yes, I can.', 'No, I don\'t.', 'I am fine.'], ru: 'Да, пожалуйста. Я ищу книгу.', hint: 'Yes, please / No, thanks' },
    { prompt: 'Excuse me, may I ask you a question?', ruPrompt: 'Извините, можно задать вопрос?', correct: 'Yes, of course.', wrong: ['You\'re welcome.', 'Yes, please.', 'I am fine.'], ru: 'Да, конечно.', hint: 'Yes, of course = Да, конечно' },
    { prompt: 'Please, sit down.', ruPrompt: 'Пожалуйста, садитесь.', correct: 'Thank you.', wrong: ['You\'re welcome.', 'Yes, I do.', 'I am fine.'], ru: 'Спасибо.', hint: 'На вежливость — Thank you' },
    { prompt: 'Would you like to come with us?', ruPrompt: 'Хочешь пойти с нами?', correct: 'Sure, I\'d love to.', wrong: ['Yes, I am.', 'You\'re welcome.', 'I am 20.'], ru: 'Конечно, с удовольствием.', hint: 'I\'d love to = С удовольствием' },
    { prompt: 'Is it OK if I open the window?', ruPrompt: 'Можно открыть окно?', correct: 'Sure, go ahead.', wrong: ['You\'re welcome.', 'Yes, please.', 'I am fine.'], ru: 'Конечно, давай.', hint: 'Go ahead = Давай, вперёд' },

    // ─── Прощание ───
    { prompt: 'See you tomorrow!', ruPrompt: 'До завтра!', correct: 'See you!', wrong: ['You\'re welcome.', 'Thank you.', 'I\'m sorry.'], ru: 'До встречи!', hint: 'See you = До встречи' },
    { prompt: 'Have a nice day!', ruPrompt: 'Хорошего дня!', correct: 'Thanks, you too.', wrong: ['Yes, please.', 'You\'re welcome.', 'I am fine.'], ru: 'Спасибо, тебе тоже.', hint: 'Thanks, you too = Спасибо, тебе тоже' },
    { prompt: 'Goodbye!', ruPrompt: 'До свидания!', correct: 'Bye! Take care!', wrong: ['Yes, please.', 'Thank you.', 'Nice to meet you.'], ru: 'Пока! Береги себя!', hint: 'Take care = Береги себя' },
    { prompt: 'Good night!', ruPrompt: 'Спокойной ночи!', correct: 'Good night, sweet dreams!', wrong: ['Yes, please.', 'You\'re welcome.', 'I am fine.'], ru: 'Спокойной ночи, приятных снов!', hint: 'Sweet dreams = Приятных снов' },
    { prompt: 'Have a good weekend!', ruPrompt: 'Хороших выходных!', correct: 'Thanks, you too!', wrong: ['Yes, I do.', 'You\'re welcome.', 'I am fine.'], ru: 'Спасибо, тебе тоже!', hint: 'You too = Тебе тоже' },

    // ─── В городе / помощь ───
    { prompt: 'Excuse me, where is the station?', ruPrompt: 'Извините, где вокзал?', correct: 'Go straight and turn left.', wrong: ['You\'re welcome.', 'Yes, please.', 'I am 20.'], ru: 'Идите прямо и поверните налево.', hint: 'Объясняем маршрут' },
    { prompt: 'What time is it?', ruPrompt: 'Который час?', correct: 'It\'s half past three.', wrong: ['Yes, it is.', 'You\'re welcome.', 'I am fine.'], ru: 'Половина четвёртого.', hint: 'It\'s + время' },
    { prompt: 'What\'s the weather like?', ruPrompt: 'Какая погода?', correct: 'It\'s sunny and warm.', wrong: ['I am fine.', 'Yes, it is.', 'You\'re welcome.'], ru: 'Солнечно и тепло.', hint: 'It\'s + прилагательное о погоде' },
    { prompt: 'How can I get to the airport?', ruPrompt: 'Как добраться до аэропорта?', correct: 'Take a taxi or the bus.', wrong: ['Yes, please.', 'I am fine.', 'You\'re welcome.'], ru: 'Возьмите такси или автобус.', hint: 'Take + транспорт' },
    { prompt: 'Is it far from here?', ruPrompt: 'Это далеко отсюда?', correct: 'No, about 10 minutes on foot.', wrong: ['Yes, I am.', 'You\'re welcome.', 'I am fine.'], ru: 'Нет, минут 10 пешком.', hint: 'on foot = пешком' },
    { prompt: 'Where can I buy a ticket?', ruPrompt: 'Где можно купить билет?', correct: 'At the ticket office over there.', wrong: ['I am fine.', 'Yes, please.', 'You\'re welcome.'], ru: 'В кассе вон там.', hint: 'Over there = Вон там' },
    { prompt: 'Excuse me, is this seat taken?', ruPrompt: 'Извините, это место занято?', correct: 'No, it\'s free.', wrong: ['Yes, I am.', 'You\'re welcome.', 'I am fine.'], ru: 'Нет, свободно.', hint: 'It\'s free = Свободно' },

    // ─── В кафе / магазине ───
    { prompt: 'Hello! How can I help you?', ruPrompt: 'Здравствуйте! Чем помочь?', correct: 'I\'d like a coffee, please.', wrong: ['Yes, I am.', 'You\'re welcome.', 'Thank you very much.'], ru: 'Я хотел бы кофе, пожалуйста.', hint: 'I\'d like = Я хотел бы' },
    { prompt: 'Would you like anything else?', ruPrompt: 'Что-нибудь ещё?', correct: 'No, that\'s all, thanks.', wrong: ['Yes, I am.', 'I am fine.', 'You\'re welcome.'], ru: 'Нет, это всё, спасибо.', hint: 'That\'s all = Это всё' },
    { prompt: 'How much is it?', ruPrompt: 'Сколько это стоит?', correct: 'It\'s 10 dollars.', wrong: ['Yes, please.', 'I am fine.', 'You\'re welcome.'], ru: 'Это 10 долларов.', hint: 'It\'s + цена' },
    { prompt: 'Anything to drink?', ruPrompt: 'Что-нибудь выпить?', correct: 'Just water, please.', wrong: ['Yes, I am.', 'You\'re welcome.', 'I am fine.'], ru: 'Просто воду, пожалуйста.', hint: 'Just + напиток' },
    { prompt: 'Here is your change.', ruPrompt: 'Вот ваша сдача.', correct: 'Thank you!', wrong: ['You\'re welcome.', 'Yes, please.', 'I am fine.'], ru: 'Спасибо!', hint: 'На сдачу — Thank you' },
    { prompt: 'Do you have this in a bigger size?', ruPrompt: 'У вас есть это большего размера?', correct: 'Let me check for you.', wrong: ['I am fine.', 'You\'re welcome.', 'Thank you very much.'], ru: 'Дайте проверю.', hint: 'Let me check = Дайте проверю' },
    { prompt: 'Would you like a bag?', ruPrompt: 'Вам нужен пакет?', correct: 'No, thanks. I have one.', wrong: ['Yes, I am.', 'You\'re welcome.', 'I am fine.'], ru: 'Нет, спасибо. У меня есть.', hint: 'No, thanks = Нет, спасибо' },

    // ─── Согласие / несогласие ───
    { prompt: 'Do you like coffee?', ruPrompt: 'Ты любишь кофе?', correct: 'Yes, I love it.', wrong: ['Yes, I am.', 'You\'re welcome.', 'It is cold.'], ru: 'Да, обожаю.', hint: 'Yes, I do → Yes, I love it' },
    { prompt: 'Do you agree with me?', ruPrompt: 'Ты согласен со мной?', correct: 'Yes, I totally agree.', wrong: ['Yes, I am.', 'You\'re welcome.', 'I am fine.'], ru: 'Да, я полностью согласен.', hint: 'agree = соглашаться' },
    { prompt: 'Do you speak English?', ruPrompt: 'Ты говоришь по-английски?', correct: 'Yes, a little.', wrong: ['Yes, I am.', 'Yes, I do speak name.', 'I am from Russia.'], ru: 'Да, немного.', hint: 'Yes, I do / No, I don\'t' },
    { prompt: 'Can you help me?', ruPrompt: 'Можешь мне помочь?', correct: 'Yes, of course.', wrong: ['Yes, I am.', 'You\'re welcome.', 'I am fine.'], ru: 'Да, конечно.', hint: 'Of course = Конечно' },
    { prompt: 'Do you think it\'s a good idea?', ruPrompt: 'Думаешь, это хорошая идея?', correct: 'Yes, I think so.', wrong: ['Yes, I am.', 'You\'re welcome.', 'I am fine.'], ru: 'Да, я так думаю.', hint: 'I think so = Я так думаю' },
    { prompt: 'Are you sure?', ruPrompt: 'Ты уверен?', correct: 'Yes, I\'m absolutely sure.', wrong: ['Yes, I am fine.', 'You\'re welcome.', 'I am 20.'], ru: 'Да, я абсолютно уверен.', hint: 'absolutely = абсолютно' },
    { prompt: 'Is it difficult?', ruPrompt: 'Это сложно?', correct: 'Not really, it\'s quite easy.', wrong: ['Yes, I am.', 'You\'re welcome.', 'I am fine.'], ru: 'Не очень, довольно легко.', hint: 'Not really = Не очень' },

    // ─── Уточнения ───
    { prompt: 'Why are you late?', ruPrompt: 'Почему ты опоздал?', correct: 'Because I missed the bus.', wrong: ['Yes, I am.', 'You\'re welcome.', 'It\'s 5 o\'clock.'], ru: 'Потому что я опоздал на автобус.', hint: 'Because = потому что' },
    { prompt: 'Could you repeat that, please?', ruPrompt: 'Не могли бы вы повторить?', correct: 'Sure, I said "hello".', wrong: ['Yes, I am.', 'You\'re welcome.', 'I am fine.'], ru: 'Конечно, я сказал «привет».', hint: 'Sure = Конечно' },
    { prompt: 'Where do you work?', ruPrompt: 'Где ты работаешь?', correct: 'I work at a school.', wrong: ['I am fine.', 'Yes, I do.', 'I am 20.'], ru: 'Я работаю в школе.', hint: 'I work at/in + место' },
    { prompt: 'What are you doing?', ruPrompt: 'Что ты делаешь?', correct: 'I\'m reading a book.', wrong: ['I am fine.', 'Yes, I do.', 'You\'re welcome.'], ru: 'Я читаю книгу.', hint: 'I am + Ving' },
    { prompt: 'Where are you going?', ruPrompt: 'Куда ты идёшь?', correct: 'I\'m going to the shop.', wrong: ['I am fine.', 'You\'re welcome.', 'Yes, I am.'], ru: 'Я иду в магазин.', hint: 'I am going to + место' },
    { prompt: 'When does the film start?', ruPrompt: 'Когда начинается фильм?', correct: 'At 8 o\'clock.', wrong: ['Yes, it does.', 'You\'re welcome.', 'I am fine.'], ru: 'В 8 часов.', hint: 'At + время' },
    { prompt: 'How long does it take?', ruPrompt: 'Сколько это занимает?', correct: 'About 30 minutes.', wrong: ['Yes, I do.', 'You\'re welcome.', 'I am fine.'], ru: 'Около 30 минут.', hint: 'About + время' },
    { prompt: 'What\'s the matter?', ruPrompt: 'В чём дело?', correct: 'I lost my keys.', wrong: ['I am fine.', 'Yes, I do.', 'You\'re welcome.'], ru: 'Я потерял ключи.', hint: 'Описываем проблему' },

    // ─── Пожелания / поздравления ───
    { prompt: 'Happy birthday!', ruPrompt: 'С днём рождения!', correct: 'Thank you so much!', wrong: ['You\'re welcome.', 'I am fine.', 'Yes, please.'], ru: 'Большое спасибо!', hint: 'На поздравление — Thank you' },
    { prompt: 'Congratulations!', ruPrompt: 'Поздравляю!', correct: 'Thanks a lot!', wrong: ['You\'re welcome.', 'I am fine.', 'Yes, please.'], ru: 'Спасибо большое!', hint: 'Thanks a lot' },
    { prompt: 'Get well soon!', ruPrompt: 'Выздоравливай!', correct: 'Thank you, I will.', wrong: ['You\'re welcome.', 'Yes, please.', 'I am 20.'], ru: 'Спасибо, постараюсь.', hint: 'I will = Постараюсь' },
    { prompt: 'Good luck!', ruPrompt: 'Удачи!', correct: 'Thanks, I need it!', wrong: ['You\'re welcome.', 'I am fine.', 'Yes, please.'], ru: 'Спасибо, она мне нужна!', hint: 'I need it = Мне нужна' },
    { prompt: 'Merry Christmas!', ruPrompt: 'С Рождеством!', correct: 'Merry Christmas to you too!', wrong: ['You\'re welcome.', 'I am fine.', 'Yes, please.'], ru: 'И тебя с Рождеством!', hint: 'You too = Тебя тоже' },

    // ─── Проблемы / жалобы ───
    { prompt: 'I have a headache.', ruPrompt: 'У меня болит голова.', correct: 'That\'s too bad. Take an aspirin.', wrong: ['You\'re welcome.', 'Yes, please.', 'I am fine.'], ru: 'Как жаль. Прими аспирин.', hint: 'That\'s too bad = Как жаль' },
    { prompt: 'I lost my wallet.', ruPrompt: 'Я потерял кошелёк.', correct: 'Oh no! Have you called the police?', wrong: ['You\'re welcome.', 'Yes, please.', 'I am fine.'], ru: 'О нет! Ты позвонил в полицию?', hint: 'Oh no! = О нет!' },
    { prompt: 'My car broke down.', ruPrompt: 'У меня сломалась машина.', correct: 'I\'m sorry to hear that.', wrong: ['You\'re welcome.', 'Yes, please.', 'I am 20.'], ru: 'Мне жаль это слышать.', hint: 'I\'m sorry to hear that = Мне жаль' },
    { prompt: 'I failed the exam.', ruPrompt: 'Я провалил экзамен.', correct: 'Don\'t worry, you can try again.', wrong: ['You\'re welcome.', 'Yes, please.', 'I am fine.'], ru: 'Не переживай, можешь попробовать ещё.', hint: 'Don\'t worry = Не переживай' },

    // ─── Пожелания о еде ───
    { prompt: 'Enjoy your meal!', ruPrompt: 'Приятного аппетита!', correct: 'Thank you!', wrong: ['You\'re welcome.', 'Yes, please.', 'I am fine.'], ru: 'Спасибо!', hint: 'На пожелание — Thank you' },
    { prompt: 'Would you like some more?', ruPrompt: 'Хочешь ещё?', correct: 'No, thanks, I\'m full.', wrong: ['Yes, I am.', 'You\'re welcome.', 'I am fine.'], ru: 'Нет, спасибо, я сыт.', hint: 'I\'m full = Я сыт' },
    { prompt: 'How does it taste?', ruPrompt: 'Как на вкус?', correct: 'It\'s delicious!', wrong: ['Yes, please.', 'You\'re welcome.', 'I am fine.'], ru: 'Очень вкусно!', hint: 'Delicious = Вкусно' }
];

// ═══════════════════════════════════════════════════════════
// ТИП 4: ПЕРЕДЕЛАЙ (transform) — 80 заданий
// ═══════════════════════════════════════════════════════════
const builderTransform = [
    // ─── Отрицание Present Simple ───
    { task: 'Сделай отрицание', given: 'I like coffee.', answer: 'I don\'t like coffee.', wrong: ['I not like coffee.', 'I no like coffee.', 'I am not like coffee.'], hint: 'Present Simple: don\'t + V1', ru: 'Я не люблю кофе.' },
    { task: 'Сделай отрицание', given: 'She likes tea.', answer: 'She doesn\'t like tea.', wrong: ['She don\'t like tea.', 'She not like tea.', 'She isn\'t like tea.'], hint: 'she → doesn\'t + V1', ru: 'Она не любит чай.' },
    { task: 'Сделай отрицание', given: 'We like ice-cream.', answer: 'We don\'t like ice-cream.', wrong: ['We not like ice-cream.', 'We no like ice-cream.', 'We aren\'t like ice-cream.'], hint: 'don\'t + V1', ru: 'Мы не любим мороженое.' },
    { task: 'Сделай отрицание', given: 'He works here.', answer: 'He doesn\'t work here.', wrong: ['He don\'t work here.', 'He not works here.', 'He isn\'t work here.'], hint: 'doesn\'t + V1 (без -s)', ru: 'Он здесь не работает.' },
    { task: 'Сделай отрицание', given: 'They live in London.', answer: 'They don\'t live in London.', wrong: ['They doesn\'t live in London.', 'They not live in London.', 'They aren\'t live in London.'], hint: 'they → don\'t', ru: 'Они не живут в Лондоне.' },

    // ─── Вопрос Present Simple ───
    { task: 'Сделай вопрос', given: 'She likes tea.', answer: 'Does she like tea?', wrong: ['Do she like tea?', 'Does she likes tea?', 'Is she like tea?'], hint: 'does + V1', ru: 'Она любит чай?' },
    { task: 'Сделай вопрос', given: 'You are happy.', answer: 'Are you happy?', wrong: ['Do you happy?', 'Are you is happy?', 'You are happy?'], hint: 'Are → вперёд', ru: 'Ты счастлив?' },
    { task: 'Сделай вопрос', given: 'He has a car.', answer: 'Does he have a car?', wrong: ['Has he a car?', 'Does he has a car?', 'Is he have a car?'], hint: 'does + have (V1)', ru: 'У него есть машина?' },
    { task: 'Сделай вопрос', given: 'She is reading.', answer: 'Is she reading?', wrong: ['Does she reading?', 'Is she read?', 'She is reading?'], hint: 'is → вперёд', ru: 'Она читает?' },
    { task: 'Сделай вопрос', given: 'They work here.', answer: 'Do they work here?', wrong: ['Does they work here?', 'Are they work here?', 'They do work here?'], hint: 'they → do', ru: 'Они здесь работают?' },

    // ─── Отрицание Continuous ───
    { task: 'Сделай отрицание', given: 'He is working.', answer: 'He isn\'t working.', wrong: ['He don\'t working.', 'He not working.', 'He doesn\'t working.'], hint: 'isn\'t = is not', ru: 'Он не работает.' },
    { task: 'Сделай отрицание', given: 'They are playing.', answer: 'They aren\'t playing.', wrong: ['They don\'t playing.', 'They not playing.', 'They doesn\'t playing.'], hint: 'aren\'t = are not', ru: 'Они не играют.' },
    { task: 'Сделай отрицание', given: 'I am sleeping.', answer: 'I\'m not sleeping.', wrong: ['I don\'t sleeping.', 'I not sleeping.', 'I amn\'t sleeping.'], hint: 'I am not = I\'m not', ru: 'Я не сплю.' },

    // ─── Past Simple ───
    { task: 'Поставь в Past Simple', given: 'I go to school.', answer: 'I went to school.', wrong: ['I goed to school.', 'I go to school yesterday.', 'I was go to school.'], hint: 'go → went', ru: 'Я ходил в школу.' },
    { task: 'Сделай Past Simple', given: 'She writes a letter.', answer: 'She wrote a letter.', wrong: ['She writed a letter.', 'She write a letter.', 'She was write a letter.'], hint: 'write → wrote', ru: 'Она написала письмо.' },
    { task: 'Past Simple', given: 'He eats breakfast.', answer: 'He ate breakfast.', wrong: ['He eated breakfast.', 'He eat breakfast yesterday.', 'He was eat breakfast.'], hint: 'eat → ate', ru: 'Он позавтракал.' },
    { task: 'Past Simple', given: 'I buy a book.', answer: 'I bought a book.', wrong: ['I buyed a book.', 'I did buy a book yesterday.', 'I was buy a book.'], hint: 'buy → bought', ru: 'Я купил книгу.' },
    { task: 'Past Simple (отрицание)', given: 'I went to Paris.', answer: 'I didn\'t go to Paris.', wrong: ['I don\'t went to Paris.', 'I didn\'t went to Paris.', 'I not go to Paris.'], hint: 'didn\'t + V1 (не V2!)', ru: 'Я не ездил в Париж.' },
    { task: 'Сделай вопрос (Past)', given: 'They were at home.', answer: 'Were they at home?', wrong: ['Did they be at home?', 'Was they at home?', 'Do they were at home?'], hint: 'were → вперёд', ru: 'Они были дома?' },
    { task: 'Past Simple (вопрос)', given: 'She saw him.', answer: 'Did she see him?', wrong: ['Did she saw him?', 'Does she see him?', 'Was she see him?'], hint: 'did + V1', ru: 'Она видела его?' },
    { task: 'Past Simple', given: 'We have a good time.', answer: 'We had a good time.', wrong: ['We haved a good time.', 'We did have a good time.', 'We was have a good time.'], hint: 'have → had', ru: 'Мы хорошо провели время.' },
    { task: 'Past Simple (отрицание)', given: 'She liked the film.', answer: 'She didn\'t like the film.', wrong: ['She not liked the film.', 'She don\'t like the film.', 'She wasn\'t like the film.'], hint: 'didn\'t + V1', ru: 'Ей не понравился фильм.' },
    { task: 'Past Simple', given: 'I see a cat.', answer: 'I saw a cat.', wrong: ['I seed a cat.', 'I did see a cat yesterday.', 'I was see a cat.'], hint: 'see → saw', ru: 'Я увидел кошку.' },
    { task: 'Past Simple', given: 'He takes a shower.', answer: 'He took a shower.', wrong: ['He taked a shower.', 'He did take a shower.', 'He was take a shower.'], hint: 'take → took', ru: 'Он принял душ.' },

    // ─── Future Simple ───
    { task: 'Поставь в Future Simple', given: 'I call you.', answer: 'I will call you.', wrong: ['I call will you.', 'I am call you.', 'I do will call you.'], hint: 'will + V1', ru: 'Я позвоню тебе.' },
    { task: 'Сделай отрицание', given: 'I will go.', answer: 'I won\'t go.', wrong: ['I don\'t will go.', 'I not will go.', 'I will not going.'], hint: 'won\'t = will not', ru: 'Я не пойду.' },
    { task: 'Future Simple (вопрос)', given: 'You will help.', answer: 'Will you help?', wrong: ['Do you will help?', 'Are you will help?', 'You will help?'], hint: 'will → вперёд', ru: 'Ты поможешь?' },

    // ─── Present Perfect ───
    { task: 'Сделай отрицание', given: 'They have finished.', answer: 'They haven\'t finished.', wrong: ['They don\'t finished.', 'They not finished.', 'They didn\'t finished.'], hint: 'haven\'t = have not', ru: 'Они не закончили.' },
    { task: 'Сделай Present Perfect', given: 'I see this film.', answer: 'I have seen this film.', wrong: ['I have saw this film.', 'I has seen this film.', 'I seen this film.'], hint: 'have + V3', ru: 'Я видел этот фильм.' },
    { task: 'Present Perfect (вопрос)', given: 'You have been to London.', answer: 'Have you been to London?', wrong: ['Did you been to London?', 'Do you have been to London?', 'Have you be to London?'], hint: 'Have → вперёд', ru: 'Ты был в Лондоне?' },
    { task: 'Present Perfect', given: 'He eats sushi.', answer: 'He has eaten sushi.', wrong: ['He has ate sushi.', 'He have eaten sushi.', 'He eaten sushi.'], hint: 'has + V3', ru: 'Он поел суши.' },
    { task: 'Present Perfect', given: 'She goes to Paris.', answer: 'She has gone to Paris.', wrong: ['She has went to Paris.', 'She have gone to Paris.', 'She gone to Paris.'], hint: 'has + gone', ru: 'Она уехала в Париж.' },

    // ─── Present Continuous ───
    { task: 'Сделай Present Continuous', given: 'I read a book.', answer: 'I am reading a book.', wrong: ['I reading a book.', 'I am read a book.', 'I do reading a book.'], hint: 'am + Ving', ru: 'Я читаю книгу (сейчас).' },
    { task: 'Сделай Present Continuous', given: 'They play football.', answer: 'They are playing football.', wrong: ['They playing football.', 'They are play football.', 'They is playing football.'], hint: 'are + Ving', ru: 'Они играют в футбол (сейчас).' },
    { task: 'Present Continuous', given: 'She cooks dinner.', answer: 'She is cooking dinner.', wrong: ['She cooking dinner.', 'She is cook dinner.', 'She does cooking dinner.'], hint: 'is + Ving', ru: 'Она готовит ужин.' },
    { task: 'Present Continuous', given: 'He drives a car.', answer: 'He is driving a car.', wrong: ['He driving a car.', 'He is drive a car.', 'He does driving a car.'], hint: 'is + Ving', ru: 'Он ведёт машину.' },

    // ─── Модальные ───
    { task: 'Сделай отрицание', given: 'She can swim.', answer: 'She can\'t swim.', wrong: ['She doesn\'t can swim.', 'She not can swim.', 'She cannot swims.'], hint: 'can\'t = cannot', ru: 'Она не умеет плавать.' },
    { task: 'Сделай вопрос', given: 'He can help.', answer: 'Can he help?', wrong: ['Does he can help?', 'Is he can help?', 'He can help?'], hint: 'can → вперёд', ru: 'Он может помочь?' },
    { task: 'Сделай отрицание', given: 'You must go.', answer: 'You mustn\'t go.', wrong: ['You don\'t must go.', 'You not must go.', 'You doesn\'t must go.'], hint: 'mustn\'t = must not', ru: 'Тебе нельзя идти.' },
    { task: 'Сделай вопрос', given: 'I should rest.', answer: 'Should I rest?', wrong: ['Do I should rest?', 'Am I should rest?', 'I should rest?'], hint: 'should → вперёд', ru: 'Мне следует отдохнуть?' },

    // ─── to be (прошедшее/настоящее) ───
    { task: 'Поставь в Past Simple', given: 'I am at home.', answer: 'I was at home.', wrong: ['I were at home.', 'I did be at home.', 'I been at home.'], hint: 'am → was', ru: 'Я был дома.' },
    { task: 'Поставь в Past Simple', given: 'They are happy.', answer: 'They were happy.', wrong: ['They was happy.', 'They did be happy.', 'They been happy.'], hint: 'are → were', ru: 'Они были счастливы.' },
    { task: 'Поставь в Past Simple', given: 'He is a doctor.', answer: 'He was a doctor.', wrong: ['He were a doctor.', 'He did be a doctor.', 'He been a doctor.'], hint: 'is → was', ru: 'Он был врачом.' },

    // ─── Смешанные ───
    { task: 'Сделай вопрос', given: 'She has a cat.', answer: 'Does she have a cat?', wrong: ['Has she a cat?', 'Does she has a cat?', 'Is she have a cat?'], hint: 'does + have', ru: 'У неё есть кошка?' },
    { task: 'Сделай отрицание', given: 'You are tired.', answer: 'You aren\'t tired.', wrong: ['You don\'t tired.', 'You not tired.', 'You isn\'t tired.'], hint: 'aren\'t = are not', ru: 'Ты не устал.' },
    { task: 'Сделай вопрос', given: 'You like tea.', answer: 'Do you like tea?', wrong: ['Are you like tea?', 'Does you like tea?', 'You do like tea?'], hint: 'you → do', ru: 'Ты любишь чай?' },
    { task: 'Past Simple', given: 'I have a cat.', answer: 'I had a cat.', wrong: ['I haved a cat.', 'I did have a cat.', 'I was have a cat.'], hint: 'have → had', ru: 'У меня была кошка.' },

    // ─── Модальные конструкции ───
    { task: 'Сделай "be going to"', given: 'I will travel.', answer: 'I am going to travel.', wrong: ['I going to travel.', 'I am go to travel.', 'I will going to travel.'], hint: 'am + going to + V1', ru: 'Я собираюсь путешествовать.' },
    { task: 'Сделай "would like"', given: 'I want a coffee.', answer: 'I would like a coffee.', wrong: ['I will like a coffee.', 'I am like a coffee.', 'I would a coffee.'], hint: 'would like = хотел бы', ru: 'Я хотел бы кофе.' },

    // ─── От прилагательного к наречию ───
    { task: 'Измени на наречие', given: 'He is a quick runner.', answer: 'He runs quickly.', wrong: ['He runs quick.', 'He is quickly.', 'He runs quicker.'], hint: 'adjective → adverb: + ly', ru: 'Он быстро бегает.' },
    { task: 'Измени на наречие', given: 'She is a good singer.', answer: 'She sings well.', wrong: ['She sings good.', 'She sings goodly.', 'She sings better.'], hint: 'good → well (исключение)', ru: 'Она хорошо поёт.' },

    // ─── Степени сравнения ───
    { task: 'Сравнительная степень', given: 'big', answer: 'bigger', wrong: ['more big', 'biggest', 'more bigger'], hint: 'Короткое слово → +er', ru: 'больше' },
    { task: 'Сравнительная степень', given: 'interesting', answer: 'more interesting', wrong: ['interestinger', 'most interesting', 'more interestinger'], hint: 'Длинное слово → more', ru: 'интереснее' },
    { task: 'Превосходная степень', given: 'good', answer: 'the best', wrong: ['the goodest', 'the most good', 'the better'], hint: 'good → better → the best', ru: 'самый лучший' },

    // ─── Косвенная речь ───
    { task: 'Косвенная речь', given: 'He said: "I am tired."', answer: 'He said he was tired.', wrong: ['He said he is tired.', 'He said I am tired.', 'He said he is being tired.'], hint: 'am → was (сдвиг времён)', ru: 'Он сказал, что устал.' },
    { task: 'Косвенная речь', given: 'She said: "I will come."', answer: 'She said she would come.', wrong: ['She said she will come.', 'She said she comes.', 'She said she came.'], hint: 'will → would', ru: 'Она сказала, что придёт.' },

    // ─── Страдательный залог ───
    { task: 'Пассивный залог', given: 'They build houses.', answer: 'Houses are built.', wrong: ['Houses build.', 'Houses are build.', 'Houses is built.'], hint: 'be + V3', ru: 'Дома строятся.' },
    { task: 'Пассивный залог', given: 'Somebody stole my bike.', answer: 'My bike was stolen.', wrong: ['My bike stole.', 'My bike was stole.', 'My bike is stolen.'], hint: 'was + V3', ru: 'Мой велосипед украли.' },

    // ─── Вопросы специальные ───
    { task: 'Сделай специальный вопрос', given: 'She lives in London.', answer: 'Where does she live?', wrong: ['Where she lives?', 'Where does she lives?', 'Where is she live?'], hint: 'Where + does + V1', ru: 'Где она живёт?' },
    { task: 'Сделай специальный вопрос', given: 'He arrived at 5.', answer: 'When did he arrive?', wrong: ['When he arrived?', 'When did he arrived?', 'When was he arrive?'], hint: 'When + did + V1', ru: 'Когда он приехал?' },
    { task: 'Сделай специальный вопрос', given: 'She is 25.', answer: 'How old is she?', wrong: ['How old she is?', 'How old does she?', 'What old is she?'], hint: 'How old + is + she', ru: 'Сколько ей лет?' },

    // ─── Краткие ответы ───
    { task: 'Краткий ответ (да)', given: 'Do you like coffee?', answer: 'Yes, I do.', wrong: ['Yes, I like.', 'Yes, I am.', 'Yes, I does.'], hint: 'Yes + I + do', ru: 'Да, люблю.' },
    { task: 'Краткий ответ (нет)', given: 'Does she work here?', answer: 'No, she doesn\'t.', wrong: ['No, she don\'t.', 'No, she isn\'t.', 'No, she not.'], hint: 'No + she + doesn\'t', ru: 'Нет, не работает.' },
    { task: 'Краткий ответ (да)', given: 'Are you tired?', answer: 'Yes, I am.', wrong: ['Yes, I do.', 'Yes, I are.', 'Yes, I be.'], hint: 'Yes + I + am', ru: 'Да, устал.' },
    { task: 'Краткий ответ (нет)', given: 'Can you swim?', answer: 'No, I can\'t.', wrong: ['No, I don\'t.', 'No, I couldn\'t.', 'No, I not can.'], hint: 'No + I + can\'t', ru: 'Нет, не умею.' },
    { task: 'Краткий ответ (да)', given: 'Have you finished?', answer: 'Yes, I have.', wrong: ['Yes, I do.', 'Yes, I did.', 'Yes, I am.'], hint: 'Yes + I + have', ru: 'Да, закончил.' },
    { task: 'Краткий ответ (нет)', given: 'Did she call?', answer: 'No, she didn\'t.', wrong: ['No, she doesn\'t.', 'No, she hasn\'t.', 'No, she not.'], hint: 'No + she + didn\'t', ru: 'Нет, не звонила.' }
];

// ═══════════════════════════════════════════════════════════
// ТИП 5: ДИАЛОГИ (dialogue) — 20 диалогов
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
    },
    {
        title: 'В магазине',
        emoji: '🛍️',
        steps: [
            { speaker: 'Shop assistant', en: 'Hi! Can I help you?', ru: 'Здравствуйте! Могу я помочь?', options: ['Yes, I\'m looking for a T-shirt.', 'I am fine, thanks.', 'See you later.'], correct: 0 },
            { speaker: 'You', en: 'Yes, I\'m looking for a T-shirt.', ru: 'Да, я ищу футболку.', options: ['What size do you need?', 'You\'re welcome.', 'I am 20.'], correct: 0, speakerNote: 'Shop assistant' },
            { speaker: 'You', en: 'Medium, please.', ru: 'Средний, пожалуйста.', options: ['Here you are. Try this one.', 'Thank you very much.', 'Goodbye!'], correct: 0, speakerNote: 'Shop assistant' },
            { speaker: 'You', en: 'Thanks, how much is it?', ru: 'Спасибо, сколько стоит?', options: ['It\'s $25.', 'You\'re welcome.', 'Yes, I do.'], correct: 0, speakerNote: 'Shop assistant' }
        ]
    },
    {
        title: 'У врача',
        emoji: '🏥',
        steps: [
            { speaker: 'Doctor', en: 'Hello! What\'s the problem?', ru: 'Здравствуйте! Что беспокоит?', options: ['I have a headache.', 'I am fine, thank you.', 'My name is Tom.'], correct: 0 },
            { speaker: 'You', en: 'I have a headache.', ru: 'У меня болит голова.', options: ['How long have you had it?', 'You\'re welcome.', 'See you later.'], correct: 0, speakerNote: 'Doctor' },
            { speaker: 'You', en: 'Since yesterday.', ru: 'Со вчерашнего дня.', options: ['Take this medicine twice a day.', 'Thank you very much.', 'Nice to meet you.'], correct: 0, speakerNote: 'Doctor' },
            { speaker: 'You', en: 'Thank you, doctor.', ru: 'Спасибо, доктор.', options: ['Get well soon!', 'You\'re welcome.', 'Goodbye.'], correct: 0, speakerNote: 'Doctor' }
        ]
    },
    {
        title: 'В такси',
        emoji: '🚕',
        steps: [
            { speaker: 'Driver', en: 'Good evening! Where to?', ru: 'Добрый вечер! Куда едем?', options: ['To the airport, please.', 'I am fine, thanks.', 'My name is Tom.'], correct: 0 },
            { speaker: 'You', en: 'To the airport, please.', ru: 'В аэропорт, пожалуйста.', options: ['OK, about 30 minutes.', 'Thank you very much.', 'See you soon.'], correct: 0, speakerNote: 'Driver' },
            { speaker: 'You', en: 'How much will it cost?', ru: 'Сколько это будет стоить?', options: ['About $25.', 'You\'re welcome.', 'I don\'t know.'], correct: 0, speakerNote: 'Driver' },
            { speaker: 'You', en: 'Here you are.', ru: 'Вот, пожалуйста.', options: ['Thank you! Have a nice trip!', 'Yes, please.', 'I am fine.'], correct: 0, speakerNote: 'Driver' }
        ]
    },
    {
        title: 'Заказ пиццы',
        emoji: '🍕',
        steps: [
            { speaker: 'You', en: 'Hello, I\'d like to order a pizza.', ru: 'Здравствуйте, я хотел бы заказать пиццу.', options: ['Sure, what would you like?', 'Yes, I am fine.', 'Nice to meet you.'], correct: 0, speakerNote: 'Operator' },
            { speaker: 'Operator', en: 'Sure, what would you like?', ru: 'Конечно, что вы хотите?', options: ['Pepperoni, please.', 'I am 20.', 'You\'re welcome.'], correct: 0 },
            { speaker: 'You', en: 'Pepperoni, please.', ru: 'Пепперони, пожалуйста.', options: ['Small, medium or large?', 'Thank you very much.', 'See you later.'], correct: 0, speakerNote: 'Operator' },
            { speaker: 'You', en: 'Large, please.', ru: 'Большую, пожалуйста.', options: ['Your address, please?', 'I am fine.', 'Goodbye.'], correct: 0, speakerNote: 'Operator' }
        ]
    },
    {
        title: 'В аэропорту',
        emoji: '✈️',
        steps: [
            { speaker: 'You', en: 'Hi, I\'m checking in for flight BA235.', ru: 'Здравствуйте, я регистрируюсь на рейс BA235.', options: ['May I see your passport?', 'I am fine.', 'Nice to meet you.'], correct: 0, speakerNote: 'Agent' },
            { speaker: 'Agent', en: 'May I see your passport?', ru: 'Можно ваш паспорт?', options: ['Here you are.', 'You\'re welcome.', 'I am 20.'], correct: 0 },
            { speaker: 'You', en: 'Here you are.', ru: 'Вот, пожалуйста.', options: ['Thank you. Window or aisle?', 'Goodbye!', 'I am fine.'], correct: 0, speakerNote: 'Agent' },
            { speaker: 'You', en: 'Window, please.', ru: 'У окна, пожалуйста.', options: ['Here\'s your boarding pass.', 'You\'re welcome.', 'See you later.'], correct: 0, speakerNote: 'Agent' }
        ]
    },
    {
        title: 'Small talk о погоде',
        emoji: '🌤️',
        steps: [
            { speaker: 'Colleague', en: 'Nice weather today, isn\'t it?', ru: 'Хорошая погода сегодня, не так ли?', options: ['Yes, it\'s beautiful!', 'I am fine.', 'My name is Tom.'], correct: 0 },
            { speaker: 'You', en: 'Yes, it\'s beautiful!', ru: 'Да, прекрасная!', options: ['Hope it stays like this.', 'You\'re welcome.', 'I am 20.'], correct: 0, speakerNote: 'Colleague' },
            { speaker: 'You', en: 'I hope so too.', ru: 'Я тоже надеюсь.', options: ['Did you watch the game yesterday?', 'Yes, please.', 'Goodbye.'], correct: 0, speakerNote: 'Colleague' },
            { speaker: 'You', en: 'Yes, great match!', ru: 'Да, отличный матч!', options: ['See you at lunch!', 'I am fine.', 'You\'re welcome.'], correct: 0, speakerNote: 'Colleague' }
        ]
    },
    {
        title: 'В банке',
        emoji: '🏦',
        steps: [
            { speaker: 'Clerk', en: 'Good morning! How can I help you?', ru: 'Доброе утро! Чем могу помочь?', options: ['I\'d like to open an account.', 'I am fine, thanks.', 'My name is Anna.'], correct: 0 },
            { speaker: 'You', en: 'I\'d like to open an account.', ru: 'Я хотел бы открыть счёт.', options: ['Sure, may I see your ID?', 'You\'re welcome.', 'I am 20.'], correct: 0, speakerNote: 'Clerk' },
            { speaker: 'You', en: 'Here you are.', ru: 'Вот, пожалуйста.', options: ['Thank you. Please fill in this form.', 'Goodbye!', 'I am fine.'], correct: 0, speakerNote: 'Clerk' },
            { speaker: 'You', en: 'OK, thank you.', ru: 'Хорошо, спасибо.', options: ['You\'re welcome.', 'Yes, please.', 'See you later.'], correct: 0, speakerNote: 'Clerk' }
        ]
    },
    {
        title: 'Поиск потерянного',
        emoji: '🔍',
        steps: [
            { speaker: 'You', en: 'Excuse me, I lost my phone.', ru: 'Извините, я потерял телефон.', options: ['Where did you lose it?', 'I am fine.', 'Nice to meet you.'], correct: 0, speakerNote: 'Staff' },
            { speaker: 'Staff', en: 'Where did you lose it?', ru: 'Где вы его потеряли?', options: ['In the park, I think.', 'I am 20.', 'You\'re welcome.'], correct: 0 },
            { speaker: 'You', en: 'In the park, I think.', ru: 'В парке, думаю.', options: ['Let me check our lost and found.', 'Thank you very much.', 'Goodbye.'], correct: 0, speakerNote: 'Staff' },
            { speaker: 'You', en: 'Thank you so much!', ru: 'Большое спасибо!', options: ['You\'re welcome.', 'Yes, please.', 'See you later.'], correct: 0, speakerNote: 'Staff' }
        ]
    },
    {
        title: 'В парикмахерской',
        emoji: '💇',
        steps: [
            { speaker: 'Hairdresser', en: 'Hi! What would you like today?', ru: 'Здравствуйте! Что бы вы хотели?', options: ['A haircut, please.', 'I am fine, thanks.', 'My name is Anna.'], correct: 0 },
            { speaker: 'You', en: 'A haircut, please.', ru: 'Стрижку, пожалуйста.', options: ['How short?', 'You\'re welcome.', 'I am 20.'], correct: 0, speakerNote: 'Hairdresser' },
            { speaker: 'You', en: 'Not too short, please.', ru: 'Не слишком коротко, пожалуйста.', options: ['OK, I understand.', 'Thank you very much.', 'Goodbye.'], correct: 0, speakerNote: 'Hairdresser' },
            { speaker: 'You', en: 'Thank you, it looks great!', ru: 'Спасибо, отлично выглядит!', options: ['You\'re welcome!', 'Yes, please.', 'I am fine.'], correct: 0, speakerNote: 'Hairdresser' }
        ]
    },
    {
        title: 'На почте',
        emoji: '📮',
        steps: [
            { speaker: 'You', en: 'Hi, I\'d like to send this parcel.', ru: 'Здравствуйте, я хотел бы отправить посылку.', options: ['Where to?', 'I am fine.', 'Nice to meet you.'], correct: 0, speakerNote: 'Clerk' },
            { speaker: 'Clerk', en: 'Where to?', ru: 'Куда?', options: ['To Moscow, please.', 'I am 20.', 'You\'re welcome.'], correct: 0 },
            { speaker: 'You', en: 'To Moscow, please.', ru: 'В Москву, пожалуйста.', options: ['That will be $15.', 'Thank you very much.', 'Goodbye.'], correct: 0, speakerNote: 'Clerk' },
            { speaker: 'You', en: 'Here you are.', ru: 'Вот, пожалуйста.', options: ['Thank you! Here\'s your receipt.', 'Yes, please.', 'I am fine.'], correct: 0, speakerNote: 'Clerk' }
        ]
    },
    {
        title: 'На заправке',
        emoji: '⛽',
        steps: [
            { speaker: 'You', en: 'Hi, fill it up, please.', ru: 'Здравствуйте, полный бак, пожалуйста.', options: ['Regular or premium?', 'I am fine.', 'Nice to meet you.'], correct: 0, speakerNote: 'Attendant' },
            { speaker: 'Attendant', en: 'Regular or premium?', ru: 'Обычный или премиум?', options: ['Regular, please.', 'I am 20.', 'You\'re welcome.'], correct: 0 },
            { speaker: 'You', en: 'Regular, please.', ru: 'Обычный, пожалуйста.', options: ['That will be $40.', 'Thank you very much.', 'Goodbye.'], correct: 0, speakerNote: 'Attendant' },
            { speaker: 'You', en: 'Here you are.', ru: 'Вот, пожалуйста.', options: ['Thank you!', 'Yes, please.', 'I am fine.'], correct: 0, speakerNote: 'Attendant' }
        ]
    },
    {
        title: 'Вызов такси',
        emoji: '📱',
        steps: [
            { speaker: 'You', en: 'Hi, I need a taxi.', ru: 'Здравствуйте, мне нужно такси.', options: ['Where from?', 'I am fine.', 'Nice to meet you.'], correct: 0, speakerNote: 'Dispatcher' },
            { speaker: 'Dispatcher', en: 'Where from?', ru: 'Откуда?', options: ['From the hotel "Cosmos".', 'I am 20.', 'You\'re welcome.'], correct: 0 },
            { speaker: 'You', en: 'From the hotel "Cosmos".', ru: 'Из отеля «Космос».', options: ['In 10 minutes.', 'Thank you very much.', 'Goodbye.'], correct: 0, speakerNote: 'Dispatcher' },
            { speaker: 'You', en: 'Great, thanks!', ru: 'Отлично, спасибо!', options: ['You\'re welcome.', 'Yes, please.', 'I am fine.'], correct: 0, speakerNote: 'Dispatcher' }
        ]
    },
    {
        title: 'Приглашение на ужин',
        emoji: '🍽️',
        steps: [
            { speaker: 'Friend', en: 'Would you like to come to dinner tonight?', ru: 'Хочешь прийти на ужин сегодня?', options: ['Sure, I\'d love to!', 'I am fine, thank you.', 'My name is Tom.'], correct: 0 },
            { speaker: 'You', en: 'Sure, I\'d love to!', ru: 'Конечно, с удовольствием!', options: ['Great! Come at 7.', 'You\'re welcome.', 'I am 20.'], correct: 0, speakerNote: 'Friend' },
            { speaker: 'You', en: 'What should I bring?', ru: 'Что мне принести?', options: ['Just yourself!', 'Thank you very much.', 'Goodbye.'], correct: 0, speakerNote: 'Friend' },
            { speaker: 'You', en: 'OK, see you at 7!', ru: 'Хорошо, увидимся в 7!', options: ['See you!', 'Yes, please.', 'I am fine.'], correct: 0, speakerNote: 'Friend' }
        ]
    },
    {
        title: 'Покупка билета',
        emoji: '🎫',
        steps: [
            { speaker: 'You', en: 'Two tickets to London, please.', ru: 'Два билета до Лондона, пожалуйста.', options: ['One-way or return?', 'I am fine.', 'Nice to meet you.'], correct: 0, speakerNote: 'Cashier' },
            { speaker: 'Cashier', en: 'One-way or return?', ru: 'В одну сторону или туда-обратно?', options: ['Return, please.', 'I am 20.', 'You\'re welcome.'], correct: 0 },
            { speaker: 'You', en: 'Return, please.', ru: 'Туда-обратно, пожалуйста.', options: ['That will be $80.', 'Thank you very much.', 'Goodbye.'], correct: 0, speakerNote: 'Cashier' },
            { speaker: 'You', en: 'Here you are, thanks!', ru: 'Вот, спасибо!', options: ['Have a nice trip!', 'Yes, please.', 'I am fine.'], correct: 0, speakerNote: 'Cashier' }
        ]
    },
    {
        title: 'Аренда машины',
        emoji: '🚗',
        steps: [
            { speaker: 'You', en: 'Hi, I\'d like to rent a car.', ru: 'Здравствуйте, я хотел бы арендовать машину.', options: ['For how many days?', 'I am fine.', 'My name is Tom.'], correct: 0, speakerNote: 'Agent' },
            { speaker: 'Agent', en: 'For how many days?', ru: 'На сколько дней?', options: ['For three days.', 'I am 20.', 'You\'re welcome.'], correct: 0 },
            { speaker: 'You', en: 'For three days.', ru: 'На три дня.', options: ['May I see your driving licence?', 'Thank you very much.', 'Goodbye.'], correct: 0, speakerNote: 'Agent' },
            { speaker: 'You', en: 'Here you are.', ru: 'Вот, пожалуйста.', options: ['Thank you. Here are the keys.', 'Yes, please.', 'I am fine.'], correct: 0, speakerNote: 'Agent' }
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

// Экспорт статистики
if (typeof window !== 'undefined') {
    window.builderStats = {
        order: builderOrder.length,
        questions: builderQuestions.length,
        replies: builderReplies.length,
        transform: builderTransform.length,
        dialogues: builderDialogues.length,
        total: builderOrder.length + builderQuestions.length + builderReplies.length + builderTransform.length + builderDialogues.length
    };
    console.log('🏗️ builder.js — загружено:', window.builderStats);
}
