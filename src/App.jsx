import logo from "./logo.svg";
import "./App.css";
import "./scss/style.scss";
import "./scss/bootstrap/_navbar.scss";

function App() {
  return (
    <div className="App">
      {/* <div id="root"/> */}

      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target"
        id="ftco-navbar"
      >
        <div className="container">
          <a className="navbar-brand" href="index.html">
            Himaswetha Ravi
          </a>
          <button
            className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="oi oi-menu"></span> Menu
          </button>

          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav nav ml-auto">
              <li className="nav-item">
                <a href="#home-section" className="nav-link">
                  <span>Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#about-section" className="nav-link">
                  <span>About</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#resume-section" className="nav-link">
                  <span>Resume</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#project-section" className="nav-link">
                  <span>Projects</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact-section" className="nav-link">
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section id="home-section" className="hero">
        <div className="home-slider  owl-carousel">
          <div className="slider-item ">
            <div className="overlay"></div>
            <div className="container">
              <div
                className="row d-md-flex no-gutters slider-text align-items-end justify-content-end"
                data-scrollax-parent="true"
              >
                <div
                  className="one-third js-fullheight order-md-last img"
                  style={{
                    backgroundImage: "url(/images/bg_1.png)",
                    backgroundSize: "60%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="overlay"></div>
                </div>
                <div
                  className="one-forth d-flex  align-items-center ftco-animate"
                  data-scrollax=" properties: { translateY: '50%' }"
                >
                  <div className="text">
                    <span className="subheading">Hello!</span>
                    <h1 className="mb-4 mt-3">
                      I'm <span>Himaswetha</span>
                    </h1>
                    <div>
                      Graduate Student, Master of Computer Science University of
                      Cincinnati (Expected Graduation: May 2025)
                    </div>{" "}
                    <p>
                      <a
                        href="https://github.com/RaviHimaswetha?tab=repositories"
                        className="btn btn-white btn-outline-white py-3 px-4"
                      >
                        My works
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="ftco-about img ftco-section ftco-no-pb"
        id="about-section"
      >
        <div className="container">
          <div className="row">
            <div className="row d-flex align-items-stretch">
              <div className="row d-flex">
                <div className="col-md-6 col-lg-5 d-flex">
                  <div className="img-about img d-flex align-items-stretch">
                    <div className="overlay">
                      <div className="row">
                        <div className="col-sm-6 col-md-5">
                          <div className="about-img">
                            <img
                              src="images/about_me.png"
                              className="img-fluid rounded b-shadow-a"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-7">
                          <div className="about-info">
                            <p>
                              <span className="title-s">Name: </span>{" "}
                              <span>Himaswetha Ravi</span>
                            </p>
                            <p>
                              <span className="title-s">Job Role: </span>{" "}
                              <span>Software Developer</span>
                            </p>
                            <p>
                              <span className="title-s">Experience: </span>{" "}
                              <span>2 years</span>
                            </p>
                            <p>
                              <span className="title-s">Address: </span>{" "}
                              <span>Coimbatore, India</span>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="skill-mf">
                        <p className="title-s">Skills</p>
                        <span>SQL</span> <span className="pull-right">95%</span>
                        <div className="one-third js-fullheight order-md-last img">
                          <div
                            className="one-third js-fullheight order-md-last img-bar"
                            role="progressbar"
                            style={{ width: "95%" }}
                            aria-valuenow="95"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>C & C++</span>{" "}
                        <span className="pull-right">85%</span>
                        <div className="one-third js-fullheight order-md-last img">
                          <div
                            className="one-third js-fullheight order-md-last img-bar"
                            role="progressbar"
                            style={{ width: "85%" }}
                            aria-valuenow="85"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>Data Visualization</span>{" "}
                        <span className="pull-right">90%</span>
                        <div className="one-third js-fullheight order-md-last img">
                          <div
                            className="one-third js-fullheight order-md-last img-bar"
                            role="progressbar"
                            style={{ width: "90%" }}
                            aria-valuenow="90"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>Azure</span>{" "}
                        <span className="pull-right">85%</span>
                        <div className="one-third js-fullheight order-md-last img">
                          <div
                            className="one-third js-fullheight order-md-last img-bar"
                            role="progressbar"
                            style={{ width: "85%" }}
                            aria-valuenow="85"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>Java</span>{" "}
                        <span className="pull-right">85%</span>
                        <div className="one-third js-fullheight order-md-last img">
                          <div
                            className="one-third js-fullheight order-md-last img-bar"
                            role="progressbar"
                            style={{ width: "80%" }}
                            aria-valuenow="80"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-7 pl-lg-5 pb-5">
                  <div className="row justify-content-start pb-3">
                    <div className="col-md-12 heading-section ftco-animate">
                      <h2 className="mb-4">About Me</h2>

                      <p>
                        With over 2 years of comprehensive experience as a
                        developer , accompanied by a master's degree in
                        engineering. Proficient in software development, system
                        architecture, coding best practices, and debugging.
                        Experienced in Agile methodologies, managing full
                        project lifecycles,.
                      </p>
                      <ul className="about-info mt-4 px-md-0 px-2">
                        <li className="d-flex">
                          <span>Profile:</span> <span>Software Developer</span>
                        </li>
                        <li className="d-flex">
                          <span>Domain:</span>{" "}
                          <span> Software Engineering </span>
                        </li>
                        <li className="d-flex">
                          <span>Education:</span>{" "}
                          <span>Masters of Engineering</span>
                        </li>
                        <li className="d-flex">
                          <span>Languages:</span>{" "}
                          <span>C, Java, Python, SQL, HTML/CSS,JS</span>
                        </li>
                        <li className="d-flex">
                          <span>Frameworks</span>{" "}
                          <span>
                            Servlets, JSP, JUnit, Front-end
                            Development,Bootstrap,Hadoop
                          </span>
                        </li>
                        <li className="d-flex">
                          <span>Tools:</span>{" "}
                          <span>
                            Azure,AWS Splunk,Canoe,IBM Doors,AEEE pro,Enterprise
                            Architect,Tableau,Jupyter Notebook
                          </span>
                        </li>
                        <li className="d-flex">
                          <span>Technical Skills:</span>{" "}
                          <span>
                            Computer Networking,Unit Testing with Cantata
                          </span>
                        </li>
                        <li className="d-flex">
                          <span>Interest:</span>{" "}
                          <span>Traveling, Travel Photography</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="counter-wrap ftco-animate d-flex mt-md-3">
                    <div className="text">
                      <p>
                        <a
                          href="https://www.linkedin.com/in/ravihimaswetha/"
                          className="btn btn-primary py-3 px-3"
                        >
                          LinkedIn
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-no-pb" id="resume-section">
        <div className="container">
          <div className="row justify-content-center pb-5">
            <div className="col-md-10 heading-section text-center ftco-animate" />
          </div>
        </div>

        <div className="row">
          <h1 className="big-4">Experience</h1>
          <div className="underline"></div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="resume-wrap ftco-animate">
              <span className="date">2023-2024</span>
              <h2>Software Developer</h2>
              <span className="position">
                Bosch Global Software Technologies
              </span>
              <p className="mt-4">
                Bosch Global Software Technologies, a leader in innovative
                software solutions, with a global workforce of over 20,000
                professionals. A key division of Bosch Group, driving
                advancements in automotive, IoT, and industrial technologies.
              </p>
              <ul>
                <li>
                  Worked as a Software Developer for a Daimler project,
                  specializing in diagnostic communication management with a
                  focus on the Diagnostic Communication Manager (DCM) module.
                </li>
                <li>
                  Built software for ABS (Anti-lock Braking System) and
                  iBooster, focusing on enhancing the performance and safety of
                  car braking systems.
                </li>
                <li>
                  Collaborated with cross-functional teams to enable efficient
                  and reliable vehicle communication systems while adhering to
                  AUTOSAR standards..
                </li>
                <li>
                  Conducted alpha and beta testing to validate system
                  functionality and performance
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-6">
            <div className="resume-wrap ftco-animate">
              <span className="date">2022-2023</span>
              <h2>Software Engineering Intern</h2>
              <span className="position">
                Bosch Global Software Technologies
              </span>
              <p className="mt-4">
                Bosch Global Software Technologies, a leader in innovative
                software solutions, with a global workforce of over 20,000
                professionals. A key division of Bosch Group, driving
                advancements in automotive, IoT, and industrial technologies.
              </p>
              <ul>
                <li>
                  worked as a tester on the Zeekr project, an electric vehicle.
                  worked on Unit Testing and Integration Testing.
                </li>

                <li>
                  Designed and implemented end-to-end integration tests to
                  ensure proper interaction between various modules and
                  components within the project and Developed detailed test
                  cases and scenarios to cover edge cases and ensure
                  comprehensive test coverage.
                </li>
                <li>
                  i have experience working with programming languages like C
                  and C++ and utilizing tools such as AEE-Pro,SHARCC and used
                  testing frameworks like TestNG and JUnit to automate test
                  cases and improve efficiency.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="resume-wrap ftco-animate">
              <span className="date">2021-2021</span>
              <h2>AWS Intern</h2>
              <span className="position">AWS Cloud Virtual Internship</span>

              <ul>
                <li>
                  Executed and oversaw static website hosting via Amazon S3,
                  which involved setting up bucket regulations, administering
                  content distribution, and enhancing efficiency..
                </li>

                <li>
                  Launched and set up Amazon EC2 instances, managing security
                  protocols, auto-scaling strategies, and carrying out CRUD
                  actions on AWS databases such as RDS.
                </li>
                <li>
                  Configured and managed AWS NAT Gateway to enable secure and
                  scalable outbound internet access for private subnets,
                  optimizing network traffic flow and ensuring compliance with
                  security policies..
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-no-pb" id="resume-section">
        <div className="container">
          <div className="row justify-content-center pb-3" />
          <div className="col-md-10 heading-section text-center ftco-animate" />
        </div>
        <div className="row">
          <h1 className="big-4">Education</h1>
          <div className="underline"></div>
        </div>
        {/* <!-- Education Section --> */}
        <div className="row">
          <div className="col-md-6">
            <div className="resume-wrap ftco-animate">
              <span className="date">2024-2025</span>
              <h2>Masters</h2>
              <span className="position">University of Cincinati</span>
              <p className="mt-4">Grade:3.8</p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="resume-wrap ftco-animate">
              <span className="date">2019-2023</span>
              <h2>Bachelor of Engineering</h2>
              <span className="position">KL University</span>
              <p className="mt-4">Grade:3.68</p>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section" id="project-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-5">
            <div className="col-md-7 heading-section text-center ftco-animate">
              <h2 className="mb-4">Projects</h2>
              <p>
                Below are the sample Data Analytics projects on SQL, Python,
                Reactjs & Java .
              </p>
            </div>
          </div>
        </div>
        <div className="row d-flex">
          <div className="col-md-4 d-flex ftco-animate">
            <div className="blog-entry justify-content-end">
              <a
                href="https://www.linkedin.com/posts/ravihimaswetha_klcse-kluniversity-jfsd-activity-6889399549723459585-Ykis?utm_source=share&utm_medium=member_desktop"
                className="block-20 zoom-effect"
                style={{ backgroundImage: "url('images/proj_1.jpg')" }}
              ></a>
              <div className="text mt-3 float-right d-block">
                <h3 className="heading">Online Voting System</h3>

                <p>
                  The main objective of the system is a replacement of the
                  traditional system that is in existence.This smart system
                  reduces the time for voting and also the system is reliable
                  and faster. The voter cast their vote enter the
                  confirmation.Database maintained by this system usually
                  contains the Voters information,Candidate information,The
                  final Result of total votes.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex ftco-animate">
            <div className="blog-entry justify-content-end">
              <a
                href="https://github.com/rishabhnmishra/Python_Diwali_Sales_Analysis/blob/main/Diwali_Sales_Analysis.ipynb"
                className="block-20 zoom-effect"
                style={{ backgroundImage: "url('images/proj_2.jpg'" }}
              ></a>
              <div className="text mt-3 float-right d-block">
                <h3 className="heading">Travel Tourism and Hospitality</h3>
                <p>
                  Developed a React-based travel and tourism platform that
                  allows users to book travel tickets, hotel rooms, and
                  sightseeing tours in various localities. Integrated real-time
                  APIs for availability and dynamic search filters. Implemented
                  user authentication, booking management, and secure payment
                  gateways. Built a responsive design for seamless user
                  experience across devices..
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex ftco-animate">
            <div className="blog-entry">
              <a
                href="https://github.com/rishabhnmishra/Madhav_Store_Analysis_PowerBI/blob/main/Madhav%20Store%20dashboard.jpg"
                className="block-20 zoom-effect"
                style={{ backgroundImage: "url('images/proj_3.jpg'" }}
              ></a>
              <div className="text mt-3 float-right d-block">
                <h3 className="heading">
                  <a href="https://github.com/rishabhnmishra/Madhav_Store_Analysis_PowerBI/blob/main/Madhav%20Store%20dashboard.jpg">
                    Power BI Sales dashboard Project for Beginners
                  </a>
                </h3>
                <p>
                  Designed a power bi dashboard for Madhav Store to track and
                  analyze the online sales data acorss India.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- added justify-content-center to center align the last two projects --> */}
        <div className="row d-flex justify-content-center">
          <div className="col-md-4 d-flex ftco-animate">
            <div className="blog-entry justify-content-end">
              <a
                href="https://github.com/rishabhnmishra/sales_forecasting/tree/main"
                className="block-20 zoom-effect"
                style={{ backgroundImage: "url('images/proj_4.jpg')" }}
              ></a>
              <div className="text mt-3 float-right d-block">
                <h3 className="heading">
                  <a href="https://github.com/rishabhnmishra/sales_forecasting/tree/main">
                    Sales Forecast- Time Series Forecasting
                  </a>
                </h3>
                <p>
                  Used multiple machine learning models to forecast sales
                  (retail store) and performed time series analysis.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex ftco-animate">
            <div className="blog-entry justify-content-end">
              <a
                href="https://github.com/rishabhnmishra/customer_segmentation/blob/main/Customer_Segmentation-final.ipynb"
                className="block-20 zoom-effect"
                style={{ backgroundImage: "url('images/proj_5.jpg')" }}
              ></a>
              <div className="text mt-3 float-right d-block">
                <h3 className="heading">
                  <a href="https://github.com/rishabhnmishra/customer_segmentation/blob/main/Customer_Segmentation-final.ipynb">
                    Customer Segmentation using clustering model
                  </a>
                </h3>
                <p>
                  Developed a ML model to give various recommendations of
                  financial products &amp; services on target customer groups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="ftco-section ftco-no-pt ftco-no-pb ftco-counter img"
        id="section-counter"
      >
        <div className="container">
          <div className="row d-md-flex align-items-center">
            <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18">
                <div className="text">
                  <strong className="number" data-number="20">
                    0
                  </strong>
                  <span>Achievements</span>
                </div>
              </div>
            </div>
            <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18">
                <div className="text">
                  <strong className="number" data-number="50">
                    0
                  </strong>
                  <span>Certifications</span>
                </div>
              </div>
            </div>
            <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18">
                <div className="text">
                  <strong className="number" data-number="5">
                    0
                  </strong>
                  <span> Hackathons participated </span>
                </div>
              </div>
            </div>
            <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18">
                <div className="text">
                  <strong className="number" data-number="500">
                    0
                  </strong>
                  <span>Cups of coffee</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="ftco-section ftco-hireme img margin-top"
          style={{ backgroundImage: "url(images/bg_1.jpg')" }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7 ftco-animate text-center">
                <h2>
                  More projects on<span> Github </span>{" "}
                </h2>
                <div className="heading">
                  {" "}
                  <h4>
                    {" "}
                    I love to solve business problems &amp; uncover hidden data
                    stories{" "}
                  </h4>
                  <p>
                    <a
                      href="https://github.com/"
                      className="btn btn-primary py-3 px-5"
                    >
                      GitHub
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="ftco-section contact-section ftco-no-pb"
        id="contact-section"
      >
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section text-center ftco-animate">
              <h1 className="big big-2">Contact</h1>
              <h2 className="mb-4">Contact Me</h2>
              <p>Below are the details to reach out to me!</p>
            </div>
          </div>
        </div>

        <div className="row d-flex contact-info mb-5">
          <div className="col-md-6 col-lg-3 d-flex ftco-animate">
            <div className="align-self-stretch box p-4 text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="icon-map-signs"></span>
              </div>
              <h3 className="mb-4">Address</h3>
              <p>Cincinnati, Ohio</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex ftco-animate">
            <div className="align-self-stretch box p-4 text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="icon-phone2"></span>
              </div>
              <h3 className="mb-4">Contact Number</h3>
              <p>
                <a href="tel://0101010101">+1 717-991-2165</a>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex ftco-animate">
            <div className="align-self-stretch box p-4 text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="icon-paper-plane"></span>
              </div>
              <h3 className="mb-4">Email Address</h3>
              <p>
                <a href="mailto:info@yoursite.com">raviha@mail.uc.edu</a>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex ftco-animate">
            <div className="align-self-stretch box p-4 text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="icon-globe"></span>
              </div>
              <h3 className="mb-4">Download Resume</h3>
              <p>
                <a href="#">resumelink</a>
              </p>
            </div>
          </div>

          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7 ftco-animate text-center">
                <h2>
                  Have a<span> Question? </span>{" "}
                  <a
                    href="https://forms.gle/uLaTShUKXraAvHJ77"
                    className="btn btn-primary py-3 px-5"
                  >
                    Click Here
                  </a>{" "}
                </h2>
              </div>
            </div>
            {/* <br/> */}
            <ul className="ftco-footer-social list-unstyled d-flex justify-content-center align-items-center mb-0">
              <li className="ftco-animate normal-txt">Find me on </li>

              <li className="ftco-animate">
                <a href="https://www.linkedin.com/in/ravihimaswetha/">
                  <span className="icon-linkedin"></span>
                </a>
              </li>

              <li className="ftco-animate">
                <a href="https://www.instagram.com/rishabhnmishra/">
                  <span className="icon-instagram"></span>
                </a>
              </li>
            </ul>
            {/* <br/> */}
          </div>
        </div>
      </section>

      {/* <footer className="ftco-footer ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                Link back to Colorlib can't be removed. Template is licensed
                under CC BY 3.0. Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved | This template is made with{" "}
                <i className="icon-heart color-danger" aria-hidden="true"></i>{" "}
                by{" "}
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a>
                Link back to Colorlib can't be removed. Template is licensed
                under CC BY 3.0.
              </p>
            </div>
          </div>
        </div>
      </footer> */}

      {/* <div id="ftco-loader" className="show fullscreen">
        <svg className="circular" width="48px" height="48px">
          <circle
            className="path-bg"
            cx="24"
            cy="24"
            r="22"
            fill="none"
            stroke-width="4"
            stroke="#eeeeee"
          />
          <circle
            className="path"
            cx="24"
            cy="24"
            r="22"
            fill="none"
            stroke-width="4"
            stroke-miterlimit="10"
            stroke="#F96D00"
          />
        </svg>
      </div> */}
    </div>
  );
}

export default App;
