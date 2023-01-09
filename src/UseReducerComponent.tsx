import { useState, useReducer } from "react";
///////////////////////////////////////////////////////////////////////////
// Basic counter
// const initialState = {
//   counter: 100
// };

// type ACTIONTYPES =
//   | { type: "increment"; payload: number }
//   | { type: "decrement"; payload: number }
//   | { type: "reset"; payload: null }
//   | { type: "incAmount"; payload: number };

// function counterReducer(state: typeof initialState, action: ACTIONTYPES) {
//   switch (action.type) {
//     case "increment":
//       return {
//         ...state,
//         counter: state.counter + action.payload
//       };
//     case "decrement":
//       return {
//         ...state,
//         counter: state.counter - action.payload
//       };
//     case "reset":
//       return {
//         ...state,
//         counter: 0
//       };
//     case "incAmount":
//       return {
//         ...state,
//         counter: state.counter + action.payload
//       };
//     default:
//       throw new Error("Bad action");
//   }
// }
// function UseReducerComponent() {
//   const [state, dispatch] = useReducer(counterReducer, initialState);
//   const [incAmount, setIncAmount] = useState("2");
//   return (
//     <div>
//       <div>{state.counter}</div>
//       <div>
//         <button
//           onClick={() =>
//             dispatch({
//               type: "increment",
//               payload: 10
//             })
//           }
//         >
//           Increment
//         </button>
//         |
//         <button
//           onClick={() =>
//             dispatch({
//               type: "decrement",
//               payload: 5
//             })
//           }
//         >
//           Decrement
//         </button>
//         |
//         <button
//           onClick={() =>
//             dispatch({
//               type: "reset",
//               payload: null
//             })
//           }
//         >
//           Reset
//         </button>
//         |
//         <input
//           value={incAmount}
//           onChange={(e) => setIncAmount(e.target.value)}
//         />
//         |
//         <button
//           onClick={() =>
//             dispatch({
//               type: "incAmount",
//               payload: Number(incAmount)
//             })
//           }
//         >
//           Add Amount
//         </button>
//       </div>
//     </div>
//   );
// }
////////////////////////////////////////////
// Add array of numbers and input multiplier
const initialState = {
  counter: 0,
  numArr: [1, 2]
};

type ACTIONTYPES =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number }
  | { type: "addArray"; payload: number }
  | { type: "multArray"; payload: number }
  | { type: "reset"; payload: null }
  | { type: "incAmount"; payload: number };

function counterReducer(state: typeof initialState, action: ACTIONTYPES) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + action.payload
      };
    case "decrement":
      return {
        ...state,
        counter: state.counter - action.payload
      };
    case "multArray":
      let numArrTemp = [...state.numArr];
      numArrTemp.forEach((item, index, arr) => {
        arr[index] = item * action.payload;
      });
      return {
        ...state,
        numArr: numArrTemp
      };
    case "addArray":
      return {
        ...state,
        numArr: [...state.numArr, state.numArr.length + 1]
      };
    case "reset":
      return {
        ...state,
        counter: 0
      };
    case "incAmount":
      return {
        ...state,
        counter: state.counter + action.payload
      };
    default:
      throw new Error("Bad action");
  }
}

function UseReducerComponent() {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const [incAmount, setIncAmount] = useState("1");
  const [arrMultAmt, setArrMultAmt] = useState(2);
  // const [inStr, setInStr] = useState("");
  return (
    <div>
      <div>Counter: {state.counter}</div>
      <div>Num Array: {JSON.stringify(state.numArr)}</div>
      {/* <div>Word Array: {JSON.stringify(state.wordArr)}</div> */}
      <div>
        <button
          onClick={() =>
            dispatch({
              type: "increment",
              payload: 1
            })
          }
        >
          Increment
        </button>
        |
        <button
          onClick={() =>
            dispatch({
              type: "decrement",
              payload: 1
            })
          }
        >
          Decrement
        </button>
        |
        <button
          onClick={() =>
            dispatch({
              type: "reset",
              payload: null
            })
          }
        >
          Reset
        </button>
        |
        <input
          type="number"
          value={incAmount}
          onChange={(e) => setIncAmount(e.target.value)}
        />
        <input
          type="number"
          value={arrMultAmt}
          onChange={(e) => setArrMultAmt(parseInt(e.target.value, 10))}
        />
        <button
          onClick={() =>
            dispatch({
              type: "multArray",
              payload: arrMultAmt
            })
          }
        >
          Mult Array
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "addArray",
              payload: 1
            })
          }
        >
          Add Array
        </button>
      </div>
    </div>
  );
}
export default UseReducerComponent;