import { LogoGroup, Icon, Name, LogoLink } from './LogoFooter.styled';
import icons from '../../../assets/sprite.svg';

export default function Logo() {
  return (
    <LogoLink to="/home">
      <LogoGroup>
        <Icon>
          <use xlinkHref={`${icons}#icon-logo`} />
        </Icon>
        <Name>Drink Master</Name>
      </LogoGroup>
    </LogoLink>
  );
}
