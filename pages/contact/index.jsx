import { useState } from "react";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // submit the form
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">
                Name:
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </label>
            <br />
            <label htmlFor="email">
                Email:
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </label>
            <br />
            <label htmlFor="description">
                Description:
                <textarea
                    id="description"
                    name="description"
                    value={description}
                    onChange={(event) =>
                        setDescription(event.target.value)
                    }
                />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}
