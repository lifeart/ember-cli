'use strict';

const chai = require('chai');
const chaiFiles = require('chai-files');
const chaiAsPromised = require('chai-as-promised');
const chaiJestSnapshot = require('chai-jest-snapshot');

chai.use(chaiFiles);
chai.use(chaiAsPromised);
chai.use(chaiJestSnapshot);

// // eslint-disable-next-line mocha/no-top-level-hooks
// before(function () {
//   chaiJestSnapshot.resetSnapshotRegistry();
// });

// // eslint-disable-next-line mocha/no-top-level-hooks
// beforeEach(function () {
//   chaiJestSnapshot.configureUsingMochaContext(this);
// });

module.exports = chai;
module.exports.file = chaiFiles.file;
module.exports.dir = chaiFiles.dir;
