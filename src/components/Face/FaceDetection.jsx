import React, { useRef, useState } from "react";
import * as faceDetection from "@tensorflow-models/face-detection";
import * as tf from "@tensorflow/tfjs";
import "@mediapipe/face_detection";
import { Button } from "@nextui-org/react";

const FaceDetection = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  const startVideo = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoRef.current.srcObject = stream;
    videoRef.current.play();
    loadModel();
    setIsRunning(true);
  };
  
  const stopVideo = () => {
    if (videoRef.current) {
      const stream = videoRef.current.srcObject;
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop()); // متوقف کردن استریم
      }
      videoRef.current.srcObject = null; // پاک کردن منبع ویدیو
    }
    setIsRunning(false); // تنظیم حالت غیرفعال
  };
  

  let detector = null; // ذخیره مدل در متغیری خارج از تابع

    const loadModel = async () => {
    if (!detector) {
        detector = await faceDetection.createDetector(
        faceDetection.SupportedModels.MediaPipeFaceDetector,
        {
            runtime: "mediapipe",
            solutionPath: `https://cdn.jsdelivr.net/npm/@mediapipe/face_detection`,
        }
        );
        setIsModelLoaded(true); // مدل بارگذاری شده است
    }
    };


  const detectFaces = async (model) => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const detect = async () => {
      if (video.readyState === 4) {
        const faces = await model.estimateFaces(video);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        faces.forEach((face) => {
          const { xMin, yMin, width, height } = face.boundingBox;
          ctx.strokeStyle = "red";
          ctx.lineWidth = 2;
          ctx.strokeRect(xMin, yMin, width, height);
        });
      }
      requestAnimationFrame(detect);
    };

    detect();
  };

  return (
    <div className="flex justify-center flex-col w-full">
      {!isRunning && <Button className="rounded-full bg-blue-500 mx-auto text-white" onClick={startVideo}>
            مشاهده زیباترین انسان
      </Button>}
      {isRunning && <Button className="rounded-full bg-red-500 mx-auto text-white" onClick={stopVideo}>
            توقف
      </Button>}
      <div className="my-2 rounded-full">
        <video
          ref={videoRef}
          className={`block w-full ${isRunning ? 'h-full' : 'h-0'} rounded-xl relative`}
        >
        </video>
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 rounded-xl"
        ></canvas>
      </div>
    </div>
  );
};

export default FaceDetection;
