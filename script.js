const videoElement = document.getElementById("video");
const button = document.getElementById("btn");

// prompt to select media stream , pass to video element , then play
async function selectMediaStream() {
    try{
       const mediaStream = await navigator.mediaDevices.getDisplayMedia();
       videoElement.srcObject = mediaStream;
       videoElement.onloadedmetadata=()=>{
        videoElement.play();
       }
    }catch(error){
        console.error("Error selecting media stream:", error);
    }
}
button.addEventListener('click',async()=>{
//   disable the button
      button.disabled=true;

      await videoElement.requestPictureInPicture();
    //   Reset Button
    button.disabled =false; 
});

selectMediaStream();