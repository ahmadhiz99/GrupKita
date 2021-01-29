import { SHOW_TEXT } from '../constants';
export function showReducer() {
  return {
    type: SHOW_TEXT,
    payload: 'Hello worlds'
  }
}