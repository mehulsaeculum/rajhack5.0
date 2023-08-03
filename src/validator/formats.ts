export default {
	alphanumeric: /^([a-zA-Z0-9])*$/,
	bearerToken: /Bearer\s[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/,
	numberOnly: /^[0-9]+$/,
	mixNumberOnly: /^-?[0-9]+$/,
	decimalNumbers: /^[0-9]+\.?[0-9]*$/,
	dateTime: /^\d{4}-\d{2}-\d{2} (\d{2}):(\d{2}):(\d{2})$/,
	email: /^.+@([^.]+\.)+(\w{2,3})$/,
	month: /^([1-9]|1[0-2])$/,
	noWhiteSpaceAsFirstChar: /^\S.*/,
	passwordValidation: /(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).*$/
};
