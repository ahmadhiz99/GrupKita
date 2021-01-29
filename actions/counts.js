import { COUNTER_CHANGE } from '../constants';
export function changeCount(test) {
  return {
    type: COUNTER_CHANGE,
    payload: test
  }
}