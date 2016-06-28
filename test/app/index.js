const chai = require('chai');
const spies = require('chai-spies');
const expect = chai.expect;
const should = chai.should(); // eslint-disable-line no-unused-vars
chai.use(spies);
const test = require('ava');
const TestUtils = require('fountain-generator').TestUtils;

let context;

test.before(() => {
  context = TestUtils.mock('app');
  require('../../generators/app/index');
  process.chdir('../../');
});

test(`Call this.log when 'skip-welcome-message' is undefined`, () => {
  context.log = () => {};
  const spy = chai.spy.on(context, 'log');
  TestUtils.call(context, 'initializing');
  expect(spy).to.have.been.called.twice();
});

test(`Not call this.log when 'skip-welcome-message' is true`, () => {
  context.log = () => {};
  const spy = chai.spy.on(context, 'log');
  TestUtils.call(context, 'initializing', {'skip-welcome-message': true});
  spy.should.have.not.been.called();
});

test('Call this.fountainPrompting', () => {
  context.fountainPrompting = () => {};
  const spy = chai.spy.on(context, 'fountainPrompting');
  TestUtils.call(context, 'prompting');
  expect(spy).to.have.been.called.once();
});

test('composing(): Call this.composeWith', () => {
  context.composeWith = () => {};
  const spy = chai.spy.on(context, 'composeWith');
  TestUtils.call(context, 'composing', {framework: 'react'});
  expect(spy).to.have.been.called.with('fountain-react');
});
