module.exports = {
  name: "inv aespa - black mamba",
  aliases:["inv ae - bm","inv ae - bl","inv aespa - bm"],
  $if: "v4",
  code:`

$author[1;Inventory — æspa;https://cdn.discordapp.com/attachments/953097417295790121/957395333686624286/JJU_inventory.png]

$title[1;\`$getGlobalUserVar[AEKR_2_BM_RARITY]\` $getGlobalUserVar[AEKR_2_BM_THEME]]

$description[1;To avoid flooding issues, cards you don't own won't appear in your inventory.]

$if[$getGlobalUserVar[AEKR_2_BM]>=1]
$addField[1;<:JJU_aespa:962084630742327397> $getGlobalUserVar[AEKR_2_BM_IDOL];Copies: \`$getGlobalUserVar[AEKR_2_BM]\`
Code: \`AEKR_2_BM\`;yes]
$endif
$if[$getGlobalUserVar[AEWT_2_BM]>=1]
$addField[1;<:JJU_aespa:962084630742327397> $getGlobalUserVar[AEWT_2_BM_IDOL];Copies: \`$getGlobalUserVar[AEWT_2_BM]\`
Code: \`AEWT_2_BM\`;yes]
$endif
$if[$getGlobalUserVar[AEGS_2_BM]>=1]
$addField[1;<:JJU_aespa:962084630742327397> $getGlobalUserVar[AEGS_2_BM_IDOL];Copies: \`$getGlobalUserVar[AEGS_2_BM]\`
Code: \`AEGS_2_BM\`;yes]
$endif
$if[$getGlobalUserVar[AENN_2_BM]>=1]
$addField[1;<:JJU_aespa:962084630742327397> $getGlobalUserVar[AENN_2_BM_IDOL];Copies: \`$getGlobalUserVar[AENN_2_BM]\`
Code: \`AENN_2_BM\`;yes]
$endif

$color[1;3af4cb]
$thumbnail[1;$userAvatar[$mentioned[1]]]
$footer[1;$userTag • Page 1/1;https://cdn.discordapp.com/attachments/953097417295790121/957032974073860096/JJU_clock.png]
$addTimestamp[1]`
}
