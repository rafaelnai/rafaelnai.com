import Head from "next/head";
import styles from "styles/Home.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Rafael Nai - Desenvolvedor Front-end</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Typescript</h1>
    </div>
  );
};

export default Home;
