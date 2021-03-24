var correct, money;


function startGame(){
    correct = 0;
    money = 0;

    for(var i = 0; i < questions.length; i++) {
        do{
            var ok = false;
            var quest = prompt(questions[i].question + "\n" + questions[i].a + "\n" + questions[i].b + "\n" +
                               questions[i].c + "\n" + questions[i].d + "\n'e' чтобы сдаться");
            ok = isAnswer(quest);
        } while(!ok);
        var answer = questions[i].rightСhoice;

        if (quest == questions[i].rightСhoice){
            correct++;
            if(i<2){
                money += 100;
            } else {
                money += 300;
            }
        } else if (quest == 'e') {
            alert("Вы сдались, правильный ответ был: \n" + questions[i][answer]);
            break;
        } else {
            // Почему-то если ввести -1, то показывает это сообщение, а не выходит из игры
            alert("Вы ответили непраильно. Правильный ответ был: \n" + questions[i][answer]);
            break;
        }
    }
    alert('Игра окончена, количество правильных ответов ' + correct + "\nВы заработали " + money + " монет");
}

    function isAnswer(quest) {
        if (!isNaN(quest)) {
            alert('Введите вариант ответа a, b, c или d');
            return false;
        }
        return true;
    }
