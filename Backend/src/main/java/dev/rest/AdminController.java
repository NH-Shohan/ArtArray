package dev.rest;

import dev.domain.Admin;
import dev.domain.Art;
import dev.domain.User;
import dev.service.AdminService;
import dev.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@RestController
public class AdminController {

    private final AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @PostMapping("/admin/create")
    public String createAdmin(@RequestBody Admin admin) throws SQLException {
        adminService.createAdmin(admin);
        return "Admin created successfully";
    }

    @DeleteMapping("/admin/{id}")
    public String deleteById(@PathVariable int id) throws SQLException {
        adminService.deleteById(id);
        return "Admin deleted successfully";
    }
}