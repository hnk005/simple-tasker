import { useContext } from "react";
import { TaskContext } from "@/providers/TaskProvider";
import DialogCommon from "@/components/common/DialogCommon";
import { DialogPanel } from "@headlessui/react";

const DeleteTaskDialog = () => {
  const { deleteTaskId, closeDelete, handleDelete } = useContext(TaskContext);

  const handleConfirmDelete = () => {
    if (deleteTaskId !== null) {
      handleDelete(deleteTaskId);
      closeDelete();
    }
  };

  return (
    <DialogCommon open={deleteTaskId !== null} onClose={closeDelete}>
      <div className="fixed inset-0 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl"
          >
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Delete Task</h2>
              <p className="text-gray-700 mb-4">Are you sure you want to delete this task?</p>
              <div className="flex justify-end gap-4">
                <button
                  onClick={closeDelete}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmDelete}
                  className="bg-red-600 text-white px-4 py-2 rounded-md"
                >
                  Delete
                </button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </DialogCommon>
  );
};

export default DeleteTaskDialog;