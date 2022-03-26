module.exports ={
  name: "profile",
  aliases:["p","pr","user"],
  code:`$addField[1;Ult Artist;> $getGlobalUserVar[$getGlobalUserVar[FAV_GROUP]];yes]
$addField[1;Banner;> $getGlobalUserVar[BANNER;$mentioned[1]
];yes]
$image[1;$getGlobalUserVar[BANNER_IMAGE;$mentioned[1]]]
$wait[1s]
$title[1;$username[$mentioned[1]]'s profile]
$setGlobalUserVar[BANNER_IMAGE;https://media.discordapp.net/attachments/953060221205479434/953103185998934106/enhypen_free_3.png?width=1440&height=403;908525299090722886]
$setGlobalUserVar[BANNER;\`☆☆☆\` **ENHYPEN** Free;908525299090722886]

$color[1;3af4cb]
$thumbnail[1;$userAvatar[$mentioned[1]]]
$footer[1;$userTag;https://cdn.discordapp.com/attachments/953097417295790121/957032974073860096/JJU_clock.png]
$addTimestamp[1]

$reply[$messageID;yes]`
}