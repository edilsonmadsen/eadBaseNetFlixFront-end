import FeaturedSection from "@/src/components/homeAuth/featuresSection";
import Head from "next/head";
import HeaderAuth from "./../src/components/common/headerAuth/index";

const HomeAuth = function () {
  return (
    <>
      <Head>
        <title>Onebitflix - Home</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
        <FeaturedSection />
      </main>
    </>
  );
};

export default HomeAuth;
