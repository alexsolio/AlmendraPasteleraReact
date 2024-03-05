import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Almendra Pastelera</h3>
            <div>
                <button>Repostería</button>
                <button>Pastelería</button>
                <button>Panadería</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar