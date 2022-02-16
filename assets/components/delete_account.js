var a = document.querySelector('[data-delete]');

a.addEventListener('click', e => {
    e.preventDefault()
    if (confirm("Êtes-vous sûr de vouloir supprimer cette image ?")) {
        fetch(a.getAttribute('href'), {
            method: 'DELETE',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ '_token': a.dataset.token })
        }).then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert(data.success)
                } else {
                    alert(data.error)
                }
            })
            .catch(e => alert(e))
    } 
})