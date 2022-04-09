module.exports ={
  name: "hackreply",
  type: "awaited",
  $if: "v4",
  code:`

$if[$message==$getGlobalUserVar[HACK_CODE]]
$setGlobalUserVar[DIAMOND;$sum[$getGlobalUserVar[DIAMOND];10]]
$addField[1;Rewards;<:JJU_diamond:962386919969390684> x10]
$author[1;Hack Mission — Result;https://cdn.discordapp.com/attachments/949848002628038727/956639744912130138/JUYEON_SHADOW.png]
$description[1;Hack has been successful!]
$title[1;Thanks for your help!]
$color[1;06ff00]
$else
$author[1;Hack Mission — Result;https://cdn.discordapp.com/attachments/949848002628038727/957023760945381486/JUYEON_SHADOW_WRONG.png]
$addField[1;Rewards;<:JJU_chestnut:962386674174803968> x100]
$setGlobalUserVar[CHESTNUT;$sum[$getGlobalUserVar[CHESTNUT];100]]
$description[1;Uh oh! You were caught and failed the mission!]
$title[1;Thanks for your help!]
$color[1;ff0000]
$endif

$reply[$messageID;yes]
`
}
