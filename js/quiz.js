const questions = [{
  "que": "Who is the Father of our Nation ?",
  "a": "Mahatma Gandhi",
  "b": "Rajiv Gandhi",
  "c": "Indira Gandhi",
  "d": "Jawahar Lal Nehru",
  "dfkfb": "b",
  "dfktfb": "a",
  "dfklfb": "c",
  "dfkifb": "jjkkll"

},

{
  "que": "Who was the first President of India ?",
  "a": "Jawahar Lal Nehru",
  "b": "Mahatma Gandhi",
  "c": "Dr. Rajendra Prasad",
  "d": "Narendra Modi",
  "dfkfb": "b",
  "dfktfb": "c",
  "dfklfb": "a",
  "dfhfb": "d"
},

{
  "que": "Who was the first Prime Minister of India ?",
  "a": "Salman Khurshid",
  "b": "Jawahar Lal Nehru",
  "c": "Indira Gandhi",
  "d": "Rajiv Gandhi",
  "dfkfb": "a",
  "dfktfb": "b",
  "dfklfb": "c",
  "dfkifb": "1234"
},

{
  "que": "Which is the longest river on the earth?",
  "a": "Volga",
  "b": "Gang",
  "c": "Amazon",
  "d": "Nile",
  "dfkfb": "b",
  "dfktfb": "d",
  "dfklfb": "c",
  "dfhfb": "a"
},

{
  "que": "Name the first 3 planets in our solar system",
  "a": "Earth, Venus, and Mercury",
  "b": "Mars, Saturn, and Uranus",
  "c": "Mercury, Venus, and Earth",
  "d": "Mars, Saturn, and Neptune",
  "dfkfb": "b",
  "dfktfb": "c",
  "dfklfb": "a",
  "dfhfb": "d"
},

{
  "que": "Smallest state of India is?",
  "a": "Tamil Nadu",
  "b": "Goa",
  "c": "Kerala",
  "d": "Gujrat",
  "dfkfb": "a",
  "dfktfb": "b",
  "dfklfb": "c",
  "dfhfb": "d"
},

{
  "que": "Fastest animal on earth is?",
  "a": "Jaguar",
  "b": "Tigel",
  "c": "Lion",
  "d": "Cheetah",
  "dfkfb": "b",
  "dfktfb": "d",
  "dfklfb": "c",
  "dfhfb": "a"
},

{
  "que": "What is the name of Lord Ram's Father?",
  "a": "Janaka Ji",
  "b": "Vasudeva JI",
  "c": "Dasharath Ji",
  "d": "Kesari Ji",
  "dfkfb": "b",
  "dfktfb": "c",
  "dfklfb": "a",
  "dfhfb": "d"
},



];



let index = 0;
let right = 0,
wrong = 0;
var hitonsc,lerti;
var hitonec = lerti;
lerti = questions[2]["dfkifb"]
hitonsc=lerti;
let totle = questions.length;

const quesBoxh3 = document.getElementById("quesBoxh3");
const optionsInput = document.querySelectorAll(".options");

const printMinuts = document.getElementById('minuts-h');
const printSecond = document.getElementById('seconds-h');

const subject = "Science";
const minutsValue = 10; // minuts ko idhar se change karte hai//
const secondValue = 10;// idhar se ham sec ko value denge
let min = minutsValue;
let sec = 0; // ye hamesa 0 hi rahega//

function countdown(){
  if(sec === 0){
    sec =  secondValue;
    min--;
  };

  sec--;

  if(min < 10){
    printMinuts.innerHTML = "0" + min;
  }else{
    document.getElementById('minuts-h').innerHTML= min;
  };

  if(sec < 10){
    printSecond.innerHTML=  "0"+ sec ;
  }else{
    document.getElementById('seconds-h').innerHTML= sec ;
  };

  };




const loadQuestion = () => {

if (index === totle) {
  endQuiz();
} else {
  reset();
  const data = questions[index];
  quesBoxh3.innerText = `Q ${index+1} . ${data.que}`;
  optionsInput[0].nextElementSibling.innerText = data.a;
  optionsInput[1].nextElementSibling.innerText = data.b;
  optionsInput[2].nextElementSibling.innerText = data.c;
  optionsInput[3].nextElementSibling.innerText = data.d;
}
};
const submitQuiz = () => {

const data = questions[index];
const and = getAnswer();
if (and === data.dfktfb) {
  right++
} else {
  wrong++
}
index++;
loadQuestion()
};

const getAnswer = () => {
let result;
optionsInput.forEach((input) => {

  if (input.checked) {
    result = input.value
  }
})
return result;
}


const reset = () => {
optionsInput.forEach((input) => {
  input.checked = false;
})
}

const startQuizBtn = document.getElementById("welcome");
const displayques = document.getElementById("thankYou");

const startButton = document.getElementById("start-btn");

// for only onec call startButton //
function onecCallBtn(){
  startButton.removeEventListener('click', startQuiz);
}
startButton.addEventListener('click', startQuiz);
startButton.addEventListener('click', onecCallBtn);



function startQuiz(){
let docum = String(document.getElementById("password").value);
let startTimeMin = 1;// minuts ko idhar se change karte hai//
let startTimeSec = 0; // ye hamesa 0 hi rahega//

if(docum===hitonsc){
 // startButton /// 
function countstartTime(){
  if(startTimeSec === 0){
    startTimeSec = 5;// idhar se ham sec ko value denge
    startTimeMin--;
  };

  startTimeSec--;
  startButton.value= "Start in " + (startTimeSec+"s");
  };


  setTimeout(()=>{
    studentname = document.getElementById("student-name").value.toUpperCase();
    studentclass = document.getElementById("student-class").value
   
   
    startQuizBtn.classList.add("welcomeDisplayNone");
    displayques.classList.add("quesDisplayVis")
  
    loadQuestion()
  },6000)}else{
    document.getElementById("start-btn").value = "Incorrect Password"
  }   


// for Start Timing
  setInterval(()=>{
    if(startTimeSec === 0 && startTimeMin === 0){
      startButton.value= startTimeSec ;
    }else{
      countstartTime()
  }
  },1000)//timing 1s calling



  //for Quiz Timing
  setInterval(()=>{
    if(min === 0 && sec === 0){
      document.getElementById('minuts-h').innerHTML= "0"+ min;
      document.getElementById('seconds-h').innerHTML=  "0"+ sec ;

      endQuiz();

    }else{
  setTimeout(countdown,6000) 
  };
 },1000)//timing 1s calling

};

const endQuiz = () => {
document.getElementById("quesBoxh3").innerHTML = `
Thank you for attempt the Quiz .`
document.getElementById("thankYou").innerHTML = 
`<h3>  Student Name : ${studentname} <br> Class : ${studentclass}th <br><br> Subject : ( ${subject} ) </h3> <br>  <h2 class="thanks"> [ ${right} / ${totle} ] <br>( are correct answers ) <br> &  <br>( incorrect answer :  ${wrong} ) </h2>`
}


