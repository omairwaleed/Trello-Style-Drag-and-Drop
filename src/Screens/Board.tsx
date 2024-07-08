import React, { useRef, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { initialData } from "../Data.tsx";
import { Column } from "../types/Column.tsx";
import { Candidate } from "../types/Candidate.tsx";
import CandidateCard from "../components/CandidateCard.tsx";
const Board = () => {
  const [state, setState] = useState(initialData);
  const animationFrameId = useRef<any>(null);
  const onDragEnd = (result) => {
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }
    const { destination, source, draggableId } = result;
    console.log(result);

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const sourceColumnn = state.find(
      (column: Column) => column.id === source.droppableId
    );
    const destinationColumnn = state.find(
      (column: Column) => column.id === destination.droppableId
    );
    console.log(sourceColumnn, destinationColumnn);

    // same column handling
    if (
      sourceColumnn &&
      destinationColumnn &&
      sourceColumnn.id === destinationColumnn.id
    ) {
      const candidate = sourceColumnn.candidates.find(
        (el) => el.id === draggableId
      );
      const newCandidatesArray = [...sourceColumnn?.candidates];
      newCandidatesArray.splice(source.index, 1);
      newCandidatesArray.splice(destination.index, 0, candidate!);
      setState((prev) =>
        prev.map((el) =>
          el.id === sourceColumnn.id
            ? { ...el, candidates: newCandidatesArray }
            : el
        )
      );
      return;
    }

    // Moving from one list to another
    else {
      const newSourceCandidates: Candidate[] = [...sourceColumnn!.candidates];
      newSourceCandidates.splice(source.index, 1)!;
      const newDestinationCandidates: Candidate[] = [
        ...destinationColumnn!.candidates,
      ];
      const candidate = sourceColumnn!.candidates.find(
        (el) => el.id === draggableId
      );
      newDestinationCandidates.splice(destination.index, 0, candidate!)!;
      console.log(newSourceCandidates);
      console.log(newDestinationCandidates);
      setState((prev) =>
        prev.map((el) =>
          el.id === sourceColumnn!.id
            ? { ...el, candidates: [...newSourceCandidates] }
            : el.id === destinationColumnn!.id
            ? { ...el, candidates: [...newDestinationCandidates] }
            : el
        )
      );
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="container">
        {state.map((column) => {
          const candidates = column.candidates;
          return (
            <Droppable key={column.id} droppableId={column.id}>
              {(provided) => (
                <div
                  className="column"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <div className="header-card">
                    <h2>{column.title}</h2>
                    <div>
                      <p
                        style={{
                          display: "inline",
                          fontSize: 22,
                          fontWeight: "700",
                          marginRight: 8,
                        }}
                      >
                        {column.candidates.length}
                      </p>
                      <p
                        style={{
                          display: "inline",
                          color: "gray",
                          fontWeight: "400",
                        }}
                      >
                        Total
                      </p>
                    </div>
                  </div>

                  {candidates.map((candidate, index) => (
                    <CandidateCard candidate={candidate} index={index} />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          );
        })}
      </div>
    </DragDropContext>
  );
};

export default Board;
