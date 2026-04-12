const userInfo = {
    userName : prompt("Welcome to army program, please state your name"),
    userAge : prompt("Please state your age"),
    userGender : prompt("Please state your gender"),
    canJoin () {
        if (this.userGender == "male" && this.userAge > 18 && this.userAge < 40 || this.userGender == "female" && this.userAge > 20 && this.userAge < 40) {
            return "Congratulations, you can join the army"
        } else if (this.userGender == "female" && this.userAge < 20 || this.userGender == "male" && this.userAge < 18) {
            return "Sorry you are too young to join the army"   
        } 
        else{
            return "Sorry you are too old to join the army"
        }
        },
    notifyUser () {
        alert(this.canJoin ())
    }
}

userInfo.notifyUser()