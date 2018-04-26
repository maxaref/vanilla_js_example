import template from 'lodash/template';
import ListItem from './ListItem';

const componentTemplate = template(`
<div class="feedback-popup">
  <div class="feedback-popup__container">
    <a href="javascript:void(0)" class="feedback-popup__close-button"><i class="icon icon__close"></i></a>
    <form id="feedback_popup__form">
      <div class="feedback-popup__line">
        <label class="feedback-popup__label">Категория</label>
        <input class="feedback-popup__input" type="text" name="category" value="<%= category %>" readonly />
      </div>
      <div class="feedback-popup__line">
        <label class="feedback-popup__label">Название</label>
        <input class="feedback-popup__input" type="text" name="name" value="<%= text %>" readonly />
      </div>
      <textarea class="feedback-popup__complaint" name="complaint" id="" cols="30" rows="10"></textarea>
      <input type="button" class="feedback-popup__submit" value="Пожаловаться">
    </form>
  </div>
</div>
`);


/**
 *  Creates Complaint popup in #popup container
 *  Clear #popup content with every closing
 */
class Complaint extends ListItem {
  _create() {
    this._createRoot();
    this._rootContainer.innerHTML = componentTemplate(this.props);
    this._append();

    const submitButton = this._element.querySelector('.feedback-popup__submit');
    submitButton.onclick = () => {
      // some action
      Complaint._clearPopup();
    };

    const closeButton = this._element.querySelector('.feedback-popup__close-button');
    closeButton.onclick = Complaint._clearPopup;
  }

  static _clearPopup() {
    window.popup.innerHTML = '';
  }

  _append() {
    Complaint._clearPopup();
    window.popup.appendChild(this._element);
  }
}

export default Complaint;
