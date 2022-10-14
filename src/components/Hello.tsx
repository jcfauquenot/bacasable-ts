import React from "react";

interface Props {
  didi: string;
}

const Hello: React.FC<Props> = ({ didi }) => {
  console.log(didi);

  return (
    <div>
      <h2>bonjour {didi} </h2>
    </div>
  );
};
export default Hello;
