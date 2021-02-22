import styled from "styled-components";

type TProps = {
  size?: "lg" | "md" | "sm";
};

const sizes = {
  sm: "auto",
  md: "720px",
  lg: "1200px",
};

const Styled = {
  Container: styled.div`
    width: 100%;
    max-width: ${({ size }: TProps) => sizes[size ?? "lg"]};
    margin: 0 auto;
  `,
};

export default Styled;
