module.exports = ({
  name: "view",
  aliases: ['v','search'],
  code:  `$author[1;View Card;https://cdn.discordapp.com/attachments/953097417295790121/957634534810214461/JJU_search.png] $image[1;$getGlobalUserVar[$message_IMAGE]]
  $addField[1;Code;\`\`\`$message\`\`\`;yes]
  $addField[1;Global Copies;\`\`\`$getVar[$message_OWNER]\`\`\`;yes]
  $addField[1;User Copies;\`\`\`$getGlobalUserVar[$message]\`\`\`;yes]
  $addField[1;Card Info;$getGlobalUserVar[$message_NAME]]
  $color[1;#3af4cb]
  
  $onlyIf[$getGlobalUserVar[$message]>=1;{newEmbed:{author:View Card — Error:https://cdn.discordapp.com/attachments/953097417295790121/957634534810214461/JJU_search.png}
  {description:You don't own this card! You can only view cards you own.}} {footer:$userTag:$authorAvatar} {timestamp} {color:3af4cb}]
  
  $suppressErrors`
})
