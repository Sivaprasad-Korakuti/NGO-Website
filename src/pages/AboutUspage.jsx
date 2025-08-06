import '../css/Aboutpage.css'
function AboutUspage() {
    return (
        <div className="about-us-page">
            <h1>About Our Organization</h1>

            <section className="our-story-section">
                <h2>Our Journey</h2>
                <p>
                    Established in 2015, our non-profit organization began as a response to the observed needs for sustainable community development in rural areas. A small group of committed individuals came together with a shared vision to uplift and empower. From humble beginnings, conducting grassroots initiatives, we have steadily grown, expanding our reach and impact across various districts, always guided by the principles of community participation and long-term sustainability.
                </p>
            </section>

            <section className="mission-vision-section">
                <h2>Our Guiding Principles</h2>
                <h3>Our Mission</h3>
                <p>
                    To create self-reliant communities by addressing fundamental needs in education, health, and environmental preservation through collaborative and innovative programs.
                </p>
                <h3>Our Vision</h3>
                <p>
                    A future where every community is empowered to build a prosperous, healthy, and environmentally conscious society for generations to come.
                </p>
            </section>

            <section className="our-team-section">
                <h2>Meet Our Dedicated Team</h2>
                <div className="team-member">
                    <h3>Priya Sharma - Founder & Director</h3>
                    <p>Priya is a social entrepreneur with over 15 years of experience in community development. Her passion for creating equitable opportunities led to the foundation of this organization, driving its vision and strategic direction.</p>
                </div>
                <div className="team-member">
                    <h3>Rajesh Kumar - Program Coordinator</h3>
                    <p>Rajesh oversees the implementation of all our field programs. With a background in public health and a strong commitment to grassroots work, he ensures our initiatives have a tangible impact on the ground.</p>
                </div>
                <div className="team-member">
                    <h3>Anjali Singh - Volunteer Engagement Lead</h3>
                    <p>Anjali is instrumental in building our volunteer network. Her enthusiasm and organizational skills help connect passionate individuals with meaningful opportunities to contribute to our cause.</p>
                </div>
            </section>

            <section className="achievements-section">
                <h2>Milestones and Achievements</h2>
                <ul>
                    <li>2015: Oranization founded; initial pilot project launched addressing basic sanitation needs.</li>
                    <li>2017: Expanded educational outreach, establishing 3 learning centers for underprivileged children.</li>
                    <li>2019: Successfully implemented a large-scale health awareness and screening camp, benefiting over 500 villagers.</li>
                    <li>2021: Awarded 'Community Impact Recognition' for our sustainable agriculture project.</li>
                    <li>2023: Launched digital literacy program for youth, equipping them with essential computer skills.</li>
                </ul>
            </section>

            <section className="partnerships-section">
                <h2>Our Valued Partners</h2>
                <p>We are immensely grateful for the collaboration and support from organizations that share our vision:</p>
                <ul>
                    <li>Community Health Alliance</li>
                    <li>Green Earth Foundation</li>
                    <li>Local Government Bodies (various departments)</li>
                    <li>XYZ Corporate Social Responsibility Initiatives</li>
                </ul>
            </section>
        </div>
    );
}

export default AboutUspage;