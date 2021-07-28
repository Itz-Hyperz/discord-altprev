# discord-altprev
A simple alt prevention module for DiscordJS V12.

---

## Support

* [Discord](https://hyperz.dev/discord)

* [Website](https://support.hyperz.dev/)

---

## Installation

`npm i discord-altprev@latest`

---

## Constructor

Base customization for the module.

| Entry        | Type | Definition | 
|----------------|---------------|---------------|
| #1   | STRING  | The time limit for an alt to be removed
| #2   | STRING  | kick or ban. DEFAULT: kick
| #3   | BOOLEAN  | Debug Mode Toggle

---

## Code Example

```js
const Discord = require('discord.js')
const client = new Discord.Client()
const altprev = require('discord-altprev')
const police = new altprev('30d', 'kick', true) // If the account is 30 days or under, they will be kicked

client.on("ready", () => {
    console.log(`I AM READY!!!!`)
});

client.on('guildMemberAdd', async guildMember => {
    await police.checkAlt(guildMember);
});

client.login('YOUR_BOT_TOKEN')
```
