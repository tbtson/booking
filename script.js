const phone = document.getElementById('num');
var date1 = document.getElementById('datein');
var date2 = document.getElementById('dateout');

var check_phone = /^[0-9]{10}$/;

function StringMatch(txt, reg){
    return reg.test(txt.value);
}

function validform(f){

    if(!StringMatch(phone, check_phone)){
        alert("Invalid Phone Number!");
        return;
    }

    if( date1.value > date2.value ){
        alert('Invalid Check-out Date!');
        return;
    }

    alert('Booking Succesful!');
}