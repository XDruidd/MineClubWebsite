let navigation = document.getElementById('navigation');
let bodyId = document.getElementById("#body")

let clic = document.querySelector('#clic');
let clic1 = document.querySelector('.clic1');

let nav_fon = document.querySelector(".nav_fon")


 
clic.onclick = () => {
    if(navigation.style.display == "block"){
        navigation.style.display = "none";
    }
    else{
        navigation.style.display = "block";
    }

    setTimeout(()=>{
      nav_fon.classList.toggle("one-showed")
    }, 0)
}
clic1.onclick = () => {
    if(navigation.style.display == "block"){
        navigation.style.display = "none";
    }
    else{
        navigation.style.display = "block";
        
    }
     //пощаем переключение класса в очередь после отрисовки.
    setTimeout(()=>{
      nav_fon.classList.toggle("one-showed")
    }, 0)
}
 
