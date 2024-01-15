import { createContext } from "react";

const ExpenseContext = createContext()

 export const ExpenseProvider =({children})=>{
    return(
        <ExpenseContext.Provider value={{}}>
            {children}
        </ExpenseContext.Provider>
    )
 }


export default ExpenseContext