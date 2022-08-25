import Head from "next/head";
import Page from "../components/Page";
import getQueryUrl from "../utils/getQueryUrl";

export default function Home() {
  const { page, limit, search } = getQueryUrl();

  console.log({ page, limit, search });

  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <div style={{ display: "none" }}>
          <Page page={page - 1} limit={limit} search={search} />
        </div>

        <div>
          <Page page={page} limit={limit} search={search} />
        </div>

        <div style={{ display: "none" }}>
          <Page page={page + 1} limit={limit} search={search} />
        </div>
      </main>
    </div>
  );
}
