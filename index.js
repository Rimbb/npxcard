#!/usr/bin/env node


const chalk = require("chalk");
const boxen = require("boxen");
const prompts = require("prompts");
const player = require('play-sound')(opts = {})

// Text + chalk definitions
const data = {
    name: chalk.white("             Rimbaud Gregoire"),
    handle: chalk.white("@rimbb"),
    work: chalk.white("Web Developer Padawan"),
    npm: chalk.gray("https://npmjs.com/") + chalk.cyan("~rimb"),
    github: chalk.gray("https://github.com/") + chalk.cyan("rimbb"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.cyan("rimbaud-gregoire-825984186"),
    web: chalk.gray("jeannezpaAngkor/") + chalk.cyan("wat"),
    npx: chalk.green("npx") + " " + chalk.white("rimbb"),
    labelWork: chalk.white.bold("       Work:"),
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelNpm: chalk.white.bold("        npm:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelWeb: chalk.white.bold("        Web:"),
    labelCard: chalk.white.bold("       Card:"),
};

console.log(
    chalk.cyan(
        boxen(
            [
                `${data.name} / ${data.handle}`,
                "",
                `${data.labelWork} ${data.work}`,
                "",
                `${data.labelNpm} ${data.npm}`,
                `${data.labelGitHub} ${data.github}`,
                `${data.labelLinkedIn} ${data.linkedin}`,
                `${data.labelWeb} ${data.web}`,
                "",
                `${data.labelCard} ${data.npx}`,
            ].join("\n"),
            {
                padding: 2,
                margin: 2,
                float: "center",
                borderStyle: "singleDouble",
            },
        ),
    ),
);

const questions = [
    {
      type: 'text',
      name: 'magic',
      message: 'Wanna see some magic ? YES - NO'
    }
  ];
   
  (async function iAsk() {
    const response = await prompts(questions);

    var userAnswer = response.magic;

    if (userAnswer === "yes" || userAnswer === "y" || userAnswer === "YES"  || userAnswer === "Y") {


        setTimeout(()=>console.log(chalk.bgGreen('\nMalware successfully implemented\n')), 500);

            function test(i){

                console.log(chalk.green(i));

                if(i > 1){
                    setTimeout(()=>{test(i-1)}, i*50);
                }else{
                    player.play('prout.mp3', function(err){
                        if (err) throw err
                      })
                    console.log(chalk.green("\n*prout*"));
                }
            }
            setTimeout(()=>test(10), 1500);

    }

    else if (userAnswer === "no" || userAnswer === "n" || userAnswer === "NO"  || userAnswer === "N") {

        console.log(chalk.bgCyan("You don't know what you're missing dumb-ass"));

    }

    else {

        console.log(chalk.bgCyan("This isn't approriate."));
        iAsk();

    }

  })();


