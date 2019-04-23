
function displayuser(){

     let username = {

          fname: document.getElementById('firstname') . value,
          lname: document.getElementById('lastname') . value
     }
     

     document.getElementById('show') .innerHTML= "Full Name:  " + username.fname+" "+username.lname;
}