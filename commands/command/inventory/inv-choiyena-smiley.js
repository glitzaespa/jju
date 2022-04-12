module.exports = {
  name: "inv choiyena - smiley",
  aliases:["inv cy - sm","cy - smiley","choiyena - sm"],
  $if: "v4",
  code:`
$author[1;Inventory — Choi Yena;https://cdn.discordapp.com/attachments/953097417295790121/957395333686624286/JJU_inventory.png]
$title[1;\`$getGlobalUserVar[SOCY_2_SM1_RARITY]\` SMILEY]
$description[1;To avoid flooding issues, cards you don't own won't appear in your inventory.]

$if[$getGlobalUserVar[SOCY_2_SM1]>=1]
$addField[1;<:JJU_choiyena:961725092679794748> $getGlobalUserVar[SOCY_2_SM1_IDOL];Copies: \`$getGlobalUserVar[SOCY_2_SM1]\`
Code: \`SOCY_2_SM1\`;yes]
$endif

$if[$getGlobalUserVar[SOCY_2_SM2]>=1]
$addField[1;<:JJU_choiyena:961725092679794748> $getGlobalUserVar[SOCY_2_SM2_IDOL];Copies: \`$getGlobalUserVar[SOCY_2_SM2]\`
Code: \`SOCY_2_SM2\`;yes]
$endif

$if[$getGlobalUserVar[SOCY_2_SM3]>=1]
$addField[1;<:JJU_choiyena:961725092679794748> $getGlobalUserVar[SOCY_2_SM3_IDOL];Copies: \`$getGlobalUserVar[SOCY_2_SM3]\`
Code: \`SOCY_2_SM3\`;yes]
$endif

$color[1;3af4cb]
$thumbnail[1;$userAvatar[$mentioned[1]]]
$footer[1;$userTag • Page 1/1;https://cdn.discordapp.com/attachments/953097417295790121/957032974073860096/JJU_clock.png]
$addTimestamp[1]`
}
