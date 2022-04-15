module.exports = [{
name: "name",
code: 
`
ok
$addButton[index;label;style;TEST_$authorID;false]
`
}, {
type: "interaction",
protoType: "button",
code: 
`
$interactionReply[ok hi]

$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{    
   "content" : " ",
    "embeds" : "{newEmbed:{title:Error}{description:❌ You Are not the Author Of this Button}{color:RED}}",
    "ephemeral" : false,
    "options" : {
        "interaction" : true
}

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==TEST;nou]
`
}]  
