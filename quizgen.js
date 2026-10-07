// quizgen.js v12 — живые предложения + 7 типов вопросов
// Живые фразы только для базовых слов. Остальные — в вопросах.

const SENTENCES = {
    // ═══ A ═══
    'about': [["What are you talking about?", "О чём ты говоришь?"]],
    'above': [["The plane flew above the clouds.", "Самолёт летел над облаками."]],
    'accept': [["I accept your apology.", "Я принимаю твои извинения."]],
    'accident': [["I had a small accident yesterday.", "Вчера у меня была небольшая авария."]],
    'achieve': [["You can achieve anything if you try.", "Ты можешь достичь всего, если постараешься."]],
    'across': [["Let's walk across the bridge.", "Давай перейдём через мост."]],
    'act': [["Don't act like a child.", "Не веди себя как ребёнок."]],
    'active': [["My grandmother is still very active.", "Моя бабушка всё ещё очень активная."]],
    'add': [["Add a little sugar to the tea.", "Добавь немного сахара в чай."]],
    'address': [["Can you send me your address?", "Можешь прислать мне свой адрес?"]],
    'admit': [["I admit I was wrong.", "Признаю, я был неправ."]],
    'advice': [["Thanks for the good advice.", "Спасибо за хороший совет."]],
    'afraid': [["I'm afraid of flying.", "Я боюсь летать."]],
    'after': [["Let's grab coffee after work.", "Давай выпьем кофе после работы."]],
    'afternoon': [["I'll see you this afternoon.", "Увидимся сегодня днём."]],
    'again': [["Say that again, please.", "Скажи это снова, пожалуйста."]],
    'against': [["I'm against this decision.", "Я против этого решения."]],
    'age': [["What's the age of your son?", "Сколько лет твоему сыну?"]],
    'ago': [["We met three years ago.", "Мы познакомились три года назад."]],
    'agree': [["I totally agree with you.", "Я полностью с тобой согласен."]],
    'air': [["Let's get some fresh air.", "Давай подышим свежим воздухом."]],
    'airport': [["We need to be at the airport by six.", "Нам нужно быть в аэропорту к шести."]],
    'alive': [["The old tree is still alive.", "Старое дерево всё ещё живо."]],
    'all': [["That's all for today.", "На сегодня это всё."]],
    'allow': [["They don't allow dogs here.", "Здесь не разрешают собак."]],
    'almost': [["I'm almost finished with the report.", "Я почти закончил с отчётом."]],
    'alone': [["I don't like eating alone.", "Не люблю есть один."]],
    'already': [["I've already seen this film.", "Я уже видел этот фильм."]],
    'also': [["She also speaks French.", "Она также говорит по-французски."]],
    'always': [["She always arrives on time.", "Она всегда приходит вовремя."]],
    'amazing': [["You did an amazing job!", "Ты отлично справился!"]],
    'among': [["He was among the best students.", "Он был среди лучших студентов."]],
    'angry': [["Why are you so angry?", "Почему ты такой злой?"]],
    'animal': [["What's your favourite animal?", "Какое твоё любимое животное?"]],
    'another': [["Let's try another restaurant.", "Давай попробуем другой ресторан."]],
    'answer': [["I'll answer your email tomorrow.", "Отвечу на твоё письмо завтра."]],
    'any': [["Do you have any questions?", "У тебя есть вопросы?"]],
    'anything': [["Do you want anything from the shop?", "Что-нибудь нужно из магазина?"]],
    'anyway': [["Anyway, I have to go.", "В любом случае, мне пора."]],
    'appear': [["A cat appeared in our garden.", "В нашем саду появилась кошка."]],
    'apple': [["I eat an apple every morning.", "Каждое утро я ем яблоко."]],
    'arm': [["I broke my arm last summer.", "Прошлым летом я сломал руку."]],
    'around': [["Let me show you around.", "Давай я тебе всё покажу."]],
    'arrive': [["When does your train arrive?", "Когда прибывает твой поезд?"]],
    'art': [["She's studying art at university.", "Она изучает искусство в университете."]],
    'ask': [["Feel free to ask me anything.", "Спрашивай меня о чём угодно."]],
    'asleep': [["The baby is finally asleep.", "Ребёнок наконец уснул."]],
    'attention': [["Pay attention to the details.", "Обращай внимание на детали."]],
    'attract': [["The city attracts many tourists.", "Город привлекает много туристов."]],
    'aunt': [["My aunt lives in Paris.", "Моя тётя живёт в Париже."]],
    'autumn': [["Autumn is my favourite season.", "Осень — моё любимое время года."]],
    'available': [["Is this table available?", "Этот столик свободен?"]],
    'avoid': [["Try to avoid busy hours.", "Старайся избегать часов пик."]],
    'away': [["The station is two kilometres away.", "Станция в двух километрах отсюда."]],
    
    // ═══ B ═══
    'baby': [["The baby is sleeping.", "Ребёнок спит."]],
    'back': [["My back hurts after the gym.", "У меня болит спина после спортзала."]],
    'bad': [["I have some bad news.", "У меня плохие новости."]],
    'bag': [["This bag is too heavy.", "Эта сумка слишком тяжёлая."]],
    'ball': [["The kids are playing with a ball.", "Дети играют в мяч."]],
    'bank': [["I need to go to the bank.", "Мне нужно в банк."]],
    'bathroom': [["Where's the bathroom, please?", "Где здесь туалет, пожалуйста?"]],
    'be': [["I want to be a doctor.", "Я хочу быть врачом."]],
    'beach': [["Let's go to the beach this weekend.", "Давай сходим на пляж в выходные."]],
    'beautiful': [["You look beautiful today.", "Ты сегодня прекрасно выглядишь."]],
    'because': [["I'm tired because I didn't sleep well.", "Я устал, потому что плохо спал."]],
    'become': [["She wants to become a teacher.", "Она хочет стать учителем."]],
    'bed': [["It's time to go to bed.", "Пора спать."]],
    'before': [["Wash your hands before eating.", "Помой руки перед едой."]],
    'begin': [["The film begins at eight.", "Фильм начинается в восемь."]],
    'behind': [["The keys are behind the door.", "Ключи за дверью."]],
    'believe': [["I can't believe it's already winter.", "Не верю, что уже зима."]],
    'below': [["The temperature is below zero.", "Температура ниже нуля."]],
    'best': [["This is the best coffee in town.", "Это лучший кофе в городе."]],
    'better': [["I feel much better today.", "Сегодня я чувствую себя намного лучше."]],
    'between': [["The bank is between the shop and the café.", "Банк между магазином и кафе."]],
    'big': [["They live in a big house.", "Они живут в большом доме."]],
    'bike': [["I go to work by bike.", "Я езжу на работу на велосипеде."]],
    'bird': [["A little bird is sitting on the branch.", "Маленькая птичка сидит на ветке."]],
    'birthday': [["Happy birthday! How old are you?", "С днём рождения! Сколько тебе лет?"]],
    'black': [["She's wearing a black dress.", "Она в чёрном платье."]],
    'blue': [["The sky is so blue today.", "Небо сегодня такое синее."]],
    'body': [["Listen to your body.", "Слушай своё тело."]],
    'book': [["This book changed my life.", "Эта книга изменила мою жизнь."]],
    'boring': [["The film was really boring.", "Фильм был очень скучным."]],
    'born': [["I was born in Moscow.", "Я родился в Москве."]],
    'borrow': [["Can I borrow your pen?", "Можно одолжить твою ручку?"]],
    'both': [["Both of us love coffee.", "Мы оба любим кофе."]],
    'bottle': [["Please buy a bottle of water.", "Купи, пожалуйста, бутылку воды."]],
    'box': [["What's inside the box?", "Что внутри коробки?"]],
    'boy': [["The boy is playing with his dog.", "Мальчик играет со своей собакой."]],
    'bread': [["I buy fresh bread every morning.", "Я покупаю свежий хлеб каждое утро."]],
    'break': [["Be careful, don't break the glass.", "Осторожно, не разбей стекло."]],
    'breakfast': [["What do you usually have for breakfast?", "Что ты обычно ешь на завтрак?"]],
    'bridge': [["Let's walk across the bridge.", "Давай перейдём через мост."]],
    'bring': [["Bring your friend to the party.", "Приведи своего друга на вечеринку."]],
    'brother': [["My brother lives in Berlin.", "Мой брат живёт в Берлине."]],
    'brown': [["She has beautiful brown eyes.", "У неё красивые карие глаза."]],
    'build': [["They're building a new school.", "Они строят новую школу."]],
    'bus': [["I take the bus to work.", "Я езжу на работу на автобусе."]],
    'busy': [["I'm busy right now, can we talk later?", "Я сейчас занят, можем поговорить позже?"]],
    'but': [["I want to go, but I'm too tired.", "Я хочу пойти, но слишком устал."]],
    'buy': [["I want to buy a new laptop.", "Я хочу купить новый ноутбук."]],
    'by': [["I go to work by car.", "Я езжу на работу на машине."]],
    
    // ═══ C ═══
    'cake': [["She baked a chocolate cake.", "Она испекла шоколадный торт."]],
    'call': [["I'll call you back later.", "Я перезвоню позже."]],
    'camera': [["Don't forget to bring your camera.", "Не забудь взять камеру."]],
    'can': [["Can you help me, please?", "Можешь мне помочь, пожалуйста?"]],
    'car': [["My car broke down yesterday.", "Вчера у меня сломалась машина."]],
    'careful': [["Be careful, the floor is wet.", "Осторожно, пол мокрый."]],
    'carrot': [["Rabbits love carrots.", "Кролики любят морковь."]],
    'carry': [["Can you carry this bag for me?", "Можешь донести эту сумку?"]],
    'cat': [["My cat sleeps all day.", "Мой кот спит весь день."]],
    'catch': [["Catch the ball!", "Лови мяч!"]],
    'celebrate': [["Let's celebrate your birthday!", "Давай отпразднуем твой день рождения!"]],
    'chair': [["Take a chair and sit down.", "Возьми стул и садись."]],
    'chance': [["Give me one more chance.", "Дай мне ещё один шанс."]],
    'change': [["You should change your password.", "Тебе стоит сменить пароль."]],
    'cheap': [["This restaurant is quite cheap.", "Этот ресторан довольно дешёвый."]],
    'check': [["Let me check my schedule.", "Дай мне проверить расписание."]],
    'cheese': [["I love cheese on my pizza.", "Обожаю сыр на пицце."]],
    'chicken': [["We had roast chicken for dinner.", "На ужин у нас была жареная курица."]],
    'child': [["She has three children.", "У неё трое детей."]],
    'chocolate': [["Would you like some chocolate?", "Хочешь шоколадку?"]],
    'choose': [["You can choose any colour.", "Можешь выбрать любой цвет."]],
    'cinema': [["Let's go to the cinema tonight.", "Пойдём сегодня в кино."]],
    'city': [["I love this city in autumn.", "Я люблю этот город осенью."]],
    'class': [["My English class starts at ten.", "Мой урок английского начинается в десять."]],
    'clean': [["Please keep your room clean.", "Держи свою комнату в чистоте."]],
    'clear': [["The sky is clear tonight.", "Небо сегодня ясное."]],
    'climb': [["We climbed the mountain last summer.", "Прошлым летом мы взобрались на гору."]],
    'clock': [["The clock on the wall is broken.", "Часы на стене сломаны."]],
    'close': [["Please close the door.", "Закрой, пожалуйста, дверь."]],
    'clothes': [["I need to buy new clothes.", "Мне нужно купить новую одежду."]],
    'cloud': [["There's not a single cloud in the sky.", "На небе ни облачка."]],
    'coffee': [["Let's grab a coffee sometime.", "Давай как-нибудь выпьем кофе."]],
    'cold': [["It's really cold outside today.", "Сегодня на улице очень холодно."]],
    'come': [["Come over for dinner tonight.", "Приходи на ужин сегодня."]],
    'computer': [["My computer is very slow.", "Мой компьютер очень медленный."]],
    'cook': [["I love to cook for my family.", "Обожаю готовить для семьи."]],
    'cool': [["That's a really cool idea!", "Это действительно классная идея!"]],
    'corner': [["The shop is on the corner.", "Магазин на углу."]],
    'cost': [["How much does it cost?", "Сколько это стоит?"]],
    'could': [["Could you help me, please?", "Не могли бы вы мне помочь?"]],
    'country': [["Which country are you from?", "Из какой ты страны?"]],
    'course': [["I'm taking an English course.", "Я прохожу курс английского."]],
    'cousin': [["My cousin lives in Canada.", "Мой двоюродный брат живёт в Канаде."]],
    'cry': [["Don't cry, everything will be fine.", "Не плачь, всё будет хорошо."]],
    'cup': [["Would you like a cup of tea?", "Хочешь чашку чая?"]],
    'cut': [["I cut my finger while cooking.", "Я порезал палец, пока готовил."]],
    
    // ═══ D ═══
    'dad': [["My dad taught me to ride a bike.", "Папа научил меня кататься на велосипеде."]],
    'dance': [["Let's dance together!", "Давай потанцуем вместе!"]],
    'dangerous': [["Driving fast is dangerous.", "Быстро водить опасно."]],
    'dark': [["It gets dark early in winter.", "Зимой рано темнеет."]],
    'daughter': [["My daughter is studying medicine.", "Моя дочь изучает медицину."]],
    'day': [["It was a beautiful day.", "Это был прекрасный день."]],
    'dead': [["My phone is dead again.", "У меня опять сел телефон."]],
    'decide': [["We decided to stay home.", "Мы решили остаться дома."]],
    'deep': [["The lake is very deep here.", "Озеро здесь очень глубокое."]],
    'delicious': [["This soup is absolutely delicious.", "Этот суп просто восхитительный."]],
    'describe': [["Can you describe the man?", "Можешь описать мужчину?"]],
    'die': [["My phone battery died again.", "У меня опять сел телефон."]],
    'different': [["We have very different tastes.", "У нас очень разные вкусы."]],
    'difficult': [["This exercise is too difficult.", "Это упражнение слишком трудное."]],
    'dinner': [["What's for dinner tonight?", "Что на ужин сегодня?"]],
    'dirty': [["Your shoes are very dirty.", "Твои ботинки очень грязные."]],
    'disappear': [["The sun disappeared behind the clouds.", "Солнце скрылось за облаками."]],
    'discuss': [["Let's discuss it tomorrow.", "Давай обсудим это завтра."]],
    'do': [["What do you do for a living?", "Чем ты зарабатываешь на жизнь?"]],
    'doctor': [["You should see a doctor.", "Тебе стоит сходить к врачу."]],
    'dog': [["My dog is very friendly.", "Моя собака очень дружелюбная."]],
    'door': [["Someone is knocking at the door.", "Кто-то стучит в дверь."]],
    'down': [["Sit down and relax.", "Сядь и расслабься."]],
    'draw': [["Can you draw a cat?", "Можешь нарисовать кошку?"]],
    'dream': [["Follow your dreams.", "Следуй за своей мечтой."]],
    'dress': [["That's a beautiful dress.", "Это красивое платье."]],
    'drink': [["Drink more water.", "Пей больше воды."]],
    'drive': [["Can you drive me to the airport?", "Можешь подвезти меня в аэропорт?"]],
    'drop': [["Don't drop the plate!", "Не урони тарелку!"]],
    'dry': [["The towel is not dry yet.", "Полотенце ещё не сухое."]],
    'during': [["Don't use your phone during the lesson.", "Не пользуйся телефоном во время урока."]],
    
    // ═══ E ═══
    'each': [["Each student got a book.", "Каждый ученик получил книгу."]],
    'ear': [["My ear hurts a little.", "У меня немного болит ухо."]],
    'early': [["I woke up early today.", "Сегодня я рано проснулся."]],
    'earth': [["The Earth goes around the Sun.", "Земля вращается вокруг Солнца."]],
    'easy': [["This task is very easy.", "Это задание очень простое."]],
    'eat': [["Let's eat something.", "Давай что-нибудь поедим."]],
    'egg': [["I had two eggs for breakfast.", "На завтрак я съел два яйца."]],
    'eight': [["The shop opens at eight.", "Магазин открывается в восемь."]],
    'either': [["Either way works for me.", "Мне подходит любой вариант."]],
    'else': [["Is there anything else?", "Что-нибудь ещё?"]],
    'email': [["I'll send you an email.", "Я пришлю тебе письмо."]],
    'empty': [["The room was completely empty.", "Комната была полностью пустой."]],
    'end': [["The film has a happy end.", "У фильма счастливый конец."]],
    'enjoy': [["Enjoy your meal!", "Приятного аппетита!"]],
    'enough': [["That's enough for today.", "На сегодня достаточно."]],
    'enter': [["Don't enter without knocking.", "Не входи без стука."]],
    'even': [["Even a child can do it.", "Даже ребёнок может это сделать."]],
    'evening': [["Good evening! How are you?", "Добрый вечер! Как дела?"]],
    'ever': [["Have you ever been to London?", "Ты когда-нибудь был в Лондоне?"]],
    'every': [["I go to the gym every day.", "Я хожу в зал каждый день."]],
    'everybody': [["Everybody knows about it.", "Все об этом знают."]],
    'everything': [["Everything is going to be fine.", "Всё будет хорошо."]],
    'everywhere': [["I've looked everywhere for my keys.", "Я везде искал свои ключи."]],
    'exactly': [["That's exactly what I mean.", "Именно это я и имею в виду."]],
    'example': [["Can you give me an example?", "Можешь привести пример?"]],
    'excellent': [["Your English is excellent!", "У тебя отличный английский!"]],
    'excited': [["I'm so excited about the trip!", "Я так взволнован поездкой!"]],
    'exciting': [["That was an exciting match.", "Это был захватывающий матч."]],
    'excuse': [["Excuse me, is this seat taken?", "Извините, это место занято?"]],
    'exercise': [["I try to exercise every day.", "Я стараюсь заниматься спортом каждый день."]],
    'expect': [["I expect good news soon.", "Я ожидаю хороших новостей скоро."]],
    'expensive': [["This restaurant is too expensive.", "Этот ресторан слишком дорогой."]],
    'experience': [["Do you have work experience?", "У тебя есть опыт работы?"]],
    'explain': [["Can you explain this rule?", "Можешь объяснить это правило?"]],
    'eye': [["Close your eyes and relax.", "Закрой глаза и расслабься."]],
    
    // ═══ F ═══
    'face': [["Wash your face with cold water.", "Умойся холодной водой."]],
    'fact': [["In fact, I've never been there.", "На самом деле, я там никогда не был."]],
    'fall': [["Be careful, don't fall!", "Осторожно, не упади!"]],
    'family': [["My family lives in Moscow.", "Моя семья живёт в Москве."]],
    'famous': [["This city is famous for its museums.", "Этот город известен своими музеями."]],
    'far': [["The station is not far from here.", "Станция недалеко отсюда."]],
    'fast': [["He drives too fast.", "Он водит слишком быстро."]],
    'fat': [["The cat is getting fat.", "Кот становится толстым."]],
    'father': [["My father is a doctor.", "Мой отец — врач."]],
    'favourite': [["What's your favourite film?", "Какой твой любимый фильм?"]],
    'feel': [["I feel much better today.", "Сегодня я чувствую себя намного лучше."]],
    'few': [["We have a few minutes left.", "У нас осталось несколько минут."]],
    'find': [["I can't find my keys.", "Я не могу найти ключи."]],
    'fine': [["I'm fine, thanks.", "Я в порядке, спасибо."]],
    'finish': [["I'll finish work at six.", "Я закончу работу в шесть."]],
    'fire': [["We made a fire on the beach.", "Мы развели костёр на пляже."]],
    'first': [["This is my first time here.", "Я здесь впервые."]],
    'fish': [["We caught three fish today.", "Сегодня мы поймали три рыбы."]],
    'five': [["The film starts in five minutes.", "Фильм начинается через пять минут."]],
    'floor': [["Don't sit on the floor.", "Не сиди на полу."]],
    'flower': [["I bought flowers for my mum.", "Я купил цветы для мамы."]],
    'fly': [["We fly to Paris tomorrow.", "Завтра мы летим в Париж."]],
    'follow': [["Follow me, I know the way.", "Следуй за мной, я знаю дорогу."]],
    'food': [["The food here is amazing.", "Еда здесь потрясающая."]],
    'foot': [["My foot hurts a bit.", "У меня немного болит нога."]],
    'football': [["Do you like playing football?", "Ты любишь играть в футбол?"]],
    'forget': [["Don't forget to call me.", "Не забудь мне позвонить."]],
    'forgive': [["Please forgive me.", "Пожалуйста, прости меня."]],
    'fork': [["Could you bring me a fork?", "Можешь принести мне вилку?"]],
    'free': [["Are you free this evening?", "Ты свободен сегодня вечером?"]],
    'fresh': [["The bread is still fresh.", "Хлеб ещё свежий."]],
    'friend': [["She's my best friend.", "Она моя лучшая подруга."]],
    'friendly': [["The staff here is very friendly.", "Персонал здесь очень дружелюбный."]],
    'from': [["I'm from Russia.", "Я из России."]],
    'front': [["Let's sit in the front row.", "Давай сядем в первом ряду."]],
    'fruit': [["I try to eat more fruit.", "Я стараюсь есть больше фруктов."]],
    'full': [["The bus was completely full.", "Автобус был полностью забит."]],
    'fun': [["We had so much fun yesterday.", "Вчера было так весело."]],
    'funny': [["That's a really funny story.", "Это действительно смешная история."]],
    'future': [["Nobody knows the future.", "Никто не знает будущего."]],
    
    // ═══ G ═══
    'game': [["Do you want to play a game?", "Хочешь сыграть в игру?"]],
    'garden': [["We have a small garden.", "У нас есть маленький сад."]],
    'get': [["I got a message from Anna.", "Я получил сообщение от Анны."]],
    'gift': [["This is a gift for you.", "Это подарок для тебя."]],
    'girl': [["The girl is reading a book.", "Девочка читает книгу."]],
    'give': [["Give me a minute, please.", "Дай мне минуту, пожалуйста."]],
    'glad': [["I'm glad to see you.", "Я рад тебя видеть."]],
    'glass': [["Can I have a glass of water?", "Можно стакан воды?"]],
    'go': [["Let's go to the beach today.", "Пойдём сегодня на пляж."]],
    'good': [["That's a really good idea!", "Это действительно хорошая идея!"]],
    'goodbye': [["Goodbye! See you tomorrow.", "До свидания! До завтра."]],
    'grandmother': [["My grandmother makes the best pies.", "Моя бабушка печёт лучшие пироги."]],
    'great': [["You did a great job!", "Ты отлично справился!"]],
    'green': [["She has beautiful green eyes.", "У неё красивые зелёные глаза."]],
    'grow': [["The plants are growing fast.", "Растения быстро растут."]],
    'guess': [["Guess what happened!", "Угадай, что случилось!"]],
    'guest': [["We're expecting guests tonight.", "Сегодня вечером ждём гостей."]],
    'guitar': [["He plays the guitar very well.", "Он очень хорошо играет на гитаре."]],
    
    // ═══ H ═══
    'hair': [["Her hair is very long.", "У неё очень длинные волосы."]],
    'half': [["I'll be there in half an hour.", "Я буду через полчаса."]],
    'hand': [["Wash your hands before eating.", "Помой руки перед едой."]],
    'handsome': [["Your brother is very handsome.", "Твой брат очень красивый."]],
    'happen': [["What happened to your arm?", "Что случилось с твоей рукой?"]],
    'happy': [["I'm so happy for you!", "Я так рад за тебя!"]],
    'hard': [["This exercise is really hard.", "Это упражнение очень трудное."]],
    'hate': [["I hate getting up early.", "Ненавижу рано вставать."]],
    'have': [["I have two brothers.", "У меня два брата."]],
    'he': [["He is my best friend.", "Он мой лучший друг."]],
    'head': [["I have a terrible headache.", "У меня ужасно болит голова."]],
    'health': [["Health is more important than money.", "Здоровье важнее денег."]],
    'healthy': [["I try to eat healthy food.", "Я стараюсь есть здоровую еду."]],
    'hear': [["Did you hear that noise?", "Ты слышал этот шум?"]],
    'heart': [["She has a kind heart.", "У неё доброе сердце."]],
    'heavy': [["This box is too heavy for me.", "Эта коробка слишком тяжёлая для меня."]],
    'hello': [["Hello! How are you?", "Привет! Как дела?"]],
    'help': [["Can you help me with this?", "Можешь мне с этим помочь?"]],
    'her': [["Her name is Anna.", "Её зовут Анна."]],
    'here': [["Come here, please.", "Иди сюда, пожалуйста."]],
    'high': [["The mountain is very high.", "Гора очень высокая."]],
    'hill': [["We walked up the hill.", "Мы поднялись на холм."]],
    'his': [["His car is new.", "Его машина новая."]],
    'history': [["I love reading about history.", "Обожаю читать про историю."]],
    'hit': [["The ball hit the window.", "Мяч попал в окно."]],
    'hobby': [["What's your hobby?", "Какое у тебя хобби?"]],
    'hold': [["Hold my hand.", "Держи мою руку."]],
    'holiday': [["We're going on holiday next week.", "На следующей неделе мы едем в отпуск."]],
    'home': [["I'll be home around seven.", "Я буду дома около семи."]],
    'hope': [["I hope you feel better soon.", "Надеюсь, ты скоро поправишься."]],
    'horse': [["The horse is running fast.", "Лошадь быстро бежит."]],
    'hospital': [["She works at the hospital.", "Она работает в больнице."]],
    'hot': [["It's really hot today.", "Сегодня очень жарко."]],
    'hotel': [["We stayed at a nice hotel.", "Мы остановились в хорошем отеле."]],
    'hour': [["The flight takes two hours.", "Полёт длится два часа."]],
    'house': [["We bought a house last year.", "Мы купили дом в прошлом году."]],
    'how': [["How are you doing?", "Как у тебя дела?"]],
    'hungry': [["I'm so hungry, let's eat.", "Я так голоден, давай поедим."]],
    'hurry': [["Hurry up, we're going to be late!", "Поторопись, мы опоздаем!"]],
    'husband': [["Her husband is a chef.", "Её муж — повар."]],
    
    // ═══ I ═══
    'ice': [["Would you like ice in your drink?", "Хочешь лёд в напиток?"]],
    'idea': [["That's a brilliant idea!", "Это блестящая идея!"]],
    'if': [["If you want, we can go together.", "Если хочешь, можем пойти вместе."]],
    'ill': [["I'm feeling ill today.", "Я сегодня плохо себя чувствую."]],
    'important': [["This is very important for me.", "Это очень важно для меня."]],
    'in': [["The keys are in my bag.", "Ключи в моей сумке."]],
    'inside': [["It's warmer inside.", "Внутри теплее."]],
    'interesting': [["That's a really interesting book.", "Это действительно интересная книга."]],
    'internet': [["The internet is very slow today.", "Интернет сегодня очень медленный."]],
    'invite': [["I want to invite you to dinner.", "Хочу пригласить тебя на ужин."]],
    'island': [["We spent a week on a small island.", "Мы провели неделю на маленьком острове."]],
    'it': [["It is a beautiful day.", "Сегодня прекрасный день."]],
    
    // ═══ J ═══
    'job': [["She found a new job.", "Она нашла новую работу."]],
    'join': [["Would you like to join us?", "Хочешь к нам присоединиться?"]],
    'journey': [["The journey took five hours.", "Поездка заняла пять часов."]],
    'juice': [["I'd like a glass of orange juice.", "Я бы хотел стакан апельсинового сока."]],
    'jump': [["The kids are jumping on the bed.", "Дети прыгают на кровати."]],
    'just': [["I'm just looking, thanks.", "Я просто смотрю, спасибо."]],
    
    // ═══ K ═══
    'keep': [["Keep your room clean.", "Держи свою комнату в чистоте."]],
    'key': [["I lost my keys again.", "Я опять потерял ключи."]],
    'kick': [["He kicked the ball hard.", "Он сильно пнул мяч."]],
    'kill': [["That joke just killed me!", "Эта шутка меня просто убила!"]],
    'kind': [["That's very kind of you.", "Это очень мило с твоей стороны."]],
    'king': [["The king lived in a big castle.", "Король жил в большом замке."]],
    'kitchen': [["Mum is cooking in the kitchen.", "Мама готовит на кухне."]],
    'knife': [["Be careful with the knife.", "Осторожно с ножом."]],
    'knock': [["Please knock before entering.", "Постучи, прежде чем войти."]],
    'know': [["I know exactly what you mean.", "Я точно знаю, что ты имеешь в виду."]],
    
    // ═══ L ═══
    'lake': [["We swam in the lake.", "Мы купались в озере."]],
    'language': [["How many languages do you speak?", "На скольких языках ты говоришь?"]],
    'large': [["We need a larger table.", "Нам нужен стол побольше."]],
    'last': [["This is the last one.", "Это последний."]],
    'late': [["Sorry I'm late.", "Извини, что опоздал."]],
    'laugh': [["We laughed all evening.", "Мы смеялись весь вечер."]],
    'learn': [["I'm learning English for work.", "Я учу английский для работы."]],
    'leave': [["We should leave before it gets dark.", "Нам стоит уйти до темноты."]],
    'left': [["Turn left at the corner.", "Поверни налево на углу."]],
    'leg': [["My leg hurts a bit.", "У меня немного болит нога."]],
    'lend': [["Can you lend me some money?", "Можешь одолжить мне денег?"]],
    'less': [["Try to eat less sugar.", "Старайся есть меньше сахара."]],
    'lesson': [["My English lesson is at six.", "Мой урок английского в шесть."]],
    'letter': [["I wrote a letter to my grandmother.", "Я написал письмо бабушке."]],
    'library': [["I study at the library.", "Я занимаюсь в библиотеке."]],
    'life': [["Life is too short to be angry.", "Жизнь слишком коротка, чтобы злиться."]],
    'light': [["Turn off the light, please.", "Выключи свет, пожалуйста."]],
    'like': [["I like your new haircut.", "Мне нравится твоя новая стрижка."]],
    'line': [["There's a long line at the shop.", "В магазине длинная очередь."]],
    'listen': [["Listen to me, please.", "Послушай меня, пожалуйста."]],
    'little': [["We have a little dog.", "У нас есть маленькая собачка."]],
    'live': [["Where do you live?", "Где ты живёшь?"]],
    'long': [["It's a long way from here.", "Это далеко отсюда."]],
    'look': [["Look at this beautiful sunset!", "Посмотри на этот красивый закат!"]],
    'lose': [["I always lose my umbrella.", "Я всегда теряю свой зонт."]],
    'loud': [["The music is too loud.", "Музыка слишком громкая."]],
    'love': [["I love spending time with you.", "Я люблю проводить с тобой время."]],
    'low': [["The prices here are quite low.", "Цены здесь довольно низкие."]],
    'lunch': [["Let's have lunch together.", "Давай пообедаем вместе."]],
    
    // ═══ M ═══
    'make': [["Can you make me a coffee?", "Можешь сделать мне кофе?"]],
    'man': [["That man is my neighbour.", "Этот мужчина — мой сосед."]],
    'many': [["How many people came?", "Сколько человек пришло?"]],
    'map': [["I need a map of the city.", "Мне нужна карта города."]],
    'market': [["We buy vegetables at the market.", "Мы покупаем овощи на рынке."]],
    'marry': [["They got married last summer.", "Они поженились прошлым летом."]],
    'matter': [["What's the matter with you?", "Что с тобой?"]],
    'maybe': [["Maybe we can meet tomorrow.", "Может быть, встретимся завтра."]],
    'mean': [["What does this word mean?", "Что значит это слово?"]],
    'meat': [["I don't eat much meat.", "Я не ем много мяса."]],
    'medicine': [["Take your medicine after dinner.", "Прими лекарство после ужина."]],
    'meet': [["Nice to meet you.", "Приятно познакомиться."]],
    'meeting': [["I have a meeting at three.", "У меня встреча в три."]],
    'memory': [["She has a very good memory.", "У неё очень хорошая память."]],
    'message': [["I got your message, thanks.", "Я получил твоё сообщение, спасибо."]],
    'middle': [["The shop is in the middle of the street.", "Магазин в середине улицы."]],
    'milk': [["Do you want milk in your coffee?", "Хочешь молоко в кофе?"]],
    'mind': [["I don't mind waiting.", "Я не против подождать."]],
    'minute': [["Give me a minute, please.", "Дай мне минуту, пожалуйста."]],
    'mirror': [["She's looking at herself in the mirror.", "Она смотрит на себя в зеркало."]],
    'miss': [["I miss you so much.", "Я так по тебе скучаю."]],
    'mistake': [["Everyone makes mistakes.", "Все делают ошибки."]],
    'moment': [["Wait a moment, please.", "Подожди минуточку, пожалуйста."]],
    'money': [["I don't have enough money.", "У меня недостаточно денег."]],
    'month': [["See you next month.", "Увидимся в следующем месяце."]],
    'moon': [["The moon is so bright tonight.", "Луна сегодня такая яркая."]],
    'more': [["Would you like some more tea?", "Хочешь ещё чаю?"]],
    'morning': [["I feel great this morning.", "Утром я чувствую себя отлично."]],
    'mother': [["My mother is a teacher.", "Моя мама — учитель."]],
    'mountain': [["We climbed a high mountain.", "Мы взобрались на высокую гору."]],
    'mouth': [["Open your mouth, please.", "Открой рот, пожалуйста."]],
    'move': [["We're moving to a new apartment.", "Мы переезжаем в новую квартиру."]],
    'movie': [["Let's watch a movie tonight.", "Давай посмотрим фильм сегодня."]],
    'much': [["How much does it cost?", "Сколько это стоит?"]],
    'music': [["Music helps me relax.", "Музыка помогает мне расслабиться."]],
    'must': [["You must see this film!", "Ты обязан посмотреть этот фильм!"]],
    'my': [["This is my house.", "Это мой дом."]]
};
// ═══════════════════════════════════════════════
// ПРОДОЛЖЕНИЕ SENTENCES (N–Z)
// ⚠️ Вставьте эти строки ВНУТРЬ объекта SENTENCES из части 1,
//    ПЕРЕД закрывающей }; после последнего слова 'my'
// ═══════════════════════════════════════════════

    // ═══ N ═══
    'name': [["What's your name again?", "Как тебя зовут, напомни?"]],
    'near': [["Is there a bank near here?", "Здесь рядом есть банк?"]],
    'neck': [["My neck hurts from sitting all day.", "У меня болит шея от сидения весь день."]],
    'need': [["I need to buy some bread.", "Мне нужно купить хлеба."]],
    'never': [["I've never been to Japan.", "Я никогда не был в Японии."]],
    'new': [["I bought a new phone yesterday.", "Вчера я купил новый телефон."]],
    'news': [["Have you heard the news?", "Ты слышал новости?"]],
    'newspaper': [["My grandfather reads the newspaper every morning.", "Мой дедушка читает газету каждое утро."]],
    'next': [["See you next week.", "Увидимся на следующей неделе."]],
    'nice': [["That's a nice dress.", "Это красивое платье."]],
    'night': [["It was a cold night.", "Это была холодная ночь."]],
    'no': [["No, thank you.", "Нет, спасибо."]],
    'nobody': [["Nobody knows the answer.", "Никто не знает ответа."]],
    'noise': [["What's that noise upstairs?", "Что за шум наверху?"]],
    'noon': [["Let's meet at noon.", "Давай встретимся в полдень."]],
    'north': [["They live in the north of the country.", "Они живут на севере страны."]],
    'nose': [["My nose is running.", "У меня насморк."]],
    'note': [["I left you a note on the table.", "Я оставил тебе записку на столе."]],
    'nothing': [["There's nothing to worry about.", "Не о чем беспокоиться."]],
    'now': [["I'm busy right now.", "Я сейчас занят."]],
    'number': [["What's your phone number?", "Какой у тебя номер телефона?"]],
    'nurse': [["The nurse was very kind.", "Медсестра была очень добрая."]],
    
    // ═══ O ═══
    'ocean': [["The ocean is calm today.", "Океан сегодня спокойный."]],
    'of': [["I drank a cup of tea.", "Я выпил чашку чая."]],
    'off': [["Turn off the light, please.", "Выключи свет, пожалуйста."]],
    'offer': [["They offered me a new job.", "Они предложили мне новую работу."]],
    'office': [["I work in an office in the centre.", "Я работаю в офисе в центре."]],
    'often': [["How often do you go to the gym?", "Как часто ты ходишь в зал?"]],
    'oil': [["Add some olive oil to the salad.", "Добавь оливкового масла в салат."]],
    'old': [["How old are you?", "Сколько тебе лет?"]],
    'on': [["The book is on the table.", "Книга на столе."]],
    'once': [["I've been there only once.", "Я был там только один раз."]],
    'one': [["I have only one sister.", "У меня только одна сестра."]],
    'only': [["I'm only joking.", "Я только шучу."]],
    'open': [["Open the window, it's hot.", "Открой окно, жарко."]],
    'opinion': [["In my opinion, he's right.", "По моему мнению, он прав."]],
    'or': [["Would you like tea or coffee?", "Хочешь чай или кофе?"]],
    'orange': [["I drink orange juice every morning.", "Я пью апельсиновый сок каждое утро."]],
    'order': [["Let's order a pizza.", "Давай закажем пиццу."]],
    'other': [["Let's try the other restaurant.", "Давай попробуем другой ресторан."]],
    'our': [["Our house is very old.", "Наш дом очень старый."]],
    'out': [["He's out at the moment.", "Его сейчас нет."]],
    'outside': [["The children are playing outside.", "Дети играют на улице."]],
    'over': [["The film is over.", "Фильм закончился."]],
    'own': [["I have my own room.", "У меня своя комната."]],
    
    // ═══ P ═══
    'page': [["Turn to page ten, please.", "Откройте страницу десять, пожалуйста."]],
    'paint': [["We painted the walls blue.", "Мы покрасили стены в синий."]],
    'paper': [["I need a piece of paper.", "Мне нужен лист бумаги."]],
    'parent': [["My parents live in the country.", "Мои родители живут за городом."]],
    'park': [["Let's walk in the park.", "Давай погуляем в парке."]],
    'part': [["This is my favourite part.", "Это моя любимая часть."]],
    'party': [["We're having a party on Saturday.", "В субботу у нас вечеринка."]],
    'pass': [["Could you pass me the salt?", "Передай мне соль, пожалуйста?"]],
    'pay': [["Who is going to pay the bill?", "Кто будет платить по счёту?"]],
    'pen': [["Can I borrow your pen?", "Можно одолжить твою ручку?"]],
    'people': [["There were a lot of people at the party.", "На вечеринке было много людей."]],
    'perfect': [["The weather is perfect today.", "Сегодня идеальная погода."]],
    'phone': [["My phone is almost dead.", "Мой телефон почти разряжен."]],
    'photo': [["Let's take a photo together.", "Давай сфотографируемся вместе."]],
    'piano': [["She plays the piano beautifully.", "Она красиво играет на пианино."]],
    'picture': [["Look at this picture of my dog.", "Посмотри на это фото моей собаки."]],
    'piece': [["Would you like a piece of cake?", "Хочешь кусочек торта?"]],
    'pig': [["The pig is very dirty.", "Свинья очень грязная."]],
    'pink': [["She loves pink flowers.", "Она обожает розовые цветы."]],
    'place': [["This is a nice place to rest.", "Это хорошее место для отдыха."]],
    'plan': [["What's the plan for tonight?", "Какие планы на вечер?"]],
    'plane': [["The plane landed on time.", "Самолёт приземлился вовремя."]],
    'play': [["The kids are playing in the garden.", "Дети играют в саду."]],
    'please': [["Please close the door.", "Пожалуйста, закрой дверь."]],
    'pocket': [["The keys are in my pocket.", "Ключи в моём кармане."]],
    'point': [["That's a good point.", "Это хорошее замечание."]],
    'police': [["The police arrived quickly.", "Полиция быстро приехала."]],
    'poor': [["The poor cat is hungry.", "Бедная кошка голодна."]],
    'popular': [["This song is very popular now.", "Эта песня сейчас очень популярна."]],
    'possible': [["Is it possible to change my order?", "Можно изменить мой заказ?"]],
    'potato': [["I'm cooking potatoes for dinner.", "Я готовлю картошку на ужин."]],
    'present': [["Thank you for the lovely present.", "Спасибо за чудесный подарок."]],
    'president': [["The president gave a speech.", "Президент выступил с речью."]],
    'pretty': [["She's a pretty girl.", "Она красивая девушка."]],
    'price': [["What's the price of this jacket?", "Сколько стоит эта куртка?"]],
    'problem': [["No problem, I'll help you.", "Без проблем, я тебе помогу."]],
    'promise': [["I promise to call you.", "Обещаю позвонить тебе."]],
    'pull': [["Pull the door, don't push.", "Тяни дверь, не толкай."]],
    'purple': [["Her dress is purple.", "Её платье фиолетовое."]],
    'push': [["Push the button to start.", "Нажми кнопку, чтобы начать."]],
    'put': [["Put the milk in the fridge.", "Поставь молоко в холодильник."]],
    
    // ═══ Q ═══
    'question': [["Can I ask you a question?", "Можно задать тебе вопрос?"]],
    'quick': [["Let's have a quick lunch.", "Давай быстро пообедаем."]],
    'quickly': [["Come here quickly!", "Иди сюда быстро!"]],
    'quiet': [["Please be quiet, the baby is sleeping.", "Тише, пожалуйста, ребёнок спит."]],
    'quite': [["The film was quite good.", "Фильм был довольно хороший."]],
    
    // ═══ R ═══
    'rain': [["I love the smell of rain.", "Я люблю запах дождя."]],
    'raise': [["Raise your hand if you know.", "Подними руку, если знаешь."]],
    'read': [["I'm reading a good book now.", "Сейчас я читаю хорошую книгу."]],
    'ready': [["Are you ready to go?", "Ты готов идти?"]],
    'real': [["Is this real leather?", "Это настоящая кожа?"]],
    'really': [["I really enjoyed the film.", "Мне очень понравился фильм."]],
    'reason': [["What's the reason for the delay?", "В чём причина задержки?"]],
    'receive': [["I received your letter yesterday.", "Вчера я получил твоё письмо."]],
    'red': [["Her new car is red.", "Её новая машина красная."]],
    'remember': [["Remember to lock the door.", "Не забудь запереть дверь."]],
    'repeat': [["Could you repeat that, please?", "Не могли бы вы повторить?"]],
    'rest': [["You need to rest more.", "Тебе нужно больше отдыхать."]],
    'restaurant': [["Let's try that new restaurant.", "Давай попробуем тот новый ресторан."]],
    'return': [["I'll return the book tomorrow.", "Я верну книгу завтра."]],
    'rice': [["Would you like rice or potatoes?", "Хочешь рис или картошку?"]],
    'rich': [["He's a very rich man.", "Он очень богатый человек."]],
    'ride': [["I can ride a bike.", "Я умею кататься на велосипеде."]],
    'right': [["Turn right at the corner.", "Поверни направо на углу."]],
    'river': [["We swam in the river.", "Мы купались в реке."]],
    'road': [["The road is closed today.", "Дорога сегодня закрыта."]],
    'room': [["This room needs more light.", "Этой комнате нужно больше света."]],
    'run': [["I run every morning before work.", "Я бегаю каждое утро перед работой."]],
    
    // ═══ S ═══
    'sad': [["Why do you look so sad?", "Почему ты такой грустный?"]],
    'safe': [["Is this neighbourhood safe?", "Этот район безопасный?"]],
    'salt': [["Could you pass the salt?", "Передай соль, пожалуйста?"]],
    'same': [["We have the same taste in music.", "У нас одинаковый вкус в музыке."]],
    'sandwich': [["I made a sandwich for lunch.", "Я сделал бутерброд на обед."]],
    'save': [["I'm saving money for a trip.", "Я коплю деньги на поездку."]],
    'say': [["What did you say?", "Что ты сказал?"]],
    'school': [["The kids go to school by bus.", "Дети ездят в школу на автобусе."]],
    'sea': [["The sea is calm today.", "Море сегодня спокойное."]],
    'season': [["What's your favourite season?", "Какое твоё любимое время года?"]],
    'seat': [["Is this seat taken?", "Это место занято?"]],
    'see': [["I can't see anything from here.", "Я ничего не вижу отсюда."]],
    'seem': [["You seem tired today.", "Ты сегодня кажешься уставшим."]],
    'sell': [["They sell fresh bread here.", "Здесь продают свежий хлеб."]],
    'send': [["Send me the details later.", "Пришли мне детали позже."]],
    'sentence': [["Can you translate this sentence?", "Можешь перевести это предложение?"]],
    'serious': [["Are you serious?", "Ты серьёзно?"]],
    'seven': [["I get up at seven.", "Я встаю в семь."]],
    'share': [["Let's share a pizza.", "Давай разделим пиццу."]],
    'she': [["She is my sister.", "Она моя сестра."]],
    'sheep': [["The sheep are in the field.", "Овцы на поле."]],
    'shine': [["The sun is shining today.", "Сегодня светит солнце."]],
    'ship': [["The ship sailed at dawn.", "Корабль отплыл на рассвете."]],
    'shirt': [["I need to iron my shirt.", "Мне нужно погладить рубашку."]],
    'shoe': [["These shoes are very comfortable.", "Эта обувь очень удобная."]],
    'shop': [["The shop closes at nine.", "Магазин закрывается в девять."]],
    'short': [["It's a short walk from here.", "Это недалеко отсюда."]],
    'show': [["Show me your new phone.", "Покажи мне свой новый телефон."]],
    'shower': [["I take a shower every morning.", "Я принимаю душ каждое утро."]],
    'sick': [["I feel sick today.", "Я сегодня плохо себя чувствую."]],
    'side': [["Let's sit on the sunny side.", "Давай сядем на солнечной стороне."]],
    'similar': [["Our tastes are very similar.", "У нас очень похожие вкусы."]],
    'simple': [["The task is very simple.", "Задача очень простая."]],
    'since': [["I haven't seen him since Monday.", "Я не видел его с понедельника."]],
    'sing': [["She sings beautifully.", "Она красиво поёт."]],
    'sister': [["My sister lives in London.", "Моя сестра живёт в Лондоне."]],
    'sit': [["Sit down and relax.", "Сядь и расслабься."]],
    'six': [["The film starts at six.", "Фильм начинается в шесть."]],
    'size': [["What size do you wear?", "Какой размер ты носишь?"]],
    'sky': [["The sky is so blue today.", "Небо сегодня такое синее."]],
    'sleep': [["I need to sleep more.", "Мне нужно больше спать."]],
    'slow': [["The internet is very slow.", "Интернет очень медленный."]],
    'slowly': [["Please speak more slowly.", "Говорите, пожалуйста, помедленнее."]],
    'small': [["We live in a small flat.", "Мы живём в маленькой квартире."]],
    'smell': [["These flowers smell wonderful.", "Эти цветы чудесно пахнут."]],
    'smile': [["You have a beautiful smile.", "У тебя красивая улыбка."]],
    'snow': [["The snow is falling softly.", "Снег мягко падает."]],
    'so': [["Why are you so tired?", "Почему ты такой уставший?"]],
    'soft': [["The bed is very soft.", "Кровать очень мягкая."]],
    'some': [["Would you like some tea?", "Хочешь чаю?"]],
    'somebody': [["Somebody left a message for you.", "Кто-то оставил тебе сообщение."]],
    'someone': [["Someone is knocking at the door.", "Кто-то стучит в дверь."]],
    'something': [["I want to tell you something.", "Я хочу тебе кое-что сказать."]],
    'sometimes': [["Sometimes I walk to work.", "Иногда я хожу на работу пешком."]],
    'son': [["Their son is studying medicine.", "Их сын изучает медицину."]],
    'song': [["This song is stuck in my head.", "Эта песня застряла у меня в голове."]],
    'soon': [["I'll be back soon.", "Я скоро вернусь."]],
    'sorry': [["Sorry I'm late.", "Извини, что опоздал."]],
    'sound': [["That sounds like a great idea.", "Звучит отлично."]],
    'soup': [["The soup is too hot.", "Суп слишком горячий."]],
    'speak': [["Do you speak English?", "Ты говоришь по-английски?"]],
    'special': [["Today is a special day.", "Сегодня особенный день."]],
    'spend': [["We spent the whole day at the beach.", "Мы провели весь день на пляже."]],
    'sport': [["I love watching sport.", "Обожаю смотреть спорт."]],
    'spring': [["Spring is my favourite season.", "Весна — моё любимое время года."]],
    'stand': [["Don't just stand there, help me!", "Не стой просто так, помоги мне!"]],
    'star': [["The stars are so bright tonight.", "Звёзды сегодня такие яркие."]],
    'start': [["Let's start with the basics.", "Давай начнём с основ."]],
    'stay': [["Let's stay home tonight.", "Давай останемся дома сегодня."]],
    'still': [["Are you still working?", "Ты всё ещё работаешь?"]],
    'stone': [["The bridge is made of stone.", "Мост сделан из камня."]],
    'stop': [["Stop the car, please.", "Останови машину, пожалуйста."]],
    'store': [["I need to go to the store.", "Мне нужно в магазин."]],
    'story': [["That's a long story.", "Это долгая история."]],
    'street': [["The street was full of people.", "Улица была полна людей."]],
    'strong': [["He's very strong.", "Он очень сильный."]],
    'student': [["The students are studying hard.", "Студенты усердно учатся."]],
    'study': [["I study English every day.", "Я учу английский каждый день."]],
    'sugar': [["No sugar, thanks.", "Без сахара, спасибо."]],
    'summer': [["Summer is my favourite season.", "Лето — моё любимое время года."]],
    'sun': [["The sun is shining today.", "Сегодня светит солнце."]],
    'sure': [["Are you sure about that?", "Ты в этом уверен?"]],
    'sweet': [["The tea is too sweet.", "Чай слишком сладкий."]],
    'swim': [["Can you swim?", "Ты умеешь плавать?"]],
    
    // ═══ T ═══
    'table': [["We reserved a table for two.", "Мы забронировали столик на двоих."]],
    'take': [["Take an umbrella, it's raining.", "Возьми зонт, идёт дождь."]],
    'talk': [["We need to talk.", "Нам нужно поговорить."]],
    'tall': [["He's very tall.", "Он очень высокий."]],
    'taste': [["The soup tastes delicious.", "Суп очень вкусный."]],
    'tea': [["Would you like a cup of tea?", "Хочешь чашку чая?"]],
    'teach': [["She teaches English at school.", "Она преподаёт английский в школе."]],
    'teacher': [["Our teacher is very patient.", "Наш учитель очень терпеливый."]],
    'team': [["Our team won the match.", "Наша команда выиграла матч."]],
    'tell': [["Tell me more about it.", "Расскажи мне побольше об этом."]],
    'ten': [["The shop opens at ten.", "Магазин открывается в десять."]],
    'terrible': [["The weather is terrible today.", "Сегодня ужасная погода."]],
    'test': [["I have a test tomorrow.", "Завтра у меня тест."]],
    'than': [["She's taller than me.", "Она выше меня."]],
    'thank': [["Thank you for your help.", "Спасибо за помощь."]],
    'that': [["That's a great idea!", "Это отличная идея!"]],
    'the': [["The book is on the table.", "Книга на столе."]],
    'their': [["Their house is very big.", "Их дом очень большой."]],
    'them': [["Give it to them.", "Отдай это им."]],
    'then': [["We'll talk then.", "Поговорим тогда."]],
    'there': [["There's a cat in the garden.", "В саду кошка."]],
    'these': [["These flowers are for you.", "Эти цветы для тебя."]],
    'they': [["They live next door.", "Они живут по соседству."]],
    'thick': [["The book is very thick.", "Книга очень толстая."]],
    'thin': [["The ice is too thin.", "Лёд слишком тонкий."]],
    'thing': [["I have a lot of things to do.", "У меня много дел."]],
    'think': [["I think you're right.", "Я думаю, ты прав."]],
    'thirsty': [["I'm so thirsty.", "Я так хочу пить."]],
    'this': [["This is my favourite song.", "Это моя любимая песня."]],
    'those': [["Those shoes are nice.", "Те туфли красивые."]],
    'though': [["It's cold, though I like it.", "Холодно, хотя мне нравится."]],
    'three': [["I have three brothers.", "У меня три брата."]],
    'through': [["We walked through the park.", "Мы прошли через парк."]],
    'throw': [["Don't throw the ball inside!", "Не бросай мяч в доме!"]],
    'ticket': [["I bought two tickets for the concert.", "Я купил два билета на концерт."]],
    'time': [["What time do you finish work?", "Во сколько ты заканчиваешь работу?"]],
    'tired': [["I'm so tired today.", "Я сегодня так устал."]],
    'to': [["I go to work by bus.", "Я езжу на работу на автобусе."]],
    'today': [["What are you doing today?", "Что ты делаешь сегодня?"]],
    'together': [["Let's cook dinner together.", "Давай приготовим ужин вместе."]],
    'tomorrow': [["See you tomorrow.", "До завтра."]],
    'tonight': [["What are we doing tonight?", "Что мы делаем сегодня вечером?"]],
    'too': [["This coffee is too hot.", "Этот кофе слишком горячий."]],
    'tooth': [["My tooth hurts.", "У меня болит зуб."]],
    'top': [["We reached the top of the mountain.", "Мы добрались до вершины горы."]],
    'touch': [["Don't touch the paintings.", "Не трогайте картины."]],
    'town': [["I grew up in a small town.", "Я вырос в маленьком городке."]],
    'toy': [["The child is playing with toys.", "Ребёнок играет с игрушками."]],
    'train': [["We took the train to Paris.", "Мы поехали в Париж на поезде."]],
    'travel': [["I love to travel.", "Я люблю путешествовать."]],
    'tree': [["There's a big tree in our garden.", "В нашем саду большое дерево."]],
    'trip': [["How was your trip?", "Как прошла поездка?"]],
    'trouble': [["I'm in big trouble.", "У меня большие неприятности."]],
    'true': [["Is it true?", "Это правда?"]],
    'try': [["Try this cake, it's delicious.", "Попробуй этот торт, он вкусный."]],
    'turn': [["Turn left at the traffic lights.", "Поверни налево на светофоре."]],
    'two': [["I have two sisters.", "У меня две сестры."]],
    
    // ═══ U ═══
    'ugly': [["That building is really ugly.", "То здание действительно уродливое."]],
    'umbrella': [["Take an umbrella with you.", "Возьми с собой зонт."]],
    'uncle': [["My uncle works in a bank.", "Мой дядя работает в банке."]],
    'under': [["The cat is under the table.", "Кошка под столом."]],
    'understand': [["I don't understand this question.", "Я не понимаю этот вопрос."]],
    'unfortunately': [["Unfortunately, I can't come.", "К сожалению, я не могу прийти."]],
    'unhappy': [["She looks unhappy today.", "Она сегодня выглядит несчастной."]],
    'university': [["He studies at university.", "Он учится в университете."]],
    'until': [["Wait until tomorrow.", "Подожди до завтра."]],
    'up': [["Look up at the sky.", "Посмотри на небо."]],
    'us': [["Come with us.", "Пойдём с нами."]],
    'use': [["Can I use your phone?", "Можно воспользоваться твоим телефоном?"]],
    'useful': [["This is a very useful app.", "Это очень полезное приложение."]],
    'usually': [["I usually walk to work.", "Я обычно хожу на работу пешком."]],
    
    // ═══ V ═══
    'vacation': [["We're going on vacation next week.", "На следующей неделе мы едем в отпуск."]],
    'vegetable': [["Eat more vegetables.", "Ешь больше овощей."]],
    'very': [["This tea is very good.", "Этот чай очень хороший."]],
    'video': [["I watched a funny video yesterday.", "Вчера я посмотрел смешное видео."]],
    'view': [["The view from here is amazing.", "Вид отсюда потрясающий."]],
    'village': [["My grandmother lives in a small village.", "Моя бабушка живёт в маленькой деревне."]],
    'visit': [["Come and visit us sometime.", "Приезжай к нам как-нибудь."]],
    'voice': [["She has a beautiful voice.", "У неё красивый голос."]],
    
    // ═══ W ═══
    'wait': [["Wait for me here.", "Подожди меня здесь."]],
    'waiter': [["The waiter brought us the menu.", "Официант принёс нам меню."]],
    'wake': [["I wake up at seven every morning.", "Я встаю в семь каждое утро."]],
    'walk': [["I walk to work every day.", "Я хожу на работу пешком каждый день."]],
    'wall': [["There's a picture on the wall.", "На стене висит картина."]],
    'want': [["I want to learn English.", "Я хочу выучить английский."]],
    'warm': [["The weather is warm today.", "Сегодня тёплая погода."]],
    'wash': [["Wash your hands before eating.", "Помой руки перед едой."]],
    'watch': [["Let's watch a movie tonight.", "Давай посмотрим фильм сегодня."]],
    'water': [["Can I have a glass of water?", "Можно стакан воды?"]],
    'way': [["Which way is the station?", "В какую сторону вокзал?"]],
    'we': [["We live in Moscow.", "Мы живём в Москве."]],
    'wear': [["She's wearing a red dress.", "Она в красном платье."]],
    'weather': [["The weather is beautiful today.", "Сегодня прекрасная погода."]],
    'week': [["See you next week.", "Увидимся на следующей неделе."]],
    'weekend': [["Have a nice weekend!", "Хороших выходных!"]],
    'welcome': [["Welcome to our home!", "Добро пожаловать в наш дом!"]],
    'well': [["You did well on the test.", "Ты хорошо справился с тестом."]],
    'west': [["They live on the west coast.", "Они живут на западном побережье."]],
    'wet': [["My clothes are wet.", "Моя одежда мокрая."]],
    'what': [["What is your name?", "Как тебя зовут?"]],
    'when': [["When are you free?", "Когда ты свободен?"]],
    'where': [["Where are you from?", "Откуда ты?"]],
    'which': [["Which one do you like?", "Какой тебе нравится?"]],
    'while': [["I read while waiting for the bus.", "Я читаю, пока жду автобус."]],
    'white': [["She's wearing a white shirt.", "Она в белой рубашке."]],
    'who': [["Who is that man?", "Кто тот мужчина?"]],
    'whole': [["I spent the whole day reading.", "Я провёл весь день за чтением."]],
    'why': [["Why are you so late?", "Почему ты так опоздал?"]],
    'wide': [["The road is very wide.", "Дорога очень широкая."]],
    'wife': [["His wife is a doctor.", "Его жена — врач."]],
    'win': [["I hope we win the game.", "Надеюсь, мы выиграем игру."]],
    'wind': [["The wind is very strong today.", "Сегодня очень сильный ветер."]],
    'window': [["Open the window, please.", "Открой окно, пожалуйста."]],
    'wine': [["Would you like some wine?", "Хочешь вина?"]],
    'winter': [["Winter is very cold here.", "Зимой здесь очень холодно."]],
    'wish': [["I wish you all the best.", "Желаю тебе всего наилучшего."]],
    'with': [["Come with me.", "Пойдём со мной."]],
    'without': [["I can't live without coffee.", "Я не могу жить без кофе."]],
    'woman': [["The woman next to me was very kind.", "Женщина рядом со мной была очень добрая."]],
    'wonderful': [["We had a wonderful evening.", "У нас был чудесный вечер."]],
    'word': [["I don't know this word.", "Я не знаю это слово."]],
    'work': [["I work from home on Fridays.", "По пятницам я работаю из дома."]],
    'world': [["The world is full of surprises.", "Мир полон сюрпризов."]],
    'worry': [["Don't worry, everything will be fine.", "Не волнуйся, всё будет хорошо."]],
    'write': [["I need to write an email.", "Мне нужно написать письмо."]],
    'wrong': [["You dialled the wrong number.", "Ты набрал неверный номер."]],
    
    // ═══ Y ═══
    'year': [["Happy New Year!", "С Новым годом!"]],
    'yellow': [["She loves yellow flowers.", "Она обожает жёлтые цветы."]],
    'yes': [["Yes, please.", "Да, пожалуйста."]],
    'yesterday': [["I saw him yesterday.", "Я видел его вчера."]],
    'yet': [["I haven't finished yet.", "Я ещё не закончил."]],
    'you': [["You are my best friend.", "Ты мой лучший друг."]],
    'young': [["She looks very young.", "Она выглядит очень молодой."]],
    'your': [["Is this your bag?", "Это твоя сумка?"]],
    
    // ═══ Z ═══
    'zero': [["It's five degrees below zero.", "Пять градусов ниже нуля."]],
    'zoo': [["We took the kids to the zoo.", "Мы сводили детей в зоопарк."]]
};

