import { useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const [name, setName] = useState("Ian");

    const {data: blogs, isPending, error, setData} = useFetch("http://localhost:8000/blogs");

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id)
        setData(newBlogs);
    } 

    // fetch data etc are also known as side effects
    // second arg is a dependancy array
    

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>}
            {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === "Ian2")} title="Ian2 Blogs"/>}
        </div>
    );

    /*
    // make value reactive
    // hook (starts with "use")
    // let name = "mario";

    // second var is a function to set the value
    const [name, setName] = useState("mario");
    const [age, setAge] = useState(25); 

    
    const handleClick = (e) => {
        console.log("hello", e);
    }

    const handleClickAgain = (name, e) => {
        console.log("hellow" + name, e.target);
    }
    

    const handleClick = () => {
       setName("new");
       setAge(age + 5);
    }

    <button onClick={() => setName("New name")}>Set Name</button>
    <p>{name}</p>
    */
    
}
 
export default Home;