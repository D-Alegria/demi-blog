import React, {useState} from 'react';

const Home = () => {

    const [name, setName] = useState("Demilade");
    const [age, setAge] = useState(23);
    const handleClick = () => {
        setName("Temilade")
        setAge(21)
    }

    return (
        <div className={"home"}>
            <h2>Home</h2>
            <p>{name} is {age}< /p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
};

export default Home;
