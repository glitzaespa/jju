module.exports = {
  name: "purchase secp",
  code: `$author[1;Purchase;https://cdn.discordapp.com/attachments/946791137165836361/962364008051146803/JJU_shop2.png]
    $footer[1;$userTag;https://cdn.discordapp.com/attachments/946791137165836361/962390336460701726/JJU_clock.png]
$setGlobalUserVar[$getGlobalUserVar[secp];$sum[$getGlobalUserVar[$getGlobalUserVar[secp]];1]]
$setGlobalUserVar[DIAMOND;$sub[$getGlobalUserVar[DIAMOND];5000]]
$setVar[$getGlobalUserVar[secp]_OWNER;$sum[$getVar[$getGlobalUserVar[secp]_OWNER];1]]
$addField[1;Inventory Change;\`x1\` $getGlobalUserVar[$getGlobalUserVar[secp]_NAME] has been added to your inventory.]
    $addField[1;Balance Change;<:JJU_diamond:962386919969390684> \`x5,000\` have been removed from your balance.]
    
    $setGlobalUserVar[secp;$randomText[NMLL_3_TA;NMBA_3_TA;NMHW_3_TA;NMJN_3_TA;NMJW_3_TA;NMKJ_3_TA;NMSY_3_TA;SOCY_2_SM2;SOCY_2_SM3]]
    
  $addTimestamp[1]
  
  $color[1;3af4cb]
  
  $thumbnail[1;$authorAvatar]
$reply[$messageID;yes]
$onlyIf[$getGlobalUserVar[DIAMOND]>=100;{newEmbed:{author:Purchase — Error:https://cdn.discordapp.com/attachments/946791137165836361/962399421759365211/JJU_search.png}
  {description:You don't have enough Diamonds! This item costs <:JJU_diamond:962386919969390684> \`x100\`.}} {footer:$userTag:$authorAvatar} {timestamp} {color:3af4cb}]`
}