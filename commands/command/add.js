module.exports = [({
  name: "add",
  code: `$author[1;Add Cards;https://cdn.discordapp.com/attachments/953097417295790121/957634534810214461/JJU_search.png]

$description[1;<@$authorID> added $getGlobalUserVar[$message[2]_NAME] to <@$mentioned[1]>'s inventory.]
    $footer[1;$userTag;https://cdn.discordapp.com/attachments/953097417295790121/957032974073860096/JJU_clock.png]
 $addTimestamp[1]
  
 $color[1;#3af4cb]
  
   $thumbnail[1;$authorAvatar]

$setGlobalUserVar[$noMentionMessage;$sum[$getGlobalUserVar[$noMentionMessage;$mentioned[1]];1];$mentioned[1]]
$setVar[$noMentionMessage_OWNER;$sum[$getVar[$noMentionMessage_OWNER];1]]

$suppressErrors[<@$authorID>, an error happened. Please check your command again.]

$onlyforids[$botownerid;You're not allowed to use this command!]`
})]
