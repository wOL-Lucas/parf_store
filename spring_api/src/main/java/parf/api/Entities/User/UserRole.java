package parf.api.Entities.User;

public enum UserRole {
    ADMIN("0"),
    USER("1");

    private String role;
    UserRole(String role){
        this.role = role;
    }

    public String getRole(){
        return this.role;
    }

}
