module.exports = {
  name: "inv blackpink - stage card",
  aliases:["inv bp - sc","inv bp - stage","inv blackpink - sc"],
  $if: "v4",
  code:`

$author[1;Inventory — BLACKPINK;https://cdn.discordapp.com/attachments/953097417295790121/957395333686624286/JJU_inventory.png]

$title[1;\`$getGlobalUserVar[BPJS_3_SC_RARITY]\` $getGlobalUserVar[BPJS_3_SC_THEME]]

$addField[1;<:JJU_blackpink:957397108489597008> $getGlobalUserVar[BPLS_3_SC_IDOL];Copies: \`$getGlobalUserVar[BPLS_3_SC]\`
Code: \`BPLS_3_SC\`;yes]
$addField[1;<:JJU_blackpink:957397108489597008> $getGlobalUserVar[BPRS_3_SC_IDOL];Copies: \`$getGlobalUserVar[BPRS_3_SC]\`
Code: \`BPRS_3_SC\`;yes]
$addField[1;<:JJU_blackpink:957397108489597008> $getGlobalUserVar[BPJN_3_SC_IDOL];Copies: \`$getGlobalUserVar[BPJN_3_SC]\`
Code: \`BPJN_3_SC\`;yes]
$addField[1;<:JJU_blackpink:957397108489597008> $getGlobalUserVar[BPJS_3_SC_IDOL];Copies: \`$getGlobalUserVar[BPJS_3_SC]\`
Code: \`BPJS_3_SC\`;yes]

$color[1;3af4cb]
$thumbnail[1;$userAvatar[$mentioned[1]]]
$footer[1;$userTag • Page 1/1;https://cdn.discordapp.com/attachments/953097417295790121/957032974073860096/JJU_clock.png]
$addTimestamp[1]`
}
