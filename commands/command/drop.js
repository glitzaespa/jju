module.exports ={
  name: "drop",
  aliases:["dr","dro","d"],
  code:`
$author[1;Drop;$getGlobalUserVar[$getGlobalUserVar[$getGlobalUserVar[DROP]_COLOR]]]
$addField[1;Code;\`\`\`$getGlobalUserVar[DROP]\`\`\`;yes]
$addField[1;Global Copies;\`\`\`$getVar[$getGlobalUserVar[DROP]_OWNER]\`\`\`;yes]
$addField[1;Rarity;\`\`\`$getGlobalUserVar[$getGlobalUserVar[DROP]_RARITY]\`\`\`;yes]
$addField[1;Theme;\`\`\`$getGlobalUserVar[$getGlobalUserVar[DROP]_THEME]\`\`\`;yes]
$addField[1;Idol;\`\`\`$getGlobalUserVar[$getGlobalUserVar[DROP]_IDOL]\`\`\`;yes]
$image[1;attachment://drop.png]
$attachment[$getGlobalUserVar[$getGlobalUserVar[DROP]_IMAGE];drop.png]
$footer[1;Try again in 10 minutes!]
$thumbnail[1;$authorAvatar]
$color[1;$getGlobalUserVar[$getGlobalUserVar[$getGlobalUserVar[DROP]_COLOR]_CODE]]
$wait[1s]
$setGlobalUserVar[$getGlobalUserVar[DROP];$sum[$getGlobalUserVar[$getGlobalUserVar[DROP]];1]]
$setVar[$getGlobalUserVar[DROP]_OWNER;$sum[$getVar[$getGlobalUserVar[DROP]_OWNER];1]]
$globalCooldown[10m;<@$authorID>, you're on cooldown! Please try again in \`%time%\`.]
$reply[$messageID;yes]

$setGlobalUserVar[DROP;$randomText[ENHS_2_DA;ENJY_2_DA;ENJK_2_DA;ENSH_2_DA;ENSN_2_DA;ENJW_2_DA;ENNK_2_DA;BPJS_2_HY;BPJN_2_HY;BPRS_2_HY;BPLS_2_HY;RVIR_2_R2;RVSG_2_R2;RVWD_2_R2;RVJY_2_R2;RVYR_2_R2;TXYJ_2_CY;TXBG_2_CY;TXHK_2_CY;TXSB_2_CY;TXTH_2_CY;ATYH_2_FE;ATWY_2_FE;ATJH_2_FE;ATSN_2_FE;ATMG_2_FE;ATSH_2_FE;ATYS_2_FE;ATHJ_2_FE;AEKR_1_FR;AEWT_1_FR;AEGS_1_FR;AENN_1_FR;NCDRJ_1_GM;NCDMR_1_GM;NCDCL_1_GM;NCDJM_1_GM;NCDHC_1_GM;NCDJN_1_GM;NCDJS_1_GM;AEKR_1_FR;AEWT_1_FR;AEGS_1_FR;AENN_1_FR;NCDRJ_1_GM;NCDMR_1_GM;NCDCL_1_GM;NCDJM_1_GM;NCDHC_1_GM;NCDJN_1_GM;NCDJS_1_GM;AEKR_1_FR;AEWT_1_FR;AEGS_1_FR;AENN_1_FR;NCDRJ_1_GM;NCDMR_1_GM;NCDCL_1_GM;NCDJM_1_GM;NCDHC_1_GM;NCDJN_1_GM;NCDJS_1_GM;AEKR_1_FR;AEWT_1_FR;AEGS_1_FR;AENN_1_FR;NCDRJ_1_GM;NCDMR_1_GM;NCDCL_1_GM;NCDJM_1_GM;NCDHC_1_GM;NCDJN_1_GM;NCDJS_1_GM]]
`
}
