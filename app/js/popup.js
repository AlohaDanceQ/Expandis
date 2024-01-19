window.addEventListener('load', function () {

  function popupAir() {
    const footerElement = document.querySelector('footer');
    if (!footerElement) {
      alert('dont find teg footer')
    }
    else {
      let airElements = document.querySelectorAll('.popup-air');
      if (airElements.length > 0) {
        let airBtnOpen = document.querySelectorAll('.air-open-btn');
        createAirPopups()

        for (let i = 0; i < airBtnOpen.length; i++) {
          airBtnOpen[i].onclick = openAirPopup
        }
      }
      else {
        return
      }

      function createAirPopups() {
        let airConteiner = document.createElement("div");
        airConteiner.classList.add('air-conteiner');

        for (let i = 0; i < airElements.length; i++) {
          let airCloseIcon = document.createElement("div");
          airCloseIcon.classList.add('air-close');
          airElements[i].appendChild(airCloseIcon)
          airConteiner.appendChild(airElements[i])

        }
        footerElement.after(airConteiner)
      }

      function openAirPopup() {
        let currentAirPopupBtn = this.getAttribute('data-popup-current');
        let allPopups = document.querySelectorAll('.popup-air');
        let currentAirPopup = document.querySelector(`.popup-air[data-air="${currentAirPopupBtn}"]`)
        let closeAirIcon = currentAirPopup.querySelector('.air-close');
        closeAllAirPopups(allPopups);
        openAirConteiner();
        currentAirPopup.classList.add('air-popup_active');

        closeAirIcon.addEventListener('click', function () {
          currentAirPopup.classList.remove('air-popup_active');
          closeAirConteiner()
        })
      }


      function openAirPopupForForm(curretnDonePopup) {
        let allPopups = document.querySelectorAll('.popup-air');
        let currentAirPopup = document.querySelector(`.popup-air[data-air="${curretnDonePopup}"]`)
        let closeAirIcon = currentAirPopup.querySelector('.air-close');
        closeAllAirPopups(allPopups);
        openAirConteiner();
        currentAirPopup.classList.add('air-popup_active');

        closeAirIcon.addEventListener('click', function () {
          currentAirPopup.classList.remove('air-popup_active');
          closeAirConteiner()
        })

      }



      function openAirConteiner() {
        let airConteier = document.querySelector('.air-conteiner');
        airConteier.classList.add('air-conteiner_active');
      }

      function closeAllAirPopups(allPopups) {
        for (let i = 0; i < allPopups.length; i++) {
          allPopups[i].classList.remove('air-popup_active');
        }
      }
      function closeAirConteiner() {
        let airConteier = document.querySelector('.air-conteiner');
        airConteier.classList.remove('air-conteiner_active');
      }

      function sendFormDone() {
        let allPopups = document.querySelectorAll('.popup-air');
        let curretnDonePopup = 'send__form';
        closeAllAirPopups(allPopups)
        openAirPopupForForm(curretnDonePopup);
        setTimeout(function () {
          closeAllAirPopups(allPopups)
          setTimeout(closeAirConteiner, 1000);

        }, 3000);
      }

      function sendFormDone2() {
        let allPopups = document.querySelectorAll('.popup-air');
        let curretnDonePopup = 'send__form-revi';
        closeAllAirPopups(allPopups)
        openAirPopupForForm(curretnDonePopup);
        setTimeout(function () {
          closeAllAirPopups(allPopups)
          setTimeout(closeAirConteiner, 1000);

        }, 3000);
      }



      //Успешная отправка формы
      document.addEventListener('wpcf7mailsent', function (event) {
        if ('6' == event.detail.contactFormId) {
          sendFormDone();

        }
        if ('336' == event.detail.contactFormId) {
          sendFormDone();

        }
        if ('338' == event.detail.contactFormId) {
          sendFormDone2();

        }
      }, false);
    }
  }
  popupAir()


  function videoLoad() {
    let videoBtn = document.querySelectorAll('.video-btn');
    for (let i = 0; i < videoBtn.length; i++) {
      videoBtn[i].addEventListener('click', function () {
        let videoUrl = this.getAttribute('data-video-src');
        let closeVideoBtn = document.querySelector('.video-popup').closest('.popup-air').querySelector('.air-close');
        document.querySelector('.video-popup iframe').setAttribute('src', videoUrl)
        closeVideoBtn.addEventListener('click', function () {
          setTimeout(function () {
            document.querySelector('.video-popup iframe').setAttribute('src', '')
          }, 800)
        });
      })
    }
  }
  videoLoad()

}, false);

