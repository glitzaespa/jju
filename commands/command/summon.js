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

$color[1;#21c24c]

$wait[1s]

$else

$author[1;Summon;https://cdn.discordapp.com/attachments/946791137165836361/947615223664222288/reddrop.png]
$addField[1;Code;\`\`\`$randomText[ENHS_2_DA;ENJY_2_DA;ENJK_2_DA;ENSH_2_DA;ENSN_2_DA;ENJW_2_DA;ENNK_2_DA]\`\`\`;yes]
$addField[1;Global Copies;\`\`\`$getGlobalUserVar[$randomText[ENHS_2_DA;ENJY_2_DA;ENJK_2_DA;ENSH_2_DA;ENSN_2_DA;ENJW_2_DA;ENNK_2_DA]_OWNER]\`\`\`;yes]
$addField[1;Rarity;\`\`\`$getGlobalUserVar[$randomText[ENHS_2_DA;ENJY_2_DA;ENJK_2_DA;ENSH_2_DA;ENSN_2_DA;ENJW_2_DA;ENNK_2_DA]_RARITY]\`\`\`;yes]
$addField[1;Theme;\`\`\`$getGlobalUserVar[$randomText[ENHS_2_DA;ENJY_2_DA;ENJK_2_DA;ENSH_2_DA;ENSN_2_DA;ENJW_2_DA;ENNK_2_DA]_THEME]\`\`\`;yes]
$addField[1;Idol;\`\`\`$getGlobalUserVar[$randomText[ENHS_2_DA;ENJY_2_DA;ENJK_2_DA;ENSH_2_DA;ENSN_2_DA;ENJW_2_DA;ENNK_2_DA]_IDOL]\`\`\`;yes]
$image[1;$getGlobalUserVar[$randomText[ENHS_2_DA;ENJY_2_DA;ENJK_2_DA;ENSH_2_DA;ENSN_2_DA;ENJW_2_DA;ENNK_2_DA]_IMAGE]]
$footer[1;Try again in 10 minutes!]
$thumbnail[1;$authorAvatar]
$description[1;You have failed summoning your chosen card.]

$color[1;#e82c2c]

$wait[1s]

$endif

$globalCooldown[1h;<@$authorID>, you're on cooldown! Please try again in \`%time%\`.]

$onlyIf[$checkContains[$getGlobalUserVar[$message_RARITY];★★☆;★☆☆]==true;You can't summon stage or event cards!]

$reply[$messageID;yes]

$suppressErrors

`
}