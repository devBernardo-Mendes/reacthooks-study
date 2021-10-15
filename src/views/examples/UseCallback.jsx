import React, { useCallback, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import UseCallBackButtons from "./UseCallBackButtons";

const UseCallback = (props) => {
  const [count, setcount] = useState(0);

  const inc = useCallback(
    function (delta) {
      setcount((curr) => curr + delta);
    },
    [setcount]
  );

  return (
    <div className="UseCallback">
      <PageTitle
        title="Hook UseCallback"
        subtitle="Retorna uma função memoizada!"
      />
      <div className="center">
        <span className="text">{count}</span>
        <UseCallBackButtons inc={inc} />
      </div>
    </div>
  );
};

export default UseCallback;
