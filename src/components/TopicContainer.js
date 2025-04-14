import React from "react";
import Topic from "./Topic";

const TopicContainer = ({ topics }) => {
  return (
    <section className="topic-container">
      {topics.map((topic, idx) => (
        <Topic key={idx} topic={topic} />
      ))}
    </section>
  );
};

export default TopicContainer;
