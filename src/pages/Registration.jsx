import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate, Link } from "react-router-dom";
import Error from "../Components/Error";
import Title from "../components/Title";
const Registration = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { registerUser } = useContext(AuthContext);
  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(name, email, password);
    try {
      if (email.length == 0 || password.length == 0) {
        setError("Email and password can not be empty");
        return;
      }
      const result = await registerUser(email, password);
      const user = result?.user;
      console.log(user);
      if (user?.email) {
        navigate("/");
        setError("");
      }
    } catch (error) {
      console.log(error);
      setError(error?.message);
    }
  };

  return (
    <div className="w-full mt-10 max-w-md p-4 rounded-md shadow sm:p-8 bg-gray-900 text-gray-100 mx-auto ">
       <Title  match={"Registration"}/>
      <h2 className="mb-3 text-3xl font-semibold text-center">
        Create an account
      </h2>
      <p className="text-sm text-center text-gray-400">
        Already have account?
        <Link to={"/login"} className="focus:underline hover:underline">
          Login
        </Link>
      </p>

      <form
        onSubmit={handleRegister}
        className="space-y-8 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm">
              Name
            </label>
            <input
              // onChange={(e) => setEmail(e.target.value)}
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm">
              Image Url
            </label>
            <input
              // onChange={(e) => setEmail(e.target.value)}
              type="url"
              name="image"
              id="image"
              placeholder="http://"
              className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm">
              Email address
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
              required
              placeholder="leroy@jenkins.com"
              className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs hover:underline text-gray-400"
              >
                Forgot password?
              </a>
            </div>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              required
              placeholder="*****"
              className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900"
        >
          Sign Up
        </button>
      </form>
      <div className="mt-4">
        {error.length > 0 && <Error message={error} />}
      </div>
    </div>
  );
};

export default Registration;
