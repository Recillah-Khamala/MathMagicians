import React, { useState } from 'react';
import '../App.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState(0);

  const clickHandle = (e) => {
    setState((state) => calculate(state, e.target.value));
  };

  return (
    <div className="calculator">
      <h1>Lets do some maths</h1>
      <div className="card">
        <div className="calcKeys firstRow">
          <span className="CalcScreen">
            {state.next || state.operator || state.total || 0}
          </span>
        </div>
        <div className="calcKeys secondRow">
          <input type="button" value="AC" onClick={clickHandle} />
          <input type="button" value="+/-" onClick={clickHandle} />
          <input type="button" value="%" onClick={clickHandle} />
          <input type="button" value="÷" onClick={clickHandle} className="operator" />
        </div>
        <div className="calcKeys thirdRow">
          <input type="button" value="7" onClick={clickHandle} />
          <input type="button" value="8" onClick={clickHandle} />
          <input type="button" value="9" onClick={clickHandle} />
          <input type="button" value="x" onClick={clickHandle} className="operator" />
        </div>
        <div className="calcKeys fourthRow">
          <input type="button" value="4" onClick={clickHandle} />
          <input type="button" value="5" onClick={clickHandle} />
          <input type="button" value="6" onClick={clickHandle} />
          <input type="button" value="-" onClick={clickHandle} className="operator" />
        </div>
        <div className="calcKeys fifthRow">
          <input type="button" value="1" onClick={clickHandle} />
          <input type="button" value="2" onClick={clickHandle} />
          <input type="button" value="3" onClick={clickHandle} />
          <input type="button" value="+" onClick={clickHandle} className="operator" />
        </div>
        <div className="calcKeys sixthRow">
          <input type="button" value="0" onClick={clickHandle} className="first" />
          <input type="button" value="." onClick={clickHandle} />
          <input type="button" value="=" onClick={clickHandle} className="operator" />
        </div>
      </div>
    </div>
  );
};
export default Calculator;
