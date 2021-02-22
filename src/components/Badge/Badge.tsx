import React from "react";
import { IconType } from "react-icons";
import { v4 as uuidv4 } from "uuid";
import Styled from "./styles";

type TProps = {
  value: string;
  Icon: IconType;
  href?: string;
  bgColor: string;
  fontColor: string;
};

const Badge: React.FC<TProps> = ({ Icon, value, href, bgColor, fontColor }) => (
  <Styled.Wrapper background={bgColor} fontColor={fontColor}>
    {
      [
        <Styled.Anchor key={uuidv4()} href={href}>
          <Styled.Content>
            <Icon /> {value}
          </Styled.Content>
        </Styled.Anchor>,
        <React.Fragment key={uuidv4()}>
          <Styled.Content>
            <Icon spacing="8px" /> {value}
          </Styled.Content>
        </React.Fragment>,
      ][Number(!href)]
    }
  </Styled.Wrapper>
);

export default Badge;
