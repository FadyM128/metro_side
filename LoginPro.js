var admins = [
    "martina",
    "marleen",
    "mina",
    "fady",
    12345678910
];
var check = false;

function compare() {
    var name = login.Username.value;
    var pass = login.password.value;
    for (var i = 0; i < 4; i++) {
        if (name == admins[i] && pass == admins[4]) {
            window.location.href = "admin.html";
            check = true;
            break;
        }
    }

    if (check == false)

        window.location.href = "Booking.html";


}