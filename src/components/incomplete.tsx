import { Card } from "./ui/card";

export default function IncompleteTasks() {
  return (
    <section class="h-full flex flex-col gap-4 p-4 bg-gray-200">
      <div class="flex justify-between">
        <div class="flex gap-1 items-center">
          <div class="w-6 h-6 bg-red-700 rounded-l-full flex items-center justify-center" />
          <h2 class="text-xl font-bold text-gray-700">Incomplete</h2>
        </div>
        <div class="w-8 h-8 bg-slate-300 rounded-md flex items-center justify-center">
          <p class=" text-sm font-bold text-gray-700">0</p>
        </div>
      </div>
      <div class="max-h-screen overflow-y-auto">
        <div class="flex flex-col gap-4 justify-center items-center">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
}
