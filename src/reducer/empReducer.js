
const initialState = {
  emps: [
    { id:'1',eid: '1001', ename: 'Venugopal', sal: '1029.30' },
    { id:'2',eid: '1002', ename: 'Durshetty', sal: '1378.30' }
    ]
}

export default function(state = initialState, action){
  switch(action.type){
    case 'SAVE_EMPLIST': {
      console.log('Add_EMP Fired:',action.emps);
      return Object.assign({}, state, {
      emps: action.emps
      })
    }
    default:
      return state;
  }
}
