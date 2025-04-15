import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import TopicSelector from "./components/TopicSelector";
import TopicContainer from "./components/TopicContainer";
import TimeFilter from "./components/TimeFilter";
import "./style.css";

function App() {
  const [data, setData] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState("all");
  const [timeFilter, setTimeFilter] = useState("all");

  useEffect(() => {
    fetch("OpenDay.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log("Hello?");
        setData(data);
      })
      // TODO make change when using HTTP request
      .catch((error) => console.error("Error", error));
  }, []);

  const handleTopicChange = (topic) => {
    setSelectedTopic(topic);
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  // drop down menu item
  const topicsToRender =
    selectedTopic === "all"
      ? data.topics
      : data.topics.filter((topic) => topic.name === selectedTopic);

  return (
    <div className="container">
      <Header
        description={data.description}
        start_time={data.start_time}
        end_time={data.end_time}
      />
      <TopicSelector
        topics={data.topics.map((topic) => topic.name)}
        selectedTopic={selectedTopic}
        onChange={handleTopicChange}
      />
      <TimeFilter filter={timeFilter} onFilterChange={setTimeFilter} />
      <TopicContainer topics={topicsToRender} timeFilter={timeFilter} />
    </div>
  );
}

export default App;
