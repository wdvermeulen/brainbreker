import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  ButtonGroup,
  List,
  ListItem,
  ListItemButton,
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
      </List>
    </ListItem>
    <ListItem>
      <ButtonGroup variant="outlined" color="secondary">
        <Button
          onClick={gotoPreviousPage}
          startIcon={<FontAwesomeIcon icon={faChevronLeft} />}
        >
          Vorige vraag
        </Button>
        <Button
          onClick={gotoNextPage}
          endIcon={<FontAwesomeIcon icon={faChevronRight} />}
        >
          Volgende vraag
        </Button>
      </ButtonGroup>
    </ListItem>
  </>
);

export default PageOverview;
