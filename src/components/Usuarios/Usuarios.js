import { useState, useEffect } from "react";

function Usuarios(props){

    const getUsuarios = async () => {
        const response = await fetch('https://uniqueuser.herokuapp.com/usuarios/buscarScore');
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
                        <th>Hash</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map( (elemento, index ) => (
                        <tr>
                            <td>{elemento.nome}</td>
                            <td>{elemento.email}</td>
                            <td>{elemento.hash}</td>
                            <td>{parseFloat(elemento.score).toFixed(5)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Usuarios