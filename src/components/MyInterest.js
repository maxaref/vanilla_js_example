import template from 'lodash/template';
import ListItem from './ListItem';

const componentTemplate = template(`
  <a 
    class="list-item__action-btn"
    href="javascript:void(0)"
  >
    <i class="icon icon__close"></i>
  </a>
  <a
    class="list-item__link"
    href="javascript:void(0)"
  >
    <%= text %>
  </a>
`);

class MyInterest extends ListItem {
  _create() {
    this._createRoot();
    this._rootContainer.innerHTML = componentTemplate(this.props);

    const addButton = this._element.querySelector('.list-item__action-btn');
    addButton.onclick = () => this.props.removeItem(this._element);
  }
}

export default MyInterest;
