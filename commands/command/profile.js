module.exports ={
  name: "profile",
  aliases:["p","pr"],
  code:`$addField[1;Ult Artist;> $getGlobalUserVar[$getGlobalUserVar[FAV_GROUP;$mentioned[1]];$mentioned[1]]]
$addField[1;Banner;> $getGlobalUserVar[$getGlobalUserVar[BANNER;$mentioned[1]];$mentioned[1]]]
$image[1;$getGlobalUserVar[$getGlobalUserVar[BANNER;$mentioned[1]]_IMAGE;$mentioned[1]]]
$wait[1s]
$title[1;$username[$mentioned[1]]'s profile]

$color[1;3af4cb]
$thumbnail[1;$userAvatar[$mentioned[1]]]
$footer[1;$userTag;https://cdn.discordapp.com/attachments/953097417295790121/957032974073860096/JJU_clock.png]
$addTimestamp[1]

$reply[$messageID;yes]`
}
