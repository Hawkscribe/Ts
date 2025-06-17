import { Button } from './components/button';
import { PlusIcon } from './icons/plusIcon';

export const App = () => {

  return (
    <>
      <Button startIcon={<PlusIcon size="md"/>}size="md"variant='primary' text='share'></Button>
      <Button size="md"variant='secondary' text='Add content'></Button>
    </>
  )
}