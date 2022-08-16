import { FC } from "react";
import { Link } from "remix";

const Login: FC = () => {
  return (
    <div>
      <h1>Login</h1>
      <Link to={'/'}>home</Link>
    </div>
  );
}

export default Login;
