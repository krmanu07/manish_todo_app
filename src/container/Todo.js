import React, { useState } from "react";

const Todo = () => {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");
  const [modifyData, setModifyData] = useState({
    open: false,
    id: "",
    data: "",
  });
  const addToList = () => {
    setList((prev) => [...prev, value]);
    setValue("");
  };
  const removeTheData = (index) => {
    const newData = list.filter((val, ind) => index !== ind);
    setList(newData);
  };

  const updateTheData = () => {
    const newData = list.map((val, ind) => {
      if (ind == modifyData.id) {
        return modifyData.data;
      }
      return val;
    });
    setList(newData);
    setModifyData({
      open: false,
      id: "",
      data: "",
    });
  };
  return (
    <div>
      <h1>Todo page</h1>

      <div>
        <label>Add your task </label>
        <input
          value={value}
          onChange={(e) => {
            const val = e.target.value;
            setValue(val);
          }}
          placeholder="add your item"
        />
        <button
          onClick={() => {
            addToList();
          }}
        >
          submit
        </button>
      </div>
      {modifyData.open && (
        <div>
          <label>Modify your task </label>
          <input
            value={modifyData.data}
            onChange={(e) => {
              const val = e.target.value;
              setModifyData((prev) => {
                return {
                  ...prev,
                  data: val,
                };
              });
            }}
            placeholder="add your item"
          />
          <button
            onClick={() => {
              updateTheData();
            }}
          >
            Modify
          </button>
        </div>
      )}

      <ol>
        {list.map((val, index) => {
          return (
            <li>
              {val}
              <button
                onClick={() => {
                  setModifyData({
                    open: true,
                    id: index,
                    data: val,
                  });
                }}
              >
                modifiy
              </button>
              <button
                onClick={() => {
                  removeTheData(index);
                }}
              >
                delete
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
export default Todo;
