import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import Typography from "@mui/material/Typography";
import InboxIcon from "@mui/icons-material/Inbox";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import FilterListIcon from "@mui/icons-material/FilterList";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToolHandler, selectedTool } from "../../redux/addToolActions";
export const styleList = {
  width: "100%",
  height: "92vh",
  bgcolor: "background.paper",
};
const Toolbar = () => {
  let dispatch = useDispatch();
  let list = useSelector((state) => state.designerList.list);

  let addInputHandler = (toolType) => {
    let toolname = list.filter((item) => item.datas.type === toolType);
    toolname = toolname ? `${toolType} ${toolname.length + 1}` : toolType;
    let toolInfo = {
      datas: {
        id: "",
        class: "",
        name: "",
        required: false,
        value: "",
        type: toolType,
        label: toolname,
      },
    };
    if (toolType === "combobox") {
      toolInfo = {
        datas: {
          id: "",
          class: "",
          name: "",
          required: false,
          valueList: "Ten,Twenty,Thirty",
          type: toolType,
          label: toolname,
          value: "",
        },
      };
    }
    if (toolType === "fileupload") {
      toolInfo = {
        datas: {
          id: "",
          class: "",
          name: "",
          accept: "image/png,image/jpeg,image/jpg",
          type: toolType,
          label: toolname,
        },
      };
    }
    dispatch(addToolHandler(toolInfo));
    let ls = JSON.parse(localStorage.getItem("tools"));
    localStorage.setItem(
      "tools",
      JSON.stringify(ls ? [...ls, toolInfo] : [toolInfo])
    );
  };
  return (
    <div>
      <Typography variant="h4" component="h2" sx={{ margin: "1rem 0" }}>
        Toolbar
      </Typography>

      <List sx={styleList} component="nav" aria-label="mailbox folders">
        <ListItem button divider onClick={() => addInputHandler("textbox")}>
          <InboxIcon sx={{ marginRight: "1rem" }} />
          <ListItemText primary="TextBox" />
        </ListItem>

        <ListItem button divider onClick={() => addInputHandler("checkbox")}>
          <CheckBoxIcon sx={{ marginRight: "1rem" }} />
          <ListItemText primary="CheckBox" />
        </ListItem>
        <ListItem button divider onClick={() => addInputHandler("combobox")}>
          <FilterListIcon sx={{ marginRight: "1rem" }} />
          <ListItemText primary="ComboBox" />
        </ListItem>

        <ListItem button divider onClick={() => addInputHandler("fileupload")}>
          <CloudUploadIcon sx={{ marginRight: "1rem" }} />
          <ListItemText primary="File Upload" />
        </ListItem>

        <ListItem button onClick={() => addInputHandler("radiobutton")}>
          <RadioButtonCheckedIcon sx={{ marginRight: "1rem" }} />
          <ListItemText primary="Radio Button" />
        </ListItem>
      </List>
    </div>
  );
};

export default Toolbar;
