import A from "../components/A";

const Blog = () => {
  return (
    <div>
      <div className="navbar">
        <A href={"/"} text={"Main"} />
        <A href={"/users"} text={"Users"} />
        <A href={"/blog"} text={"Blog"} />
      </div>
      <h1>Blog</h1>
      <style jsx>
        {`
          .navbar {
            display: flex;
            gap: 8px;
            background: lightblue;
            padding: 16px;
          }
        `}
      </style>
    </div>
  );
};

export default Blog;