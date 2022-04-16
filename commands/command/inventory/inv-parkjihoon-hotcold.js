module.exports = {
  name: "inv parkjihoon - hot & cold",
  aliases:["inv pj - hc","inv pj - ho","inv parkjihoon - hc"],
  $if: "v4",
  code:`
$author[1;Inventory — Park Jihoon;https://cdn.discordapp.com/attachments/953097417295790121/957395333686624286/JJU_inventory.png]
$title[1;\`$getGlobalUserVar[SOPJ_1_HC_RARITY]\` $getGlobalUserVar[SOPJ_1_HC_THEME]]

$addField[1;<:JJU_parkjihoon:963552650698293318> $getGlobalUserVar[SOPJ_1_HC_IDOL];Copies: \`$getGlobalUserVar[SOPJ_1_HC]\`
Code: \`SOPJ_1_HC\`;yes]

$color[1;3af4cb]
$thumbnail[1;$userAvatar[$mentioned[1]]]
$footer[1;$userTag • Page 1/1;https://cdn.discordapp.com/attachments/953097417295790121/957032974073860096/JJU_clock.png]
$addTimestamp[1]`
}
