module.exports ={
  name: "forcedrop",
  aliases:["fd","fdrop","fdr"],
  code:`
$author[1;Force Drop;$getGlobalUserVar[$getGlobalUserVar[$getGlobalUserVar[FORCEDROP]_COLOR]]]
$addField[1;Balance Change;\`🌰\` \`➖\` x1,500]
$addField[1;Code;\`\`\`$getGlobalUserVar[FORCEDROP]\`\`\`;yes]
$addField[1;Global Copies;\`\`\`$getVar[$getGlobalUserVar[FORCEDROP]_OWNER]\`\`\`;yes]
$addField[1;Rarity;\`\`\`$getGlobalUserVar[$getGlobalUserVar[FORCEDROP]_RARITY]\`\`\`;yes]
$addField[1;Theme;\`\`\`$getGlobalUserVar[$getGlobalUserVar[FORCEDROP]_THEME]\`\`\`;yes]
$addField[1;Idol;\`\`\`$getGlobalUserVar[$getGlobalUserVar[FORCEDROP]_IDOL]\`\`\`;yes]
$image[1;attachment://drop.png]
$attachment[$getGlobalUserVar[$getGlobalUserVar[FORCEDROP]_IMAGE];drop.png]
$footer[1;Try again in 1 minute!]
$thumbnail[1;$authorAvatar]
$color[1;$getGlobalUserVar[$getGlobalUserVar[$getGlobalUserVar[FORCEDROP]_COLOR]_CODE]]
$wait[1s]
$setGlobalUserVar[$getGlobalUserVar[FORCEDROP];$sum[$getGlobalUserVar[$getGlobalUserVar[FORCEDROP]];1]]
$setVar[$getGlobalUserVar[FORCEDROP]_OWNER;$sum[$getVar[$getGlobalUserVar[FORCEDROP]_OWNER];1]]
$setGlobalUserVar[CHESTNUT;$sub[$getGlobalUserVar[CHESTNUT];1500]]
$globalCooldown[1m;<@$authorID>, you're on cooldown! Please try again in \`%time%\`.]
$reply[$messageID;yes]
$onlyIf[$getGlobalUserVar[CHESTNUT]>=1500;<@$authorID>, you don't have enough chestnuts to force a drop!]

$setGlobalUserVar[FORCEDROP;$randomText[ENHS_2_DA;ENJY_2_DA;ENJK_2_DA;ENSH_2_DA;ENSN_2_DA;ENJW_2_DA;ENNK_2_DA;BPJS_2_HY;BPJN_2_HY;BPRS_2_HY;BPLS_2_HY;RVIR_2_R2;RVSG_2_R2;RVWD_2_R2;RVJY_2_R2;RVYR_2_R2;TXYJ_2_CY;TXBG_2_CY;TXHK_2_CY;TXSB_2_CY;TXTH_2_CY;ATYH_2_FE;ATWY_2_FE;ATJH_2_FE;ATSN_2_FE;ATMG_2_FE;ATSH_2_FE;ATYS_2_FE;ATHJ_2_FE;AEKR_1_FR;AEWT_1_FR;AEGS_1_FR;AENN_1_FR;NCDRJ_1_GM;NCDMR_1_GM;NCDCL_1_GM;NCDJM_1_GM;NCDHC_1_GM;NCDJN_1_GM;NCDJS_1_GM;AEKR_1_FR;AEWT_1_FR;AEGS_1_FR;AENN_1_FR;NCDRJ_1_GM;NCDMR_1_GM;NCDCL_1_GM;NCDJM_1_GM;NCDHC_1_GM;NCDJN_1_GM;NCDJS_1_GM;AEKR_1_FR;AEWT_1_FR;AEGS_1_FR;AENN_1_FR;NCDRJ_1_GM;NCDMR_1_GM;NCDCL_1_GM;NCDJM_1_GM;NCDHC_1_GM;NCDJN_1_GM;NCDJS_1_GM;AEKR_1_FR;AEWT_1_FR;AEGS_1_FR;AENN_1_FR;NCDRJ_1_GM;NCDMR_1_GM;NCDCL_1_GM;NCDJM_1_GM;NCDHC_1_GM;NCDJN_1_GM;NCDJS_1_GM;SOCY_2_SM1]]
`
}
