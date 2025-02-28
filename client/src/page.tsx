import { ReactElement } from "react"
import TaskHeader from "./components/section/TaskHeader";
import AddTaskForm from "./components/section/AddTaskForm";
import TaskPage from "./components/section/TaskPage";

const Page = (): ReactElement => {
    return (
        <>
            <TaskHeader />
            <AddTaskForm />
            <TaskPage />
        </>
    )
}

export default Page;