export const addToolHandler = (data) => {
  return {
    type: "ADD_TOOL",
    payload: data,
  };
};
export const selectedTool = (data) => {
  return {
    type: "SELECT_TOOL",
    payload: data,
  };
};
export const updateToolProperties = (id, newData) => {
  return {
    type: "UPDATE_TOOL_PROPERTIES",
    id,
    newData,
  };
};

export const fetchTools = (data) => {
  return {
    type: "FETCH_TOOL",
    payload: data,
  };
};

export const deleteTool = (data) => {
  return {
    type: "DELETED",
    data,
  };
};
