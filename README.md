## Create Project

Run the following command :
```bash
npx create-next-app@latest
```
On installation, respond to the prompts as follows:

```
What is your project named? my-app
Would you like to use TypeScript? No
Would you like to use ESLint? Yes
Would you like to use Tailwind CSS? No
Would you like your code inside a `src/` directory? No
Would you like to use App Router? No 
Would you like to use Turbopack for `next dev`? No 
Would you like to customize the import alias (`@/*` by default)? No
What import alias would you like configured? @/*
```
## Add Local Environment

Create `.env` file that contains:
```
NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY=<YOUR_API_KEY>
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=<YOUR_DOMAIN>
NEXT_PUBLIC_FIREBASE_PROJECT_ID=<YOUR_PROJECT_ID>
```

## Install Dependencies

Install the`Firebase` library with:
```bash
npm install --save Firebase
# or
yarn add Firebase
```
Install `reactstrap` and `bootstrap` libraries for styling:
```bash
npm install --save reactstrap bootstrap
# or
yarn add reactstrap bootstrap
```

## Start App

Start application with:
```bash
yarn dev
# or
npm run dev
```

http://localhost:3000/sign_up

http://localhost:3000/sign_in