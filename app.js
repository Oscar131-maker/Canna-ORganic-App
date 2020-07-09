const name = document.querySelector('#names');
const course = document.querySelector('#inicio-curso');
const cedula = document.querySelector('#cedula');
const inputSubmit = document.querySelector('#inputbtn');


inputSubmit.addEventListener('click', () => {
    
    const name_diploma = document.querySelector('#name_diploma');
    name_diploma.innerHTML = name.value;

    const cedula_diploma = document.querySelector('#cedula_diploma');
    cedula_diploma.innerHTML = cedula.value;

    const inicio_curso = document.querySelector('#inicio_curso');
    inicio_curso.innerHTML = `<p>ASISTIÓ AL CURSO VIRTUAL EN EL MES DE ${course.value.toUpperCase()} DE 2020.</p>`;
    
});



