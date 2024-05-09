import { Repeater } from "@/components/ui/repeater";

const Home = () => {
  return (
    <div className="flex flex-col p-4 gap-6 h-full">
      {/* Row 1: Header */}
      <Header text="Home" />

      {/* Row 2: Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-6">
        <Repeater count={6}>
          <Metric text="Metric" />
        </Repeater>
      </div>

      {/* Row 3: Table */}
      <Table />
    </div>
  );
};

const Header = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center">
      <h1 className="text-lg font-semibold md:text-2xl">{text}</h1>
    </div>
  );
};

const Metric = ({ text }: { text: string }) => {
  return (
    <div className="flex-grow h-40 p-4 rounded-lg border border-dashed shadow-sm bg-slate-50 dark:bg-gray-800">
      <h3 className="text-xl font-bold tracking-tight">{text}</h3>
      <p className="text-sm text-muted-foreground">
        The set of metrics goes here.
      </p>
    </div>
  );
};

const Table = () => {
  return (
    <div className="flex-grow p-4 rounded-lg border border-dashed shadow-sm bg-slate-50 dark:bg-gray-800">
      <h3 className="text-xl font-bold tracking-tight">Table 1</h3>
      <p className="text-sm text-muted-foreground">A table goes here</p>
    </div>
  );
};

export default Home;
