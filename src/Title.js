import React from "react";

const Title = () => {
  return (
    <TitleContainer>
      <Title></Title>
      <Line></Line>
      <Content></Content>
      {props.children}
    </TitleContainer>
  );
};

export default Title;
