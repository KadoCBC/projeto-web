import logo from '../../images/LogoBN.png'
import "./Navbar.css"

    export function Navbar(){


    return (
        <>
            <nav>
                <div className="input-search-space">
                    <i class='bi bi-search'></i>
                    <input type="text" placeholder='Digite para pesquisar'/>
                </div>

                <img src={logo} alt='Logo noticias'/>

                <button>Entrar</button>
            </nav>
        </>
    )
}