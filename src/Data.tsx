import { Column } from "./types/Column";

export const initialData: Column[] = [
  {
    id: "1",
    title: "Applied",
    candidates: [
      {
        id: "1",
        name: "Silvano Scally",
        location: "New York",
        contact: "1234567890",
        rating: 4,
        status: "New",
        image: require("./assets/image.png"),
      },
      {
        id: "2",
        name: "Lamar Demet",
        location: "New York",
        contact: "1234567890",
        rating: 5,
        status: "New",
        image: require("./assets/image_1.png"),
      },
      {
        id: "3",
        name: "Ramsey yantzen",
        location: "Rome",
        contact: "1234567890",
        rating: 5,
        image: require("./assets/image_3.jpg"),
      },
      {
        id: "4",
        name: "Lorine Brailsford",
        location: "New York",
        contact: "1234567890",
        rating: 4,
        status: "Followed",
        image: require("./assets/image_4.jpg"),
      },
    ],
  },
  {
    id: "2",
    title: "Shortlisted",
    candidates: [
      {
        id: "5",
        name: "Torey cortes",
        location: "New York",
        contact: "1234567890",
        rating: 5,
        status: "New",
        image: require("./assets/image_2.jpg"),
      },
      {
        id: "6",
        name: "Pietra Maillinder",
        location: "New York",
        contact: "1234567890",
        rating: 3,

        image: require("./assets/image_5.jpg"),
      },
      {
        id: "7",
        name: "Karlyn",
        location: "New York",
        contact: "1234567890",
        rating: 4,

        image: require("./assets/image_6.jpg"),
      },
      {
        id: "8",
        name: "Omair Waleed",
        location: "New York",
        contact: "1234567890",
        rating: 5,
        status: "Followed",
        image: require("./assets/image_7.jpg"),
      },
    ],
  },
  {
    id: "3",
    title: "Interview",
    candidates: [
      {
        id: "9",
        name: "Davina",
        location: "Tokyo",
        contact: "1234567890",
        rating: 2,
        status: "New",
        image: require("./assets/image_8.jpg"),
      },
      {
        id: "10",
        name: "Ajay",
        location: "New York",
        contact: "1234567890",
        rating: 4,

        image: require("./assets/image_9.jpg"),
      },
      {
        id: "11",
        name: "Blondy",
        location: "New York",
        contact: "1234567890",
        rating: 4,

        image: require("./assets/image_10.jpg"),
      },
      {
        id: "12",
        name: "Tia",
        location: "New York",
        contact: "1234567890",
        rating: 4,
        image: require("./assets/image_11.jpg"),
      },
    ],
  },
];
