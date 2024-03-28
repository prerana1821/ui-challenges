import moment from "moment";
import { useEffect, useState } from "react";
import "./App.css";

interface JobI {
  title: string;
  time: number;
  by: string;
  url: string;
  id: number;
}

const JobFeed = () => {
  const [jobIds, setJobIDs] = useState([]);
  const [jobs, setJobs] = useState<JobI[]>([]);
  const [count, setCount] = useState(5);

  const getJobDetails = async (data: number[], num1: number, num2: number) => {
    const requests = data
      .slice(num1, num2)
      .map((id) =>
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      );

    const responses = await Promise.all(requests);
    const errors = responses.filter((response) => !response.ok);

    if (errors.length > 0) {
      throw errors.map((response) => Error(response.statusText));
    }

    const json = responses.map((response) => response.json());
    const jobPosts = await Promise.all(json);

    setJobs((prevData: JobI[]) => {
      return [...prevData, ...jobPosts];
    });
  };

  useEffect(() => {
    (async () => {
      try {
        const jobIdsResponse = await fetch(
          "https://hacker-news.firebaseio.com/v0/jobstories.json"
        );
        const data = await jobIdsResponse.json();

        setJobIDs(data);

        getJobDetails(data, 0, count);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  console.log(jobs);

  return (
    <div className={"container"}>
      <h1 className={"header"}>Hackernews Jobs</h1>

      {jobs.length > 0 &&
        jobs.map((job: JobI) => {
          return (
            <a
              key={job.id}
              href={job.url}
              target='__blank'
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className={"postContainer"}>
                <p>ID: {job.id}</p>
                <h1>{job.title}</h1>
                <p>{moment(job?.time).format("Do MMM YYYY hh:mm a")}</p>
                <p>Posted by: {job.by}</p>
              </div>
            </a>
          );
        })}

      {jobIds.length !== count && (
        <button
          className={"button"}
          onClick={() => {
            getJobDetails(jobIds, count, count + 5);
            setCount((prevCount) => prevCount + 5);
          }}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default JobFeed;
