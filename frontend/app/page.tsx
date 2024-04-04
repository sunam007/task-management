"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import QueryProvider from "./Providers";
import { deleteApi, get, patch } from "./api";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import TaskAddButton from "./components/TaskAddButton";
import TaskModal from "./components/TaskModal";
import { isLoggedIn, retrieveUser } from "./utils/retrieveUser";

export default function Home() {
  const [taskStatus, setTaskStatus] = useState()

  const router = useRouter()

  const _isLoggedIn: boolean | null = isLoggedIn()

  if (_isLoggedIn === null) {
    router.replace("/login")
  }

  const user = retrieveUser()


  const { data, refetch } = useQuery({
    queryKey: ['all tasks', user],
    queryFn: () => get("/tasks/?page=1&limit=5"),
  });


  const taskDeleteMutation = useMutation(
    async (taskId) => await deleteApi(`/tasks/${taskId}`),
    {
      onSuccess: (res) => {
        refetch()
      },
      onError: (err) => {
      },
    }
  );
  const taskEditMutation = useMutation(
    async (taskId) => await patch(`/tasks/${taskId}`, data),
    {
      onSuccess: (res) => {
        refetch()
      },
      onError: (err) => {
      },
    }
  );

  const onClickDelete = (taskId) => {
    taskDeleteMutation.mutate(taskId)
  }


  const onClickStatus = (taskId) => {

    data["status"] = taskStatus;

    taskEditMutation.mutate(taskId, data)
  }


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

          {
            data?.data?.map(task => {
              return (
                <div key={task?._id} className="flex justify-center items-center p-2 ">
                  <Card
                    taskId={task?.id}
                    title={task?.title}
                    description={task?.description}
                    status={task?.status}
                    onClickDelete={() => onClickDelete(task?._id)}
                    onClickStatus={() => onClickStatus(task?._id)}
                    setTaskStatus={setTaskStatus}
                  />
                </div>
              )
            })
          }

        </section>
        <TaskModal refetch={refetch} />

      </main>
    </QueryProvider>
  );
}
