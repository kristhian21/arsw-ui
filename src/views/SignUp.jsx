import '../styles/auth.css'

export default function SignUp(){
    return(
        <div className="auth-container">
        <form>
            <input type="text" className="auth-name" placeholder="Nombre"></input>
            <br /><br />
            <input type="email" className="auth-mail" placeholder="Correo electrónico"></input>
            <br /><br />
            <input type="password" className="auth-password" placeholder="Contraseña"></input>
            <br /><br /><br />
            <button type="submit" className='auth-submit' onClick={()=>navigate("/")}>Crear Usuario</button>
        </form>
    </div>
    )
}