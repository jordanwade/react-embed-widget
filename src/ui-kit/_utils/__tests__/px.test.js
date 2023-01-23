import px from '../px';

test('it should turn a rem value into a px', () => {
  expect(px('1rem')).toEqual('11px');
  expect(px('1.5rem')).toEqual('16px');
});
