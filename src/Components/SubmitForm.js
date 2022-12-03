import React, { useState } from 'react';

const SubmitForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lustName, setLustName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submit = (event) => {
        event.preventDefault();
        const data = [
            firstName, lustName, email, password
        ]
        console.log(data)
    }

    return (
        <div>
            <form onSubmit={submit}>
                <div style={{margin:'10px'}}>
                    <label>First Name</label> <br/>
                    <input type='text' name='name' id='name' onBlur={(e) => setFirstName(e.target.value)} />
                </div>
                <div style={{margin:'10px'}}>
                    <label>Lust Name</label> <br/>
                    <input type='text' name='name' id='name' onBlur={(e) => setLustName(e.target.value)} />
                </div>
                <div style={{margin:'10px'}}>
                    <label>Email</label> <br/>
                    <input type='text' name='name' id='name' onBlur={(e) => setEmail(e.target.value)} />
                </div>
                <div style={{margin:'10px'}}>
                    <label>Password</label> <br/>
                    <input type='text' name='name' id='name' onBlur={(e) => setPassword(e.target.value)} />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default SubmitForm;