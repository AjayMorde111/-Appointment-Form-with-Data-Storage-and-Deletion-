document.getElementById("appointmentForm").addEventListener("submit", function(event) {
  event.preventDefault();


  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var age = document.getElementById("age").value;
  var gender = document.getElementById("gender").value;


  var appointmentDetails = document.createElement("div");
  appointmentDetails.className = "appointment-details";

  
  appointmentDetails.innerHTML = `
    <h2>Appointment Details</h2>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Time:</strong> ${time}</p>
    <p><strong>First Name:</strong> ${firstName}</p>
    <p><strong>Last Name:</strong> ${lastName}</p>
    <p><strong>Age:</strong> ${age}</p>
    <p><strong>Gender:</strong> ${gender}</p>
    <button class="delete-button"style="background-color:red">Delete</button>`;


  document.body.appendChild(appointmentDetails);


  document.getElementById("appointmentForm").reset();

  const appointmentData = {
    date: date,
    time: time,
    firstName: firstName,
    lastName: lastName,
    age: age,
    gender: gender
  };


  localStorage.setItem('appointmentData', JSON.stringify(appointmentData));
});


var storedData = localStorage.getItem('appointmentData');


if (storedData) {

  var appointmentData = JSON.parse(storedData);


  var date = appointmentData.date;
  var time = appointmentData.time;
  var firstName = appointmentData.firstName;
  var lastName = appointmentData.lastName;
  var age = appointmentData.age;
  var gender = appointmentData.gender;

  console.log(date, time, firstName, lastName, age, gender);
}


document.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-button')) {
    var appointmentDetails = event.target.parentElement;
    appointmentDetails.remove();
    localStorage.removeItem('appointmentData');
  }
});