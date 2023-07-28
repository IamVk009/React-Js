function Header({name, title}){
    return(
        <div style={{background : 'yellow', height : 300, width : 600}}>
            <h1>{name}</h1>
            <h1>{title}</h1>
        </div>
    );
}

export default Header;