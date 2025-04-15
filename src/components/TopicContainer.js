import React from "react";
import Topic from "./Topic";

const TopicContainer = ({ topics }) => {
  console.log(topics);
  return (
    <section className="topic-container">
      {topics.map((topic) => (
        <Topic key={topic.id} topic={topic} />
      ))}
    </section>
  );
};

export default TopicContainer;
