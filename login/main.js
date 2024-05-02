const container = document.getElementById('container');
const overlayCon = document.getElementById('overlayCon');
const overlayBtn = document.getElementById('overlayBtn');

overlayBtn.addEventListener('click',()=>{
    container.classList.toggle('right-panel-active');
    overlayBtn.classList.remove('btnScaled');
    window.requestAnimationFrame(()=>{
        overlayBtn.classList.add('btnScaled');

    });
});



function signUP() {
    var Name = document.getElementById('name_UP').value;
    var pass = document.getElementById('pass_UP').value;
    var mail = document.getElementById('mail_UP').value;

    if(Name.trim() === "" || Name.indexOf(" ") === -1){
        alert("Please verify your name");
        return false;
    }
    if(pass.length <= 8 || pass.trim() === ""){
        alert("Please verify your password");
        return false;
    }
    if(mail.trim() === "" || mail.indexOf("@") === -1 || mail.indexOf(".") === -1){
        alert("Please verify your email");
        return false;
    }

    return true; 
}

function signIN(){
    var mail = document.getElementById('mail_in').value;
    var pass = document.getElementById('pass_in').value;

    if(pass.length <= 8 || pass.trim() === ""){
        alert("Please verify your password");
        return false;
    }
    if(mail.trim() === "" || mail.indexOf("@") === -1 || mail.indexOf(".") === -1){
        alert("Please verify your email");
        return false;
    }

    return true; 
}
