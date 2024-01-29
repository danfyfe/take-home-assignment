import { Button, Container, P } from "@/components/core";

const Submit = () => {
  return (
    <Container className="col-span-2">
    <P className="font-bold my-5 text-center">
      Data in the import file is correct. Please press Continue to import.
    </P>
    <Container className="flex flex-col md:flex-row justify-center items-center">
      <Button>
        Continue import
      </Button>
      <Button inverted className="mt-3 md:ml-5 md:mt-0">
        Cancel
      </Button>
    </Container>
  </Container>
  )
};

export default Submit;
