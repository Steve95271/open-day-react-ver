import React from "react";
import { formatTime, formatDate } from "../utils/timeUtils";

const Program = ({ program }) => {
  return (
    <div className="program">
      <ProgramHeader
        programType={program.programType}
        title={program.title}
        description={program.description}
      />

      <Location
        school={program.school}
        room={program.room}
        location={program.location}
        startTime={program.start_time}
        endTime={program.end_time}
      />

      <BuildingPic
        picUrl={program.location.cover_image}
        buildingName={program.location.title}
      />

      <Facilities
        accessible={program.location.accessible}
        parking={program.location.parking}
        bikeParking={program.location.bike_parking}
      />
    </div>
  );
};

const ProgramHeader = ({ programType, title, description }) => {
  return (
    <section className="program-header">
      <div
        className="program-type"
        style={{ background: programType.type_colour }}
      >
        {programType.type}
      </div>
      <h3>{title}</h3>
      <p className="description">{description}</p>
    </section>
  );
};

const Location = ({ school, room, location, startTime, endTime }) => {
  return (
    <section>
      <div className="school">
        <strong>School:</strong> {school.name}
      </div>
      <div className="campus">
        <strong>Campus:</strong> {location.campus.title}
      </div>
      <div className="location">
        <strong>Location:</strong> {room}, {location.title}, {location.address},{" "}
        {location.postcode}
      </div>
      <div className="date">
        <strong>Date:</strong> {formatDate(startTime)}
      </div>
      <div className="time">
        <strong>Time:</strong> {formatTime(startTime)} - {formatTime(endTime)}
      </div>
    </section>
  );
};

const BuildingPic = ({ picUrl, buildingName }) => {
  return (
    <figure className="building-fig">
      <img src={picUrl} alt="building" />
      <figcaption>{buildingName}</figcaption>
    </figure>
  );
};

const Facilities = ({ accessible, parking, bikeParking }) => {
  return (
    <section>
      <span>{accessible === 1 ? "♿️" : ""}</span>{" "}
      <span>{parking === 1 ? "🅿️" : ""}</span>{" "}
      <span>{bikeParking === 1 ? "🚲" : ""}</span>
    </section>
  );
};

export default Program;
