import { createContext, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

const initialState = {
    email: "",
    token: localStorage.getItem("token") ?? "",
};
export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(initialState);

    const handleLogin = (email, data) => {
        setUser({
            email,
            data
        });
        const tokenDecoded = jwtDecode(data);
        localStorage.setItem("rotaxi-token",data);
        localStorage.setItem("userId",tokenDecoded.sub);
        localStorage.setItem("Role",tokenDecoded.Role)
        console.log(`Este rol es ${tokenDecoded.Role}`);
    };

    const handleLogout = () => {
        setUser(initialState);
        localStorage.removeItem("rotaxi-token");
    };

    //hay que poder este handle en el botton de cerrar sesion
    // capaz ponerlo en el navbar

    return <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
        {children}
    </AuthContext.Provider>;
}
