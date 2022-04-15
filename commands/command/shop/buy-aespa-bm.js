module.exports = {
  name: "purchase aebmcp",
  code: `$author[1;Purchase;https://cdn.discordapp.com/attachments/946791137165836361/962364008051146803/JJU_shop2.png]

    $footer[1;$userTag;https://cdn.discordapp.com/attachments/946791137165836361/962390336460701726/JJU_clock.png]
    
    $setGlobalUserVar[$getGlobalUserVar[aebmcp2];$sum[$getGlobalUserVar[$getGlobalUserVar[aebmcp2]];1]]
$setGlobalUserVar[$getGlobalUserVar[aebmcp3];$sum[$getGlobalUserVar[$getGlobalUserVar[aebmcp3]];1]]
$setGlobalUserVar[$getGlobalUserVar[aebmcp];$sum[$getGlobalUserVar[$getGlobalUserVar[aebmcp]];1]]
$setGlobalUserVar[DIAMOND;$sub[$getGlobalUserVar[DIAMOND];250]]
$setGlobalUserVar[AE_BM_STATUS;Owned.]
$setGlobalUserVar[aebmcp_PURCHASE;1]

$setVar[$getGlobalUserVar[aebmcp]_OWNER;$sum[$getVar[$getGlobalUserVar[aebmcp]_OWNER];1]]

$setVar[$getGlobalUserVar[aebmcp2]_OWNER;$sum[$getVar[$getGlobalUserVar[aebmcp2]_OWNER];1]]

$setVar[$getGlobalUserVar[aebmcp3]_OWNER;$sum[$getVar[$getGlobalUserVar[aebmcp3]_OWNER];1]]

$addField[1;Inventory Change;\`x1\` $getGlobalUserVar[$getGlobalUserVar[aebmcp2]_NAME] has been added to your inventory.
\`x1\` $getGlobalUserVar[$getGlobalUserVar[aebmcp3]_NAME] has been added to your inventory.
\`x1\` $getGlobalUserVar[$getGlobalUserVar[aebmcp]_NAME] has been added to your inventory.
\`x1\` $getGlobalUserVar[AE_BM] has been added to your inventory.]
    $addField[1;Balance Change;<:JJU_diamond:962386919969390684> \`x250\` have been removed from your balance.]
    
    $setGlobalUserVar[aebmcp;$randomText[AEKR_2_BM;AENN_2_BM;AEGS_2_BM;AEWT_2_BM;AEKR_1_FR;AENN_1_FR;AEGS_1_FR;AEWT_1_FR;AEKR_1_FR;AENN_1_FR;AEGS_1_FR;AEWT_1_FR]]
$setGlobalUserVar[aebmcp2;$randomText[AEKR_2_BM;AENN_2_BM;AEGS_2_BM;AEWT_2_BM;AEKR_1_FR;AENN_1_FR;AEGS_1_FR;AEWT_1_FR;AEKR_1_FR;AEGS_1_FR;AENN_1_FR;AEWT_1_FR]]
$setGlobalUserVar[aebmcp3;$randomText[AENN_2_BM;AEKR_2_BM;AEGS_2_BM;AEWT_2_BM;AEKR_1_FR;AENN_1_FR;AEGS_1_FR;AEWT_1_FR;AEKR_1_FR;AENN_1_FR;AEGS_1_FR;AEWT_1_FR]]
    
  $addTimestamp[1]
  
  $color[1;3af4cb]
  
  $thumbnail[1;$authorAvatar]

$reply[$messageID;yes]

$onlyIf[$getGlobalUserVar[DIAMOND]>=250;{newEmbed:{author:Purchase — Error:https://cdn.discordapp.com/attachments/946791137165836361/962399421759365211/JJU_search.png}
  {description:You don't have enough Diamonds! This item costs <:JJU_diamond:962386919969390684> \`x250\`.}} {footer:$userTag:$authorAvatar} {timestamp} {color:3af4cb}]

$onlyIf[$getGlobalUserVar[aebmcp_PURCHASE]==0;{newEmbed:{author:Purchase — Error:https://cdn.discordapp.com/attachments/946791137165836361/962399421759365211/JJU_search.png}
  {description:You can only buy this item once!}} {footer:$userTag:$authorAvatar} {timestamp} {color:3af4cb}]`
}
