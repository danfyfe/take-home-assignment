This is a [Next.js](https://nextjs.org/) React project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
This app has been deployed via Vercel and can be viewed [here](https://take-home-assignment-sable.vercel.app/)

Or if running locally:

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Overview
The UI has been built to match the mockup design that was supplied, with some added responsiveness to avoid broken layouts on smaller screens.

The functionality has been roughly built out with dummy data to show the form functionality. Each input is connected to the form and a browser window alert displays the data when 'Continue Import' is clicked. The data is assumed from the layout and labels in the design.

The drag and drop component displays the file name once dropped in and the toggle component UI changes with the toggle's state.

### Component structure
The structure of the components in this project is inspired by the basic idea of the atomic design pattern. There is a `/core` directory within the `/components` directory that contains base level components that are used to build larger components. The `/core` directory is also separated by use case for development ease.

The `/document-upload` directory contains the built out component from the design. This component is broken into smaller pieces that are specific to the component for increased readability. These components are also located in the `/document-upload` directory, while the main exported component lives in the index file.

### Form with Formik
Formik, a React form library, handles the basic form state and logic. The library promotes ease of use, as forms can get complicated in React and this work contains a good amount of inputs.

### Styling with TailwindCSS
TailwindCSS is used to handle the styling. It is a great library that allows for a lot of flexibility and allows for fast, painless development.

### Testing considerations
Although not included here, testing components is a critical part of building a code base. Tools like Jest can be used to test basic data flow and functionality of components. Adding Jest Snapshots can also alert developers to component changes that might not have been intentional. On top of that, testing frameworks like Cucumber or Cypress can be used to test real user flows to ensure all user stories are considered.
