module.exports = {
  name: "inv nctdream - glitch mode",
  $if: "v4",
  code:`

$author[1;Inventory — NCT Dream;https://cdn.discordapp.com/attachments/953097417295790121/957395333686624286/JJU_inventory.png]

$title[1;\`$getGlobalUserVar[NCDMR_1_GM_RARITY]\` $getGlobalUserVar[NCDMR_1_GM_THEME]]

$description[1;To avoid flooding issues, cards you don't own won't appear in your inventory.]

$if[$getGlobalUserVar[NCDRJ_1_GM]>=1]
$addField[1;<:JJU_nctdream:961726510857875506> $getGlobalUserVar[NCDRJ_1_GM_IDOL];Copies: \`$getGlobalUserVar[NCDRJ_1_GM]\`
Code: \`NCDRJ_1_GM\`;yes]
$endif
$if[$getGlobalUserVar[NCDMR_1_GM]>=1]
$addField[1;<:JJU_nctdream:961726510857875506> $getGlobalUserVar[NCDMR_1_GM_IDOL];Copies: \`$getGlobalUserVar[NCDMR_1_GM]\`
Code: \`NCDMR_1_GM\`;yes]
$endif
$if[$getGlobalUserVar[NCDCL_1_GM]>=1]
$addField[1;<:JJU_nctdream:961726510857875506> $getGlobalUserVar[NCDCL_1_GM_IDOL];Copies: \`$getGlobalUserVar[NCDCL_1_GM]\`
Code: \`NCDCL_1_GM\`;yes]
$endif
$if[$getGlobalUserVar[NCDJM_1_GM]>=1]
$addField[1;<:JJU_nctdream:961726510857875506> $getGlobalUserVar[NCDJM_1_GM_IDOL];Copies: \`$getGlobalUserVar[NCDJM_1_GM]\`
Code: \`NCDJM_1_GM\`;yes]
$endif
$if[$getGlobalUserVar[NCDHC_1_GM]>=1]
$addField[1;<:JJU_nctdream:961726510857875506> $getGlobalUserVar[NCDHC_1_GM_IDOL];Copies: \`$getGlobalUserVar[NCDHC_1_GM]\`
Code: \`NCDHC_1_GM\`;yes]
$endif
$if[$getGlobalUserVar[NCDJN_1_GM]>=1]
$addField[1;<:JJU_nctdream:961726510857875506> $getGlobalUserVar[NCDJN_1_GM_IDOL];Copies: \`$getGlobalUserVar[NCDJN_1_GM]\`
Code: \`NCDJN_1_GM\`;yes]
$endif
$if[$getGlobalUserVar[NCDJS_1_GM]>=1]
$addField[1;<:JJU_nctdream:961726510857875506> $getGlobalUserVar[NCDJS_1_GM_IDOL];Copies: \`$getGlobalUserVar[NCDJS_1_GM]\`
Code: \`NCDJS_1_GM\`;yes]
$endif

$color[1;3af4cb]
$thumbnail[1;$userAvatar[$mentioned[1]]]
$footer[1;$userTag • Page 1/1;https://cdn.discordapp.com/attachments/953097417295790121/957032974073860096/JJU_clock.png]
$addTimestamp[1]`
}
