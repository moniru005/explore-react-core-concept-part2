export default function Friend({friend}){
    console.log(friend);
    const {name, email} = friend;
    return (
        <div style={{borderBottom:'2px solid gray' }}>
            <h4>Name: {name} </h4>
            <p>Email: {email}</p>
        </div>
    )
}