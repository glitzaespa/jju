module.exports = {
  name: "inv enhypen - dimension answer",
  $if: "v4",
  code:`

$author[1;Inventory — ENHYPEN;https://cdn.discordapp.com/attachments/953097417295790121/957395333686624286/JJU_inventory.png]

$title[1;\`$getGlobalUserVar[ENHS_2_DA_RARITY]\` $getGlobalUserVar[ENHS_2_DA_THEME]]

$description[1;To avoid flooding issues, cards you don't own won't appear in your inventory.]

$if[$getGlobalUserVar[ENHS_2_DA]>=1]
$addField[1;<:JJU_enhypen:957393538260271154> $getGlobalUserVar[ENHS_2_DA_IDOL];Copies: \`$getGlobalUserVar[ENHS_2_DA]\`
Code: \`ENHS_2_DA\`;yes]
$endif
$if[$getGlobalUserVar[ENJY_2_DA]>=1]
$addField[1;<:JJU_enhypen:957393538260271154> $getGlobalUserVar[ENJY_2_DA_IDOL];Copies: \`$getGlobalUserVar[ENJY_2_DA]\`
Code: \`ENJY_2_DA\`;yes]
$endif
$if[$getGlobalUserVar[ENJK_2_DA]>=1]
$addField[1;<:JJU_enhypen:957393538260271154> $getGlobalUserVar[ENJK_2_DA_IDOL];Copies: \`$getGlobalUserVar[ENJK_2_DA]\`
Code: \`ENJK_2_DA\`;yes]
$endif
$if[$getGlobalUserVar[ENSH_2_DA]>=1]
$addField[1;<:JJU_enhypen:957393538260271154> $getGlobalUserVar[ENSH_2_DA_IDOL];Copies: \`$getGlobalUserVar[ENSH_2_DA]\`
Code: \`ENSH_2_DA\`;yes]
$endif
$if[$getGlobalUserVar[ENSN_2_DA]>=1]
$addField[1;<:JJU_enhypen:957393538260271154> $getGlobalUserVar[ENSN_2_DA_IDOL];Copies: \`$getGlobalUserVar[ENSN_2_DA]\`
Code: \`ENSN_2_DA\`;yes]
$endif
$if[$getGlobalUserVar[ENJW_2_DA]>=1]
$addField[1;<:JJU_enhypen:957393538260271154> $getGlobalUserVar[ENJW_2_DA_IDOL];Copies: \`$getGlobalUserVar[ENJW_2_DA]\`
Code: \`ENJW_2_DA\`;yes]
$endif
$if[$getGlobalUserVar[ENNK_2_DA]>=1]
$addField[1;<:JJU_enhypen:957393538260271154> $getGlobalUserVar[ENNK_2_DA_IDOL];Copies: \`$getGlobalUserVar[ENNK_2_DA]\`
Code: \`ENNK_2_DA\`;yes]
$endif

$color[1;3af4cb]
$thumbnail[1;$userAvatar[$mentioned[1]]]
$footer[1;$userTag • Page 1/1;https://cdn.discordapp.com/attachments/953097417295790121/957032974073860096/JJU_clock.png]
$addTimestamp[1]`
}
