import { Button } from "@nextui-org/button";

const ResourcesPage = () => {
  return (
    <div className="flex flex-1 flex-col gap-2 p-4 lg:gap-4 lg:p-4 h-full">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Resources</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm p-4 bg-gray-100 dark:bg-gray-800">
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-xl font-bold tracking-tight">
            This is the resources page
          </h3>
          <p className="text-sm text-muted-foreground">
            You can view and modify application resources on this page.
          </p>
          <Button className="mt-4">Resources Button</Button>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
