import React, {useState} from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';


import {BANK_ANALYSIS} from '../constants/bankanalysis'
import Element from '../formLayout/elements';
import BankChart from '../formLayout/formelements/chart';

import './bankanalysis.scss'



function BankStatementAnalysis(){
	
    const [bankAnalysis, setBankAnalysis] = useState(BANK_ANALYSIS);

    let bankAnalysisElm= bankAnalysis.bankAnalysisFields.map((bankAnalysisField,index)=>
    <div>
        <Element key={index} fields={bankAnalysisField} />
        {console.log(bankAnalysisField)}
    </div>)
	return(
        <Row className="form">
        {bankAnalysisElm}
   <BankChart></BankChart>
        </Row>
	)
}
export default BankStatementAnalysis;