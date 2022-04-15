module.exports = ({
  name: "set banner",
  code:  `$author[1;Profile — Set Banner;https://cdn.discordapp.com/attachments/946801797635375234/964314115516551269/JJU_search.png]

      $description[1;$getGlobalUserVar[$message[1]] has been set as your profile banner.]

      $setGlobalUserVar[BANNER;$message[1]]
  
  $thumbnail[1;$authorAvatar]

  $footer[1;$userTag;https://cdn.discordapp.com/attachments/953097417295790121/957032974073860096/JJU_clock.png]

  $addTimestamp[1]
  
  $color[1;#3af4cb]

  $onlyIf[$getGlobalUserVar[$message_STATUS]==Owned.;{newEmbed:{author:Set Banner — Error:https://cdn.discordapp.com/attachments/946801797635375234/964314115516551269/JJU_search.png}
  {description:You don't own this banner! You can only use banners you own.}} {footer:$userTag:$authorAvatar} {timestamp} {color:3af4cb}]

    $suppressErrors[Something has gone wrong... Please try again!]
`
  })
