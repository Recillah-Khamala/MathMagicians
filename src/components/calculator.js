import React from 'react';
import '../App.css';
import calculate from '../logic/calculate';

/* eslint-disable react/destructuring-assignment */
class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

    clickHandle = (e) => {
      // eslint-disable-next-line react/no-access-state-in-setstate
      this.setState(calculate(this.state, e.target.value));
    };

    render() {
      return (
        <div className="calculator">
          <div className="card">
            <div className="calcKeys firstRow">
              <span className="CalcScreen">
                {this.state.total}
                {this.state.operation}
                {this.state.next}
              </span>
            </div>
            <div className="calcKeys secondRow">
              <input type="button" value="AC" onClick={this.clickHandle} />
              <input type="button" value="+/-" onClick={this.clickHandle} />
              <input type="button" value="%" onClick={this.clickHandle} />
              <input type="button" value="÷" onClick={this.clickHandle} className="operator" />
            </div>
            <div className="calcKeys thirdRow">
              <input type="button" value="7" onClick={this.clickHandle} />
              <input type="button" value="8" onClick={this.clickHandle} />
              <input type="button" value="9" onClick={this.clickHandle} />
              <input type="button" value="x" onClick={this.clickHandle} className="operator" />
            </div>
            <div className="calcKeys fourthRow">
              <input type="button" value="4" onClick={this.clickHandle} />
              <input type="button" value="5" onClick={this.clickHandle} />
              <input type="button" value="6" onClick={this.clickHandle} />
              <input type="button" value="-" onClick={this.clickHandle} className="operator" />
            </div>
            <div className="calcKeys fifthRow">
              <input type="button" value="1" onClick={this.clickHandle} />
              <input type="button" value="2" onClick={this.clickHandle} />
              <input type="button" value="3" onClick={this.clickHandle} />
              <input type="button" value="+" onClick={this.clickHandle} className="operator" />
            </div>
            <div className="calcKeys sixthRow">
              <input type="button" value="0" onClick={this.clickHandle} className="first" />
              <input type="button" value="." onClick={this.clickHandle} />
              <input type="button" value="=" onClick={this.clickHandle} className="operator" />
            </div>
          </div>
        </div>
      );
    }
}

export default Calculator;
