package dev.rest;

import dev.domain.User;
import dev.service.LoginService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLException;

@RestController
public class LoginController {

    private final LoginService loginService;

    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }

    @GetMapping("/users/{id}")
    public User getUserById(@PathVariable int id) throws SQLException {
        return loginService.getUserById(id);
    }
}
