import { useLocation, useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = () => {
        onLogin();
        navigate(from, { replace: true });
    };

    return (
        <div>
            <h2>Login</h2>
            <button onClick={handleLogin}>Entrar</button>
        </div>
    );
};

export { Login };