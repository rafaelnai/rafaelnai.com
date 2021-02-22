import styled from "styled-components";

const Styled = {
  List: styled.ul`
    padding: 5rem 0;
    display: flex;
    justify-content: flex-end;
  `,
  Item: styled.li`
    margin-left: 32px;
  `,
  Anchor: styled.a`
    text-decoration: none;
    cursor: pointer;
    color: var(--font-color);
    text-transform: uppercase;
    padding: 8px 0;
    font-weight: bold;

    &:hover {
      color: var(--font-color-hover);
    }
  `,
};

export default Styled;
