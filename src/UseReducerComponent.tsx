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
// const initialState = {
//   counter: 0,
//   numArr: [1, 2]
// };

// type ACTIONTYPES =
//   | { type: "increment"; payload: number }
//   | { type: "decrement"; payload: number }
//   | { type: "addArray"; payload: number }
//   | { type: "multArray"; payload: number }
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
//     case "multArray":
//       let numArrTemp = [...state.numArr];
//       numArrTemp.forEach((item, index, arr) => {
//         arr[index] = item * action.payload;
//       });
//       return {
//         ...state,
//         numArr: numArrTemp
//       };
//     case "addArray":
//       return {
//         ...state,
//         numArr: [...state.numArr, state.numArr.length + 1]
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
//   const [incAmount, setIncAmount] = useState("1");
//   const [arrMultAmt, setArrMultAmt] = useState(2);
//   // const [inStr, setInStr] = useState("");
//   return (
//     <div>
//       <div>Counter: {state.counter}</div>
//       <div>Num Array: {JSON.stringify(state.numArr)}</div>
//       {/* <div>Word Array: {JSON.stringify(state.wordArr)}</div> */}
//       <div>
//         <button
//           onClick={() =>
//             dispatch({
//               type: "increment",
//               payload: 1
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
//               payload: 1
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
//           type="number"
//           value={incAmount}
//           onChange={(e) => setIncAmount(e.target.value)}
//         />
//         <input
//           type="number"
//           value={arrMultAmt}
//           onChange={(e) => setArrMultAmt(parseInt(e.target.value, 10))}
//         />
//         <button
//           onClick={() =>
//             dispatch({
//               type: "multArray",
//               payload: arrMultAmt
//             })
//           }
//         >
//           Mult Array
//         </button>
//         <button
//           onClick={() =>
//             dispatch({
//               type: "addArray",
//               payload: 1
//             })
//           }
//         >
//           Add Array
//         </button>
//       </div>
//     </div>
//   );
// }
//////////////////////////////////////////
// Add state object
// const initialState = {
//   counter: 0,
//   numArr: [1, 2],
//   wordArr: ["One", "Two"],
//   obj: {
//     objNum: 10,
//     objNumArr: [11, 22],
//     objWordArr: ["Five", "Six"]
//   }
// };

// type ACTIONTYPES =
//   | { type: "increment"; payload: number }
//   | { type: "decrement"; payload: number }
//   | { type: "objIncrement"; payload: number }
//   | { type: "objDecrement"; payload: number }
//   | { type: "addArray"; payload: number }
//   | { type: "objAddArray"; payload: number }
//   | { type: "multArray"; payload: number }
//   | { type: "objMultArray"; payload: number }
//   | { type: "pushStrArray"; payload: string }
//   | { type: "objPushStrArray"; payload: string }
//   | { type: "reset"; payload: null }
//   | { type: "objReset"; payload: number }
//   | { type: "incAmount"; payload: number };

// function counterReducer(state: typeof initialState, action: ACTIONTYPES) {
//   switch (action.type) {
//     case "increment":
//       return { ...state, counter: state.counter + action.payload };
//     case "decrement":
//       return { ...state, counter: state.counter - action.payload };
//     case "objIncrement":
//       return {
//         ...state,
//         obj: { ...state.obj, objNum: state.obj.objNum + action.payload }
//       };
//     case "objDecrement":
//       return {
//         ...state,
//         obj: { ...state.obj, objNum: state.obj.objNum - action.payload }
//       };
//     case "multArray":
//       let numArrTemp = [...state.numArr];
//       numArrTemp.forEach((item, index, arr) => {
//         arr[index] = item * action.payload;
//       });
//       return { ...state, numArr: numArrTemp };
//     case "objMultArray":
//       let objNumArrTemp = [...state.obj.objNumArr];
//       objNumArrTemp.forEach((item, index, arr) => {
//         arr[index] = item * action.payload;
//       });
//       return {
//         ...state,
//         obj: { ...state.obj, objNumArr: objNumArrTemp }
//       };
//     case "addArray":
//       return {
//         ...state,
//         numArr: [...state.numArr, state.numArr.length + 1]
//       };
//     case "objAddArray":
//       return {
//         ...state,
//         obj: {
//           ...state.obj,
//           objNumArr: [...state.obj.objNumArr, state.obj.objNumArr.length + 1]
//         }
//       };
//     case "pushStrArray":
//       return {
//         ...state,
//         wordArr: [...state.wordArr, action.payload]
//       };
//     case "objPushStrArray":
//       return {
//         ...state,
//         obj: {
//           ...state.obj,
//           objWordArr: [...state.obj.objWordArr, action.payload]
//         }
//       };
//     case "reset":
//       return { ...state, counter: 0 };
//     case "objReset":
//       return {
//         ...state,
//         obj: { ...state.obj, objNum: action.payload }
//       };
//     case "incAmount":
//       return { ...state, counter: state.counter + action.payload };
//     default:
//       throw new Error("Bad action");
//   }
// }

