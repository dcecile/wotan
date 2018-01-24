const {AbstractProcessor} = require('../../../src/types');

exports.Processor = class Processor extends AbstractProcessor {
    preprocess() {
        return this.source;
    }

    updateSource(source, changeRange) {
        return {
            transformed: source,
            changeRange: changeRange,
        };
    }

    postprocess(failures) {
        return failures.concat({ruleName: 'unicorn', message: 'rainbow', severity: 'warning', fix: undefined, start: {position: 0, line: 0, character: 0}, end: {position: 0, line: 0, character: 0}});
    }
}
