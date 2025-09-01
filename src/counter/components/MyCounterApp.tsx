import { useCounter } from "../hooks/useCounter";

const MyCounterApp = () => {

    const { counter, handleAdd, handleSubstract, handleReset} = useCounter();

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontSize: '50px', flexDirection: 'column', gap: '20px' }}>
        <h1>counter: {counter}</h1>

        <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleSubstract}>-1</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    </div>
  )
}

export default MyCounterApp