//

// LifeCyCle In Class Component .

//___________________________  *( LifeCycle )*  ________________________________

//* LifeCycle :
//             Lifecycle is an idea of how your component will function in the three
//             stages . For example, we're expecting a visitor, and their lifetime
//             is from arrival to departure.

//  Mounting    - Component loaded in the memory, means ho gaya paida
//  Updating    - Component is in action, starting playing in the ground
//  Unmounting  - Component is ready to depart, bacche ke ghar jaane ka waqt ho gaya

//  Mounting :
//            Mounting means putting elements into the DOM.

//* React has four built-in methods that gets called, in this order, when mounting a
//  component :
// 1. constructor()
// 2. getDerivedStateFromProps()
// 3. render()
// 4. componentDidMount()

// 3. The render() method is required and will always be called, the others are optional
//    and will be called if you define them.

// 1. ____________________    {   Constructor()  }   __________________

// It's not directly a part of lifecycle but being used to initialize state it is not mendatory.
// The constructor() method is called with the props, as arguments,and should always start
// by calling the super(props) before anything else.

// 2. ____________________     {  getDerivedStateFromProps()  }       __________________

//

//

// 3. ____________________     {  Render()  }       __________________

// This is the phase where we render the UI for the user. Bole to taiyaari shuru chalo
//  baarat me 😬.

// 4. ____________________     {  componentDidMount()  }       __________________

// This is the phase where we UI is already there is the screen & now it's time to
// perform our one & only task.

// componentDidMount() method is the perfect place, where we can call the setState()
// method to change the state of our application and render() the updated data loaded JSX.
// For example, we are going to fetch any data from an API then API call should be placed
// in this lifecycle method, and then we get the response, we can call the setState() method
// and render the element with updated data.

//=============================================
//=============================================
//=============================================
//=============================================
//=============================================

// LifeCyCle In Function Component .

//___________________________  *( LifeCycle )*  ________________________________

//* LifeCycle :
//             Lifecycle is an idea of how your component will function in the three
//             stages . For example, we're expecting a visitor, and their lifetime
//             is from arrival to departure.

//  Mounting    - Component loaded in the memory, means ho gaya paida
//  Updating    - Component is in action, starting playing in the ground
//  Unmounting  - Component is ready to depart, bacche ke ghar jaane ka waqt ho gaya

//_______________     Life Cycle In Function Component      ___________________

//  In function component we achieve this lifecycle or their method using useeffect .
//  Useeffect is a lifecycle method which listen for changes or phases to perform some actions.

// 1. So we have useeffect with  blank dependency array ===
//    blank dependency array who works once after mounting phase
// eg :  useEffect(() => {
//            { Runs only on the first render }
//       }, []);

// 2. With one or more dependency(state or props) array who works once while updating phase
// eg :    useEffect(() => {
//         (Runs on the first render)
//         (And any time any dependency value changes)
//      }, [prop, state]);
