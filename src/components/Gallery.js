function Gallery (props) {
    const labels = ["Bags", "Gowns", "Hat", "Two Piece"]
    return (
        <section className="gallery">
            <h2 className="gallery-title">Our Collection</h2>
            <div className="gallery-grid">
                {props.images.map((img, index) => (
                   <div className="gallery-item" key={index}>
                        <img src={img} alt="Crochet pieces" />
                        <div className="overlay">
                            <p>{labels[index]}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Gallery;