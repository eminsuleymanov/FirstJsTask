

// Alert task
// var time = new Date()
// if(time.getHours()>12 && time.getHours()<18){
//     alert('Xow gelmisiniz')
//     document.body.style.backgroundColor = 'green'  

// }
// else{
//     document.body.style.backgroundColor = 'red'
//     alert('Saytin ishleme vaxti 12:00-dan 21:00-a qederdir ' )
//     alert("Girish mumkun deyil");
// }

// Dairenin sahesini
// var r = prompt('Radiusu daxil edin:');
// var sahe = Math.PI*r*r
// console.log(sahe);


// Dark mode 
function Darkmode(){
    var body = document.body;
    var button = document.getElementById("btn");
    var icon = document.getElementById("mode")
    if(body.style.backgroundColor === 'black'){
        body.style.backgroundColor = 'white'
        icon.className = "fa-solid fa-moon";
        button.style.backgroundColor = 'black'
        icon.style.color = 'white'

    }
    else{
        body.style.backgroundColor = 'black'
        icon.className = "fa-solid fa-sun";
        button.style.backgroundColor = 'white'
        icon.style.color = 'black'

    }

}