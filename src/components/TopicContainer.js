import React from "react";
import Topic from "./Topic";

const TopicContainer = ({ topics, timeFilter }) => {
  // console.log(topics);
  return (
    <section className="topic-container">
      {topics.map((topic) => (
        <Topic key={topic.id} topic={topic} timeFilter={timeFilter} />
      ))}
    </section>
  );
};

export default TopicContainer;
