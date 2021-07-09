import useAuth from "../hooks/useAuth"


function login() {
    const { user, signin, signinFace } = useAuth();

    console.log(user);

    function voltar() {
        window.history.back();
    }

    return <div>
        <h1> Faça seu login: </h1>  <br />
        <button onClick={() => signin()}>Entrar com Google</button> <br />
        <button onClick={() => signinFace()}>Entrar com Facebook</button> <br />
        <button onClick={() => voltar()}>Voltar</button> <br />
        <br />
        <a href="./">Menu Principal</a>
    </div>
}

export default login