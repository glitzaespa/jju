module.exports = [({
  name: "sell chestnut",
  $if: "v4",
  code: `
$if[$getGlobalUserVar[$message_RARITY]==★☆☆]
$description[1;You sold $getGlobalUserVar[$message_NAME] for <:JJU_chestnut:962386674174803968> \`x$randomText[10;20;30;40;50]\`.]

$setGlobalUserVar[CHESTNUT;$sum[$getGlobalUserVar[CHESTNUT];$randomText[10;20;30;40;50]]]
$setGlobalUserVar[$message;$sub[$getGlobalUserVar[$message];1]]
$setVar[$message_OWNER;$sub[$getVar[$message_OWNER];1]]
$elseif[$getGlobalUserVar[$message_RARITY]==★★☆]

$description[1;You sold $getGlobalUserVar[$message_NAME] for <:JJU_chestnut:962386674174803968> \`x$randomText[100;200;300;400;500]\`.]

$setGlobalUserVar[CHESTNUT;$sum[$getGlobalUserVar[CHESTNUT];$randomText[100;200;300;400;500]]]
$setGlobalUserVar[$message;$sub[$getGlobalUserVar[$message];1]]
$setVar[$message_OWNER;$sub[$getVar[$message_OWNER];1]]

$endelseif
$elseif[$getGlobalUserVar[$message_RARITY]==★★★]
$description[1;You sold $getGlobalUserVar[$message_NAME] for <:JJU_chestnut:962386674174803968> \`x$randomText[10000;15000;20000;25000;27500]\`.]

$setGlobalUserVar[CHESTNUT;$sum[$getGlobalUserVar[CHESTNUT];$randomText[10000;15000;20000;25000;27500]]]
$setGlobalUserVar[$message;$sub[$getGlobalUserVar[$message];1]]
$setVar[$message_OWNER;$sub[$getVar[$message_OWNER];1]]

$endelseif
$endif

$author[1;Sell Card;https://cdn.discordapp.com/attachments/946801797635375234/962734121648549908/JJU_sell.png]
$color[1;3af4cb]
$thumbnail[1;$userAvatar[$mentioned[1]]]
$footer[1;$userTag;https://cdn.discordapp.com/attachments/953097417295790121/957032974073860096/JJU_clock.png]
$addTimestamp[1]
$reply[$messageID;yes]

$onlyIf[$getGlobalUserVar[$noMentionMessage]>=1;<@$authorID>, you don't own this card.]

$suppressErrors[<@$authorID>, an error happened. Please check your command again.]`
})]