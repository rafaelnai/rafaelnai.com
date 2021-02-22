import styled from "styled-components";

type TProps = {
  background: string;
  fontColor: string;
};

const Styled = {
  Wrapper: styled.div`
    padding: 8px;
    background-color: ${({ background }: TProps) => background};
    display: inline-block;
    color: ${({ fontColor }: TProps) => fontColor};
    text-transform: uppercase;
    font-weight: bold;
    font-size: var(--font-small);
    letter-spacing: 1px;
    user-select: none;
  `,
  Anchor: styled.a`
    cursor: inherit;
    text-decoration: none;
    color: inherit;
  `,
  Content: styled.div`
    display: flex;
    align-items: flex-end;

    & svg {
      margin-right: 8px;
    }
  `,
};

export default Styled;
