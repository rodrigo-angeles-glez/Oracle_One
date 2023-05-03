const text_encriptar = document.querySelector('#text-encriptar');
const btn_encriptar = document.querySelector('#encriptar');
const btn_desencriptar = document.querySelector('#desencriptar');
const clas_encriptar = document.querySelector('.text-info-desencriptar');
const btn_right = document.querySelector('.buttons-right');
const monito = document.querySelector('#monito');
var msj_error = document.querySelector('#error');
const clas_desencriptado = document.querySelector('.text-info-desencriptado');
var msj_desencriptado = document.querySelector('#text-desencriptar');
const btn_copiar = document.querySelector('#copiar');

btn_encriptar.addEventListener('click', encriptar);
function encriptar() {
  var texto = text_encriptar.value;
  console.log(texto);
  const formato = /[A-Z\u00C0-\u017F`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  if(texto.length > 0){
    if (formato.test(texto)) {
      msj_error.innerText = 'No puedes ingresar caracteres especiales';
      text_encriptar.value = '';
      console.log('No puedes ingresar caracteres especiales');
      } else {
          const vocales = ['a','e','i','o','u'];
          const conversion = ['ai','enter','imes','ober','ufat'];
          var texto2 = '';
          var bandera = false;
          for(let i = 0; i < texto.length; i ++){
            for(let j = 0; j < vocales.length; j ++){
              switch (texto.charAt(i)){
                case vocales[j]:
                  texto2 += conversion[j];
                  bandera = true;
                break;            
              }
          }
          if(bandera){
            texto2 +='';
            bandera = false;
          }else{
            texto2 += texto.charAt(i);
          }
        }
        msj_desencriptado.innerText = texto2;
        console.log(texto2);
        text_encriptar.value = '';
        clas_encriptar.classList.add('inactivo');
        monito.classList.add('inactivo');
        clas_desencriptado.classList.add('activo');
        btn_right.classList.add('activo');

    }
  }else{
    msj_error.innerText = 'Debes Ingresar al menos un caracter valido';
    text_encriptar.value = '';
    console.log('Debes Ingresar al menos un caracter valido');
  }
  
}
btn_desencriptar.addEventListener('click', desencriptar);
function desencriptar() {
  var texto = text_encriptar.value;
  console.log(texto);
  const formato = /[A-Z\u00C0-\u017F`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  if(texto.length > 0){
    if (formato.test(texto)) {
      msj_error.innerText = 'No puedes ingresar caracteres especiales';
      text_encriptar.value = '';
      console.log('No puedes ingresar caracteres especiales');
    }else{
      var mapObj = {
        ai:"a",
        enter:"e",
        imes:"i",
        ober:"o",
        ufat:"u"
        };
        texto = texto.replace(/ai|enter|imes|ober|ufat/g, function(matched){
          return mapObj[matched];
        });
        msj_desencriptado.innerText = texto;
        console.log(texto)
        text_encriptar.value = '';
        clas_encriptar.classList.add('inactivo');
        monito.classList.add('inactivo');
        clas_desencriptado.classList.add('activo');
        btn_right.classList.add('activo');
    }
  }else{
    msj_error.innerText = 'Debes Ingresar al menos un caracter valido';
    text_encriptar.value = '';
    console.log('Debes Ingresar al menos un caracter valido');
  }

}