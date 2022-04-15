module.exports = {
  name: "inv banner twice",
  $if: "v4",
  code:`

$author[1;Banner Inventory — TWICE;https://cdn.discordapp.com/attachments/953097417295790121/957395333686624286/JJU_inventory.png]

$addField[1;<:JJU_twice:962401139133923388> $getGlobalUserVar[TW_BDR];Status: \`$getGlobalUserVar[TW_BDR_STATUS]\`
Code: \`TW_BDR\`;yes]
$addField[1;<:JJU_twice:962401139133923388> $getGlobalUserVar[TW_WI];Status: \`$getGlobalUserVar[TW_WI_STATUS]\`
Code: \`TW_WI\`;yes]

$color[1;3af4cb]
$thumbnail[1;$userAvatar[$mentioned[1]]]
$footer[1;$userTag • Page 1/1;https://cdn.discordapp.com/attachments/953097417295790121/957032974073860096/JJU_clock.png]
$addTimestamp[1]`
}
