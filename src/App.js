import React from 'react'
import { Provider } from 'react-redux'

// import Ap from './001section-TypeScript/Ap.tsx'
// import Ap from './001section-TypeScript'

// import Ap from './002section-CSS/Ap'

import Ap from './003section-sliderBoxShadow/Ap'

// import Ap from "./009section-store/Ap";

// import Ap from './008section-UserInput/Ap'

// import Ap from "./011section-mealsShop/Ap"; //update!!
// import "./011section-mealsShop/index.css";

// import Ap from './012section-howReactWorks'

// import Ap from './015section-useCustomHooks/Ap';

// import Ap from './016section-Forms/Ap';
// import './016section-Forms/index.css';

// import Ap from "./018section-redux/Ap";
// import "./018section-redux/index.css";

// import Ap from './019section-reduxDeeper/Ap'
import store from './019section-reduxDeeper/store/index.js'

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Ap />
      </Provider>
    </div>
  )
}

export default App
