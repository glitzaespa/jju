module.exports = {
  name: "inv txt - cant you see me",
    aliases:["inv txt - cy","inv txt - cysm","inv txt - ca"],
  $if: "v4",
  code:`

$author[1;Inventory — TXT;https://cdn.discordapp.com/attachments/953097417295790121/957395333686624286/JJU_inventory.png]

$title[1;\`$getGlobalUserVar[TXYJ_2_CY_RARITY]\` $getGlobalUserVar[TXYJ_2_CY_THEME]]

$addField[1;<:JJU_txt:959555876937695233> $getGlobalUserVar[TXYJ_2_CY_IDOL];Copies: \`$getGlobalUserVar[TXYJ_2_CY]\`
Code: \`TXYJ_2_CY\`;yes]
$addField[1;<:JJU_txt:959555876937695233> $getGlobalUserVar[TXSB_2_CY_IDOL];Copies: \`$getGlobalUserVar[TXSB_2_CY]\`
Code: \`TXSB_2_CY\`;yes]
$addField[1;<:JJU_txt:959555876937695233> $getGlobalUserVar[TXBG_2_CY_IDOL];Copies: \`$getGlobalUserVar[TXBG_2_CY]\`
Code: \`TXBG_2_CY\`;yes]
$addField[1;<:JJU_txt:959555876937695233> $getGlobalUserVar[TXTH_2_CY_IDOL];Copies: \`$getGlobalUserVar[TXTH_2_CY]\`
Code: \`TXTH_2_CY\`;yes]
$addField[1;<:JJU_txt:959555876937695233> $getGlobalUserVar[TXHK_2_CY_IDOL];Copies: \`$getGlobalUserVar[TXHK_2_CY]\`
Code: \`TXHK_2_CY\`;yes]

$color[1;3af4cb]
$thumbnail[1;$userAvatar[$mentioned[1]]]
$footer[1;$userTag • Page 1/1;https://cdn.discordapp.com/attachments/953097417295790121/957032974073860096/JJU_clock.png]
$addTimestamp[1]`
}
