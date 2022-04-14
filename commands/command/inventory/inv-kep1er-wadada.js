module.exports = {
  name: "inv kep1er - wa da da",
  aliases:["inv kp - wa","inv kp - wd","inv kep1er - wa"],
  $if: "v4",
  code:`

$author[1;Inventory — Kep1er;https://cdn.discordapp.com/attachments/953097417295790121/957395333686624286/JJU_inventory.png]

$title[1;\`$getGlobalUserVar[KPXT_1_WD_RARITY]\` $getGlobalUserVar[KPXT_1_WD_THEME]]

$description[1;To avoid flooding issues, cards you don't own won't appear in your inventory.]

$if[$getGlobalUserVar[KPXT_1_WD]>=1]
$addField[1;<:JJU_kep1er:963568499215708190> $getGlobalUserVar[KPXT_1_WD_IDOL];Copies: \`$getGlobalUserVar[KPXT_1_WD]\`
Code: \`KPXT_1_WD\`;yes]
$endif
$if[$getGlobalUserVar[KPMS_1_WD]>=1]
$addField[1;<:JJU_kep1er:963568499215708190> $getGlobalUserVar[KPMS_1_WD_IDOL];Copies: \`$getGlobalUserVar[KPMS_1_WD]\`
Code: \`KPMS_1_WD\`;yes]
$endif
$if[$getGlobalUserVar[KPCH_1_WD]>=1]
$addField[1;<:JJU_kep1er:963568499215708190> $getGlobalUserVar[KPCH_1_WD_IDOL];Copies: \`$getGlobalUserVar[KPCH_1_WD]\`
Code: \`KPCH_1_WD\`;yes]
$endif
$if[$getGlobalUserVar[KPDY_1_WD]>=1]
$addField[1;<:JJU_kep1er:963568499215708190> $getGlobalUserVar[KPDY_1_WD_IDOL];Copies: \`$getGlobalUserVar[KPDY_1_WD]\`
Code: \`KPDY_1_WD\`;yes]
$endif
$if[$getGlobalUserVar[KPHB_1_WD]>=1]
$addField[1;<:JJU_kep1er:963568499215708190> $getGlobalUserVar[KPHB_1_WD_IDOL];Copies: \`$getGlobalUserVar[KPHB_1_WD]\`
Code: \`KPHB_1_WD\`;yes]
$endif
$if[$getGlobalUserVar[KPHK_1_WD]>=1]
$addField[1;<:JJU_kep1er:963568499215708190> $getGlobalUserVar[KPHK_1_WD_IDOL];Copies: \`$getGlobalUserVar[KPHK_1_WD]\`
Code: \`KPHK_1_WD\`;yes]
$endif
$if[$getGlobalUserVar[KPYE_1_WD]>=1]
$addField[1;<:JJU_kep1er:963568499215708190> $getGlobalUserVar[KPYE_1_WD_IDOL];Copies: \`$getGlobalUserVar[KPYE_1_WD]\`
Code: \`KPYE_1_WD\`;yes]
$endif
$if[$getGlobalUserVar[KPYS_1_WD]>=1]
$addField[1;<:JJU_kep1er:963568499215708190> $getGlobalUserVar[KPYS_1_WD_IDOL];Copies: \`$getGlobalUserVar[KPYS_1_WD]\`
Code: \`KPYS_1_WD\`;yes]
$endif

$color[1;3af4cb]
$thumbnail[1;$userAvatar[$mentioned[1]]]
$footer[1;$userTag • Page 1/1;https://cdn.discordapp.com/attachments/953097417295790121/957032974073860096/JJU_clock.png]
$addTimestamp[1]`
}
