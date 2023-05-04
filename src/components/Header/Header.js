import "./Header.css"
//LAS FUNCIONES SIEMPRE RETORNAN UN ELEMENTO HTML
function Header(){
    return <header className="header">
                <img src="/img/header.png" alt="Org"/>
            </header>
}

export default Header //exportando el componente (puede ser utilizado por todos los demas archivos)


