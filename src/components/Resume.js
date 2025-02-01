import React, { useMemo, useState } from "react";
import DownloadButton from "../common/DownloadButton";
import { Document, Page, pdfjs } from "react-pdf";
import pdf from "../assets/../assets/Sayar_Samanta_CV_4.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
import useWindowDimensions from "../hook/useWindowDimensions";

function Resume() {
  const { width: deviceWidth } = useWindowDimensions();
  const [numPages, setNumPages] = useState(0);
  const pdfFile = useMemo(() => pdf, [pdf]);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div className="h-[100%] dark:bg-darkBodyPrimary justify-center items-center self-center text-center">
      <div className="justify-center items-center self-center ">
        <Document
          className={"mx-10"}
          file={pdfFile}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {Array.apply(null, Array(numPages))
            .map((x, i) => i + 1)
            .map((page) => (
              <Page key={page} width={deviceWidth - 100} pageNumber={page} />
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
