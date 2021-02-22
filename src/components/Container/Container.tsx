import React from "react";
import Styled from "./styles";

type TProps = {
  size?: "lg" | "md" | "sm";
};

const Container: React.FC<TProps> = ({ size, children }) => <Styled.Container size={size}>{children}</Styled.Container>;

export default Container;
