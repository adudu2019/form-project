import Form from "./Form";

const Login = () => {
    return (
        <div className="bg-white flex flex-col p-5 rounded h-fit w-96">
            <div className="text-center">
            <h2 className="font-bold">Login</h2>
            <h6 className="text-gray-500">Silahkan masukkan data Anda</h6>
            </div>
            <Form />
        </div>
    )
}

export default Login;