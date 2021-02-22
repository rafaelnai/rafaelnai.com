import React from "react";
import Navigation from "components/Navigation";
import Badge from "components/Badge";
import { SiTypescript } from "react-icons/si";
import Styled from "./styles";

const arr = [
  { href: "/about", label: "About me" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

const Header: React.FC = () => (
  <Styled.Header>
    <Navigation items={arr} />

    <Styled.Title>Hi there 👋</Styled.Title>

    <div>
      <Badge bgColor="#007acc" fontColor="#ffffff" Icon={SiTypescript} value="TypeScript" />
    </div>
  </Styled.Header>
);

export default Header;
