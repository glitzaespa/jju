module.exports = [({
  name: "sell diamond",
  $if: "v4",
  code: `
$if[$getGlobalUserVar[$message_RARITY]==★☆☆]
$description[1;You sold $getGlobalUserVar[$message_NAME] for <:JJU_diamond:962386919969390684> \`x$randomText[0.1;0.2;0.3;0.4;0.5]\`.]

$setGlobalUserVar[DIAMOND;$sum[$getGlobalUserVar[DIAMOND];$randomText[0.1;0.2;0.3;0.4;0.5]]]
$setGlobalUserVar[$message;$sub[$getGlobalUserVar[$message];1]]
$setVar[$message_OWNER;$sub[$getVar[$message_OWNER];1]]
$elseif[$getGlobalUserVar[$message_RARITY]==★★☆]

$description[1;You sold $getGlobalUserVar[$message_NAME] for <:JJU_diamond:962386919969390684> \`x$randomText[1;2;3;4;5]\`.]

$setGlobalUserVar[DIAMOND;$sum[$getGlobalUserVar[DIAMOND];$randomText[1;2;3;4;5]]]
$setGlobalUserVar[$message;$sub[$getGlobalUserVar[$message];1]]
$setVar[$message_OWNER;$sub[$getVar[$message_OWNER];1]]

$endelseif
$elseif[$getGlobalUserVar[$message_RARITY]==★★★]
$description[1;You sold $getGlobalUserVar[$message_NAME] for <:JJU_diamond:962386919969390684> \`x$randomText[10;20;30;40;50]\`.]

$setGlobalUserVar[DIAMOND;$sum[$getGlobalUserVar[DIAMOND];$randomText[10;20;30;40;50]]]
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