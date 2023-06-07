import React, { useEffect } from "react";
import { io } from "socket.io-client";

const socket = io();

function App() {
  useEffect(() => {
    const local = document.getElementById("video");

    //display local video
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then(function (stream) {
        local.srcObject = stream;
        //local.play();
        socket.emit("stream", stream);
      })
      .catch(function (err) {
        console.log(err);
      });
      
      socket.on("stream", function(stream){
      //remote.src = window.URL.createObjectURL(stream);
      console.log("remote")

    });

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
