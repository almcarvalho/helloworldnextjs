import useAuth from "../hooks/useAuth"


function login() {
    const { user, signin } = useAuth();

    console.log(user);

    return <div>
        <h1> Faça seu login: </h1>  <br />
        <button onClick={() => signin()}>Entrar com Google</button>
    </div>
}

export default login