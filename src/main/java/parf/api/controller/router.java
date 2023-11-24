package parf.api.controller;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import parf.api.controller.Entities.User;

@RestController
@RequestMapping("/api/v1/")
public class router {

    @AllArgsConstructor @Getter
    private class AuthResponse{
        private String token;
    }

    @Getter
    private class UnauthorizedResponse{
        private String message = "Unauthorized";
    }

    @PostMapping("auth")
    public ResponseEntity<?> auth(@RequestBody User user){
        if(user.isValid()){
            return ResponseEntity.ok(new AuthResponse("token"));
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new UnauthorizedResponse());
    }


}
