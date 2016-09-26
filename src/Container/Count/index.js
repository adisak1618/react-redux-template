import { connect } from 'react-redux';
import View from './View'
import { Increse, decrese } from './action'

const CounterView = connect(state => state,
  dispatch => {return {
      plus: () => {
        dispatch(Increse(2));
      },
      minus: () => {
        dispatch(decrese(2));
      }
    }
  })(View)

export default CounterView
