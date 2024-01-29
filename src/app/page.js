import { Section, Button, Container, H2, HR, P } from "@/components/core";


export default function Home() {
  return (
    <main className="h-screen flex justify-center items-center bg-gray-300">
      <Section className="grid grid-cols-2 justify-items-center ">
          <Button className="col-start-1 justify-self-start">X</Button>
          <H2 className="col-span-2">Document Upload</H2>
          <HR className="col-span-2" />
          <Container className="col-start-1">
            left
          </Container>
          <Container className="col-start-2">
            right
          </Container>
          <Container className="col-span-2">
            <P className="font-bold mb-5">
              Data in the import file is correct. Please press Continue to import.
            </P>
            <Container>
              <Button>
                Continue import
              </Button>
              <Button inverted>
                Cancel
              </Button>
            </Container>
          </Container>
      </Section>
    </main>
  );
}
