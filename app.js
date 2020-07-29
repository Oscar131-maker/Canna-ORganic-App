const name = document.querySelector('#names');
const course = document.querySelector('#inicio-curso');
const cedula = document.querySelector('#cedula');
const inputSubmit = document.querySelector('#inputbtn');

// Diploma
inputSubmit.addEventListener('click', () => {
    
    const name_diploma = document.querySelector('#name_diploma');
    name_diploma.innerHTML = name.value;

    const cedula_diploma = document.querySelector('#cedula_diploma');
    cedula_diploma.innerHTML = cedula.value;

    const inicio_curso = document.querySelector('#inicio_curso');
    inicio_curso.innerHTML = `<p>ASISTIÓ AL CURSO VIRTUAL EN EL MES DE ${course.value.toUpperCase()} DE 2020.</p>`;
    
});

// Login Form
const form_login = document.querySelector('#submit-login');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

form_login.addEventListener('submit', (event) => {
   event.preventDefault();
   
   //Values
   const username_validate = "cannabis_admin";
   const password_validate = "Soy_estudianteCertificado_01359";
   const username_value = username.value;
   const password_value = password.value;
   const login_section = document.querySelector('#form-login');
   const main = document.querySelector('#main');

   if(username_value == username_validate || password_value == password_validate){
     login_section.style.display = "none";
     main.style.display = "block";
   }

});

