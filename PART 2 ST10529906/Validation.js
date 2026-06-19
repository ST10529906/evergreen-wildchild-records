function handleEnquiry() {

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let phone = document.getElementById("phone").value;
let service = document.getElementById("service").value;

let response = document.getElementById("response");

if(name.length < 3){
response.innerHTML = "Name too short.";
return false;
}

if(email.indexOf("@") === -1){
response.innerHTML = "Invalid email.";
return false;
}

if(phone.length < 10){
response.innerHTML = "Invalid phone number.";
return false;
}

if(service === ""){
response.innerHTML = "Please select a service.";
return false;
}

// PRICING LOGIC (IMPORTANT MARKS)

if(service === "recording"){
response.innerHTML = "Recording Session: From R500 per hour.";
}
else if(service === "mixing"){
response.innerHTML = "Mixing: From R350 per track.";
}
else if(service === "mastering"){
response.innerHTML = "Mastering: From R200 per track.";
}
else if(service === "artist"){
response.innerHTML = "Artist Development: Custom pricing based on package.";
}

return false;
}