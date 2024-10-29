const btn = document.querySelector("#btn") ;
const app = document.querySelector("#app");

getNotes().forEach((note)=>{
    const noteEl = createNote(note.id, note.content);
    app.insertBefore(noteEl , btn );
})



function createNote(id ,content){
    const element = document.createElement("textarea");
    element.classList.add("note") ;
    element.placeholder = "Empty note" ;
    element.value = content ;
    element.addEventListener("dblclick", ()=>{
        const warning = confirm("Do you want to delete this Note?");
        if(warning){
            deleteNote(id, element);
        }
    })
    element.addEventListener("input",()=>{
        updateNote(id, element.value)
    });
    return element;
}


function deleteNote(id, element){
    const notes = getNotes().filter((note) =>note.id != id)
    saveNote(notes);
    app.removeChild(element);
}


function updateNote(id, content){   
    const notes = getNotes();
    const target = notes.filter((note) =>note.id == id)[0];
    target.content = content;
    saveNote(notes);
}


function getNotes(){
    return JSON.parse(localStorage.getItem("note-app") || "[]");
}

function saveNote(note){
    localStorage.setItem("note-app", JSON.stringify(note));
}


function addNote(){

    const notes = getNotes();
    const noteObj = {
        id : Math.floor(Math.random() * 100000),
        content : "",
    };
    const note = createNote(noteObj.id, noteObj.content);
    app.insertBefore(note , btn );
    notes.push(noteObj)
    saveNote(notes);
}


btn.addEventListener("click", addNote);
