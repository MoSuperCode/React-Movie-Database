import "./Filme.css";

function Filme(props) {
    return (
        <div className="filme">
            <p>{props.title}</p>
            <p>{props.year}</p>
            <p>{props.director}</p>
            <p>{props.duration}</p>
            <div className="genre">{props.genre.map((gen) => {
                return <p className='genre'>{gen}</p>;
            })}</div>
            <p>{props.rate}</p>
        </div>
    );
}

export default Filme;