let url = new RegExp(/(https?:\/\/)(\S+\.)+\S+(\/\S*)*(\.\S+)\/?\S*/, 'g', 'i');
let email = new RegExp(/[A-z](\w+[\.\-]\w+)+\@\w{2,255}\.\w+/, 'g', 'i');
function isURL(str) {
	if (str.match(url) == str)
		return true;
	else return false;
}
function isEmail(str) {
	if (str.match(email) == str)
		return true;
	else return false;
};