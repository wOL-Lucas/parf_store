package parf.api.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/")
public class router {

    @GetMapping
    public String controller(){
        return "ok";
    }

    @GetMapping("/public")
    public String publicAccess(){
        return "ok";
    }
}
