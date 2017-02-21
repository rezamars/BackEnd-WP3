/**
 * Created by Soniiqaah on 2017-02-08.
 */

var el = document.getElementById('username');
var elMsg = document.getElementById('feedback');
var elButton = document.getElementById('sendForm');
var el2 = document.getElementById('pass');
var el3 = document.getElementById('confirmpass');

function checkForm() {

    // Declare variables
    var username = el.value;
    var password = el2.value;
    var confirmpass = el3.value;

    if (username.length < 5) {
        elMsg.textContent = 'The username is not long enough, please try again';

    } else {
        elMsg.textContent = '';

        if (password.length < 5) {
            elMsg.textContent = ' You have to at least type in six characters for the password';

        } else if
        (password != confirmpass) {
            elMsg.textContent = "The both password must match!";

        } else {
            elMsg.textContent = ' You are logged in!';
        }
    }
}


elButton.addEventListener('click', checkForm, false);

