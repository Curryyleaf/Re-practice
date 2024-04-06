import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isediting, setIsediting] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // setAlert({ show: true, msg: "please add sthg", type: "danger" });

      // INSTEAD NOW YOU WRITE :
      showAlert(true, "danger", "please add something ");
    } else if (name && isediting) {
      // editing
    } else {
      // show alert
      showAlert(true, "success", "Saman Add vayeko CHa ");
      const newItem = { id: new Date().getTime().toString(), title: name };

      setList([...list, newItem]);
      setName("");
    }
  };
  const clearList = () => {
    showAlert(true, "danger ", "Sabai khali gareko Cha ");
    setList([]);
  };

  const removeItem = (id) => {
    showAlert(true, "danger", "Saman Hatayeko cha ");
    setList(list.filter((item) => item.id !== id));
  };

  const showAlert = (show = false, type = "", msg = "") => {
    // its similar to constructer
    setAlert({ show, type, msg });
    // here object destructring syntax is used
    //  its a different way of using destructuring
    // here you are creating a new object using the names of arguments

    // so the syntax to create object is just {} and when i am doing  setAlert({ show, msg, type }) , i am creating a new object of keys form parameter and value from arguments ?
  };
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeALert={showAlert} />}
        <h3>Tapaiko Saman list</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="eg.Anda , Alu"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isediting ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} />
          <button className="clear-btn" onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
