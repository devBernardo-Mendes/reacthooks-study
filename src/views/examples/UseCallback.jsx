import React, { useState, useCallback } from "react";
import PageTitle from "../../components/layout/PageTitle";
import UseCallbackButtons from "../examples/UseCallBackButtons";

const UseCallback = (props) => {
  const [count, setcount] = useState(0);
    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />
            <div className="center">
                <span className="text">{count}</span>
            </div>
        </div>
    )
    const inc = useCallback(
      function (delta) {
        setcount(curr => curr + delta);
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
          <UseCallbackButtons inc={inc} />
        </div>
      </div>
    );
}
};

export default UseCallback;
