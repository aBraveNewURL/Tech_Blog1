async function deleteFormHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/notes/${id}`, {
        method: 'DELETE'
    });
        
    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        displayModal(response.statusText);
        // alert(response.statusText);
    }
}

document.querySelector('.delete-note-btn').addEventListener('click', deleteFormHandler);