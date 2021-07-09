import useAuth from "../hooks/useAuth"

function dashboard() {

    const { user } = useAuth();

    return <div>
        <h1> Dashboard, Olá:  `${user?.displayName}`</h1>
    </div>
}

export default dashboard