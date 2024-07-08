import { Candidate } from "./Candidate";

export type Column = {
  id: string;
  title: string;
  candidates: Candidate[];
};
