module.exports = [({
  name: "prefix",
  code: `$setServerVar[PREFIX;$message[1]]
$description[1;Prefix set to \`$message[1]\`.]
$onlyPerms[admin;Only administrators can use this command.]`
})]
