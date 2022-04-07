module.exports = {
  name: "inv ateez",
  $if: "v4",
  code:`

$author[1;Inventory — ATEEZ;https://cdn.discordapp.com/attachments/953097417295790121/957395333686624286/JJU_inventory.png]

$title[1;\`$getGlobalUserVar[ATHJ_2_FE_RARITY]\` $getGlobalUserVar[ATHJ_2_FE_THEME]]

$description[1;To avoid flooding issues, cards you don't own won't appear in your inventory.]

$if[$getGlobalUserVar[ATHJ_2_FE]>=1]
$addField[1;<:JJU_ateez:961745655548743690> $getGlobalUserVar[ATHJ_2_FE_IDOL];Copies: \`$getGlobalUserVar[ATHJ_2_FE]\`
Code: \`ATHJ_2_FE\`;yes]
$endif
$if[$getGlobalUserVar[ATYS_2_FE]>=1]
$addField[1;<:JJU_ateez:961745655548743690> $getGlobalUserVar[ATYS_2_FE_IDOL];Copies: \`$getGlobalUserVar[ATYS_2_FE]\`
Code: \`ATYS_2_FE\`;yes]
$endif
$if[$getGlobalUserVar[ATSH_2_FE]>=1]
$addField[1;<:JJU_ateez:961745655548743690> $getGlobalUserVar[ATSH_2_FE_IDOL];Copies: \`$getGlobalUserVar[ATSH_2_FE]\`
Code: \`ATSH_2_FE\`;yes]
$endif
$if[$getGlobalUserVar[ATMG_2_FE]>=1]
$addField[1;<:JJU_ateez:961745655548743690> $getGlobalUserVar[ATMG_2_FE_IDOL];Copies: \`$getGlobalUserVar[ATMG_2_FE]\`
Code: \`ATMG_2_FE\`;yes]
$endif
$if[$getGlobalUserVar[ATSN_2_FE]>=1]
$addField[1;<:JJU_ateez:961745655548743690> $getGlobalUserVar[ATSN_2_FE_IDOL];Copies: \`$getGlobalUserVar[ATSN_2_FE]\`
Code: \`ATSN_2_FE\`;yes]
$endif
$if[$getGlobalUserVar[ATJH_2_FE]>=1]
$addField[1;<:JJU_ateez:961745655548743690> $getGlobalUserVar[ATJH_2_FE_IDOL];Copies: \`$getGlobalUserVar[ATJH_2_FE]\`
Code: \`ATJH_2_FE\`;yes]
$endif
$if[$getGlobalUserVar[ATWY_2_FE]>=1]
$addField[1;<:JJU_ateez:961745655548743690> $getGlobalUserVar[ATWY_2_FE_IDOL];Copies: \`$getGlobalUserVar[ATWY_2_FE]\`
Code: \`ATWY_2_FE\`;yes]
$endif
$if[$getGlobalUserVar[ATYH_2_FE]>=1]
$addField[1;<:JJU_ateez:961745655548743690> $getGlobalUserVar[ATYH_2_FE_IDOL];Copies: \`$getGlobalUserVar[ATYH_2_FE]\`
Code: \`ATYH_2_FE\`;yes]
$endif

$color[1;3af4cb]
$thumbnail[1;$userAvatar[$mentioned[1]]]
$footer[1;$userTag • Page 1/1;https://cdn.discordapp.com/attachments/953097417295790121/957032974073860096/JJU_clock.png]
$addTimestamp[1]`
}
