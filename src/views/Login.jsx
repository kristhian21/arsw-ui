import '../styles/auth.css';

export default function Login(){

    return(
        <div className="auth-container">
            <form>
                <input type="text" className="auth-name" placeholder="Nombre"></input>
                <br /><br />
                <input type="password" className="auth-password" placeholder="Contraseña"></input>
                <br /><br /><br />
                <button type="submit" className='auth-submit'>Ingresar</button>
            </form>
        </div>
    )
}