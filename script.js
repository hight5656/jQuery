let countTrue = 0
let countFalse = 0
let num = 0

let userName = prompt('Enter your name') || 'Player';
userName = userName.trim() === '' ? 'Player' : userName;
$('#user-name').text(userName);

const questionAndAnswer = {
    question: ['Apple','Dog ','Blue ','House ','Happy ','Adventure ','Delicious ','Elephant ','Mystery ','Harmony','Intricate','Serendipity ','Ubiquitous ','Esoteric ','Quixotic'],
    answer: ['Яблуко','Собака','Синій','Будинок','Щасливий','Пригода','Смачний','Слон','Таємниця','Гармонія','Складний','Серендіпіті','Всюдисущий','Езотеричний','Квіксотичний'],
}

let startSize = questionAndAnswer.question.length
$('#number').text(
    `${startSize}/0`        
)
let rand = parseInt(Math.random() * questionAndAnswer.question.length)

$('#question').text(questionAndAnswer.question[rand])
$('#btn').on('click', ()=>{
    const userAnswer = String($('#answer').val()).trim().toLowerCase()
    const correctAnswer = questionAndAnswer.answer[rand].toLowerCase()

    if (userAnswer === correctAnswer) {
        countTrue++
        num++
        let temp = {
            question: [],
            answer: [],
        }

        let i = 0
        let delElement
        for (let item of questionAndAnswer.answer) {
            if (correctAnswer !== item) {
                temp.answer[i++] = item
            } else {
                delElement = i
            }
        }

        i = 0
        for (let j = 0; j < questionAndAnswer.question.length; j++) {
            if (j !== delElement) {
                temp.question[i++] = questionAndAnswer.question[j]
            }
        }
        questionAndAnswer.question = temp.question
        questionAndAnswer.answer = temp.answer
    } else {
        alert('Wrong answer')
        countFalse++
    }
    $('#answer').val('')

    $('#number').text(
        `${startSize}/${num}`
    )
    $('#score').text(
        `True:${countTrue} False:${countFalse}`
    )

    if (questionAndAnswer.question.length === 0) {
        $('#question').text(`Test over`);
        const levelMessage =
            countFalse === 0 ? 'Your level of English is very good' :
            countFalse < 6 ? 'Your level of English is good' :
            countFalse < 11 ? 'Your level of English is bad' :
            'Your level of English is very bad';
        alert(levelMessage);
    } else {
        rand = Math.floor(Math.random() * questionAndAnswer.question.length);
        $('#question').text(questionAndAnswer.question[rand]);
    }
})