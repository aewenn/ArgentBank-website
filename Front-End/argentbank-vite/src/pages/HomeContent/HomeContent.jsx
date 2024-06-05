import Hero from "../../components/Hero/Hero";
import Feature from "../../components/Feature/Feature";
import featuresData from '../../data/features.json';

const HomeContent = () => {
    return (
        <main>
            <Hero />
            <section className="features">
                <h2 className="sr-only">Features</h2>
                {featuresData.map((feature, index) => (
                    <Feature
                        key={index}
                        paragraph={feature.paragraph}
                        img={feature.img}
                        title={feature.title}
                        alt={feature.alt}
                    />
                ))}
            </section>
        </main>
    );
};

export default HomeContent;
