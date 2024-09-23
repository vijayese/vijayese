document.getElementById('email-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    fetch('/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, subject, message })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('result').classList.remove('hidden');
        } else {
            alert('Failed to send email');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to send email');
    });
});
