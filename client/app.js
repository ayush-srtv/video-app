import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    const local = document.getElementById("video");

    // display local video
    // navigator.mediaDevices
    //   .getUserMedia({ video: true, audio: true })
    //   .then(function (stream) {
    //     local.srcObject = stream;
    //     local.play();
    //   })
    //   .catch(function (err) {
    //     console.log(err);
    //   });

    return () => {};
  }, []);
  return (
    <div>
      <button>Take snap</button>
      <video id="video" height="400" width="500" />
    </div>
  );
}
export default App;
