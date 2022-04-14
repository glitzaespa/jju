module.exports = {
  name: "inv taeyeon - stage card",
    aliases:["inv ty - sc","inv ty - st","inv taeyeon - sc"],
  $if: "v4",
  code:`

$author[1;Inventory — TAEYEON;https://cdn.discordapp.com/attachments/953097417295790121/957395333686624286/JJU_inventory.png]

$title[1;\`$getGlobalUserVar[SOTY_3_SC_RARITY]\` $getGlobalUserVar[SOTY_3_SC_THEME]]

$description[1;To avoid flooding issues, cards you don't own won't appear in your inventory.]

$if[$getGlobalUserVar[SOTY_3_SC]>=1]
$addField[1;<:JJU_taeyeon:963562584555008031> $getGlobalUserVar[SOTY_3_SC_IDOL];Copies: \`$getGlobalUserVar[SOTY_3_SC]\`
Code: \`SOTY_3_SC\`;yes]
$endif

$color[1;3af4cb]
$thumbnail[1;$userAvatar[$mentioned[1]]]
$footer[1;$userTag • Page 1/1;https://cdn.discordapp.com/attachments/953097417295790121/957032974073860096/JJU_clock.png]
$addTimestamp[1]`
}
