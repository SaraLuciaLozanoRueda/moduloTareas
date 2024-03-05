const tareasInput = document.getElementById('tareas');
const responsableInput = document.getElementById('responsable');
const inicioInput = document.getElementById('inicio');
const finInput = document.getElementById('fin');
const prioridadSelect = document.getElementById('prioridad');
const agregarButton = document.getElementById('agregar');
const tareasPendientesDiv = document.querySelector('.mostrador div:nth-child(1)');
const tareasCompletadasDiv = document.querySelector('.mostrador div:nth-child(2)');
const tareasFallidasDiv = document.querySelector('.mostrador div:nth-child(3)');


function agregarTarea() {

    const tarea = tareasInput.value;
    const responsable = responsableInput.value;
    const inicio = inicioInput.value;
    const fin = finInput.value;
    const prioridad = prioridadSelect.value;

    const nuevaTareaElemento = document.createElement('li');
    nuevaTareaElemento.textContent = `${tarea} - ${responsable} - ${inicio} - ${fin} - ${prioridad}`;

    const botonEliminar = document.createElement('button');
    botonEliminar.textContent ='Eliminar';
    botonEliminar.addEventListener('click', function() {
        nuevaTareaElemento.remove();
    });
    botonEliminar.addEventListener('click', function() {
        nuevaTareaElemento.remove();
    });

    nuevaTareaElemento.appendChild(botonEliminar);

    tareasPendientesDiv.appendChild(nuevaTareaElemento);

    tareasInput.value = '';
    responsableInput.value = '';
    inicioInput.value = '';
    finInput.value = '';
}

agregarButton.addEventListener('click', agregarTarea);
