module.exports ={
  name: "hack",
  code:`

$awaitMessages[$channelID;$authorID;1m;everything;hackreply;<@$authorID>, you took too long! Command is now invalid.]

$addField[1;Code;\`\`\`$getGlobalUserVar[HACK_CODE]\`\`\`]
$author[1;Hack Mission — Intro;https://cdn.discordapp.com/attachments/949848002628038727/956639744912130138/JUYEON_SHADOW.png]
$description[1;Input the following code to hack \`$randomText[SM Entertainment's database;JYP Entertainment's database;HYBE's database;YG Entertaiment's database;Glitzy's laptop;Doie's laptop]\` and get a chestnut reward!]
$title[1;We need your help!]

$wait[1s]

$setGlobalUserVar[HACK_CODE;$randomString[10]]

$color[1;06ff00]

$reply[$messageID;yes]

$globalCooldown[5m;<@$authorID>, you're on cooldown! Please try again in \`%time%\`.]`
}