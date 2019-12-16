export function formatData(results){

	console.log('from format', JSON.parse(results))

	return results== null ? null : JSON.parse(results)
}