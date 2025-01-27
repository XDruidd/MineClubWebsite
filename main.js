let navigation = document.getElementById('navigation');
let bodyId = document.getElementById("#body")

let clic = document.querySelector('#clic');
let clic1 = document.querySelector('.clic1');

let nav_fon = document.querySelector(".nav_fon")
let animation = document.querySelector('#animation')

const scrollController = {
    scrollPosition: 0,
    disabledScroll() {
      scrollController.scrollPosition = window.scrollY;
      document.body.style.cssText = `
        overflow: hidden;
        position: fixed;
        top: -${scrollController.scrollPosition}px;
        left: 0;
        height: 100vh;
        width: 100vw;
      `;
    },
    enabledScroll() {
      document.body.style.cssText = '';
      window.scroll({ top: scrollController.scrollPosition });
    },
  };
  
clic.onclick = () => {
    animation.style.opacity = 1;
    navigation.style.opacity = 1;

    // Если меню скрыто
    if (navigation.style.display === "none" || !navigation.style.display) {
        // Заблокировать скролл
        document.body.style.overflow = "hidden";

        // Показать фон и анимацию
        navigation.style.display = "block";
        animation.style.display = "block";

        // Установить начальные стили
        animation.style.opacity = 0;
        animation.style.transform = "scale(0.8)";
        animation.style.transition = "opacity 0.3s ease, transform 0.5s ease";

        setTimeout(() => {
            // Анимация появления
            animation.style.opacity = 1;
            animation.style.transform = "scale(1)";
        }, 0);
    } else {
        // Анимация скрытия
        animation.style.transition = "opacity 0.3s ease, transform 0.5s ease";
        animation.style.opacity = 0;
        animation.style.transform = "scale(0.8)";

        setTimeout(() => {
            // Скрыть элементы после завершения анимации
            animation.style.display = "none";
            navigation.style.display = "none";

            // Разблокировать скролл
            document.body.style.overflow = "auto";

            // Сбрасываем стили, чтобы не "прятать" элементы
            animation.style.opacity = 1;
            animation.style.transform = "scale(1)";
        }, 300);
    }

    // Обновить состояние класса для фона
    setTimeout(() => {
        nav_fon.classList.toggle("one-showed");
    }, 0);
};



clic1.onclick = () => {
    if(navigation.style.display == "block"){
        
        animation.animate([
            { opacity: 0, transform: 'scale(1)' },
            { opacity: 1, transform: 'scale(0.8)' }
        ],
        scrollController.enabledScroll(),
        {
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
 
