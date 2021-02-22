import React, { useMemo } from "react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import Styled from "./styles";

type TProps = {
  items: TNavigationItem[];
};

type TNavigationItem = {
  href: string;
  label: string;
};

const Navigation: React.FC<TProps> = ({ items = [] }) => (
  <Styled.List>
    {useMemo(
      () =>
        items.map(({ href, label }) => (
          <Styled.Item key={uuidv4()}>
            <Link href={href} passHref>
              <Styled.Anchor>{label}</Styled.Anchor>
            </Link>
          </Styled.Item>
        )),
      [items],
    )}
  </Styled.List>
);

export default Navigation;
