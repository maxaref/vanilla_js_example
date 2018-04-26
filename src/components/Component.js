/**
 * General component
 */
class Component {
  /**
   * Assign passed props and determine _rootTag and _rootClass properties
   *
   * @param props
   */
  constructor(props) {
    this.props = {};
    Object.assign(this.props, props);

    this._rootClass = null;
    this._rootTag = 'div';
  }

  /**
   * Create main root HTML element of current component
   * @private
   *
   * @property _rootTag - property uses as root tag's name
   * @property _rootClass - property uses as root tag's class
   *
   * @property _element - contains root HTML element
   * @property _rootContainer - link on HTML element for including child elements
   */
  _createRoot() {
    this._element = document.createElement(this._rootTag);
    this._rootContainer = this._element;

    if (this._rootClass) this._element.className = this._rootClass;
  }

  /**
   * Returns current component as Dom element
   * @returns {HTMLElement | *}
   */
  getElement() {
    return this._element;
  }
}

export default Component;
