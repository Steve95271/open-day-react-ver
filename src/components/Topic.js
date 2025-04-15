import React from "react";
import Program from "./Program";

const Topic = ({ topic, timeFilter }) => {
  // console.log("Programms");
  // console.log(topic.programs);

  const filteredPrograms = topic.programs.filter((program) => {
    const hour = new Date(program.start_time).getHours();
    switch (timeFilter) {
      case "all":
        return true;
      case "morning":
        return hour < 12;
      case "afternoon":
        return hour >= 12;
      default:
        return true;
    }
  });

  return (
    <section className="topic">
      <div className="topic-header">
        <div>
          <h2 className="topic-title">{topic.name}</h2>
          <p>{topic.description}</p>
        </div>
      </div>
      <div className="programs-container">
        {filteredPrograms
          // sort by early start
          .sort((a, b) => a.start_time - b.start_time)
          .map((program) => {
            // console.log(topic.programs);
            return <Program key={program.id} program={program} />;
          })}
      </div>
    </section>
  );
};

export default Topic;
