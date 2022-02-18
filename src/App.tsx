import React from 'react';
import { PivotViewComponent, FieldList, Inject, PivotView, Toolbar } from '@syncfusion/ej2-react-pivotview';
import {pivotData} from './data';
import './App.css';

function App() {
  let pivotObj: PivotView | null;
  const setTarget=()=>{
    (pivotObj as PivotView).pivotFieldListModule.dialogRenderer.fieldListDialog.target = document.body;
  }
 return (
    <div id="wrapper">
      <PivotViewComponent ref={pv=>pivotObj=pv}
        showFieldList={true}
        showToolbar={true}
        toolbar={["FieldList"]}
        showValuesButton={true}
        allowCalculatedField={true}
        allowDeferLayoutUpdate={true}
        dataBound={setTarget}
        dataSourceSettings={{
          dataSource: pivotData,
          rows: [{ name: 'Country' }, {name: 'Products'}],
          columns: [{ name: 'Year' }],
          values: [
            { name: 'Sold', caption: 'Units Sold' }, 
            { name: 'Amount', caption: 'Sold Amount' }
          ]
        }}>
          <Inject services={[FieldList, Toolbar]}></Inject>
      </PivotViewComponent>
    </div>
  );
}

export default App;
