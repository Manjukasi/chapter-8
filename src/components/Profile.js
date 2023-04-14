import { useEffect, useState } from "react";

const Profile = () => {
    const [count, setCount] = useState(1)

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("hello world")
        }, 1000);

        return() => {
            clearInterval(timer)
            console.log("useEffect return")
        }
    },[])
    return (
        <div>
            <h2>Profile component</h2>
            <h3>count:{count}</h3>
            <div>{count?<button onClick={() => {setCount(0)}}>Click me</button>:<button onClick={()=>{setCount(1)}}>Click me</button>}</div>
        </div>
    )
}

export default Profile;