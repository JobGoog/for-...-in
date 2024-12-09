import orderByProps from '../orderByProps';

test('Сортировка свойств объекта по заданному порядку и алфавиту', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  const order = ['name', 'level'];
  const result = orderByProps(obj, order);

  expect(result).toEqual([
    { key: 'name', value: 'мечник' }, // из order
    { key: 'level', value: 2 },      // из order
    { key: 'attack', value: 80 },    // по алфавиту
    { key: 'defence', value: 40 },   // по алфавиту
    { key: 'health', value: 10 },    // по алфавиту
  ]);
});

test('Сортировка с пустым массивом order', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  const result = orderByProps(obj, []);

  expect(result).toEqual([
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ]);
});

test('Сортировка с order, который полностью перекрывает свойства объекта', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
  };

  const order = ['level', 'health', 'name'];
  const result = orderByProps(obj, order);

  expect(result).toEqual([
    { key: 'level', value: 2 },
    { key: 'health', value: 10 },
    { key: 'name', value: 'мечник' },
  ]);
});

test('Сортировка с отсутствующими свойствами из order', () => {
  const obj = {
    name: 'мечник',
    attack: 80,
    defence: 40,
  };

  const order = ['level', 'name']; // 'level' отсутствует в obj
  const result = orderByProps(obj, order);

  expect(result).toEqual([
    { key: 'name', value: 'мечник' }, // из order
    { key: 'attack', value: 80 },    // по алфавиту
    { key: 'defence', value: 40 },   // по алфавиту
  ]);
});
