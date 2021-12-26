import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { GeneratePlate } from './Utils'

function App() {
  const [bankoPlate, setBankoPlate] = useState<any>(null);

  return (
    <div>
      <button onClick={() => setBankoPlate(GeneratePlate())} >Generate Plate</button>
      {
        bankoPlate &&
        <table>
          <tr>
            <td style={{'border':'1px solid black', 'width':'20px', 'textAlign':'center', 'verticalAlign':'middle'}}>{bankoPlate[0][0] === 0 ? '' : bankoPlate[0][0].toString()}</td>
            <td style={{'border':'1px solid black', 'width':'20px', 'textAlign':'center', 'verticalAlign':'middle'}}>{bankoPlate[0][1] === 0 ? '' : bankoPlate[0][1].toString()}</td>
            <td style={{'border':'1px solid black', 'width':'20px', 'textAlign':'center', 'verticalAlign':'middle'}}>{bankoPlate[0][2] === 0 ? '' : bankoPlate[0][2].toString()}</td>
            <td style={{'border':'1px solid black', 'width':'20px', 'textAlign':'center', 'verticalAlign':'middle'}}>{bankoPlate[0][3] === 0 ? '' : bankoPlate[0][3].toString()}</td>
            <td style={{'border':'1px solid black', 'width':'20px', 'textAlign':'center', 'verticalAlign':'middle'}}>{bankoPlate[0][4] === 0 ? '' : bankoPlate[0][4].toString()}</td>
            <td style={{'border':'1px solid black', 'width':'20px', 'textAlign':'center', 'verticalAlign':'middle'}}>{bankoPlate[0][5] === 0 ? '' : bankoPlate[0][5].toString()}</td>
            <td style={{'border':'1px solid black', 'width':'20px', 'textAlign':'center', 'verticalAlign':'middle'}}>{bankoPlate[0][6] === 0 ? '' : bankoPlate[0][6].toString()}</td>
            <td style={{'border':'1px solid black', 'width':'20px', 'textAlign':'center', 'verticalAlign':'middle'}}>{bankoPlate[0][7] === 0 ? '' : bankoPlate[0][7].toString()}</td>
            <td style={{'border':'1px solid black', 'width':'20px', 'textAlign':'center', 'verticalAlign':'middle'}}>{bankoPlate[0][8] === 0 ? '' : bankoPlate[0][8].toString()}</td>
          </tr>
          <tr>
            <td style={{'border':'1px solid black', 'width':'20px', 'textAlign':'center', 'verticalAlign':'middle'}}>{bankoPlate[1][0] === 0 ? '' : bankoPlate[1][0].toString()}</td>
            <td style={{'border':'1px solid black', 'width':'20px', 'textAlign':'center', 'verticalAlign':'middle'}}>{bankoPlate[1][1] === 0 ? '' : bankoPlate[1][1].toString()}</td>
            <td style={{'border':'1px solid black', 'width':'20px', 'textAlign':'center', 'verticalAlign':'middle'}}>{bankoPlate[1][2] === 0 ? '' : bankoPlate[1][2].toString()}</td>
            <td style={{'border':'1px solid black', 'width':'20px', 'textAlign':'center', 'verticalAlign':'middle'}}>{bankoPlate[1][3] === 0 ? '' : bankoPlate[1][3].toString()}</td>
            <td style={{'border':'1px solid black', 'width':'20px', 'textAlign':'center', 'verticalAlign':'middle'}}>{bankoPlate[1][4] === 0 ? '' : bankoPlate[1][4].toString()}</td>
            <td style={{'border':'1px solid black', 'width':'20px', 'textAlign':'center', 'verticalAlign':'middle'}}>{bankoPlate[1][5] === 0 ? '' : bankoPlate[1][5].toString()}</td>
            <td style={{'border':'1px solid black', 'width':'20px', 'textAlign':'center', 'verticalAlign':'middle'}}>{bankoPlate[1][6] === 0 ? '' : bankoPlate[1][6].toString()}</td>
            <td style={{'border':'1px solid black', 'width':'20px', 'textAlign':'center', 'verticalAlign':'middle'}}>{bankoPlate[1][7] === 0 ? '' : bankoPlate[1][7].toString()}</td>
            <td style={{'border':'1px solid black', 'width':'20px', 'textAlign':'center', 'verticalAlign':'middle'}}>{bankoPlate[1][8] === 0 ? '' : bankoPlate[1][8].toString()}</td>
          </tr>
          <tr>
            <td style={{'border':'1px solid black', 'width':'20px', 'textAlign':'center', 'verticalAlign':'middle'}}>{bankoPlate[2][0] === 0 ? '' : bankoPlate[2][0].toString()}</td>
            <td style={{'border':'1px solid black', 'width':'20px', 'textAlign':'center', 'verticalAlign':'middle'}}>{bankoPlate[2][1] === 0 ? '' : bankoPlate[2][1].toString()}</td>
            <td style={{'border':'1px solid black', 'width':'20px', 'textAlign':'center', 'verticalAlign':'middle'}}>{bankoPlate[2][2] === 0 ? '' : bankoPlate[2][2].toString()}</td>
            <td style={{'border':'1px solid black', 'width':'20px', 'textAlign':'center', 'verticalAlign':'middle'}}>{bankoPlate[2][3] === 0 ? '' : bankoPlate[2][3].toString()}</td>
            <td style={{'border':'1px solid black', 'width':'20px', 'textAlign':'center', 'verticalAlign':'middle'}}>{bankoPlate[2][4] === 0 ? '' : bankoPlate[2][4].toString()}</td>
            <td style={{'border':'1px solid black', 'width':'20px', 'textAlign':'center', 'verticalAlign':'middle'}}>{bankoPlate[2][5] === 0 ? '' : bankoPlate[2][5].toString()}</td>
            <td style={{'border':'1px solid black', 'width':'20px', 'textAlign':'center', 'verticalAlign':'middle'}}>{bankoPlate[2][6] === 0 ? '' : bankoPlate[2][6].toString()}</td>
            <td style={{'border':'1px solid black', 'width':'20px', 'textAlign':'center', 'verticalAlign':'middle'}}>{bankoPlate[2][7] === 0 ? '' : bankoPlate[2][7].toString()}</td>
            <td style={{'border':'1px solid black', 'width':'20px', 'textAlign':'center', 'verticalAlign':'middle'}}>{bankoPlate[2][8] === 0 ? '' : bankoPlate[2][8].toString()}</td>
          </tr>
        </table>
      }
    </div>
  );
}

export default App;
