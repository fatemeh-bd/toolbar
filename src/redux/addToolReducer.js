const initializedState = {
  list: [],
  selectedTool: {},
};
const addToolReducer = (state = initializedState, action) => {
  switch (action.type) {
    case "FETCH_TOOL":
      return {
        ...state,
        list: action.payload,
      };
    case "ADD_TOOL":
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case "SELECT_TOOL":
      return { ...state, selectedTool: action.payload };
    case "UPDATE_TOOL_PROPERTIES":
      let currentItem = state.list.findIndex(
        (item) => item == state.selectedTool
      );
      state.list[currentItem].datas[action.id] = action.newData;

      return {
        ...state,
        list: [...state.list],
      };
    case "DELETED":
      let newList = state.list.filter((item) => item !== action.data);
      return {
        ...state,
        list: newList,
      };
    default:
      return state;
  }
};

export default addToolReducer;
