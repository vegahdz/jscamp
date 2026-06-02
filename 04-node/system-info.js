import os from 'node:os';
import ms from 'ms';


console.log('Tiempo de actividad del sistema:', ms(os.uptime() * 1000, {long: true}));