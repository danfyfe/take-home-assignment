import { Section, Button, Container, H2, HR, P, DragAndDrop, RadioGroup } from "@/components/core";
import Heading from "./heading";
import Image from "next/image";
import Submit from "./submit";
import Select from "../core/Select";
import { SELECT_OPTIONS_1, RADIO_OPTIONS_1, RADIO_OPTIONS_2 } from "@/data";

const DocumentUpload = () => {
  return (
    <Section className="grid grid-cols-1 md:grid-cols-2 justify-items-center p-5">

          <Button className="col-start-1 justify-self-start h-9 w-9 !p-1">
            <Image height={30} width={30} src="/close-button.svg" alt="Close button" />
          </Button>

          <Heading />


          <Container className="w-full col-start-1">
            <Select label="" options={SELECT_OPTIONS_1}/>
            <HR className="w-3/5 my-3" />
            <DragAndDrop />
            <HR className="w-3/5 my-3" />
            <P className="font-bold">Elapse Data Checking</P>
            <P className="font-bold text-green-success">No Elapsed Dates!</P>
            <HR className="w-3/5 my-3" />
            <P className="font-bold">Tolerance Window:</P>
          </Container>


          <Container className="w-full col-start-1 md:col-start-2 md:ml-20">
            <P className="font-bold"></P>
            <RadioGroup title="Split schedule using social distancing?" options={RADIO_OPTIONS_1}/>
            <HR className="w-3/5 my-3" />
            <P className="font-bold">Location Checking</P>
            <P className="font-bold text-green-success">All Available!</P>
            <HR className="w-3/5 my-3" />
            <RadioGroup title="Client:" options={RADIO_OPTIONS_2}/>

          </Container>

          <Submit />

      </Section>
  )
};

export default DocumentUpload;
