import '../css/volunteerpage.css';

function VolunteerForm() {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Thank you for your interest! We will get back to you soon.');
    };


    return (
        <div className="volunteer-form-page">
            <h1>Become a Volunteer</h1>
            <p>
                Join our dedicated team of volunteers and help us make a real difference in the lives of those we serve! Please fill out the form below, and we will get in touch with you to discuss how you can contribute.
            </p>

            <form onSubmit={handleSubmit} className="volunteer-form">
                <div className="form-group">
                    <label htmlFor="fullName">Full Name:</label>
                    <input type="text" id="fullName" name="fullName" required />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone Number:</label>
                    <input type="tel" id="phone" name="phone" />
                </div>

                <div className="form-group">
                    <label htmlFor="location">City/Location:</label>
                    <input type="text" id="location" name="location" />
                </div>

                <div className="form-group">
                    <label>Preferred Days of the Week:</label>
                    <div>
                        <input type="checkbox" id="mon" name="days" value="Monday" /> <label htmlFor="mon">Monday</label><br />
                        <input type="checkbox" id="tue" name="days" value="Tuesday" /> <label htmlFor="tue">Tuesday</label><br />
                        <input type="checkbox" id="wed" name="days" value="Wednesday" /> <label htmlFor="wed">Wednesday</label><br />
                        <input type="checkbox" id="thu" name="days" value="Thursday" /> <label htmlFor="thu">Thursday</label><br />
                        <input type="checkbox" id="fri" name="days" value="Friday" /> <label htmlFor="fri">Friday</label><br />
                        <input type="checkbox" id="sat" name="days" value="Saturday" /> <label htmlFor="sat">Saturday</label><br />
                        <input type="checkbox" id="sun" name="days" value="Sunday" /> <label htmlFor="sun">Sunday</label>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="timeOfDay">Preferred Time of Day:</label>
                    <select id="timeOfDay" name="timeOfDay">
                        <option value="">--Please choose an option--</option>
                        <option value="morning">Morning</option>
                        <option value="afternoon">Afternoon</option>
                        <option value="evening">Evening</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="hoursPerWeek">Estimated Hours per Week:</label>
                    <select id="hoursPerWeek" name="hoursPerWeek">
                        <option value="">--Please choose--</option>
                        <option value="1-5">1-5 hours</option>
                        <option value="5-10">5-10 hours</option>
                        <option value="10+">10+ hours</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>What areas are you interested in?</label>
                    <div>
                        <input type="checkbox" id="event" name="interests" value="Event Planning" /> <label htmlFor="event">Event Planning</label><br />
                        <input type="checkbox" id="fundraising" name="interests" value="Fundraising" /> <label htmlFor="fundraising">Fundraising</label><br />
                        <input type="checkbox" id="social" name="interests" value="Social Media Management" /> <label htmlFor="social">Social Media Management</label><br />
                        <input type="checkbox" id="fieldwork" name="interests" value="Fieldwork/Outreach" /> <label htmlFor="fieldwork">Fieldwork/Outreach</label><br />
                        <input type="checkbox" id="admin" name="interests" value="Administration" /> <label htmlFor="admin">Administration</label><br />
                        <input type="checkbox" id="education" name="interests" value="Education/Tutoring" /> <label htmlFor="education">Education/Tutoring</label>
                        {/* Add more interests as needed */}
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="skills">Do you have any specific skills you'd like to offer?</label>
                    <textarea id="skills" name="skills" rows="4"></textarea>
                </div>

                <div className="form-group">
                    <label>Have you volunteered before?</label>
                    <div>
                        <input type="radio" id="volYes" name="prevVolunteered" value="yes" /> <label htmlFor="volYes">Yes</label>
                        <input type="radio" id="volNo" name="prevVolunteered" value="no" /> <label htmlFor="volNo">No</label>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="prevExp">If yes, please describe your experience:</label>
                    <textarea id="prevExp" name="prevExp" rows="4"></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="howHear">How did you hear about us?</label>
                    <select id="howHear" name="howHear">
                        <option value="">--Please choose--</option>
                        <option value="social">Social Media</option>
                        <option value="friend">Friend/Family</option>
                        <option value="search">Website Search</option>
                        <option value="event">Event</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="comments">Any questions or comments?</label>
                    <textarea id="comments" name="comments" rows="4"></textarea>
                </div>

                <button type="submit" className="submit-button">Submit Application</button>
            </form>
        </div>
    );
}

export default VolunteerForm;