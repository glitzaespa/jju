module.exports = {
  name: "inv sunmi - tail",
    aliases:["inv sm - ta","inv sm - ti","inv sunmi - ta"],
  $if: "v4",
  code:`

$author[1;Inventory — SUNMI;https://cdn.discordapp.com/attachments/953097417295790121/957395333686624286/JJU_inventory.png]

$title[1;\`$getGlobalUserVar[SOSM_1_TA_RARITY]\` $getGlobalUserVar[SOSM_1_TA_THEME]]

$addField[1;<:JJU_sunmi:963559554413641790> $getGlobalUserVar[SOSM_1_TA_IDOL];Copies: \`$getGlobalUserVar[SOSM_1_TA]\`
Code: \`SOSM_1_TA\`;yes]

$color[1;3af4cb]
$thumbnail[1;$userAvatar[$mentioned[1]]]
$footer[1;$userTag • Page 1/1;https://cdn.discordapp.com/attachments/953097417295790121/957032974073860096/JJU_clock.png]
$addTimestamp[1]`
}
