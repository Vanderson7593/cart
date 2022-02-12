import { Cart } from "@components";
import type { NextPage } from "next";
import Head from "next/head";
import ProductsMap from "@mocks/under.json";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Codeby cart under</title>
      </Head>

      <main>
        <Cart response={ProductsMap} />
      </main>
    </div>
  );
};

export default Home;
