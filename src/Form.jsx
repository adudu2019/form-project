import { useState } from "react";

const Form = () => {
    // const [username, handleUsername] = useState();
    // const [password, handlePassword] = useState();
    // const onSubmit = (event) => {
    //   event.preventDefault();
    //   return alert(`Selamat Datang ${username}\nPassword Anda adalah ${password}`)
    // }

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const onChangeUserHandler = (event) => setUsername(event.target.value)
    const onChangePasswordHandler = (event) => setPassword(event.target.value)
    const onSubmit = () => {
        return alert(`Selamat Datang ${username} \n Password Anda adalah: ${password}`)
    }
  
    return (
      <form className="w-full p-[20px] flex flex-col gap-4" onSubmit={onSubmit}>
        <div className="username-input">
        <label htmlFor="username" className="mb-2 text-sm font-medium text-gray-900">
          username
        </label>
        <input
          type="text"
          className="w-full border border-gray-300 text-gray-900 text-sm rounded-lg hover:border hover:border-blue-500 focus:ring-blue-500 focus:border-[2px] focus:border-blue-500 focus:outline-none p-2 transition duration-[250ms] ease-in-out bg-white"
          onChange={onChangeUserHandler}
          value={username}
        />
        </div>
  
        <div className="password-input">
        <label htmlFor="password" className="mb-2 text-sm font-medium text-gray-900">
          Password
        </label>
        <input
          type="password"
          className="w-full border border-gray-300 text-gray-900 text-sm rounded-lg hover:border hover:border-blue-500 focus:ring-blue-500 focus:border-[2px] focus:border-blue-500 focus:outline-none p-2 transition duration-[250ms] ease-in-out bg-white"
          onChange={onChangePasswordHandler}
          value={password}
        />
        </div>
        <button type="submit" className="border bg-blue-700 p-2 w-full cursor-pointer rounded-xl text-white hover:bg-blue-800  transition duration-[250ms] ease-in-out">Submit</button>
      </form>
    );
  };
  
  export default Form;