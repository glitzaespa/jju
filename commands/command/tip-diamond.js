module.exports = {
  name: "tip diamond",
  $if: "v4",
  code:`$author[1;Tip;https://cdn.discordapp.com/attachments/953097417295790121/957287993868185630/JJU_tip.png]

$description[1;You've tipped <@$mentioned[1]> <:JJU_diamond:962386919969390684> x$message[2].]

$setGlobalUserVar[DIAMOND;$sub[$getGlobalUserVar[DIAMOND];$message[2]]]
$setGlobalUserVar[DIAMOND;$sum[$getGlobalUserVar[DIAMOND;$mentioned[1]];$message[2]];$mentioned[1]]

$color[1;3af4cb]
$thumbnail[1;$userAvatar[$mentioned[1]]]
$footer[1;$userTag;https://cdn.discordapp.com/attachments/953097417295790121/957032974073860096/JJU_clock.png]
$addTimestamp[1]

$onlyIf[$getGlobalUserVar[DIAMOND]>=$message[2];<@$authorID>, you don't have enough chestnuts to tip this amount.]
$onlyIf[$checkContains[$mentioned[1];$authorID]==false;<@$authorID>, you can't give tips to yourself!]
$reply[$messageID;yes]
$suppressErrors`
}
