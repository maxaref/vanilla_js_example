import Component from './Component';

/**
 * General functionality for append/remove children items
 */
class ParentComponent extends Component {
  /**
   *
   * @param {Object} props
   * @param {Object[]} props.items
   * @param {String} props.items.text - default item text
   *
   * @property {Object} childProps - properties for children
   */
  constructor(props) {
    super(props);

    if (!this.props.items) this.props.items = [];
    this.childProps = {};
  }

  /**
   * General component's create method, creating root element and items
   *
   * @private
   *
   * @property props.ItemComponent class of item component
   */
  _create() {
    this._createRoot();
    this.props.items.forEach(item => this._appendItem(item));
  }

  _appendItem({ text }) {
    const ItemComponent = new this.props.ItemComponent({ ...this.childProps, text });
    this._rootContainer.appendChild(ItemComponent.getElement());
  }

  appendItem(item) {
    this.props.items.push(item);
    this._appendItem(item);
  }

  removeItem(el) {
    this.props.items = this.props.items.filter(({ text }) => text !== el.textContent);
    el.remove();
  }
}

export default ParentComponent;
