(function() {
  console.log('hello')

  var notes = [];
  var currentNoteIndex = 0;

  var textArea = document.getElementById('text-area');
  var addButton = document.getElementById('add-note');
  var clearButton = document.getElementById('clear-note');
  var notesContainer = document.getElementById('notes-container');


  addButton.addEventListener('click', function() {
    var note = textArea.value;
    if(note) {
      notes.push(note);
      appendNote(note);
    }
  });
  

  function appendNote(note) {
    var noteDiv = document.createElement('div');
    noteDiv.setAttribute("class", "note");
    var notePara = document.createElement('p');

    notePara.innerText = note;
    noteDiv.appendChild(notePara);
    notePara.id = currentNoteIndex;
    currentNoteIndex++;

    notesContainer.appendChild(noteDiv);
    console.log(notes)
    textArea.value = "";
  }



})()

