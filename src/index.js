import './styles/index.scss';
import MyList from './components/MyList';
import FriendList from './components/FriendList';
import Categories from './components/Categories';
import { myInterests, friendInterests } from './data';

const initMyInterests = () => {
  const myCategories = new Categories({
    ...myInterests,
    ItemComponent: MyList,
  });

  window.my_interests.appendChild(myCategories.getElement());
};

const initFriendInterests = () => {
  const friendCategories = new Categories({
    ...friendInterests,
    ItemComponent: FriendList,
  });

  window.friend_interests.appendChild(friendCategories.getElement());
};

window.onload = () => {
  initMyInterests();
  initFriendInterests();
};
