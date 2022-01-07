import React from "react";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import DragIndicatorRoundedIcon from "@mui/icons-material/DragIndicatorRounded";
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
  console.log(pages);
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
                <ListItemButton disablePadding>
                  <ListItemText
                    primary="Lobby"
                    secondary="Voordat het spel begint, verzamelt iedereen zich op deze pagina"
                  />
                </ListItemButton>
                {pages.map((page, i) => (
                  <Draggable key={page.id} draggableId={page.id} index={i}>
                    {(provided, snapshot) => (
                      <div ref={provided.innerRef}>
                        <ListItem
                          {...provided.draggableProps}
                          secondaryAction={
                            <IconButton
                              edge="end"
                              aria-label="Volgorde aanpassen"
                              {...provided.dragHandleProps}
                            >
                              <DragIndicatorRoundedIcon />
                            </IconButton>
                          }
                          disablePadding
                        >
                          <ListItemButton
                            onClick={() => {
                              gotoPage(i);
                            }}
                          >
                            <ListItemText
                              primary={`${i + 1}. ${page.title}`}
                              secondary={page.description}
                            />
                          </ListItemButton>
                        </ListItem>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
                <ListItemButton disablePadding disabled>
                  <ListItemText
                    primary="Finish"
                    secondary="Wanneer de resultaten binnen zijn komt hier een ranglijst"
                  />
                </ListItemButton>
                <ListItemButton onClick={addNewPage}>
                  <ListItemIcon>
                    <AddCircleRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Pagina toevoegen" />
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
