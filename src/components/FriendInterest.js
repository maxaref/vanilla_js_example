import template from 'lodash/template';
import ListItem from './ListItem';
import Complaint from './Complaint';

const SHOW_DONE_STATUS_TIME = 1500;

const componentTemplate = template(`
  <a 
    class="list-item__action-btn list-item__icon_add"
    href="javascript:void(0)"
  >
    +
  </a>
  <i class="list-item__icon_ok icon icon__ok"></i>
  <a
    class="list-item__link"
    href="javascript:void(0)"
  >
    <%= text %>
  </a>
    <a 
    class="list-item__complain"
    href="javascript:void(0)"
  >
    <i class="list-item__icon_warn icon icon__warn"></i>
    Пожаловаться
  </a>
`);

class FriendInterest extends ListItem {
  _create() {
    this._createRoot();
    this._rootContainer.innerHTML = componentTemplate(this.props);

    const addButton = this._element.querySelector('.list-item__action-btn');
    addButton.onclick = this._addItem.bind(this);

    const complainButton = this._element.querySelector('.list-item__complain');
    complainButton.onclick = this._complain.bind(this);
  }

  _complain() {
    new Complaint(this.props);
  }

  _addItem() {
    this.props.addItemToMyList(this.props);

    this._element.classList.add('list-item_added');
    setTimeout(() => this._element.classList.remove('list-item_added'), SHOW_DONE_STATUS_TIME);
  }
}

export default FriendInterest;
