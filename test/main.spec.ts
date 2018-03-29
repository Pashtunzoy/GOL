import * as test from 'tape';
import ConwaysGOL from '../src/main';

test('Should return a typeof of function', (t) => {
    t.equals(typeof ConwaysGOL, 'function');
    t.end();
});

test('There exist a method called restart that returns undefined', (t) => {
    const newGame = new ConwaysGOL();
    t.equals(newGame.restart(), undefined);
    t.end();
});

test('There exist a method called start that returns undefined', (t) => {
    const newGame = new ConwaysGOL();
    t.equals(newGame.start(), undefined);
    t.end();
});