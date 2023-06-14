import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h1>home</h1>
            <button>
                <Link to="game">jumt to game page</Link>
            </button>
        </>
    )
}

export default Home;