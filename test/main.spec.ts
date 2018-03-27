import * as test from 'tape';
import ConwaysGOL from '../src/main';

test('Should return a typeof of function', (t) => {
    t.equals(typeof ConwaysGOL, 'function');
    t.end();
});