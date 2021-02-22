import React from "react";
import Head from "next/head";
import Container from "components/Container/";
import Header from "components/Header";

const Home: React.FC = () => (
  <div>
    <Head>
      <title>Home | Rafael Nai - Desenvolvedor Front-end</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Container size="lg">
      <Header />
    </Container>
  </div>
);

export default Home;
