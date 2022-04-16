module.exports = {
  name: "inv soyou - gotta go",
  aliases:["inv sy - gg","inv sy - go","inv soyou - gg"],
  $if: "v4",
  code:`

$author[1;Inventory — SOYOU;https://cdn.discordapp.com/attachments/953097417295790121/957395333686624286/JJU_inventory.png]

$title[1;\`$getGlobalUserVar[SOSY_1_GG_RARITY]\` $getGlobalUserVar[SOSY_1_GG_THEME]]

$addField[1;<:JJU_soyou:963558895870177360> $getGlobalUserVar[SOSY_1_GG_IDOL];Copies: \`$getGlobalUserVar[SOSY_1_GG]\`
Code: \`SOSY_1_GG\`;yes]

$color[1;3af4cb]
$thumbnail[1;$userAvatar[$mentioned[1]]]
$footer[1;$userTag • Page 1/1;https://cdn.discordapp.com/attachments/953097417295790121/957032974073860096/JJU_clock.png]
$addTimestamp[1]`
}
