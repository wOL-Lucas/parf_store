package parf.api.controller.Entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class User {
    private String username;
    private String password;

    public boolean isValid(){
        if(username.equals("admin") && password.equals("admin")){
            return true;
        }
        return false;
    }
}
