import React, { useState, useCallback } from "react";
import PageTitle from "../../components/layout/PageTitle";
import UseCallbackButtons from "../examples/UseCallBackButtons";

const UseCallback = (props) => {
<<<<<<< HEAD
  const [count, setcount] = useState(0);
=======
    const [count, setcount] = useState(0)
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
}
>>>>>>> 2c4a649b83aca3370eaaa10a6b88e4fa9d1f99fd

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
};

export default UseCallback;
// retorna uma funçao cacheada