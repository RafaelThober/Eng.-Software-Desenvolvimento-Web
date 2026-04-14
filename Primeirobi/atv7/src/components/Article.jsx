export default function Article(props) {
    return (
        <article>
            <h2>{props.titulo}</h2>
            <p><small><strong>{props.autor}</strong> | {props.data}</small></p>
            
            <img src={props.imagem} alt={props.titulo} />
            
            <p>{props.conteudo}</p>
        </article>
    );
}