module.exports = {
  name: "purchase sscp",
  code: `$author[1;Purchase;https://cdn.discordapp.com/attachments/946791137165836361/962364008051146803/JJU_shop2.png]

    $footer[1;$userTag;https://cdn.discordapp.com/attachments/946791137165836361/962390336460701726/JJU_clock.png]

$setGlobalUserVar[$getGlobalUserVar[sscp];$sum[$getGlobalUserVar[$getGlobalUserVar[sscp]];1]]
$setGlobalUserVar[DIAMOND;$sub[$getGlobalUserVar[DIAMOND];500]]

$setVar[$getGlobalUserVar[sscp]_OWNER;$sum[$getVar[$getGlobalUserVar[sscp]_OWNER];1]]

$addField[1;Inventory Change;\`x1\` $getGlobalUserVar[$getGlobalUserVar[sscp]_NAME] has been added to your inventory.]
    $addField[1;Balance Change;<:JJU_diamond:962386919969390684> \`x500\` have been removed from your balance.]
    
    $setGlobalUserVar[sscp;$randomText[BPJS_3_SC;BPJN_3_SC;BPRS_3_SC;BPLS_3_SC;TWNY_3_SC;TWJY_3_SC;TWMM_3_SC;TWSN_3_SC;TWJH_3_SC;TWMN_3_SC;TWDH_3_SC;TWCY_3_SC;TWTY_3_SC;SOTY_3_SC;TBER_3_SC;TBJC_3_SC;TBSY_3_SC;TBHJ_3_SC;TBYH_3_SC;TBKV_3_SC;TBJY_3_SC;TBNW_3_SC;TBQ_3_SC;TBSW_3_SC;TBJH_3_SC]]
    
  $addTimestamp[1]
  
  $color[1;3af4cb]
  
  $thumbnail[1;$authorAvatar]

$reply[$messageID;yes]

$onlyIf[$getGlobalUserVar[DIAMOND]>=500;{newEmbed:{author:Purchase — Error:https://cdn.discordapp.com/attachments/946791137165836361/962399421759365211/JJU_search.png}
  {description:You don't have enough Diamonds! This item costs <:JJU_diamond:962386919969390684> \`x500\`.}} {footer:$userTag:$authorAvatar} {timestamp} {color:3af4cb}]`
}
