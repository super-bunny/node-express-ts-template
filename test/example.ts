import anyTest, { TestInterface } from 'ava'

interface Context {}

const test = anyTest as TestInterface<Context>

test('Example test', (t) => {
  t.pass()
})
