import Button from './Buttons'

const Header = ({ title, onAdd, showAdd }) => {

    return ( 
        <header className="header">
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : '#59e989' } text={showAdd ? 'Close': 'Add Task'} onClick={onAdd} showAdd={showAdd}></Button>
        </header>
    );
}
 
export default Header;