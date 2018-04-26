import template from 'lodash/template';
import Component from './Component';

const componentTemplate = template(`
  <a href="javascript:void(0)"><%= text %></a>
`);

class ListItem extends Component {
  constructor(props) {
    super(props);

    this._rootTag = 'li';
    this._rootClass = 'list-item';
    this._create();
  }

  _create() {
    this._createRoot();
    this._rootContainer.innerHTML = componentTemplate(this.props);
  }
}

export default ListItem;
