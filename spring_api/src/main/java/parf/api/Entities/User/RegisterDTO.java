package parf.api.Entities.User;

public record RegisterDTO(String login, String password, UserRole role) {
}
