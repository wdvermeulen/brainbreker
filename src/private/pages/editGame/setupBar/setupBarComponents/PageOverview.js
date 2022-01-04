import React from "react";
import { faPlus, faGripVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { movePage } from "../../editGameSlice";

const PageOverview = ({ pages, gotoPage, addNewPage }) => {
  const dispatch = useDispatch();

  return (
    <DragDropContext
      onDragEnd={(result) => {
        if (result.destination)
          dispatch(
            movePage({
              startIndex: result.source.index,
              endIndex: result.destination.index,
            })
          );
      }}
    >
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div ref={provided.innerRef}>
            <ListItem disablePadding>
              <List
                sx={{ width: "100%" }}
                subheader={<h4 style={{ textAlign: "center" }}>Overzicht</h4>}
              >
                {pages.map((page, i) => (
                  <Draggable key={page.id} draggableId={page.id} index={i}>
                    {(provided, snapshot) => (
                      <div ref={provided.innerRef}>
                        <ListItem
                          className="row"
                          {...provided.draggableProps}
                          secondaryAction={
                            <IconButton
                              edge="end"
                              aria-label="Volgorde aanpassen"
                              {...provided.dragHandleProps}
                            >
                              <FontAwesomeIcon icon={faGripVertical} />
                            </IconButton>
                          }
                          disablePadding
                        >
                          <ListItemButton
                            onClick={() => {
                              gotoPage(i);
                            }}
                          >
                            <ListItemText primary={`${i + 1}. ${page.title}`} />
                          </ListItemButton>
                        </ListItem>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
                <ListItemButton onClick={addNewPage}>
                  <ListItemIcon>
                    <FontAwesomeIcon icon={faPlus} />
                  </ListItemIcon>
                  <ListItemText primary="Vraag toevoegen" />
                </ListItemButton>
              </List>
            </ListItem>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default PageOverview;
