module.exports = {
  name: "cooldown booster",
  aliases: ['cd boost','cd b'],
  code:`

$author[1;Booster Cooldown;https://cdn.discordapp.com/attachments/953097417295790121/957041663908384798/JJU_clock2.png]

$addField[1;Booster Drop ; $if[$get[dropboost]>0;<:JJU_close:957039430978392135> $parseDate[$get[dropboost];time];<:JJU_tick:957039430705741845> Cooldown done!];yes]
$let[dropboost;$getCooldownTime[10m;globalUser;drop booster;$authorID;yes]]

$color[1;3af4cb]
$thumbnail[1;$authorAvatar]
$footer[1;$userTag;https://cdn.discordapp.com/attachments/953097417295790121/957032974073860096/JJU_clock.png]
$addTimestamp[1]

$reply[$messageID;yes]

$onlyIf[$hasRoles[946957937547554907;$authorID;964032687851601963]==true;<@$authorID>, this command is only for support server boosters!]`
}
