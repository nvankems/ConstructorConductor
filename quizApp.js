//We're going to create the JS for a basic quiz application. 

//Let's think about the nature of this quiz app first. We're going to be creating lots of user objects, and we're
//also going to be creating lots of Question objects. Those would make two perfectly good constructors. 

//Create a QuizUser constructor that accepts name, email, password, and totalScore parameters and set them appropriatly

  //code here
  function QuizUser(name, email, password, totalScore) {
  	this.name = name;
  	this.email = email;
  	this.password = password;
  	this.totalScore = totalScore;
  };


//Create a Question constructor that accepts title, answersArray, rightAnswer, and difficulty parameters

  //code here
  function Question(title, answersArray, rightAnswer, difficulty) {
  	this.title = title;
  	this.answersArray = answersArray;
  	this.rightAnswer = rightAnswer;
  	this.difficulty = difficulty;
  }


//Create a quizUsers Array which is going to hold all of our users.

  //code here
  var quizUsers = [];


//Let's say three people signed up for our service, create 3 instances of User and add each to the users Array

  //code here
  var tyler = new QuizUser("Tyler", "tylermcginnis33@gmail.com", "iloveJS", 0);
  var cahlan = new QuizUser("Cahlan", "cahlan@devmounta.in", "iLoveHashtags", 0);
  var lenny = new QuizUser("Lenny", "lenny@theLenster.com", "iLoveLentilSoup", 0);
  quizUsers.push(tyler, cahlan, lenny);

//Create a questions Array which is going to hold all of our questions

  //code here
  var questions = [];


//Now, let's say we wanted to create a quiz about JavaScript. Create three instances of Question which contain the following data
 var q1 = new Question('T/F: Inheritance is achieved in JavaScript through Prototypes?', ["Yes", "No"], "Yes", 3);
 var q2 = new Question('T/F: JavaScript is just a scripting version of Java', ["Yes", "No"], "Yes", 2);
 var q3 = new Question("T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value", ["True", "False"], "True", 2);
//Fill in the rest of the required data as you see appropriate.

  //code here


//Now push all of your instances of Question into the questions Array

  //code here
  questions.push(q1, q2, q3);

console.log('My users Array and my questions arrray are ...');
//Now loop console.log your users array and your questions array and verify that they're both holding the right data.

  //code here
  for (var i = 0; i < quizUsers.length; i++) {
  	console.log(quizUsers[i]);
  };
  for (var i = 0; i < questions.length; i++) {
  	console.log(questions[i]);
  };
