import React from "react";

const TopicSelector = ({ topics, selectedTopic, onChange }) => {
  return (
    <section className="topic-selector selector">
      <label htmlFor="topic-select">Choose different topic to see:</label>
      <select
        id="topic-select"
        value={selectedTopic}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="all">All Topics</option>
        {topics.map((name, index) => (
          <option key={index} value={name}>
            {name}
          </option>
        ))}
      </select>
    </section>
  );
};

export default TopicSelector;
