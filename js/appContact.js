// \u0040 @  \u00AF -  \u005F guion bajo
// \u0020 espacio  \u002E .  \u003F cPregunta  \u00BF aPregunta
// \u00C1 Á  \u00C9 É  \u00CD Í  \u00D3 Ó  \u00DA Ú  \u00D1 Ñ
// \u00E1 á  \u00E9 é  \u00ED í  \u00F3 ó  \u00FA ú  \u00F1 ñ

function validar(number){
  const minLength = 3;
  const patternLetters = new RegExp('^[A-Za-z\u0020]+$');
  const patternNumbers = new RegExp('^[0-9\u0020]+$');
  const patternMail = new RegExp('^[0-9A-Za-z\u0040\u002E\u00AF\u005F\u00C1\u00C9\u00CD\u00D3\u00DA\u00D1\u00E1\u00E9\u00ED\u00F3\u00FA\u00F1]+$');
  const patternText = new RegExp('^[0-9A-Za-z\u0020\u002E\u003F\u00BF\u00C1\u00C9\u00CD\u00D3\u00DA\u00D1\u00E1\u00E9\u00ED\u00F3\u00FA\u00F1]+$');

  if (number == 1){ //Validacion del nombre
    const input = document.getElementById('nameUser');
    const message = document.getElementById('messageName');
    let isValid = true;
    input.willValidate = true;

    if (!input.value){
      isValid = true;
    } else{
      if(input.value.length < minLength){
        isValid = false;
      } else{
        if(!patternLetters.test(input.value)){
          isValid = false;
        } else{
          isValid = true;
        }
      }
    }

    if(!isValid){
      message.hidden = false;
    } else{
      message.hidden = true;
    }
  } else if (number == 2){ //Validacion de apellidos
    const input = document.getElementById('lastnameUser');
    const message = document.getElementById('messageLastname');
    let isValid = true;
    input.willValidate = true;

    if (!input.value){
      isValid = true;
    } else{
      if(input.value.length <= minLength){
        isValid = false;
      } else{
        if(!patternLetters.test(input.value)){
          isValid = false;
        } else{
          isValid = true;
        }
      }
    }

    if(!isValid){
      message.hidden = false;
    } else{
      message.hidden = true;
    }
  } else if (number == 3){ //Validacion de numero celular ONLY NUMBER
    const input = document.getElementById('phoneUser');
    const message = document.getElementById('messagePhone1');
    let isValid = true;
    input.willValidate = true;

    if (!input.value){
      isValid = true;
    } else{
      if(!patternNumbers.test(input.value)){
        isValid = false;
      } else{
        isValid = true;
      }
    }

    if(!isValid){
      message.hidden = false;
    } else{
      message.hidden = true;
    }
  } else if (number == 4){ //Validacion de numero celular LENGTH
    const input = document.getElementById('phoneUser');
    const message = document.getElementById('messagePhone2');
    const minLengthPhone = 10;
    let isValid = true;
    input.willValidate = true;

    if (!input.value){
      isValid = true;
    } else if(input.value > 0 && input.value.length < minLengthPhone){
      isValid = false;
    } else{
      isValid = true;
    }

    if(!isValid){
      message.hidden = false;
    } else{
      message.hidden = true;
    }

  } else if (number == 5){ //Validacion de correo electronico
    const input = document.getElementById('emailUser');
    const message = document.getElementById('messageEmail');
    let isValid = true;
    input.willValidate = true;


    if(!isValid){
      message.hidden = false;
    } else{
      message.hidden = true;
    }
  } else if (number == 6){ //Validacion de la descripción
    const input = document.getElementById('descriptionUser');
    const message = document.getElementById('messageDescription');
    let isValid = true;
    input.willValidate = true;

    if (!input.value){
      isValid = true;
    } else{
      if(!patternText.test(input.value)){
        isValid = false;
      } else{
        isValid = true;
      }
    }

    if(!isValid){
      message.hidden = false;
    } else{
      message.hidden = true;
    }
  }
}

//  Envio de la informacion al mail
const btn = document.getElementById('button-submit');
const form = document.getElementById('formContact');


form.addEventListener('submit', function(event){
  event.preventDefault();

  btn.textContent = 'Enviando...';

  const serviceID = 'default_service';
  const templateID = 'template_ndxdo68';

  emailjs.sendForm(serviceID, templateID, this).then(() => {
    btn.innerHTML = 'Enviar <i class="fa fa-paper-plane" aria-hidden="true"></i>';
    alert('información enviada.');
    form.reset();
  }, (err) => {
    btn.innerHTML = 'Enviar <i class="fa fa-paper-plane" aria-hidden="true"></i>';
    alert(JSON.stringify(err));
    form.reset();
  });

});
