// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React , {createContext,useContext,useState} from 'react';


export const AuthGuardContext = () => {

    const [accessToken,setAccessToken]=useState(localStorage.getItem('accessToken') || '');
  
    const login=(accessToken:any)=>{
        localStorage.setItem('accessToken',accessToken);
        setAccessToken(accessToken)
    }

    const logout=()=>{
        localStorage.removeItem("accessToken");
        setAccessToken('')
    }

    window.addEventListener('storage', (event) => {
        if (event.key === 'accessToken' && !localStorage.getItem('accessToken')) {
          logout();
        }
      });
    
    return {
        accessToken,
        login,
        logout,
    }
};

const defaultContext={}
const AuthContext=createContext(defaultContext);

export const useAuth = () => {
    return useContext(AuthContext);
  };

export const Authprovider=({ children }: { children: JSX.Element })=>{
    const value=AuthGuardContext();
   return (
   <AuthContext.Provider value={value as any}>{children}</AuthContext.Provider>
   );
}
