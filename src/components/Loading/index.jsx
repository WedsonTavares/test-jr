import React from "react";

import { Backdrop, CircularProgress } from "@mui/material";

function Loading(props) {
  return (
    <Backdrop
      style={{ color: "#8FC18A", background: "rgba(0,0,0,0.5)", zIndex: 9999 }}
      open={props.loading}
    >
      <CircularProgress style={{ color: '#8fc0e8'}} />
    </Backdrop>
  );
};

export default Loading;