'use client'
import Image from "next/image";
import { Section, Container, HR } from "@/components/core/layout";
import { Button, RadioGroup, Radio, Select, DragAndDrop } from "@/components/core/forms";
import { P } from "@/components/core/typography";
import Heading from "./heading";
import Submit from "./submit";
import ToleranceWindow from "./tolerance-window";
import { SELECT_OPTIONS_1, SELECT_OPTIONS_2 } from "@/data";
import { Formik, Form } from "formik";

const DocumentUpload = () => {
  return (
    <Section className="p-5">
      <Button className="col-start-1 justify-self-start h-9 w-9 !p-1">
        <Image height={30} width={30} src="/close-button.svg" alt="Close button" />
      </Button>
      <Formik
        initialValues={{
          "import-name": '',
          "document": '',
          "tolerance-window": true,
          "split-schedule": '',
          "client-type": '',
          "testing-center-client-1": '',
          "testing-center-client-2": '',
          "testing-center-client-3": '',
          "testing-center-client-4": '',
        }}
        onSubmit={(values) => {
          const jsonValues = JSON.stringify(values);
          global?.window?.alert(`The following data will be submitted: ${jsonValues}`)
        }}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          setFieldValue
        }) => (
          <Form className="grid grid-cols-1 md:grid-cols-2 justify-items-center" onSubmit={handleSubmit}>
            <Heading />
            <Container className="w-full col-start-1">
              <Select
                width="w-full"
                label=""
                optionObjects={SELECT_OPTIONS_1}
                name="import-name"
                value={values["import-name"]}
                onChange={handleChange}
              />
              <HR className="w-3/5 my-3" />
              <DragAndDrop
                setFieldValue={setFieldValue}
              />
              <HR className="w-3/5 my-3" />
              <P className="font-bold mb-1">Elapse Data Checking</P>
              <P className="font-bold text-green-success mb-2">No Elapsed Dates!</P>
              <HR className="w-3/5 mb-3 mt-4" />
              <ToleranceWindow
                name="tolerance-window"
                value={values["tolerance-window"]}
                onChange={handleChange}
              />
            </Container>

            <Container className="w-full col-start-1 md:col-start-2 md:ml-32">
              <RadioGroup
                title="Split schedule using social distancing?"
              >
                <Radio
                  label="Yes"
                  name="split-schedule"
                  value={"yes"}
                  onChange={handleChange}
                />
                <Radio
                  label="No"
                  name="split-schedule"
                  value={"no"}
                  onChange={handleChange}
                />
              </RadioGroup>
              <HR className="w-8/12 mb-3 mt-5" />
              <P className="font-bold mb-1">Location Checking</P>
              <P className="font-bold text-green-success">All Available!</P>
              <HR className="w-8/12 mb-3 mt-4" />
              <RadioGroup
                className="mb-8"
                title="Client:"
              >
                <Radio
                  label="Single"
                  name="client-type"
                  value={"single"}
                  onChange={handleChange}
                />
                <Radio
                  label="Multiple"
                  name="client-type"
                  value={"multiple"}
                  onChange={handleChange}
                />
              </RadioGroup>
              <Select
                className="mb-6"
                width="w-1/3"
                label="Testing Center 1"
                optionObjects={SELECT_OPTIONS_2}
                icon={true}
                name="testing-center-client-1"
                value={values["testing-center-client-1"]}
                onChange={handleChange}
              />
              <Select
                className="mb-6"
                width="w-1/3"
                label="Testing Center 2"
                optionObjects={SELECT_OPTIONS_2}
                icon={true}
                name="testing-center-client-2"
                value={values["testing-center-client-2"]}
                onChange={handleChange}
              />
              <Select
                className="mb-6"
                width="w-1/3"
                label="Testing Center 3"
                optionObjects={SELECT_OPTIONS_2}
                icon={true}
                name="testing-center-client-3"
                value={values["testing-center-client-3"]}
                onChange={handleChange}
              />
              <Select
                className="mb-6"
                width="w-1/3"
                label="Testing Center 4"
                optionObjects={SELECT_OPTIONS_2}
                icon={true}
                name="testing-center-client-4"
                value={values["testing-center-client-4"]}
                onChange={handleChange}
              />
            </Container>
            <Submit />
          </Form>
        )}
      </Formik>
    </Section>
  )
};

export default DocumentUpload;
