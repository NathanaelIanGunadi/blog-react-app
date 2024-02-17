import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState("Sample Title");
    const [body, setBody] = useState("Sample Body");
    const [author, setAuthor] = useState("Ian");

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author}

        console.log(blog);
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <label>Blog Author:</label>
                <select 
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Ian">Ian</option>
                    <option value="Ian2">Ian2</option>
                </select>
                <button>Create Blog</button>

            </form>
        </div>
    );
}

export default Create;