import React, { Component } from 'react';
import { createStore } from 'redux';

/*下面这个方法是一个Reducer函数*/
const defaultState = {
    userName:'lucy'
};
function reducer(state = defaultState,action){
    switch (action.type){
        case 'A':
            return Object.assign({}, state, {
                userName: action.filter
        });
        default:
            return state;
    }
}

// let store = createStore(reducer);
// 监听state，变化执行函数
// store.subscribe(()=>alert(1));
// let unsubscribe = store.subscribe(()=>(
//     console.log(store.getState())
// ));
// unsubscribe(); //解除监听
export default reducer;
