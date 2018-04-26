import template from 'lodash/template';
import ParentComponent from './ParentComponent';
import MyInterest from './MyInterest';

const componentTemplate = template(`
  <div class="categories__form">
    <input class="categories__form-input" type="text" placeholder="добавьте любимую <%= text %>" />
    <input class="categories__form-button" type="button" value="Добавить" />
  </div>
  <ul class="list"></ul>
`);

class MyList extends ParentComponent {
  constructor(props) {
    super(props);

    this.props.ItemComponent = MyInterest;
    this.childProps = {
      removeItem: this.removeItem.bind(this),
    };

    this._create();
  }

  _createRoot() {
    super._createRoot();

    this._rootContainer.innerHTML = componentTemplate(this.props);
    this._rootContainer = this._rootContainer.querySelector('.list');
  }

  _create() {
    super._create();
    this._element.querySelector('.categories__form-button').onclick = this._onFormSubmit.bind(this);

    this.addFriendInterest = this.addFriendInterest.bind(this);
    document.addEventListener('addFriendInterest', this.addFriendInterest);
  }

  /**
   * For future
   *
   * @private
   */
  _onRemove() {
    document.removeEventListener('addFriendInterest', this.addFriendInterest);
  }

  addFriendInterest(e) {
    if (e.detail.category !== this.props.code) return;

    this.appendItem(e.detail.item);
  }

  _onFormSubmit() {
    const input = this._element.querySelector('.categories__form-input');
    const text = input.value;
    if (!text) return;

    this.appendItem({ text });
    input.value = '';
  }
}

export default MyList;
