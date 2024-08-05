function get_cookie(cookie_name) {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name === cookie_name) {
            return decodeURIComponent(value);
        }
    }
    return null;
}
var add_name_form;
var greet_message;
var greetings
document.addEventListener('DOMContentLoaded', (event) => {
    var app = document.getElementsByClassName("app");
    // if the user has a cookie, show them greetings
    var username = get_cookie("username");
    add_name_form = document.getElementsByClassName('add_name_form')[0];
    greetings = document.getElementsByClassName('greetings')[0];
    greet_message = document.getElementsByClassName('greet_message')[0];
    if (username) {
        add_name_form.style.display = 'none';
        greet_message.innerHTML = `Hi, ${username}`;
        greetings.style.display = 'block';
    } else {
        add_name_form.style.display = 'block';
        greetings.style.display = 'none';
    }
})

function handle_name_submit() {
    const name_input = document.getElementById("name_input")
    const name = name_input.value;
    document.cookie = `username=${name}; path=/; max-age=31536000; SameSite=Strict`;
    add_name_form.style.display = 'none';
    greet_message.innerHTML = `Hi, ${name}`;
    greetings.style.display = 'block';
    // Hide the name input form
}