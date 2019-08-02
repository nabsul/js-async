const slowFunc = require('./SlowFunc')

const asyncWrapper = async(idx) => {
  slowFunc(idx)
}

const idx = [];
for (var i = 0; i < 20; i++) {
  idx.push(i)
}
const tasks = idx.map(i => asyncWrapper(i))

Promise.all(tasks)
