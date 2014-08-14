var questions = [
	{
		question: 'what temperature is water the most dense?',
		answer1: '5 degrees celcius',
		answer2: '50 degreen celcius',
		answer3: '4 degrees celcius',
		correctAnswer: 3
			},
	{
		question: 'why are ice cacles blue?',
		answer1: 'because magic',
		answer2: 'because they would look silly red',
		answer3: 'because teh short wavelenght of blue light is able to bounce through the ice and make it out of ther other side without being obstaclted',
		correctAnswer: 3


	},
	{
		question: 'How many electrons does an atom of hydrogen have?',
		answer1: 'two',
		answer2: '5 hundred',
		answer3: '1',
		correctAnswer: 1

	}
];


var readline = require('readline');
	var rl = readline.createInterface(process.stdin, process.stdout);
	var numCorrect = 0;
	var questionNumber = 0;
	function askQuestion(item) {
			console.log("Question: " + item.question);
			console.log();
			console.log("1" + item.answer1);
			console.log("1" + item.answer2);
			console.log("1" + item.answer3);
			console.log();
			console.log('type the number of your answer');		

		rl.once('line', function (userInput){	
				var userAnswer = parseInt(userInput);	
				if (userAnswer === item.correctAnswer)	{
					console.log("correct!");										
					numCorrect++;
				} else {
					console.log("wrong!");
				}
				questionNumber++;
				if (questionNumber < questions.length){
					askQuestion(questions[questionNumber]);
				} else {
						console.log("your finished bye bye!")
						rl.close;
				}
		});
	 rl.prompt();
    };
askQuestion(questions[questionNumber]);