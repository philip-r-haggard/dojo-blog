const Home = () => {

    const handleClick = () => {
        console.log('hello, ninjas');
    }

    const handleClickAgain = (name) => {
        console.log('hello ' + name);
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={() => handleClickAgain('Philip')}>Click Me Again</button>
        </div>
    );
}
 
export default Home;