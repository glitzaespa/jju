module.exports ={
  name: "questreply",
  type: "awaited",
  $if: "v4",
  code:`

$if[$message==$getGlobalUserVar[$getGlobalUserVar[QUEST_CODE]_ANSWER]]
$setGlobalUserVar[CHESTNUT;$sum[$getGlobalUserVar[CHESTNUT];500]]
$addField[1;Rewards;<:JJU_chestnut:962386674174803968> x500]
$author[1;Quest — Result;https://cdn.discordapp.com/attachments/949848002628038727/956639744912130138/JUYEON_SHADOW.png]
$description[1;Quest has been successful!]
$title[1;Congratulations!]
$color[1;06ff00]
$else
$author[1;Quest Mission — Result;https://cdn.discordapp.com/attachments/949848002628038727/957023760945381486/JUYEON_SHADOW_WRONG.png]
$description[1;Uh oh! You were caught and failed the quest!]
$title[1;Better luck next time!]
$color[1;ff0000]
$endif

$reply[$messageID;yes]
`
}
