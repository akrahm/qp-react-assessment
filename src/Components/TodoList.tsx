import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface ITodoListProps {
  todos: Todo[];
  handleToggleTodo: (id: number) => void;
}

const TodoList: React.FC<ITodoListProps> = ({
  todos = [],
  handleToggleTodo,
}) => {
  return todos?.length > 0 ? (
    <List
      sx={{
        width: "100%",
        maxWidth: 900,
        bgcolor: "background.paper",
        mt: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      {todos.map((todo) => {
        const labelId = `checkbox-list-label-${todo.id}`;

        return (
          <ListItem
            sx={{ backgroundColor: "grey" }}
            key={todo.id}
            disablePadding
          >
            <ListItemButton
              role={undefined}
              onClick={() => handleToggleTodo(todo?.id)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={todo.completed}
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${todo.text}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  ) : null;
};

export default TodoList;
