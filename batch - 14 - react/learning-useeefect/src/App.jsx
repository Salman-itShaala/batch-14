import { useEffect, useState } from "react";

function App() {
  const [tab, setTab] = useState("posts"); // posts, connection, jobs

  return (
    <div>
      <button onClick={() => setTab("posts")}>All posts</button>
      <button onClick={() => setTab("connection")}>All Conncetions</button>
      <button onClick={() => setTab("jobs")}>All Jobs</button>

      {tab === "posts" && <AllPosts />}
      {tab === "connection" && <AllConnections />}
      {tab === "jobs" && <AllJobs />}
    </div>
  );
}

function AllPosts() {
  useEffect(() => {
    console.log("Subscribing to all posts backend");

    // un-mount
    function abcd() {
      console.log("Un-Subscribing to all posts backend");
    }

    return abcd;
  }, []);

  return <h2>All posts</h2>;
}

function AllConnections() {
  return <h2>All connections</h2>;
}

function AllJobs() {
  return <h2>All jobs</h2>;
}

export default App;
