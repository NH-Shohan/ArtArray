package dev.rest;

import dev.domain.User;
import dev.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@RestController
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/users/create")
    public User createUser(@RequestBody User user) throws SQLException {
        return userService.createUser(user);
    }

    @GetMapping("/users")
    public List<User> getAllUsers() throws SQLException {
        return userService.getAllUsers();
    }

    @GetMapping("/users/{id}")
    public Optional<User> getUserById(@PathVariable int id) throws SQLException {
        return userService.getUserById(id);
    }

    @DeleteMapping("/users/{id}")
    public String deleteUserById(@PathVariable int id) throws SQLException {
        userService.deleteUserById(id);
        return "User deleted successfully";
    }

    @GetMapping("/users/count")
    public Integer getUserCount() {
        return userService.getUserCount();
    }
}
