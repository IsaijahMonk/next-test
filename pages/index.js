
import A from "../components/A";
import Head from "next/head";


const index = () => {
  return (
    <>
      <Head>
        <meta keywords="test, nest, next"></meta>
        <title>Main Page</title>
      </Head>
      <div>
        <div className="navbar">
          <A href={"/"} text={"Main"} />
          <A href={"/users"} text={"Users"} />
          <A href={"/blog"} text={"Blog"} />
        </div>
        <h1>Main Page</h1>
        <style jsx>
          {`
            .navbar {
              display: flex;
              gap: 8px;
              background: lightgreen;
              padding: 16px;
            }
          `}
        </style>
      </div>
    </>
  );
};

export default index;