// ═══════════════════════════════════════════════
// ВСПОМОГАТЕЛЬНЫЕ
// ═══════════════════════════════════════════════
function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function getSentence(word) {
    const en = (word.eng || '').toLowerCase();
    const list = SENTENCES[en];
    if (!list || !list.length) return null;
    const [pair] = shuffle(list);
    return { en: pair[0], ru: pair[1], word };
}

function hasSentence(word) {
    const en = (word.eng || '').toLowerCase();
    return !!(SENTENCES[en] && SENTENCES[en].length);
}

// ═══════════════════════════════════════════════
// ГЕНЕРАЦИЯ ПРЕДЛОЖЕНИЙ
// ═══════════════════════════════════════════════
function generateSentence(word) {
    return getSentence(word);
}

function generateSentencesList(words, count = 15) {
    if (!words || !words.length) return [];
    const withSentences = words.filter(w => hasSentence(w));
    if (!withSentences.length) return [];
    const sample = shuffle(withSentences).slice(0, count);
    const result = [];
    for (const w of sample) {
        const s = getSentence(w);
        if (s) result.push(s);
    }
    return result;
}

// ═══════════════════════════════════════════════
// 7 ТИПОВ ВОПРОСОВ
// ═══════════════════════════════════════════════
function getSimilarWords(word, allWords, count = 3) {
    const samePos = allWords.filter(w => w.pos === word.pos && w.eng !== word.eng);
    return shuffle(samePos).slice(0, count);
}

