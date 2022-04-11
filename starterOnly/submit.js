
// validation send form 
let validate = () =>{
    let first = document.forms["reserve"]["first"];
    let last = document.forms["reserve"]["last"];
    let email = document.forms["reserve"]["email"];
    let birthdate = document.forms["reserve"]["birthdate"];
    let quantity = document.forms["reserve"]["quantity"];
    let location = document.forms["reserve"]["location"];
    let condition = document.forms["reserve"]["checkbox1"];
    let errorFirst = document.querySelector('.errorFirst');
    let errorLast = document.querySelector('.errorLast');
    let errorEmail = document.querySelector('.errorEmail');
    let errorBirthdate = document.querySelector('.errorBirthdate');
    let errorQuantity = document.querySelector('.errorQuantity');
    let errorLocation = document.querySelector('.errorLocation');
    let errorCondition = document.querySelector('.errorCondition');  
    const regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
    // Reset des champs error au clic submit
    errorFirst.innerHTML="";
    errorLast.innerHTML="";
    errorEmail.innerHTML="";
    errorBirthdate.innerHTML="";
    errorQuantity.innerHTML="";
    errorLocation.innerHTML="";
    errorCondition.innerHTML="";

    // verification que le champs prénom ai un minimum de 2 caractères
    if (first.value.length < 2){
      errorFirst.innerHTML="Veuillez entrer 2 caractères ou plus pour le champ du prénom";
      return false;
    }

    // verification que le champs nom ai un minimum de 2 caractères
    else if (last.value.length < 2){
      errorLast.innerHTML="Veuillez entrer 2 caractères ou plus pour le champ du nom";
      return false;
    }

    // verification que le champs mails soit valide
    else if(!email.value.match(regexMail)){
      errorEmail.innerHTML="Veuillez entrer une adresse mail valide";
      return false;
    }
 
    // verification qu'une date d'anniverssaire soit selectionné
    else if (birthdate.value === ""){
      errorBirthdate.innerHTML="Vous devez entrer votre date de naissance";
      return false;
    }

     // verification qu'un nombre de tournoi participé soit rempli
     else if (quantity.value === ""){
       errorQuantity.innerHTML="Vous devez entrer le nombre de tournoi auquel vous avez participé";
       return false;
     }

    // verification qu'un tournoi soit selectionné
    else if (location.value === ""){
      errorLocation.innerHTML="Vous devez  choisir une option";
      return false;
    }

     // verification que la case Conditions d'utilisation soit valide
     else if (condition.checked == false){
       errorCondition.innerHTML="Vous devez vérifier que vous acceptez les termes et conditions";
       return false;
     }
    alert("Merci ! Votre réservation a été reçue.")
    return true;
  }