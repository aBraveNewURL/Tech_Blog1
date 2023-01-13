async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="note-title"]').value;
    const note_text = document.querySelector('textarea[name="note-body"]').value;

    const response = await fetch(`/api/notes`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            note_text
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        displayModal(response.statusText);
        // alert(response.statusText);
    }
}
  
document.querySelector('.new-note-form').addEventListener('submit', newFormHandler);