// function UseReducerComponent() {
//   const [state, dispatch] = useReducer(counterReducer, initialState);
//   const [incAmount, setIncAmount] = useState(1);
//   const [arrMultAmt, setArrMultAmt] = useState(2);
//   const [inStr, setInStr] = useState("");
//   return (
//     <div>
//       <div>Counter: {state.counter}</div>
//       <div>Num Array: {JSON.stringify(state.numArr)}</div>
//       <div>Word Array: {JSON.stringify(state.wordArr)}</div>
//       <div>Object array: {JSON.stringify(state.obj)}</div>
//       <div>
//         <button
//           onClick={() =>
//             dispatch({
//               type: "increment",
//               payload: incAmount
//             })
//           }
//         >
//           Inc
//         </button>
//         |
//         <button
//           onClick={() =>
//             dispatch({
//               type: "decrement",
//               payload: incAmount
//             })
//           }
//         >
//           Dec
//         </button>
//         |
//         <input
//           type="number"
//           value={incAmount}
//           onChange={(e) => setIncAmount(parseInt(e.target.value, 10))}
//         />
//         <button
//           onClick={() =>
//             dispatch({
//               type: "objIncrement",
//               payload: incAmount
//             })
//           }
//         >
//           Obj Inc
//         </button>
//         |
//         <button
//           onClick={() =>
//             dispatch({
//               type: "objDecrement",
//               payload: incAmount
//             })
//           }
//         >
//           Obj Dec
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
//         <button
//           onClick={() =>
//             dispatch({
//               type: "objReset",
//               payload: 10
//             })
//           }
//         >
//           Obj Reset
//         </button>
//         <input
//           type="number"
//           value={arrMultAmt}
//           onChange={(e) => setArrMultAmt(parseInt(e.target.value, 10))}
//         />
//         <button
//           onClick={() =>
//             dispatch({
//               type: "multArray",
//               payload: arrMultAmt
//             })
//           }
//         >
//           Mult Array
//         </button>
//         <button
//           onClick={() =>
//             dispatch({
//               type: "objMultArray",
//               payload: arrMultAmt
//             })
//           }
//         >
//           Mult Obj Array
//         </button>
//         <button
//           onClick={() =>
//             dispatch({
//               type: "addArray",
//               payload: 1
//             })
//           }
//         >
//           Push Num
//         </button>
//         <button
//           onClick={() =>
//             dispatch({
//               type: "objAddArray",
//               payload: 1
//             })
//           }
//         >
//           Push Obj Num
//         </button>
//         <input
//           type="string"
//           value={inStr}
//           onChange={(e) => setInStr(e.target.value)}
//         />
//         <button
//           onClick={() => {
//             dispatch({
//               type: "pushStrArray",
//               payload: inStr
//             });
//             setInStr(""); // clear the input box
//           }}
//         >
//           Push Word
//         </button>
//         <button
//           onClick={() => {
//             dispatch({
//               type: "objPushStrArray",
//               payload: inStr
//             });
//             //setInStr(""); // clear the input box
//           }}
//         >
//           Push Obj Word
//         </button>
//       </div>
//     </div>
//   );
// }
//////////////////////////////////////////
// Add word count
const initialState = {
  counter: 0,
  numArr: [1, 2],
  wordArr: ["java", "world", "java", "code", "World", "Java"],
  obj: {
    objNum: 10,
    objNumArr: [11, 22],
    objWordArr: ["One", "Two", "one", "two", "three", "onE"]
  },
  wordCount: {},
  objWordCount: {}
};

type ACTIONTYPES =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number }
  | { type: "objIncrement"; payload: number }
  | { type: "objDecrement"; payload: number }
  | { type: "addArray"; payload: number }
  | { type: "objAddArray"; payload: number }
  | { type: "multArray"; payload: number }
  | { type: "objMultArray"; payload: number }
  | { type: "pushStrArray"; payload: string }
  | { type: "objPushStrArray"; payload: string }
  | { type: "reset"; payload: null }
  | { type: "objReset"; payload: number }
  | { type: "incAmount"; payload: number }
  | { type: "wordCount"; payload: null }
  | { type: "objWordCount"; payload: null };

