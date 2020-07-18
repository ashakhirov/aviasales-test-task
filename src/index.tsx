import React from 'react'
import { render } from 'react-dom'
import { createInspector } from 'effector-inspector'

import App from './app'

createInspector()

render(<App />, document.getElementById('root'))
