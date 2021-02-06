module.exports = ({
name: "$alwaysExecute",
code: `$deletecommand
$onlyIf[$getUserVar[mute]==;]`
})