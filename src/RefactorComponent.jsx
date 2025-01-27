import {useState} from "react";

// eslint-disable-next-line react/prop-types
export default function RefactorComponent({children}) {
    const [x, setX] = useState(0);

    return (
        <>
          <button onClick= {() => setX(x+1)}>Increment X</button>
               {children}
            {x}

        </>
    )
}

//Above RefactorComponnent is re-rendering but {children} prop is not ,meanwhile the rule is that if the parent component will re render then children will also re render but here is not the case Why??
//Why children is not re rendering??
// bcoz that component is passed as a prop means is made outside the function and passed as a prop and according to the virtual dom tree concept ye prop har baar function ke call hone pe
//chnage thodi na ho rha h to baar baar re render nhi hoga 