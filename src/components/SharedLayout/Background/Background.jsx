import {
  ContainerLayout,
  GradientContainer,
  CircleContainer,
} from './Background.styled';

const Background = ({ children }) => {
  return (
    <>
      {children}
      <ContainerLayout />
      <GradientContainer />
      <CircleContainer />
    </>
  );
};

export default Background;
