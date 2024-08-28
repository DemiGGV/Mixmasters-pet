import { Nav, List, Item, NavigationLink } from './Navigation.styled';

const Navigation = () => {
  return (
    <Nav>
        <List id="navigation">
          <Item>
            <NavigationLink to="/home">Home</NavigationLink>
          </Item>
          <Item>
            <NavigationLink to="/drinks">Drinks</NavigationLink>
          </Item>
          <Item>
            <NavigationLink to="/add">Add drink</NavigationLink>
          </Item>
          <Item>
            <NavigationLink to="/my">My drinks</NavigationLink>
          </Item>
          <Item>
            <NavigationLink to="/favorite">Favorites</NavigationLink>
          </Item>
        </List>
    </Nav>
  );
};

export default Navigation;
