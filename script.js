(function() {
  console.log('hello')

  var notes = [];

  var textArea = document.getElementById('text-area');
  var addButton = document.getElementById('add-note');
  var deleteButton = document.getElementById('remove-note');



  addButton.addEventListener('click', function() {
    var note = textArea.value;
    console.log(note);
    notes.push(note);



  });

  function appendNote(note) {
  }


})()