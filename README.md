This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev -- -p 3001
# or
yarn dev -- -p 3001
# or
pnpm dev -- -p 3001
```

I haven't been able to find a way to change the default Next.js port using just config files, so the port has to be passed as input to the CLI.

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Background info

Next.js has come a bit of a way since I last had a look at it, and I haven't really had the opportunity to work with the more recent React
features of Server Components and data caching, so it felt like a good time to check it out. The whole thing is styled with TailwindCSS
which I've also never tried before, but wanted to see what the deal was, and it was actually really nice! I see what the deal is now.

Other than that, it's just your normal Next.js app, the routing is the file system, it's written in TypeScript and using the default lint
rules, data validation is done with Zod, there's dark mode support and the responsiveness is built mobile-first. Nothing really fancy.

## Outstanding issues

### Unsafe image URLs

Since there's no real validation of the input in the image URL value for the recipes, if the user were to put just a random string in
(say `1234`) every time that recipe is displayed, the browser is going to try to fetch that image, resulting in a hit on `/recipes/1234`
which then tries to hit the backend for that URL, which can be (definitely is) bad. This would not really be an issue in a real application
since you wouldn't allow plaintext input like that, you'd have an uploader and a specific place to store the images, so you'd be in
better control of the traffic.

Tangentially, this issue also crashes the backend server since it returns two responses on errors on some routes:

```
diff --git a/endpoints.js b/endpoints.js
index c706500..f6f928d 100644
--- a/endpoints.js
+++ b/endpoints.js
@@ -66,12 +66,14 @@ router.get("/recipes/:id", async (req, res) => {

   if (!id) {
     res.sendStatus(400).json("id required");
+    return;
   }

   const recipeIndex = await db.getIndex("/recipes", id);

   if (recipeIndex === -1) {
     res.sendStatus(404);
+    return;
   }
   const recipe = await db.getData(`/recipes[${recipeIndex}]`);
   res.send(recipe);
@@ -152,6 +154,7 @@ router.delete("/recipes/:id", async (req, res) => {

   if (!id) {
     res.sendStatus(400).json("id required");
+    return;
   }

   const recipeIndex = await db.getIndex("/recipes", id);

```
