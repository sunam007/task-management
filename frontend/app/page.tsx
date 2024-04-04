import QueryProvider from "./Providers";
import Card from "./components/Card";
import CardButton from "./components/CardButton";
import Navbar from "./components/Navbar";
import TaskAddButton from "./components/TaskAddButton";
import TaskCard from "./components/TaskCard"
import TaskModal from "./components/TaskModal";

export default function Home() {
  return (
    <QueryProvider>
      <main className="max-w-screen-lg mx-auto w-screen max-h-full">
        <Navbar />
        <div className="divider"></div>
        <section className="grid grid-cols-1 gap-3 md:grid-cols-3 ">

          <div className="flex justify-center items-center p-2">
            <div className="border-dashed border-2 w-64 rounded-lg">
              <TaskAddButton />
            </div>
          </div>

          <div className="flex justify-center items-center p-2 ">
            <Card />
          </div>

        </section>
        <TaskModal />

      </main>
    </QueryProvider>

  );
}
