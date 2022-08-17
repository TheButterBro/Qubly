document.addEventListener('DOMContentLoaded', function () {
  // ЯКОРИ

  (function Anchors() {
    const anchors = document.querySelectorAll('[data-anch*="#"]');

    for (let anchor of anchors) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const blockID = anchor.getAttribute('data-anch').substr(1);

        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      });
    }
  })();

  // POPUP

  (function Popup() {
    const buttons = document.querySelectorAll('.login-button');
    const popup = document.querySelector('.login-popup');
    const popupBody = document.querySelector('.form__body');
    const popupLink = document.querySelector('.popup-link');
    const closeButton = document.querySelector('.form__close');
    const fade = document.querySelector('.form__fade');
    const body = document.querySelector('body');
    const arr = [fade, closeButton, popupLink];

    for (let button of buttons) {
      button.addEventListener('click', function (e) {
        e.preventDefault();

        popup.classList.remove('hidden');
        body.classList.add('no-scroll');
      });
    }

    for (let item of arr) {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        popup.classList.add('hidden');
        body.classList.remove('no-scroll');
      });
    }

    popupBody.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  })();

  //   SUBLIST
  (function Sublist() {
    const link = document.querySelector('.sublist-switch');
    const sublist = document.querySelector('.sublist');
    const items = document.querySelectorAll('.sublist__item');

    link.addEventListener('click', function (e) {
      e.preventDefault();

      sublist.classList.toggle('sublist-hidden');
    });

    items.forEach((item) => {
      item.addEventListener('click', function () {
        sublist.classList.add('sublist-hidden');
      });
    });
  })();
  //   Valid Email
  function Valid(param, color) {
    const EMAIL_REGEXP =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    const input = document.querySelector(`.${param}`);

    function isEmailValid(value) {
      return EMAIL_REGEXP.test(value);
    }

    function onInput() {
      if (isEmailValid(input.value)) {
        input.style.border = '1px solid green';
      } else {
        input.style.border = '1px solid red';
      }
    }
    input.addEventListener('focusout', function () {
      if (!input.value) {
        input.style.border = color;
      }
    });

    input.addEventListener('input', onInput);
    return isEmailValid(input.value);
  }
  Valid('email', '1px solid #8989A2');
  Valid('email_log', '1px solid #8989A2');
  Valid('newsletter__email', 'none');

  //   VALID REG
  (function ValidationReg() {
    const form = document.querySelector('.form');
    const email = document.querySelector('.email');
    const password = document.querySelector('.password');
    const passwordAgain = document.querySelector('.password-again');
    const error = document.querySelector('.submit_reg_error');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (
        Valid('email', '1px solid #8989A2') &&
        password.value != '' &&
        passwordAgain.value != '' &&
        password.value == passwordAgain.value
      ) {
        error.style.color = 'green';
        error.innerHTML = `You have successfully registered. <br> Now you can enter!`;
        email.value = '';
        password.value = '';
        passwordAgain = '';
      } else {
        error.style.color = 'red';
        error.innerHTML = `Please enter a valid Email. <br> Passwords must match!`;
      }
    });
  })();

  //   Validation Log
  (function ValidationLog() {
    const form = document.querySelector('.form_log');
    const email = document.querySelector('.email_log');
    const password = document.querySelector('.password_log');
    const error = document.querySelector('.submit_reg_error_log');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (Valid('email_log', '1px solid #8989A2') && password.value != '') {
        error.style.color = 'green';
        error.innerHTML = `You have successfully logged in!`;
        email.value = '';
        password.value = '';
      } else {
        error.style.color = 'red';
        error.innerHTML = `Please enter a valid Email. <br> Enter your password!`;
      }
    });
  })();

  // Valid News
  (function ValidationNews() {
    const email = document.querySelector('.newsletter__email');
    const button = document.querySelector('.newsletter__button');
    const error = document.querySelector('.newsletter__error');

    button.addEventListener('click', function (e) {
      if (Valid('newsletter__email', 'none')) {
        error.style.color = 'green';
        error.innerHTML = `You have subscribed to the newsletter!`;
        email.value = '';
      } else {
        error.style.color = 'red';
        error.innerHTML = `Wrong Email.`;
      }
    });
  })();
});
