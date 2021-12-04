import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const PageOverview = ({ pages, gotoPage, gotoPreviousPage, gotoNextPage }) => (
  <>
    <h3>Overzicht</h3>
    {pages.map((page, i) => {
      return (
        <div
          className="row"
          key={page.title + i}
          onClick={() => {
            gotoPage(i);
          }}
        >
          {i + 1}. {page.title}
        </div>
      );
    })}
    <button className="secondary" onClick={gotoPreviousPage}>
      <FontAwesomeIcon icon={faChevronLeft} /> Vorige
    </button>
    <button onClick={gotoNextPage}>
      Volgende vraag <FontAwesomeIcon icon={faChevronRight} />
    </button>
  </>
);

export default PageOverview;
