import { useContext, useEffect } from "react";
import {useHistory} from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";
const Protected = ({cmp}) => {
    const [auth] = useContext(AuthContext);
    let Cmp = cmp;
    const history = useHistory();

    useEffect(() => {
        if(!auth.isAuthenticated){
          history.push("/login")
        }
      }, [auth.isAuthenticated, history])

    return (
        <div>
            <Cmp />
        </div>
     );
}

export default Protected;
