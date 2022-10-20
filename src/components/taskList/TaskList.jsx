import axios from "axios";
import React from "react";
import { TiDeleteOutline } from "react-icons/ti";
const TaskList = ({ task, getTask }) => {
  const deleteTask = async (id) => {
    const url = "https://635182073e9fa1244e6083a6.mockapi.io/api/tasks";
    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error);
    }
  };
  getTask();
  return (
    <div>
      {task.map((item) => {
        const { id, task, date } = item;
        return (
          <div
            key={id}
            className="rounded-4 p-2 bg-secondary mt-2 d-flex justify-content-between"
          >
            <div>
              <h4>{task}</h4>
              <p>{date}</p>
            </div>
            <div>
              <TiDeleteOutline
                onClick={() => {
                  deleteTask(id);
                }}
                style={{
                  cursor: "pointer",
                  marginRight: "20px",
                  marginTop: "20px",
                  fontSize: "2rem",
                  boxShadow: "2px 2px 2px #ECAB9E",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
