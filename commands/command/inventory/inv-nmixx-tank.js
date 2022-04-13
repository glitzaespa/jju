module.exports = {
  name: "inv nmixx - tank",
  aliases:["inv nm - ta","nm - tn","nmixx - ta"],
  $if: "v4",
  code:`

$author[1;Inventory — NMIXX;https://cdn.discordapp.com/attachments/953097417295790121/957395333686624286/JJU_inventory.png]

$title[1;\`$getGlobalUserVar[NMLL_3_TA_RARITY]\` $getGlobalUserVar[NMLL_3_TA_THEME]]

$description[1;To avoid flooding issues, cards you don't own won't appear in your inventory.]

$if[$getGlobalUserVar[NMLL_3_TA]>=1]
$addField[1;<:JJU_nmixx:957370681560018994> $getGlobalUserVar[NMLL_3_TA_IDOL];Copies: \`$getGlobalUserVar[NMLL_3_TA]\`
Code: \`NMLL_3_TA\`;yes]
$endif
$if[$getGlobalUserVar[NMBA_3_TA]>=1]
$addField[1;<:JJU_nmixx:957370681560018994> $getGlobalUserVar[NMBA_3_TA_IDOL];Copies: \`$getGlobalUserVar[NMBA_3_TA]\`
Code: \`NMBA_3_TA\`;yes]
$endif
$if[$getGlobalUserVar[NMHW_3_TA]>=1]
$addField[1;<:JJU_nmixx:957370681560018994> $getGlobalUserVar[NMHW_3_TA_IDOL];Copies: \`$getGlobalUserVar[NMHW_3_TA]\`
Code: \`NMHW_3_TA\`;yes]
$endif
$if[$getGlobalUserVar[NMJN_3_TA]>=1]
$addField[1;<:JJU_nmixx:957370681560018994> $getGlobalUserVar[NMJN_3_TA_IDOL];Copies: \`$getGlobalUserVar[NMJN_3_TA]\`
Code: \`NMJN_3_TA\`;yes]
$endif
$if[$getGlobalUserVar[NMJW_3_TA]>=1]
$addField[1;<:JJU_nmixx:957370681560018994> $getGlobalUserVar[NMJW_3_TA_IDOL];Copies: \`$getGlobalUserVar[NMJW_3_TA]\`
Code: \`NMJW_3_TA\`;yes]
$endif
$if[$getGlobalUserVar[NMKJ_3_TA]>=1]
$addField[1;<:JJU_nmixx:957370681560018994> $getGlobalUserVar[NMKJ_3_TA_IDOL];Copies: \`$getGlobalUserVar[NMKJ_3_TA]\`
Code: \`NMKJ_3_TA\`;yes]
$endif
$if[$getGlobalUserVar[NMSY_3_TA]>=1]
$addField[1;<:JJU_nmixx:957370681560018994> $getGlobalUserVar[NMSY_3_TA_IDOL];Copies: \`$getGlobalUserVar[NMSY_3_TA]\`
Code: \`NMSY_3_TA\`;yes]
$endif

$color[1;3af4cb]
$thumbnail[1;$userAvatar[$mentioned[1]]]
$footer[1;$userTag • Page 1/1;https://cdn.discordapp.com/attachments/953097417295790121/957032974073860096/JJU_clock.png]
$addTimestamp[1]`
}
