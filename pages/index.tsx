import CardsSection from "@/src/components/homeNoAuth/cardsSection";
import HeaderNoAuth from "@/src/components/homeNoAuth/headerNoAuth";
import PresentationSection from "@/src/components/homeNoAuth/presentationSection";
import Head from "next/head";
import styles from "../styles/HomeNoAuth.module.scss";

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
      <main>
        <div className={styles.sectionBackground}>
          <HeaderNoAuth />
          <PresentationSection />
        </div>
        <CardsSection />
      </main>
    </>
  );
};

export default HomeNotAuth;
