import React from "react";

const GRADIO_URL = "https://0f9d3d770d9e1b7f13.gradio.live/"; // Replace with your deployed Gradio URL

const PoseCorrectionPage = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12">
    <h1 className="text-3xl font-bold mb-6 text-[#178582]">Squat Form Analyzer</h1>
    <p className="mb-8 text-gray-700 max-w-xl text-center">
      Upload a video of your squats and get instant feedback on your form!
    </p>
    <div className="w-full max-w-5xl h-[900px] shadow-lg rounded-lg overflow-hidden border border-gray-200 bg-white">
      <iframe
        src={GRADIO_URL}
        title="Squat Form Analyzer"
        width="100%"
        height="100%"
        frameBorder="0"
        allow="camera; microphone"
        style={{ minHeight: 900, width: "100%", border: "none" }}
      />
    </div>
  </div>
);

export default PoseCorrectionPage;