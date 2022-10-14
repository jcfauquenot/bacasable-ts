import React from "react";

interface Props {
  count: number;
  update: React.Dispatch<React.SetStateAction<number>>;
}

const Button: React.FC<Props> = ({ count, update }) => {
  return (
    <div>
      <button onClick={() => update((count) => count + 1)}>count</button>
    </div>
  );
};

export default Button;
