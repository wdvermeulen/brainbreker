import {
  faChevronLeft,
  faChevronRight,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  ButtonGroup,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

const PageOverview = ({ pages, gotoPage, gotoPreviousPage, gotoNextPage }) => (
  <>
    <h3>Overzicht</h3>
    <ListItem disablePadding>
      <List sx={{ width: "100%" }}>
        {pages.map((page, i) => {
          return (
            <ListItemButton
              className="row"
              key={page.title + i}
              onClick={() => {
                gotoPage(i);
              }}
            >
              <ListItemText primary={`${i + 1}. ${page.title}`} />
            </ListItemButton>
          );
        })}
        <ListItemButton onClick={gotoNextPage}>
          <ListItemIcon>
            <FontAwesomeIcon icon={faPlus} />
          </ListItemIcon>
          <ListItemText primary="Vraag toevoegen" />
        </ListItemButton>
      </List>
    </ListItem>
  </>
);

export default PageOverview;
