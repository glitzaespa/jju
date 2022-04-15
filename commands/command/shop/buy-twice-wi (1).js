module.exports = {
  name: "purchase twwicp",
  code: `$author[1;Purchase;https://cdn.discordapp.com/attachments/946791137165836361/962364008051146803/JJU_shop2.png]

    $footer[1;$userTag;https://cdn.discordapp.com/attachments/946791137165836361/962390336460701726/JJU_clock.png]

$setGlobalUserVar[$getGlobalUserVar[twwicp];$sum[$getGlobalUserVar[$getGlobalUserVar[twwicp]];1]]
$setGlobalUserVar[DIAMOND;$sub[$getGlobalUserVar[DIAMOND];500]]
$setGlobalUserVar[TW_WI_STATUS;Owned.]
$setGlobalUserVar[twwicp_PURCHASE;1]

$setVar[$getGlobalUserVar[twwicp]_OWNER;$sum[$getVar[$getGlobalUserVar[twwicp]_OWNER];1]]

$addField[1;Inventory Change;\`x1\` $getGlobalUserVar[$getGlobalUserVar[twwicp]_NAME]] has been added to your inventory.
\`x1\` $getGlobalUserVar[$getGlobalUserVar[twwicp2]_NAME] has been added to your inventory.
\`x1\` $getGlobalUserVar[$getGlobalUserVar[twwicp3]_NAME] has been added to your inventory.
\`x1\` $getGlobalUserVar[$getGlobalUserVar[TW_WI] has been added to your inventory.]
    $addField[1;Balance Change;<:JJU_diamond:962386919969390684> \`x500\` have been removed from your balance.]
    
    $setGlobalUserVar[twwicp;$randomText[TWNY_2_WI;TWJY_2_WI;TWMM_2_WI;TWSN_2_WI;TWJH_2_WI;TWMN_2_WI;TWDH_2_WI;TWCY_2_WI;TWTY_2_WI;TWNY_1_BDR;TWJY_1_BDR;TWMM_1_BDR;TWSN_1_BDR;TWJH_1_BDR;TWMN_1_BDR;TWDH_1_BDR;TWCY_1_BDR;TWTY_1_BDR;TWNY_1_BDR;TWJY_1_BDR;TWMM_1_BDR;TWSN_1_BDR;TWJH_1_BDR;TWMN_1_BDR;TWDH_1_BDR;TWCY_1_BDR;TWTY_1_BDR]]
$setGlobalUserVar[twwicp2;$randomText[TWNY_2_WI;TWJY_2_WI;TWMM_2_WI;TWSN_2_WI;TWJH_2_WI;TWMN_2_WI;TWDH_2_WI;TWCY_2_WI;TWTY_2_WI;TWNY_1_BDR;TWJY_1_BDR;TWMM_1_BDR;TWSN_1_BDR;TWJH_1_BDR;TWMN_1_BDR;TWDH_1_BDR;TWCY_1_BDR;TWTY_1_BDR;TWNY_1_BDR;TWJY_1_BDR;TWMM_1_BDR;TWSN_1_BDR;TWJH_1_BDR;TWMN_1_BDR;TWDH_1_BDR;TWTY_1_BDR;TWCY_1_BDR]]
$setGlobalUserVar[twwicp3;$randomText[TWNY_2_WI;TWJY_2_WI;TWMM_2_WI;TWSN_2_WI;TWJH_2_WI;TWMN_2_WI;TWDH_2_WI;TWCY_2_WI;TWTY_2_WI;TWNY_1_BDR;TWJY_1_BDR;TWJH_1_BDR;TWSN_1_BDR;TWMM_1_BDR;TWMN_1_BDR;TWDH_1_BDR;TWCY_1_BDR;TWTY_1_BDR;TWNY_1_BDR;TWJY_1_BDR;TWMM_1_BDR;TWSN_1_BDR;TWJH_1_BDR;TWMN_1_BDR;TWDH_1_BDR;TWTY_1_BDR;TWCY_1_BDR]]
    
  $addTimestamp[1]
  
  $color[1;3af4cb]
  
  $thumbnail[1;$authorAvatar]

$reply[$messageID;yes]

$onlyIf[$getGlobalUserVar[DIAMOND]>=500;{newEmbed:{author:Purchase — Error:https://cdn.discordapp.com/attachments/946791137165836361/962399421759365211/JJU_search.png}
  {description:You don't have enough Diamonds! This item costs <:JJU_diamond:962386919969390684> \`x500\`.}} {footer:$userTag:$authorAvatar} {timestamp} {color:3af4cb}]

$onlyIf[$getGlobalUserVar[twwicp_PURCHASE]==0;{newEmbed:{author:Purchase — Error:https://cdn.discordapp.com/attachments/946791137165836361/962399421759365211/JJU_search.png}
  {description:You can only buy this item once!}} {footer:$userTag:$authorAvatar} {timestamp} {color:3af4cb}]`
}
