// we can accept props as following

function Header({name, age}){

    // {name , age}
    

    console.log(name) 
    console.log(age)

    return <header>
        <a href="">Logo</a>

        <br></br>
        <p>hello how are you?? {10 + 20} </p>
        <h2>Welcome back {name}</h2>
        <h2>Your age is {age}</h2>
        <a href="">Home</a>
    </header>
}

export default Header;