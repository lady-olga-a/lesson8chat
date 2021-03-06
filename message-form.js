class MessageForm {

  constructor(el) {
    this.el = el;
    this.init();
  }

  init() {
    this.el.addEventListener('submit', event => {
      event.preventDefault();
      const data = {
        subject: this.el.elements.subject.value,
        text: this.el.elements.text.value,
      };

      fetch('https://lesson15test.herokuapp.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(res => {
        /**
         * Добавить очистку формы после успешной отправки 
         * Также надо подумать, как сообщить списку, что ему нужно обновится
         */
        console.log('its ok');
      }).catch(err => {
        alert('not ok');
      })
    });
  }

}