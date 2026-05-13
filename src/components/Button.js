function Button(props) {
    return (
         <button className={props.isPrimary ? 'primary' : 'secondary'}>
           {props.isPrimary ? 'Shop now' : 'Learn more'}
        </button>
    );
}

export default Button;