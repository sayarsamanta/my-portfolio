import React, { useState } from "react";
import DownloadButton from "../common/DownloadButton";
import { Document, Page, pdfjs } from "react-pdf";
import Sayar_Samanta_CV_4 from "../assets/Sayar_Samanta_CV_4.pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "../components/ResumeStyle.css";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import useWindowDimensions from "../hook/useWindowDimensions";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();
function Resume() {
  const { width: deviceWidth } = useWindowDimensions();
  const [numPages, setNumPages] = useState(0);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div className="h-full dark:bg-darkBodyPrimary justify-center items-center self-center text-center">
      <div className="justify-center items-center self-center ">
        <Document
          className={"mx-10"}
          file={Sayar_Samanta_CV_4}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {Array.apply(null, Array(numPages))
            .map((x, i) => i + 1)
            .map((page) => (
              <Page width={deviceWidth - 100} pageNumber={page} />
            ))}
        </Document>
      </div>
      <div className="flex h-20 items-center justify-center">
        <DownloadButton variant="default" />
      </div>
    </div>
  );
}

export default Resume;
