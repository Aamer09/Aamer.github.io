import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "am a software developmemt engineer",
          "an open source contributor",
          "love everything about the code </>",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        delay: 35,
      }}
    />
  );
}

export default Type;
