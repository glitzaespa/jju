module.exports = {
  name: "inv aespa - forever",
  aliases:["inv ae - fo","inv ae - fr","inv aespa - fr"],
  $if: "v4",
  code:`

$author[1;Inventory — æspa;https://cdn.discordapp.com/attachments/953097417295790121/957395333686624286/JJU_inventory.png]

$title[1;\`$getGlobalUserVar[AEKR_1_FR_RARITY]\` $getGlobalUserVar[AEKR_1_FR_THEME]]

$addField[1;<:JJU_aespa:962084630742327397> $getGlobalUserVar[AEKR_1_FR_IDOL];Copies: \`$getGlobalUserVar[AEKR_1_FR]\`
Code: \`AEKR_1_FR\`;yes]
$addField[1;<:JJU_aespa:962084630742327397> $getGlobalUserVar[AEWT_1_FR_IDOL];Copies: \`$getGlobalUserVar[AEWT_1_FR]\`
Code: \`AEWT_1_FR\`;yes]
$addField[1;<:JJU_aespa:962084630742327397> $getGlobalUserVar[AEGS_1_FR_IDOL];Copies: \`$getGlobalUserVar[AEGS_1_FR]\`
Code: \`AEGS_1_FR\`;yes]
$addField[1;<:JJU_aespa:962084630742327397> $getGlobalUserVar[AENN_1_FR_IDOL];Copies: \`$getGlobalUserVar[AENN_1_FR]\`
Code: \`AENN_1_FR\`;yes]

$color[1;3af4cb]
$thumbnail[1;$userAvatar[$mentioned[1]]]
$footer[1;$userTag • Page 1/1;https://cdn.discordapp.com/attachments/953097417295790121/957032974073860096/JJU_clock.png]
$addTimestamp[1]`
}
