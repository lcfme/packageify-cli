#! /usr/bin/env node

var path = require('path');
var shell = require('shelljs');
var cwd = process.cwd();
if (!process.argv[2] || /[^\w]/.test(process.argv[2]))
    throw new Error(
        'Please use packageify2-cli myProject to set project name or project name can only contain char which /\\w/.test(char) is true'
    );
var project = resolve(process.argv[2]);

if (shell.mkdir(project).code)
    throw new Error(`${project} is exist. Please use another name`);

shell.cp('-rf', path.resolve(__dirname, 'packageify/.*'), project);
shell.cp('-rf', path.resolve(__dirname, 'packageify/*'), project);

function resolve(...args) {
    return path.resolve(cwd, ...args);
}
