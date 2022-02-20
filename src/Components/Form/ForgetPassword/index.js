import React, {useState} from 'react';

const Index = () => {
    //password data
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");

    //save password
    const savePassword = () => {
        console.log(password+" "+repassword)
    }

    return(
        <div className="container-fluid">
            <div className="box">
                <span>Enter New password</span>
                <input
                    placeholder="New password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <span>Enter old password</span>
                <input
                    placeholder="Reenter password"
                    onChange={(e) => setRepassword(e.target.value)}
                />
                <button
                    className={"btn btn-primary"}
                    onClick={savePassword}
                >Save Password</button>
            </div>
        </div>
    )
}

export default Index;