module.exports = {
  name: "inv viviz - beam of prism",
    aliases:["inv vv - be","vi - be","viviz - be"],
  $if: "v4",
  code:`

$author[1;Inventory — VIVIZ;https://cdn.discordapp.com/attachments/953097417295790121/957395333686624286/JJU_inventory.png]

$title[1;\`$getGlobalUserVar[VVEH_2_BO_RARITY]\` $getGlobalUserVar[VVEH_2_BO_THEME]]

$description[1;To avoid flooding issues, cards you don't own won't appear in your inventory.]

$if[$getGlobalUserVar[VVEH_2_BO]>=1]
$addField[1;<:JJU_viviz:963564549666115594> $getGlobalUserVar[VVEH_2_BO_IDOL];Copies: \`$getGlobalUserVar[VVEH_2_BO]\`
Code: \`VVEH_2_BO\`;yes]
$endif
$if[$getGlobalUserVar[VVUJ_2_BO]>=1]
$addField[1;<:JJU_viviz:963564549666115594> $getGlobalUserVar[VVUJ_2_BO_IDOL];Copies: \`$getGlobalUserVar[VVUJ_2_BO]\`
Code: \`VVUJ_2_BO\`;yes]
$endif
$if[$getGlobalUserVar[VVSB_2_BO]>=1]
$addField[1;<:JJU_viviz:963564549666115594> $getGlobalUserVar[VVSB_2_BO_IDOL];Copies: \`$getGlobalUserVar[VVSB_2_BO]\`
Code: \`VVSB_2_BO\`;yes]
$endif

$color[1;3af4cb]
$thumbnail[1;$userAvatar[$mentioned[1]]]
$footer[1;$userTag • Page 1/1;https://cdn.discordapp.com/attachments/953097417295790121/957032974073860096/JJU_clock.png]
$addTimestamp[1]`
}
