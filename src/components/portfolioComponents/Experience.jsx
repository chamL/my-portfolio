import React, { useState } from "react";
import carPaint from '../../assets/image/spray-gun.png';
import forklift from '../../assets/image/forklift.png';
import security from '../../assets/image/guard.png';
import pizza from '../../assets/image/pizza.png';

const ExperienceCard = ({ icon, title, shortBio, fullBio, dates }) => {
    const [showFullBio, setShowFullBio] = useState(false);

    const handleToggleBio = () => {
        setShowFullBio(!showFullBio);
    };

    return (
        <div className="experience_box">
            <div className="experience_icon">
                <img src={icon} alt={`${title} icon`} />
            </div>
            <div className="experience_body">
                <h3>{title}</h3>
                <span>{dates}</span>
                <p className={showFullBio ? 'expanded' : ''}>
                    {showFullBio ? fullBio : shortBio}
                </p>
                <button className="experience_btn" onClick={handleToggleBio}>
                    {showFullBio ? "Show Less" : "Show More"}
                </button>
            </div>
        </div>
    );
};

const Slider = () => {
    const experiences = [
        {
            icon: carPaint,
            title: "Car Painter",
            dates: "2013 - 2017",
            shortBio: "Since graduating from high school and starting working as a car painter...",
            fullBio: "Since graduating from high school and starting working as a car painter. I have gained extensive experience working in various automotive painting workshops, ranging from a renowned car shop to a family-owned business. While I enjoyed this type of work, it was not the best choice for my health at that time in my life."

        },
        {
            icon: pizza,
            title: "Dominos",
            dates: "2019",
            shortBio: "In 2019, I began working at Domino's Pizza, marking a significant change...",
            fullBio: "In 2019, I began working at Domino's Pizza, marking a significant change in my life as I transitioned from a career as an automotive painter to roles in both a warehouse and at Domino's. Although my position at Domino's was one of the least enjoyable jobs I have had, it proved to be a crucial learning experience. I gained valuable insights into my strengths and preferences in the workplace. After a year at Domino's, I decided to resign and focus solely on my warehouse job."

        },
        {
            icon: forklift,
            title: "Warehouse",
            dates: "2018 - 2021",
            shortBio: "In 2018, I began working at Norges Dekk in a warehouse position...",
            fullBio: "In 2018, I began working at Norges Dekk in a warehouse position following my decision to leave my career as an automotive painter and explore a new path. I found the job enjoyable and fulfilling. Subsequently, I secured a new warehouse position as a truck driver with Bring Home Delivery, where I worked for two and a half years. I particularly appreciated this role, as it provided stability during the challenging times of the COVID-19 pandemic and enabled me to purchase an apartment. In late 2021, I decided to pursue studies in front-end development."

        },
        {
            icon: security,
            title: "Security",
            dates: "2019 - Now",
            shortBio: "In 2019, I completed a security course and began working for Pro Sec and City Security...",
            fullBio: "In 2019, I completed a security course and began working for Pro Sec and City Security. This has been the most enjoyable job I have had and has significantly enhanced my communication skills with colleagues, customers, and clients. I have established a strong relationship with my supervisors, which has allowed me to have the option to treat this job as a full-time position, working full hours, or as a part-time role, depending on my preference."

        }
    ];

    return (
        <section className="experience_section">
            <div className="experience_banner">Experience...</div>
            <div className="experience_div">

                <div className="experience_top">

                    {experiences.map((exp, index) => (
                        <ExperienceCard
                            key={index}
                            icon={exp.icon}
                            title={exp.title}
                            shortBio={exp.shortBio}
                            fullBio={exp.fullBio}
                            dates={exp.dates}
                        />
                    ))}
                </div>

                <div className="experience_middle">
                    <div className="experience_banner">
                        <h3>CV</h3>
                    </div>
                    <div className="cv_div">
                        <h2>Lamin Cham</h2>
                        <hr className="cv_hr" />
                        <h3>Personal Information</h3>
                        <ul>
                            <li><span>Name:</span> Lamin Cham</li>
                            <br />
                            <li><span>Address:</span> Biskop Jens Nilssons Gate 18 A</li>
                            <br />
                            <li><span>Mobile:</span> 45485535</li>
                            <br />
                            <li><span>Date of Birth:</span> 23.10.1995</li>
                            <br />
                            <li><span>Email:</span> Lamin-cham@hotmail.com</li>
                        </ul>
                        <ul>
                            <li><span>7.2020 - Present:</span> <br /> Bring Home Delivery</li>
                            <br />
                            <li><span>9.2019 - Present:</span> <br /> City Security/Prosec</li>
                        </ul>
                        <h3>Key Qualifications</h3>
                        <p>Graduated as an auto body painter and currently working as a forklift driver at Bring Home Delivery. I am someone who works with good intentions to learn and share experiences in the workplace. As my friends describe me, I am a cheerful person who enjoys laughing.</p>
                        <div className="work_experience">
                            <div>
                                <h3>Work Experience</h3>
                                <ul>
                                    <li><span>7.2020 - Present:</span> <br /> Bring Home Delivery</li>
                                    <br />
                                    <li><span>9.2019 - Present:</span> <br /> City Security/Prosec</li>
                                </ul>
                            </div>
                            <div>
                                <h3>Other Experience</h3>
                                <ul>
                                    <li><span>03.16 - Present:</span> <br />I participate in organizing football tournaments. This is something that is ongoing and something I am interested in.</li>
                                </ul>
                            </div>
                        </div>
                        <h3>Education</h3>
                        <ul>
                            <li><span>2013-2015:</span> <br />Birger.N.Haug - Auto Body Painter Apprentice</li>
                            <br />
                            <li><span>2012-2013:</span> <br /> Sogn Upper Secondary School, Oslo - Automotive Collision and Paint Vocational 2</li>
                        </ul>
                        <h3>Courses</h3>
                        <ul>
                            <li><span>5.2019 - 7.2019:</span><br /> Security Guard Course</li>
                            <br />
                            <li><span>04.2016 - 04.2016:</span><br /> Your Development AS, Oslo - Forklift Course, T1,T2,T3,T4</li>
                        </ul>
                        <h3>Languages</h3>
                        <p>Norwegian (native)</p>
                        <p>Gambian</p>
                        <p>English, written/spoken (fluent)</p>
                        <h3>Computer Skills</h3>
                        <p>Internet, MS Office, general computer skills</p>
                        <h3>Interests</h3>
                        <p>Exercise at the gym, play football, watch MMA, spending time with family and friends, watching movies, computer</p>
                        <h3>References</h3>
                        <p>Available upon request</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Slider;
