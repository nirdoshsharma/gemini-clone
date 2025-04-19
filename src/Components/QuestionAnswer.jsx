import React from "react";
import Answers from "./Answers";
const QuestionAnswer = ({ item, index }) => {
  return (
    <div key={index} className={item.type == "q" ? "flex justify-end" : ""}>
      {item.type === "q" ? (
        <li className="text-right border-8 dark:bg-zinc-700 dark:border-zinc-700 bg-red-100 border-red-100 p-1 rounded-tl-3xl rounded-br-3xl rounded-bl-3xl w-fit">
          <Answers
            ans={item.text}
            index={index}
            totalResult={1}
            type={item.type}
          />
        </li>
      ) : (
        item.text.map((ansItem, ansIndex) => (
          <li className="text-left p-1" key={`${index}-${ansIndex}`}>
            <Answers
              ans={ansItem}
              index={ansIndex}
              totalResult={item.text.length}
              type={item.type}
            />
          </li>
        ))
      )}
    </div>
  );
};

export default QuestionAnswer;
