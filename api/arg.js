process.argv.forEach( (v, i) => console.log(`${i}: ${v}`));

module.exports = function arg()
{
	if(!process.argv[2] || ( (process.argv[2] != '-dev') && (process.argv[2] != '-prod' ) ))
	{
		return '-dev';
	}
	return process.argv[2];
}
