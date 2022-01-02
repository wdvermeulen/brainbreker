import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

const PageOverview = ({ pages, gotoPage, addNewPage }) => (
  <>
    <ListItem disablePadding>
      <List sx={{ width: "100%" }} subheader={<h3>Overzicht</h3>}>
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
        <ListItemButton onClick={addNewPage}>
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
