module.exports = {
  name: "purchase aebmcp",
  code: `$author[1;Purchase;https://cdn.discordapp.com/attachments/946791137165836361/962364008051146803/JJU_shop2.png]

    $footer[1;$userTag;https://cdn.discordapp.com/attachments/946791137165836361/962390336460701726/JJU_clock.png]
    
    $setGlobalUserVar[$getGlobalUserVar[twbdrcp2];$sum[$getGlobalUserVar[$getGlobalUserVar[twbdrcp2]];1]]
$setGlobalUserVar[$getGlobalUserVar[twbdrcp3];$sum[$getGlobalUserVar[$getGlobalUserVar[twbdrcp3]];1]]
$setGlobalUserVar[$getGlobalUserVar[twbdrcp];$sum[$getGlobalUserVar[$getGlobalUserVar[twbdrcp]];1]]
$setGlobalUserVar[DIAMOND;$sub[$getGlobalUserVar[DIAMOND];250]]
$setGlobalUserVar[TW_BDR_STATUS;Owned.]
$setGlobalUserVar[twbdrcp_PURCHASE;1]

$setVar[$getGlobalUserVar[twbdrcp]_OWNER;$sum[$getVar[$getGlobalUserVar[twbdrcp]_OWNER];1]]

$setVar[$getGlobalUserVar[twbdrcp2]_OWNER;$sum[$getVar[$getGlobalUserVar[twbdrcp2]_OWNER];1]]

$setVar[$getGlobalUserVar[twbdrcp3]_OWNER;$sum[$getVar[$getGlobalUserVar[twbdrcp3]_OWNER];1]]

$addField[1;Inventory Change;\`x1\` $getGlobalUserVar[$getGlobalUserVar[twbdrcp2]_NAME] has been added to your inventory.
\`x1\` $getGlobalUserVar[$getGlobalUserVar[twbdrcp3]_NAME] has been added to your inventory.
\`x1\` $getGlobalUserVar[$getGlobalUserVar[twbdrcp]_NAME] has been added to your inventory.
\`x1\` $getGlobalUserVar[TW_BDR] has been added to your inventory.]
    $addField[1;Balance Change;<:JJU_diamond:962386919969390684> \`x250\` have been removed from your balance.]
    
    $setGlobalUserVar[twbdrcp;$randomText[AEKR_2_BM;AENN_2_BM;AEGS_2_BM;AEWT_2_BM;AEKR_1_FR;AENN_1_FR;AEGS_1_FR;AEWT_1_FR;AEKR_1_FR;AENN_1_FR;AEGS_1_FR;AEWT_1_FR]]
$setGlobalUserVar[twbdrcp2;$randomText[AEKR_2_BM;AENN_2_BM;AEGS_2_BM;AEWT_2_BM;AEKR_1_FR;AENN_1_FR;AEGS_1_FR;AEWT_1_FR;AEKR_1_FR;AENN_1_FR;AEGS_1_FR;AEWT_1_FR]]
$setGlobalUserVar[twbdrcp3;$randomText[AEKR_2_BM;AENN_2_BM;AEGS_2_BM;AEWT_2_BM;AEKR_1_FR;AENN_1_FR;AEGS_1_FR;AEWT_1_FR;AEKR_1_FR;AENN_1_FR;AEGS_1_FR;AEWT_1_FR]]
    
  $addTimestamp[1]
  
  $color[1;3af4cb]
  
  $thumbnail[1;$authorAvatar]

$reply[$messageID;yes]

$onlyIf[$getGlobalUserVar[DIAMOND]>=250;{newEmbed:{author:Purchase — Error:https://cdn.discordapp.com/attachments/946791137165836361/962399421759365211/JJU_search.png}
  {description:You don't have enough Diamonds! This item costs <:JJU_diamond:962386919969390684> \`x250\`.}} {footer:$userTag:$authorAvatar} {timestamp} {color:3af4cb}]

$onlyIf[$getGlobalUserVar[twbdrcp_PURCHASE]==0;{newEmbed:{author:Purchase — Error:https://cdn.discordapp.com/attachments/946791137165836361/962399421759365211/JJU_search.png}
  {description:You can only buy this item once!}} {footer:$userTag:$authorAvatar} {timestamp} {color:3af4cb}]`
}
