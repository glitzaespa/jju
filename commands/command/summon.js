module.exports ={
  name: "summon",
  $if: "v4",
  aliases:["s","su","sum"],
  code:`$if[$randomText[success;fail;fail;fail;fail;fail;fail;fail;fail;fail]==success]

$author[1;Summon;https://cdn.discordapp.com/attachments/946791137165836361/947615222951198800/greendrop.png]
$addField[1;Code;\`\`\`$message\`\`\`;yes]
$addField[1;Global Copies;\`\`\`$getVar[$message_OWNER]\`\`\`;yes]
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
$addField[1;Code;\`\`\`$getGlobalUserVar[SUMMON]\`\`\`;yes]
$addField[1;Global Copies;\`\`\`$getVar[$getGlobalUserVar[SUMMON]_OWNER]\`\`\`;yes]
$addField[1;Rarity;\`\`\`$getGlobalUserVar[$getGlobalUserVar[SUMMON]_RARITY]\`\`\`;yes]
$addField[1;Theme;\`\`\`$getGlobalUserVar[$getGlobalUserVar[SUMMON]_THEME]\`\`\`;yes]
$addField[1;Idol;\`\`\`$getGlobalUserVar[$getGlobalUserVar[SUMMON]_IDOL]\`\`\`;yes]
$image[1;attachment://SUMMON.png]
$attachment[$getGlobalUserVar[$getGlobalUserVar[SUMMON]_IMAGE];SUMMON.png]
$footer[1;Try again in 10 minutes!]
$thumbnail[1;$authorAvatar]
$description[1;You have failed summoning your chosen card.]

$setGlobalUserVar[$getGlobalUserVar[SUMMON];$sum[$getGlobalUserVar[$getGlobalUserVar[SUMMON]];1]]
$setVar[$getGlobalUserVar[SUMMON]_OWNER;$sum[$getVar[$getGlobalUserVar[SUMMON]_OWNER];1]]

$color[1;#e82c2c]

$wait[1s]

$setGlobalUserVar[SUMMON;$randomText[KPYJ_1_WD;KPYJ_1_WD;AENN_2_BM;AEKR_2_BM;AEGS_2_BM;AEWT_2_BM;TWNY_1_BDR;TWJY_1_BDR;TWMM_1_BDR;TWSN_1_BDR;TWJH_1_BDR;TWMN_1_BDR;TWDH_1_BDR;TWCY_1_BDR;TWTY_1_BDR;TWNY_1_BDR;TWJY_1_BDR;TWMM_1_BDR;TWSN_1_BDR;TWJH_1_BDR;TWMN_1_BDR;TWDH_1_BDR;TWCY_1_BDR;TWTY_1_BDR;TWNY_2_WI;TWJY_2_WI;TWMM_2_WI;TWSN_2_WI;TWJH_2_WI;TWMN_2_WI;TWDH_2_WI;TWCY_2_WI;TWTY_2_WI;ENHS_2_DA;ENJY_2_DA;ENJK_2_DA;ENSH_2_DA;ENSN_2_DA;ENJW_2_DA;ENNK_2_DA;BPJS_2_HY;BPJN_2_HY;BPRS_2_HY;BPLS_2_HY;RVIR_2_R2;RVSG_2_R2;RVWD_2_R2;RVJY_2_R2;RVYR_2_R2;TXYJ_2_CY;TXBG_2_CY;TXHK_2_CY;TXSB_2_CY;TXTH_2_CY;ATYH_2_FE;ATWY_2_FE;ATJH_2_FE;ATSN_2_FE;ATMG_2_FE;ATSH_2_FE;ATYS_2_FE;ATHJ_2_FE;AEKR_1_FR;AEWT_1_FR;AEGS_1_FR;AENN_1_FR;NCDRJ_1_GM;NCDMR_1_GM;NCDCL_1_GM;NCDJM_1_GM;NCDHC_1_GM;NCDJN_1_GM;NCDJS_1_GM;AEKR_1_FR;AEWT_1_FR;AEGS_1_FR;AENN_1_FR;NCDRJ_1_GM;NCDMR_1_GM;NCDCL_1_GM;NCDJM_1_GM;NCDHC_1_GM;NCDJN_1_GM;NCDJS_1_GM;AEKR_1_FR;AEWT_1_FR;AEGS_1_FR;AENN_1_FR;NCDRJ_1_GM;NCDMR_1_GM;NCDCL_1_GM;NCDJM_1_GM;NCDHC_1_GM;NCDJN_1_GM;NCDJS_1_GM;AEKR_1_FR;AEWT_1_FR;AEGS_1_FR;AENN_1_FR;NCDRJ_1_GM;NCDMR_1_GM;NCDCL_1_GM;NCDJM_1_GM;NCDHC_1_GM;NCDJN_1_GM;NCDJS_1_GM;SOCY_2_SM1;SOSY_1_GG;SOSY_1_GG;SOEB_1_DR;SOEB_1_DR;SOPJ_1_HC;SOPJ_1_HC;KPXT_1_WD;KPXT_1_WD;KPMS_1_WD;KPMS_1_WD;KPCH_1_WD;KPCH_1_WD;KPDY_1_WD;KPDY_1_WD;KPHB_1_WD;KPHB_1_WD;KPHK_1_WD;KPHK_1_WD;KPYE_1_WD;KPYE_1_WD;KPYS_1_WD;KPYS_1_WD;IVWY_2_LD;IVWY_2_LD;IVGE_2_LD;IVLS_2_LD;IVYJ_2_LD;IVRE_2_LD;VVEH_2_BO;VVUJ_2_BO;VVSB_2_BO;SOSM_1_TA;SOSM_1_TA;SOSM_2_OS]]

$endif

$globalCooldown[1h;<@$authorID>, you're on cooldown! Please try again in \`%time%\`.]

$onlyIf[$checkContains[$getGlobalUserVar[$message_RARITY];★★☆;★☆☆]==true;You can't summon stage or event cards!]

$reply[$messageID;yes]

$suppressErrors

`
}
