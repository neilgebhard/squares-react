import { useState } from "react";
import { getRandomBGColor } from "./util";

const DEFAULT_BG_COLOR = "#e9ecef";

const Square = () => {
  const [backgroundColor, setBackgroundColor] = useState(DEFAULT_BG_COLOR);

  const mouseOverHandler = () => {
    setBackgroundColor(getRandomBGColor());
  };

  const mouseOutHandler = () => {
    setBackgroundColor(DEFAULT_BG_COLOR);
  };

  const onClickHandler = () => {
    setBackgroundColor(getRandomBGColor());
  };

  return (
    <div
      className="square"
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}
      onClick={onClickHandler}
      style={{ backgroundColor: backgroundColor }}
    />
  );
};

export default Square;
