import {createStore} from 'redux';
import empReducer from '../reducer/empReducer';

const store = createStore(empReducer);

store.subscribe(() =>{
  console.log('store changed:::',store.getState())
})




  store.dispatch({type:'ADD_EMP',emps:[
    { id:'3',empid: '1003', ename: 'Venugopal1', sal: '109.30' },
    { id:'4',empid: '1004', ename: 'Durshetty1', sal: '138.30' }
  ]});


export default store;
