import A from "../components/A";


const Users = ({users}) => {

  return (
    <div>
      <div className="navbar">
        <A href={"/"} text={"Main"} />
        <A href={"/users"} text={"Users"} />
        <A href={"/blog"} text={"Blog"} />
      </div>
      <h1>Users List</h1>
      <ul>
        {users.map(user => 
          <li key={user.id}>
           <A href={`/users/${user.id}`} text={user.name} />
          </li>
        )}
      </ul>
      <style jsx>
        {`
          .navbar {
            display: flex;
            gap: 8px;
            background: orange;
            padding: 16px;
          }
        `}
      </style>
    </div>
  );
};

export default Users;


export async function getServerSideProps(context) {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  return {
    props: {users},
  }
}