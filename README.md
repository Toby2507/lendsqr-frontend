## Overview

Frontend Implementation of the Lendsqr Test for frontend engineering candidates.

### The challenge

- Build the 4 pages Login, Dashboard, User page, User details page
- The user pages should pull data from a mock api with 500 records
- Use local storage or indexedDB to store and retrieve user details on the user details page.
- The page must be mobile responsive
- Some details are intentionally left out of this instruction set. We feel the candidate should be able to spot and address them

## Installation

To work with or inspect the code base

- Clone the repo

```bash
git clone git@github.com:Toby2507/lendsqr-frontend.git
```

- Install dependencies

```bash
npm install
```

### Links

- [Solution URL](https://github.com/Toby2507/lendsqr-frontend)
- [Live Site URL](https://oluwatobi-salau-lendsqr-fe-test.netlify.app/)

## My process

- Setup my react project with create-react-app
- Break the UI design down into components and work from there
- Setup my CSS environment with SCSS in this case
- Write an integration test to check for initial bugs and errors for the main components
- Code the components and pages while making them respoonsive simulataneously
- Finally, test the app on different browsers and devices
- Deploy the app to Netlify

### Built with

- React
- Typescript
- SCSS
- Local storage for storing user list and details
- Mobile-first workflow
- [tanstack/react-table](https://tanstack.com/table/v8/docs/guide/introduction) for the dashboard table

### Challenges

- The dashboard table was a bit tricky to implement. I had to use a third party library to get the job done. I also couldn't shrink to the mobile view as expected so I had to make the table scrollable horizontally.

- The user details page was pretty straightforward to implement. I opted for local storage to store the user details and retrieve them on the user details page.

- There was no login endpoint so I had to improvise. I requested for the users list on page load so when the user enters an email and password, I check if there is a user with that email and since there was no password in the data provided, I just check if the email is valid.

### Initial LOGIN Details

- **Email**: Cristian_Schmeler70@yahoo.com
- **Password**: 123456
