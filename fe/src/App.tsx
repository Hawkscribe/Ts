import { Button } from "./components/button";
import { Card } from "./components/Card";
import { PlusIcon } from "./icon/plusIcon";
import { ShareIcon } from "./icon/shareIcon";

function App(){
  return <div>
    <Button variant="primary"text="Add content"startIcon={<PlusIcon/>}></Button>
    <Button variant="secondary"text="ShareBrain"startIcon={<ShareIcon/>}></Button>
    <Card/>
  </div>
}


export default App;