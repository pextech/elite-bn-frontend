import React from 'react';
import { connect } from 'react-redux';
import {
  add, decrement, deleteResult, increment, storeResult, subtract,
} from '../../store/actions/index';

import CounterControl from '../../components/Counter/CounterControl';
import CounterOutput from '../../components/Counter/CounterOutput';

function Counter(props) {
  const {
    ctrl, onIncrementCounter, onDecrementCounter,
    onAddCounter, onSubtractCounter, onStoreResult,
    storedResults, onDeleteResult,
  } = props;
  return (
    <div>
      <CounterOutput value={ctrl} />
      <CounterControl label="Increment" clicked={onIncrementCounter} />
      <CounterControl label="Decrement" clicked={onDecrementCounter} />
      <CounterControl label="Add 5" clicked={onAddCounter} />
      <CounterControl label="Subtract 5" clicked={onSubtractCounter} />
      <hr />
      <button
        type="button"
        className="px-8 py-6 hover:text-red-500 border-l-4 border-red-700"
        onClick={() => onStoreResult(ctrl)}
      >
        Store Result
      </button>
      <ul>
        {storedResults.map((strResult) => (
          <li
            className="text-center cursor-pointer my-2"
            key={strResult.id}
            onClick={() => onDeleteResult(strResult.id)}
          >
            {strResult.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
  ctrl: state.ctr.counter,
  storedResults: state.res.results,
});

const mapDispatchToProps = (dispatch) => ({
  onIncrementCounter: () => dispatch(increment()),
  onDecrementCounter: () => dispatch(decrement()),
  onAddCounter: () => dispatch(add(5)),
  onSubtractCounter: () => dispatch(subtract(5)),
  onStoreResult: (result) => dispatch(storeResult(result)),
  onDeleteResult: (id) => dispatch(deleteResult(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
