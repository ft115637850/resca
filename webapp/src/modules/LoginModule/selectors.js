import { NAME } from './constants';

const getStateSlice = state => state[NAME];
const getPingResult = state => getStateSlice(state).entities.pong;

export default { getPingResult };
