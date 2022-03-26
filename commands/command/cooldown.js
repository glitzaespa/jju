module.exports = {
  name: "cooldown",
  code:`

$author[1;Cooldown;https://cdn.discordapp.com/attachments/953097417295790121/957041663908384798/JJU_clock2.png]
$addField[1;Drop ; $if[$get[drop]>0;<:JJU_close:957039430978392135> $parseDate[$get[drop];time];<:JJU_tick:957039430705741845> Cooldown done!];yes]

$let[drop;$getCooldownTime[10m;globalUser;drop;$authorID;yes]]

$addField[1;Summon ; $if[$get[summon]>0;<:JJU_close:957039430978392135> $parseDate[$get[summon];time];<:JJU_tick:957039430705741845> Cooldown done!];yes]

$let[summon;$getCooldownTime[1h;globalUser;summon;$authorID;yes]]

$addField[1;Hack ; $if[$get[hack]>0;<:JJU_close:957039430978392135> $parseDate[$get[hack];time];<:JJU_tick:957039430705741845> Cooldown done!];yes]

$let[hack;$getCooldownTime[5m;globalUser;hack;$authorID;yes]]

$color[1;3af4cb]
$thumbnail[1;$authorAvatar]
$footer[1;$userTag;https://cdn.discordapp.com/attachments/953097417295790121/957032974073860096/JJU_clock.png]
$addTimestamp[1]

$reply[$messageID;yes]`
}