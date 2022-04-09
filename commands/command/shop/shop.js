module.exports = [({
  name: "shop",
  code: `$author[1;Shop;https://cdn.discordapp.com/attachments/946791137165836361/962364008051146803/JJU_shop2.png]

  $description[1;Use the command along with a shop tag to continue with your purchase!]

  $addField[1;New;\`nw\` Brand new items in the shop!;yes]  
  $addField[1;Packs;\`pc\` Buy cards in bulk for a special price!;yes]  

    $addField[1;Example;\`\`\`!shop [code]\`\`\`]
    $footer[1;$userTag;https://cdn.discordapp.com/attachments/946791137165836361/962362551797162084/JJU_clock.png]

  $addTimestamp[1]
  
  $color[1;3af4cb]
  
  $thumbnail[1;$authorAvatar]

$reply[$messageID;yes]`
})]
