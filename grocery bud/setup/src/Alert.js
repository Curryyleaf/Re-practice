import React, { useEffect } from "react";

const Alert = ({ msg, type, removeALert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      // removeALert(false);
      removeALert();
      // jut invoking is enough cuz you have false as default balue inside showAlert function
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
