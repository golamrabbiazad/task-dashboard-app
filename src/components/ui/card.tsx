import { createSignal } from "solid-js";
import client from "../../assets/client.jpg";
import user from "../../assets/user.jpg";
import {
  StackIcon,
  ClipboardIcon,
  PaperclipIcon,
  CalendarIcon,
  ChatIcon,
} from "../../icons";
import { Modal } from "./modal";

export function Card() {
  const [isModalOpen, setIsModalOpen] = createSignal(false);

  return (
    <div class="flex flex-col gap-6 bg-white p-4 w-[400px] h-1/2 rounded-md shadow-md">
      {/* client and user section */}
      <div class="flex justify-between">
        <div class="flex gap-1 items-center">
          <img
            src={client}
            alt="client"
            class="w-8 h-8 object-cover rounded-full"
          />
          <h3 class="font-medium text-gray-800 text-sm">Alexis Matheo</h3>
        </div>
        <div class="flex gap-1 items-center">
          <img
            src={user}
            alt="user"
            class="w-8 h-8 object-cover rounded-full"
          />
          <h3 class="font-medium text-gray-800 text-sm">Ryan Carniato</h3>
        </div>
      </div>

      {/* description section */}
      <div class="flex justify-between items-center">
        <div class="flex gap-2 items-center">
          <StackIcon className="w-5 h-5 text-gray-600" />
          <p class="text-sm text-gray-700">Lorem ipsum dolor sit amet...</p>
        </div>
        <div class="flex gap-1 bg-slate-100 p-1 rounded-md items-center">
          <ClipboardIcon size={16} />
          <h3 class="text-sm font-bold text-gray-700">1/2</h3>
        </div>
      </div>

      {/* utitly section */}
      <div class="flex gap-4 flex-wrap  items-center justify-between">
        <img
          src={client}
          alt="client"
          class="w-6 h-6 object-cover rounded-full"
        />
        <img src={user} alt="user" class="w-6 h-6 object-cover rounded-full" />

        <div class="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
          <p class=" text-sm font-medium">12+</p>
        </div>

        <div class="flex gap-1 items-center">
          <ChatIcon className="w-5 h-5" />

          <p class="text-sm font-medium">15</p>
        </div>

        <div class="flex gap-1 items-center cursor-pointer">
          <div
            class="attachment__modal"
            onclick={() => {
              setIsModalOpen(!isModalOpen());
            }}
          >
            <PaperclipIcon size={16} />
          </div>
          <p class="text-sm font-medium">
            {window.localStorage.getItem("attachments")
              ? JSON.parse(window.localStorage.getItem("attachments")!).length
              : 0}
          </p>
        </div>

        <div class="flex gap-1 items-center">
          <CalendarIcon size={16} />
          <p class="text-sm font-medium">30-12-2022</p>
        </div>
      </div>
      {isModalOpen() && <Modal setIsOpen={setIsModalOpen} />}
    </div>
  );
}
