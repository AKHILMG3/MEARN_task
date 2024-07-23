// class bank
//method

// 1 creatAccount(acno,name,phno,balance)

class Bank{
    CreateAccount ( Acno,name,phno,balace){
        this.bnkAcno= Acno;
        this.bnkname= name;
        this.bnkphno= phno;
        this.bnkbalance= balace;
        console.log("Creat Account sucessfully");
    }
    depostAmount(Amount){
        this.bnkbalance =this.bnkbalance + Amount;
        console.log(`Amount add sucessfully....balance is ${this.bnkbalance}`);
        
    }
    withdrawAccount(Amount){
        if(this.bnkbalance >= Amount){
             this.bnkbalance = this.bnkbalance - Amount;
             console.log( `Amount debited sucessfully...balance is ${this.bnkbalance}`);
           
    }
    else{
        console.log("insufficent Amount");
    }

}
balaceEnqury(){
    this.balace
}

}

b1 = new Bank()
b1.CreateAccount(8847221687749849,'Gokul',7702868705,2000)

b1.depostAmount(500)

b1.withdrawAccount(100)

b1.balaceEnqury()





// 1 create a function for validate account