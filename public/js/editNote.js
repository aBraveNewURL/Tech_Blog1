async function editFormHandler(event) {
    event.preventDefault();
    
    const title = document.querySelector('input[name="note-title"]').value.trim();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    
    const response = await fetch(`/api/notes/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        displayModal(response.statusText);
        // alert(response.statusText);
    }
}

document.querySelector('.edit-note-form').addEventListener('submit', editFormHandler);