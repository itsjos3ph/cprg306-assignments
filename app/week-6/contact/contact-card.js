export default function ContactCard( {contactObj} ) {
    
    let {id, fname, lname, email, phone, type} = contactObj;
    
    return(
        <div className="bg-blue-500 p-5 rounded">
            <h3>{fname} {lname}</h3>
            <p><b>Email: </b> {email}</p>
            <p><b>Phone: </b> {phone}</p>
            <p><b>Contact Type: </b> {type}</p>
        </div>
    );
}