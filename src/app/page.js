import { Header } from "../../componants/Header";
import { TaskIn } from "../../componants/TaskIn";
import { Task } from "../../componants/Task";
import { Footer } from "../../componants/Footer";

export default  function Home() {
  return (
    <div className="container mx-auto">
      <Header ></Header>
      
      <div style={{maxWidth: "400px"}} className="mx-auto">
        <TaskIn></TaskIn>
        <Task title="Read a book"></Task>
        <Task title="Take a shower"></Task>
        <Task title="Sleep"></Task>
      </div>

      <Footer year="2023" name="Punawich Dach-in" stu_id="650610787"></Footer>
    
    </div>
  );
}