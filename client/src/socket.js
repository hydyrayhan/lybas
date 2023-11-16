import { io } from 'socket.io-client';
import ip from './common/Config'

// "undefined" means the URL will be computed from the `window.location` object
const URL = ip || 'http://localhost:4000';

export const socket = io(URL,{
  autoConnect: false
});