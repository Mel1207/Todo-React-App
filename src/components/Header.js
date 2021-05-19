import Button from './Buttons'

const Header = ({ title }) => {

    const onClick = () => {
        console.log('click')
    }

    return ( 
        <header className="header">
            <h1>{title}</h1>
            <Button color="#253641" text="add task" onClick={onClick}></Button>
        </header>
    );
}
 
export default Header;