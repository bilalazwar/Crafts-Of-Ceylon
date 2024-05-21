package lk.flavorist.Flavoristidentityservice.controller;

import lk.flavorist.Flavoristidentityservice.data.User;
import lk.flavorist.Flavoristidentityservice.service.JwtService;
import lk.flavorist.Flavoristidentityservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class AuthenticationController {
    @Autowired
    private UserService userService;

    @Autowired
    private JwtService jwtService;

    @PostMapping("/register")
    public User register(@RequestBody User user){

        return userService.createUser(user);
    }

    @PostMapping("/authenticate")
    public String authenticate(@RequestBody User user){

        return userService.authenticate(user);
    }

    @GetMapping("/hello")
    public String hello(){

        return "authenticated";
    }

    // no need log out after some time it will be logged out


}
