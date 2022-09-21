import React, { useState, useEffect } from 'react';
import './Message.css';
const url = "https://restaurantmysite.herokuapp.com/usermessage"
function Message() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const sendMessage = (e) => {
        e.preventDefault();
        console.log("called");
        const data = {
            name: name,
            email: email,
            message: message
        }
        fetch(url, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => res.json()).then((data) => console.log(data.acknowledged))
    }
    return (
        <>
            <div className="forsep"></div>
            <div className="container">
                <form onSubmit={sendMessage}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name} onChange={(e) => setName(e.target.value)} />
                        <div id="emailHelp" className="form-text">I'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputName1" className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleInputName1" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputMessage" className="form-label">Message</label>
                        <input type="textarea" className="form-control" id="exampleInputMessage" value={message} onChange={(e) => setMessage(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}
export default Message;