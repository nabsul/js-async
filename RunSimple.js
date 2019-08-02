const slowFunc = require('./SlowFunc')

for (var i = 0; i < 100; i++) {
  slowFunc(i)
}
