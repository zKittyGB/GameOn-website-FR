// validation send form 
let validate = () =>{
    let first = document.forms["reserve"]["first"];
    let last = document.forms["reserve"]["last"];
    let email = document.forms["reserve"]["email"];
    let quantity = document.forms["reserve"]["quantity"];
    let location = document.forms["reserve"]["location"];
    let errorFirst = document.querySelector('.errorFirst');
    let errorLast = document.querySelector('.errorLast');
    let errorEmail = document.querySelector('.errorEmail');
    let errorQuantity = document.querySelector('.errorQuantity');
    let errorLocation = document.querySelector('.errorLocation');
    
    if (first.value === "")
    {
      errorFirst.innerHTML="Champs obligatoire!";
      return false;
    }

    else if (first.value.length < 2)
    {
      errorFirst.innerHTML="Plus de deux caracètres obligatoire";
      return false;
    }

    if (last.value === "")
    {
      errorLast.innerHTML="Champs obligatoire!";
      return false;
    }

    else if (last.value.length < 2)
    {
      errorLast.innerHTML="Plus de deux caracètres obligatoire";
      return false;
    }

    else if (email.value ==="")
    {
      errorEmail.innerHTML="Champs obligatoire!";
      return false;
    }

    else if (email.value.indexOf("@",0) <0)
    {
      errorEmail.innerHTML="Mettez une adresse mail valide!";
      return false;
    }
    else if (email.value.indexOf(".", 0) < 0)                 
    { 
      errorEmail.innerHTML="Mettez une adresse mail valide!";
      return false; 
    }   

        

    return true;
  }