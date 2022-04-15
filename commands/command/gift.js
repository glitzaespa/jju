module.exports = [({
  name: "gift",
  code: `$author[1;Gift;https://cdn.discordapp.com/attachments/946801797635375234/964314115516551269/JJU_search.png]

$description[1;<@$authorID> gifted <@$mentioned[1]> $getGlobalUserVar[$message[2]_NAME].]
    $footer[1;$userTag;https://cdn.discordapp.com/attachments/946801797635375234/964314745115136110/JJU_clock.png]
 $addTimestamp[1]
  
 $color[1;#3af4cb]
  
   $thumbnail[1;$authorAvatar]

$setGlobalUserVar[$noMentionMessage;$sum[$getGlobalUserVar[$noMentionMessage;$mentioned[1]];1];$mentioned[1]]
$setGlobalUserVar[$noMentionMessage;$sub[$getGlobalUserVar[$noMentionMessage];1]]

$onlyIf[$getGlobalUserVar[$noMentionMessage]>=1;<@$authorID>, you don't own this card.]

$onlyIf[$checkContains[$mentioned[1];$authorID]==false;<@$authorID>, you can't gift cards to yourself!]

$suppressErrors[<@$authorID>, an error happened. Please check your command again.]`
})]
