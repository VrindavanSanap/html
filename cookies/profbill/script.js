document.addEventListener('DOMContentLoaded', (event) => {
    var app = document.getElementsByClassName("app");
    // if the user is old show him greetings
})
function handle_name_submit() {
    const name_input = document.getElementById("email_input")
    const email = name_input.value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    if (!emailPattern.test(email)) {
        const error_elm= document.querySelector('.invalid_email_error');
        error_elm.style.display = 'block';
        return;
    }
    
    // If email is valid, you can proceed with further actions
    console.log('Valid email:', email);
}