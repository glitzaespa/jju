module.exports ={
  name: "balance",
  aliases:["b","bal","money"],
  code:`$addField[1;<:JJU_chestnut:962386674174803968> Chestnuts;\`\`\`$getGlobalUserVar[CHESTNUT;$mentioned[1]]\`\`\`]
$addField[1;<:JJU_diamond:962386919969390684> Gems;\`\`\`$getGlobalUserVar[GEMS;$mentioned[1]]\`\`\`]
$wait[1s]
$title[1;$username[$mentioned[1]]'s balance]

$color[1;3af4cb]
$thumbnail[1;$userAvatar[$mentioned[1]]]
$footer[1;$userTag;https://cdn.discordapp.com/attachments/953097417295790121/957032974073860096/JJU_clock.png]
$addTimestamp[1]

$reply[$messageID;yes]`
}
