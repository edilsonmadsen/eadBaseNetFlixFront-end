import Head from "next/head";
import styles from "../styles/HomeNotAuth.module.scss";

const HomeNotAuth = () => {
  return (
    <>
      <Head>
        <title>Onebitflix</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <meta property="og:title" content="Onebitflix" key="title" />
      <meta
        name="description"
        content="Tenha acesso aos melhores conteúdos sobre programação de uma forma simples e fácil."
      ></meta>
      <main></main>
    </>
  );
};

export default HomeNotAuth;
