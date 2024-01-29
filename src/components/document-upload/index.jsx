import { Section, Button, Container, H2, HR, P, DragAndDrop, RadioGroup } from "@/components/core";
import Heading from "./heading";
import Image from "next/image";
import Submit from "./submit";
import Select from "../core/Select";
import { SELECT_OPTIONS_1, SELECT_OPTIONS_2, RADIO_OPTIONS_1, RADIO_OPTIONS_2 } from "@/data";
import ToleranceWindow from "./tolerance-window";

const DocumentUpload = () => {
  return (
    <Section className="grid grid-cols-1 sm:grid-cols-2 justify-items-center p-5">
        <Button className="col-start-1 justify-self-start h-9 w-9 !p-1">
          <Image height={30} width={30} src="/close-button.svg" alt="Close button" />
        </Button>

      {/* <form> */}
        <Heading />

        <Container className="w-full col-start-1">
          <Select width="w-full" label="" options={SELECT_OPTIONS_1}/>
          <HR className="w-3/5 my-3" />
          <DragAndDrop />
          <HR className="w-3/5 my-3" />
          <P className="font-bold mb-2">Elapse Data Checking</P>
          <P className="font-bold text-green-success mb-2">No Elapsed Dates!</P>
          <HR className="w-3/5 mb-3 mt-4" />
          <P className="font-bold">Tolerance Window:</P>
          <ToleranceWindow />
        </Container>


        <Container className="w-full col-start-1 sm:col-start-2 md:ml-20">
          <P className="font-bold"></P>
          <RadioGroup title="Split schedule using social distancing?" options={RADIO_OPTIONS_1}/>
          <HR className="w-3/5 my-3" />
          <P className="font-bold mb-2">Location Checking</P>
          <P className="font-bold text-green-success">All Available!</P>
          <HR className="w-3/5 mb-3 mt-4" />
          <RadioGroup className="mb-8" title="Client:" options={RADIO_OPTIONS_2}/>
          <Select width="w-1/3" label="Testing Center 1" options={SELECT_OPTIONS_2} icon="clock" />
          <Select width="w-1/3" label="Testing Center 2" options={SELECT_OPTIONS_2} icon="clock" />
          <Select width="w-1/3" label="Testing Center 3" options={SELECT_OPTIONS_2} icon="clock" />
          <Select width="w-1/3" label="Testing Center 4" options={SELECT_OPTIONS_2} icon="clock" />


        </Container>

        <Submit />
      {/* </form> */}
    </Section>
  )
};

export default DocumentUpload;
