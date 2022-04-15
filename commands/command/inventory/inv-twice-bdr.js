module.exports = {
  name: "inv twice - bdz repackage",
    aliases:["inv tw - bdr","inv tw - bdzr","inv twice - bdr"],
  $if: "v4",
  code:`

$author[1;Inventory — TWICE;https://cdn.discordapp.com/attachments/953097417295790121/957395333686624286/JJU_inventory.png]

$title[1;\`$getGlobalUserVar[TWTY_1_BDR_RARITY]\` $getGlobalUserVar[TWTY_1_BDR_THEME]]

$description[1;To avoid flooding issues, cards you don't own won't appear in your inventory.]

$if[$getGlobalUserVar[TWTY_1_BDR]>=1]
$addField[1;<:JJU_twice:962401139133923388> $getGlobalUserVar[TWTY_1_BDR_IDOL];Copies: \`$getGlobalUserVar[TWTY_1_BDR]\`
Code: \`TWTY_1_BDR\`;yes]
$endif
$if[$getGlobalUserVar[TWCY_1_BDR]>=1]
$addField[1;<:JJU_twice:962401139133923388> $getGlobalUserVar[TWCY_1_BDR_IDOL];Copies: \`$getGlobalUserVar[TWCY_1_BDR]\`
Code: \`TWCY_1_BDR\`;yes]
$endif
$if[$getGlobalUserVar[TWDH_1_BDR]>=1]
$addField[1;<:JJU_twice:962401139133923388> $getGlobalUserVar[TWDH_1_BDR_IDOL];Copies: \`$getGlobalUserVar[TWDH_1_BDR]\`
Code: \`TWDH_1_BDR\`;yes]
$endif
$if[$getGlobalUserVar[TWMN_1_BDR]>=1]
$addField[1;<:JJU_twice:962401139133923388> $getGlobalUserVar[TWMN_1_BDR_IDOL];Copies: \`$getGlobalUserVar[TWMN_1_BDR]\`
Code: \`TWMN_1_BDR\`;yes]
$endif
$if[$getGlobalUserVar[TWJH_1_BDR]>=1]
$addField[1;<:JJU_twice:962401139133923388> $getGlobalUserVar[TWJH_1_BDR_IDOL];Copies: \`$getGlobalUserVar[TWJH_1_BDR]\`
Code: \`TWJH_1_BDR\`;yes]
$endif
$if[$getGlobalUserVar[TWSN_1_BDR]>=1]
$addField[1;<:JJU_twice:962401139133923388> $getGlobalUserVar[TWSN_1_BDR_IDOL];Copies: \`$getGlobalUserVar[TWSN_1_BDR]\`
Code: \`TWSN_1_BDR\`;yes]
$endif
$if[$getGlobalUserVar[TWMM_1_BDR]>=1]
$addField[1;<:JJU_twice:962401139133923388> $getGlobalUserVar[TWMM_1_BDR_IDOL];Copies: \`$getGlobalUserVar[TWMM_1_BDR]\`
Code: \`TWMM_1_BDR\`;yes]
$endif
$if[$getGlobalUserVar[TWJY_1_BDR]>=1]
$addField[1;<:JJU_twice:962401139133923388> $getGlobalUserVar[TWJY_1_BDR_IDOL];Copies: \`$getGlobalUserVar[TWJY_1_BDR]\`
Code: \`TWJY_1_BDR\`;yes]
$endif
$if[$getGlobalUserVar[TWNY_1_BDR]>=1]
$addField[1;<:JJU_twice:962401139133923388> $getGlobalUserVar[TWNY_1_BDR_IDOL];Copies: \`$getGlobalUserVar[TWNY_1_BDR]\`
Code: \`TWNY_1_BDR\`;yes]
$endif

$color[1;3af4cb]
$thumbnail[1;$userAvatar[$mentioned[1]]]
$footer[1;$userTag • Page 1/1;https://cdn.discordapp.com/attachments/953097417295790121/957032974073860096/JJU_clock.png]
$addTimestamp[1]`
}
