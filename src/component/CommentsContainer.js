import React from "react";
import Comment from "./Comment";
import CommentList from "./CommentList";

const commentsData = [
  {
    name: "Ritik Srivastava",
    text: "Lorem ipsum doller sit amut",
    replies: [],
  },
  {
    name: "Ritik Srivastava",
    text: "Lorem ipsum doller sit amut",
    replies: [
      {
        name: "Ritik Srivastava",
        text: "Lorem ipsum doller sit amut",
        replies: [  {
            name: "Ritik Srivastava",
            text: "this is very nice movie",
            replies: [],
          },],
      },
    ],
  },
  {
    name: "Ritik Srivastava",
    text: "Lorem ipsum doller sit amut",
    replies: [
      {
        name: "Ritik Srivastava",
        text: "Lorem ipsum doller sit amut",
        replies: [
          {
            name: "Ritik Srivastava",
            text: "Lorem ipsum doller sit amut",
            replies: [
              {
                name: "Ritik Srivastava",
                text: "Lorem ipsum doller sit amut",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Ritik Srivastava",
    text: "Lorem ipsum doller sit amut",
    replies: [
      {
        name: "Ritik Srivastava",
        text: "Lorem ipsum doller sit amut",
        replies: [
          {
            name: "Ritik Srivastava",
            text: "Lorem ipsum doller sit amut",
            replies: [
              {
                name: "Ritik Srivastava",
                text: "Lorem ipsum doller sit amut",
                replies: [
                  {
                    name: "Ritik Srivastava",
                    text: "Lorem ipsum doller sit amut",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const commentsContainer = () => {
  return (
    <div className="m-2 p-2">
      <h1 className="text-2xl font-bold"> comments : </h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default commentsContainer;