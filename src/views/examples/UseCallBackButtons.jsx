/* eslint-disable no-undef */
import React from "react";

const UseCallBackButtons = props => {
  return (
    <div>
      <buton className="btn" onClick={() => props.inc(6)}>
        +6
      </buton>
      <buton className="btn" onClick={() => props.inc(12)}>
        +12
      </buton>
      <buton className="btn" onClick={() => props.inc(18)}>
        +18
      </buton>
    </div>
  );
};

export default React.memo(UseCallBackButtons);