// 1. EN → RU
function qENtoRU(w, others) {
    if (!w.ru) return null;
    return {
        type: 'en2ru',
        q: `Как переводится слово <b>${w.eng}</b>?`,
        correct: w.ru,
        options: shuffle([w.ru, ...others.map(o => o.ru)]).slice(0, 4),
        hint: `${w.tr || ''} · ${w.pos}`,
        word: w
    };
}

// 2. RU → EN
function qRUtoEN(w, others) {
    if (!w.ru) return null;
    return {
        type: 'ru2en',
        q: `Как по-английски «<b>${w.ru}</b>»?`,
        correct: w.eng,
        options: shuffle([w.eng, ...others.map(o => o.eng)]).slice(0, 4),
        hint: w.pos,
        word: w
    };
}

// 3. Транскрипция
function qTranscription(w, others) {
    if (!w.tr) return null;
    const oth = others.filter(o => o.tr);
    if (oth.length < 3) return null;
    return {
        type: 'transcription',
        q: `Какая транскрипция у слова <b>${w.eng}</b>?`,
        correct: w.tr,
        options: shuffle([w.tr, ...oth.slice(0, 3).map(o => o.tr)]),
        hint: w.ru,
        word: w
    };
}

// 4. Часть речи
function qPartOfSpeech(w) {
    const posRu = { noun: 'существительное', verb: 'глагол', adjective: 'прилагательное', adverb: 'наречие' };
    if (!posRu[w.pos]) return null;
    return {
        type: 'pos',
        q: `Какая часть речи у слова <b>${w.eng}</b>?`,
        correct: posRu[w.pos],
        options: shuffle(Object.values(posRu)),
        hint: w.ru,
        word: w
    };
}

