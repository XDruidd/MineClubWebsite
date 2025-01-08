// Intersection Observer API

// настройки
let options = {
    root: null,
    rootMargin: '5px',
    threshold: 0.5
  };
  
  // функция обратного вызова
  let callback = function(entries, observer) {
    entries.forEach(entry => {
      // если элемент является наблюдаемым
      if (entry.isIntersecting) {
        console.log('find', entry);
        // добавим класс active к нему
        entry.target.classList.add('activ');
      }
      if (entry.isIntersecting) {
        console.log('find', entry);
        // добавим класс active к нему
        entry.target.classList.add('activ1');
      }
      if (entry.isIntersecting) {
        console.log('find', entry);
        // добавим класс active к нему
        entry.target.classList.add('activ2');
      }
    });
  };
  
  // наблюдатель
  let observer = new IntersectionObserver(callback, options);
  
  // определяем элементы, за которыми наблюдаем
  let targets = document.querySelectorAll('.foot_line');
  targets.forEach(target => {
    observer.observe(target);
  });

  let targets1 = document.querySelectorAll('.none_hr');
  targets1.forEach(target1 => {
    observer.observe(target1);
  });  

  let targets2 = document.querySelectorAll('.line');
  targets2.forEach(target2 => {
    observer.observe(target2);
  });
