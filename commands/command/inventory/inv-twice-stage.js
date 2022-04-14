module.exports = {
  name: "inv twice - stage card",
    aliases:["inv tw - sc","tw - st","twice - sc"],
  $if: "v4",
  code:`

$author[1;Inventory — TWICE;https://cdn.discordapp.com/attachments/953097417295790121/957395333686624286/JJU_inventory.png]

$title[1;\`$getGlobalUserVar[TWTY_3_SC_RARITY]\` $getGlobalUserVar[TWTY_3_SC_THEME]]

$description[1;To avoid flooding issues, cards you don't own won't appear in your inventory.]

$if[$getGlobalUserVar[TWTY_3_SC]>=1]
$addField[1;<:JJU_twice:962401139133923388> $getGlobalUserVar[TWTY_3_SC_IDOL];Copies: \`$getGlobalUserVar[TWTY_3_SC]\`
Code: \`TWTY_3_SC\`;yes]
$endif
$if[$getGlobalUserVar[TWCY_3_SC]>=1]
$addField[1;<:JJU_twice:962401139133923388> $getGlobalUserVar[TWCY_3_SC_IDOL];Copies: \`$getGlobalUserVar[TWCY_3_SC]\`
Code: \`TWCY_3_SC\`;yes]
$endif
$if[$getGlobalUserVar[TWDH_3_SC]>=1]
$addField[1;<:JJU_twice:962401139133923388> $getGlobalUserVar[TWDH_3_SC_IDOL];Copies: \`$getGlobalUserVar[TWDH_3_SC]\`
Code: \`TWDH_3_SC\`;yes]
$endif
$if[$getGlobalUserVar[TWMN_3_SC]>=1]
$addField[1;<:JJU_twice:962401139133923388> $getGlobalUserVar[TWMN_3_SC_IDOL];Copies: \`$getGlobalUserVar[TWMN_3_SC]\`
Code: \`TWMN_3_SC\`;yes]
$endif
$if[$getGlobalUserVar[TWJH_3_SC]>=1]
$addField[1;<:JJU_twice:962401139133923388> $getGlobalUserVar[TWJH_3_SC_IDOL];Copies: \`$getGlobalUserVar[TWJH_3_SC]\`
Code: \`TWJH_3_SC\`;yes]
$endif
$if[$getGlobalUserVar[TWSN_3_SC]>=1]
$addField[1;<:JJU_twice:962401139133923388> $getGlobalUserVar[TWSN_3_SC_IDOL];Copies: \`$getGlobalUserVar[TWSN_3_SC]\`
Code: \`TWSN_3_SC\`;yes]
$endif
$if[$getGlobalUserVar[TWMM_3_SC]>=1]
$addField[1;<:JJU_twice:962401139133923388> $getGlobalUserVar[TWMM_3_SC_IDOL];Copies: \`$getGlobalUserVar[TWMM_3_SC]\`
Code: \`TWMM_3_SC\`;yes]
$endif
$if[$getGlobalUserVar[TWJY_3_SC]>=1]
$addField[1;<:JJU_twice:962401139133923388> $getGlobalUserVar[TWJY_3_SC_IDOL];Copies: \`$getGlobalUserVar[TWJY_3_SC]\`
Code: \`TWJY_3_SC\`;yes]
$endif
$if[$getGlobalUserVar[TWNY_3_SC]>=1]
$addField[1;<:JJU_twice:962401139133923388> $getGlobalUserVar[TWNY_3_SC_IDOL];Copies: \`$getGlobalUserVar[TWNY_3_SC]\`
Code: \`TWNY_3_SC\`;yes]
$endif

$color[1;3af4cb]
$thumbnail[1;$userAvatar[$mentioned[1]]]
$footer[1;$userTag • Page 1/1;https://cdn.discordapp.com/attachments/953097417295790121/957032974073860096/JJU_clock.png]
$addTimestamp[1]`
}
