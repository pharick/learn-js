function checkAge1(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge2(age) {
    return age > 18 || confirm('Родители разрешили?');
}

alert(checkAge1(7));
