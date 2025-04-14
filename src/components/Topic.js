import React from "react";
import Program from "./Program";

const Topic = ({ topic }) => {
  return (
    <section className="topic">
      <div className="topic-header">
        <div>
          <h2 className="topic-title">{topic.name}</h2>
          <p>{topic.description}</p>
        </div>
      </div>
      <div className="programs-container">
        {topic.programs.map((program, index) => (
          <Program key={index} program={program} />
        ))}
      </div>
    </section>
  );
};

export default Topic;
