import { Section, Button, Container, H2, HR, P, DragAndDrop } from "@/components/core";
import Heading from "./heading";
import Image from "next/image";
import Submit from "./submit";
import Select from "../core/Select";
import { SelectOptions } from "@/data";

const DocumentUpload = () => {
  return (
    <Section className="grid grid-cols-2 justify-items-center p-5">

          <Button className="col-start-1 justify-self-start h-9 w-9 !p-1">
            <Image height={30} width={30} src="/close-button.svg" alt="Close button" />
          </Button>

          <Heading />


          <Container className="w-full col-start-1">
            <Select label="" options={SelectOptions}/>
            <HR className="w-3/5 my-3" />
            <DragAndDrop />
          </Container>


          <Container className="w-full col-start-2">
            
          </Container>

          <Submit />

      </Section>
  )
};

export default DocumentUpload;
