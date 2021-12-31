import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, ButtonGroup, List, ListItem } from "@mui/material";
import React from "react";

const PageOverview = ({ pages, gotoPage, gotoPreviousPage, gotoNextPage }) => (
  <>
    <h3>Overzicht</h3>
    <List>
      {pages.map((page, i) => {
        return (
          <ListItem
            className="row"
            key={page.title + i}
            onClick={() => {
              gotoPage(i);
            }}
          >
            {i + 1}. {page.title}
          </ListItem>
        );
      })}
    </List>
    <ListItem>
      <ButtonGroup variant="outlined" color="secondary">
        <Button
          onClick={gotoPreviousPage}
          startIcon={<FontAwesomeIcon icon={faChevronLeft} />}
        >
          Vorige
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
