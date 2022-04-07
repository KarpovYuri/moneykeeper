// Класс открытия popup'а
export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._popupCloseButton = this._popup.querySelector('.popup__close-button');
  }


  // Метод закрытия popup'а по нажатию Esc
  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.closePopup();
    }
  }


  // Метод открытия popup'а
  openPopup() {
    this._popup.classList.add('popup_opened');
    // Назначаем обработчик при открытии
    document.addEventListener('keydown', this._handleEscClose);
  }


  // Метод закрытия popup'а
  closePopup() {
    this._popup.classList.remove('popup_opened');
    // Удаляем обработчик при закрытии
    document.removeEventListener('keydown', this._handleEscClose);
  }



  // Назначение обработчиков событий крестику и overlay'ю
  setEventListeners() {
    this._popupCloseButton.addEventListener('click', () => {
      this.closePopup();
    });
    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        this.closePopup();
      }
    });
  }

}
