module.exports ={
  name: "help",
  code:` $author[1;Help;https://cdn.discordapp.com/attachments/953097417295790121/957042575850745916/JJU_help.png]

$addField[1;\`🎴\` Cards;\`\`\`drop, summon\`\`\`]
$addField[1;\`💰\` Currency;\`\`\`hack, summon, balance, \`\`\`]
$addField[1;\`🖥️\` Server Info;Name: \`$guild[$guildID;name]\`
Prefix: \`$getServerVar[PREFIX]\`]

$color[1;3af4cb]
$thumbnail[1;$authorAvatar]
$footer[1;$userTag;https://cdn.discordapp.com/attachments/953097417295790121/957032974073860096/JJU_clock.png]
$addTimestamp[1]

$addButton[1;JJU Carrd;link;https://jjubot.carrd.co/;no]
$addButton[1;Support Server;link;https://discord.gg/BDbQ5VFB3z;no]

$reply[$messageID;yes]`
}