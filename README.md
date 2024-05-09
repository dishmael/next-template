# next-template
This is a site template built using [Bun](https://bun.sh) to quickly create sites with the common packages I tend to install frequently. I have also included a few components and various code snippets that I find myself creating often. Since I am including quite a lot of code, this template is going to be bloated. For me, that's not a big deal, I just delete what I dont need/want when I build my app. It's way easier to delete than to recreate each time. Maybe I will move to bit.dev for a more composable approach, but this works for me for now.

## Install

```
bunx create-next-app@latest --use-bun -e https://github.com/dishmael/next-template
```

## Middleware

I've added authorization/authentication via auth0 to the template using middleware.ts, but the middleware file is disabled as middleware.ts.auth. You'll need to setup [auth0](https://github.com/auth0/nextjs-auth0) and then change the filename to middleware.ts. Don't forget to update the variables in .env once you have auth0 configured. I have also added another middleware file to handle subdomains (middleware.ts.subdomains). These middleware files are provided to bootstrap future needs.

## Technologies Used

- [@auth0/nextjs-auth0](https://github.com/auth0/nextjs-auth0)
- [@faker-js/faker](https://fakerjs.dev)
- [@tanstack/react-table](https://tanstack.com/table/latest)
- [@tremor/react](https://www.tremor.so)
- [Framer Motion](https://www.framer.com/motion/)
- [Next.js 14](https://nextjs.org/docs/getting-started)
- [NextUI v2](https://nextui.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org/)
- [clsx](https://www.npmjs.com/package/clsx)
- [date-fn](https://date-fns.org)
- [Lucide Icons](https://lucide.dev)
- [next-themes](https://github.com/pacocoursey/next-themes)
- [Prisma](https://www.prisma.io)
- [react-hook-form](https://react-hook-form.com)
- [tailwind-merge](https://www.npmjs.com/package/tailwind-merge)
- [zod](https://zod.dev)

## Source Folder Structure
```
src
├── api
│   └── auth
│       └── [auth0]
├── app
├── components
│   ├── contexts
│   ├── layouts
│   ├── nav
│   ├── themes
│   └── ui
├── config
├── hooks
├── lib
├── styles
├── types
└── utils
```

## Commentary

I'm using this section of the README to capture changes in mindset on frameworks and packages.

### @Preact/Signals

I tried implementing [@preact/signals](https://preactjs.com/guide/v10/signals) as a replacement for useState for managing application state; however, I could not get the signal to work correctly when trying to apply the state at a global level with the materials-UI components. After many hours of trying to debug the issue, I gave up and went back to using useState.

### Shadcn/UI --> NextUI

I had initially used Shadcn/UI but had issues with a few of the UI components. I ended up swapping Shadcn/UI out for NextUI, which seems to be working a little better for my needs.

### Git Hooks: pre-commit

I added a pre-commit to .git/hooks to automatically increment the patch version in package.json. Since the .git directory is not synced to the repo, I'm including it here for future reference.
```
#!/bin/sh

# Update the version number
VERSION=$(jq -r '.version' package.json)
NEW_VERSION=$(echo $VERSION | awk -F. '{$NF = $NF + 1;} 1' | sed 's/ /./g')
jq ".version = \"$NEW_VERSION\"" package.json > temp.json && mv temp.json package.json

# Add package.json
git add package.json

# Check if there are changes other than the version number
CHANGES=$(git diff --cached package.json | grep -Ev '^\+  "version":' | grep -Ev '^-  "version":')
if [ -z "$CHANGES" ]; then
  # If the only change is the version number, set the commit message to 'incremented version'
  git commit -m "incremented version"
fi
```
