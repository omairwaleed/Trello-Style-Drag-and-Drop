import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Candidate } from "../types/Candidate";

const CandidateCard = ({
  candidate,
  index,
}: {
  candidate: Candidate;
  index: number;
}) => {
  return (
    <Draggable key={candidate.id} draggableId={candidate.id} index={index}>
      {(providedIn) => (
        <div
          className="candidate-card"
          ref={providedIn.innerRef}
          {...providedIn.draggableProps}
          {...providedIn.dragHandleProps}
        >
          <div className="image-card">
            <img
              width={80}
              height={80}
              style={{
                borderRadius: 20,
                objectFit: "cover",
                overflow: "hidden",
              }}
              alt=""
              src={candidate.image}
            />
            <div className="rating-container">
              <span className="rating">{candidate.rating}.0</span>
              <span className="star">&#9733;</span>
            </div>
          </div>
          <div style={{ width: "100%", display: "grid" }}>
            <span
              className="text-style"
              style={{
                fontWeight: "700",
                fontSize: 18,
                marginBottom: 8,
              }}
            >
              {candidate.name}
            </span>
            <span
              className="text-style"
              style={{
                color: "gray",
                marginBottom: 5,
              }}
            >
              {candidate.location}
            </span>
            <span
              className="text-style"
              style={{
                color: "gray",
                marginBottom: 5,
              }}
            >
              {candidate.contact}
            </span>
            {candidate.status && (
              <div className="status-style">
                <span style={{ color: "white" }}>{candidate.status}</span>
              </div>
            )}
          </div>
          <div></div>
        </div>
      )}
    </Draggable>
  );
};

export default CandidateCard;
