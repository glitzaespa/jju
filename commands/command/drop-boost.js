
module.exports ={
  name: "drop booster",
  aliases:["dr boost","dro boost","d boost"],
  code:`
$author[1;Booster Drop;$getGlobalUserVar[$getGlobalUserVar[$getGlobalUserVar[DROPBOOST]_COLOR]]]
$addField[1;Code;\`\`\`$getGlobalUserVar[DROPBOOST]\`\`\`;yes]
$addField[1;Global Copies;\`\`\`$getVar[$getGlobalUserVar[DROPBOOST]_OWNER]\`\`\`;yes]
$addField[1;Rarity;\`\`\`$getGlobalUserVar[$getGlobalUserVar[DROPBOOST]_RARITY]\`\`\`;yes]
$addField[1;Theme;\`\`\`$getGlobalUserVar[$getGlobalUserVar[DROPBOOST]_THEME]\`\`\`;yes]
$addField[1;Idol;\`\`\`$getGlobalUserVar[$getGlobalUserVar[DROPBOOST]_IDOL]\`\`\`;yes]
$image[1;attachment://drop.png]
$attachment[$getGlobalUserVar[$getGlobalUserVar[DROPBOOST]_IMAGE];drop.png]
$footer[1;Try again in 10 minutes!]
$thumbnail[1;$authorAvatar]
$color[1;$getGlobalUserVar[$getGlobalUserVar[$getGlobalUserVar[DROPBOOST]_COLOR]_CODE]]
$wait[1s]
$setGlobalUserVar[$getGlobalUserVar[DROPBOOST];$sum[$getGlobalUserVar[$getGlobalUserVar[DROPBOOST]];1]]
$setVar[$getGlobalUserVar[DROPBOOST]_OWNER;$sum[$getVar[$getGlobalUserVar[DROPBOOST]_OWNER];1]]
$globalCooldown[10m;<@$authorID>, you're on cooldown! Please try again in \`%time%\`.]
$reply[$messageID;yes]
$setGlobalUserVar[DROPBOOST;$randomText[AENN_2_BM;AEKR_2_BM;AEGS_2_BM;AEWT_2_BM;NMLL_3_TA;NMBA_3_TA;NMHW_3_TA;NMJN_3_TA;NMJW_3_TA;NMKJ_3_TA;NMSY_3_TA;SOCY_2_SM2;SOCY_2_SM3;TWNY_1_BDR;TWJY_1_BDR;TWMM_1_BDR;TWSN_1_BDR;TWJH_1_BDR;TWMN_1_BDR;TWDH_1_BDR;TWCY_1_BDR;TWTY_1_BDR;TWNY_1_BDR;TWJY_1_BDR;TWMM_1_BDR;TWSN_1_BDR;TWJH_1_BDR;TWMN_1_BDR;TWDH_1_BDR;TWCY_1_BDR;TWTY_1_BDR;TWNY_2_WI;TWJY_2_WI;TWMM_2_WI;TWSN_2_WI;TWJH_2_WI;TWMN_2_WI;TWDH_2_WI;TWCY_2_WI;TWTY_2_WI;ENHS_2_DA;ENJY_2_DA;ENJK_2_DA;ENSH_2_DA;ENSN_2_DA;ENJW_2_DA;ENNK_2_DA;BPJS_2_HY;BPJN_2_HY;BPRS_2_HY;BPLS_2_HY;RVIR_2_R2;RVSG_2_R2;RVWD_2_R2;RVJY_2_R2;RVYR_2_R2;TXYJ_2_CY;TXBG_2_CY;TXHK_2_CY;TXSB_2_CY;TXTH_2_CY;ATYH_2_FE;ATWY_2_FE;ATJH_2_FE;ATSN_2_FE;ATMG_2_FE;ATSH_2_FE;ATYS_2_FE;ATHJ_2_FE;AEKR_1_FR;AEWT_1_FR;AEGS_1_FR;AENN_1_FR;NCDRJ_1_GM;NCDMR_1_GM;NCDCL_1_GM;NCDJM_1_GM;NCDHC_1_GM;NCDJN_1_GM;NCDJS_1_GM;AEKR_1_FR;AEWT_1_FR;AEGS_1_FR;AENN_1_FR;NCDRJ_1_GM;NCDMR_1_GM;NCDCL_1_GM;NCDJM_1_GM;NCDHC_1_GM;NCDJN_1_GM;NCDJS_1_GM;AEKR_1_FR;AEWT_1_FR;AEGS_1_FR;AENN_1_FR;NCDRJ_1_GM;NCDMR_1_GM;NCDCL_1_GM;NCDJM_1_GM;NCDHC_1_GM;NCDJN_1_GM;NCDJS_1_GM;AEKR_1_FR;AEWT_1_FR;AEGS_1_FR;AENN_1_FR;NCDRJ_1_GM;NCDMR_1_GM;NCDCL_1_GM;NCDJM_1_GM;NCDHC_1_GM;NCDJN_1_GM;NCDJS_1_GM;SOCY_2_SM1;SOSY_1_GG;SOSY_1_GG;SOEB_1_DR;SOEB_1_DR;SOPJ_1_HC;SOPJ_1_HC;KPXT_1_WD;KPXT_1_WD;KPMS_1_WD;KPMS_1_WD;KPCH_1_WD;KPCH_1_WD;KPDY_1_WD;KPDY_1_WD;KPHB_1_WD;KPHB_1_WD;KPHK_1_WD;KPHK_1_WD;KPYE_1_WD;KPYE_1_WD;KPYS_1_WD;KPYS_1_WD;IVWY_2_LD;IVWY_2_LD;IVGE_2_LD;IVLS_2_LD;IVYJ_2_LD;IVRE_2_LD;VVEH_2_BO;VVUJ_2_BO;VVSB_2_BO;SOSM_1_TA;SOSM_1_TA;SOSM_2_OS]]

$onlyIf[$hasRoles[946957937547554907;$authorID;964032687851601963]==true;<@$authorID>, this command is only for support server boosters!]
`
}
