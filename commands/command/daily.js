module.exports ={
  name: "daily",
  $if: "v4",
  aliases:["at","attend","attendance"],
  code: `$author[1;Daily Attendance;https://cdn.discordapp.com/attachments/953097417295790121/957032248652230767/JJU_calendar.png]
$color[1;3af4cb]
$thumbnail[1;$authorAvatar]
$footer[1;$userTag;https://cdn.discordapp.com/attachments/953097417295790121/957032974073860096/JJU_clock.png]
$addTimestamp[1]
$if[$toLocaleUppercase[$day]==Monday]
$description[1;Welcome back, today is $toLocaleUppercase[$day]!]
$addField[1;Rewards;x3 \`★☆☆\` Cards]
$elseif[$toLocaleUppercase[$day]==Tuesday]
$description[1;Welcome back, today is $toLocaleUppercase[$day]!]
$addField[1;Rewards;x5,000 \`🌰\` Chestnut]
$setGlobalUserVar[CHESTNUT;$sum[$getGlobalUserVar[CHESTNUT];5000]]
$endelseif
$elseif[$toLocaleUppercase[$day]==Wednesday]
$description[1;Welcome back, today is $toLocaleUppercase[$day]!]
$addField[1;Rewards;x1 \`★★☆\` Card]
$endelseif
$elseif[$toLocaleUppercase[$day]==Thursday]
$description[1;Welcome back, today is $toLocaleUppercase[$day]!]
$addField[1;Rewards;x10 \`🎫\` Trivia Ticket]
$setGlobalUserVar[TRIVIA_TICKET;$sum[$getGlobalUserVar[TRIVIA_TICKET];10]]
$endelseif
$elseif[$toLocaleUppercase[$day]==Friday]
$description[1;Welcome back, today is $toLocaleUppercase[$day]! You got a special Gift Box I!]
$addField[1;Rewards;x3 \`★★☆\` Cards
x7,500 \`🌰\` Chestnut]
$setGlobalUserVar[CHESTNUT;$sum[$getGlobalUserVar[CHESTNUT];7500]]
$endelseif
$elseif[$toLocaleUppercase[$day]==Saturday]
$description[1;It's Saturday! Enjoy your weekend and this special Gift Box II!]
$addField[1;Rewards;x1 \`★★★\` Cards
x2 \`★★☆\` Cards
x9,000 \`🌰\` Chestnut]
$setGlobalUserVar[CHESTNUT;$sum[$getGlobalUserVar[CHESTNUT];9000]]
$endelseif
$elseif[$toLocaleUppercase[$day]==Sunday]
$description[1;It's Sunday! Enjoy your weekend and this special Gift Box III!]
$addField[1;Rewards;x2 \`★★★\` Cards
x1 \`★★☆\` Cards
x10,000 \`🌰\` Chestnut]
$setGlobalUserVar[CHESTNUT;$sum[$getGlobalUserVar[CHESTNUT];10000]]
$endelseif
$endif
$image[1;$getGlobalUserVar[$toLocaleUppercase[$day]_IMAGE]]

$reply[$messageID;yes]
`
}