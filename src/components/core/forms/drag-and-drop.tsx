'use client'
import { P } from "@/components/core/typography";
import { Container } from "@/components/core/layout";
import { Button } from "@/components/core/forms";
import Image from "next/image";
import { useState } from "react";
import { IDragAndDropProps } from "@/interfaces/forms";

const DragAndDrop = ({ setFieldValue }: IDragAndDropProps) => {
  const [dragging, setDragging] = useState(false);
  const [document, setDocument] = useState<File | null>(null);

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const document: File = e.dataTransfer.files[0];

    if (document) {
      setDocument(document);
      setFieldValue('document', document.name);
    }

    setDragging(false);
  };

  return (
    <>
      <P className="!text-left font-bold mb-2">Select a manifest you&apos;d like to import</P>
      <Container className="border rounded-lg border-gray-500 p-4 flex flex-col justify-center items-center">
      {
        document ? (
          <>
            <P className="h-32 flex justify-center items-center">{document.name}</P>
          </>
        ) : (
        <div
          className="border rounded-lg border-gray-500 border-dashed h-32
            w-full flex flex-col justify-center items-center"
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <Image src="/document-icon.png" height={20} width={17} alt="Document Icon" className="mb-2"/>
          <P className="text-sm">Drag & Drop Here Or <b>Browse</b></P>
        </div>
        )
      }
        <Button className="mt-2">
          Upload Manifest
        </Button>
      </Container>
    </>
  )
};

export default DragAndDrop;
