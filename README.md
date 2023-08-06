# WG 1131 Website

This is the website for WG 1131, a student flat in Zurich, Switzerland. There will be infos about the flat, pages to leave feedback for guests, menues for cocktails and more. Most of it is still in developement.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

The website is runnig on a local raspberry pi. To deploy the main branch to the pi you have to be in the local network and run the deploy-to-pi.sh script. It builds the main branch of the project loads it on to the pi and starts the server.

```bash
bash deploy-to-pi.sh
```

## Learn More

To learn more about the technologies used in this Project, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about Tailwind CSS features and API.
- [React Documentation](https://reactjs.org/docs/getting-started.html) - learn about React features and API.
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - learn about TypeScript features and API.
- [npm Documentation](https://docs.npmjs.com/) - learn about npm features and API.