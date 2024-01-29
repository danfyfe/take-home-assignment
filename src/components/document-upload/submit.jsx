import { Section, Button, Container, H2, HR, P } from "@/components/core";

const Submit = () => {
  return (
    <Container className="col-span-2">
    <P className="font-bold mb-5">
      Data in the import file is correct. Please press Continue to import.
    </P>
    <Container className="flex justify-center items-center">
      <Button>
        Continue import
      </Button>
      <Button inverted className="ml-5">
        Cancel
      </Button>
    </Container>
  </Container>
  )
};

export default Submit;