// 5. Вставь слово в предложение
function qFillBlank(w, others) {
    const s = getSentence(w);
    if (!s) return null;
    const re = new RegExp('\\b' + w.eng.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\w*\\b', 'i');
    if (!re.test(s.en)) return null;
    return {
        type: 'fill',
        q: `Вставь пропущенное слово:<br><b>${s.en.replace(re, '___')}</b>`,
        correct: w.eng,
        options: shuffle([w.eng, ...others.slice(0, 3).map(o => o.eng)]),
        hint: s.ru,
        word: w
    };
}

// 6. Перевод предложения EN → RU
function qTranslateSentence(w, others) {
    const s = getSentence(w);
    if (!s) return null;
    const wrong = [];
    for (const o of others.slice(0, 8)) {
        const os = getSentence(o);
        if (os && os.ru !== s.ru) wrong.push(os.ru);
        if (wrong.length >= 3) break;
    }
    if (wrong.length < 3) return null;
    return {
        type: 'sentence-ru',
        q: `Как переводится предложение?<br><b>${s.en}</b>`,
        correct: s.ru,
        options: shuffle([s.ru, ...wrong]),
        hint: `${w.eng} — ${w.ru}`,
        word: w
    };
}

// 7. Выбери английский вариант
function qChooseSentenceEN(w, others) {
    const s = getSentence(w);
    if (!s) return null;
    const wrong = [];
    for (const o of others.slice(0, 8)) {
        const os = getSentence(o);
        if (os && os.en !== s.en) wrong.push(os.en);
        if (wrong.length >= 3) break;
    }
    if (wrong.length < 3) return null;
    return {
        type: 'sentence-en',
        q: `Как сказать по-английски?<br><b>${s.ru}</b>`,
        correct: s.en,
        options: shuffle([s.en, ...wrong]),
        hint: `${w.eng} — ${w.ru}`,
        word: w
    };
}

const ALL_BUILDERS = [
    qENtoRU, qRUtoEN, qTranscription, qPartOfSpeech,
    qFillBlank, qTranslateSentence, qChooseSentenceEN
];

// ═══════════════════════════════════════════════
// ГЛАВНАЯ — генерация вопросов
// ═══════════════════════════════════════════════
function generateQuiz(words, count = 10) {
    if (!words || !words.length) return [];
    const sample = shuffle(words).slice(0, count * 3);
    const questions = [];
    for (const word of sample) {
        if (questions.length >= count) break;
        const others = getSimilarWords(word, words, 6);
        const types = shuffle([...ALL_BUILDERS]);
        for (const builder of types) {
            try {
                const q = builder(word, others);
                if (q && q.options) {
                    const unique = [...new Set(q.options)];
                    if (unique.length >= 2 && unique.includes(q.correct)) {
                        q.options = shuffle(unique);
                        questions.push(q);
                        break;
                    }
                }
            } catch (e) {}
        }
    }
    return questions;
}

// ═══════════════════════════════════════════════
// ЭКСПОРТ — совместим с текущим index.html
// ═══════════════════════════════════════════════
if (typeof window !== 'undefined') {
    window.quizgen = {
        generateSentence,
        generateQuiz,
        generateSentencesList,
        getSentence,
        hasSentence,
        SENTENCES
    };
    console.log('✅ quizgen.js v12 — живые предложения (' + Object.keys(SENTENCES).length + ' слов)');
}
