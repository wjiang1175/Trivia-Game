$(document).ready(function () {
    //Global Vars
    var rightAnswers = 0;
    var wrongAnswers = 0;
    var questionCount = 0;
    var triviaStart = false;
    var questionCountdown;
    var timerNext;

    //Html Vars
    var timer = $("#timer");
    var questionNumber = $("#question-number");
    var currentQuestion = $(".questions");
    var a = $("#a")
    var b = $("#b")
    var c = $("#c")
    var d = $("#d")
    var answers = $(".answers")
    var right = $("#rights")
    var wrong = $("#wrongs")
    var SRbtn = $("#SRbutton")

    const questions = [
        {
            questionNum: 1,
            question: "Who was the actor for Deadpool?",
            answers: {
                a: "Ryan Reynolds",
                b: "Ryan Gosling",
                c: "Ryan Phillipee",
                d: "Ryan Hurt",
            },
            correctAnswer: "a",
            correctReturn: "Correct! the actor was Ryan Reynold! ",
            incorrectReturn: "Wrong! the actor was Ryan Reynold!",
            timeUpReturn: "Times Up! the actor was Ryan Reynold!",
        },
        {
            questionNum: 2,
            question: " In what year was the first movie of The Avengers released? ",
            answers: {
                a: "2014",
                b: "2011",
                c: "2012",
                d: "2010",
            },
            correctAnswer: "c",
            correctReturn: "Correct! the year was 2012!",
            incorrectReturn: "Wrong! the year was 2012!",
            timeUpReturn: "Times Up! the year was 2012!",

        },
        // {
        //     questionNum: 3,
        //     question: "Who did The Avengers fought during the Infinty War?",
        //     answers: {
        //         a: "Loki",
        //         b: "S.H.I.E.L.D",
        //         c: "Thor",
        //         d: "Thanos",
        //     },
        //     correctAnswer: "d",
        //     correctReturn: "Correct! the Avengers fought Thanos!",
        //     incorrectReturn: "Wrong! the Avengers fought Thanos!",
        //     timeUpReturn: "Times Up! the Avengers fought Thanos!",
        // },
        // {
        //     questionNum: 4,
        //     question: "Captain America's Shield is made of?",
        //     answers: {
        //         a: "Vibranium",
        //         b: "Adamantium",
        //         c: "Kryptonite",
        //         d: "Chrome",
        //     },
        //     correctAnswer: "a",
        //     correctReturn: "Correct! Captain America's Shield is made of Vibranium!",
        //     incorrectReturn: "Wrong! Captain America's Shield is made of Vibranium!",
        //     timeUpReturn: "Times Up! Captain America's Shield is made of Vibranium!",
        // },
        // {
        //     questionNum: 5,
        //     question: "What is the name of Tony Stark’s personal secretary?",
        //     answers: {
        //         a: "Peggy Carter",
        //         b: "Pepper Potts",
        //         c: "Phil Coulson",
        //         d: "Sam Wilson",
        //     },
        //     correctAnswer: "b",
        //     correctReturn: "Correct! Tony Stark's personal secretary is Pepper Potts!",
        //     incorrectReturn: "Wrong! Tony Stark's personal secretary is Pepper Potts!",
        //     timeUpReturn: "Times Up! Tony Stark's personal secretary is Pepper Potts!",
        // },
        // {
        //     questionNum: 6,
        //     question: "What was Dr. Strange’s profession before he became Sorcerer Supreme?",
        //     answers: {
        //         a: "Profess",
        //         b: "Dematologist",
        //         c: "Dentist",
        //         d: "Neurosurgeon",
        //     },
        //     correctAnswer: "d",
        //     correctReturn: "Correct! Dr. Strang was a Neurosurgeon!",
        //     incorrectReturn: "Wrong! Dr. Strang was a Neurosurgeon!",
        //     timeUpReturn: "Times Up! Dr. Strang was a Neurosurgeon!",
        // },
        // {
        //     questionNum: 7,
        //     question: "What is the name of Peter Quill’s alter-ego in Guardians of the Galaxy?",
        //     answers: {
        //         a: "Yondu",
        //         b: "Drax",
        //         c: "Star-Lord",
        //         d: "Groot",
        //     },
        //     correctAnswer: "c",
        //     correctReturn: "Correct! Peter Quil's alter-ego is Star-Lord!",
        //     incorrectReturn: "Wrong! Peter Quil's alter-ego is Star-Lord!",
        //     timeUpReturn: "Times Up! Peter Quil's alter-ego is Star-Lord!",
        // },
        // {
        //     questionNum: 8,
        //     question: "At the end of “The Avengers”, what do the Avengers go eat together before disassembling?",
        //     answers: {
        //         a: "Sushi",
        //         b: "Shawarma",
        //         c: "Spaghetti",
        //         d: "Salad",
        //     },
        //     correctAnswer: "b",
        //     correctReturn: "Correct! The Avengers went to go eat Shawarma!",
        //     incorrectReturn: "Wrong! The Avengers went to go eat Shawarma!",
        //     timeUpReturn: "Times Up! The Avengers went to go eat Shawarma!",
        // },
        // {
        //     questionNum: 9,
        //     question: "What is the name of Tony Stark’s personal butler?",
        //     answers: {
        //         a: "Jeeves",
        //         b: "Jarvis",
        //         c: "Alfred",
        //         d: "Jennings",
        //     },
        //     correctAnswer: "b",
        //     correctReturn: "Correct! Tony Stark's personal butler is Jarvis!",
        //     incorrectReturn: "Wrong! Tony Stark's personal butler is Jarvis!",
        //     timeUpReturn: "Times Up! Tony Stark's personal butler is Jarvis!",
        // },
        // {
        //     questionNum: 10,
        //     question: "What actor played Ant-Man?",
        //     answers: {
        //         a: "Paul Rudd",
        //         b: "Chris Hemsworth",
        //         c: "Chris Pratt",
        //         d: "Benedict Cumberbatch",
        //     },
        //     correctAnswer: "a",
        //     correctReturn: "Correct! The actor who played Ant-Man is Paul Rudd!",
        //     incorrectReturn: "Wrong! The actor who played Ant-Man is Paul Rudd!",
        //     timeUpReturn: "Times Up! The actor who played Ant-Man is Paul Rudd!",
        // },
    ]


    function reset() {
        rightAnswers = 0;
        wrongAnswers = 0;
        questionCount = 0;
    }

    function nextQuestion() {
        if (questionCount < questions.length) {
            triviaStart = true;
            timer.show();
            questionCountdown = 20;
            timerNext = setInterval(timerCountdown, 1000);
            SRbtn.hide();
            questionNumber.appendTo("#card").text("Question #" + questions[questionCount].questionNum);
            currentQuestion.appendTo("#card").text(questions[questionCount].question);
            a.appendTo("#card").html(questions[questionCount].answers.a);
            b.appendTo("#card").html(questions[questionCount].answers.b);
            c.appendTo("#card").html(questions[questionCount].answers.c);
            d.appendTo("#card").html(questions[questionCount].answers.d);

        }
    }
    function showAnswer() {
        timer.hide();
        clearInterval(timerNext);
        a.detach();
        b.detach();
        c.detach();
        d.detach();
        setTimeout(nextQuestion, 5000)
        questionCount++;
        if(questionCount === questions.length){
            clearTimeout(nextQuestion);
            setTimeout(finalScreen, 7000);
        }

    }


    function timesup() {
        currentQuestion.html(questions[questionCount].timeUpReturn);
        wrongAnswers++
        alert("Times Up!");
        showAnswer();
    }
    function incorrectAnswer() {
        currentQuestion.html(questions[questionCount].incorrectReturn);
        wrongAnswers++
        alert("Wrong Answer");
        showAnswer();
    }
    function correctAnswer() {
        currentQuestion.html(questions[questionCount].correctReturn);
        rightAnswers++
        alert("Correct!");
        showAnswer();
    }

    function timerCountdown() {
        questionCountdown--;
        timer.text(questionCountdown);
        if (questionCountdown === 0) {
            timesup();
        }
    }
    SRbtn.click(function() {
        if (!triviaStart) {
            nextQuestion();
        }
    });
    function finalScreen(){
        triviaStart = false;
        clearInterval(timerNext);
        timer.detach();
        questionNumber.detach();
        currentQuestion.text("Games over! Heres Your Score");
        right.appendTo("#card").text("You got " + rightAnswers + "questions right.");
        wrong.appendTo("#card").text("You got " + wrongAnswers + "questions wrong.");
        a.detach();
        b.detach();
        c.detach();
        d.detach();
        SRbtn.show();
        SRbtn.appendTo("#Card").text('Restart');
        reset();
    }

    answers.click(function() {
        clickID = $(this).attr("id");
        console.log(this);
        if (clickID === questions[questionCount].correctAnswer) {
            correctAnswer();
        }
        else {
            incorrectAnswer();
        };
    });
});

