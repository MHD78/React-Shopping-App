import Signup from "../components/Signup";

const SignupPage = ({ match }) => {
  return (
    <div>
      <Signup status={match.url} />
    </div>
  );
};

export default SignupPage;
