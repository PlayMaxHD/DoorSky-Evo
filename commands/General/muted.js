module.exports = ({
name: "kkalwaysExecute",
code: `$deletecommand
$onlyIf[$getUserVar[mute]==;]`
})