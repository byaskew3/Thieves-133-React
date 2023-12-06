import { useState } from "react";
import './ListGroup.css'

interface Props {
    cities: string[]
    cohortNum: number
}

const ListGroup = ({ cities, cohortNum }: Props) => {

  const [selectedIdx, setSelectedIdx] = useState(-1);

  return (
    <>
      <div>
        <h1 className="cohort">Thieves-{cohortNum}</h1>
        <ul className="list-group">
          {cities.map((city, idx) => {
            return (
              <li
                onClick={() => {
                  setSelectedIdx(idx);
                }}
                key={idx}
                className={
                  selectedIdx === idx
                    ? "list-group-item active"
                    : "list-group-item"
                }
              >
                {city}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default ListGroup;
