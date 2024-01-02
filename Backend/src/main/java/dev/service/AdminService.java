package dev.service;

import dev.domain.Admin;
import dev.domain.User;
import dev.repository.AdminRepository;
import dev.repository.UserRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class AdminService {

    private final AdminRepository adminRepository;

    public AdminService(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    public Admin createAdmin(Admin admin) throws SQLException {
        return adminRepository.create(admin);
    }

    public void deleteById(int id) throws SQLException {
        adminRepository.deleteById(id);
    }
}

