(function($){
	$(function(){
  		  $('.sidenav').sidenav();
  		  $('.parallax').parallax();
		});
})(jQuery);
AOS.init();
// Initialize Firebase
var config = {
    apiKey: "AIzaSyAB2a7XHGmt8h1Xg8ZQ8MVf0_9xx7ZhuJw",
    authDomain: "my-portfolio-19ca5.firebaseapp.com",
    databaseURL: "https://my-portfolio-19ca5.firebaseio.com",
    projectId: "my-portfolio-19ca5",
    storageBucket: "",
    messagingSenderId: "526141376165"
  };
 firebase.initializeApp(config);
 //-----------------------------------------------
 var messagesref = firebase.database().ref('messages');
 //-----------------------------------------------
var github = document.getElementById('github');
var github2 = document.getElementById('github2');
var aboutbtn = document.getElementById('about');
var projectsbtn = document.getElementById('xp');
var skillsbtn = document.getElementById('skills');
var contactbtn = document.getElementById('contact');

//firebase database
/*document.getElementById('contactform').addEventListener('submit',
submitForm);*/

/*function submitForm(e){
	e.preventDefault();
	var firstname = getInputVal('fname');
	var lastname = getInputVal('lname');
	var email = getInputVal('mailid');
	var number = getInputVal('phno');
	var subject = getInputVal('subject');


	saveMessage(firstname,lastname,number,email,subject);

	document.querySelector('.alert').style.display = 'block';

	setTimeout(function(){
		document.querySelector('.alert').style.display = 'none';
	},3000)
}

function getInputVal(id){
	return document.getElementById(id).value;
}

function saveMessage(firstname,lastname,number,email,subject){
	var newMessageRef = messagesref.push();
	newMessageRef.set({
		firstname: firstname,
		lastname: lastname,
		number: number,
		email: email,
		subject: subject
	});
}*/

github.addEventListener("mouseover",function(){
	github.style.color = "black";
});
github.addEventListener("mouseleave",function(){
	github.style.color = "orange";
});
github2.addEventListener("mouseover",function(){
	github2.style.color = "black";
});
github2.addEventListener("mouseleave",function(){
	github2.style.color = "orange";
});

aboutbtn.addEventListener("click",function(){
	aboutbtn.classList.add("active");
	projectsbtn.classList.remove("active");
	skillsbtn.classList.remove("active");
	contactbtn.classList.remove("active");
});
projectsbtn.addEventListener("click",function(){
	projectsbtn.classList.add("active");
	aboutbtn.classList.remove("active");
	skillsbtn.classList.remove("active");
	contactbtn.classList.remove("active");
});
skillsbtn.addEventListener("click",function(){
	skillsbtn.classList.add("active");
	projectsbtn.classList.remove("active");
	aboutbtn.classList.remove("active");
	contactbtn.classList.remove("active");
});
contactbtn.addEventListener("click",function(){
	aboutbtn.classList.remove("active");
	contactbtn.classList.remove("active");
	skillsbtn.classList.remove("active");
	contactbtn.classList.add("active");
});
