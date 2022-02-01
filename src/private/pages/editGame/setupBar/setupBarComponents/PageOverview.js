import React from "react";
import { DragHandleRounded, AddCircleRounded } from "@mui/icons-material";
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
import { useHistory, useParams } from "react-router-dom";
import { url } from "../../../../../SiteRoute";
import { movePage } from "../../editGameSlice";

const PageOverview = ({ pages, gotoPage, addNewPage }) => {
  const dispatch = useDispatch();
  const { gameID } = useParams();
  const history = useHistory();

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
                <ListItemButton
                  onClick={() =>
                    history.push(url.EDIT_GAME_LOBBY.replace(":gameID", gameID))
                  }
                >
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
                          disablePadding
                          secondaryAction={
                            <IconButton
                              edge="end"
                              aria-label="Sleep om de volgorde aan te passen"
                              {...provided.dragHandleProps}
                            >
                              <DragHandleRounded />
                            </IconButton>
                          }
                          {...provided.draggableProps}
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
                <ListItemButton disabled>
                  <ListItemText
                    primary="Finish"
                    secondary="Wanneer de resultaten binnen zijn komt hier een ranglijst"
                  />
                </ListItemButton>
                <ListItemButton onClick={addNewPage}>
                  <ListItemIcon>
                    <AddCircleRounded />
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
