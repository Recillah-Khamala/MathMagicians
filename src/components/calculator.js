// import React, { useEffect, useState } from 'react';
import React from 'react';

class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="calculator">
        <div className="card">
          <div className="calcKeys firstRow">
            <input type="text" className="CalcScreen" value="0" />
          </div>
          <div className="calcKeys secondRow">
            <input type="button" value="AC" />
            <input type="button" value="+/-" />
            <input type="button" value="%" />
            <input type="button" value="÷" className="operator" />
          </div>
          <div className="calcKeys thirdRow">
            <input type="button" value="7" />
            <input type="button" value="8" />
            <input type="button" value="9" />
            <input type="button" value="*" className="operator" />
          </div>
          <div className="calcKeys fourthRow">
            <input type="button" value="4" />
            <input type="button" value="5" />
            <input type="button" value="6" />
            <input type="button" value="-" className="operator" />
          </div>
          <div className="calcKeys fifthRow">
            <input type="button" value="1" />
            <input type="button" value="2" />
            <input type="button" value="3" />
            <input type="button" value="+" className="operator" />
          </div>
          <div className="calcKeys sixthRow">
            <input type="button" value="0" className="first" />
            <input type="button" value="." />
            <input type="button" value="=" className="operator" />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
