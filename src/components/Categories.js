import template from 'lodash/template';
import ParentComponent from './ParentComponent';

const componentTemplate = template(`
  <div class="categories__container"></div>
  <a href="javascript: void(0);" class="categories__show-all-button">Еще <%= count %> увлечений</a>
`);

const itemTemplate = template(`
    <div class="categories__header"><span><%= text %></span></div>
    <div class="categories__item_container"></div>
`);

const SHORT_ITEMS_COUNT = 1;

class Categories extends ParentComponent {
  constructor(props) {
    super(props);

    this._rootClass = (SHORT_ITEMS_COUNT < this.props.items.length ? 'categories_short' : 'categories');
    this._create();
  }

  _createRoot() {
    super._createRoot();

    this._rootContainer.innerHTML = componentTemplate({ count: this.props.items.length - 1 });
    this._rootContainer = this._element.querySelector('.categories__container');

    this._element.querySelector('.categories__show-all-button').onclick = this._showAll.bind(this);
  }

  _showAll() {
    this._element.classList.remove('categories_short');
    this._element.classList.add('categories');
  }

  static _createItemContainer(item) {
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('categories__item');
    itemContainer.innerHTML = itemTemplate(item);

    return itemContainer;
  }

  _appendItem(item) {
    const itemContainer = Categories._createItemContainer(item);

    const ItemComponent = new this.props.ItemComponent(item);
    itemContainer
      .querySelector('.categories__item_container')
      .appendChild(ItemComponent.getElement());

    this._rootContainer.appendChild(itemContainer);
  }
}

export default Categories;
