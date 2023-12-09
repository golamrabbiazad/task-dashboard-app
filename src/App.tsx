import CompletedTasks from "./components/compteted";
import DoingTasks from "./components/doing";
import IncompleteTasks from "./components/incomplete";
import TodoTasks from "./components/todo";
import UnderReviewTasks from "./components/under-review";

function App() {
  return (
    <>
      <main class="h-full w-full flex p-4 gap-4">
        <IncompleteTasks />
        <TodoTasks />
        <DoingTasks />
        <UnderReviewTasks />
        <CompletedTasks />
      </main>
    </>
  );
}

export default App;
