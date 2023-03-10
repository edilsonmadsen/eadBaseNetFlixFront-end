import Head from "next/head";
import FavoriteCategory from "@/src/components/homeAuth/favoriteCategory";
import FeaturedSection from "@/src/components/homeAuth/featuresSection";
import NewestCategory from "@/src/components/homeAuth/newestCategory";
import FeaturedCategory from "@/src/components/homeAuth/featuredCategory";

const HomeAuth = function () {
  return (
    <>
      <Head>
        <title>Onebitflix - Home</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
        <FeaturedSection />
        <NewestCategory />
        <FavoriteCategory />
        <FeaturedCategory />
      </main>
    </>
  );
};

export default HomeAuth;
