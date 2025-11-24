

function Header(props)
{
    return(
        <h1>Hey {props.name}! Welcome to Indian Election Commission.</h1>
    )
}

function Main({user})
{
    return(
        <>
        <p>General Elections 2025</p>
        <p>Voter Details: Name - {user.name}, Age - {user.age}, City - {user.city}</p>
        </>
    )
}

function Footer()
{
    return(
        <h3>All Rights Reserved @ IEC 2024</h3>
    )
}


function App()
{
    return(
    <>
        <Header name="Akshita"></Header>
        <Main user={{name:"Akshita", age:"21", city:"Delhi"}}></Main>
        <Footer></Footer>
    </>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>);