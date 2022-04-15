module.exports = [{
name: "name",
code: 
`
ok
$addButton[1;aaa;2;TEST_$authorID;false]
`
}, {
type: "interaction",
protoType: "button",
code: 
`
$interactionReply[ok hi]

$onlyif[$advancedTextSplit[$interactionData[TEST];_;2]==$interactionData[author.id];{    
   "content" : " ",
    "embeds" : "{newEmbed:{title:Error}{description:❌ You Are not the Author Of this Button}{color:RED}}",
    "ephemeral" : false,
    "options" : {
        "interaction" : true
}

$onlyIf[$advancedTextSplit[$interactionData[TEST];_;1]==TEST;nou]
`
}]  
