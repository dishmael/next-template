# next-template
This is a site template built using [Bun](https://bun.sh) to quickly create sites with the common packages I tend to install frequently. I have also included a few components that I find myself creating repeatedly. I just delete them if I'm not using them in my current project.

### Install
```
bunx create-next-app@latest --use-bun -e https://github.com/dishmael/next-template
```

### Packages
- [@faker-js/faker](https://fakerjs.dev): fake data generator for development
- [@preact/signals](https://preactjs.com/guide/v10/signals): reactive primitives for managing application state
- [prisma](https://www.prisma.io): object–relational mapper (ORM)
- [react-hook-form](https://react-hook-form.com): performant, flexible and extensible forms
- [@tanstack/react-table](https://tanstack.com/table/latest): headless table UI
- [tailwindcss-animate](https://www.npmjs.com/package/tailwindcss-animate): plugin for creating animations
- [zod](https://zod.dev): schema declaration and validation

### SRC Folder Structure
```
src
├── app
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── contexts
│   │   └── appContext.tsx
│   ├── layouts
│   │   ├── adminLayout.tsx
│   │   ├── defaultLayout.tsx
│   │   └── index.ts
│   ├── nav
│   │   ├── footer.tsx
│   │   ├── header.tsx
│   │   ├── index.ts
│   │   └── sidebar.tsx
│   └── ui
│       └── buttons
│           ├── hamburger.tsx
│           └── index.ts
└── styles
    └── globals.css
```
