module.exports ={
  name: "summon",
  $if: "v4",
  aliases:["s","su","sum"],
  code:`$if[$randomText[success;fail;fail;fail;fail;fail;fail;fail;fail;fail]==success]

$author[1;Summon;https://cdn.discordapp.com/attachments/946791137165836361/947615222951198800/greendrop.png]
$addField[1;Code;\`\`\`$message\`\`\`;yes]
$addField[1;Global Copies;\`\`\`$getGlobalUserVar[$message_OWNER]\`\`\`;yes]
$addField[1;Rarity;\`\`\`$getGlobalUserVar[$message_RARITY]\`\`\`;yes]
$addField[1;Theme;\`\`\`$getGlobalUserVar[$message_THEME]\`\`\`;yes]
$addField[1;Idol;\`\`\`$getGlobalUserVar[$message_IDOL]\`\`\`;yes]
$image[1;$getGlobalUserVar[$message_IMAGE]]
$footer[1;Try again in 10 minutes!]
$thumbnail[1;$authorAvatar]

$description[1;You have succesfully summoned your chosen card.]

$setGlobalUserVar[$message;$sum[$getGlobalUserVar[$message];1]]
$setVar[$message_OWNER;$sum[$getVar[$message_OWNER];1]]

$color[1;#21c24c]

$wait[1s]

$else

$author[1;Summon;https://cdn.discordapp.com/attachments/946791137165836361/947615223664222288/reddrop.png]
$addField[1;Code;\`\`\`$randomText[ENHS_2_DA;ENJY_2_DA;ENJK_2_DA;ENSH_2_DA;ENSN_2_DA;ENJW_2_DA;ENNK_2_DA;BPJS_2_HY;BPJN_2_HY;BPRS_2_HY;BPLS_2_HY;RVIR_2_R2;RVSG_2_R2;RVWD_2_R2;RVJY_2_R2;RVYR_2_R2;TXYJ_2_CY;TXBG_2_CY;TXHK_2_CY;TXSB_2_CY;TXTH_2_CY]\`\`\`;yes]
$addField[1;Global Copies;\`\`\`$getGlobalUserVar[$randomText[ENHS_2_DA;ENJY_2_DA;ENJK_2_DA;ENSH_2_DA;ENSN_2_DA;ENJW_2_DA;ENNK_2_DA;BPJS_2_HY;BPJN_2_HY;BPRS_2_HY;BPLS_2_HY;RVIR_2_R2;RVSG_2_R2;RVWD_2_R2;RVJY_2_R2;RVYR_2_R2;TXYJ_2_CY;TXBG_2_CY;TXHK_2_CY;TXSB_2_CY;TXTH_2_CY]_OWNER]\`\`\`;yes]
$addField[1;Rarity;\`\`\`$getGlobalUserVar[$randomText[ENHS_2_DA;ENJY_2_DA;ENJK_2_DA;ENSH_2_DA;ENSN_2_DA;ENJW_2_DA;ENNK_2_DA]_RARITY]\`\`\`;yes]
$addField[1;Theme;\`\`\`$getGlobalUserVar[$randomText[ENHS_2_DA;ENJY_2_DA;ENJK_2_DA;ENSH_2_DA;ENSN_2_DA;ENJW_2_DA;ENNK_2_DA;BPJS_2_HY;BPJN_2_HY;BPRS_2_HY;BPLS_2_HY;RVIR_2_R2;RVSG_2_R2;RVWD_2_R2;RVJY_2_R2;RVYR_2_R2;TXYJ_2_CY;TXBG_2_CY;TXHK_2_CY;TXSB_2_CY;TXTH_2_CY]_THEME]\`\`\`;yes]
$addField[1;Idol;\`\`\`$getGlobalUserVar[$randomText[ENHS_2_DA;ENJY_2_DA;ENJK_2_DA;ENSH_2_DA;ENSN_2_DA;ENJW_2_DA;ENNK_2_DA;BPJS_2_HY;BPJN_2_HY;BPRS_2_HY;BPLS_2_HY;RVIR_2_R2;RVSG_2_R2;RVWD_2_R2;RVJY_2_R2;RVYR_2_R2;TXYJ_2_CY;TXBG_2_CY;TXHK_2_CY;TXSB_2_CY;TXTH_2_CY]_IDOL]\`\`\`;yes]
$image[1;$getGlobalUserVar[$randomText[ENHS_2_DA;ENJY_2_DA;ENJK_2_DA;ENSH_2_DA;ENSN_2_DA;ENJW_2_DA;ENNK_2_DA;BPJS_2_HY;BPJN_2_HY;BPRS_2_HY;BPLS_2_HY;RVIR_2_R2;RVSG_2_R2;RVWD_2_R2;RVJY_2_R2;RVYR_2_R2;TXYJ_2_CY;TXBG_2_CY;TXHK_2_CY;TXSB_2_CY;TXTH_2_CY]_IMAGE]]
$footer[1;Try again in 10 minutes!]
$thumbnail[1;$authorAvatar]
$description[1;You have failed summoning your chosen card.]

$setGlobalUserVar[$randomText[ENHS_2_DA;ENJY_2_DA;ENJK_2_DA;ENSH_2_DA;ENSN_2_DA;ENJW_2_DA;ENNK_2_DA;BPJS_2_HY;BPJN_2_HY;BPRS_2_HY;BPLS_2_HY;RVIR_2_R2;RVSG_2_R2;RVWD_2_R2;RVJY_2_R2;RVYR_2_R2;TXYJ_2_CY;TXBG_2_CY;TXHK_2_CY;TXSB_2_CY;TXTH_2_CY];$sum[$getGlobalUserVar[$randomText[ENHS_2_DA;ENJY_2_DA;ENJK_2_DA;ENSH_2_DA;ENSN_2_DA;ENJW_2_DA;ENNK_2_DA;BPJS_2_HY;BPJN_2_HY;BPRS_2_HY;BPLS_2_HY;RVIR_2_R2;RVSG_2_R2;RVWD_2_R2;RVJY_2_R2;RVYR_2_R2;TXYJ_2_CY;TXBG_2_CY;TXHK_2_CY;TXSB_2_CY;TXTH_2_CY]];1]]
$setVar[$randomText[ENHS_2_DA;ENJY_2_DA;ENJK_2_DA;ENSH_2_DA;ENSN_2_DA;ENJW_2_DA;ENNK_2_DA;BPJS_2_HY;BPJN_2_HY;BPRS_2_HY;BPLS_2_HY;RVIR_2_R2;RVSG_2_R2;RVWD_2_R2;RVJY_2_R2;RVYR_2_R2;TXYJ_2_CY;TXBG_2_CY;TXHK_2_CY;TXSB_2_CY;TXTH_2_CY]_OWNER;$sum[$getVar[$randomText[ENHS_2_DA;ENJY_2_DA;ENJK_2_DA;ENSH_2_DA;ENSN_2_DA;ENJW_2_DA;ENNK_2_DA;BPJS_2_HY;BPJN_2_HY;BPRS_2_HY;BPLS_2_HY;RVIR_2_R2;RVSG_2_R2;RVWD_2_R2;RVJY_2_R2;RVYR_2_R2;TXYJ_2_CY;TXBG_2_CY;TXHK_2_CY;TXSB_2_CY;TXTH_2_CY]_OWNER];1]]

$color[1;#e82c2c]

$wait[1s]

$endif

$globalCooldown[1h;<@$authorID>, you're on cooldown! Please try again in \`%time%\`.]

$onlyIf[$checkContains[$getGlobalUserVar[$message_RARITY];★★☆;★☆☆]==true;You can't summon stage or event cards!]

$reply[$messageID;yes]

$suppressErrors

`
}
