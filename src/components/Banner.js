import Button from "./Button";

function Banner(props) {
    return (
        <section>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            <div>
                <Button isPrimary={true}/>
                <Button isPrimary={false}/>
            </div>
        </section>
    );
}

export default Banner;
