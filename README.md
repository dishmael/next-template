# next-template
This is a site template built using [Bun](https://bun.sh) to quickly create sites with the common packages I tend to install frequently. I have also included a few components and various code snippets that I find myself creating often. Since I am including quite a lot of code, this template is going to be bloated. For me, that's not a big deal, I just delete what I dont need/want when I build my app. It's way easier to delete than to recreate each time. Maybe I will move to bit.dev for a more composable approach, but this works for me for now.

### Install
```
bunx create-next-app@latest --use-bun -e https://github.com/dishmael/next-template
```

### Enhancement Packages
- [@faker-js/faker](https://fakerjs.dev)
- [@radix-ui/react-dialog](https://www.radix-ui.com/primitives/docs/components/dialog)
- [@radix-ui/react-dropdown-menu](https://www.radix-ui.com/primitives/docs/components/dropdown-menu)
- [@radix-ui/react-separator](https://www.radix-ui.com/primitives/docs/components/separator)
- [@radix-ui/react-slot](https://www.radix-ui.com/primitives/docs/utilities/slot)
- [@tanstack/react-table](https://tanstack.com/table/latest)
- [apexcharts](https://apexcharts.com)
- [class-variance-authority](https://cva.style/docs/getting-started/installation)
- [clsx](https://www.npmjs.com/package/clsx)
- [date-fn](https://date-fns.org)
- [framer-motion](https://www.framer.com/motion/introduction/)
- [lucide-react](https://lucide.dev)
- [next-thems](https://github.com/pacocoursey/next-themes)
- [prisma](https://www.prisma.io)
- [react-hook-form](https://react-hook-form.com)
- [tailwindcss-animate](https://www.npmjs.com/package/tailwindcss-animate)
- [tailwind-merge](https://www.npmjs.com/package/tailwind-merge)
- [zod](https://zod.dev)

### SRC Folder Structure
```
src
├── api
├── app
│   └── settings
├── components
│   ├── contexts
│   ├── layouts
│   ├── nav
│   └── ui
├── lib
├── styles
└── utils
```

### Commentary
I'm using this section of the README to capture changes in mindset on frameworks and packages.
#### @Preact/Signals
I tried implementing [@preact/signals](https://preactjs.com/guide/v10/signals) as a replacement for useState for managing application state; howeveer, I could not get the signal to work correctly when trying to apply the state at a global level with the materials-UI components. After many hours of trying to debug the issue, I gave up and went back to using useState.
