document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.getElementById('loginForm');
    document.getElementById('loginButton').addEventListener('click', function(event) {
        event.preventDefault();
        var username = document.getElementById('loginUsername').value;
        var password = document.getElementById('loginPassword').value;
        if (username === '') {
            // If username is empty
            alert('Please enter username');
        } else if (password === '') {
            // If password is empty
            alert('Please enter password');
        } else if (username !== 'mariel') {
            // If username is incorrect
            alert('Incorrect username');
        } else if (password !== 'mjma') {
            // If password is incorrect
            alert('Incorrect password');
        } else {
            // If both username and password are correct
            window.location.href = "dashboard.html";
        }
    });
    
});
