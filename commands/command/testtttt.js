module.exports = [{
name: "bigtest123",
code: `
ok
$addButton[1;Label1;primary;example1_$authorID]
$addButton[1;Label3;primary;example_$authorID]
`
}, {
 type: "interaction",
 prototype: "button",
 code: `

$interactionReply[example1]

$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
 "embeds" : "{newEmbed:{description:You cannot use this button!}{color:BLUE}}",
 "ephemeral" : true,
 "options" : {
 "interaction" : true
 }
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==example;]
 `
}, {
 type: "interaction",
 prototype: "button",
 code: `

$interactionReply[example3]

$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
 "embeds" : "{newEmbed:{description:You cannot use this button!}{color:BLUE}}",
 "ephemeral" : true,
 "options" : {
 "interaction" : true
 }
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==example1;]`
}]
