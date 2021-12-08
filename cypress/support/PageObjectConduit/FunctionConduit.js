class FunctionConduit{
    generateRandomPass(){
        var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            var string_length = 8;
            var password = '';
            for (var i = 0; i < string_length; i++) {
                var rnum = Math.floor(Math.random() * chars.length);
                password += chars.substring(rnum, rnum + 1);
            }
            return password;
    }

    createUser(email){

        var finNumero = email.indexOf("@")

        const user = email.slice(0, finNumero)
        return user
    }

}export default FunctionConduit