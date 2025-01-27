
document.addEventListener("DOMContentLoaded", () => {
  const swiper1 = new Swiper('.swiper1', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    loopAdditionalSlides: 2, // Это увеличит количество слайдов для зацикливания
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      400: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      550: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      770: {
        slidesPerView: 2.4,
        spaceBetween: 20,
      },
      950: {
        slidesPerView: 2.9,
        spaceBetween: 20,
      },

      1330: {
        slidesPerView: 3.5,
        spaceBetween: 20,
      },
      1630: {
        slidesPerView: 3.5,
        spaceBetween: 40,
      },
      1830: {
        slidesPerView: 2.8,
        spaceBetween: 40,
      },
      2540: {
        slidesPerView: 3.7,
        spaceBetween: 20,
      },
    },
  });


  const swiper2 = new Swiper('.swiper2', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    loopAdditionalSlides: 2,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      400: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      550: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      770: {
        slidesPerView: 2.2,
        spaceBetween: 20,
      },
      950: {
        slidesPerView: 2.4,
        spaceBetween: 20,
      },
      1270: {
        slidesPerView: 2.8,
        spaceBetween: 20,
      },
      1460: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1560: {
        slidesPerView: 3.5,
        spaceBetween: 20,
      },
      1760: {
        slidesPerView: 3.9,
        spaceBetween: 20,
      },
      1900: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      2540: {
        slidesPerView: 5.5,
        spaceBetween: 10,
      },
    },
  });

  const swiper3 = new Swiper('.swiper3', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    loopAdditionalSlides: 2,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      400: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      550: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      770: {
        slidesPerView: 2.2,
        spaceBetween: 20,
      },
      950: {
        slidesPerView: 2.4,
        spaceBetween: 20,
      },
      1270: {
        slidesPerView: 2.8,
        spaceBetween: 20,
      },
      1460: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1560: {
        slidesPerView: 3.5,
        spaceBetween: 20,
      },
      1760: {
        slidesPerView: 3.9,
        spaceBetween: 20,
      },
      1900: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      2540: {
        slidesPerView: 5.5,
        spaceBetween: 10,
      },
    },
  });







  const restGenderBtn = document.querySelectorAll('.modal__gender-model');
  const btnRegistr = document.querySelector('.modal__button-registr');
  const modelWrapper1 = document.querySelector('.modal__wrapper');
  const modelWrapper2 = document.querySelector('.modal__wrapper2');

  const modelBtn = document.querySelectorAll('.modal__btn');



  const restBtn = document.querySelectorAll('.modal__gender');
  const hotspotModelWrapper1 = document.querySelector('.hotspot-modal__wrapper');
  const hotspotModelWrapper2 = document.querySelector('.hotspot-modal__wrapper2');
  const hotspotModelBtns = document.querySelectorAll('.hotspot-modal__btn');
  const hederBtn = document.querySelector('.heder__wrapper-log');
  const btnAll = document.querySelectorAll('.btn');
  const hotspotbtnRegistr = document.querySelector('.hotspot-modal__registr');


  let currentHotspotWrapper = 1; // Начальное значение
  let intervalIdHotspot; // Переменная для хранения ID таймера
  
  // Функция переключения видимости
  const toggleHotspotModelWrapper = () => {
    if (currentHotspotWrapper === 1) {
      hotspotModelWrapper1.style.display = 'none';
      hotspotModelWrapper2.style.display = 'flex';
      currentHotspotWrapper = 2;
    } else {
      hotspotModelWrapper1.style.display = 'flex';
      hotspotModelWrapper2.style.display = 'none';
      currentHotspotWrapper = 1;
    }
  };
  
  // Функция для запуска интервала
  const startInterval = () => {
    intervalIdHotspot = setInterval(toggleHotspotModelWrapper, 3000);
  };
  
  // Функция для остановки интервала
  const stopInterval = () => {
    clearInterval(intervalIdHotspot);
  };
  
  // Запуск интервала при загрузке
  startInterval();
  
  // Остановка и перезапуск интервала по клику
  hotspotModelWrapper1.addEventListener('click', () => {
    stopInterval(); 
  });
  
  hotspotModelWrapper2.addEventListener('click', () => {
    stopInterval(); 
  });
  
  hederBtn.addEventListener('click', () => {
    stopInterval(); 
  });
  btnAll.forEach((item)=>{
    item.addEventListener('click', () => {
      stopInterval(); 
    });
  })


  modelBtn.forEach((item, index) => {
    item.addEventListener('click', () => {
      if (index % 2 === 0) {  // Если индекс четный
        modelWrapper2.style.display = 'flex';
        modelWrapper1.style.display = 'none';
      } else {  // Если индекс нечетный
        modelWrapper1.style.display = 'flex';
        modelWrapper2.style.display = 'none';
      }
    });
  });

  hotspotModelBtns.forEach((item, index) => {
    item.addEventListener('click', () => {
      if (index % 2 === 0) {  // Если индекс четный
        hotspotModelWrapper2.style.display = 'flex';
        hotspotModelWrapper1.style.display = 'none';
      } else {  // Если индекс нечетный
        hotspotModelWrapper1.style.display = 'flex';
        hotspotModelWrapper2.style.display = 'none';
      }
    });
  });




  let currentWrapper = 3;
  let intervalId;  // Переменная для хранения ID таймера

  const toggleWrappers = () => {
    if (currentWrapper === 1) {
      modelWrapper1.style.display = 'none';
      modelWrapper2.style.display = 'flex';
      currentWrapper = 2;
    } else {
      modelWrapper1.style.display = 'flex';
      modelWrapper2.style.display = 'none';
      currentWrapper = 1;
    }
  };







  // Функция для открытия и закрытия модального окна
  function bindModal(trigger, modal, close) {
    const triggers = document.querySelectorAll(trigger);
    const modals = document.querySelectorAll(modal);
    const closes = document.querySelectorAll(close);

    const body = document.body;

    triggers.forEach(trigger => {
      trigger.addEventListener('click', e => {
        e.preventDefault();
        modals.forEach(modal => {
          modal.style.display = 'flex';
        });
        body.classList.add('locked');
        // Запуск переключения оберток автоматически каждые 3 секунды
        
        intervalId = setInterval(toggleWrappers, 3000);
        
      });
    });

    closes.forEach(close => {
      close.addEventListener('click', () => {
        modals.forEach(modal => {
          modal.style.display = 'none';
        });
        body.classList.remove('locked');
        modelWrapper1.style.display = 'none';
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
        clearInterval(intervalId);  // Остановка таймера
      });


    });

    modals.forEach(modal => {
      modal.addEventListener('click', e => {
        if (e.target === modal) {
          modal.style.display = 'none';
          body.classList.remove('locked');
          clearInterval(intervalId);  // Остановка таймера
        } else {
          clearInterval(intervalId);
        }
      });
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        modals.forEach(modal => {
          modal.style.display = 'none';
        });
        body.classList.remove('locked');
        clearInterval(intervalId); // Остановка таймера
      }
    });
  }

  // Пример использования:
  bindModal('.heder__wrapper-log', '.modal__wrapper2', '.modal__close');
  bindModal('.btn', '.modal__wrapper2', '.modal__close');
  bindModal('.modal__wrapper2 + .modal__wrapper', '.modal__wrapper', '.modal__close');


  restBtn.forEach((item, index) => {
    item.addEventListener('click', () => {
      // Делаем кнопки выбора пола активными или неактивными
      if (index === 0) {
        restBtn[0].classList.add('active');
        restBtn[1].classList.remove('active');
      }
      if (index === 1) {
        restBtn[1].classList.add('active');
        restBtn[0].classList.remove('active');
      }
    });
  });


  restGenderBtn.forEach((item, index) => {
    item.addEventListener('click', () => {
      // Делаем кнопки выбора пола активными или неактивными
      if (index === 0) {
        restGenderBtn[0].classList.add('active');
        restGenderBtn[1].classList.remove('active');
      }
      if (index === 1) {
        restGenderBtn[1].classList.add('active');
        restGenderBtn[0].classList.remove('active');
      }
    });
  });




  // Добавляем маску для ввода даты (DD/MM/YYYY)
  document.querySelector('.modal__data').addEventListener('input', function (event) {
    let value = this.value.replace(/\D/g, '');  // Убираем все нецифровые символы

    // Добавляем слэш после 2 символов (ДД)
    if (value.length >= 2) {
      value = value.slice(0, 2) + '/' + value.slice(2);
    }
    // Добавляем слэш после 5 символов (ММ)
    if (value.length >= 5) {
      value = value.slice(0, 5) + '/' + value.slice(5);
    }

    // Ограничиваем длину строки до 10 символов (DD/MM/YYYY)
    this.value = value.slice(0, 10);
  });



  /// Проверка при отправке формы
  btnRegistr.addEventListener('click', (e) => {
    e.preventDefault();  // Отменяем стандартное отправление формы, чтобы провести проверку

    const nameInput = document.getElementById('nameInputx').value;
    const dobInput = document.getElementById('dobInputx').value;
    const termsCheckbox = document.getElementById('termsCheckboxx').checked;

    // Проверка имени
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(nameInput)) {
      alert("Имя должно содержать только буквы и пробелы.");
      return;
    }

    // Проверка даты (DD/MM/YYYY)
    const dobRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if (!dobRegex.test(dobInput)) {
      alert("Введите правильную дату в формате DD/MM/YYYY.");
      return;
    }

    // Проверка согласия с условиями
    if (!termsCheckbox) {
      alert("Вы должны согласиться с условиями использования и политикой конфиденциальности.");
      return;
    }

    // Проверка выбора пола
    
    const restBtn  = document.querySelectorAll('.modal__gender-model');


    const selectedGender = Array.from(restBtn).find(item => item.classList.contains('active'));
    if (!selectedGender) {
      alert("Выберите ваш пол.");
      return;
    }

    // Если все проверки пройдены
    const congratulation = document.querySelector('.congratulation__wrapper');
    congratulation.classList.add('active');

    if (modelWrapper1 && modelWrapper2) {
      modelWrapper1.style.display = 'none';
      modelWrapper2.style.display = 'none';
    }

    setTimeout(() => {
      congratulation.classList.remove('active');
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      location.reload();
    }, 3000);
  });







   // Добавляем маску для ввода даты (DD/MM/YYYY) modal global 
   document.querySelector('.hotspot-modal__data').addEventListener('input', function (event) {
    let value = this.value.replace(/\D/g, '');  // Убираем все нецифровые символы

    // Добавляем слэш после 2 символов (ДД)
    if (value.length >= 2) {
      value = value.slice(0, 2) + '/' + value.slice(2);
    }
    // Добавляем слэш после 5 символов (ММ)
    if (value.length >= 5) {
      value = value.slice(0, 5) + '/' + value.slice(5);
    }

    // Ограничиваем длину строки до 10 символов (DD/MM/YYYY)
    this.value = value.slice(0, 10);
  });



  /// Проверка при отправке формы  ----- modal global 
  hotspotbtnRegistr.addEventListener('click', (e) => {
    e.preventDefault();  // Отменяем стандартное отправление формы, чтобы провести проверку

    const nameInput = document.getElementById('nameInput').value;
    const dobInput = document.getElementById('dobInput').value;
    const termsCheckbox = document.getElementById('termsCheckbox').checked;

    // Проверка имени
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(nameInput)) {
      alert("Имя должно содержать только буквы и пробелы.");
      return;
    }

    // Проверка даты (DD/MM/YYYY)
    const dobRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if (!dobRegex.test(dobInput)) {
      alert("Введите правильную дату в формате DD/MM/YYYY.");
      return;
    }

    // Проверка согласия с условиями
    if (!termsCheckbox) {
      alert("Вы должны согласиться с условиями использования и политикой конфиденциальности.");
      return;
    }

    // Проверка выбора пола

    const selectedGender = Array.from(restBtn).find(item => item.classList.contains('active'));
    if (!selectedGender) {
      alert("Выберите ваш пол.");
      return;
    }

    // Если все проверки пройдены
    const congratulation = document.querySelector('.congratulation__wrapper');
    congratulation.classList.add('active');

    if (modelWrapper1 && modelWrapper2) {
      modelWrapper1.style.display = 'none';
      modelWrapper2.style.display = 'none';
    }

    setTimeout(() => {
      congratulation.classList.remove('active');
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      location.reload();
    }, 3000);
  });



});















