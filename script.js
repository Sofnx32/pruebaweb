function addNote(){
    const noteInput = document.getElementById('noteInput');
    const noteList = document.getElementById('noteList');

    if(noteInput.value.trim() !== ""){
        const newNote = document.createElement('li');
        const noteContenido = document.createElement('span');
        newNote.textContent = noteInput.value;
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar'
        botonEliminar.classList.add('botonEliminar');
        botonEliminar.onclick = function(){
            noteList.removeChild(newNote);
        }
        newNote.appendChild(noteContenido);
        newNote.appendChild(botonEliminar);
        noteList.appendChild(newNote);
        noteInput.value = "";
    }else{
        alert("Por favor, escriba una nota antes de agregar")
    }
}

   


    
    
