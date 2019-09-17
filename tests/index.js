'use strict';

const {
  PerformanceObserver,
  performance,
} = require('perf_hooks');

const { toOrdinalSuffix } = require('../');

const { uniqRand } = require('../utils/uniqRand');

const uRs = Array(100);
uRs.map(uniqRand(20));

const obs = new PerformanceObserver((items) => {
  console.log(items.getEntries()[0].duration);
  performance.clearMarks();
});
obs.observe({ entryTypes: ['measure'] });

const doSomeLongRunningProcess = (...args) => {
  performance.mark('A');
  toOrdinalSuffix(...args);
  performance.mark('B');
  performance.measure('A to B', 'A', 'B');
};

let destroTest = [];
for (let i = 2; i < destroTest.length; i += 1) {
  destroTest = [...destroTest.map((num) => num * 2)];
  doSomeLongRunningProcess(...destroTest);
}
