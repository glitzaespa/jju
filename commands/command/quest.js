module.exports ={
  name: "quest",
  code:`

$awaitMessages[$channelID;$authorID;1m;everything;questreply;<@$authorID>, you took too long! Command is now invalid.]

$author[1;Quest — Intro;https://cdn.discordapp.com/attachments/949848002628038727/956639744912130138/JUYEON_SHADOW.png]
$description[1;Guess the border's theme name and get a diamond reward!]
$title[1;Complete the following quest!]
$addField[1;Hint;\`\`\`$getGlobalUserVar[$getGlobalUserVar[QUEST_CODE]_HINT]\`\`\`]
$footer[1;Answer has to be without caps nor spaces or special characters!]
$image[1;$getGlobalUserVar[$getGlobalUserVar[QUEST_CODE]_IMAGE]]

$wait[1s]

$setGlobalUserVar[QUEST_CODE;$randomText[ENDA;TXCY;BPHY;RVR2;SOCYSM3;SOCYSM2;SOCYSM1;AEBM;SMOS;VVBO;IVLD]]

$color[1;06ff00]

$reply[$messageID;yes]

$globalCooldown[5m;<@$authorID>, you're on cooldown! Please try again in \`%time%\`.]
`
}
