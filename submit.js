// Objet verification values des inputs
class RetourValue {
  constructor(first, last, email, birthdate, quantity, location, condition) {
    this.first = first;
    this.last = last;
    this.email = email;
    this.birthdate = birthdate;
    this.quantity = quantity;
    this.location = location;
    this.condition = condition;    
  }
}

// cacher le contenu du modal au submit valide
let displayModal = () =>{
    let hiddenContent = document.querySelector('#hiddenContent');
    let button = document.querySelector('.btn-submit');
    let remerciements = document.querySelector('.remerciements');
    hiddenContent.style.display = 'none';
    remerciements.innerHTML="Merci pour</br> votre inscription";
    remerciements.setAttribute( //Ajout d'un pannel de style
      "style","margin-top : 285px; margin-bottom : 280px ; font-Size : 28px; font-weight : 400; text-align :center ;"
    );
    button.value ='Fermer';
    button.addEventListener('click', event =>{ //Ajout de la fonction "fermer modal" sur btn submit
      CloseModal();
    })
    console.log(button.value);
}


// validation send form 
let validate = (event) =>{
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
    let returnFalse = false;
    const regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // création d'une instance de retourLog pour recuperer la valeur de chaque elements
    const retourLog = new RetourValue(
      first.value,
      last.value,
      email.value,
      birthdate.value,
      quantity.value,
      location.value,
      condition.value
    );

  // cancel la redirection au clic submit
    event.preventDefault();
  
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
      returnFalse = true;
    }

    // verification que le champs nom ai un minimum de 2 caractères
    if (last.value.length < 2){
      errorLast.innerHTML="Veuillez entrer 2 caractères ou plus pour le champ du nom";
      returnFalse = true;
    }

    // verification que le champs mails soit valide
    if(!email.value.match(regexMail)){
      errorEmail.innerHTML="Veuillez entrer une adresse mail valide";
      returnFalse = true;
    }
 
    // verification qu'une date d'anniverssaire soit selectionné
    if (birthdate.value === ""){
      errorBirthdate.innerHTML="Vous devez entrer votre date de naissance";
      returnFalse = true;
    }

     // verification qu'un nombre de tournoi participé soit rempli
     if (quantity.value === ""){
       errorQuantity.innerHTML="Vous devez entrer le nombre de tournoi auquel vous avez participé";
       returnFalse = true;
     }

    // verification qu'un tournoi soit selectionné
    if (location.value === ""){
      errorLocation.innerHTML="Vous devez  choisir une option";
      returnFalse = true;
    }

     // verification que la case Conditions d'utilisation soit valide
     if (condition.checked == false){
       errorCondition.innerHTML="Vous devez vérifier que vous acceptez les termes et conditions";
       returnFalse = true;
     }
     if (returnFalse == true)
     {
       return false;
     }
     
    console.log(retourLog);
    displayModal();
    return true;
     
  }