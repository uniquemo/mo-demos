#!/usr/bin/env node
// var name = process.argv[2];
// var exec = require('child_process').exec;

// var child = exec('echo hello ' + name, function(err, stdout, stderr) {
//   if (err) throw err;
//   console.log(stdout);
// });


// var name = process.argv[2];
// var shell = require("shelljs");

// shell.exec("echo hello " + name);



/**
 * 上面代码是 shelljs 的本地模式，即通过 exec 方法执行 shell 命令。此外还有全局模式，允许直接在脚本中写 shell 命令。
 */
// require('shelljs/global');

// if (!which('git')) {
//   echo('Sorry, this script requires git');
//   exit(1);
// }

// mkdir('-p', 'out/Release');
// cp('-R', 'stuff/*', 'out/Release');

// cd('lib');
// ls('*.js').forEach(function(file) {
//   sed('-i', 'v0.1.2', 'v0.1.2', file);
//   sed('-i', /.*REMOVE_THIS_LINE.*\n/, '', file);
//   sed('-i', /.*REPLACE_LINE_WITH_MACRO.*\n/, cat('macro.js'), file);
// });
// cd('..');

// if (exec('git commit -am "Auto-commit"').code !== 0) {
//   echo('Error: Git commit failed');
//   exit(1);
// }

// var argv = require('yargs').argv;   // cli-deom --name=hhhh 或者 cli-demo --name hhhh
// console.log('hello ', argv.name);

// var argv = require('yargs')
//   .alias('n', 'name')
//   .argv;

// console.log('hello ', argv.n);



// var argv = require('yargs')
//   .demand(['n'])
//   .default({n: 'tom'})
//   .describe({n: 'your name'})
//   .argv;

// console.log('hello ', argv.n);


// var argv = require('yargs')
//   .option('n', {
//     alias : 'name',
//     demand: true,
//     default: 'tom',
//     describe: 'your name',
//     type: 'string'
//   })
//   .argv;

// console.log('hello ', argv.n);


// var argv = require('yargs')
//   .boolean(['n'])
//   .argv;

// console.log('hello ', argv.n);



// var argv = require('yargs')
//   .option('f', {
//     alias : 'name',
//     demand: true,
//     default: 'tom',
//     describe: 'your name',
//     type: 'string'
//   })
//   .usage('Usage: hello [options]')
//   .example('hello -n tom', 'say hello to Tom')
//   .help('h')
//   .alias('h', 'help')
//   .epilog('copyright 2015')
//   .argv;

// console.log('hello ', argv.n);


// var argv = require('yargs')
//   .command("morning", "good morning", function (yargs) {
//     console.log("Good Morning");
//   })
//   .command("evening", "good evening", function (yargs) {
//     console.log("Good Evening");
//   })
//   .argv;

// console.log('hello ', argv.n);



// require('shelljs/global');
// var argv = require('yargs')
//   .command("morning", "good morning", function (yargs) {  
//     echo("Good Morning");
//     var argv = yargs.reset()
//       .option("m", {
//         alias: "message",
//         description: "provide any sentence"
//       })
//       .help("h")
//       .alias("h", "help")
//       .argv;

//     echo(argv.m);
//   })
//   .argv;




var argv = require('yargs')
    .count('verbose')
    .alias('v', 'verbose')
    .argv;

VERBOSE_LEVEL = argv.verbose;

function WARN()  { VERBOSE_LEVEL >= 0 && console.log.apply(console, arguments); }
function INFO()  { VERBOSE_LEVEL >= 1 && console.log.apply(console, arguments); }
function DEBUG() { VERBOSE_LEVEL >= 2 && console.log.apply(console, arguments); }

WARN("Showing only important stuff");
INFO("Showing semi-important stuff too");
DEBUG("Extra chatty mode");
