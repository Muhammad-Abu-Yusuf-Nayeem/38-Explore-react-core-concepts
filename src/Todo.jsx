export default function Todo({ task, isDone }) {
  return (
    <>
    {/* conditional rendering '?'
      <li>Task: {task} {isDone ? 'Finished' : 'Work on'}</li> */}

    {/* //conditional rendering '&&'
    <li>Task: {task} {isDone && ': Done'} </li>  */}
  
    {/* //conditional rendering '||'
    <li>Task: {task} {isDone || ': Do it'} </li> 
     */}

    {/* //conditional rendering '||' */}
    <li>Task: {task} {isDone || ': Do it'} </li> 


    </>
  );
}
