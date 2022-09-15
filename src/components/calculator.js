// import React, { useEffect, useState } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import { TbDivide, TbEqual } from 'react-icons/tb';
import { TiTimes } from 'react-icons/ti';
import { BiMinus } from 'react-icons/bi';
import { MdAdd } from 'react-icons/md';
import { VscDebugStackframeDot } from 'react-icons/vsc';

const Calculator = () => (
  <div>
    <ReactBootstrap.Table className="table">
      <thead>
        <tr className="head">
          <th colSpan={4}>0</th>
        </tr>
      </thead>
      <tbody className="body">
        <tr>
          <td>AC</td>
          <td>+/-</td>
          <td>%</td>
          <td className="sign">
            {' '}
            <TbDivide />
            {' '}
          </td>
        </tr>
        <tr>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td className="sign">
            {' '}
            <TiTimes />
            {' '}
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td className="sign">
            {' '}
            <BiMinus />
            {' '}
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td className="sign">
            {' '}
            <MdAdd />
            {' '}
          </td>
        </tr>
        <tr>
          <td colSpan={2}>0</td>
          <td>
            {' '}
            <VscDebugStackframeDot />
            {' '}
          </td>
          <td className="sign">
            {' '}
            <TbEqual />
            {' '}
          </td>
        </tr>
      </tbody>
    </ReactBootstrap.Table>
  </div>
);

export default Calculator;
