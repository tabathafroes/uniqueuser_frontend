import { useState, useEffect } from "react";

function Dedupe(props){

    const getUsuarios = async () => {
        const response = await fetch('https://uniqueuser.herokuapp.com/usuarios/buscarDedupe');
        const body = await response.json();
        console.log(body)
        if (response.status !== 200) throw Error(body.message);
    
        return body;
    }

    const [usuarios, setUsuarios] = useState([])

    useEffect(async () =>{
        const users = await getUsuarios()
        setUsuarios(users)
    }, [])

    return (
        <div className="container">
            <h3 className="p-3 text-center">Usuários</h3>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Cluster</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map( (elemento, index ) => (
                        <tr>
                            <td>{elemento.nome}</td>
                            <td>{elemento.email}</td>
                            <td>{elemento.cluster}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Dedupe