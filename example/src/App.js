import React from 'react'

import { Button, ExampleComponent } from 'button-dgs'
import 'button-dgs/dist/index.css'

const App = () => {
  return (
    <>
    <Button text='Primary Button' type='primary'/>
    <Button text='Default Button'/>
    <Button text='Dashed Button' type='dashed'/>
    <Button text='Text Button' type='text'/>
    <Button text='Linked Button' type='linked'/>
    </>
  )
}

export default App
