let navigation = document.getElementById('navigation');
let bodyId = document.getElementById("#body")

let clic = document.querySelector('#clic');
let clic1 = document.querySelector('.clic1');

let nav_fon = document.querySelector(".nav_fon")
let animation = document.querySelector('#animation')

 
clic.onclick = () => {
    if(navigation.style.display == "block"){    
        navigation.style.display = "none";
        animation.animate([
            { opacity: 1, transform: 'scale(1)' },
            { opacity: 0, transform: 'scale(0.9)' }
        ], {
            duration: 300,
            easing: 'ease'
        }).onfinish = () => {
            animation.style.display = 'none';
        };
    }
    else{
        navigation.style.opacity = 1; 
        navigation.style.display = "block";
        animation.animate([
            { opacity: 0, transform: 'scale(0.9)' },
            { opacity: 1, transform: 'scale(1)' }
        ], {
            duration: 300,
            easing: 'ease'
        });
    }

    setTimeout(()=>{
      nav_fon.classList.toggle("one-showed")
    }, 0)
}
clic1.onclick = () => {
    if(navigation.style.display == "block"){
        
        animation.animate([
            { opacity: 0, transform: 'scale(1)' },
            { opacity: 1, transform: 'scale(0.8)' }
        ], {
            duration: 300,
            easing: 'ease'
        }).onfinish = () => {

        };
        navigation.style.transition = "opacity 0.3s ease, transform 0.3s ease";  // Плавное изменение opacity и transform
        navigation.style.opacity = 0;  
        setTimeout(() => {
            navigation.style.border = "none";
            navigation.style.display = "none";
            
        }, 300); 
    }
    else{
        navigation.style.display = "block";

    }
    setTimeout(()=>{
      nav_fon.classList.toggle("one-showed")
    }, 0)
}
 
