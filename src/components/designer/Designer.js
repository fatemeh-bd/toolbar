import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import {
  addToolHandler,
  deleteTool,
  fetchTools,
  selectedTool,
} from "../../redux/addToolActions";
import { useDispatch, useSelector } from "react-redux";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
const Designer = () => {
  let dispatch = useDispatch();
  const fileInputRef = useRef();
  let list = useSelector((state) => state.designerList.list);
  useEffect(() => {
    let ls = localStorage.getItem("tools");
    ls && dispatch(fetchTools(JSON.parse(ls)));
  }, []);
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };
  const [combo, setcombo] = useState("");

  const handleChange = (event) => {
    setcombo(event.target.value);
  };
  const deleteHandler = (itm) => {
    dispatch(deleteTool(itm));
  };
  return (
    <div>
      <Typography variant="h4" component="h2" sx={{ margin: "1rem 0" }}>
        Designer
      </Typography>
      <Box sx={{ minHeight: "92vh" }}>
        {console.log(list)}
        {list.length ? (
          list.map((item, i) =>
            item.datas?.type === "textbox" ? (
              <Box sx={{ position: "relative" }} key={i}>
                <TextField
                  id={item.datas?.id}
                  label={item.datas?.label}
                  variant="outlined"
                  required={item.datas?.required === "true"}
                  onClick={() => dispatch(selectedTool(item))}
                  value={item.datas?.value}
                  className={`${item.datas?.class}`}
                  sx={{ margin: "0.5rem", width: "40%" }}
                  name={item.datas?.name}
                  error={item.datas?.required === "true" && !item.datas?.value}
                />
                <DeleteForeverIcon
                  sx={{ color: "red" }}
                  onClick={() => deleteHandler(item)}
                />
              </Box>
            ) : item.datas?.type === "checkbox" ? (
              <Box key={i}>
                <FormControlLabel
                  id={item.datas?.id}
                  required={item.datas?.required === "true"}
                  error={item.datas?.required === "true"}
                  onClick={() => dispatch(selectedTool(item))}
                  control={<Checkbox />}
                  label={item.datas?.label}
                  name={item.datas?.name}
                />
                <DeleteForeverIcon
                  sx={{ color: "red" }}
                  onClick={() => deleteHandler(item)}
                />
              </Box>
            ) : item.datas?.type === "radiobutton" ? (
              <Box key={i}>
                <FormControlLabel
                  id={item.datas?.id}
                  required={item.datas?.required === "true"}
                  error={item.datas?.required === "true"}
                  onClick={() => dispatch(selectedTool(item))}
                  value={item.datas?.value}
                  control={<Radio />}
                  label={item.datas?.label}
                  name={item.datas?.name}
                />
                <DeleteForeverIcon
                  sx={{ color: "red" }}
                  onClick={() => deleteHandler(item)}
                />
              </Box>
            ) : item.datas?.type === "combobox" ? (
              <Box key={i}>
                <Box onClick={() => dispatch(selectedTool(item))}>
                  <FormControl sx={{ minWidth: "20%" }}>
                    <InputLabel id="demo-simple-select-label">
                      {item.datas?.label}
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id={item.datas?.id}
                      name={item.datas?.name}
                      value={item.datas?.value}
                      label={item.datas?.label}
                      onChange={handleChange}
                      required={item.datas?.required === "true"}
                      error={
                        item.datas?.required === "true" && !item.datas?.value
                      }
                    >
                      {item.datas?.valueList.split(",")?.map((subitem) => (
                        <MenuItem key={i} value={subitem}>
                          {subitem}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
                <DeleteForeverIcon
                  sx={{ color: "red" }}
                  onClick={() => deleteHandler(item)}
                />
              </Box>
            ) : (
              <Box key={i}>
                <Box
                  sx={{ display: "inline-block" }}
                  onClick={() => dispatch(selectedTool(item))}
                >
                  <input
                    type="file"
                    id={item.datas?.id}
                    name={item.datas?.name}
                    className={item.datas?.class}
                    accept={item.datas?.accept}
                    style={{ display: "none" }}
                    ref={fileInputRef}
                    onChange={handleFileInputChange}
                  />
                  <Button
                    variant="contained"
                    onClick={handleClick}
                    sx={{ margin: "1rem" }}
                  >
                    {item.datas?.label}
                  </Button>
                </Box>
                <DeleteForeverIcon
                  sx={{ color: "red" }}
                  onClick={() => deleteHandler(item)}
                />
              </Box>
            )
          )
        ) : (
          <Typography sx={{ margin: "3rem 0" }}>
            Please Select from Toolbar
          </Typography>
        )}
      </Box>
    </div>
  );
};

export default Designer;
