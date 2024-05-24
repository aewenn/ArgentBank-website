import { PropTypes } from "prop-types";

const Feature = ({ paragraph, img, title, alt }) => {
    return (
        <div className="feature-item">
            <img src={img} alt={alt} className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>
                {paragraph}
            </p>
        </div>
    );
};

Feature.propTypes = {
    paragraph: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default Feature;

