import React, { useEffect, useState } from "react";
import checkHeading, { replaceHeadingStars } from "../helper";

const Answers = ({ ans, index, totalResult, type }) => {
  const [heading, setHeading] = useState(false);
  const [answer, setAnswer] = useState(ans);

  useEffect(() => {
    if (checkHeading(ans)) {
      setHeading(true);
      setAnswer(replaceHeadingStars(ans));
    }
  }, []);
  return (
    <>
      {index == 0 && totalResult > 1 ? (
        <span className="text-2xl">{answer}</span>
      ) : heading ? (
        <span className="pt-2 text-2xl block text-white">{answer}</span>
      ) : (
        <span className={type == "q" ? "pl-1" : "pl-5"}>{answer}</span>
      )}
    </>
  );
};

export default Answers;
