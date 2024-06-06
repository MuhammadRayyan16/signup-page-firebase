import { auth, db } from "../database/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";

function Signup() {
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [psw, setPsw] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        createUserWithEmailAndPassword(auth, email, psw)
            .then((userCredential) => {
                const user = userCredential.user;

                return addDoc(collection(db, "users"), {
                    email: email,
                    name: name,
                    username: username,
                    userId: user.uid
                });
            })
            .then(() => {
                setUsername("");
                setName("");
                setEmail("");
                setPsw("");

                alert('User signed up and data added to Firestore successfully!');
            })
            .catch((error) => {
                console.error("Error during signup or Firestore operation:", error);
                alert(`Error: ${error.message}`);
            });
    }

    return (
        <div className="main">
            <input type="checkbox" id="chk" aria-hidden="true" />
            <div className="signup">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="chk" aria-hidden="true">Sign up</label>
                    <input
                        type="text"
                        name="fullname"
                        placeholder="Full Name"
                        required
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                    <input
                        type="text"
                        name="txt"
                        placeholder="Username"
                        required
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <input
                        name="pswd"
                        placeholder="Password"
                        required
                        value={psw}
                        onChange={(event) => setPsw(event.target.value)}
                    />

                    <button type="submit">Sign up</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
