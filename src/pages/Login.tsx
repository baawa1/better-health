const Login = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">Login Page</h1>
      <form className="max-w-md mx-auto mt-8">
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-center text-sm text-gray-600">
        Don't have an account?{" "}
        <a href="/register" className="text-primary hover:underline">
          Sign Up
        </a>
      </p>
    </div>
  );
};
export default Login;
