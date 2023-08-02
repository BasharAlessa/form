const firstName = document.getElementById("first-name")
const lastName = document.getElementById("last-name")
const email = document.getElementById("email")
const btn= document.getElementById("form-button")
const tableBody = document.getElementById("table-body")
const err = document.getElementById('err');

let users = [];

btn.addEventListener('click', function(e){
    e.preventDefault();
    tableBody.innerHTML="";
    if (firstName.value ==="" || lastName.value ==="" ||email===""){
        err.innerHTML="All fields are required"
    } else {
        let userObj={
            firstName : firstName.value,
            lastName : lastName.value,
            email: email.value
        }
        users.push(userObj);
        firstName.value = "";
        lastName.value = "";
        email.value = "";
        
    }
// adding to html
    for(let i=0 ; i<users.length; i++){
        let newRaw = document.createElement("tr")
        let userOrder = document.createElement("th")
        userOrder.innerHTML= i+1
        let userFullName= document.createElement("td")
        userFullName.innerHTML=users[i].firstName + "" +users[i].lastName
        let userEmail = document.createElement("td")
        userEmail.innerHTML = users[i].email

        // Add th,td,td as children to tr
        newRaw.appendChild(userOrder);
        newRaw.appendChild(userFullName);
        newRaw.appendChild(userEmail);
        
        // Add tr as a child to tbody
        tableBody.appendChild(newRaw);


    }
})