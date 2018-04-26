import ParentComponent from './ParentComponent';
import FriendInterest from './FriendInterest';

class MyList extends ParentComponent {
  constructor(props) {
    super(props);

    this.props.ItemComponent = FriendInterest;

    this.childProps = {
      category: this.props.text,
      addItemToMyList: this._addItemToMyList.bind(this),
    };

    this._rootClass = 'list';
    this._rootTag = 'ul';

    this._create();
  }

  _addItemToMyList(item) {
    const event = new CustomEvent('addFriendInterest', {
      detail: {
        category: this.props.code,
        item,
      },
    });
    document.dispatchEvent(event);
  }
}

export default MyList;
