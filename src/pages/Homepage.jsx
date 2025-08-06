import { Link } from 'react-router-dom';
import '../css/homepage.css';
import Slider from './Slider';
import image from './image.png';
import image1 from './image1.webp';
import image2 from './image2.webp';
import image3 from './image3.webp';
import image4 from './image4.webp';
import image5 from './image5.webp';
import image6 from './image6.jpg';
import image7 from './image7.jpg';
import image8 from './image8.webp';
import image9 from './image9.webp';
function Homepage() {
    const sliders = [
        {
            id: "main-slider",
            images: [image, image1, image2, image3, image4, image5, image6, image7, image8, image9],
            direction: "left",
        },
    ];
    return (
        <div className="home-page">
            <section className="hero-section">
                <h1>Building Brighter Futures, Together.</h1>
                <p className="mission-statement">
                    Our mission is dedicated to uplifting vulnerable communities through holistic support in education, health, and environmental sustainability.
                </p>
                <div className="hero-image-placeholder">
                    {sliders.map((slider) => (
                        <Slider
                            key={slider.id}
                            id={slider.id}
                            images={slider.images}
                            direction={slider.direction}
                        />
                    ))}

                </div>

            </section>

            <section className="overview-section">
                <h2>Our Core Initiatives</h2>
                <p>
                    We implement programs focused on foundational literacy and digital education, providing accessible health clinics, and fostering community-led initiatives for clean water and green spaces. Our aim is to create self-sufficient and thriving communities.
                </p>
            </section>

            <section className="impact-section">
                <h2>Making a Tangible Difference</h2>
                <div className="impact-stats">
                    <p><strong>Over 750 individuals reached with health services</strong></p>
                    <p><strong>15+ community gardens established</strong></p>
                    <p><strong>Hundreds of students enrolled in skill development workshops</strong></p>
                </div>
            </section>

            <section className="call-to-action-section">
                <h2>Join Our Mission</h2>
                <p>Discover how your involvement can amplify our efforts and bring about lasting positive change. Explore our programs or consider becoming a volunteer.</p>
                <p>
                    <Link to="/about" >Learn More About Us</Link>
                    <Link to="/volunteer" >Become a Volunteer</Link>

                </p>
            </section>
        </div>
    );
}

export default Homepage;