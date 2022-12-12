import { useState } from 'react';

const challenges = [
  {
    name: 'transistor AND',
    description: 'the transister is a simply NOR gate. Can you make and AND gate using only NORs?',
  },
];

export default function Custom() {
  const [choice, setChoice] = useState(false);
  return (
    <div className="challenge">
      <div className="title">{choice.name || 'Challenge Mode'}</div>
      <div className="description">
        {choice.description ||
          `Below you'll find a few challenges, try to create the requested logic using only what's given!`}
      </div>
      {challenges.map((item) => {
        if (choice != item) {
          return (
            <div className="choice" onClick={() => setChoice(item)}>
              {item.name}
            </div>
          );
        }
      })}
      {choice ? (
        <div className="choice" onClick={() => setChoice(false)}>
          Return
        </div>
      ) : null}
    </div>
  );
}
