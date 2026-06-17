This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## 🔒 Deployment & Infrastructure (Crucial Data)

### 1. Production Environments
* **Primary Domain (Vercel Edge):** [https://yostudy.at](https://yostudy.at)
* **Canonical Redirect:** [https://www.yostudy.at](https://www.yostudy.at) (Configured as an automated 301 redirect to the apex domain).
* **Search Engine Optimization:** Connected and verified with **Google Search Console** using DNS TXT records.
* https://www.customercontrolpanel.de/index.php?action=se

### 2. CI/CD & Routing Pipeline
The infrastructure uses a modern decoupled architecture:
$$\text{netcup (Domain/DNS)} \longrightarrow \text{Vercel (Next.js Frontend)} \longrightarrow \text{Google Search Console}$$

* **DNS Management:** Hosted on **netcup**.
* **Hosting & SSL:** Automated builds and SSL generation are entirely handled by **Vercel** via GitHub integration.

## 🛠️ Development & Build Tasks

### Local Development
To run the local server on [http://localhost:3000](http://localhost:3000):
```bash
npm run dev
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.