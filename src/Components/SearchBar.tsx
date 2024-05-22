import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Add";
import DirectionsIcon from "@mui/icons-material/Directions";
import TodoList from "./TodoList";
import { Grid, Typography } from "@mui/material";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function TaskInputBase() {
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const [inputValue, setInputValue] = React.useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      const newTodo: Todo = {
        id: todos.length + 1,
        text: inputValue.trim(),
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault(); // Prevent default form submission behavior
    handleAddTodo();
  };

  const handleToggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter' && inputValue?.length > 0) {
      event.preventDefault(); // Prevent default form submission behavior
      handleAddTodo();
    }
  };

  return (
    <>
      {todos?.length > 0 ? (
        <Grid
          mt={10}
          xs={9}
          container
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="h6">{`Total Todo Items: ${todos?.length} `}</Typography>
          <Typography variant="h6">{`Todo Items Completed: ${
            todos.filter((todo: Todo) => todo.completed === true)?.length
          } `}</Typography>
          <Typography variant="h6">{`Todo Items Not Completed: ${
            todos.filter((todo: Todo) => todo.completed !== true)?.length
          } `}</Typography>
        </Grid>
      ) : null}

      <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{
          p: "10px",
          mt: "40px",
          display: "flex",
          alignItems: "center",
          width: "80%",
          justifyContent: "center",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Enter your task"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          inputProps={{ "aria-label": "Enter your task" }}
        />
        <IconButton
          //onClick={handleAddTodo}
          type="submit"
          sx={{ p: "10px" }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      <TodoList
        todos={todos}
        handleToggleTodo={(val) => handleToggleTodo(val)}
      />
    </>
  );
}
