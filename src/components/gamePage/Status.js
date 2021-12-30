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

const Status = ({ secondsRemaining, timeLimit }) => (
  <StyledStatus>
    <></>
    {secondsRemaining} seconden resterend
    <StatusBar
      style={{ width: ((secondsRemaining - 1) / timeLimit) * 100 + "%" }}
    />
  </StyledStatus>
);

export default Status;
