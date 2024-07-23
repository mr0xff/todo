'use server';

import { cookies } from "next/headers";
import { randomUUID } from "crypto";

const LOCAL_DATA = '@db';

type taskItem = {
  taskId: string;
  data: string;
  doned: boolean;
  createAt: number;
};

async function addTask(p: unknown, formData: FormData){
  const content = formData.get('content') as string;
  const data = await getTasks();

  data.push({ 
    taskId: randomUUID(), 
    data: content,
    doned: false,
    createAt: Date.now()
  });

  cookies().set(LOCAL_DATA, JSON.stringify(data));

  return{
    message: 'Salvo com sucesso!',
  }
}

async function deleteTask(taskId: string){
  const tasks = await getTasks();
  cookies().set(LOCAL_DATA, JSON.stringify(tasks.filter((task)=> task.taskId !== taskId)));
  return true;
}

async function markAsDone(taskId: string){
  const task = await getTask(taskId);
  if(!task) return false;
  let tasks = await getTasks();
  tasks = tasks.filter((task)=> task.taskId !== taskId);
  task['doned'] = true
  tasks.push(task);
  cookies().set(LOCAL_DATA, JSON.stringify(tasks));
  return true;
}
async function getTask(taskId: string){
  const tasks = await getTasks();
  return tasks.find((task)=> task.taskId === taskId);
}

async function getTasks(){  
  const data = cookies().get(LOCAL_DATA);
  if(data){
    const parsedTaskItems = JSON.parse(data?.value) as taskItem[];
    return parsedTaskItems;
  }
  return [];
}

async function updateTask(prev: unknown, formData: FormData){
  const taskId = formData.get('taskId') as string;
  const content = formData.get('content') as string;
  const task = await getTask(taskId);
  if(!task) return { message: 'falha'};
  let tasks = await getTasks();
  tasks = tasks.filter((task)=> task.taskId !== taskId);
  task['data'] = content;
  tasks.push(task);
  cookies().set(LOCAL_DATA, JSON.stringify(tasks));

  return{ message: 'actualizado!'};
}

export {
  addTask,
  deleteTask,
  getTask,
  getTasks,
  markAsDone,
  updateTask
}