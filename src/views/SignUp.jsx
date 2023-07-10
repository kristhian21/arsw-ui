import axios from 'axios';
import { useState } from 'react'
import '../styles/auth.css'

export default function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async(event) =>{
        event.preventDefault();
        axios.post("http://localhost:8080/users", {
            username: name,
            email: email,
            password: password
        })
        .then((response) => {
            const {data} = response;
            alert(`User ${data.username} created!`);
        })
        .catch((error) => {
            console.log(error);
            alert(`User ${name} already exists :(`);
        });
    }

    return(
        <div className="auth-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="auth-name"
                    placeholder="Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br/><br/>
                <input
                    type="email"
                    className="auth-mail"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br/><br/>
                <input
                    type="password"
                    className="auth-password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br/><br/><br/>
                <input className='auth-submit' type="submit"/>
            </form>
        </div>
    )
}