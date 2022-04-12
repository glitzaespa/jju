module.exports = {
  name: "inv blackpink - how you like that",
  aliases:["inv bp - hylt","bp - hy","blackpink - hylt"],
  $if: "v4",
  code:`

$author[1;Inventory — BLACKPINK;https://cdn.discordapp.com/attachments/953097417295790121/957395333686624286/JJU_inventory.png]

$title[1;\`$getGlobalUserVar[BPJS_2_HY_RARITY]\` $getGlobalUserVar[BPJS_2_HY_THEME]]

$description[1;To avoid flooding issues, cards you don't own won't appear in your inventory.]

$if[$getGlobalUserVar[BPLS_2_HY]>=1]
$addField[1;<:JJU_blackpink:957397108489597008> $getGlobalUserVar[BPLS_2_HY_IDOL];Copies: \`$getGlobalUserVar[BPLS_2_HY]\`
Code: \`BPLS_2_HY\`;yes]
$endif
$if[$getGlobalUserVar[BPRS_2_HY]>=1]
$addField[1;<:JJU_blackpink:957397108489597008> $getGlobalUserVar[BPRS_2_HY_IDOL];Copies: \`$getGlobalUserVar[BPRS_2_HY]\`
Code: \`BPRS_2_HY\`;yes]
$endif
$if[$getGlobalUserVar[BPJN_2_HY]>=1]
$addField[1;<:JJU_blackpink:957397108489597008> $getGlobalUserVar[BPJN_2_HY_IDOL];Copies: \`$getGlobalUserVar[BPJN_2_HY]\`
Code: \`BPJN_2_HY\`;yes]
$endif
$if[$getGlobalUserVar[BPJS_2_HY]>=1]
$addField[1;<:JJU_blackpink:957397108489597008> $getGlobalUserVar[BPJS_2_HY_IDOL];Copies: \`$getGlobalUserVar[BPJS_2_HY]\`
Code: \`BPJS_2_HY\`;yes]
$endif

$color[1;3af4cb]
$thumbnail[1;$userAvatar[$mentioned[1]]]
$footer[1;$userTag • Page 1/1;https://cdn.discordapp.com/attachments/953097417295790121/957032974073860096/JJU_clock.png]
$addTimestamp[1]`
}
