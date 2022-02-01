import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { url } from "../../../SiteRoute";
import PublicGameService from "../../services/PublicGameService";
import { setPin } from "../hostGame/hostGameSlice";
import {
  setName,
  addNewPage,
  removePage,
  setAnswerDescription,
  setAnswerValue,
  setCheckType,
  setEditing,
  setHasTimeLimit,
  setNumberOfOptions,
  setPointsForSpeed,
  setQuestionDescription,
  setQuestionTitle,
  setTimeLimit,
  setPageType,
  setGame,
} from "./editGameSlice";
import PrivateGameService from "../../services/PrivateGameService";

function usePage() {
  const dispatch = useDispatch();
  const { currentPage } = useParams();

  return {
    questionTitle: {
      value: useSelector((state) => state.editGame.pages[currentPage]?.title),
      onChange: (e) => {
        dispatch(
          setQuestionTitle({ title: e.target.value, pageNumber: currentPage })
        );
      },
    },
    questionDescription: {
      value: useSelector(
        (state) => state.editGame.pages[currentPage]?.description
      ),
      onChange: (e) => {
        dispatch(
          setQuestionDescription({
            description: e.target.value,
            pageNumber: currentPage,
          })
        );
      },
    },
    pageType: {
      value: useSelector(
        (state) => state.editGame.pages[currentPage]?.pageType
      ),
    },
    timeLimit: {
      value: useSelector(
        (state) =>
          state.editGame.pages[currentPage]?.hasTimeLimit &&
          state.editGame.pages[currentPage]?.timeLimit
      ),
    },
    useAnswerDescription: function (answerIndex) {
      return {
        value: useSelector(
          (state) =>
            state.editGame.pages[currentPage]?.answers[answerIndex].description
        ),
        onChange: (e) => {
          dispatch(
            setAnswerDescription({
              answerIndex,
              description: e.target.value,
              pageNumber: currentPage,
            })
          );
        },
      };
    },
    pageInput: {
      onBlur: () => {
        dispatch(setEditing(""));
      },
      onKeyDown: (e) => {
        if (e.key === "Enter") dispatch(setEditing(""));
      },
    },
    numberOfOptions: {
      value: useSelector(
        (state) => state.editGame.pages[currentPage]?.numberOfOptions
      ),
    },
    useEditing: () => [
      useSelector((state) => state.editGame.editing),
      (s) => dispatch(setEditing(s)),
    ],
    currentPage,
  };
}

function useSetupBar() {
  const dispatch = useDispatch();
  const { gameID, currentPage } = useParams();
  const hasTimeLimitEnabled = useSelector(
    (state) => state.editGame.pages[currentPage]?.hasTimeLimit
  );
  const pointsForSpeedEnabled = useSelector(
    (state) => state.editGame.pages[currentPage]?.pointsForSpeed
  );
  const history = useHistory();

  return {
    name: {
      value: useSelector((state) => state.editGame.name),
      onChange: (e) => {
        dispatch(setName(e.target.value));
      },
    },
    questionTitle: useSelector(
      (state) => state.editGame.pages[currentPage]?.title
    ),
    pageType: {
      value: useSelector(
        (state) => state.editGame.pages[currentPage]?.pageType
      ),
      onChange: (e) => {
        dispatch(
          setPageType({ pageType: e.target.value, pageNumber: currentPage })
        );
      },
    },
    hasTimeLimit: {
      checked: hasTimeLimitEnabled,
      onChange: () => {
        dispatch(
          setHasTimeLimit({
            hasTimeLimit: !hasTimeLimitEnabled,
            pageNumber: currentPage,
          })
        );
      },
    },
    timeLimit: {
      value: useSelector(
        (state) => state.editGame.pages[currentPage]?.timeLimit
      ),
      onChange: (e) => {
        dispatch(
          setTimeLimit({ timeLimit: e.target.value, pageNumber: currentPage })
        );
      },
    },
    checkType: {
      value: useSelector(
        (state) => state.editGame.pages[currentPage]?.checkType
      ),
      onChange: (e) => {
        dispatch(
          setCheckType({ checkType: e.target.value, pageNumber: currentPage })
        );
      },
    },
    pointsForSpeed: {
      checked: pointsForSpeedEnabled,
      onChange: () => {
        dispatch(
          setPointsForSpeed({
            checkType: !pointsForSpeedEnabled,
            pageNumber: currentPage,
          })
        );
      },
    },
    numberOfOptions: {
      value: useSelector(
        (state) => state.editGame.pages[currentPage]?.numberOfOptions
      ),
      set: (value) => {
        dispatch(
          setNumberOfOptions({
            numberOfOptions: value,
            pageNumber: currentPage,
          })
        );
      },
    },
    answerValue: {
      values: useSelector((state) =>
        state.editGame.pages[currentPage]?.answers
          .slice(0, state.editGame.pages[currentPage]?.numberOfOptions)
          .map((answer) => answer.value)
      ),
      onChange: (answerIndex, value) => {
        dispatch(
          setAnswerValue({
            answerIndex,
            value,
            pageNumber: currentPage,
          })
        );
      },
    },
    gotoPage: (pageNumber) =>
      history.push(
        url.EDIT_GAME_PAGE.replace(":gameID", gameID).replace(
          ":currentPage",
          pageNumber
        )
      ),
    addNewPage: () => {
      dispatch(addNewPage());
    },
    removePage: () => {
      dispatch(removePage(currentPage));
    },
    pages: useSelector((state) => state.editGame.pages),
    currentPage,
  };
}

function useSaveGame() {
  const game = useSelector((state) => state.editGame);
  const history = useHistory();
  const { gameID, currentPage } = useParams();
  const gameService = new PrivateGameService();

  return async function () {
    try {
      if (gameID) {
        await gameService.update({ ...game, gameID });
      } else {
        const {
          data: {
            createPrivateGame: { id },
          },
        } = await gameService.create(game);
        history.push(
          url.EDIT_GAME_PAGE.replace(":gameID", id).replace(
            ":currentPage",
            currentPage || "0"
          )
        );
      }
    } catch (e) {
      console.error("editGameHooks.useSaveGame() error", e);
    }
  };
}

export { usePage, useSetupBar, useSaveGame };
