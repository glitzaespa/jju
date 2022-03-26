module.exports = ({
  name: "set group",
  code:  `$author[1;Profile — Set Ult Group;https://cdn.discordapp.com/attachments/953097417295790121/957388404251828294/JJU_search.png]

      $description[1;$getGlobalUserVar[$message[1]] has been set as your ultimate artist.]

      $setGlobalUserVar[FAV_GROUP;$message[1]]
  
$color[1;3af4cb]
$thumbnail[1;$authorAvatar]
$footer[1;$userTag;https://cdn.discordapp.com/attachments/953097417295790121/957032974073860096/JJU_clock.png]
$addTimestamp[1]

    $onlyIf[$checkContains[$message[1];default;nmixx;enhypen;blackpink]==true;{newEmbed:{field:List of available groups:\`\`\`default, nmixx, enhypen, blackpink\`\`\`} {description:You haven't entered a valid artist to the command. Here's a list of the available groups in the bot.} {footer:$userTag:$authorAvatar} {timestamp} {color:2b7ced}}]

      $argsCheck[1;{newEmbed:{field:List of available groups:\`\`\`default, nmixx, enhypen, blackpink\`\`\`}}]

  $suppressErrors[{newEmbed:{field:List of available groups:\`\`\`default, nmixx, enhypen, blackpink\`\`\`} {description:You haven't entered a valid artist to the command. Here's a list of the available groups in the bot.} {footer:$userTag:$authorAvatar} {timestamp} {color:2b7ced}}]`
  })
