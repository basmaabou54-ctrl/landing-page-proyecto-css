
const formulario = document.querySelector('#formContacto');
const inputNombre = document.querySelector('#nombre');
const inputEmail = document.querySelector('#email');
const inputMensaje = document.querySelector('#mensaje');
const mensajeExito = document.querySelector('#mensajeExito');

const todosLosInputs = [inputNombre, inputEmail, inputMensaje];


formulario.addEventListener('submit', (event) => {
  
    event.preventDefault();


    const formData = new FormData(event.target);
    const datos = Object.fromEntries(formData);

    let hayError = false;

  
    const mostrarError = (input) => {
        input.classList.add('error'); // Border rojo
        input.nextElementSibling.classList.add('visible'); 
        hayError = true;
    };

    
    
   
    if (datos.nombre.trim() === '') {
        mostrarError(inputNombre);
    }

  
    if (datos.email.trim() === '' || !datos.email.includes('@')) {
        mostrarError(inputEmail);
    }

 
    if (datos.mensaje.trim() === '') {
        mostrarError(inputMensaje);
    }

   
    if (!hayError) {
        mensajeExito.classList.add('visible'); // mendaje de éxito
        formulario.reset(); 
    }
});

//quittar error en tiempo real
todosLosInputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.value.trim() !== '') {
            input.classList.remove('error');
            input.nextElementSibling.classList.remove('visible');
            
        //quittar mensaje de éxito si el usuario empieza a escribir de nuevo
            mensajeExito.classList.remove('visible');
        }
    });
});

const bannieres = document.querySelectorAll('.banner-categoria');

bannieres.forEach(banniere => {
    banniere.addEventListener('click', () => {
        const galerie = banniere.nextElementSibling;
        galerie.classList.toggle('activo');
    });
});