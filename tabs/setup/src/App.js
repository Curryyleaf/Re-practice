import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setloading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setloading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // you should not plpace this useEffect after if (loading) . you cant put it after conditional codes , it must be rendered without  condtion

  if (loading) {
    return (
      <section className="section-loading">
        <h1>loading...</h1>
      </section>
    );
  }
  const { company, dates, duties, title } = jobs[value];
  // if you move this destructuring before loading it wont work
  //  in the initial render all the codes are executed if loading is true it means the fectching is not complete and jobs has no value without value the destructuring cant happen giving type error
  return (
    <section className="section">
      <div className="title">
        <h2>EXperience </h2>
        <div className="underline"></div>
        <div className="jobs-center">
          {/* btn container*/}
          <div className="btn-container">
            {jobs.map((item, index) => {
              return (
                <button
                  key={item.id}
                  onClick={() => setValue(index)}
                  className={`job-btn ${index === value && 'active-btn'}`}
                >
                  {item.company}
                  {/* here we arenot directly writing compant because we cant unless we had destrucuture */}
                </button>
              );
            })}
          </div>
          {/* jon info  */}
          <article className="job-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates}</p>

            {duties.map((duty, index) => {
              return (
                <div key={index} className="job-desc">
                  <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                  <p>{duty}</p>
                </div>
              );
            })}
          </article>
        </div>
      </div>
    </section>
  );
}

export default App;
