const myVideo = document.querySelector('#myVideo');
const videoPauseBtn = document.querySelector('#videoPauseBtn');
videoPauseBtn.addEventListener('click',async function(event){
    console.log('pause button clicked');
    console.log(myVideo);
    if(myVideo.srcObject){
        stopMyVideo();
    }
    else{
        startMyVideo();
    }
});

async function stopMyVideo(){
    const mediaStream = myVideo.srcObject;
    const tracks = await mediaStream.getTracks();
    tracks.forEach((track) => {
        track.stop();
    });
    myVideo.srcObject=null;
    videoPauseBtn.textContent = "Start Video";
}

async function startMyVideo(){
    if(navigator && navigator.mediaDevices){
        const mediaStream = await navigator.mediaDevices.getUserMedia({video: true});
        myVideo.srcObject = mediaStream;
        videoPauseBtn.textContent = "Pause Video";
    }
}