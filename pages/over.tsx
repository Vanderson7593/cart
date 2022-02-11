import { Cart } from "@components";
import type { NextPage } from "next";
import Head from "next/head";
import ProductsMap from "@mocks/over-ten.json";

const Over: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Codeby cart over</title>
      </Head>

      <main>
        <Cart response={ProductsMap} />
      </main>
    </div>
  );
};

export default Over;
