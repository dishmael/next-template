export const Home = () => {
  return (
    <div className="flex flex-1 flex-col gap-2 p-4 lg:gap-4 lg:p-4 h-full">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Home</h1>
      </div>
      <div className="grid sm:grid-rows-[196px,auto] grid=cols-1 sm:grid-cols-2 gap-6 h-full">
        <div className="p-4 rounded-lg border border-dashed shadow-sm bg-slate-50 dark:bg-slate-900">
          <h3 className="text-xl font-bold tracking-tight">Metric 1</h3>
          <p className="text-sm text-muted-foreground">
            The first set of metrics goes here.
          </p>
        </div>
        <div className="p-4 rounded-lg border border-dashed shadow-sm bg-slate-50 dark:bg-slate-900">
          <h3 className="text-xl font-bold tracking-tight">Metric 2</h3>
          <p className="text-sm text-muted-foreground">
            The second set of metrics goes here.
          </p>
        </div>
        <div className="p-4 sm:col-span-2 rounded-lg border border-dashed shadow-sm bg-slate-50 dark:bg-slate-900">
          <h3 className="text-xl font-bold tracking-tight">Table 1</h3>
          <p className="text-sm text-muted-foreground">A table goes here</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
