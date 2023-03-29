
/*This java script  allows us to have the log in hover button its allows us to open and close the pop up text*/

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
const image_input = document.querySelector("#imga");


/*This java script allows us to provide a small slide show in the profile image section it allows us to give the user more options */
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {//we use arryas to allow the user to switch between the profile pictures
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
/*this allows the user top create and send a email to a user  */
function openemail() {
  document.getElementById("email").style.display = "block";
}

function closeemail() {
  document.getElementById("email").style.display = "none";
}

function opentime() {
  document.getElementById("time").style.display = "block";
}

function closetime() {
  document.getElementById("time").style.display = "none";
}





/*this allows use to validate the profile informatiom */
function validateForm() {
  var at = document.getElementById("email4").value.indexOf("@");/*this checks if the email is valide */
  var fname = document.getElementById("fname").value;/*this checks if the character is more than 10 */
  var lname = document.getElementById("lname").value;/*this checks if the character is more than 10 */
  var password=document.getElementById("Password").value;/*users enters password*/
  var re_password=document.getElementById("re-password")/*user enters password again */
  submitOK = "true";

  /*the if hecks if the password and re-password are the same */
  if(password==re_password)
  {
    submitOK="true";
  }
  if (document.getElementById('Password').value !=
          document.getElementById('re-password').value) {//if the passwords are not true the alert pop up is displayed
            alert("passwords do not match");
            submitOK='false';
          }else{
              
            }
  if (fname.length > 10) {//if fname is greater than 10 characters 
    alert("The name may have no more than 10 characters");//the following alert is printed
    submitOK = "false";
  } 

  if (lname.length>10) {//if lname is greater than 10 characters 
    alert("the surname may have no more than 10 characters");//the following alert is printed
    submitOK = "false";
  }


  if (at == -1) {//if the @ is not in the email 
    alert("Not a valid e-mail!");//the following is printed
    submitOK = "false";
  }
  

    
    
  if (submitOK == "false") {
    return false;
  }
  
  else(submitOK=="true")//if user enters eveything correctly the following is displayed
  { 
    alert("YOUR PROFILE HAS BEEN CREATED");//action pop up 
    return true;
  }
}
function validateForm2() {
  var at = document.getElementById("email6").value.indexOf("@");/*this checks if the email is valide */
 
  var fname = document.getElementById("fname").value;/*this checks if the character is more than 10 */
  var lname = document.getElementById("lname").value;/*this checks if the character is more than 10 */
  
  submitOK = "true";

 
  if (fname.length > 10) {//if fname is greater than 10 characters 
    alert("The name may have no more than 10 characters");//the following alert is printed
    submitOK = "false";
  } 

  if (lname.length>10) {//if lname is greater than 10 characters 
    alert("the surname may have no more than 10 characters");//the following alert is printed
    submitOK = "false";
  }


  if (at == -1) {//if the @ is not in the email 
    alert("Not a valid e-mail!");//the following is printed
    submitOK = "false";
  }
  

    
    
  if (submitOK == "false") {
    return false;
  }
  if(submitOK=="true"){//if user enters eveything correctly the following is displayed
    alert("your form has been send");//action pop up 
    return true;
  }
}




