import useAuth from "../hooks/useAuth"

function dashboard() {

    debugger

    const { user } = useAuth();

    if (user === null) {
        return <h1><a href="/login">Faça Login!</a></h1>
    } else {
        return <div>
            <head>
                <title>Dashboard</title>
            </head>
            <h1> Olá, {user?.displayName}, Agora Você está em uma área da aplicação que somente usuários autenticados tem acesso: </h1>
            <br />
            <p>Fique tranquilo, não temos acesso a informações como senhas, apenas informações fornecidas pelo google provando que é realmente você que está aqui:</p><br />
            <p>Não temos muita coisa implementada, mas você já pode ver <a href="/historicoAcessos">quem esteve por aqui </a> e é uma satisfação enorme te ver por aqui...</p>
        </div>
    }


}

export default dashboard