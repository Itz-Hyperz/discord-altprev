// CREATED BY HYPERZ DEVELOPMENT ++ Hyperz#0001
// CREATED BY HYPERZ DEVELOPMENT ++ Hyperz#0001
// CREATED BY HYPERZ DEVELOPMENT ++ Hyperz#0001

// Le Importas
const ms = require('ms')
const chalk = require('chalk')

// De Classo
class naughty {
    
    // Works by default for DiscordJS V12
    constructor(timeLimit, action, debugMode) {
        this.timeLimit = timeLimit,
        this.action = action,
        this.debugMode = debugMode
    }

    // Check De Alt Accounto
    async checkAlt(guildMember) {

        // Set Le Ban De False
        let ban = false;
        if(this.action === 'ban') {
            // Set Le Ban De True
            ban = true;
        }

        // Wat Is De Timo?
        if(Date.now() - guildMember.user.createdAt < ms(this.timeLimit)) {
            if(ban) {
                // Ban Le Memboro
                await guildMember.guild.members.ban(guildMember.user.id, {
                    reason: `Alt Account`
                }).catch(e => {
                    console.log(chalk.red(`Something went wrong when trying to ban ${guildMember.user.tag} from ${guildMember.guild.name} `), e.stack)
                    return false; // A variable to return if a user was removed or not
                });
                if(this.debugMode) {
                    console.log(chalk.blue(`${guildMember.user.tag} has been banned from ${guildMember.guild.name}`))
                }
                return true; // A variable to return if a user was removed or not
            } else {
                // Kick Le Memboro
                await guildMember.guild.member(guildMember).kick().catch(e => {
                    console.log(chalk.red(`Something went wrong when trying to kick ${guildMember.user.tag} from ${guildMember.guild.name} `), e.stack)
                    return false; // A variable to return if a user was removed or not
                });
                if(this.debugMode) {
                    console.log(chalk.blue(`${guildMember.user.tag} has been kicked from ${guildMember.guild.name}`))
                }
                return true; // A variable to return if a user was removed or not
            }
        }

    }

}

// https://www.youtube.com/watch?v=BL6kIF2y2A0
module.exports = naughty;

// CREATED BY HYPERZ DEVELOPMENT ++ Hyperz#0001
// CREATED BY HYPERZ DEVELOPMENT ++ Hyperz#0001
// CREATED BY HYPERZ DEVELOPMENT ++ Hyperz#0001