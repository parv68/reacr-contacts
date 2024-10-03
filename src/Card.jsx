export default function Card(props){
    return(
            <div>
                <h1>{props.name}</h1>
                <img src={props.img} alt="" />
                <p>{props.phone}</p>
                <p>{props.email}</p>
            </div>
    )
}