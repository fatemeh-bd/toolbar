import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { styleList } from "../toolbar/Toolbar";
import { Divider, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  addToolHandler,
  updateToolProperties,
} from "../../redux/addToolActions";

const Properties = () => {
  let inputStyle = {
    width: "50%",
    "& fieldset": {
      border: "none",
      height: "30px",
    },
    "& input": {
      padding: "0 0.5rem",
    },
  };
  let selectedTool = useSelector((state) => state.designerList.selectedTool);
  const [propertie, setProperties] = useState();
  useEffect(() => {
    setProperties(selectedTool.datas);
  }, [selectedTool]);
  let list = useSelector((state) => state.designerList.list);
  let dispatch = useDispatch();
  const changeProperties = (e) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      dispatch(updateToolProperties(e.target.id, e.target.value));
      let ls = JSON.parse(localStorage.getItem("tools"));
      localStorage.setItem("tools", JSON.stringify(list));
    }
  };
  return (
    <div>
      <Typography variant="h4" component="h2" sx={{ margin: "1rem 0" }}>
        Properties
      </Typography>

      <List sx={styleList} component="nav" aria-label="mailbox folders">
        <ListItem button divider>
          <ListItemText primary="ID" />
          <Divider orientation="vertical" flexItem />
          {console.log(Object.keys(selectedTool).length)}
          <TextField
          disabled={Object.keys(selectedTool).length===0}
            hiddenLabel
            sx={inputStyle}
            value={propertie?.id}
            id="id"
            onKeyDown={changeProperties}
            onChange={(e) =>
              setProperties({ ...propertie, [e.target.id]: e.target.value })
            }
          />
        </ListItem>
        <ListItem button divider>
          <ListItemText primary="Name" />
          <Divider orientation="vertical" flexItem />
          <TextField
          disabled={Object.keys(selectedTool).length===0}
            hiddenLabel
            sx={inputStyle}
            value={propertie?.name}
            id="name"
            onKeyDown={changeProperties}
            onChange={(e) =>
              setProperties({ ...propertie, [e.target.id]: e.target.value })
            }
          />
        </ListItem>
        <ListItem button divider>
          <ListItemText primary="Class" />
          <Divider orientation="vertical" flexItem />
          <TextField
          disabled={Object.keys(selectedTool).length===0}
            hiddenLabel
            sx={inputStyle}
            value={propertie?.class}
            id="class"
            onKeyDown={changeProperties}
            onChange={(e) =>
              setProperties({ ...propertie, [e.target.id]: e.target.value })
            }
          />
        </ListItem>
        <ListItem button divider>
          <ListItemText primary="Required" />
          <Divider orientation="vertical" flexItem />
          <TextField
          disabled={Object.keys(selectedTool).length===0}
            hiddenLabel
            sx={inputStyle}
            value={propertie?.required}
            id="required"
            onKeyDown={changeProperties}
            onChange={(e) =>
              setProperties({ ...propertie, [e.target.id]: e.target.value })
            }
          />
        </ListItem>
        {selectedTool.datas?.type === "fileupload" ? (
          <ListItem button divider>
            <ListItemText primary="accept" />
            <Divider orientation="vertical" flexItem />
            <TextField
            disabled={Object.keys(selectedTool).length===0}
              hiddenLabel
              sx={inputStyle}
              value={propertie?.accept}
              id="accept"
              onKeyDown={changeProperties}
              onChange={(e) =>
                setProperties({
                  ...propertie,
                  [e.target.id]: e.target.value,
                })
              }
            />
          </ListItem>
        ) : (
          <ListItem button divider>
            <ListItemText primary="Value" />
            <Divider orientation="vertical" flexItem />
            <TextField
            disabled={Object.keys(selectedTool).length===0}
              hiddenLabel
              sx={inputStyle}
              value={propertie?.value}
              id="value"
              onKeyDown={changeProperties}
              onChange={(e) =>
                setProperties({ ...propertie, [e.target.id]: e.target.value })
              }
            />
          </ListItem>
        )}

        {selectedTool.datas?.type === "combobox" && (
          <ListItem button divider>
            <ListItemText primary="List" />
            <Divider orientation="vertical" flexItem />
            <TextField
            disabled={Object.keys(selectedTool).length===0}
              hiddenLabel
              sx={inputStyle}
              value={propertie?.valueList}
              id="valueList"
              onKeyDown={changeProperties}
              onChange={(e) =>
                setProperties({
                  ...propertie,
                  [e.target.id]: e.target.value,
                })
              }
            />
          </ListItem>
        )}

        <ListItem button>
          <ListItemText primary="Label" />
          <Divider orientation="vertical" flexItem />
          <TextField
          disabled={Object.keys(selectedTool).length===0}
            hiddenLabel
            sx={inputStyle}
            value={propertie?.label}
            id="label"
            onKeyDown={changeProperties}
            onChange={(e) =>
              setProperties({ ...propertie, [e.target.id]: e.target.value })
            }
          />
        </ListItem>
      </List>
    </div>
  );
};

export default Properties;
