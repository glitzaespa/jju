module.exports = {
  name: "inv redvelvet - reve festival day 2",
  $if: "v4",
  code:`

$author[1;Inventory — Red Velvet;https://cdn.discordapp.com/attachments/953097417295790121/957395333686624286/JJU_inventory.png]

$title[1;\`$getGlobalUserVar[RVIR_2_R2_RARITY]\` $getGlobalUserVar[RVIR_2_R2_THEME]]

$description[1;To avoid flooding issues, cards you don't own won't appear in your inventory.]

$if[$getGlobalUserVar[RVYR_2_R2]>=1]
$addField[1;<:JJU_redvelvet:957400721597272115> $getGlobalUserVar[RVYR_2_R2_IDOL];Copies: \`$getGlobalUserVar[RVYR_2_R2]\`
Code: \`RVYR_2_R2\`;yes]
$endif
$if[$getGlobalUserVar[RVJY_2_R2]>=1]
$addField[1;<:JJU_redvelvet:957400721597272115> $getGlobalUserVar[RVJY_2_R2_IDOL];Copies: \`$getGlobalUserVar[RVJY_2_R2]\`
Code: \`RVJY_2_R2\`;yes]
$endif
$if[$getGlobalUserVar[RVWD_2_R2]>=1]
$addField[1;<:JJU_redvelvet:957400721597272115> $getGlobalUserVar[RVWD_2_R2_IDOL];Copies: \`$getGlobalUserVar[RVWD_2_R2]\`
Code: \`RVWD_2_R2\`;yes]
$endif
$if[$getGlobalUserVar[RVSG_2_R2]>=1]
$addField[1;<:JJU_redvelvet:957400721597272115> $getGlobalUserVar[RVSG_2_R2_IDOL];Copies: \`$getGlobalUserVar[RVSG_2_R2]\`
Code: \`RVSG_2_R2\`;yes]
$endif
$if[$getGlobalUserVar[RVIR_2_R2]>=1]
$addField[1;<:JJU_redvelvet:957400721597272115> $getGlobalUserVar[RVIR_2_R2_IDOL];Copies: \`$getGlobalUserVar[RVIR_2_R2]\`
Code: \`RVIR_2_R2\`;yes]
$endif

$color[1;3af4cb]
$thumbnail[1;$userAvatar[$mentioned[1]]]
$footer[1;$userTag • Page 1/1;https://cdn.discordapp.com/attachments/953097417295790121/957032974073860096/JJU_clock.png]
$addTimestamp[1]`
}
