import React, { Component } from 'react'

class Timeline extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-experience" data-section="timeline">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">highlights</span>
                                <h2 className="colorlib-heading animate-box">Experience</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="timeline-centered">
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-3">
                                                <i className="icon-pen2" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2><strong>T Mobile  </strong><span>| Sept 2021 - present</span></h2>
                                                <p>Designed and implemented a knowledge mining search service leveraging Azure-based AI services to extract valuable insights from structured, semi-structured, and unstructured data. Proficient in C#, .NET Core, MongoDB, JavaScript, HTML5, and React. Expertise includes managing Azure resources such as Blob Containers and App Services.</p>
                                                <h4>Software Engineer </h4>
                                                <ul>
                                                    <li>Developed an internal React application for tracking user complaints across branches, enhancing operational efficiency.</li>
                                                    <li>Engineered SPAs with a stack including JavaScript, AJAX, HTML, CSS, Bootstrap, React, C# web APIs, improving UX and backend integration.</li>
                                                    <li>Migrated data to Azure blob storage using a .Net Core wrapper application, leveraging the Azure SDK for enhanced data management.</li>
                                                    <li>Established CI/CD pipelines in Azure DevOps, streamlining development processes and facilitating continuous delivery.</li>
                                                    <li>Integrated authentication and authorization using Azure AD, ensuring secure user access.</li>
                                                    <li>Utilized NUnit and Moq for comprehensive unit, integration testing and maintaining high code quality.</li>
                                                    <li>Implemented robust logging and monitoring through Azure Application Insights, optimizing application performance.</li>

                                                </ul>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-4">
                                                <i className="icon-pen2" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2><strong>Micheals Companies </strong><span> | Feburary 2020 - August 2021</span></h2>
                                                <h4>Java Developer</h4>
                                                <ul>
                                                    <li>Directed software system testing, validation, and documentation, ensuring optimized performance and maintainability using Java 8 and 11.</li>
                                                    <li>Developed and maintained backend services for financial management apps with Java and Spring Boot, integrating RESTful APIs to enhance data exchange.</li>
                                                    <li>Collaborated closely with frontend developers, using HTML, CSS, & React/Angular, to create seamless and responsive user experiences.</li>
                                                    <li>Integrated external APIs for data enrichment, boosting the application's visualization capabilities.</li>
                                                    <li>Ensured timely, on-budget project milestones, advocating for automated testing and best practices among team members.</li>
                                                    <li>Utilized continuous delivery, test-driven development, and application security principles to maintain high code quality.</li>
                                                    <li>Designed, developed, and debugged software enhancements, contributing to a robust and evolving Java stack.</li>
                                                    <li>Implemented backup and recovery procedures, safeguarding against data loss and maintaining system integrity.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-2">
                                                <i className="icon-pen2" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2><strong>Forest Bank</strong><span> | Feburary 2017 - August 2020</span></h2>
                                                <h4>Software Developer</h4>
                                                <ul>
                                                    <li>Developed, tested, deployed, and maintained software, ensuring high performance and scalability.</li>
                                                    <li>Developed the backend service with Spring Boot, involving different layers of the application including entity/model, DAO/repository, Controller, Service, Business, and Persistence. Involved in creating and designing a database and connecting the database with Hibernate. Developed test classes in JUnit for unit testing.</li>
                                                    <li>Worked on RESTful API to create services, tested on Postman. Used JIRA to track the progress of the project.</li>
                                                    <li>Developed internal coding using J2EE technologies based on the MVC Architecture. Responsible for design and maintenance of the Git repositories.</li>
                                                    <li>Involved in SDLC and participated in Scrum meetings. Coordinated application testing with the help of the testing team.</li>
                                                    <li>Wrote stored procedures, packages, views, cursors, functions, and triggers using SQL in the backend.</li>
                                                    <li>Utilized Hibernate for Object-Relational Mapping (ORM) and data persistence. Wrote SQL commands and stored procedures to retrieve data from MySQL database.</li>
                                                    <li>Developed web services using RESTful web services and tested endpoints using Postman.</li>
                                                </ul>

                                                <p>Language/Frameworks: J2EE, MVC Architecture, Git, Scrum, SQL, Hibernate, MySQL, RESTful Web Services, Postman, SDLC</p>
                                            </div>
                                        </div>
                                    </article>
                                    <article class="timeline-entry begin animate-box fadeInUp animated" data-animate-effect="fadeInBottom">
                                        <div class="timeline-entry-inner">
                                            <div class="timeline-icon color-none">
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Timeline;