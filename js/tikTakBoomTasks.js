const tasks = `

    [
        {
            "question": "Чем питается тигр?",
            "answer1": { "result": false, "value": "Пингвины" },
            "answer2": { "result": true, "value": "Косули" }
        },
        {
            "question": "На каком полюсе живут белые медведи?",
            "answer1": { "result": false, "value": "Южный" },
            "answer2": { "result": true, "value": "Северный" }
        },
        {
            "question": "Какие животные были в фильме Полосатый рейс?",
            "answer1": { "result": false, "value": "Верблюды" },
            "answer2": { "result": true, "value": "Тигры" }
        },
        {
            "question": "Где живут пираньи?",
            "answer1": { "result": true, "value": "В реках" },
            "answer2": { "result": false, "value": "В океанах" }
        },
        {
            "question": "Сколько дельфин может жить без воздуха?",
            "answer1": { "result": true, "value": "2 часа" },
            "answer2": { "result": false, "value": "2 дня" }
        },
        {
            "question": "Чем питается кит?",
            "answer1": { "result": true, "value": "Планктоном" },
            "answer2": { "result": false, "value": "Дельфинами" }
        },
        {
            "question": "Какого окраса гималайский медведь?",
            "answer1": { "result": false, "value": "Белый" },
            "answer2": { "result": true, "value": "Бурый" }
        },
        {
            "question": "Сколько ног у краба?",
            "answer1": { "result": false, "value": "4" },
            "answer2": { "result": true, "value": "6" }
        },
        {
            "question": "Где живут осьминоги?",
            "answer1": { "result": false, "value": "В реках" },
            "answer2": { "result": true, "value": "В океанах" }
        },
        {
            "question": "Чем питаются собаки?",
            "answer1": { "result": false, "value": "Планктоном" },
            "answer2": { "result": true, "value": "Мясом" }
        },
        {
            "question": "Сколько ног у слона?",
            "answer1": { "result": true, "value": "4" },
            "answer2": { "result": false, "value": "2" }
        },
        {
            "question": "Что у слона длиннее хобота?",
            "answer1": { "result": true, "value": "Сопли" },
            "answer2": { "result": false, "value": "Хвост" }
        },
        {
            "question": "Сколько языков знают приматы?",
            "answer1": { "result": true, "value": "Один" },
            "answer2": { "result": false, "value": "Ни одного" }
        },
        {
            "question": "Где живут хорьки?",
            "answer1": { "result": false, "value": "В реках" },
            "answer2": { "result": true, "value": "В норах" }
        },
        {
            "question": "Какого цвета зебра?",
            "answer1": { "result": false, "value": "Белая в черную полоску" },
            "answer2": { "result": true, "value": "Черная в белую полоску" }
        },
        {
            "question": "Сколько рядов зубов у акул?",
            "answer1": { "result": false, "value": "1" },
            "answer2": { "result": true, "value": "3" }
        },
        {
            "question": "Что делать при виде волка?",
            "answer1": { "result": true, "value": "Снимать мокрые штаны и бить ими по морде" },
            "answer2": { "result": false, "value": "Бежать" }
        },
        {
            "question": "Сколько лет живут черепахи?",
            "answer1": { "result": true, "value": "больше 100" },
            "answer2": { "result": false, "value": "не больше 5" }
        },
        {
            "question": "Сколько хвостов у дятла?",
            "answer1": { "result": false, "value": "3" },
            "answer2": { "result": true, "value": "1" }
        },
        {
            "question": "Что едят панды?",
            "answer1": { "result": false, "value": "чизкейки" },
            "answer2": { "result": true, "value": "бамбук" }
        },
        {
            "question": "Что убило динозавров?",
            "answer1": { "result": false, "value": "чрезмерное употребление алкоголя" },
            "answer2": { "result": true, "value": "климат" }
        },
        {
            "question": "Как спят летучие мыши?",
            "answer1": { "result": false, "value": "в полете" },
            "answer2": { "result": true, "value": "вися вниз головой" }
        },
        {
            "question": "Как спят слоны?",
            "answer1": { "result": false, "value": "лежа" },
            "answer2": { "result": true, "value": "стоя" }
        },
        {
            "question": "Сколько пятен у жирафа?",
            "answer1": { "result": true, "value": "больше 10" },
            "answer2": { "result": false, "value": "не больше 2" }
        },
        {
            "question": "Где живут волки?",
            "answer1": { "result": true, "value": "в лесу" },
            "answer2": { "result": false, "value": "в пустыне" }
        },
        {
            "question": "Что переносят пчелы?",
            "answer1": { "result": true, "value": "пыльцу" },
            "answer2": { "result": false, "value": "холеру" }
        },
        {
            "question": "Что пьют комары?",
            "answer1": { "result": true, "value": "кровь" },
            "answer2": { "result": false, "value": "колу" }
        },
        {
            "question": "Чем питаются крокодилы?",
            "answer1": { "result": true, "value": "туристами" },
            "answer2": { "result": false, "value": "пирожными" }
        },
        {
            "question": "Что любят медведи?",
            "answer1": { "result": true, "value": "мед" },
            "answer2": { "result": false, "value": "травку" }
        },
        {
            "question": "Какое животное не умеет прыгать?",
            "answer1": { "result": false, "value": "бегемот" },
            "answer2": { "result": true, "value": "слон" }
        }
    ]
`;
