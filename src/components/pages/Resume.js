import React from "react";
import { useEffect, useRef } from "react";

export default function Resume() {
  const refIframe = useRef(null);
  const ifStyle = {
    position: "absolute",
    height: "100%",
    border: "none",
    width: "100%"
  };

  useEffect(() => {
    refIframe.current.setAttribute("src", "./images/resume_2022_web.pdf");
  }, []);
  return <iframe style={ifStyle} title="Iframe Doc" ref={refIframe} />;
}
