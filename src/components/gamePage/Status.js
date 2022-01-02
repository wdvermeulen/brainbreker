import { secondsToAutoUnit } from "../../utils";

const { styled } = require("../../sharedStyles/theme");

const StatusBar = styled("div", {
  height: "$1",
  backgroundColor: "$lightest",
  borderRadius: "$2",
  transition: "width 1s linear",
  margin: "auto",
  boxShadow: "$default",
});

const StyledStatus = styled("div", {
  textShadow: "$default",
});

const Status = ({ secondsRemaining, totalSeconds }) => (
  <StyledStatus>
    {secondsToAutoUnit(secondsRemaining)} resterend
    <StatusBar
      style={{
        width: Math.min((secondsRemaining - 1) / totalSeconds, 1) * 100 + "%",
      }}
    />
  </StyledStatus>
);

export default Status;
