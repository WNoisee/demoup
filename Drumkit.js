
function button(){ 
    document.addEventListener("keypress", e=>{
        if (e.key == "d"){
            handleClick4();
        }
        if (e.key == "j"){
            handleClick5();
        }
        if (e.key == "k"){
            handleClick6();
        }
        if (e.key == "l"){
            handleClick7();
        }
        switch(e.key){
            case "w":
                handleClick1();
                break
            case "a":
                handleClick2();
            case "s":
                handleClick3();
            default:
                break
        }
        console.log(e.key)
    })
    var butt1 = document.getElementById("wdrum");
    var butt2 = document.getElementById("adrum");
    var butt3 = document.getElementById("sdrum");
    var butt4 = document.getElementById("ddrum");
    var butt5 = document.getElementById("jdrum");
    var butt6 = document.getElementById("kdrum");
    var butt7 = document.getElementById("ldrum");
    butt1.onclick = handleClick1;
    butt2.onclick = handleClick2;
    butt3.onclick = handleClick3;
    butt4.onclick = handleClick4;
    butt5.onclick = handleClick5;
    butt6.onclick = handleClick6;
    butt7.onclick = handleClick7;
}

function handleClick1(){
    var audioDrum1 = new Audio("drum1.mp3")
    audioDrum1.play()
}

function handleClick2(){
    var audioDrum2 = new Audio("drum2.mp3")
    audioDrum2.play()
}

function handleClick3(){
    var audioDrum3 = new Audio("drum3.mp3")
    audioDrum3.play()
}

function handleClick4(){
    var audioDrum4 = new Audio("drum4.mp3")
    audioDrum4.play()
}
function handleClick5(){
    var audioDrum5 = new Audio("drum5.mp3")
    audioDrum5.play()
}
function handleClick6(){
    var audioDrum6 = new Audio("drum6.mp3")
    audioDrum6.play()
}
function handleClick7(){
    var audioDrum7 = new Audio("drum7.mp3")
    audioDrum7.play()
}


window.onload = button;


