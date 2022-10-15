function changeSetting(){
    var input = document.getElementById("myInput");
    var hide = document.getElementById("hide1");
    var show = document.getElementById("hide2");

    //if hidden
    if(input.type === 'password'){
        input.type = "text";
        hide.style.display = "block";
        show.style.display = "none";
    }

    else{
        input.type = "password";
        hide.style.display = "none";
        show.style.display = "block";
    }
}