function counterReducer(state: typeof initialState, action: ACTIONTYPES) {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + action.payload };
    case "decrement":
      return { ...state, counter: state.counter - action.payload };
    case "objIncrement":
      return {
        ...state,
        obj: { ...state.obj, objNum: state.obj.objNum + action.payload }
      };
    case "objDecrement":
      return {
        ...state,
        obj: { ...state.obj, objNum: state.obj.objNum - action.payload }
      };
    case "multArray":
      let numArrTemp = [...state.numArr];
      numArrTemp.forEach((item, index, arr) => {
        arr[index] = item * action.payload;
      });
      return { ...state, numArr: numArrTemp };
    case "objMultArray":
      let objNumArrTemp = [...state.obj.objNumArr];
      objNumArrTemp.forEach((item, index, arr) => {
        arr[index] = item * action.payload;
      });
      return {
        ...state,
        obj: { ...state.obj, objNumArr: objNumArrTemp }
      };
    case "addArray":
      return {
        ...state,
        numArr: [...state.numArr, state.numArr.length + 1]
      };
    case "objAddArray":
      return {
        ...state,
        obj: {
          ...state.obj,
          objNumArr: [...state.obj.objNumArr, state.obj.objNumArr.length + 1]
        }
      };
    case "pushStrArray":
      return {
        ...state,
        wordArr: [...state.wordArr, action.payload]
      };
    case "objPushStrArray":
      return {
        ...state,
        obj: {
          ...state.obj,
          objWordArr: [...state.obj.objWordArr, action.payload]
        }
      };
    case "reset":
      return { ...state, counter: 0 };
    case "objReset":
      return {
        ...state,
        obj: { ...state.obj, objNum: action.payload }
      };
    case "incAmount":
      return { ...state, counter: state.counter + action.payload };
    case "wordCount":
      const wordCount: any = {};
      for (const element of state.wordArr) {
        let element1 = element.toLowerCase();
        if (wordCount[element1]) {
          wordCount[element1] += 1;
        } else {
          wordCount[element1] = 1;
        }
      }
      //console.log(wordCount);
      return { ...state, wordCount };
    case "objWordCount":
      const objWordCount: any = {};
      for (const element of state.obj.objWordArr) {
        let element1 = element.toLowerCase();
        if (objWordCount[element1]) {
          objWordCount[element1] += 1;
        } else {
          objWordCount[element1] = 1;
        }
      }
      //console.log(objWordCount);
      return { ...state, objWordCount };
    default:
      throw new Error("Bad action");
  }
}

function UseReducerComponent() {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const [incAmount, setIncAmount] = useState(1);
  const [arrMultAmt, setArrMultAmt] = useState(2);
  const [inStr, setInStr] = useState("");
  return (
    <div>
      <div>Counter: {state.counter}</div>
      <div>Num Array: {JSON.stringify(state.numArr)}</div>
      <div>Word Array: {JSON.stringify(state.wordArr)}</div>
      <div>Object array: {JSON.stringify(state.obj)}</div>
      <div>Word count: {JSON.stringify(state.wordCount)}</div>
      <div>Obj word count: {JSON.stringify(state.objWordCount)}</div>
      <div>
        <button
          onClick={() =>
            dispatch({
              type: "increment",
              payload: incAmount
            })
          }
        >
          Inc
        </button>
        |
        <button
          onClick={() =>
            dispatch({
              type: "decrement",
              payload: incAmount
            })
          }
        >
          Dec
        </button>
        |
        <input
          type="number"
          value={incAmount}
          onChange={(e) => setIncAmount(parseInt(e.target.value, 10))}
        />
        <button
          onClick={() =>
            dispatch({
              type: "objIncrement",
              payload: incAmount
            })
          }
        >
          Obj Inc
        </button>
        |
        <button
          onClick={() =>
            dispatch({
              type: "objDecrement",
              payload: incAmount
            })
          }
        >
          Obj Dec
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
        <button
          onClick={() =>
            dispatch({
              type: "objReset",
              payload: 10
            })
          }
        >
          Obj Reset
        </button>
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
              type: "objMultArray",
              payload: arrMultAmt
            })
          }
        >
          Mult Obj Array
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "addArray",
              payload: 1
            })
          }
        >
          Push Num
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "objAddArray",
              payload: 1
            })
          }
        >
          Push Obj Num
        </button>
        <input
          type="string"
          value={inStr}
          onChange={(e) => setInStr(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch({
              type: "pushStrArray",
              payload: inStr
            });
            // setInStr(""); // clear the input box
          }}
        >
          Push Word
        </button>
        <button
          onClick={() => {
            dispatch({
              type: "objPushStrArray",
              payload: inStr
            });
          }}
        >
          Push Obj Word
        </button>
        <button
          onClick={() => {
            dispatch({
              type: "wordCount",
              payload: null
            });
            setInStr(""); // clear the input box
          }}
        >
          Word count
        </button>
        <button
          onClick={() => {
            dispatch({
              type: "objWordCount",
              payload: null
            });
            setInStr(""); // clear the input box
          }}
        >
          Obj word count
        </button>
      </div>
    </div>
  );
}

export default UseReducerComponent;