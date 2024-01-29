import { P, Container, Button } from "@/components/core"
import Image from "next/image";

const DragAndDrop = () => {
  return (
    <>
      <P className="!text-left font-bold mb-2">Select a manifest you&apos;d like to import</P>
      <Container className="border rounded-lg border-gray-500 p-4 flex flex-col justify-center items-center">
        <div className="border rounded-lg border-gray-500 border-dashed h-32 w-full flex flex-col justify-center items-center">
          <Image src="/document-icon.png" height={20} width={17} alt="Document Icon" className="mb-2"/>
          <P className="text-sm">Drag & Drop Here Or <b>Browse</b></P>
        </div>
        <Button className="mt-2">
          Upload Manifest
        </Button>
      </Container>
    </>
  )
};

export default DragAndDrop;
