export const defaultFieldOptions = {
	valid: true,
	checkOnInit: false,
	validateOnChange: true,
	stopAtFirstError: false,
	isOptional: false
};

export function isField(field) {
	const keys = Object.keys(field);
	return ['name', 'value', 'valid', 'invalid', 'errors'].every((key) => keys.includes(key));
}
