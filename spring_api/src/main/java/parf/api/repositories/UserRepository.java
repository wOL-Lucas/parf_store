package parf.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;
import parf.api.Entities.User.User;

public interface UserRepository extends JpaRepository<User, String> {

    UserDetails findByLogin(String login);
}
