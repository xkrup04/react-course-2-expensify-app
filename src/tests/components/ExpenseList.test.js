import React from 'react';
import { shallow } from 'enzyme';
import {ExpenseList} from "../../components/ExpenseList";
import expenses from "../fixtures/expenses";

test("shoud render ExpenseList with expenses", ()=>{
    const wrapper = shallow(<ExpenseList expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});

test("shoud render ExpenseList without expenses", ()=>{
    const wrapper = shallow(<ExpenseList expenses={[]}/>);
    expect(wrapper).toMatchSnapshot();
});


