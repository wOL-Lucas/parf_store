package parf.api.Entities.Account;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter @NoArgsConstructor @AllArgsConstructor
public class Account {

    private double balance;
    private String accountNumber;

    public Account(String accountNumber) {
        this.accountNumber = accountNumber;
        this.balance = 3000.00;
    }

}
